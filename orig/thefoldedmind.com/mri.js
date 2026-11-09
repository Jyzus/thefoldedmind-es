/* mri.js — MR kesit görünümünün verisi ve kesit görüntüsü (pipeline/step4_slices.py çıktısı)
   assets/mri.json      : boyutlar, mozaik düzeni, etiket → kimlik listesi (bölgeler ve "_" ile başlayan doku sınıfları)
   assets/mri_t1/t2/pd.jpg: şablonun T1, T2, PD görüntüleri, 8 bit, aksiyel kesit mozaiği (ilk açılışta yalnızca T1)
   assets/mri_labels.png: etiket (1–127; 0 = boş), en üst bit = beyin maskesi
   Hacimler belleğe Uint8Array olarak açılır (i en hızlı: indeks = (k·ny + j)·nx + i; i = MNI x, j = y, k = z).
   Kesitler radyolojik yönde verilir: hastanın sağı ekranın solunda; aksiyelde ön üstte, koronal ve sagittalde üst
   yukarıda, sagittalde ön solda. Ekran için kesit büyütülür: görüntü kübik (Catmull–Rom), etiketler alt-voksel
   düzeyinde (4 × 4 komşunun kübik B-spline ağırlıklarıyla en ağır etiket: her bölgenin yumuşatılmış alanının eşit
   düzey çizgisi) — sınırlar 1 mm'lik merdiven yerine düzgün eğri olarak görünür. Hızlı kipte dört komşu yeter. */
