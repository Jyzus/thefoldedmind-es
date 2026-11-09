/* brain.js — atlas modelini yükler (pipeline/step3_label_export.py çıktısı)
   assets/brain.json : parça listesi (bölge, taraf, tür, paket, ofsetler, sınır kutusu)
   paketler          : brain.b64.txt (yüzeyler ve derin yapılar; ek paketler brain.json → packs, şu an yok); gzip + base64.
                       İçerik: konumlar Uint16 (kutuya göre nicemlenmiş), normaller oktahedral Int8x2, üçgen indeksleri
                       Uint16/Uint32, isteğe bağlı köşe öznitelikleri (sulc, ao, net, thk) Uint8. thk: korteks kalınlığı
                       (mm × 40); geometry.userData.thk olarak (mm) verilir, seçili bölgenin gri madde şeridi bununla kurulur.
                       Koordinatlar: hastanın solu +X, üst +Y, ön +Z.
   Paket sürüm 3 (2026-10-13, pipeline/paket_v3.py): aynı değerler, sıkıştırmaya uygun düzende (köşeler Morton sırasında, ardışık
   farklar, bayt düzlemleri, indeksler varint). toGeometry3 bunları çözer; sonuç sürüm 2 ile üçgen üçgen aynıdır. */
window.BrainModel = (function () {
  'use strict';

  // sürüm 3 → sürüm 2 dizileri (q konum Uint16, e normal Int8, indeks, bayt öznitelikleri; köşeler Morton sırasında)
  function unpack3(buf, p) {
    const b = new Uint8Array(buf), n = p.nv, nf = p.nf;
    const q = new Uint16Array(n * 3), e = new Int8Array(n * 2);
    for (let c = 0; c < 3; c++) {
      let acc = 0;
      const lo = p.pos + c * n, hi = p.pos + (3 + c) * n;
      for (let i = 0; i < n; i++) {
        const z = b[lo + i] | (b[hi + i] << 8);
        acc = (acc + ((z >>> 1) ^ -(z & 1))) & 0xffff;
        q[3 * i + c] = acc;
      }
    }
    for (let c = 0; c < 2; c++) {
      let acc = 0;
      const o = p.nrm + c * n;
      for (let i = 0; i < n; i++) { acc = ((acc + ((b[o + i] << 24) >> 24)) << 24) >> 24; e[2 * i + c] = acc; }
    }
    // indeks: üç varint akışı (zigzag); değerler ±2^31 içinde, tek baytlıklar hızlı yoldan
    const idx = p.idx32 ? new Uint32Array(nf * 3) : new Uint16Array(nf * 3);
    let at = p.idx, t0 = 0;
    for (let s = 0; s < 3; s++) {
      for (let i = 0; i < nf; i++) {
        let c = b[at++], v = c & 0x7f;
        if (c & 0x80) {
          let sh = 7;
          do { c = b[at++]; v |= (c & 0x7f) << sh; sh += 7; } while (c & 0x80);
          v >>>= 0;
        }
        const d = (v >>> 1) ^ -(v & 1);
        if (s === 0) { t0 += d; idx[3 * i] = t0; } else idx[3 * i + s] = idx[3 * i] + d;
      }
    }
    if (at !== p.idxEnd) throw new Error('model paketi bozuk: ' + p.id);
    const attr = {};
    ['sulc', 'ao', 'net', 'thk'].forEach((k) => {
      if (p[k] === undefined) return;
      const a = new Uint8Array(n);
      let acc = 0;
      for (let i = 0; i < n; i++) { acc = (acc + b[p[k] + i]) & 255; a[i] = acc; }
      attr[k] = a;
    });
    return { q, e, idx, attr };
  }

  function toGeometry(THREE, buf, p, v3) {
    const u = v3 ? unpack3(buf, p) : null;
    const q = u ? u.q : new Uint16Array(buf, p.pos, p.nv * 3);
    const e = u ? u.e : new Int8Array(buf, p.nrm, p.nv * 2);
    const idx = u ? u.idx : p.idx32 ? new Uint32Array(buf, p.idx, p.nf * 3) : new Uint16Array(buf, p.idx, p.nf * 3);
    const bytes = (k) => (u ? u.attr[k] : p[k] !== undefined ? new Uint8Array(buf, p[k], p.nv) : undefined);
    const pos = new Float32Array(p.nv * 3), nrm = new Float32Array(p.nv * 3);
    const sx = (p.max[0] - p.min[0]) / 65535, sy = (p.max[1] - p.min[1]) / 65535, sz = (p.max[2] - p.min[2]) / 65535;
    for (let i = 0; i < p.nv; i++) {
      pos[3 * i] = p.min[0] + q[3 * i] * sx;
      pos[3 * i + 1] = p.min[1] + q[3 * i + 1] * sy;
      pos[3 * i + 2] = p.min[2] + q[3 * i + 2] * sz;
      let x = e[2 * i] / 127, y = e[2 * i + 1] / 127;
      const z = 1 - Math.abs(x) - Math.abs(y);
      if (z < 0) {
        const ox = x;
        x = (1 - Math.abs(y)) * (x >= 0 ? 1 : -1);
        y = (1 - Math.abs(ox)) * (y >= 0 ? 1 : -1);
      }
      const l = Math.hypot(x, y, z) || 1;
      nrm[3 * i] = x / l; nrm[3 * i + 1] = y / l; nrm[3 * i + 2] = z / l;
    }
    // köşe başına 0–1 öznitelikler: oluk derinliği (0 = derin sulkus), ortam kapatma (0 = kapalı);
    // olmayan parçalarda 1
    const byteAttr = (k, fill) => {
      const a = new Float32Array(p.nv).fill(fill), s = bytes(k);
      if (s) for (let i = 0; i < p.nv; i++) a[i] = s[i] / 255;
      return a;
    };
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
    g.setAttribute('sulc', new THREE.BufferAttribute(byteAttr('sulc', 1), 1));
    g.setAttribute('ao', new THREE.BufferAttribute(byteAttr('ao', 1), 1));
    // korteks: köşe başına ağ (Yeo 2011 yedi ağı 1–7, +8 çoklu talep çekirdeği); olmayan parçalarda 0
    const net = new Float32Array(p.nv);
    const sn = bytes('net');
    if (sn) for (let i = 0; i < p.nv; i++) net[i] = sn[i];
    g.setAttribute('net', new THREE.BufferAttribute(net, 1));
    if (p.thk !== undefined) {     // korteks kalınlığı (mm)
      const s = bytes('thk'), thk = new Float32Array(p.nv);
      for (let i = 0; i < p.nv; i++) thk[i] = s[i] / 40;
      g.userData.thk = thk;
    }
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.computeBoundingSphere();
    g.computeBoundingBox();
    return g;
  }

  let base = 'assets/', meta = null;
  const SURUM = '202611052';       // model paketi değişince artır: /assets/* bir gün önbellekte, eski brain.json yeni pakete denk gelmesin
  const get = (name) => fetch(base + name + '?v=' + SURUM).then((r) => {
    if (!r.ok) throw new Error(name + ' (' + r.status + ')');
    return r;
  });

  // dosyayı okur; onProgress(0–1) indirme ilerlemesini bildirir (boyut brain.json'dan ya da Content-Length'ten)
  async function readText(src, onProgress) {
    const res = await get(src.file);
    const total = src.bytes || Number(res.headers.get('Content-Length')) || 0;
    if (!onProgress || !total || !res.body || !res.body.getReader) return res.text();
    const reader = res.body.getReader(), chunks = [];
    let got = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      got += value.length;
      onProgress(Math.min(1, got / total));
    }
    const all = new Uint8Array(got);
    let at = 0;
    chunks.forEach((c) => { all.set(c, at); at += c.length; });
    return new TextDecoder().decode(all);
  }

  async function readPack(src, onProgress) {
    if (!/base64/.test(src.encoding)) return (await get(src.file)).arrayBuffer();
    const bin = atob((await readText(src, onProgress)).trim());
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    if (!/gzip/.test(src.encoding)) return bytes.buffer;
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    return new Response(stream).arrayBuffer();
  }

  async function loadPack(THREE, pack, onProgress) {
    const src = pack === 'main' ? (meta.data || { file: 'brain.bin', encoding: 'binary' }) : meta.packs[pack];
    const buf = await readPack(src, onProgress);
    return meta.parts.filter((p) => (p.pack || 'main') === pack)
      .map((p) => ({ id: p.id, side: p.side, kind: p.kind, geometry: toGeometry(THREE, buf, p, (meta.version || 2) >= 3) }));
  }

  // ana paket: yüzeyler ve derin yapılar; onProgress(0–1) isteğe bağlı
  async function load(THREE, dir, onProgress) {
    base = dir || base;
    meta = await (await get('brain.json')).json();
    return loadPack(THREE, 'main', onProgress);
  }

  // ek paket (ör. 'vol': korteks bölge hacimleri); load'dan sonra çağrılır, paket yoksa boş liste
  async function loadExtra(THREE, pack) {
    return meta && meta.packs && meta.packs[pack] ? loadPack(THREE, pack) : [];
  }

  return { load, loadExtra };
})();
