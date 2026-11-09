/* sahne.js — tanıtım sayfasının arka planı: 3B nöron dünyası (three.js r128; EffectComposer, UnrealBloomPass, FXAA).
   Sayfanın arkasında sabit bir tuval; kaydırdıkça kamera tek bir nöron boyunca aşağı süzülür.
   - Başta hücre gövdesi (çekirdeği içten parlar) ve sivrilen, dallanan dendritler; dendritlerden gövdeye sinyaller gelir.
   - Kalın, kıvrım kıvrım inen akson: yarı saydam miyelin kılıflar, aralarında Ranvier boğumları; kaydırdıkça
     turuncu sinyal boğumdan boğuma iner.
   - Sonda akson terminali: sinaptik düğmelerdeki keseler parlayıp boşalır, karşı nöronlar sırayla yanar, ağ ışıldar;
     ortadaki "Atlasa git" (#syn) ateşlenir.
   Uzakta bulanık nöronlar ve süzülen ışık zerreleri derinlik verir; parlak yerler ışık taşmasıyla (bloom) parlar.
   Görüntü almak için (yalnızca yerel): ?kare=bas | son | 0–1 sahneyi o anda dondurur; __sahne.ciz(n) n kare elle çizer
   (tarayıcı paneli gizliyken kare çizilmez) ve tuvali döndürür. */