window.MRI = (function () {
  'use strict';
  let meta = null, lab = null, nx = 0, ny = 0, nz = 0, contrast = 't1';
  const vols = {}, pending = {};
  const cent = {};      // bölge kimliği → { all, L, R }: ağırlık merkezleri [i, j, k] (L: x > 0, hastanın solu)

  // görüntü fetch ile alınıp çözülür (model paketleri gibi): kanvas "kirlenmez", piksel okunabilir
  async function loadImage(src) {
    const r = await fetch(src);
    if (!r.ok) throw new Error(src + ' (' + r.status + ')');
    const blob = await r.blob();
    if (window.createImageBitmap) return createImageBitmap(blob);
    return new Promise((res, rej) => {
      const im = new Image(), url = URL.createObjectURL(blob);
      im.onload = () => { URL.revokeObjectURL(url); res(im); };
      im.onerror = () => rej(new Error(src));
      im.src = url;
    });
  }

  // Etiketler tuvalden okunmaz (kullanıcı 2026-10-23, Safari'de parazitli etiketler): Safari'nin parmak izi koruması tuvalden
  // okunan piksellere (getImageData) küçük gürültü katar; görüntüde fark edilmez ama etiket numarasını değiştirir. 8 bit gri PNG
  // burada doğrudan çözülür (IDAT → zlib açma → satır süzgeçleri); destek yoksa eski yola düşer.
  async function decodeGrayPng(src) {
    if (!window.DecompressionStream) return null;
    const r = await fetch(src);
    if (!r.ok) throw new Error(src + ' (' + r.status + ')');
    const b = new Uint8Array(await r.arrayBuffer()), dv = new DataView(b.buffer);
    let W = 0, H = 0, ok = false;
    const parts = [];
    for (let o = 8; o + 8 <= b.length;) {
      const n = dv.getUint32(o), type = String.fromCharCode(b[o + 4], b[o + 5], b[o + 6], b[o + 7]);
      if (type === 'IHDR') { W = dv.getUint32(o + 8); H = dv.getUint32(o + 12); ok = b[o + 16] === 8 && b[o + 17] === 0 && b[o + 20] === 0; }
      else if (type === 'IDAT') parts.push(b.subarray(o + 8, o + 8 + n));
      else if (type === 'IEND') break;
      o += 12 + n;
    }
    if (!ok) return null;                       // yalnızca 8 bit gri, taramasız PNG
    const raw = new Uint8Array(await new Response(new Blob(parts).stream().pipeThrough(new DecompressionStream('deflate'))).arrayBuffer());
    const px = new Uint8Array(W * H);
    for (let y = 0, q = 0; y < H; y++) {
      const f = raw[q++], row = y * W, prev = row - W;
      for (let x = 0; x < W; x++, q++) {
        const a = x ? px[row + x - 1] : 0, u = y ? px[prev + x] : 0, c = x && y ? px[prev + x - 1] : 0;
        let v = raw[q];
        if (f === 1) v += a;
        else if (f === 2) v += u;
        else if (f === 3) v += (a + u) >> 1;
        else if (f === 4) { const p = a + u - c, pa = Math.abs(p - a), pb = Math.abs(p - u), pc = Math.abs(p - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? u : c; }
        px[row + x] = v & 255;
      }
    }
    return { px, W, step: 1 };
  }

  function canvasPixels(im) {
    const c = document.createElement('canvas');
    c.width = im.width; c.height = im.height;
    const g = c.getContext('2d', { willReadFrequently: true });
    g.drawImage(im, 0, 0);
    return { px: g.getImageData(0, 0, im.width, im.height).data, W: im.width, step: 4 };
  }

  function readMosaic(src) {
    const { px, W, step } = src.px ? src : canvasPixels(src), cols = meta.mosaic.cols;
    const vol = new Uint8Array(nx * ny * nz);
    for (let k = 0; k < nz; k++) {
      const r = Math.floor(k / cols), cc = k % cols;
      for (let j = 0; j < ny; j++) {
        const row = (r * ny + j) * W + cc * nx, base = (k * ny + j) * nx;
        for (let i = 0; i < nx; i++) vol[base + i] = px[(row + i) * step];
      }
    }
    return vol;
  }

  let base = 'assets/';
  async function load(dir) {
    base = dir || base;
    const r = await fetch(base + 'mri.json?v=202611052');   // etiketler değişince artır: /assets/* bir gün önbellekte
    if (!r.ok) throw new Error('mri.json (' + r.status + ')');
    meta = await r.json();
    [nx, ny, nz] = meta.dims;
    const files = meta.contrasts || { t1: meta.t1 };
    const labUrl = base + meta.labels + '?v=202611052';
    const labSrc = decodeGrayPng(labUrl).catch(() => null).then((d) => d || loadImage(labUrl));
    const [a, b] = await Promise.all([loadImage(base + files.t1), labSrc]);
    vols.t1 = readMosaic(a);
    lab = readMosaic(b);
    // bölgelerin ağırlık merkezleri, bütün ve yarıküre başına (seçilen bölge kesitte yoksa kesit oraya taşınır)
    const n = meta.ids.length + 1, i0 = -meta.origin_mni[0];
    const acc = [0, 1, 2].map(() => [new Float64Array(n), new Float64Array(n), new Float64Array(n), new Float64Array(n)]);
    for (let k = 0, p = 0; k < nz; k++) for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++, p++) {
      const v = lab[p] & 127;
      if (!v) continue;
      for (const q of [acc[0], acc[i > i0 ? 1 : 2]]) { q[0][v] += i; q[1][v] += j; q[2][v] += k; q[3][v]++; }
    }
    const mean = (q, v) => (q[3][v] ? [q[0][v] / q[3][v], q[1][v] / q[3][v], q[2][v] / q[3][v]] : null);
    meta.ids.forEach((id, q) => { const v = q + 1; cent[id] = { all: mean(acc[0], v), L: mean(acc[1], v), R: mean(acc[2], v) }; });
  }

  // karşıtlık (t1, t2, pd): ilk seçimde indirilir
  async function setContrast(c) {
    const files = meta.contrasts || { t1: meta.t1 };
    if (!files[c]) return false;
    if (!vols[c]) {
      pending[c] = pending[c] || loadImage(base + files[c]).then(readMosaic);
      vols[c] = await pending[c];
    }
    contrast = c;
    return true;
  }

  const size = (axis) => (axis === 'ax' ? [nx, ny] : axis === 'cor' ? [nx, nz] : [ny, nz]);
  const count = (axis) => (axis === 'ax' ? nz : axis === 'cor' ? ny : nx);
  // ekran pikseli (sürekli) → voksel (i, j, k)
  function pix2vox(axis, idx, px, py) {
    if (axis === 'ax') return [px, ny - 1 - py, idx];
    if (axis === 'cor') return [px, idx, nz - 1 - py];
    return [idx, ny - 1 - px, nz - 1 - py];
  }
  // voksel → kesit pikseli (görünümdeki artı imleci için)
  function vox2pix(axis, v) {
    if (axis === 'ax') return [v[0], ny - 1 - v[1]];
    if (axis === 'cor') return [v[0], nz - 1 - v[2]];
    return [ny - 1 - v[1], nz - 1 - v[2]];
  }
  function vox2mni(v) { return [meta.origin_mni[0] + v[0], meta.origin_mni[1] + v[1], meta.origin_mni[2] + v[2]]; }
  function mni2idx(axis, mm) { return Math.round(mm - meta.origin_mni[axis === 'ax' ? 2 : axis === 'cor' ? 1 : 0]); }
  function idx2mm(axis, idx) { return meta.origin_mni[axis === 'ax' ? 2 : axis === 'cor' ? 1 : 0] + idx; }

  // kesit: görüntü ve etiket dizileri (genişlik × yükseklik, satır satır)
  function extract(axis, idx) {
    const [w, h] = size(axis), T = new Uint8Array(w * h), Lb = new Uint8Array(w * h), vol = vols[contrast] || vols.t1;
    for (let py = 0; py < h; py++) for (let px = 0; px < w; px++) {
      const [i, j, k] = pix2vox(axis, idx, px, py), p = (k * ny + j) * nx + i;
      T[py * w + px] = vol[p];
      Lb[py * w + px] = lab[p];
    }
    return { w, h, axis, idx, contrast, img: T, lab: Lb };
  }

  // kübik B-spline ağırlıkları (hepsi pozitif, toplamı 1): yumuşatılmış etiket alanları için
  const bsp = (t) => {
    const t2 = t * t, t3 = t2 * t, u = 1 - t;
    return [u * u * u / 6, (3 * t3 - 6 * t2 + 4) / 6, (-3 * t3 + 3 * t2 + 3 * t + 1) / 6, t3 / 6];
  };
  const accW = new Float32Array(256), touched = new Uint8Array(16);
  // sürekli kesit koordinatında etiket: 4 × 4 komşu, B-spline ağırlıkları, en ağır etiket (bölge numarasına göre)
  function labelSmooth(s, x, y, wxa, wya) {
    const w = s.w, h = s.h, x0 = Math.floor(x), y0 = Math.floor(y);
    const wx = wxa || bsp(x - x0), wy = wya || bsp(y - y0);
    let n = 0, best = 0, bw = -1;
    for (let b = 0; b < 4; b++) {
      const yy = Math.min(h - 1, Math.max(0, y0 - 1 + b));
      for (let a = 0; a < 4; a++) {
        const xx = Math.min(w - 1, Math.max(0, x0 - 1 + a)), v = s.lab[yy * w + xx], k = v & 127;
        if (accW[k] === 0) touched[n++] = k;
        accW[k] += wx[a] * wy[b];
        if (accW[k] > bw) { bw = accW[k]; best = v; }
      }
    }
    for (let q = 0; q < n; q++) accW[touched[q]] = 0;
    return best;
  }
  // sürekli kesit koordinatında etiket: dört komşu, çift doğrusal ağırlık, en ağır etiket (hızlı kip)
  function labelAt(s, x, y) {
    const w = s.w, h = s.h;
    x = Math.min(w - 1, Math.max(0, x)); y = Math.min(h - 1, Math.max(0, y));
    const x0 = Math.min(w - 2, Math.floor(x)), y0 = Math.min(h - 2, Math.floor(y)), fx = x - x0, fy = y - y0;
    const l = [s.lab[y0 * w + x0], s.lab[y0 * w + x0 + 1], s.lab[(y0 + 1) * w + x0], s.lab[(y0 + 1) * w + x0 + 1]];
    const wt = [(1 - fx) * (1 - fy), fx * (1 - fy), (1 - fx) * fy, fx * fy];
    let best = l[0], bw = -1;
    for (let a = 0; a < 4; a++) {
      let sum = 0;
      for (let b = 0; b < 4; b++) if ((l[b] & 127) === (l[a] & 127)) sum += wt[b];
      if (sum > bw) { bw = sum; best = l[a]; }
    }
    return best;
  }

  // büyütülmüş kesit: f kat; görüntü kübik, etiketler B-spline ağırlıklarıyla. Hızlı kipte (kaydırırken) f = 1:
  // kesit olduğu gibi, büyütmeyi tarayıcı yapar; kaydırma durunca tam çizim gelir.
  function render(s, f, quick) {
    const w = s.w, h = s.h;
    if (quick) return { W: w, H: h, f: 1, img: Uint8ClampedArray.from(s.img), lab: s.lab };
    const W = w * f, H = h * f, img = new Uint8ClampedArray(W * H), labs = new Uint8Array(W * H), msk = new Uint8Array(W * H),
      mg = new Uint8Array(W * H), src = s.img, L = s.lab;
    const cl = (v, n) => (v < 0 ? 0 : v >= n ? n - 1 : v);
    // sütun başına: dört kaynak sütun (sınırda kırpılmış), Catmull–Rom ve B-spline ağırlıkları
    const XI = new Int32Array(W * 4), XC = new Float32Array(W * 4), XB = new Float32Array(W * 4);
    for (let U = 0; U < W; U++) {
      const x = (U + 0.5) / f - 0.5, x0 = Math.floor(x), t = x - x0, c = cr(t), b = bsp(t);
      for (let a = 0; a < 4; a++) { XI[U * 4 + a] = cl(x0 - 1 + a, w); XC[U * 4 + a] = c[a]; XB[U * 4 + a] = b[a]; }
    }
    const row = new Int32Array(4), yc = new Float32Array(4), yb = new Float32Array(4);
    for (let V = 0, o = 0; V < H; V++) {
      const y = (V + 0.5) / f - 0.5, y0 = Math.floor(y), t = y - y0, c = cr(t), b = bsp(t);
      for (let q = 0; q < 4; q++) { row[q] = cl(y0 - 1 + q, h) * w; yc[q] = c[q]; yb[q] = b[q]; }
      for (let U = 0; U < W; U++, o++) {
        const u4 = U * 4;
        let v = 0, n = 0, best = 0, bw = -1, mw = 0;
        for (let q = 0; q < 4; q++) {
          const r = row[q];
          v += yc[q] * (XC[u4] * src[r + XI[u4]] + XC[u4 + 1] * src[r + XI[u4 + 1]] + XC[u4 + 2] * src[r + XI[u4 + 2]] + XC[u4 + 3] * src[r + XI[u4 + 3]]);
          for (let a = 0; a < 4; a++) {
            const lv = L[r + XI[u4 + a]], k = lv & 127, wgt = yb[q] * XB[u4 + a];
            if (accW[k] === 0) touched[n++] = k;
            if (lv & 128) mw += wgt;       // beyin maskesi de aynı ağırlıklarla yumuşatılır: kenar düzgün eğri olur
            const acc = (accW[k] += wgt);
            if (acc > bw) { bw = acc; best = lv; }
          }
        }
        // sınıra uzaklık: en ağır ile ikinci en ağır etiketin ağırlık farkı (kontur kenar yumuşatmalı çizilir)
        let second = 0;
        for (let q = 0; q < n; q++) { const kk = touched[q]; if (kk !== (best & 127) && accW[kk] > second) second = accW[kk]; accW[kk] = 0; }
        img[o] = v;
        labs[o] = best;
        msk[o] = mw * 255;
        mg[o] = Math.min(255, (bw - second) * 255);
      }
    }
    return { W, H, f, img, lab: labs, msk, mg };
  }
  const cr = (t) => {            // Catmull–Rom ağırlıkları
    const t2 = t * t, t3 = t2 * t;
    return [-0.5 * t3 + t2 - 0.5 * t, 1.5 * t3 - 2.5 * t2 + 1, -1.5 * t3 + 2 * t2 + 0.5 * t, 0.5 * t3 - 0.5 * t2];
  };

  const idOf = (v) => ((v & 127) ? meta.ids[(v & 127) - 1] : null);
  const nameOf = (id) => (meta && meta.names && meta.names[id]) || null;

  return {
    load, setContrast, extract, render, labelAt: (s, x, y) => labelSmooth(s, x, y), size, count, pix2vox, vox2pix, vox2mni,
    mni2idx, idx2mm, idOf, nameOf,
    // side: +1 hastanın solu (x > 0), −1 sağı; o yarıkürede yoksa bütün bölgenin merkezi
    centroid: (id, side) => (cent[id] ? (side > 0 ? cent[id].L : side < 0 ? cent[id].R : null) || cent[id].all : null),
    get meta() { return meta; },
    get contrast() { return contrast; }
  };
})();