(function () {
  'use strict';
  var canvas = document.getElementById('nb'), main = document.querySelector('main'), syn = document.getElementById('syn');
  if (!canvas || !main) return;
  if (!window.THREE || !THREE.EffectComposer || !THREE.UnrealBloomPass) { canvas.style.display = 'none'; return; }
  var reduce = false;
  try { reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { /* eski tarayıcı */ }
  var KARE = new URLSearchParams(location.search).get('kare');
  var YAVAS = +(new URLSearchParams(location.search).get('yavas') || 0);   // yalnızca sınama: her kareye yapay ms gecikme
  var Q = { level: 0, n: 0, t0: 0, ok: 0, done: false };                   // akıcılık koruması (aşağıda guard)
  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false, powerPreference: 'high-performance', preserveDrawingBuffer: !!KARE });
  } catch (e) { canvas.style.display = 'none'; return; }
  renderer.setClearColor(0x040915, 1);

  var V3 = THREE.Vector3;
  var seed = 11;
  function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  function rr(a, b) { return a + (b - a) * rnd(); }
  function rv() { return new V3(rr(-1, 1), rr(-1, 1), rr(-1, 1)); }
  function smooth(a, b, x) { var t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function col(h) { return new THREE.Color(h); }

  var C = {
    bgTop: col('#0a1a40'), bgMid: col('#11306f'), bgBot: col('#02050d'), fog: col('#06112c'),
    base: col('#143b98'), rim: col('#3fb9ff'), warm: col('#ff8f33'), hot: col('#ffdba2'),
    myBase: col('#6a8fe0'), myRim: col('#b4dcff'), core: col('#1c4ab8'), coreRim: col('#5fb8f0'), somaBase: col('#2452c4'),
    farBase: col('#1a3c8a'), farRim: col('#3f8fe6'), btBase: col('#3d69d0'), btRim: col('#d9eaff'),
    vesOff: col('#7fa6ff'), bokehB: col('#5b8cff'), bokehB2: col('#3d6fe0'), bokehW: col('#ffad5c')
  };

  // ------------------------------------------------ gölgelendiriciler
  var VERT = [
    'attribute float aS;', 'attribute float aNode;',
    'varying vec3 vN; varying vec3 vW; varying float vS; varying float vNode; varying float vD;',
    'void main() {',
    '  vec4 wp = modelMatrix * vec4(position, 1.0);',
    '  vW = wp.xyz; vN = normalize(mat3(modelMatrix) * normal); vS = aS; vNode = aNode;',
    '  vec4 mv = viewMatrix * wp; vD = -mv.z;',
    '  gl_Position = projectionMatrix * mv;',
    '}'].join('\n');
  // zar: koyu mavi gövde, kenarda parlayan açık mavi (fresnel), içten görünen çekirdek ışığı, sinyalin sıcak ışığı
  var FRAG = [
    'uniform vec3 uBase; uniform vec3 uRim; uniform vec3 uWarm; uniform vec3 uHot; uniform vec3 uFog;',
    'uniform float uFogD; uniform float uFogS; uniform float uAlpha; uniform float uActive; uniform float uFlash; uniform float uKind;',
    'uniform float uImp; uniform float uImpOn; uniform vec3 uImpPos; uniform vec3 uNuc; uniform float uNucR;',
    'varying vec3 vN; varying vec3 vW; varying float vS; varying float vNode; varying float vD;',
    'void main() {',
    '  vec3 n = normalize(vN);',
    '  vec3 v = normalize(cameraPosition - vW);',
    '  if (!gl_FrontFacing) n = -n;',
    '  float ndv = clamp(dot(n, v), 0.0, 1.0);',
    '  float fres = pow(1.0 - ndv, 2.2);',
    '  vec3 L1 = normalize(vec3(-0.45, 0.85, 0.6));',
    '  vec3 L2 = normalize(vec3(0.6, -0.4, 0.5));',
    '  float dif = max(dot(n, L1), 0.0) * 0.85 + max(dot(n, L2), 0.0) * 0.3;',
    '  float spec = pow(max(dot(n, normalize(L1 + v)), 0.0), 48.0);',
    '  vec3 col = uBase * (0.22 + 0.6 * dif) + uRim * (fres * (0.95 + 0.5 * uActive + 0.6 * uFlash) + 0.17 * (1.0 - fres)) + vec3(0.8, 0.9, 1.0) * spec * 0.3;',
    '  if (uNucR > 0.0) {',
    '    vec3 rd = normalize(vW - cameraPosition);',
    '    vec3 oc = uNuc - cameraPosition;',
    '    float dl = length(oc - rd * dot(oc, rd));',
    '    float g = pow(clamp(1.0 - dl / uNucR, 0.0, 1.0), 2.0) * (1.0 - fres * 0.5);',
    '    col += uRim * 0.1 * (1.0 - fres);',
    '    col += mix(vec3(0.55, 0.8, 1.0), uWarm, 0.15 + 0.7 * max(uActive, uFlash)) * g * (0.6 + 0.6 * uFlash + 0.3 * uActive);',
    '  }',
    '  float dI = distance(vW, uImpPos);',
    '  col += uWarm * uImpOn * 0.3 / (1.0 + dI * dI * 2.2);',
    '  if (uKind > 0.5) {',
    '    float dh = vS - uImp;',
    '    float head = exp(-dh * dh / (uKind > 1.5 ? 1.1 : 0.22));',
    '    float trail = dh < 0.0 ? exp(dh / 2.2) : 0.0;',
    '    float node = vNode * (dh < 0.0 ? exp(dh / 3.2) : 0.0);',
    '    float k = uKind > 1.5 ? 0.4 : 0.9;',
    '    col = mix(col, col * 0.3, clamp(head * 1.4, 0.0, 1.0) * k);',
    '    col += (uWarm * (head * 0.85 + trail * 0.22) + uWarm * node * 0.9) * uImpOn * k + uWarm * vNode * 0.16;',
    '  }',
    '  col += uWarm * uActive * 0.07;',
    '  float a = clamp(mix(uAlpha, 1.0, fres), 0.0, 1.0);',
    '  float fz = max(0.0, vD - uFogS);',
    '  float fog = 1.0 - exp(-uFogD * uFogD * fz * fz);',
    '  col = mix(col, uFog, clamp(fog, 0.0, 1.0));',
    '  gl_FragColor = vec4(col, a);',
    '}'].join('\n');
  var BG_V = 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }';
  var BG_F = [
    'uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uBot; uniform float uAsp; uniform float uP;',
    'varying vec2 vUv;',
    'void main() {',
    '  vec2 q = vUv - 0.5; q.x *= uAsp;',
    '  vec3 c = mix(uBot, uTop, smoothstep(-0.15, 1.1, vUv.y));',
    '  vec2 g1 = q - vec2(0.2 * uAsp, 0.1 - uP * 0.25);',
    '  c += uMid * exp(-dot(g1, g1) * 2.4) * 0.7;',
    '  vec2 g2 = q - vec2(-0.32 * uAsp, -0.28 + uP * 0.2);',
    '  c += uMid * exp(-dot(g2, g2) * 3.6) * 0.32;',
    '  c *= 0.5 + 0.5 * (1.0 - smoothstep(0.3, 1.05, length(q * vec2(0.75, 1.0))));',
    '  float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);',
    '  c += (n - 0.5) * 0.008;',
    '  gl_FragColor = vec4(c, 1.0);',
    '}'].join('\n');
  // ışık noktaları: dendritlerdeki turuncu sinaps parıltıları (çekirdekli) ve uzak/yakın bulanık zerreler (halkalı disk)
  var PT_V = [
    'attribute float aSize; attribute vec3 aCol; attribute float aPh; attribute float aA;',
    'uniform float uTime; uniform float uScale;',
    'varying vec3 vCol; varying float vA;',
    'void main() {',
    '  vec4 mv = modelViewMatrix * vec4(position, 1.0);',
    '  float tw = 0.6 + 0.4 * sin(uTime * (0.5 + fract(aPh * 7.13) * 1.7) + aPh * 6.2831);',
    '  vCol = aCol; vA = aA * tw;',
    '  gl_PointSize = aSize * uScale / max(0.6, -mv.z);',
    '  gl_Position = projectionMatrix * mv;',
    '}'].join('\n');
  var PT_F = [
    'uniform float uRing; varying vec3 vCol; varying float vA;',
    'void main() {',
    '  vec2 c = gl_PointCoord - 0.5; float r = length(c) * 2.0;',
    '  if (r > 1.0) discard;',
    '  float core = exp(-r * r * 5.0) + 0.5 * exp(-r * r * 40.0);',
    '  float disc = smoothstep(1.0, 0.8, r) * (0.5 + 0.5 * smoothstep(0.5, 0.95, r));',
    '  gl_FragColor = vec4(vCol, mix(core, disc, uRing) * vA);',
    '}'].join('\n');

  var SH = { uFog: { value: C.fog }, uFogD: { value: 0.034 }, uFogS: { value: 10 }, uImp: { value: 0 }, uImpPos: { value: new V3(0, -1.4, 0) }, uImpOn: { value: 1 } };
  function memMat(o) {
    var u = {
      uBase: { value: o.base || C.base }, uRim: { value: o.rim || C.rim }, uWarm: { value: C.warm }, uHot: { value: C.hot },
      uFog: SH.uFog, uFogD: SH.uFogD, uFogS: SH.uFogS, uImp: SH.uImp, uImpPos: SH.uImpPos, uImpOn: SH.uImpOn,
      uAlpha: { value: o.alpha === undefined ? 1 : o.alpha }, uActive: o.act || { value: 0 }, uFlash: o.flash || { value: 0 },
      uKind: { value: o.kind || 0 }, uNuc: { value: o.nuc ? o.nuc.clone() : new V3() }, uNucR: { value: o.nucR || 0 }
    };
    var tr = o.alpha !== undefined && o.alpha < 1;
    return new THREE.ShaderMaterial({ uniforms: u, vertexShader: VERT, fragmentShader: FRAG, side: THREE.FrontSide,
      transparent: tr, depthWrite: !tr });
  }

  // ------------------------------------------------ dokular (bir kez)
  function glowTex() {
    var c = document.createElement('canvas'); c.width = c.height = 128;
    var g = c.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.18, 'rgba(255,255,255,0.75)');
    gr.addColorStop(0.45, 'rgba(255,255,255,0.18)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  }
  // uzak, odak dışı nöron: gölge hilesiyle bulanık çizilir (her tarayıcıda çalışır)
  function farNeuronTex(s, blur) {
    var keep = seed; seed = s;
    var c = document.createElement('canvas'); c.width = c.height = 256;
    var g = c.getContext('2d');
    g.translate(128, 128);
    g.shadowColor = 'rgba(190,220,255,1)'; g.shadowBlur = blur; g.shadowOffsetX = -2000;
    g.strokeStyle = g.fillStyle = '#fff'; g.lineCap = 'round';
    function br(x, y, a, len, w, d) {
      var x1 = x + Math.cos(a) * len, y1 = y + Math.sin(a) * len, b = rr(-0.5, 0.5);
      g.lineWidth = w; g.beginPath(); g.moveTo(x + 2000, y);
      g.quadraticCurveTo(x + 2000 + Math.cos(a + b) * len * 0.55, y + Math.sin(a + b) * len * 0.55, x1 + 2000, y1); g.stroke();
      if (d < 3) { br(x1, y1, a + rr(0.3, 0.6), len * 0.7, w * 0.6, d + 1); br(x1, y1, a - rr(0.3, 0.6), len * 0.7, w * 0.6, d + 1); }
    }
    var n = 5 + Math.floor(rr(0, 3));
    for (var i = 0; i < n; i++) br(0, 0, i / n * Math.PI * 2 + rr(-0.3, 0.3), rr(30, 46), 6.5, 1);
    g.beginPath(); g.arc(2000, 0, 13, 0, Math.PI * 2); g.fill();
    seed = keep;
    return new THREE.CanvasTexture(c);
  }
  var TEX = { glow: glowTex(), far: [farNeuronTex(3, 5), farNeuronTex(17, 9), farNeuronTex(29, 14), farNeuronTex(41, 7)] };

  // ------------------------------------------------ geometri: sivrilen tüp (paralel taşıma çerçeveleri)
  function Tube() { this.pos = []; this.nor = []; this.s = []; this.node = []; this.idx = []; this.n = 0; }
  Tube.prototype.add = function (pts, rad, seg, opt) {
    opt = opt || {};
    var n = pts.length, base = this.n, T = [], N = [], B = [], i, j;
    for (i = 0; i < n; i++) {
      var t = new V3().subVectors(pts[Math.min(n - 1, i + 1)], pts[Math.max(0, i - 1)]);
      T.push(t.lengthSq() > 1e-12 ? t.normalize() : (i ? T[i - 1].clone() : new V3(0, 1, 0)));
    }
    var up = Math.abs(T[0].y) < 0.9 ? new V3(0, 1, 0) : new V3(1, 0, 0);
    N.push(new V3().crossVectors(T[0], up).normalize()); B.push(new V3().crossVectors(T[0], N[0]));
    for (i = 1; i < n; i++) {
      var nn = N[i - 1].clone().addScaledVector(T[i], -N[i - 1].dot(T[i]));
      if (nn.lengthSq() < 1e-10) nn = N[i - 1].clone(); else nn.normalize();
      N.push(nn); B.push(new V3().crossVectors(T[i], nn));
    }
    for (i = 0; i < n; i++) {
      for (j = 0; j <= seg; j++) {
        var th = j / seg * Math.PI * 2, c = Math.cos(th), s = Math.sin(th);
        var dx = N[i].x * c + B[i].x * s, dy = N[i].y * c + B[i].y * s, dz = N[i].z * c + B[i].z * s;
        this.pos.push(pts[i].x + dx * rad[i], pts[i].y + dy * rad[i], pts[i].z + dz * rad[i]);
        this.nor.push(dx, dy, dz);
        this.s.push(opt.s ? opt.s[i] : 0); this.node.push(opt.node ? opt.node[i] : 0);
      }
    }
    var w = seg + 1;
    for (i = 0; i < n - 1; i++) for (j = 0; j < seg; j++) {
      var a0 = base + i * w + j, b0 = a0 + w;
      this.idx.push(a0, a0 + 1, b0, a0 + 1, b0 + 1, b0);
    }
    this.n += n * w;
    if (opt.cap !== false) {   // yarım küre uç: dallanma yerleri ve uçlar düzgün kapanır
      var L = pts[n - 1], tl = T[n - 1], r = rad[n - 1], cs = 4, prev = base + (n - 1) * w;
      for (var q = 1; q <= cs; q++) {
        var ph = q / cs * Math.PI / 2, cr = Math.cos(ph) * r, off = Math.sin(ph) * r, ring = this.n;
        if (q === cs) {
          this.pos.push(L.x + tl.x * r, L.y + tl.y * r, L.z + tl.z * r); this.nor.push(tl.x, tl.y, tl.z);
          this.s.push(opt.s ? opt.s[n - 1] : 0); this.node.push(0); this.n += 1;
          for (j = 0; j < seg; j++) this.idx.push(prev + j, prev + j + 1, ring);
          break;
        }
        for (j = 0; j <= seg; j++) {
          var th2 = j / seg * Math.PI * 2, c2 = Math.cos(th2), s2 = Math.sin(th2);
          var rx = N[n - 1].x * c2 + B[n - 1].x * s2, ry = N[n - 1].y * c2 + B[n - 1].y * s2, rz = N[n - 1].z * c2 + B[n - 1].z * s2;
          var cp = Math.cos(ph), sp = Math.sin(ph);
          this.pos.push(L.x + rx * cr + tl.x * off, L.y + ry * cr + tl.y * off, L.z + rz * cr + tl.z * off);
          this.nor.push(rx * cp + tl.x * sp, ry * cp + tl.y * sp, rz * cp + tl.z * sp);
          this.s.push(opt.s ? opt.s[n - 1] : 0); this.node.push(0);
        }
        this.n += w;
        for (j = 0; j < seg; j++) this.idx.push(prev + j, prev + j + 1, ring + j, prev + j + 1, ring + j + 1, ring + j);
        prev = ring;
      }
    }
  };
  Tube.prototype.geometry = function () {
    var g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('aS', new THREE.Float32BufferAttribute(this.s, 1));
    g.setAttribute('aNode', new THREE.Float32BufferAttribute(this.node, 1));
    g.setIndex(this.n > 65535 ? new THREE.Uint32BufferAttribute(this.idx, 1) : new THREE.Uint16BufferAttribute(this.idx, 1));
    return g;
  };

  // hücre gövdesi: dendrit köklerine ve akson tepeciğine doğru yumuşakça uzanan küre
  var ICO = {};
  function icoIndexed(detail) {
    if (ICO[detail]) return ICO[detail];
    var src = new THREE.IcosahedronGeometry(1, detail), p = src.attributes.position, map = {}, verts = [], idx = [];
    for (var i = 0; i < p.count; i++) {
      var x = p.getX(i), y = p.getY(i), z = p.getZ(i), key = Math.round(x * 1e4) + ',' + Math.round(y * 1e4) + ',' + Math.round(z * 1e4);
      var id = map[key];
      if (id === undefined) { id = map[key] = verts.length / 3; verts.push(x, y, z); }
      idx.push(id);
    }
    src.dispose();
    return (ICO[detail] = { v: verts, i: idx });
  }
  function somaGeo(c, R, dirs, detail) {
    var base = icoIndexed(detail), pos = new Float32Array(base.v.length), n = new V3(), ph = rr(0, 6);
    for (var i = 0; i < base.v.length; i += 3) {
      n.set(base.v[i], base.v[i + 1], base.v[i + 2]);
      var r = 1 + 0.05 * Math.sin(n.x * 4.7 + ph) * Math.sin(n.y * 3.9 - ph) + 0.03 * Math.sin(n.z * 6.1 + n.x * 2.0);
      for (var k = 0; k < dirs.length; k++) {
        var d = n.dot(dirs[k].v);
        if (d > 0) r += dirs[k].cone * Math.pow(d, 10);
      }
      pos[i] = c.x + n.x * R * r; pos[i + 1] = c.y + n.y * R * r; pos[i + 2] = c.z + n.z * R * r;
    }
    var g = new THREE.BufferGeometry(), cnt = pos.length / 3;
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setIndex(base.i);
    g.computeVertexNormals();
    g.setAttribute('aS', new THREE.BufferAttribute(new Float32Array(cnt), 1));
    g.setAttribute('aNode', new THREE.BufferAttribute(new Float32Array(cnt), 1));
    return g;
  }
  // dendrit ağacı: hafif kıvrılarak büyür, uçta ikiye (bazen üçe) ayrılır, kalından inceye sivrilir
  function grow(tube, p0, dir, len, r0, depth, maxD, chain, tips, glints, R, flare) {
    var steps = Math.max(5, Math.round(len / (0.09 * R))), pts = [p0.clone()], rad = [r0 + (flare ? 0.25 * R : 0)];
    var d = dir.clone().normalize(), p = p0.clone(), bend = rv().multiplyScalar(0.03);
    var last = depth >= maxD, r1 = last ? 0.016 * R : r0 * 0.64;
    for (var i = 1; i <= steps; i++) {
      d.add(rv().multiplyScalar(0.065)).add(bend).normalize();
      p = p.clone().addScaledVector(d, len / steps);
      pts.push(p);
      var t = i / steps, rr0 = r0 + (r1 - r0) * (last ? Math.pow(t, 0.75) : t);
      if (flare) rr0 += 0.25 * R * Math.max(0, 1 - (t * len) / (0.5 * R));   // kök koninin içinde kalır, koninin ucundan çıkar (yüzeyler çakışmaz)
      rad.push(rr0);
    }
    tube.add(pts, rad, r0 > 0.12 * R ? 14 : r0 > 0.05 * R ? 9 : 6);
    if (glints && rnd() < 0.85) {
      var gi = Math.max(1, Math.floor(rr(1, steps)));
      glints.push(pts[gi].clone().add(rv().normalize().multiplyScalar(rad[gi] * 1.05)));
    }
    var ch = chain.concat(pts);
    if (!last) {
      var k = depth + 1 < maxD && rnd() < 0.3 ? 3 : 2, ax = new V3().crossVectors(d, rv()).normalize();
      for (var c = 0; c < k; c++) {
        var a = (c - (k - 1) / 2) * (depth + 1 >= maxD ? rr(0.32, 0.48) : rr(0.42, 0.6)) + rr(-0.1, 0.1);
        var nd = d.clone().applyAxisAngle(ax, a).applyAxisAngle(d, rr(-0.5, 0.5));
        grow(tube, p, nd, len * (depth + 1 >= maxD ? rr(0.72, 0.9) : rr(0.62, 0.78)), r1, depth + 1, maxD, ch, tips, glints, R);
      }
    } else tips.push(ch);
  }
  function dirsAround(n, s) {   // küre üzerinde yaklaşık eşit dağılmış yönler
    var out = [], ga = Math.PI * (3 - Math.sqrt(5)), off = rr(0, 6);
    for (var i = 0; i < n; i++) {
      var y = 1 - (i + 0.5) / n * 2, r = Math.sqrt(1 - y * y), a = i * ga + off;
      out.push(new V3(Math.cos(a) * r, y, Math.sin(a) * r).add(rv().multiplyScalar(s)).normalize());
    }
    return out;
  }
  // nöron: gövde + dendritler (+ isteğe bağlı uzanan dendritler); tek bir grup
  function neuron(parent, c, R, o) {
    var tube = new Tube(), tips = [], glints = [];
    o.dirs.forEach(function (d) {
      if (d.axon || d.reach) return;
      // kök, gövdenin dendrite doğru uzanan konisinin içinden ve onun kalınlığında başlar: gövde dendrite akar
      var rho0 = 1 + 0.6 * d.cone, lat0 = rho0 * Math.sqrt(1 - Math.pow(0.6, 0.2)) * R * 0.97;
      var st = c.clone().addScaledVector(d.v, R * rho0);
      grow(tube, st, d.v, d.len * R, d.r * R, 1, o.depth, [c.clone()], tips, glints, R, lat0);
    });
    var heads = [];
    o.dirs.forEach(function (d) {   // sinaptik düğmeye uzanan dendrit; ucunda dikensi baş
      if (!d.reach) return;
      var rho0 = 1 + 0.6 * d.cone, lat0 = rho0 * Math.sqrt(1 - Math.pow(0.6, 0.2)) * R * 0.97;
      var st = c.clone().addScaledVector(d.v, R * rho0), en = d.reach, L = st.distanceTo(en);
      var mid = st.clone().lerp(en, 0.5).add(rv().multiplyScalar(0.12 * L));
      var cv = new THREE.CatmullRomCurve3([st, mid, en]), m = Math.max(8, Math.round(L / 0.08)), pts = cv.getPoints(m), rad = [];
      for (var i = 0; i <= m; i++) rad.push(lerp(d.r * R, 0.07, i / m) + 0.25 * R * Math.max(0, 1 - i / m * L / (0.5 * R)));
      tube.add(pts, rad, 10);
      heads.push(en);
      glints.push(pts[Math.floor(m * 0.5)].clone().add(rv().normalize().multiplyScalar(0.06)));
    });
    var g = new THREE.Group();
    var den = new THREE.Mesh(tube.geometry(), o.denMat);
    var soma = new THREE.Mesh(somaGeo(c, R, o.dirs, o.detail), o.somaMat);
    g.add(den); g.add(soma);
    heads.forEach(function (h) {
      var s = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 12), o.denMat);
      s.position.copy(h); g.add(s);
    });
    parent.add(g);
    return { group: g, tips: tips, glints: glints };
  }

  // ------------------------------------------------ sahne
  var scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(36, 1, 0.1, 300);
  var bgMat = new THREE.ShaderMaterial({ vertexShader: BG_V, fragmentShader: BG_F, depthTest: false, depthWrite: false,
    uniforms: { uTop: { value: C.bgTop }, uMid: { value: C.bgMid }, uBot: { value: C.bgBot }, uAsp: { value: 1 }, uP: { value: 0 } } });
  var bg = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMat);
  bg.frustumCulled = false; bg.renderOrder = -100; scene.add(bg);
  var composer, bloom, fxaa, pr = 1, S = null, W = 0, H = 0;
  var ptMats = [];

  function points(arr, ring, parent) {   // arr: [{p, size, col, a, ph}]
    var n = arr.length, pos = new Float32Array(n * 3), size = new Float32Array(n), cl = new Float32Array(n * 3), a = new Float32Array(n), ph = new Float32Array(n);
    arr.forEach(function (q, i) {
      pos[i * 3] = q.p.x; pos[i * 3 + 1] = q.p.y; pos[i * 3 + 2] = q.p.z;
      size[i] = q.size; a[i] = q.a; ph[i] = q.ph === undefined ? rnd() : q.ph;
      cl[i * 3] = q.col.r; cl[i * 3 + 1] = q.col.g; cl[i * 3 + 2] = q.col.b;
    });
    var g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    g.setAttribute('aCol', new THREE.BufferAttribute(cl, 3));
    g.setAttribute('aA', new THREE.BufferAttribute(a, 1));
    g.setAttribute('aPh', new THREE.BufferAttribute(ph, 1));
    var m = new THREE.ShaderMaterial({ vertexShader: PT_V, fragmentShader: PT_F, transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, uniforms: { uTime: { value: 0 }, uScale: { value: 400 }, uRing: { value: ring } } });
    ptMats.push(m);
    var o = new THREE.Points(g, m);
    o.frustumCulled = false;
    parent.add(o);
    return o;
  }

  function dispose(o) {
    o.traverse(function (x) {
      if (x.geometry) x.geometry.dispose();
      if (x.material) (Array.isArray(x.material) ? x.material : [x.material]).forEach(function (m) { m.dispose(); });
    });
  }

  function box(e) { var r = e.getBoundingClientRect(); return { t: r.top + scrollY, h: r.height, l: r.left, w: r.width }; }

  function build() {
    if (innerWidth < 40 || innerHeight < 40 || document.documentElement.scrollHeight < innerHeight) return;   // sayfa henüz yerleşmedi
    if (S) { scene.remove(S.root); dispose(S.root); S = null; }
    ptMats = [];
    seed = 11;
    W = innerWidth; H = innerHeight;
    var narrow = W < 760, asp = W / H;
    var fovT = Math.tan(camera.fov * Math.PI / 360), D0 = narrow ? 12.5 : 11.5, D1 = narrow ? 17 : 15.5;
    // girişte gövde, yazı paneli ile beyin videosu arasındaki boşlukta (dar ekranda sağ üstte), yarıçapı ~50 piksel
    var sN = [0.35, 0.15], heroT = main.querySelector('.hero > div'), heroV = main.querySelector('.hero .stage');
    if (!narrow && heroT && heroV) {
      var ra1 = heroT.getBoundingClientRect(), rb1 = heroV.getBoundingClientRect();
      var gy = (Math.min(ra1.top, rb1.top) + Math.max(ra1.bottom, rb1.bottom)) / 2 + scrollY;
      sN = [((ra1.right + rb1.left) / 2) / W * 2 - 1, 1 - 2 * gy / H];
    }
    var Ds = Math.max(14, (H / 2) / (fovT * (narrow ? 40 : 52)));
    var hh = D0 * fovT, hw = hh * asp, Hvis = hh * 2;
    var scrollMax = Math.max(1, document.documentElement.scrollHeight - H);
    var Ydesc = Math.max(18, Math.min(80, 0.5 * (scrollMax / H) * Hvis));
    var root = new THREE.Group(); scene.add(root);
    var fx = new THREE.Group(); root.add(fx);

    // ---- ana nöron: gövde ve dendritler
    var somaC = new V3(0, 0, 0), R = 1;
    var md = [
      [0.05, 1, 0.1, 1.1, 3.0], [-0.78, 0.62, 0.15, 1.05, 2.8], [0.82, 0.52, -0.25, 1.05, 2.9], [-1, -0.05, 0.35, 1.0, 2.6],
      [1, 0.08, 0.3, 1.0, 2.7], [0.55, 0.45, 0.7, 0.9, 2.2], [-0.25, 0.25, -1, 0.95, 2.6], [-0.62, -0.72, 0.2, 0.9, 1.6], [0.66, -0.7, -0.1, 0.9, 1.5]
    ].map(function (a) { return { v: new V3(a[0], a[1], a[2]).normalize(), cone: a[3] * 1.4, len: a[4], r: 0.26 }; });
    md.push({ v: new V3(0, -1, 0), cone: 1.2, axon: true });
    var mainAct = { value: 0 }, mainFlash = { value: 0 };
    var mainSoma = memMat({ base: C.somaBase, nuc: somaC, nucR: 0.8, flash: mainFlash, act: mainAct });
    var mainDen = memMat({ flash: mainFlash, act: mainAct });
    var MN = neuron(root, somaC, R, { dirs: md, depth: 3, detail: 5, somaMat: mainSoma, denMat: mainDen });

    // ---- son sahnenin yeri: düğme ekranda nerede duruyorsa ağın merkezi (N0) orada
    var br = syn ? box(syn) : { t: scrollMax + H / 2 - 20, h: 40 };
    var btnY = br.t + br.h / 2 - scrollMax, ndcB = 1 - 2 * btnY / H;
    var yN = -Ydesc;
    var look0y = -sN[1] * Ds * fovT, look0x = -sN[0] * Ds * fovT * asp;
    var look1y = yN - ndcB * D1 * fovT;
    var hw1 = D1 * fovT * asp, hh1 = D1 * fovT;
    var E = new V3(-0.76 * hw1, yN + 0.5 * hh1, 0.3);      // akson terminali: son yazı panelinin solunda
    if (narrow) E.set(-0.55 * hw1, yN + 0.62 * hh1, 0.3);

    // ---- akson: kalın, sağa sola ve derinliğe kıvrılarak iner
    var ampX = Math.min(4.2, 0.62 * hw), ampZ = narrow ? 1.2 : 1.9;
    var ctrl = [new V3(0, -1.6, 0), new V3(0.05, -2.9, 0.1)];
    var yA = -2.9, yB = E.y + 2.2, nC = Math.max(3, Math.round((yA - yB) / (Hvis * 0.62)));
    for (var i = 1; i <= nC; i++) {
      var t = i / nC, side = i % 2 ? 1 : -1;
      var x = lerp(side * ampX * rr(0.75, 1) * smooth(0, 0.25, t), E.x, smooth(0.72, 1, t));
      ctrl.push(new V3(x, lerp(yA, yB, t), ampZ * Math.sin(i * 1.37 + 0.8) * (1 - smooth(0.75, 1, t))));
    }
    ctrl.push(new V3(E.x + 0.3, E.y + 0.9, E.z)); ctrl.push(E.clone());
    var curve = new THREE.CatmullRomCurve3(ctrl, false, 'centripetal');
    var Sax = curve.getLength();
    if (!isFinite(Sax) || Sax < 1) { scene.remove(root); dispose(root); return; }
    var Nax = Math.ceil(Sax / 0.05), apts = curve.getSpacedPoints(Nax);
    var ra = narrow ? 0.11 : 0.12, rm = narrow ? 0.26 : 0.3, Lm = narrow ? 1.5 : 1.9, gap = 0.22, sm0 = 1.6;
    var myEnd = sm0 + Math.floor((Sax - 1.4 - sm0) / (Lm + gap)) * (Lm + gap);
    function isNode(s) { return s > sm0 - gap && s < myEnd && ((s - sm0 + (Lm + gap)) % (Lm + gap)) >= Lm ? 1 : 0; }
    var aS = [], aR = [], aNd = [];
    for (i = 0; i <= Nax; i++) {
      var s = i / Nax * Sax; aS.push(s); aNd.push(isNode(s));
      aR.push(ra + (0.42 - ra) * (1 - smooth(0, 1.0, s)) - (s > Sax - 1.2 ? (ra - 0.085) * smooth(Sax - 1.2, Sax, s) : 0));
    }
    var axTube = new Tube(); axTube.add(apts, aR, 16, { s: aS, node: aNd, cap: false });
    var axMat = memMat({ base: C.core, rim: C.coreRim, kind: 1 });
    root.add(new THREE.Mesh(axTube.geometry(), axMat));
    // miyelin kılıflar: uçları yuvarlak, yarı saydam (içteki akson görünür)
    var myTube = new Tube(), nodesAt = [];
    for (var sa = sm0; sa + Lm <= myEnd + 1e-6; sa += Lm + gap) {
      var i0 = Math.ceil(sa / Sax * Nax), i1 = Math.floor((sa + Lm) / Sax * Nax), sp = [], sr = [], ss = [];
      for (i = i0; i <= i1; i++) {
        var u = (aS[i] - sa) / Lm, e = Math.min(u, 1 - u) / 0.16, sh = e >= 1 ? 1 : Math.pow(Math.sin(Math.max(0, e) * Math.PI / 2), 0.55);
        sp.push(apts[i]); sr.push(ra + (rm - ra) * sh); ss.push(aS[i]);
      }
      if (sp.length > 3) myTube.add(sp, sr, 22, { s: ss, cap: false });
      nodesAt.push(sa + Lm + gap / 2);
    }
    var myMat = memMat({ base: C.myBase, rim: C.myRim, alpha: 0.34, kind: 2 });
    var myMesh = new THREE.Mesh(myTube.geometry(), myMat); myMesh.renderOrder = 2;
    root.add(myMesh);

    // ---- son sahne: ağ (N0 düğmenin arkasında) ve akson terminali
    var NP = [
      [0, 0, 0, 0.75], [0.6, 0.44, -1.8, 0.62], [0.72, -0.5, -0.6, 0.62], [-0.26, -0.66, -0.6, 0.58],
      [-0.9, -0.22, -2.6, 0.58], [0.26, 0.9, -6, 0.62], [-0.56, -0.98, -4.5, 0.55]
    ];
    if (narrow) NP = [[0, 0, 0, 0.75], [0.62, 0.42, -1.6, 0.55], [0.7, -0.42, -0.4, 0.58], [-0.4, -0.55, 0.4, 0.55], [-0.75, 0.1, -2.6, 0.5], [0.15, -0.95, -3.5, 0.52]];
    var net = NP.map(function (q) {
      return { c: new V3(q[0] * hw1, yN + q[1] * hh1, q[2]), R: q[3], dirs: [], out: [], on: false, a: 0, act: { value: 0 }, flash: { value: 0 } };
    });
    var BT = narrow ? [{ to: 0 }, { to: 3 }] : [{ to: 0 }, { to: 3 }, { to: 4 }];
    BT.forEach(function (b, j) {
      var n = net[b.to], dir = n.c.clone().sub(E).normalize();
      b.pos = E.clone().addScaledVector(dir, 1.3 + 0.2 * j).add(new V3(0, rr(-0.15, 0.15), rr(-0.2, 0.2)));
      b.dts = n.c.clone().sub(b.pos).normalize();
      n.dirs.push({ v: b.dts.clone().negate(), cone: 1.2, r: 0.24, reach: b.pos.clone().addScaledVector(b.dts, 0.4) });
    });
    var CONN = narrow ? [[0, 1], [0, 2], [3, 5], [4, 1]] : [[0, 1], [0, 2], [3, 2], [4, 6], [1, 5], [3, 6]];
    CONN.forEach(function (cn, k) {
      var a = net[cn[0]], b = net[cn[1]], dir = b.c.clone().sub(a.c).normalize();
      a.dirs.push({ v: dir, cone: 0.7, axon: true });
      b.dirs.push({ v: dir.clone().negate(), cone: 0.55, axon: true });
      a.out.push({ to: cn[1], dir: dir, k: k });
    });
    var netGlints = [], connTube = new Tube(), connEnds = [];
    net.forEach(function (n, i) {
      dirsAround(narrow ? 5 : 6, 0.25).forEach(function (v) {
        var near = n.dirs.some(function (d) { return d.v.dot(v) > 0.8; });
        if (!near) n.dirs.push({ v: v, cone: rr(1.15, 1.45), len: rr(2.2, 3.1), r: 0.22 });
      });
      var sm = memMat({ base: C.somaBase, nuc: n.c, nucR: n.R * 0.62, act: n.act, flash: n.flash });
      var dm = memMat({ act: n.act, flash: n.flash });
      var NN = neuron(root, n.c, n.R, { dirs: n.dirs, depth: 3, detail: 5, somaMat: sm, denMat: dm });
      n.mats = [sm, dm];
      NN.glints.forEach(function (p) { netGlints.push(p); });
    });
    var connMat = memMat({});
    CONN.forEach(function (cn, k) {
      var a = net[cn[0]], b = net[cn[1]], dir = b.c.clone().sub(a.c).normalize();
      var st = a.c.clone().addScaledVector(dir, a.R * 1.7), en = b.c.clone().addScaledVector(dir, -b.R * 1.45);
      var L = st.distanceTo(en), perp = new V3().crossVectors(dir, new V3(0, 0, 1)).normalize();
      var cv = new THREE.CatmullRomCurve3([st, st.clone().lerp(en, 0.35).addScaledVector(perp, 0.18 * L * (k % 2 ? 1 : -1)),
        st.clone().lerp(en, 0.7).addScaledVector(perp, -0.08 * L * (k % 2 ? 1 : -1)), en]);
      var m = Math.max(10, Math.round(L / 0.08)), pts = cv.getPoints(m), rad = [];
      for (var q = 0; q <= m; q++) rad.push(lerp(0.06, 0.045, q / m));
      connTube.add(pts, rad, 8);
      a.out.forEach(function (o) { if (o.k === k) o.curve = cv; });
      connEnds.push(en);
    });
    var cm = new THREE.Mesh(connTube.geometry(), connMat); root.add(cm);
    connEnds.forEach(function (p) {   // bağlantı uçlarında küçük sinaptik düğmeler
      var s = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 10), connMat); s.position.copy(p); root.add(s);
    });

    // terminal dalları ve sinaptik düğmeler (içinde keseler)
    var termTube = new Tube(), term = [];
    var btMat = memMat({ base: C.btBase, rim: C.btRim, alpha: 0.38 });
    BT.forEach(function (b, j) {
      var d = b.pos.clone().sub(E), L = d.length(); d.normalize();
      var perp = new V3().crossVectors(d, new V3(0, 0, 1)).normalize();
      var cv = new THREE.CatmullRomCurve3([E.clone(), E.clone().lerp(b.pos, 0.5).addScaledVector(perp, 0.2 * (j % 2 ? 1 : -1)), b.pos.clone().addScaledVector(d, -0.16)]);
      var m = Math.max(8, Math.round(L / 0.06)), pts = cv.getPoints(m), rad = [];
      for (var q = 0; q <= m; q++) rad.push(lerp(0.085, 0.06, q / m));
      termTube.add(pts, rad, 10);
      var bt = new THREE.Mesh(new THREE.SphereGeometry(0.27, 28, 20), btMat);
      bt.position.copy(b.pos); bt.scale.set(1, 1, 1); bt.renderOrder = 3; root.add(bt);
      var vm = new THREE.MeshBasicMaterial({ color: C.vesOff.clone() }), vg = new THREE.Group();
      for (q = 0; q < 13; q++) {
        var vp = rv().normalize().multiplyScalar(rr(0.03, 0.16)).addScaledVector(b.dts, 0.05);
        var ves = new THREE.Mesh(new THREE.IcosahedronGeometry(rr(0.03, 0.045), 1), vm);
        ves.position.copy(b.pos).add(vp); vg.add(ves);
      }
      root.add(vg);
      var flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.glow, color: C.hot, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false }));
      flash.position.copy(b.pos).addScaledVector(b.dts, 0.29); flash.scale.setScalar(0.5); flash.renderOrder = 30; fx.add(flash);
      term.push({ curve: cv, to: b.to, vm: vm, v: 0, flash: flash, ft: -1e9 });
    });
    root.add(new THREE.Mesh(termTube.geometry(), axMat));

    // ---- orta uzaklıkta, sis içinde birkaç nöron (paralaks)
    var farMatD = memMat({ base: C.farBase, rim: C.farRim });
    [[-0.08, -0.75, -8], [0.06, 0.8, -10], [0.2, 0.95, -9], [0.42, -1.05, -11], [0.63, 0.9, -12], [0.82, -0.85, -10]].forEach(function (q, k) {
      if (narrow && k % 2) return;
      var dirs = dirsAround(5, 0.3).map(function (v) { return { v: v, cone: 1.3, len: rr(2.8, 3.8), r: 0.24 }; });
      var fc = new V3(q[1] * hw * 1.4, -q[0] * Ydesc, q[2]);
      neuron(root, fc, 0.62, { dirs: dirs, depth: 3, detail: 4, somaMat: memMat({ base: C.farBase, rim: C.farRim, nuc: fc, nucR: 0.4 }), denMat: farMatD });
    });

    // ---- uzakta odak dışı nöronlar (bulanık) ve süzülen zerreler
    var nFar = narrow ? 16 : 30;
    for (i = 0; i < nFar; i++) {
      var sm2 = new THREE.SpriteMaterial({ map: TEX.far[i % TEX.far.length], color: rnd() < 0.85 ? C.farRim : C.bokehB, transparent: true,
        opacity: rr(0.22, 0.5), blending: THREE.AdditiveBlending, depthWrite: false, rotation: rr(0, 6.28) });
      var spr = new THREE.Sprite(sm2), z = rr(-42, -16);
      spr.position.set(rr(-1.6, 1.6) * hw * (1 - z / 30), lerp(8, yN - 8, rr(0, 1)), z);
      spr.scale.setScalar(rr(7, 15));
      root.add(spr);
    }
    var bok = [], nB = narrow ? 90 : 170;
    for (i = 0; i < nB; i++) {
      var zb = rr(-34, 7), warm = rnd() < 0.2, near = zb > 2;
      bok.push({ p: new V3(rr(-1.3, 1.3) * hw * (1 + Math.max(0, -zb) / 14), lerp(7, yN - 7, rr(0, 1)), zb),
        size: near ? rr(0.9, 2.0) : rr(0.12, 0.5), col: warm ? C.bokehW : (rnd() < 0.5 ? C.bokehB : C.bokehB2),
        a: near ? rr(0.05, 0.12) : rr(0.2, 0.6) * (warm ? 1.2 : 1) });
    }
    points(bok, 0.75, root);
    // dendritlerdeki turuncu sinaps parıltıları
    var gl = [];
    MN.glints.concat(netGlints).forEach(function (p) { gl.push({ p: p, size: rr(0.1, 0.2), col: rnd() < 0.8 ? C.warm : C.hot, a: rr(0.5, 1) }); });
    connEnds.forEach(function (p) { gl.push({ p: p, size: 0.3, col: C.warm, a: 0.9 }); });
    points(gl, 0, root);

    // ---- sinyal (aksonda) ve kıvılcımlar için ışık lekeleri
    var imp = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.glow, color: C.warm, transparent: true, opacity: 1,
      blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false }));
    imp.scale.setScalar(0.9); imp.renderOrder = 30; fx.add(imp);

    var yTab = apts.map(function (p) { return p.y; });
    S = {
      root: root, fx: fx, curve: curve, apts: apts, aS: aS, Sax: Sax, yTab: yTab, nodesAt: nodesAt, Nax: Nax,
      look0y: look0y, look0x: look0x, look1y: look1y, D0: D0, D1: D1, Ds: Ds, hh: hh, narrow: narrow, scrollMax: scrollMax,
      mainTips: MN.tips, mainFlash: mainFlash, net: net, term: term, E: E, imp: imp,
      fired: false, tFire: 0, timers: [], sparks: [], nextDen: 0, nextAmb: 0, nextRe: 0
    };
    resize();
    S.tBuild = performance.now();
    if (KARE) { setTimeout(kareSetup, 0); if (!looping) requestAnimationFrame(frame); }
  }

  // ------------------------------------------------ çizim hattı
  function resize() {
    W = innerWidth; H = innerHeight;
    var big = Math.max(W, H) > 1600;
    pr = Math.min(window.devicePixelRatio || 1, big ? 1.25 : 1.5);
    if (W < 760) pr = Math.min(pr, 1.25);
    if (Q.level >= 1) pr = Math.min(pr, 1);
    renderer.setPixelRatio(pr); renderer.setSize(W, H);
    camera.aspect = W / H; camera.updateProjectionMatrix();
    bgMat.uniforms.uAsp.value = W / H;
    if (!composer) {
      composer = new THREE.EffectComposer(renderer);
      composer.addPass(new THREE.RenderPass(scene, camera));
      bloom = new THREE.UnrealBloomPass(new THREE.Vector2(W, H), 0.5, 0.5, 0.52);
      composer.addPass(bloom);
      fxaa = new THREE.ShaderPass(THREE.FXAAShader);
      composer.addPass(fxaa);
    }
    if (composer.setPixelRatio) composer.setPixelRatio(pr);
    composer.setSize(W, H);
    fxaa.material.uniforms.resolution.value.set(1 / (W * pr), 1 / (H * pr));
    var sc = H * pr / (2 * Math.tan(camera.fov * Math.PI / 360));
    ptMats.forEach(function (m) { m.uniforms.uScale.value = sc; });
  }

  // ------------------------------------------------ kıvılcımlar, zamanlayıcı, ateşleme
  function sparkSprites(size, color) {
    var arr = [];
    for (var i = 0; i < 4; i++) {
      var m = new THREE.SpriteMaterial({ map: TEX.glow, color: color, transparent: true, opacity: i ? 0.55 / i : 1,
        blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false });
      var sp = new THREE.Sprite(m); sp.scale.setScalar(size * (i ? 0.8 / Math.sqrt(i) : 1)); sp.visible = false; sp.renderOrder = 31;
      S.fx.add(sp); arr.push(sp);
    }
    return arr;
  }
  function spark(curve, t0, dur, size, color, done, rev) {
    S.sparks.push({ c: curve, t0: t0, dur: dur, sp: sparkSprites(size, color), done: done, rev: rev });
  }
  function later(t, fn) { S.timers.push({ t: t, fn: fn }); }
  function activate(i, t) {
    var n = S.net[i];
    if (!n || n.on) return;
    n.on = true; n.flash.value = 1;
    if (i === 0 && syn) syn.classList.add('fired');
    n.out.forEach(function (o) {
      if (!o.curve) return;
      spark(o.curve, t + 120, 650, 0.42, C.warm, function (t2) { activate(o.to, t2); });
    });
  }
  function boutonFire(b, t, first) {
    b.v = 1; b.ft = t;
    later(t + 140, function (t2) { if (first) activate(b.to, t2); else S.net[b.to].flash.value = 1; });
  }
  function fire(t) {
    S.fired = true; S.tFire = t;
    if (reduce || KARE) {   // hareket azaltma ya da sabit kare: son durum hemen
      S.net.forEach(function (n) { n.on = true; n.a = 1; }); S.term.forEach(function (b) { b.v = 1; b.ft = t - 160; });
      if (syn) syn.classList.add('fired');
      return;
    }
    S.term.forEach(function (b, j) { spark(b.curve, t + j * 60, 480, 0.5, C.hot, function (t2) { boutonFire(b, t2, true); }); });
  }
  function unfire() {
    S.fired = false; S.timers = [];
    S.sparks.forEach(function (k) { k.sp.forEach(function (s) { S.fx.remove(s); s.material.dispose(); }); }); S.sparks = [];
    S.net.forEach(function (n) { n.on = false; });
    S.term.forEach(function (b) { b.v = 0; });
    if (syn) syn.classList.remove('fired');
  }

  // sabit kare için yerinde duran kıvılcımlar
  function staticSpark(curve, u, size, color) {
    sparkSprites(size, color).forEach(function (sp, j) { sp.position.copy(curve.getPointAt(Math.max(0, u - j * 0.035))); sp.visible = true; });
  }
  function kareSetup() {
    var now = performance.now();
    if (KARE === 'son') {
      fire(now);
      S.net.forEach(function (n) { n.out.forEach(function (o, j) { if (o.curve && j === 0) staticSpark(o.curve, 0.62, 0.42, C.warm); }); });
      S.term.forEach(function (b) { staticSpark(b.curve, 0.9, 0.45, C.hot); });
    } else {
      [0, 5, 11, 17].forEach(function (i) {
        var ch = S.mainTips[i % S.mainTips.length], pts = [];
        for (var q = ch.length - 1; q >= 0; q -= 3) pts.push(ch[q]);
        pts.push(ch[0]);
        staticSpark(new THREE.CatmullRomCurve3(pts), 0.35 + (i % 3) * 0.2, 0.32, C.warm);
      });
    }
  }

  // ------------------------------------------------ kaydırma ve kamera
  var pT = 0, pC = 0, mx = 0, my = 0, mxT = 0, myT = 0, last = 0;
  function onScroll() { if (S) pT = Math.max(0, Math.min(1, scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight))); }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    mxT = (e.clientX / innerWidth - 0.5) * 0.5; myT = -(e.clientY / innerHeight - 0.5) * 0.3;
  }, { passive: true });

  function impS(y) {   // aksonda verilen yüksekliğe karşılık gelen yay uzunluğu
    var t = S.yTab;
    if (y >= t[0]) return 0;
    for (var i = 1; i < t.length; i++) if (t[i] <= y) return S.aS[i - 1] + (S.aS[i] - S.aS[i - 1]) * (t[i - 1] - y) / ((t[i - 1] - t[i]) || 1);
    return S.Sax;
  }

  // Akıcılık koruması (2026-10-13; kullanıcı: "görüntü kalitesi ve akıcılıkta kayıp istemem"): sahne kurulduktan sonra cihazda kare
  // hızı ölçülür. Akıcı cihazda (≥ 50 kare/sn) hiçbir şey değişmez. Takılan cihazda önce çizim yoğunluğu 1'e iner, hâlâ takılıyorsa
  // ışık taşması (bloom) kapanır. Her basamak bir kez, geri dönmeden; sekme arka plandayken ve sabit kare kipinde ölçülmez.
  function guard(now) {
    if (KARE || reduce || Q.level >= 2 || !S || document.hidden) { Q.n = 0; return; }
    if (now - S.tBuild < 1500) return;                       // ilk saniyeler (derleme, ilk yükleme) sayılmaz
    if (!Q.n) { Q.t0 = now; Q.prev = now; Q.lo = 1e9; Q.hi = 0; }
    else { var d = now - Q.prev; Q.prev = now; Q.lo = Math.min(Q.lo, d); Q.hi = Math.max(Q.hi, d); }
    if (++Q.n < 90) return;                                  // ~1,5 sn'lik pencere
    var fps = (Q.n - 1) * 1000 / Math.max(1, now - Q.t0);
    var even = Q.hi - Q.lo < 4;                              // kareler eşit aralıklı: cihazın kendi sınırı (ör. iPhone düşük güç modu 30), takılma değil
    Q.n = 0;
    if (fps >= 50 || even) { if (++Q.ok >= 2) Q.done = true; return; }   // iki pencere akıcıysa ölçüm biter
    Q.ok = 0;
    Q.level++;
    if (Q.level === 1) resize();
    else if (bloom) bloom.enabled = false;
    window.__sahneKalite = { level: Q.level, fps: Math.round(fps) };
  }
  var looping = false;
  function frame(now) {
    if (KARE && S && now - S.tBuild > 4000) { looping = false; return; }   // sabit kare: birkaç kare çiz, dur
    looping = true;
    requestAnimationFrame(frame);
    if (YAVAS) { var b = performance.now() + YAVAS; while (performance.now() < b) { /* sınama yükü */ } }
    step(now);
    if (!Q.done) guard(now);
  }
  function step(now) {
    if (!S) return;
    var dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000)); last = now;
    var tm = now / 1000;
    pC += (pT - pC) * (reduce || KARE ? 1 : 1 - Math.exp(-dt * 5));
    mx += (mxT - mx) * (1 - Math.exp(-dt * 3)); my += (myT - my) * (1 - Math.exp(-dt * 3));
    var p = pC, end = smooth(0.84, 1, p);
    var ly = lerp(S.look0y, S.look1y, p);
    var sway = (S.narrow ? 0.25 : 0.6) * Math.sin(p * 8.5) * (1 - end);
    var ang = 0.17 * Math.sin(p * 4.2 + 0.4) * (1 - end);
    var D = lerp(lerp(S.Ds, S.D0, smooth(0, 0.13, p)), S.D1, end) - 0.8 * Math.sin(Math.PI * smooth(0.13, 0.9, p)) * (1 - end);
    var lx = S.look0x * (1 - smooth(0, 0.16, p));
    camera.position.set(lx + Math.sin(ang) * D + sway + mx, ly + 0.6 + my, Math.cos(ang) * D);
    camera.lookAt(lx + sway * 0.4, ly, 0);
    SH.uFogS.value = D - 3;
    bgMat.uniforms.uP.value = p;

    // aksondaki sinyal: ekranın biraz altındaki yükseklik
    var s = impS(ly - 0.55);
    SH.uImp.value = s;
    var k = Math.min(S.Nax, Math.max(0, Math.round(s / S.Sax * S.Nax))), ip = S.apts[k];
    SH.uImpPos.value.copy(ip);
    S.imp.position.copy(ip);
    S.imp.scale.setScalar(0.75 + 0.15 * Math.sin(tm * 9) + (s > 0.05 ? 0.25 : 0));
    S.imp.material.opacity = s >= S.Sax - 0.02 && S.fired ? 0.35 : 0.95;

    // gövdeye dendritlerden gelen sinyaller (başta)
    if (!reduce && p < 0.16 && now > S.nextDen && S.mainTips.length) {
      S.nextDen = now + 700 + Math.random() * 900;
      var ch = S.mainTips[Math.floor(Math.random() * S.mainTips.length)], pts = [];
      for (var i = ch.length - 1; i >= 0; i -= 3) pts.push(ch[i]);
      pts.push(ch[0]);
      spark(new THREE.CatmullRomCurve3(pts), now, 1500, 0.32, C.warm, function () { S.mainFlash.value = 1; });
    }
    S.mainFlash.value *= Math.exp(-dt * 2.2);

    // son sahne
    if (!S.fired && pC > 0.975 && pT > 0.975) fire(now);
    if (S.fired && pT < 0.93) unfire();
    if (S.fired && !reduce) {
      if (now > S.nextAmb && now - S.tFire > 2600) {   // ağda dolaşan sinyaller
        S.nextAmb = now + 450 + Math.random() * 650;
        var on = S.net.filter(function (n) { return n.on && n.out.length; });
        if (on.length) {
          var n0 = on[Math.floor(Math.random() * on.length)], o = n0.out[Math.floor(Math.random() * n0.out.length)];
          if (o.curve) spark(o.curve, now, 700, 0.36, C.warm, function () { var t2 = S.net[o.to]; if (t2) t2.flash.value = Math.max(t2.flash.value, 0.7); });
        }
      }
      if (now > S.nextRe && now - S.tFire > 3800) {   // yeni sinyaller terminale ulaşır
        S.nextRe = now + 2600 + Math.random() * 1800;
        var b = S.term[Math.floor(Math.random() * S.term.length)];
        spark(b.curve, now, 480, 0.45, C.hot, function (t2) { boutonFire(b, t2, false); });
      }
    }
    S.timers = S.timers.filter(function (q) { if (now >= q.t) { q.fn(now); return false; } return true; });
    S.net.forEach(function (n, j) {
      n.a += ((n.on ? 1 : 0) - n.a) * (1 - Math.exp(-dt * (reduce ? 60 : 4)));
      n.act.value = n.a * (0.85 + 0.15 * Math.sin(tm * 2.1 + j));
      n.flash.value *= Math.exp(-dt * 2.4);
    });
    S.term.forEach(function (b) {
      b.v += ((S.fired ? 0.3 : 0) - b.v) * (1 - Math.exp(-dt * 1.6));
      b.vm.color.copy(C.vesOff).lerp(C.warm, Math.min(1, b.v));
      var u = (now - b.ft) / 700;
      b.flash.material.opacity = u >= 0 && u < 1 ? (1 - u) * 0.95 : 0;
      b.flash.scale.setScalar(0.4 + Math.min(1, Math.max(0, u)) * 1.2);
    });
    var done = [];
    S.sparks = S.sparks.filter(function (k2) {
      var u = (now - k2.t0) / k2.dur;
      if (u < 0) return true;
      if (u >= 1) { k2.sp.forEach(function (sp) { S.fx.remove(sp); sp.material.dispose(); }); if (k2.done) done.push(k2.done); return false; }
      var e2 = u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
      k2.sp.forEach(function (sp, j) {
        var uu = Math.max(0, e2 - j * 0.035);
        sp.position.copy(k2.c.getPointAt(k2.rev ? 1 - uu : uu)); sp.visible = true;
      });
      return true;
    });
    done.forEach(function (f) { f(now); });
    ptMats.forEach(function (m) { m.uniforms.uTime.value = tm; });
    composer.render();
  }

  // ------------------------------------------------ kurulum
  var rt = 0, lastH = 0, lastW = 0;
  function rebuild() { clearTimeout(rt); rt = setTimeout(function () { build(); onScroll(); lastH = main.offsetHeight; lastW = innerWidth; }, 200); }
  addEventListener('resize', rebuild);
  addEventListener('load', rebuild);
  if ('ResizeObserver' in window) new ResizeObserver(function () { if (Math.abs(main.offsetHeight - lastH) > 40 || innerWidth !== lastW) rebuild(); }).observe(main);
  build(); lastH = main.offsetHeight; lastW = innerWidth;
  if (KARE) {   // sabit kare: sayfayı istenen yere kaydır
    var go = function () {
      var max = document.documentElement.scrollHeight - innerHeight, v = KARE === 'son' ? 1 : KARE === 'bas' ? 0 : Math.max(0, Math.min(1, parseFloat(KARE) || 0));
      document.documentElement.style.scrollBehavior = 'auto';
      scrollTo(0, Math.round(v * max)); onScroll(); pC = pT;
    };
    go(); addEventListener('load', function () { setTimeout(go, 300); });
  }
  onScroll(); pC = pT;
  requestAnimationFrame(frame);
  window.__sahne = { get S() { return S; }, renderer: renderer, camera: camera,
    // görüntü almak için: n kare elle çizer (tarayıcı paneli gizliyken kare çizilmez), tuvali JPEG olarak döndürür
    ciz: function (n, ms) { onScroll(); var t = performance.now(); for (var i = 0; i < (n || 1); i++) step(t + i * (ms || 16)); return canvas; } };
})();
