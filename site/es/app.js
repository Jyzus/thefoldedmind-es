/* app.js — sahne, seçim, odak/arka plan geçişleri ve bilgi paneli */
(function () {
  'use strict';
  const t = window.I18N ? window.I18N.t : (s) => s;     // arayüz çevirisi (i18n.js; Türkçe metin anahtardır)
  if (window.I18N) { window.I18N.translateStatic(document.body); window.I18N.mountBox(); }   // statik metinler; sağ altta dil ve tema kutusu
  // En español los pasajes del libro también son una traducción (data/es/divan.js)
  const LOCALE = 'es';
  const BOOK_NOTE = '<p class="note bnote">Pasajes traducidos del libro del autor <i>The Green Walnut on the Couch</i> (original turco: <i>Divandaki Yeşil Ceviz</i>).</p>';
  const $ = (s) => document.querySelector(s);
  const loading = $('#loading');
  if (!window.THREE || !THREE.OrbitControls || !window.BrainModel || !window.NEURO_REGIONS) {
    loading.textContent = t('3B kütüphane yüklenemedi. Bağlantıyı kontrol edip sayfayı yenileyin.');
    return;
  }

  const DATA = {};
  window.NEURO_REGIONS.forEach((r) => { DATA[r.id] = r; });
  const GROUPS = [
    ['frontal', t('Frontal Lob')], ['parietal', t('Parietal Lob')], ['temporal', t('Temporal Lob')],
    ['occipital', t('Oksipital Lob')], ['limbiccx', t('Limbik Korteks & İnsula')], ['limbic', t('Limbik Yapılar')],
    ['basal', t('Bazal Ganglionlar')], ['dien', t('Diensefalon')], ['comm', t('Komissürler')],
    ['stem', t('Beyin Sapı')], ['cereb', t('Serebellum')]
  ];
  const GROUP_NAME = Object.fromEntries(GROUPS);
  const ORDER = [];   // üst düzey bölgeler (alt yapılar hariç): liste ve gezinme sırası
  const SEQ = ['caudate', 'putamen', 'gp', 'stn', 'sn', 'nacc', 'vp',
    'midbrain', 'pag', 'vta', 'rn', 'rf', 'ppn', 'raphe', 'pons', 'lc', 'pbc', 'medulla', 'vagal'];   // grup içi özel sıra
  GROUPS.forEach(([g]) => {
    const ids = window.NEURO_REGIONS.filter((r) => r.group === g && !r.parent).map((r) => r.id);
    ids.sort((a, b) => ((SEQ.indexOf(a) + 1) || 99) - ((SEQ.indexOf(b) + 1) || 99));
    ORDER.push(...ids);
  });
  // Alt yapılar (parent alanı): ebeveyn ya da çocuklarından biri seçilince "aile" açılır ve çocuklar görünür.
  // Ebeveynin sub alanı 'surface' ise çocuklar onun yüzeyini paylaşır ve ebeveyn gizlenir; aksi halde
  // ebeveyn saydamlaşır, çocuklar içinde görünür.
  const CHILDREN = {};
  window.NEURO_REGIONS.forEach((r) => { [r.parent, r.parent2].forEach((p) => { if (p) (CHILDREN[p] = CHILDREN[p] || []).push(r.id); }); });
  // İki ebeveynli alt yapı (parent2; temporal kutup ve STS, stg ile itg'ye yayılır): hangi aileden açıldıysa o ailede kalır
  let acikAile = null;
  const parentOf = (d) => (d.parent2 && acikAile === d.parent2 ? d.parent2 : d.parent);
  const inFamily = (d, fam) => !!d && !!fam && (d.parent === fam || d.parent2 === fam);
  const familyOf = (id) => (id && DATA[id] ? (CHILDREN[id] ? id : parentOf(DATA[id]) || null) : null);
  const navList = (id) => (DATA[id] && DATA[id].parent ? CHILDREN[parentOf(DATA[id])] : ORDER);

  // Kitap katmanı (Divandaki Yeşil Ceviz)
  const DV = window.DIVAN || null;
  const SYS = {}, PATH = {};
  // Büyük ölçekli beyin ağları (data/networks.js): Yeo 2011 yedi ağı ve çoklu talep çekirdeği; 'all' = yedisi bir arada
  const NETS = {};
  (window.NEURO_NETWORKS || []).forEach((n) => { NETS[n.id] = n; });
  const NET_LIST = window.NEURO_NETWORKS || [];
  NETS.all = { id: 'all', all: true, name: t('Yedi Ağ Bir Arada'), short: 'Yeo 7', eng: 'Yeo 2011 seven-network parcellation',
    color: '#cd3e4e', core: [], related: [],
    summary: t('Korteksin her noktası, dinlenimde en çok birlikte salındığı ağın renginde: Yeo ve arkadaşlarının 1000 kişiyle çıkardığı yedi ağ.') };
  // Canlı yolaklar ve nörotransmitter sistemleri (data/flows.js)
  const FD = window.FLOWDATA || null;
  const NTS = {};
  const NT_LIST = FD ? FD.NT : [];
  NT_LIST.forEach((n) => { NTS[n.id] = n; });
  // Tanılar (data/tanilar.js): seçilince çekirdek ve ilişkili bölgeler, ağlar ve nörotransmitter sistemleri birlikte gösterilir
  const TANI = {};
  const TANI_LIST = window.TANILAR || [];
  TANI_LIST.forEach((d) => { ['core', 'related', 'nets', 'nt', 'panksepp'].forEach((k) => { d[k] = d[k] || []; }); TANI[d.id] = d; });
  // Sık yinelenen kısa uyarı (ilaç kartı, ilaç listesi, tanıların Tedavi merceği, giriş kartı; kullanıcı 2026-10-16: "sorumluluk reddini sıklaştıralım")
  const UYARI = t('Eğitim amaçlıdır, tıbbi tavsiye değildir. Tanı ve tedavi kararı hekimle verilir; doz yazılmaz.');
  const TARIH_NOTU = t('Onay durumları ve prospektüs bilgileri Ekim 2026\'da bakılan kaynaklara göredir; zamanla değişebilir, güncel ürün bilgisinden doğrulanmalıdır.');
  // İlaçlar (data/ilaclar.js): seçilince ilacın etki yeri, yan etki yolları, çocuk-ergen onayları ve etkileşimler
  const ILAC = {};
  const ILAC_LIST = window.ILACLAR || [];
  ILAC_LIST.forEach((d) => { ILAC[d.id] = d; });
  // Tanının canlı yolağı: nörotransmitter sistemlerinin (nt) yollarından hedefi tanının bölgelerinden biri olanlar (flowAll: hepsi)
  if (FD) TANI_LIST.forEach((d) => {
    const mine = new Set(d.core.concat(d.related)), routes = [];
    d.nt.forEach((k) => {
      const def = FD.SETS['nt:' + k];
      if (def) def.routes.forEach((rt) => { if (d.flowAll || mine.has(rt.to)) routes.push(rt); });
    });
    if (routes.length) FD.SETS['tani:' + d.id] = { routes, note: d.flowAll ? t('Tanıyla ilişkili nörotransmitter sistemlerinin bütün yolları çizilir.')
      : t('Tanıyla ilişkili nörotransmitter sistemlerinin yollarından, hedefi bu tanının bölgelerinden biri olanlar çizilir.') };
  });
  const SET_TAB = { sys: t('Sistemler'), path: t('Yolaklar'), net: t('Ağlar'), nt: t('Nörotransmitterler'), tani: t('Tanılar'), ilac: t('İlaçlar') };
  const LTAB_OF = { sys: 'sys', path: 'path', net: 'net', nt: 'nt', tani: 'tani', ilac: 'ilac' };
  const setSrc = (k, id) => (k === 'sys' ? SYS[id] : k === 'net' ? NETS[id] : k === 'nt' ? NTS[id] : k === 'tani' ? TANI[id] : k === 'ilac' ? ILAC[id] : PATH[id]);
  const setName = (k, src) => (k === 'sys' ? src.id : k === 'tani' ? src.short : src.name);
  if (DV) {
    DV.systems.forEach((s) => { s.slug = s.id.toLowerCase().replace('/', '-'); SYS[s.id] = s; });
    DV.pathways.forEach((p) => { PATH[p.id] = p; });
  }
  const hasBook = (id) => !!(DV && DV.map[id]);

  const TABS = [
    ['functions', t('İşlevler')], ['divan', t('Kitapta')], ['anatomy', t('Anatomi')], ['tests', t('Değerlendirme')],
    ['development', t('Gelişim')], ['clinical', t('Klinik')], ['treatment', t('Tedavi')], ['lesion', t('Hasar')], ['links', t('Bağlantılar')]
  ];
  const TAB_LEAD = {
    tests: t('Bu bölgenin işlevini yoklayan nöropsikolojik görevler ve ölçümler.'),
    lesion: t('Hasar veya işlev bozukluğunda beklenen klinik bulgular.'),
    development: t('Çocukluk ve ergenlik boyunca gelişimsel seyir.'),
    treatment: t('İlaç, psikoterapi ve nöromodülasyon açısından bu bölge. Harf rozetleri kanıt düzeyidir.')
  };
  const EVIDENCE = { A: t('Kanıt A: büyük konsorsiyum, meta-analiz ya da düzenleyici karar'), B: t('Kanıt B: tekrarlanmış çalışmalar ya da klasik vaka'),
    C: t('Kanıt C: tek ya da öncü çalışma, deneysel uygulama') };
  // Tanı mercekleri (data/tanilar.js → mercek). Her mercek 3B görünümü değiştirir: Devre (canlı döngü, sağlıklı ↔ hastalık modeli),
  // Bulgular (etki yönü ve büyüklüğüne göre renk), Belirtiler (belirtinin devresi), Tedavi (etki yeri, elektrot, bobin),
  // Bölgeler (çekirdek ve ilişkili bölgeler, nörotransmitter yolları), Kitapta (birebir alıntılar). Seçimler tanı başına saklanır.
  const LENS = [['devre', t('Devre')], ['bulgular', t('Bulgular')], ['belirtiler', t('Belirtiler')], ['tedavi', t('Tedavi')],
    ['genel', t('Bölgeler')], ['kitapta', t('Kitapta')]];
  const taniLenses = (d) => LENS.filter(([k]) => (k === 'genel' ? true
    : k === 'kitapta' ? (d.kitapta || []).length > 0 || d.panksepp.length > 0 : !!(d.mercek && d.mercek[k])));
  const TST = {};
  function taniState(d) {
    if (!TST[d.id]) {
      const m = d.mercek || {};
      TST[d.id] = { lens: m.devre ? 'devre' : 'genel', model: m.devre ? Object.keys(m.devre.modes).slice(-1)[0] : '',
        grup: m.bulgular ? m.bulgular.gruplar[0].id : '', belirti: m.belirtiler ? m.belirtiler[0].id : '', tedavi: m.tedavi ? m.tedavi[0].id : '' };
    }
    return TST[d.id];
  }
  // etki rengi: sıcak = daha büyük/kalın/etkin, soğuk = daha küçük/ince; |d| 0,4'te tam doygun
  const EFF_POS = new THREE.Color('#ff7a3a'), EFF_NEG = new THREE.Color('#3f8cff'), EFF_MID = new THREE.Color('#a39fb3');
  const effectHex = (dv) => '#' + EFF_MID.clone().lerp(dv >= 0 ? EFF_POS : EFF_NEG, 0.35 + 0.65 * Math.min(1, Math.abs(dv) / 0.4)).getHexString();
  // Tedavi kartının canlı yolu: bir ya da birkaç küme (flow: 'nt:da' ya da ['nt:da', 'nt:ne']); flowTo yalnızca ilacın etki yerindeki hedefleri
  // bırakır: dizi bütün kümelere, nesne kümeye göre ({ 'nt:5ht': ['mpfc', …] }). Ör. metilfenidat: striatum ve prefrontalde dopamin + noradrenalin.
  function flowOf(x) {
    const keys = [].concat(x.flow), routes = [];
    keys.forEach((k) => {
      const set = FD && FD.SETS[k], to = Array.isArray(x.flowTo) ? x.flowTo : x.flowTo && x.flowTo[k];
      if (set) set.routes.forEach((rt) => { if (!to || to.includes(rt.to)) routes.push(rt); });
    });
    if (!routes.length) return null;
    const one = keys.length === 1 && !x.flowTo && FD.SETS[keys[0]];
    return one || { routes };
  }
  // İlaç görünümü: Etki merceği ya da seçili yan etki. Yollar nörotransmitter kümelerinden alınır, flowTo ile ilacın etki yerine
  // süzülür, gain ile hız/yoğunluk/parlaklık değişir (geri alım kapanınca yoğun ve parlak; reseptör kapanınca seyrek ve sönük). Net etki yok.
  const IST = {};
  function ilacState(d) { if (!IST[d.id]) IST[d.id] = { lens: 'etki', yan: d.yanetki ? d.yanetki[0].id : '' }; return IST[d.id]; }
  function ilacYol(x) {
    const keys = [].concat(x.flow || []), routes = [];
    keys.forEach((k) => {
      const set = FD && FD.SETS[k], to = Array.isArray(x.flowTo) ? x.flowTo : x.flowTo && x.flowTo[k], g = x.gain && x.gain[k];
      if (set) set.routes.forEach((rt) => {
        if (to ? !to.includes(rt.to) : rt.to === '@body') return;   // omuriliğe inen yollar (modelde omurilik yok) yalnız istenirse
        routes.push(g ? Object.assign({}, rt, { spd: g[0], n: g[1], dim: g[2] }) : rt);
      });
    });
    return routes.length ? { routes, holo: true } : null;
  }
  function ilacView(d) {
    const s = ilacState(d), y = s.lens === 'yanetki' && d.yanetki ? (d.yanetki.find((z) => z.id === s.yan) || d.yanetki[0]) : null, x = y || d.etki;
    const v = { core: x.core, related: x.related || [], def: ilacYol(x), key: d.id + ':' + (y ? 'yan:' + y.id : 'etki'), hot: x.hot || [], cold: x.cold || [],
      holo: true, item: x, colors: null, marker: null };
    if (v.def) {     // yolun uçları her zaman görünür (tanı merceklerindeki gibi)
      const have = new Set(v.core.concat(v.related)), extra = [];
      v.def.routes.forEach((rt) => [rt.from, rt.to].forEach((z) => { if (z[0] !== '@' && DATA[z] && !have.has(z)) { have.add(z); extra.push(z); } }));
      if (extra.length) v.related = v.related.concat(extra);
    }
    return v;
  }
  // Tanının şu anki görünümü: { core, related, def (canlı yol), key, colors, hot, marker, item }
  let viewMemo = { k: '', v: null };
  function taniView(d) {
    const s = taniState(d), m = d.mercek || {};
    const mk = [d.id, s.lens, s.model, s.grup, s.belirti, s.tedavi].join(':');
    if (viewMemo.k === mk) return viewMemo.v;
    const v = { core: d.core, related: d.related, def: null, key: d.id + ':genel', colors: null, hot: [], marker: null, item: null };
    if (s.lens === 'devre' && m.devre) {
      const c = m.devre, mode = c.modes[s.model] || {}, gain = mode.gain || {};
      Object.assign(v, { core: c.core, related: c.related, key: d.id + ':devre:' + s.model, yon: c.yon, hot: mode.hot || [], cold: mode.cold || [], hotTaraf: mode.hotTaraf || null, item: mode, holo: true,
        def: { routes: c.routes.map((rt) => { const g = gain[rt.cls]; return g ? Object.assign({}, rt, { spd: g[0], n: g[1], dim: g[2] }) : rt; }) } });
    } else if (s.lens === 'bulgular' && m.bulgular) {
      const g = m.bulgular.gruplar.find((x) => x.id === s.grup) || m.bulgular.gruplar[0];
      Object.assign(v, { core: g.items.map((it) => it.id), related: [], key: d.id + ':bulgular:' + g.id, hot: g.hot || [], cold: g.cold || [], item: g,
        colors: new Map(g.items.map((it) => [it.id, effectHex(it.d)])), taraf: new Map(g.items.filter((it) => it.side).map((it) => [it.id, it.side])) });
    } else if (s.lens === 'belirtiler' && m.belirtiler) {
      const b = m.belirtiler.find((x) => x.id === s.belirti) || m.belirtiler[0];
      Object.assign(v, { core: b.core, related: b.related || [], key: d.id + ':belirti:' + b.id, item: b, holo: true, yon: b.yon, def: b.routes ? { routes: b.routes } : null });
    } else if (s.lens === 'tedavi' && m.tedavi) {
      const x = m.tedavi.find((y) => y.id === s.tedavi) || m.tedavi[0];
      Object.assign(v, { core: x.core, related: x.related || [], key: d.id + ':tedavi:' + x.id, item: x,
        def: x.flow ? flowOf(x) : x.routes ? { routes: x.routes } : null, marker: x.elektrot || x.bobin ? x : null, taraf: x.taraf ? new Map(Object.entries(x.taraf)) : null });
    } else v.def = (FD && FD.SETS['tani:' + d.id]) || null;
    // yolların uç bölgeleri her zaman görünür: listede yoksa ilişkili bölgelere eklenir (yol boşlukta bitmesin; derin odakta korteks saçılmasın)
    if (v.def) {
      const have = new Set(v.core.concat(v.related)), extra = [];
      v.def.routes.forEach((rt) => [rt.from, rt.to].forEach((x) => { if (x[0] !== '@' && DATA[x] && !have.has(x)) { have.add(x); extra.push(x); } }));
      if (extra.length) v.related = v.related.concat(extra);
    }
    viewMemo = { k: mk, v };
    return v;
  }

  // Kamera yönleri (hedeften kameraya). Sağ elli sistem: hastanın sağı -X.
  const VIEWS = {
    start: [1, 0.2, 0.16],    // açılış: sol yandan, çok hafif üstten ve önden (kullanıcı 2026-10-08: "o kadar yukarıdan bakmasın")
    lateralR: [-1, 0.18, 0.12], lateralL: [1, 0.18, 0.12], medial: [1, 0.12, 0.04],
    superior: [-0.03, 1, -0.28], inferior: [-0.03, -1, 0.3], anterior: [-0.12, 0.14, 1], posterior: [-0.25, 0.22, -1]
  };
  const TISSUE = { cortex: '#cfa79e', medialwall: '#b9a39d', cc: '#e9e1d3', deep: '#bf968b', stem: '#c6a28e', cereb: '#c99c92' };
  const SHELL = new Set(['midbrain', 'pons', 'medulla']);   // içinde çekirdek taşıyan beyin sapı kabukları
  // Canlı yolların küçük kaynak çekirdekleri (kullanıcı 2026-10-24: kaynak parıltısı küçük çekirdeği örtüyordu): hologram kümelerinde
  // opak ve kendi renginde çizilir, üstüne dolgusuz halka ve kısa ad konur (parıltı yok).
  const SRC_MARK = new Set(['vta', 'snc', 'raphe', 'lc', 'ppn', 'nbm', 'dbb', 'hy_tm', 'hy_lh', 'hy_arc']);
  // Canlı yollardan fareyle üzerine gelinen (hov) ve basılarak seçilen (pick) yol ya da yollar (kullanıcı 2026-10-24: "farklı kaynak
  // çıkışlı farklı hedefli yollar var ya, üzerine gelince ya da basınca belirginleşsin, isim görünsün"). ris: kümenin rota sıraları,
  // lead: adların önce yazılacağı yol ve taraf, key: rota sıralarından anahtar, fkey: yolun ait olduğu küme ya da mercek (flowSel().key).
  const rsel = { hov: null, pick: null };
  // Yüzeylerin iç içe geçmesi (kullanıcı 2026-10-24: "turuncu küf"): alt yapılarıyla birlikte gösterilen ebeveyn (talamus, hipotalamus,
  // GP, SN) yüzey yönünde dışa itilir; çekirdekler ebeveyni tam doldurduğu için iki yüzey aynı sınırda bir öne bir arkaya geçiyordu.
  // Kayma gözle görülmez (talamus ~30 mm); derinlik ön geçişi de aynı kaymayla çizilir. (Hologram düğümlerini 0,4 mm içe almak denendi:
  // komşu yapıların soluk lekelerini gidermedi, yeni beyaz çizgiler getirdi; yapılmadı.)
  const SHELL_GROW = 0.9 * 2 / 176;      // +0,9 mm (web birimi)
  const BRAIN_CENTER = new THREE.Vector3(0, -0.12, -0.04);
  const START_ZOOM = 1.14;   // açılış ve "Başa dön": bütün beyni gösteren uzaklıktan biraz geride

  /* ---------- sahne ---------- */
  const stage = $('#stage');
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.setClearColor(0x000000, 0);
  renderer.localClippingEnabled = true;     // MR kesit görünümünde model kesit düzleminden kesilir
  stage.appendChild(renderer.domElement);
  const canvas = renderer.domElement;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 60);
  // Gezinme kamerası: fare ve dokunma bunu sürer (OrbitControls), geçişler de bunu taşır. Ekrandaki kamera her karede
  // ondan türetilir: yön aynı, uzaklık viewDistance ile ("Yakınlaşınca aç" kipinde açılma sırasında yavaş büyütme).
  const nav = new THREE.PerspectiveCamera(32, 1, 0.05, 60);
  scene.add(camera);
  scene.add(new THREE.HemisphereLight(0xe4ecff, 0x2c2224, 0.7));
  const key = new THREE.DirectionalLight(0xfff4ea, 1.25); key.position.set(-2.5, 3, 4); camera.add(key);
  const fill = new THREE.DirectionalLight(0xbcd0ff, 0.35); fill.position.set(3, -1, 2); camera.add(fill);
  const rim = new THREE.DirectionalLight(0xffffff, 0.55); rim.position.set(0, 2, -5); camera.add(rim);

  const controls = new THREE.OrbitControls(nav, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 1.4;
  controls.maxDistance = 14;
  controls.rotateSpeed = 0.8;
  controls.enablePan = false;          // beyin hep ortada: kaydırma yok, yalnızca döndürme ve yakınlaştırma
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.55;
  controls.target.copy(BRAIN_CENTER);
  if (window.__kare) window.__atlas = { camera, nav, controls, center: BRAIN_CENTER, pick: (x, y) => pickAt(x, y), flow: () => flow, rsel };   // yalnızca yerel görüntü aracında (?kare=elle)

  const ghostColor = new THREE.Color();
  function readTheme() {
    const v = getComputedStyle(document.documentElement).getPropertyValue('--ghost').trim() || '#9fb6e0';
    ghostColor.set(v);
  }
  readTheme();
  // ağ görünümü: bütün korteks malzemeleri aynı tekdüzeleri paylaşır (kip: 0 kapalı, 1 tek Yeo ağı, 2 yedi ağ, 3 çoklu talep)
  const NETU = { uNetMode: { value: 0 }, uNetId: { value: 0 }, uNetCols: { value: [] } };
  (function () {
    const lin = (h) => new THREE.Color(h).convertSRGBToLinear();
    const cols = [lin('#bdb7b1')];                 // 0: ağ dışı ya da etiketsiz (orta hat) korteks
    for (let i = 1; i <= 7; i++) { const n = NET_LIST.find((x) => x.yeo === i); cols.push(lin(n ? n.color : '#888888')); }
    const md = NET_LIST.find((x) => x.md);
    cols.push(lin(md ? md.color : '#2bbfd6'));     // 8: çoklu talep çekirdeği
    NETU.uNetCols.value = cols;
  })();
  try { window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', readTheme); } catch (e) { /* eski tarayıcı */ }
  new MutationObserver(readTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  function makeMaterial(hex) {
    const m = new THREE.MeshStandardMaterial({ color: new THREE.Color(hex).convertSRGBToLinear(), roughness: 0.64, metalness: 0 });
    const u = {
      uGhost: { value: 0 }, uHover: { value: 0 }, uSel: { value: 0 },
      uGhostColor: { value: ghostColor }, uGhostAlpha: { value: 0.3 },
      uAoMin: { value: 0.6 }, uFade: { value: 1 }, uTint: { value: 0 }, uNetMix: { value: 0 }, uHot: { value: 0 }, uCold: { value: 0 },
      uGrow: { value: 0 }, uZone: { value: 0 }, uSideGray: { value: 0 }
    };
    m.userData.u = u;
    m.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, u, NETU);
      // oluk derinliği (sulkuslar koyu, girus tepeleri açık) ve ortam kapatma (girintiler ve kıvrım içleri koyu)
      sh.vertexShader = 'attribute float sulc;\nattribute float ao;\nattribute float net;\nattribute float zn;\nvarying float vZn;\nvarying float vSulc;\nvarying float vAo;\n' +
        'uniform float uNetMode;\nuniform float uNetId;\nuniform vec3 uNetCols[9];\nvarying vec3 vNetCol;\nuniform float uGrow;\n' +
        sh.vertexShader.replace('#include <begin_vertex>', ['#include <begin_vertex>', 'transformed += objectNormal * uGrow;', 'vZn = zn;', 'vSulc = sulc;', 'vAo = ao;',
          // köşenin ağı: Yeo (net mod 8) ve çoklu talep (net ≥ 8); seçili ağda değilse nötr gri
          'float yeo = mod(net, 8.0);',
          'vNetCol = uNetCols[0];',
          'if (uNetMode > 1.5 && uNetMode < 2.5) vNetCol = uNetCols[int(yeo + 0.5)];',
          'else if (uNetMode > 0.5 && uNetMode < 1.5 && abs(yeo - uNetId) < 0.5) vNetCol = uNetCols[int(uNetId + 0.5)];',
          'else if (uNetMode > 2.5 && net > 7.5) vNetCol = uNetCols[8];'].join('\n'));
      sh.fragmentShader = 'uniform float uGhost;\nuniform float uHover;\nuniform float uSel;\nuniform vec3 uGhostColor;\nuniform float uGhostAlpha;\n' +
        'uniform float uAoMin;\nuniform float uFade;\nuniform float uTint;\nuniform float uNetMix;\nuniform float uHot;\nuniform float uCold;\nuniform float uZone;\nuniform float uSideGray;\nvarying float vZn;\nvarying float vSulc;\nvarying float vAo;\nvarying vec3 vNetCol;\n' +
        sh.fragmentShader
          .replace('#include <color_fragment>', ['#include <color_fragment>',
            'diffuseColor.rgb = mix(diffuseColor.rgb, vNetCol, uNetMix);',
            // alt alan (ör. mPFC içinde vmPFC): ait olduğu yapının renginde kalır, yalnız biraz farklılaşır (kullanıcı 2026-11-05: "renk çok değişmemeli");
            // alan hafif aydınlık, geri kalanı hafif koyu, sınırda ince aydınlık çizgi. hot/cold nabzı yalnız alanda. Sınır, köşe alanının eşit düzey çizgisi
            'float zIn = smoothstep(0.42, 0.58, vZn), zOut = uZone * (1.0 - zIn);',
            'diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11))), uSideGray * zOut);',
            'diffuseColor.rgb *= 1.0 - 0.14 * zOut + 0.08 * uZone * zIn;',
            'diffuseColor.rgb *= 1.0 + uZone * 0.2 * smoothstep(0.34, 0.5, vZn) * (1.0 - smoothstep(0.5, 0.66, vZn));',
            'diffuseColor.rgb *= mix(0.5, 1.04, smoothstep(0.0, 1.0, vSulc));',
            'diffuseColor.rgb *= mix(uAoMin, 1.0, vAo);'].join('\n'))
          .replace('#include <dithering_fragment>', [
          'float fres = pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.0);',
          'gl_FragColor.rgb += uHover * 0.09 + uSel * (0.04 + 0.3 * fres) * diffuseColor.rgb;',
          'vec3 gcol = mix(uGhostColor, diffuseColor.rgb * 1.35 + 0.06, uTint) * (0.3 + 0.95 * fres);',
          'gl_FragColor.rgb = mix(gl_FragColor.rgb, gcol, uGhost);',
          'gl_FragColor.a = mix(gl_FragColor.a, uGhostAlpha * (0.1 + 0.9 * fres), uGhost);',
          'float hotK = uHot * mix(1.0, zIn, uZone), coldK = uCold * mix(1.0, zIn, uZone);',
          'gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0, 0.5, 0.12), hotK * 0.45) + hotK * vec3(1.0, 0.42, 0.08) * (0.25 + 1.2 * fres);',
          'gl_FragColor.a = max(gl_FragColor.a, hotK * (0.4 + 0.55 * fres));',
          'gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2, 0.42, 1.0), coldK * 0.4) + coldK * vec3(0.15, 0.4, 1.0) * (0.2 + 1.0 * fres);',
          'gl_FragColor.a = max(gl_FragColor.a, coldK * (0.4 + 0.55 * fres));',
          'gl_FragColor.a *= uFade;',
          '#include <dithering_fragment>'
        ].join('\n'));
    };
    return m;
  }

  /* ---------- durum ---------- */
  const R = {};          // id → { id, data, kind, mat, meshes, vols, center, ghostT, selT, hoverT }
  const pickMeshes = [];
  // "Sol yarıküreyi gizle" (kullanıcı 2026-10-19: "o bölgenin limbik sistemleri de gizlenmeli, çapraz geçiş olmayan bölgeler"): sol korteksle
  // birlikte ön beyin ve aradaki beynin iki taraflı derin yapılarının sol yarısı da gizlenir. Orta hat yapıları (hipotalamus, VTA, PAG,
  // rafe, korpus kallozum), beyin sapı çekirdekleri ve beyincik kalır: iç yüz görünümünde orta hat ve beyin sapı birlikte okunur.
  const LEFT_HIDE = new Set(['amygdala', 'hippocampus', 'bnst', 'nbm', 'dbb', 'caudate', 'putamen', 'gp', 'gpe', 'gpi', 'nacc', 'vp', 'thalamus',
    'th_pul', 'th_ant', 'th_md', 'th_vld', 'th_cl', 'th_va', 'th_vlv', 'hb', 'stn']);
  const leftHidden = (m, r) => { if (!state.hideLeft || m.userData.side !== 'L' || !r || !(r.kind === 'cortex' || LEFT_HIDE.has(r.id))) return false;
    const v = activeSet(); return !(v && v.view && v.view.taraf && v.view.taraf.get(r.id) === 'L'); };   // tek yanlı sol bulgu iç yüz görünümünde de kalır
  const state = { selected: null, set: null, hovered: null, xray: false, hideLeft: false, tissue: false, tab: 'functions',
    cortexMode: 'sacil', ltab: 'regions', trail: null,
    zoomOpen: false };   // yakınlaştırdıkça korteks ve beyincik katman katman açılır, hayalet olarak çevrede kalır   // trail: bölgeye bir kitap kümesinden gelindiyse o küme   // derin odakta korteks: 'sacil' (dışa saçılır), 'gizle' (yerinde söner), 'hayalet' (saydam)
  try {
    const m = localStorage.getItem('atlas.korteks'); if (['sacil', 'gizle', 'hayalet'].includes(m)) state.cortexMode = m;
    state.zoomOpen = localStorage.getItem('atlas.acilim') === '1';
  } catch (e) { /* depolama kapalı */ }
  // Etkin küme (Panksepp sistemi, yolak, ağ, nörotransmitter ya da tanı): { core:Set, related:Set, flow:Set }
  // flow: canlı yolağın uç bölgeleri. Bunlar işlevsel olarak devrededir: hayalet değil, kendi renginde ve opak çizilir.
  // Tanıda yolak uçları vurgulanmaz: vurgu yalnızca tanının çekirdek ve ilişkili bölgelerindedir (yollar yine çizilir).
  function activeSet() {
    if (!state.set) return null;
    const src = setSrc(state.set.kind, state.set.id);
    if (!src) return null;
    if (state.set.kind === 'tani') {
      const v = taniView(src);
      return { src, core: new Set(v.core), related: new Set(v.related), flow: new Set(), view: v };
    }
    if (state.set.kind === 'ilac') {
      const v = ilacView(src);
      return { src, core: new Set(v.core), related: new Set(v.related), flow: new Set(), view: v };
    }
    const def = FD && FD.SETS[state.set.kind + ':' + state.set.id], flow = new Set();
    if (def) def.routes.forEach((rt) => [rt.from, rt.to].forEach((x) => { if (x.charAt(0) !== '@' && DATA[x]) flow.add(x); }));
    // holo: derin düğümler yarı saydam hologram, yollar içlerinden görünür (glutamat ve GABA; tanı merceklerindeki gibi)
    return { src, core: new Set(src.core), related: new Set(src.related), flow, holo: !!(def && def.holo) };
  }
  const inSet = (set, id) => set.core.has(id) || set.related.has(id) || set.flow.has(id);

  // Seçili korteks bölgesinin gri madde şeridi: ayrıntılı yüzey (dış, pial) aynen kalır; altına köşe başına korteks kalınlığı
  // (brain.js → userData.thk, mm; şablonda ak maddeye uzaklık) kadar içe kaydırılmış iç yüzey ve bölge sınırı boyunca kesik
  // kenar duvarı eklenir. Duvar ve iç yüzey koyu gölgelenir (kesilmiş gri madde). Bölgenin malzemesini paylaşırlar: saydamlık,
  // seçim parıltısı ve saçılma yüzeyle birlikte işler. Bölge ilk kez odağa girince kurulur (önceden ayrı, kaba hacim modelleri
  // yükleniyordu: daha az ayrıntı ve 3 MB ek paket).
  const RIB_SHADE = { wallOut: [0.0, 0.34], wallIn: [0.0, 0.12], inner: [0.0, 0.2] };   // [sulc, ao]: duvar dışı, duvar içi, iç yüzey (koyu: kesik doku)
  function shadeAttrs(geo, n, pairs) {
    const su = new Float32Array(n), ao = new Float32Array(n), net = new Float32Array(n);
    pairs.forEach(([from, to, v]) => { su.fill(v[0], from, to); ao.fill(v[1], from, to); });
    geo.setAttribute('sulc', new THREE.BufferAttribute(su, 1));
    geo.setAttribute('ao', new THREE.BufferAttribute(ao, 1));
    geo.setAttribute('net', new THREE.BufferAttribute(net, 1));
  }
  function buildRibbon(mesh, mat) {
    const g = mesh.geometry, thk = g.userData.thk;
    if (!thk) return [];
    const P = g.attributes.position.array, I = g.index.array, nv = P.length / 3;
    // içe kaydırma yönü: komşu ortalamasıyla yumuşatılmış normal (kıvrım diplerinde ve sınırda iç yüzey kendi üstüne katlanmasın)
    const deg = new Uint32Array(nv + 1);
    for (let f = 0; f < I.length; f++) deg[I[f] + 1] += 2;
    for (let i = 0; i < nv; i++) deg[i + 1] += deg[i];
    const adj = new Uint32Array(deg[nv]), fill = deg.slice(0, nv);
    for (let f = 0; f < I.length; f += 3) for (let e = 0; e < 3; e++) {
      const a = I[f + e], b = I[f + (e + 1) % 3];
      adj[fill[a]++] = b; adj[fill[b]++] = a;
    }
    let S = Float32Array.from(g.attributes.normal.array);
    for (let it = 0; it < 8; it++) {
      const T = new Float32Array(S.length);
      for (let i = 0; i < nv; i++) {
        let x = S[3 * i], y = S[3 * i + 1], z = S[3 * i + 2];
        for (let k = deg[i]; k < deg[i + 1]; k++) { const j = adj[k]; x += S[3 * j]; y += S[3 * j + 1]; z += S[3 * j + 2]; }
        const l = Math.hypot(x, y, z) || 1;
        T[3 * i] = x / l; T[3 * i + 1] = y / l; T[3 * i + 2] = z / l;
      }
      S = T;
    }
    const Q = new Float32Array(P.length);
    for (let i = 0; i < nv; i++) {
      const t = thk[i] * K_WEB;
      Q[3 * i] = P[3 * i] - S[3 * i] * t; Q[3 * i + 1] = P[3 * i + 1] - S[3 * i + 1] * t; Q[3 * i + 2] = P[3 * i + 2] - S[3 * i + 2] * t;
    }
    // iç yüzey: aynı üçgenler ters yönde (ak maddeye bakar)
    const J = new (I.constructor)(I.length);
    for (let f = 0; f < I.length; f += 3) { J[f] = I[f]; J[f + 1] = I[f + 2]; J[f + 2] = I[f + 1]; }
    const inner = new THREE.BufferGeometry();
    inner.setAttribute('position', new THREE.BufferAttribute(Q, 3));
    inner.setIndex(new THREE.BufferAttribute(J, 1));
    inner.computeVertexNormals();
    shadeAttrs(inner, nv, [[0, nv, RIB_SHADE.inner]]);
    // duvar: bölge sınırındaki kenarlar (yalnız bir üçgende geçen) üçgenin yönüyle; dörtgen (a, a', b, b') dışa bakar
    const cnt = new Map(), key = (a, b) => (a < b ? a * nv + b : b * nv + a);
    for (let f = 0; f < I.length; f += 3) for (let e = 0; e < 3; e++) { const k = key(I[f + e], I[f + (e + 1) % 3]); cnt.set(k, (cnt.get(k) || 0) + 1); }
    const wid = new Map(), outP = [], inP = [], wi = [];
    const vid = (i) => { let w = wid.get(i); if (w === undefined) { w = outP.length / 3; wid.set(i, w); outP.push(P[3 * i], P[3 * i + 1], P[3 * i + 2]); inP.push(Q[3 * i], Q[3 * i + 1], Q[3 * i + 2]); } return w; };
    const edges = [];
    for (let f = 0; f < I.length; f += 3) for (let e = 0; e < 3; e++) {
      const a = I[f + e], b = I[f + (e + 1) % 3];
      if (cnt.get(key(a, b)) === 1) edges.push(vid(a), vid(b));
    }
    const nw = outP.length / 3;
    for (let k = 0; k < edges.length; k += 2) { const A = edges[k], B = edges[k + 1]; wi.push(A, A + nw, B, B, A + nw, B + nw); }
    const wall = new THREE.BufferGeometry();
    wall.setAttribute('position', new THREE.BufferAttribute(new Float32Array(outP.concat(inP)), 3));
    wall.setIndex(new THREE.BufferAttribute(nw * 2 > 65535 ? new Uint32Array(wi) : new Uint16Array(wi), 1));
    wall.computeVertexNormals();
    shadeAttrs(wall, nw * 2, [[0, nw, RIB_SHADE.wallOut], [nw, nw * 2, RIB_SHADE.wallIn]]);
    return [inner, wall].map((geo) => {
      geo.computeBoundingSphere();
      const m = new THREE.Mesh(geo, mat);
      m.userData = Object.assign({}, mesh.userData, { rib: true });
      m.visible = false;
      scene.add(m);
      return m;
    });
  }
  function ensureRibbon(r) {
    if (r.kind !== 'cortex' || !r.data) return false;
    if (!r.rib) r.rib = [].concat(...r.meshes.map((m) => buildRibbon(m, r.mat)));
    return r.rib.length > 0;
  }
  // Yarı saydam hologram (tanı merceklerinde düğümler): önce yalnız derinlik, sonra renk çizilir; böylece yalnız en öndeki
  // katman görünür (kıvrımların ve kapalı yapıların arka yüzleri üst üste binip buruşuk görünmez). Uzaktan yakına sırayla.
  const PRE_MAT = new THREE.MeshBasicMaterial({ colorWrite: false, transparent: true, opacity: 0 });
  // kabuk dışa, hologram düğümü içe kaydırılmışsa ön geçiş de aynı yüzeyi yazar (ayrı program: customProgramCacheKey)
  function preShift(v, key) {
    const m = PRE_MAT.clone();
    m.onBeforeCompile = (sh) => {
      sh.uniforms.uGrow = { value: v };
      sh.vertexShader = 'uniform float uGrow;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\ntransformed += normal * uGrow;');
    };
    m.customProgramCacheKey = () => key;
    return m;
  }
  const PRE_GROW = preShift(SHELL_GROW, 'pre-grow');
  function prepassOf(m) {
    if (!m.userData.pre) {
      const pre = new THREE.Mesh(m.geometry, PRE_MAT);
      pre.userData = { prepass: true };
      pre.visible = false;
      m.add(pre);
      m.userData.pre = pre;
    }
    return m.userData.pre;
  }

  const pickMat = new THREE.MeshBasicMaterial();
  function addPart(p) {
    if (p.kind === 'pick') {
      if (p.id === 'medialwall') return;
      const m = new THREE.Mesh(p.geometry, pickMat);
      m.visible = false;
      m.userData = { id: p.id, side: p.side, kind: p.id === 'cerebellum' ? 'cereb' : 'cortex' };
      pickMeshes.push(m);
      return;
    }
    let r = R[p.id];
    if (!r) {
      const data = DATA[p.id] || null;
      const kind = p.kind === 'cortex' || p.kind === 'cvol' ? 'cortex' : p.kind === 'cereb' ? 'cereb' : 'deep';
      r = R[p.id] = { id: p.id, data, kind, meshes: [], vols: [], mat: makeMaterial(data ? data.color : TISSUE.medialwall),
        ghostT: 0, selT: 0, hoverT: 0, burst: 0, burstT: 0, open: 0, gEff: 0, alphaBase: 0.26 };
    }
    const mesh = new THREE.Mesh(p.geometry, r.mat);
    mesh.userData = { id: p.id, side: p.side, kind: r.kind };
    if (p.kind === 'cvol') {   // korteks bölgesinin gri madde hacmi: bölge odaktayken yüzey yerine gösterilir
      mesh.visible = false;
      r.vols.push(mesh);
      scene.add(mesh);
      return;
    }
    r.meshes.push(mesh);
    scene.add(mesh);
    if ((r.kind !== 'cortex' && r.kind !== 'cereb') || (r.data && r.data.parent)) pickMeshes.push(mesh);   // korteks alt alanları (seçim kabukları yok) doğrudan seçilir
  }

  function build(parts) {
    parts.forEach(addPart);
    const box = new THREE.Box3();
    Object.values(R).forEach((r) => {
      const c = new THREE.Vector3(); let w = 0;
      r.meshes.forEach((m) => {
        const s = m.geometry.boundingSphere; c.addScaledVector(s.center, s.radius); w += s.radius;
        box.union(m.geometry.boundingBox);
      });
      r.center = c.divideScalar(w || 1);
      r.center.x = 0;
      r.radius = 0;          // merkezden en uzak mesh sınırı (iki taraflı yapılarda iki yanı da kapsar)
      r.meshes.forEach((m) => { const s = m.geometry.boundingSphere; r.radius = Math.max(r.radius, s.center.distanceTo(r.center) + s.radius); });
    });
    box.getCenter(BRAIN_CENTER);
    BRAIN_CENTER.x = 0;
    controls.target.copy(BRAIN_CENTER);
    focusC.copy(BRAIN_CENTER);
    applyColors(true);
    applyState();
  }

  function tissueColor(r) {
    if (r.id === 'medialwall') return TISSUE.medialwall;
    if (r.id === 'cc') return TISSUE.cc;
    if (r.kind === 'cortex') return TISSUE.cortex;
    if (r.kind === 'cereb') return TISSUE.cereb;
    if (r.data && r.data.group === 'stem') return TISSUE.stem;
    return TISSUE.deep;
  }
  // hedef renk; döngüde yumuşakça geçilir (snap: hemen uygula, ilk kurulumda)
  function applyColors(snap) {
    const set = activeSet(), fam = familyOf(state.selected);
    Object.values(R).forEach((r) => {
      const lit = r.id === state.selected || (fam && (r.id === fam || inFamily(r.data, fam))) ||
        (set && inSet(set, r.id));
      const eff = set && set.view && set.view.colors && set.view.colors.get(r.id);
      const hex = eff || ((!r.data || (state.tissue && !lit)) ? tissueColor(r) : r.data.color);
      r.colT = (r.colT || new THREE.Color()).set(hex);
      // tanıda ilişkili korteks bölgesi opak çizilir; çekirdekten ayrılsın diye rengi doku rengine doğru soluklaşır
      if (!eff && set && set.view && r.kind === 'cortex' && set.related.has(r.id) && !set.core.has(r.id)) r.colT.lerp(new THREE.Color(tissueColor(r)), 0.55);
      r.colT.convertSRGBToLinear();
      if (snap) r.mat.color.copy(r.colT);
    });
  }

  // Derin odak: "Derin yapılar" modu, derin bir yapının seçimi, bir tanı ya da gösterdiği yapılar arasında derin yapı olan küme
  // (çekirdek, ilişkili ya da yolak ucu). Tanının bütün merceklerinde seçenek (Saçıl, Gizle, Hayalet) hep vardır (kullanıcı 2026-10-11:
  // "bazı yerlerde gelmiyor"); yalnızca korteks gösteren mercekte de geri kalan korteks seçilen kipe göre çekilir.
  // Bu durumda tamamen arka plana düşen korteks ve beyincik parçaları, seçilen kipe göre dışa saçılıp söner ya da yerinde söner.
  function deepFocus() {
    const set = activeSet(), sel = state.selected;
    if (set && state.set.kind === 'net') return state.xray;
    if (set && state.set.kind === 'tani') return true;
    const deep = (id) => R[id] && R[id].kind === 'deep';
    return state.xray || !!(sel && deep(sel)) ||
      !!(set && ([...set.core].some(deep) || [...set.related].some(deep) || [...set.flow].some(deep)));
  }
  // Tanı kümesinde alt yapı listelenmişse (ör. th_md, cb_vermis) ebeveyni katmanlı gösterilir: yüzey paylaşan ebeveyn (serebellum)
  // gizlenir ve lobülleri taşır; içte duran alt yapıların ebeveyni kabuk gibi görünür (ebeveyn de listedeyse rolüne göre).
  // Dönen nesne: kimlik → { show, g?, s?, tint?, shell? }; listelenen alt yapı yalnızca görünür kılınır, görünümünü rolü belirler.
  // Nörotransmitter kümesinde yolak uçları da listelenmiş sayılır (withFlow): yol boşlukta bitmesin (ör. GABA: GPi → talamus VA).
  function taniLayers(set, withFlow) {
    const out = {}, listed = (id) => set.core.has(id) || set.related.has(id) || (!!withFlow && set.flow.has(id));
    Object.keys(CHILDREN).forEach((p) => {
      if (!CHILDREN[p].some(listed)) return;
      const surface = DATA[p].sub === 'surface', role = set.core.has(p) ? 'core' : set.related.has(p) ? 'related' : null;
      out[p] = surface ? { show: false } : Object.assign({ show: true, shell: true },
        role === 'core' ? { g: 0.82, s: 1, tint: 1 } : role === 'related' ? { g: 0.8, s: 0.3, tint: 1 } : { g: 1, s: 0 });
      CHILDREN[p].forEach((k) => {
        out[k] = listed(k) ? { show: true } : !surface ? { show: false } : Object.assign({ show: true },
          role === 'core' ? { g: 0, s: 1 } : role === 'related' ? { g: 0.55, s: 0.3, tint: 1 } : { g: 1, s: 0 });
      });
    });
    return out;
  }
  // Yolun bağlandığı alt alan, kümede ebeveynin yüzeyinde boyanır (data/yol_alt.js, köşe alanı): ebeveyn parça kesilmez, kümenin görünümü bozulmaz.
  // Bölge seçilince alt yapılar pipeline/alt_alan.py ile kesilmiş kendi parçalarıyla açılır.
  function setZone(r, z) {
    r.zone = z;
    const za = z[0] === '@' ? null : window.YOL_ALT[z];
    r.meshes.concat(r.rib || []).forEach((m) => {
      const n = m.geometry.attributes.position.count, f = new Float32Array(n), d = !m.userData.rib && za && za[m.userData.side];
      if (z[0] === '@' && m.userData.side === z[1]) f.fill(1);
      if (d) { let i = 0; for (let k = 0; k < d.length; k += 2) { i += d[k]; f[i] = d[k + 1] / 255; } }
      m.geometry.setAttribute('zn', new THREE.BufferAttribute(f, 1));
    });
  }
  function applyState() {
    const set = activeSet(), sel = state.selected, fam = familyOf(sel);
    const surface = !!fam && DATA[fam].sub === 'surface';
    const focus = deepFocus(), scatter = focus && state.cortexMode !== 'hayalet' && !state.zoomOpen;
    const layers = set && (state.set.kind === 'tani' || state.set.kind === 'nt' || state.set.kind === 'ilac') ? taniLayers(set, state.set.kind === 'nt') : null;
    const isDeep = (r) => !!r.data && !SHELL.has(r.id) &&
      (r.data.deep || !!(r.data.parent && DATA[r.data.parent] && DATA[r.data.parent].deep));
    const rq = set && !sel && state.set.kind !== 'net' ? routeEnds() : null;   // seçili canlı yolun uçları
    const zones = {};      // yolun ucu bir alt alana bağlıysa (zf, zt) o alan boyanır
    if (set && !sel && window.YOL_ALT) { const fz = flowSel(); if (fz) fz.def.routes.forEach((rt) => { if (rt.zf) zones[rt.from] = rt.zf; if (rt.zt) zones[rt.to] = rt.zt; }); }
    // Tek yanlı bulgu (kullanıcı: "ikisi de olur ama sağ yanar"): iki yan görünür. taraf: yalnız o yan boyanır, öteki gri; hotTaraf: nabız yalnız o yanda atar
    const yanGri = {};
    if (set && !sel && set.view) {
      if (set.view.hotTaraf) Object.keys(set.view.hotTaraf).forEach((id) => { zones[id] = '@' + set.view.hotTaraf[id]; });
      if (set.view.taraf) set.view.taraf.forEach((k, id) => { zones[id] = '@' + k; yanGri[id] = 1; });
    }
    Object.values(R).forEach((r) => {
      const parent = r.data && r.data.parent;
      let g = 0, s = 0, tint = 0, ribHolo = false, routeDim = false, show = !parent || inFamily(r.data, fam);   // alt yapılar yalnızca aileleri açıkken görünür
      if (sel) {
        if (r.id === fam) { g = sel === fam ? 0.82 : 1; s = sel === fam ? 1 : 0; show = !surface; }   // açık ebeveyn: içi görünsün
        else if (r.id === sel) { g = 0; s = 1; }
        else if (inFamily(r.data, fam)) {   // kardeşler; iç yapı seçiliyken yüzey bölümleri siluete çekilir
          g = sel === fam ? 0 : (r.data.layer === 'surface' && DATA[sel].layer !== 'surface' ? 1 : 0.45);
          s = sel === fam ? 0.35 : 0;
        }
        else g = 1;
      } else if (set && state.set.kind === 'net') {   // ağ: bütün korteks opak, köşeler ağ renginde; öteki yapılar silik
        if (r.kind !== 'cortex') g = 1;
      } else if (set) {
        // tanı devresinde derin düğümler yarı saydam (yollar içlerinden geçer); korteks düğümleri gri madde şeridiyle opak
        const holo = ((set.view && set.view.holo) || set.holo) && r.kind !== 'cortex';
        const solidSrc = holo && set.holo && !set.view && SRC_MARK.has(r.id) && (set.core.has(r.id) || set.flow.has(r.id));
        if (solidSrc) { g = 0; s = 0.7; }      // küçük kaynak çekirdeği: hologramın içinde opak, kendi renginde
        else if (set.core.has(r.id)) { if (holo) { g = 0.44; s = 0.8; tint = 1; } else { g = 0; s = 1; } }
        else if (set.flow.has(r.id)) { if (holo) { g = 0.5; s = 0.6; tint = 1; } else { g = 0; s = 0.5; } }   // yolağın ucu: opak (holo kümede hologram)
        else if (set.related.has(r.id) && set.view && r.kind === 'cortex') { g = 0; s = 0; }   // tanıda ilişkili korteks: opak şerit, soluk renk
        // sistem, yolak ve nörotransmitter kümelerinde ilişkili korteks: gri madde şeridi, yarı saydam tek katman (hologram ön geçişiyle);
        // önceden yalnız yüzey yaması yarı saydam çiziliyordu, kalınlıksız ve yırtık bir yaprak gibi görünüyordu (kullanıcı 2026-10-24:
        // "2 boyutlu kalmış korteksler"); opak şerit derin devreyi örttüğü için yarı saydam seçildi (kullanıcı onayı)
        else if (set.related.has(r.id) && r.kind === 'cortex') { g = 0.55; s = 0.3; tint = 1; ribHolo = true; }
        else if (set.related.has(r.id)) { g = 0.55; s = 0.3; tint = 1; }   // yalnızca ilişkili: kendi renginde yarı saydam
        else g = 1;
      } else if (state.xray) g = r.kind === 'cortex' || SHELL.has(r.id) || (scatter && r.kind === 'cereb') ? 1 : 0;
      const lay = layers && layers[r.id];
      if (lay) {        // tanıda listelenen alt yapının ebeveyni ve kardeşleri (taniLayers)
        show = lay.show;
        if (lay.g !== undefined) { g = lay.g; s = lay.s; tint = lay.tint || 0; }
      }
      if (rq) {         // seçili yol: iki ucu opak ve kendi renginde, kümenin öteki yapıları silikleşir
        if (rq.has(r.id)) { g = 0; s = 1; tint = 0; ribHolo = false; }
        else if (g < 1 && !(lay && lay.shell)) {
          // korteks yerinde olağan gri hayalete döner (saçılmaz). Yarı saydam şerit büyük yüzeyde koyu ve bulanık, renkli hayalet de
          // kalınlıksız bir yaprak gibi görünüyordu. Derin yapılar kendi renginde, daha silik.
          if (r.kind === 'cortex') { g = 1; s = 0; tint = 0; ribHolo = false; routeDim = true; }
          else { g = Math.max(g, 0.75); s = Math.min(s, 0.3); tint = 1; }
        }
      }
      const burst = scatter && g === 1 && !routeDim && (r.kind === 'cortex' || r.kind === 'cereb');
      r.burstT = burst ? 1 : 0;
      if (burst) g = 0;          // saçılan parça kendi renginde uzaklaşıp söner
      // "Derin yapıları gizle": derin yapılar (beyin sapı kabukları hariç) gizlenir; seçilenler ve kümedekiler görünür kalır
      const lit = r.id === sel || (fam && (r.id === fam || parent === fam)) || (set && inSet(set, r.id));
      if (state.hideDeep && isDeep(r) && !lit) show = false;
      r.ghostT = g;
      r.selT = s;
      r.tintT = tint;
      r.hotT = set && set.view && set.view.hot.includes(r.id) ? 1 : 0;   // tanı merceği: artmış etkinlik (turuncu nabız)
      r.coldT = set && set.view && (set.view.cold || []).includes(r.id) ? 1 : 0;   // azalmış etkinlik (mavi nabız)
      r.zoneT = zones[r.id] ? 1 : 0;
      r.sideGrayT = yanGri[r.id] ? 1 : 0;
      if (zones[r.id] && r.zone !== zones[r.id]) setZone(r, zones[r.id]);
      r.shown = show;
      r.alphaBase = tint ? 0.5 : r.kind === 'cortex' || SHELL.has(r.id) || r.id === fam || (lay && lay.shell) ? 0.26 : 0.42;
      r.grow = r.id === fam || !!(lay && lay.shell);       // alt yapılarıyla gösterilen ebeveyn: yüzeyi biraz dışa itilir
      // odaktaki korteks bölgesi (seçili ya da kümenin çekirdeği) kalınlığıyla, gri madde hacmi olarak görünür
      const netView = !!set && state.set.kind === 'net';
      r.netT = netView && r.kind === 'cortex' ? 1 : 0;
      r.ribHolo = ribHolo && !burst;
      const vol = (r.vols.length > 0 || r.kind === 'cortex') && (g === 0 || r.ribHolo) && !burst && (!!sel || !!set) && !netView;
      const rib = vol && !r.vols.length && ensureRibbon(r);      // korteks: ayrıntılı yüzey + kalınlık şeridi
      if (rib && r.zone && r.zone[0] === '@' && zones[r.id] && !r.rib.every((m) => m.geometry.attributes.zn)) setZone(r, r.zone);   // şerit sonradan kurulur: tek yanlı bulgu şeride de geçer
      const hidden = (m) => leftHidden(m, r);
      r.meshes.forEach((m) => { m.userData.want = show && (!vol || rib || !r.vols.length) && !hidden(m); m.visible = m.userData.want && r.burst < 0.99; });
      r.vols.forEach((m) => { m.userData.want = show && vol && !rib && !hidden(m); m.visible = m.userData.want && r.burst < 0.99; });
      (r.rib || []).forEach((m) => { m.userData.want = show && rib && !hidden(m); m.visible = m.userData.want && r.burst < 0.99; });
      r.holo = !!(set && ((set.view && set.view.holo) || set.holo) && r.kind !== 'cortex' && !(set.holo && !set.view && SRC_MARK.has(r.id)) &&
        !(rq && rq.has(r.id)) &&
        (set.core.has(r.id) || set.related.has(r.id) || (set.holo && set.flow.has(r.id))));   // tek katmanlı hologram
      r.mat.userData.u.uGrow.value = r.grow ? SHELL_GROW : 0;
    });
    if (set && state.set.kind === 'net') {     // ağ kipi girerken ayarlanır; çıkarken karışım sönene dek eski renk kalır
      const n = set.src;
      NETU.uNetMode.value = n.all ? 2 : n.md ? 3 : 1;
      NETU.uNetId.value = n.yeo || 0;
    }
    const dHid = !focus || state.zoomOpen;
    if ($('#deepopt').hidden !== dHid) { $('#deepopt').hidden = dHid; fitDock(compactMQ.matches); }
    $('#hidedeep').setAttribute('aria-pressed', String(!!state.hideDeep));
    mriFollowSelection();
    if (mriIsOpen) updateMriCard();
    updatePill();
    $('#zoomopen').setAttribute('aria-pressed', String(state.zoomOpen));
    document.querySelectorAll('[data-cmode]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.cmode === state.cortexMode)));
    $('#xray').setAttribute('aria-pressed', String(state.xray));
    $('#hemi').setAttribute('aria-pressed', String(state.hideLeft));
    $('#tissue').setAttribute('aria-pressed', String(state.tissue));
  }

  /* ---------- kamera ---------- */
  let tween = null;
  const free = { left: 0, right: 0, top: 0, bottom: 0 };
  function fitDistance() {
    const H = window.innerHeight, t = Math.tan((camera.fov * Math.PI) / 360) * 2;
    const fw = Math.max(120, free.right - free.left), fh = Math.max(120, free.bottom - free.top);
    return THREE.MathUtils.clamp(Math.max((2.25 * H) / (t * fw), (1.95 * H) / (t * fh)), 3.2, 11);
  }
  // Kamera hep beynin merkezine bakar: seçimlerde sahne kaymaz, kamera yalnızca merkez çevresinde döner ve
  // gerektiğinde yaklaşır. Geçiş küresel koordinatlarda (yatay açı kısa yoldan) yapılır.
  // "Yakınlaşınca aç" iki kademelidir (kullanıcı 2026-10-20: "yakınlaşınca korteks açılarak kaybolsun, odağımız limbikte olsun;
  // korteks kameradan çıkınca limbik sistemin aşırı dibinde oluyoruz"; "talamus seçip yakınlaşınca geri kalan limbikler uzaklaşsın,
  // çekirdekler netleşsin"). s = ln(fit / gezinme uzaklığı), S = görünen düzey:
  //   1. kademe (s 0 → ln 2): korteks ve beyincik dışa açılarak söner; görüntü derin yapıları sığdıran uzaklığa (lv.deep) gelir.
  //   2. kademe (s ln 2 → 2 ln 2; yalnız derin bir yapı seçiliyken): öteki derin yapılar seçimden uzaklaşarak söner, seçilen ailenin
  //      çekirdekleri aralanır, bakış merkezi seçime kayar; görüntü seçimi sığdıran uzaklığa (lv.fam) gelir. Seçim yoksa düz yakınlaşma.
  //   Sonrası normal yakınlaşma. lv kareden kareye yumuşar: seçim değişince görüntü sıçramaz.
  const OPEN_SPAN = Math.LN2, OPEN_SPAN2 = 2 * Math.LN2;
  const lv = { deep: 0.45, fam: 0.45 + OPEN_SPAN };
  let openBlend = 0;           // kip açılıp kapanınca eşleme yumuşakça devreye girer
  const focusC = BRAIN_CENTER.clone();   // bakış merkezi: beynin merkezi; 2. kademede seçime doğru kayar
  function viewLevel(s) {
    if (s <= 0) return s;
    if (s <= OPEN_SPAN) return lv.deep * (s / OPEN_SPAN);
    if (s <= OPEN_SPAN2) return lv.deep + (lv.fam - lv.deep) * ((s - OPEN_SPAN) / (OPEN_SPAN2 - OPEN_SPAN));
    return lv.fam + (s - OPEN_SPAN2);
  }
  function navLevel(S) {
    if (S <= 0) return S;
    if (S <= lv.deep) return OPEN_SPAN * (S / lv.deep);
    if (S <= lv.fam) return OPEN_SPAN + (OPEN_SPAN2 - OPEN_SPAN) * ((S - lv.deep) / (lv.fam - lv.deep));
    return OPEN_SPAN2 + (S - lv.fam);
  }
  function viewDistance(d) {
    const fit = fitDistance(), s = Math.log(fit / d);
    return fit * Math.exp(-(s + (viewLevel(s) - s) * openBlend));
  }
  function navDistance(D) {
    const fit = fitDistance(), S = Math.log(fit / D);
    return fit * Math.exp(-(S + (navLevel(S) - S) * openBlend));
  }
  const vSync = new THREE.Vector3();
  function syncCamera() {
    vSync.copy(nav.position).sub(controls.target);
    const d = vSync.length();
    camera.position.copy(controls.target).addScaledVector(vSync, viewDistance(d) / d);
    camera.quaternion.copy(nav.quaternion);
  }
  // dist: ekrandaki (görünen) uzaklık
  function flyTo(dir, dist) {
    const from = new THREE.Spherical().setFromVector3(nav.position.clone().sub(controls.target));
    const to = new THREE.Spherical().setFromVector3(dir.clone().normalize().multiplyScalar(navDistance(dist)));
    const dTheta = Math.atan2(Math.sin(to.theta - from.theta), Math.cos(to.theta - from.theta));
    const turn = Math.abs(dTheta) + Math.abs(to.phi - from.phi), zoom = Math.abs(Math.log(to.radius / from.radius));
    if (turn < 0.01 && zoom < 0.01 && controls.target.distanceTo(focusC) < 1e-3) return;
    tween = { t0: performance.now(), dur: 450 + 550 * Math.min(1, turn / Math.PI + zoom), from, to, dTheta, fromTarget: controls.target.clone() };
  }
  const sphTmp = new THREE.Spherical();
  function stepTween(now) {
    if (!tween) return;
    let k = Math.min(1, (now - tween.t0) / tween.dur);
    k = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    const { from, to } = tween;
    sphTmp.set(from.radius * Math.pow(to.radius / from.radius, k), from.phi + (to.phi - from.phi) * k, from.theta + tween.dTheta * k);
    controls.target.copy(tween.fromTarget).lerp(focusC, k);
    nav.position.setFromSpherical(sphTmp).add(controls.target);
    nav.lookAt(controls.target);          // geçiş boyunca bakış merkezde kalır
    if (k >= 1) tween = null;
  }
  // Uzaklık: korteks ve beyincik için bütün beyin görünür; derin yapılarda yapı, beyin merkezde kalırken
  // görüş alanına sığacak kadar yaklaşılır (en çok yarı uzaklığa).
  // Dik telefonda bütün beyin serbest alana sığsın (kullanıcı 2026-11-05: "itg'yi seçince sığmıyor, elimle küçültmem gerekiyor"). fitDistance yan görünüşün
  // yüksekliğine göre hesaplar (1,95); üstten ya da alttan bakınca dikey boy önden arkaya uzunluktur (2,5). Masaüstü aynen kalır.
  function fitFor(dir) {
    const fit = fitDistance();
    if (!narrowMQ.matches) return fit;
    const y = Math.abs(dir.clone().normalize().y), t = Math.tan((camera.fov * Math.PI) / 360) * 2;
    const boy = Math.sqrt(1.95 * 1.95 * (1 - y * y) + 2.5 * 2.5 * y * y);
    return THREE.MathUtils.clamp(Math.max(fit, (boy * window.innerHeight) / (t * Math.max(120, free.bottom - free.top))), 3.2, 11);
  }
  function focusDistance(ids, dir) {
    const fit = fitFor(dir), rs = ids.map((id) => R[id]).filter(Boolean);
    if (!rs.length || rs.some((r) => r.kind !== 'deep')) return fit;
    const d = dir.clone().normalize();
    let need = 0;
    rs.forEach((r) => {
      const off = r.center.clone().sub(BRAIN_CENTER);
      off.addScaledVector(d, -off.dot(d));
      need = Math.max(need, off.length() + 1.25 * r.radius);
    });
    const t = Math.tan((camera.fov * Math.PI) / 360);
    const frac = Math.max(0.2, Math.min(free.right - free.left, free.bottom - free.top) / window.innerHeight);
    return THREE.MathUtils.clamp(need / (0.85 * t * frac), 0.5 * fit, fit);
  }
  // Seçimde kamera dönmez (kullanıcı isteği): seçilen yapı dışında her şey saydamlaştığı için yapı her açıdan
  // görünür. Yalnızca uzaklık değişir (keepDistance).
  // Uzaklık: kullanıcının yakınlaştırması mümkün olduğunca korunur. Derin yapıda gereken uzaklık şimdikinden
  // belirgin farklıysa ona gidilir; korteks ve beyincikte yalnızca çok yakındaysak bütün beyne açılır.
  function keepDistance(ids, dir) {
    const cur = viewDistance(nav.position.distanceTo(controls.target)), fit = fitDistance();
    if (state.zoomOpen) return cur;          // yakınlaşınca açma: kademeyi kullanıcı tekerlekle seçer
    const rs = ids.map((id) => R[id]).filter(Boolean);
    if (rs.length && rs.every((r) => r.kind === 'deep')) {
      const want = focusDistance(ids, dir);
      return Math.abs(Math.log(want / cur)) < 0.15 ? cur : want;
    }
    if (narrowMQ.matches) { const f = fitFor(dir); return cur < 0.98 * f || cur > 1.6 * f ? f : cur; }   // telefonda seçilen korteks kesilmesin
    return cur < 0.75 * fit || cur > 1.6 * fit ? fit : cur;
  }
  function setView(name) {
    if (name === 'medial') state.hideLeft = true;
    if (name === 'lateralL') state.hideLeft = false;
    applyState();
    stopSpin();
    const dir = new THREE.Vector3().fromArray(VIEWS[name]);
    flyTo(dir, state.selected ? focusDistance([state.selected], dir) : fitFor(dir));
    document.querySelectorAll('[data-view]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === name)));
  }
  // açılıştaki görünüm: sağ lateral, bütün beyin; seçim korunur
  function goHome() {
    if (state.hideLeft) { state.hideLeft = false; applyState(); }
    stopSpin();
    flyTo(new THREE.Vector3().fromArray(VIEWS.start), fitDistance() * START_ZOOM);
    document.querySelectorAll('[data-view]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
  }
  function stopSpin() { controls.autoRotate = false; $('#spin').setAttribute('aria-pressed', 'false'); }

  /* ---------- seçim ---------- */
  // Geri tuşu için gezinme geçmişi: her seçimden önce o anki görünüm kaydedilir
  const history = [];
  const viewNow = () => (state.set ? { set: { kind: state.set.kind, id: state.set.id } } :
    state.selected ? { id: state.selected, trail: state.trail } : { none: true });
  function remember() {
    const v = viewNow(), last = history[history.length - 1];
    if (last && JSON.stringify(last) === JSON.stringify(v)) return;
    history.push(v);
    if (history.length > 40) history.shift();
  }
  function goBack() {
    const v = history.pop();
    if (!v) return;
    if (v.set) selectSet(v.set.kind, v.set.id, { noHist: true });
    else select(v.none ? null : v.id, { fly: true, trail: v.trail, noHist: true });
  }
  // Atlas daveti (2026-11-03): ikinci kart açılınca küçük, modal olmayan bir kart; bir kez gösterilir (localStorage atlas.davet)
  const davetKartlar = new Set();
  let davetEl = null, davetZaman = 0;
  function davetSay(key) {
    if (davetEl || window.__kare || navigator.webdriver) return;
    try { if (localStorage.getItem('atlas.davet') === 'kapali') return; } catch (e) { /* depolama kapalı */ }
    if (!$('#tour').hidden) return;
    davetKartlar.add(key);
    if (davetKartlar.size < 2 || davetZaman) return;
    davetZaman = setTimeout(davetGoster, 1600);
  }
  function davetGoster() {
    if (!$('#tour').hidden || !loading.classList.contains('done') || document.body.classList.contains('sheet-open') ||
        matchMedia('(max-height: 520px) and (orientation: landscape)').matches) { davetZaman = setTimeout(davetGoster, 3000); return; }   // görünmeden "gösterildi" sayılmaz
    try { localStorage.setItem('atlas.davet', 'kapali'); } catch (e) { /* depolama kapalı */ }
    davetEl = document.createElement('aside');
    davetEl.id = 'davet';
    davetEl.className = 'panel';
    davetEl.setAttribute('aria-label', t('Beyni keşfetmeye devam edin'));
    davetEl.innerHTML = '<button class="dx" type="button" aria-label="' + esc(t('Kapat')) + '" title="' + esc(t('Kapat')) + '">×</button>' +
      '<p class="dbas">' + esc(t('Beyni keşfetmeye devam edin')) + '</p>' +
      '<a href="https://www.instagram.com/thefolded.mind/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="nokta" cx="17.2" cy="6.8" r="1.1"/></svg>' +
      '<span><b>' + esc(t('Güncel paylaşımlar ve daha fazlası')) + '</b><small>' + esc(t('Instagram · İngilizce')) + '</small></span></a>' +
      '<a href="https://thefoldedmind.substack.com/subscribe?utm_source=atlas&amp;utm_medium=davet" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M3.8 7.5 12 13l8.2-5.5"/></svg>' +
      '<span><b>' + esc(t('Haftada bir araştırma e-postası')) + '</b><small>' + esc(t('Ücretsiz bülten')) + '</small></span></a>';
    davetEl.addEventListener('click', (e) => { if (e.target.closest('.dx, a')) davetEl.hidden = true; });
    document.body.appendChild(davetEl);
  }
  function select(id, opts) {
    opts = opts || {};
    if (id && !DATA[id]) id = null;
    if (!opts.noHist && (id !== state.selected || state.set)) remember();
    if (id) { if (CHILDREN[id]) acikAile = id; else if (!DATA[id].parent2) acikAile = DATA[id].parent || null; }   // iki ebeveynli alt yapı açık ailede kalır
    state.selected = id;
    state.trail = id ? opts.trail || null : null;
    if (id && !state.trail) {      // dizinde bölgenin grubu açılır
      setLtab('regions');
      openGroups.add(DATA[id].group);
    }
    state.set = null;
    applyColors();
    applyState();
    renderInfo();
    buildList($('#q').value);
    setHash(id ? id : '');
    if (!id) return;
    davetSay(id);
    stopSpin();
    if (opts.fly && R[id]) {
      flyAfterScatter(() => {
        const dir = nav.position.clone().sub(controls.target);
        flyTo(dir, keepDistance([id], dir));
      });
      document.querySelectorAll('[data-view]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
    }
  }
  // Korteks saçılmaya yeni başlıyorsa yakınlaşma, parçalar dağıldıktan sonra başlar (aynı anda büyüyüp dağılmasın)
  let flyTimer = 0;
  function flyAfterScatter(go) {
    clearTimeout(flyTimer);
    const starting = Object.values(R).some((r) => r.burstT === 1 && r.burst < 0.05);
    if (starting) flyTimer = setTimeout(go, 420); else go();
  }

  // Panksepp sistemi, kitaptaki yolak, ağ, nörotransmitter sistemi ya da tanı: ilgili bölgeleri birlikte öne çıkar
  function selectSet(kind, id, opts) {
    if (!setSrc(kind, id)) return;
    if (!(opts && opts.noHist) && !(state.set && state.set.kind === kind && state.set.id === id)) remember();
    state.selected = null;
    state.trail = null;
    state.set = { kind, id };
    setLtab(LTAB_OF[kind]);
    state.hideLeft = false;
    applyColors();
    applyState();
    renderInfo();
    buildList($('#q').value);
    setHash(kind === 'sys' ? 'sistem-' + SYS[id].slug : kind === 'net' ? 'ag-' + id : kind === 'nt' ? 'nt-' + id : kind === 'tani' ? 'tani-' + id : kind === 'ilac' ? 'ilac-' + id : 'yolak-' + id);
    davetSay(kind + ':' + id);
    stopSpin();
    const set0 = activeSet(), core = kind === 'net' || kind === 'nt' ? ['dlpfc'] : [...set0.core];   // ağda ve nörotransmitter sisteminde bütün beyin görünür kalsın
    if (kind === 'tani') flyAfterScatter(() => taniCamera(true));     // tanı: merceğe göre açı ve uzaklık
    else if (kind === 'ilac') flyAfterScatter(ilacCamera);           // ilaç: her ilaçta ve mercekte aynı uzaklık
    else flyAfterScatter(() => {
      const dir = nav.position.clone().sub(controls.target);
      flyTo(dir, keepDistance(core, dir));
    });
    document.querySelectorAll('[data-view]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
  }
  let hashNow = '';                          // atlasın kendi yazdığı çapa: hashchange'te yeniden uygulanmaz
  function setHash(h) {
    hashNow = h || '';
    try { window.history.replaceState(null, '', h ? '#' + h : location.pathname + location.search); } catch (e) { /* çerçeve izin vermeyebilir */ }
  }

  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  function pickAt(x, y) {
    const rect = canvas.getBoundingClientRect();
    ndc.set(((x - rect.left) / rect.width) * 2 - 1, -((y - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const list = pickMeshes.filter((m) => (R[m.userData.id] || {}).shown !== false &&   // kapalı alt yapılar seçilemez
      !((R[m.userData.id] || {}).burst > 0.5) &&                                           // saçılmış korteks de
      !((R[m.userData.id] || {}).vanish > 0.5) &&                                          // yakınlaşınca sönenler de
      !leftHidden(m, R[m.userData.id]));
    const hits = raycaster.intersectObjects(list, false).filter((h) => !clipOn || clipPlane.distanceToPoint(h.point) >= 0);
    if (!hits.length) return null;
    const solid = hits.find((h) => R[h.object.userData.id].gEff < 0.5);
    const deep = hits.find((h) => h.object.userData.kind === 'deep');
    const hit = solid || deep || hits[0];
    lastHit.point = hit.point; lastHit.side = hit.object.userData.side;
    return hit.object.userData.id;
  }
  const lastHit = { point: null, side: null };
  // kümede boyanmış alt alanın üzerindeyken balonda alanın adı (yüzeyin en yakın köşesinden)
  function zoneAt(id) {
    const r = R[id];
    if (!r || !r.zoneT || !r.zone || r.zone[0] === '@' || !lastHit.point || state.selected) return null;
    let best = 0, bd = Infinity;
    r.meshes.forEach((m) => {
      if (m.userData.side !== lastHit.side) return;
      const pos = m.geometry.attributes.position, zn = m.geometry.attributes.zn;
      if (!zn) return;
      for (let i = 0; i < pos.count; i += 2) {
        const dx = pos.getX(i) - lastHit.point.x, dy = pos.getY(i) - lastHit.point.y, dz = pos.getZ(i) - lastHit.point.z, d = dx * dx + dy * dy + dz * dz;
        if (d < bd) { bd = d; best = zn.getX(i); }
      }
    });
    return best > 0.5 && DATA[r.zone] ? DATA[r.zone].name : null;
  }
  // ağ görünümünde: fare altındaki korteks noktasının ağı (görünen yüzeyin en yakın köşesinden)
  function netAt(id) {
    if (!(state.set && state.set.kind === 'net') || !lastHit.point || !R[id] || R[id].kind !== 'cortex') return null;
    let best = null, bd = Infinity;
    R[id].meshes.forEach((m) => {
      if (m.userData.side !== lastHit.side) return;
      const pos = m.geometry.attributes.position, net = m.geometry.attributes.net;
      for (let i = 0; i < pos.count; i += 2) {
        const dx = pos.getX(i) - lastHit.point.x, dy = pos.getY(i) - lastHit.point.y, dz = pos.getZ(i) - lastHit.point.z, d = dx * dx + dy * dy + dz * dz;
        if (d < bd) { bd = d; best = net.getX(i); }
      }
    });
    if (best === null) return null;
    const yeo = best % 8, n = NET_LIST.find((x) => x.yeo === yeo);
    return (n ? n.name : t('Ağ atlasında yok (orta hat)')) + (best >= 8 ? t(' · çoklu talep çekirdeği') : '');
  }

  let down = null, hoverXY = null, lastPick = 0;
  canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY }; });
  // Boş alana tek tıklama hiçbir şeyi sıfırlamaz (kullanıcı 2026-10-11: "yanlış basınca direkt en başa düşüyor");
  // seçimi kaldırmak için boş alana çift tıklanır ya da iki kez dokunulur (400 ms, 30 px içinde; dokunmatikte dblclick
  // her tarayıcıda gelmediği için iki bırakış sayılır) ya da Esc'e basılır.
  let emptyTap = null;
  canvas.addEventListener('pointerup', (e) => {
    if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) < 6) {
      const rh = routeAt(e.clientX, e.clientY, e.pointerType === 'mouse' ? 7 : 10);   // canlı yolun çizgisi ya da çıkış noktası
      if (rh) { emptyTap = null; down = null; pickRoute(rh); return; }
      const id = pickAt(e.clientX, e.clientY);
      if (id && DATA[id]) { emptyTap = null; if (id !== state.selected) select(id); }
      else {
        const now = performance.now();
        if (emptyTap && now - emptyTap.t < 400 && Math.hypot(e.clientX - emptyTap.x, e.clientY - emptyTap.y) < 30) {
          emptyTap = null;
          if (state.selected || state.set) select(null);
        } else emptyTap = { t: now, x: e.clientX, y: e.clientY };
      }
    }
    down = null;
  });
  canvas.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') hoverXY = [e.clientX, e.clientY]; });
  canvas.addEventListener('pointerleave', () => { hoverXY = null; setRouteHover(null); setHover(null); });
  controls.addEventListener('start', () => { tween = null; stopSpin(); });

  const tip = $('#tip');
  function setHover(id, x, y) {
    if (state.hovered !== id) {
      if (state.hovered && R[state.hovered]) R[state.hovered].hoverT = 0;
      state.hovered = id;
      if (id) R[id].hoverT = 1;
      canvas.classList.toggle('pointer', !!id);
    }
    if (id && DATA[id]) {
      const net = netAt(id);
      tip.innerHTML = esc(zoneAt(id) || DATA[id].name) + '<small>' + esc(DATA[id].short) + (net ? ' · ' + esc(net) : '') + '</small>';
      tip.style.left = x + 'px'; tip.style.top = y + 'px';
      tip.hidden = false;
    } else tip.hidden = true;
  }

  /* ---------- yön harfleri ---------- */
  const orientBox = $('#orient');
  // [etiket, yön, beynin o yöndeki yaklaşık uzanımı]
  const AXES = [[t('ÖN'), 0, 0, 1, 1.04], [t('ARKA'), 0, 0, -1, 0.98], [t('ÜST'), 0, 1, 0, 0.84], [t('ALT'), 0, -1, 0, 0.86],
    [t('SAĞ'), -1, 0, 0, 0.8], [t('SOL'), 1, 0, 0, 0.8]];
  const orientEls = AXES.map(([t]) => { const s = document.createElement('div'); s.className = 'orient'; s.textContent = t; orientBox.appendChild(s); return s; });
  const vA = new THREE.Vector3(), vB = new THREE.Vector3();
  function updateOrient() {
    const W = window.innerWidth, H = window.innerHeight;
    vA.copy(BRAIN_CENTER).project(camera);
    const cx = (vA.x + 1) / 2 * W, cy = (1 - vA.y) / 2 * H;
    const ref = H / (2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.distanceTo(BRAIN_CENTER));
    AXES.forEach(([, x, y, z, ext], i) => {
      vB.set(x, y, z).add(BRAIN_CENTER).project(camera);
      const dx = (vB.x + 1) / 2 * W - cx, dy = (1 - vB.y) / 2 * H - cy;
      const len = Math.hypot(dx, dy);
      const el = orientEls[i];
      el.style.opacity = (THREE.MathUtils.smoothstep(len / ref, 0.5, 0.85) * 0.9).toFixed(2);
      if (len < 1) return;
      const rad = ext * len + 20;
      const px = clampN(cx + (dx / len) * rad, free.left + 22, free.right - 22);
      const py = clampN(cy + (dy / len) * rad, free.top + 12, free.bottom - 12);
      el.style.left = px + 'px'; el.style.top = py + 'px';
    });
  }
  const clampN = (v, a, b) => (b < a ? (a + b) / 2 : Math.min(b, Math.max(a, v)));

  /* ---------- yerleşim ---------- */
  // Masaüstü: solda bölüm rayı (hep görünür) ve yanında açılan dizin (ya da MR), sağda bilgi kartı, altta görünüm çubuğu,
  // üstte arama ve komut çubuğu, sağ altta yön küresi. Beyin aradaki serbest alanın ortasında durur; çubuklar bu alana göre yerleşir.
  // Telefonda (dikey) bilgi kartı alttan çekmece, MR alt yarıda; yan tutulunca kart sağda, MR solda.
  const indexEl = $('#index'), infoEl = $('#info'), railEl = $('#rail'), dockEl = $('#toolbar'), cmdbarEl = $('#cmdbar'), brandEl = $('.brand');
  const infoGrip = $('#infoGrip'), sheetGrip = $('#sheetGrip');
  // Görüntü kaydırması (beyin serbest alanın ortasında): paneller açılıp kapanınca yumuşakça kayar
  const vo = { x: 0, y: 0, tx: 0, ty: 0, W: 1, H: 1 };
  function applyViewOffset() {
    camera.setViewOffset(vo.W, vo.H, vo.x, vo.y, vo.W, vo.H);
    camera.updateProjectionMatrix();
  }
  // Dizin geniş ekranda (≥ 1180 px) yanda durur ve beyin ona göre ortalanır; daha dar ekranda beynin üstünde açılır, seçimde kapanır
  const dockedMQ = window.matchMedia('(min-width: 1180px)');
  const drawerOverlay = () => !dockedMQ.matches;
  // compactMQ: telefon ve dar tablet (dikey) ya da yan tutulmuş telefon; narrowMQ: alttan çekmece (yalnızca dikey dar ekran)
  const compactMQ = window.matchMedia('(max-width: 820px), (max-height: 520px) and (orientation: landscape)');
  const narrowMQ = window.matchMedia('(max-width: 820px) and (orientation: portrait)');
  let mriIsOpen = false;          // MR kesit görünümü açık (openMRI yazar; yerleşim erken okuyabilsin diye burada)
  let paletteBottom = 0;          // komut paleti açıkken alt kenarı: beyin paletin altındaki alana kayar, gezilen yapı hep görünür
  let smoothLayout = false;
  function layout() {
    const W = window.innerWidth, H = window.innerHeight;
    renderer.setSize(W, H);
    camera.aspect = W / H;
    nav.aspect = W / H;
    nav.updateProjectionMatrix();
    const landscapeShort = H <= 520 && W > H;     // yan tutulmuş telefon: kart sağda, MR solda
    const narrow = W <= 820 && !landscapeShort;
    const mriOn = mriIsOpen;
    if (narrow) {
      free.left = 0; free.right = W; free.top = 52;
      const lim = mriOn ? mriEl.getBoundingClientRect().top : paletteBottom ? dockEl.getBoundingClientRect().top : infoEl.getBoundingClientRect().top;
      free.bottom = Math.max(free.top + 140, lim - 4);
    } else if (landscapeShort) {
      free.top = 44; free.bottom = H - 62;
      free.left = mriOn ? mriEl.getBoundingClientRect().right : 0;
      free.right = mriOn ? W : infoEl.getBoundingClientRect().left - 8;
    } else {
      const railR = railEl.getBoundingClientRect().right;
      free.left = mriOn ? mriEl.getBoundingClientRect().right : panels.index && !drawerOverlay() ? indexEl.getBoundingClientRect().right : railR;
      const il = infoEl.getBoundingClientRect().left;
      // mini kart yalnızca sağ üstü kaplar: görüntü genişler, ortası kartın altında kalmasın diye biraz sola kayar
      free.right = !panels.info ? W : panels.infoMini ? W - 0.4 * (W - il) : il;
      free.top = 0; free.bottom = H - 64;
    }
    if (paletteBottom) free.top = Math.max(free.top, Math.min(paletteBottom + 6, free.bottom - 160));
    const cx = (free.left + free.right) / 2, cy = (free.top + free.bottom) / 2;
    vo.W = W; vo.H = H; vo.tx = W / 2 - cx; vo.ty = H / 2 - cy;
    if (!smoothLayout || !built) { vo.x = vo.tx; vo.y = vo.ty; }
    applyViewOffset();
    // serbest alan değişince yakınlaştırma oranını koru (paneller açılıp kapanınca yumuşak geçişle)
    const fit = fitDistance();
    if (lastFit && built && !tween && Math.abs(fit / lastFit - 1) > 0.02) {
      const off = nav.position.clone().sub(controls.target);
      if (smoothLayout) flyTo(off, viewDistance(off.length()) * fit / lastFit);
      else nav.position.copy(controls.target).addScaledVector(off, fit / lastFit);
    }
    lastFit = fit;
    placeChrome(W, H, narrow || landscapeShort);
    if (mriOn) drawMRI();
  }
  // çubuklar serbest alana göre: arama çubuğu üst ortada (başlığa çarpmadan), görünüm çubuğu alt ortada, yön küresi sağ altta
  function placeChrome(W, H, compact) {
    const root = document.documentElement.style, mid = (free.left + free.right) / 2;
    root.setProperty('--dock-x', mid.toFixed(1) + 'px');
    if (!compact) {
      // arama hapı başlık satırında: sağdaki bilgi kartına çarpmayacak kadar geniş, yer kalmazsa yalnızca büyüteç
      cmdbarEl.classList.remove('ico-only');
      cmdbarEl.style.width = '';
      const cr = cmdbarEl.getBoundingClientRect(), edge = panels.info ? infoEl.getBoundingClientRect().left : W;
      const avail = edge - cr.left - 16;
      if (avail < 150) cmdbarEl.classList.add('ico-only');
      else cmdbarEl.style.width = Math.min(320, avail).toFixed(0) + 'px';
      const ckW = Math.min(620, W - 24);
      root.setProperty('--ck-l', Math.max(12, Math.min(cr.left, W - ckW - 12)).toFixed(1) + 'px');
      root.setProperty('--ck-t', (cr.bottom + 8).toFixed(1) + 'px');
    } else {
      cmdbarEl.classList.remove('ico-only'); cmdbarEl.style.width = '';
    }
    fitDock(compact);
    const ir = infoEl.getBoundingClientRect();
    infoGrip.style.left = (ir.left - 7).toFixed(1) + 'px'; infoGrip.style.top = (ir.top + 16).toFixed(1) + 'px';
    infoGrip.style.height = Math.max(0, ir.height - 32).toFixed(1) + 'px';
    sheetGrip.style.left = ir.left.toFixed(1) + 'px'; sheetGrip.style.width = ir.width.toFixed(1) + 'px'; sheetGrip.style.top = ir.top.toFixed(1) + 'px';
    sheetGripTop = ir.top;
  }
  // alt çubuk serbest alana sığmazsa yalnızca simge (adlar ipucu balonunda)
  function fitDock(compact) {
    dockEl.classList.remove('tight');
    if (!compact && dockEl.offsetWidth > free.right - free.left - 24) dockEl.classList.add('tight');
  }
  let lastFit = 0, built = false, sheetGripTop = -1;
  window.addEventListener('resize', layout);
  if (window.ResizeObserver) new ResizeObserver(layout).observe(infoEl);

  /* ---------- paneller ---------- */
  // index: dizin (çekmece) açık; info: bilgi kartı görünür; infoMini: kart kısa özet
  const panels = { index: true, info: true };
  try { Object.assign(panels, JSON.parse(localStorage.getItem('atlas.paneller') || '{}')); } catch (e) { /* depolama kapalı */ }
  if (drawerOverlay()) panels.index = false;      // dar masaüstünde dizin kapalı başlar (açılınca beynin üstüne gelir)
  function infoTitle() {
    if (state.set) return setName(state.set.kind, setSrc(state.set.kind, state.set.id));
    return state.selected ? DATA[state.selected].name : t('Bilgi kartı');
  }
  function infoColor() {
    if (state.set) { const src = setSrc(state.set.kind, state.set.id); return state.set.kind === 'path' ? DATA[src.core[0]].color : src.color || 'var(--accent)'; }
    return state.selected ? DATA[state.selected].color : 'var(--accent)';
  }
  function updatePill() {
    $('#infoPill').innerHTML = '<span class="dot" style="background:' + infoColor() + '"></span>' + esc(infoTitle()) + ' <span aria-hidden="true">‹</span>';
  }
  const ICO_MINI = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 12h13"/></svg>';
  const ICO_FULL = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4.5H4.5V8M16 4.5h3.5V8M8 19.5H4.5V16M16 19.5h3.5V16"/></svg>';
  function setPanels(next) {
    Object.assign(panels, next);
    const cmp = compactMQ.matches, mriOn = mriIsOpen;
    document.body.classList.toggle('no-index', !panels.index);
    document.body.classList.toggle('drawer-on', !cmp && panels.index && !mriOn);
    document.body.classList.toggle('drawer-overlay', !cmp && drawerOverlay());
    // telefonda kart hep görünür (çekmece ya da sağ panel); kısa kart ve gizleme yalnızca masaüstünde
    document.body.classList.toggle('no-info', !cmp && !panels.info);
    document.body.classList.toggle('info-mini', !cmp && !!panels.infoMini);
    const mb = $('#infoMini');
    mb.innerHTML = panels.infoMini ? ICO_FULL : ICO_MINI;
    mb.dataset.tip = panels.infoMini ? 'Kartı genişlet' : 'Kartı kısa özete indir';
    mb.setAttribute('aria-label', t(mb.dataset.tip));
    mb.setAttribute('aria-pressed', String(!!panels.infoMini));
    $('#infoPill').hidden = cmp || panels.info;
    updatePill();
    $('#panels').setAttribute('aria-pressed', String(!panels.index && !panels.info));
    try { localStorage.setItem('atlas.paneller', JSON.stringify(panels)); } catch (e) { /* depolama kapalı */ }
    smoothLayout = true;
    layout();
    smoothLayout = false;
  }
  $('#infoMin').addEventListener('click', () => setPanels({ info: false }));
  $('#infoMini').addEventListener('click', () => setPanels({ infoMini: !panels.infoMini }));
  $('#infoPill').addEventListener('click', () => setPanels({ info: true }));
  // Odak: dizin ve kart birlikte gizlenir ya da geri gelir
  $('#panels').addEventListener('click', () => {
    const hide = panels.index || panels.info;
    setPanels({ index: !hide, info: !hide });
  });
  // kartın sol kenarı sürüklenerek genişler ya da daralır (320 px – ekranın yarısı); çift tık varsayılana döndürür
  const INFO_W = 430;
  function setInfoW(w, save) {
    document.documentElement.style.setProperty('--info-w', Math.round(w) + 'px');
    if (built) layout();
    if (save) { try { localStorage.setItem('atlas.kartgen', String(Math.round(w))); } catch (e) { /* depolama kapalı */ } }
  }
  try { const w = +localStorage.getItem('atlas.kartgen'); if (w >= 320 && w <= 1400) setInfoW(w); } catch (e) { /* depolama kapalı */ }
  infoGrip.addEventListener('pointerdown', (e) => {
    if (e.button) return;
    e.preventDefault();
    try { infoGrip.setPointerCapture(e.pointerId); } catch (err) { /* işaretçi yakalanamadı */ }
    infoGrip.classList.add('drag'); document.body.classList.add('resizing');
    const move = (ev) => setInfoW(Math.min(Math.max(320, window.innerWidth - ev.clientX - 12), window.innerWidth * 0.48));
    const up = () => {
      infoGrip.removeEventListener('pointermove', move); infoGrip.removeEventListener('pointerup', up); infoGrip.removeEventListener('pointercancel', up);
      infoGrip.classList.remove('drag'); document.body.classList.remove('resizing');
      setInfoW(infoEl.getBoundingClientRect().width, true);
    };
    infoGrip.addEventListener('pointermove', move);
    infoGrip.addEventListener('pointerup', up);
    infoGrip.addEventListener('pointercancel', up);
  });
  infoGrip.addEventListener('dblclick', () => setInfoW(INFO_W, true));

  /* ---------- bölge dizini ---------- */
  const listEl = $('#list');
  function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  // Sol dizin sekmeli: Bölgeler (loblara göre açılıp kapanan gruplar), Sistemler (Panksepp), Yolaklar (kitap ve nörotransmitter),
  // Ağlar (büyük ölçekli beyin ağları), Tanılar (DEHB, OSB, OKB, depresyon).
  const LTABS = [['regions', t('Bölgeler'), t('Bölge ara (ör. amigdala, BA 46)')], ['sys', t('Sistemler'), t('Sistem ara (ör. korku, oyun)')],
    ['path', t('Yolaklar'), t('Yolak ara (ör. vagus, dopamin)')], ['nt', t('Nörotransmitterler'), t('Nörotransmitter ara (ör. dopamin, GABA)')],
    ['net', t('Ağlar'), t('Ağ ara (ör. varsayılan, dikkat)')], ['tani', t('Tanılar'), t('Tanı ara (ör. DEHB, depresyon)')],
    ['ilac', t('İlaçlar'), t('İlaç ara (ör. fluoksetin, SSRİ)')]];
  const openGroups = new Set();          // kullanıcının açtığı lob grupları (yeniden çizimde korunur)
  function itemHTML(id, sub) {
    const d = DATA[id], kids = CHILDREN[id];
    return '<button class="item' + (sub ? ' sub' : '') + '" data-id="' + id + '"><span class="dot" style="background:' + d.color + '"></span>' +
      '<span class="nm">' + esc(d.name) + '</span><span class="tag">' +
      (hasBook(id) ? t('<i class="bk" title="Kitapta ele alınıyor"></i>') : '') +
      (kids ? t('<span title="Seçilince ') + kids.length + t(' alt yapı açılır">+') + kids.length + '</span>' : (d.deep && !sub ? t('derin') : '')) +
      '</span></button>';
  }
  function setLtab(tab) {
    if (!DV && (tab === 'sys' || tab === 'path')) tab = 'regions';
    state.ltab = tab;
    document.querySelectorAll('[data-ltab]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.ltab === tab)));
    const L = LTABS.find((x) => x[0] === tab);
    $('#q').placeholder = L[2];
    $('#secTitle').textContent = L[1];
    const n = { regions: ORDER.length, sys: DV ? DV.systems.length : 0, path: DV ? DV.pathways.length : 0, nt: NT_LIST.length,
      net: NET_LIST.length + 1, tani: TANI_LIST.length, ilac: ILAC_LIST.length }[tab];
    $('#secCount').textContent = tab === 'regions' ? n + t(' bölge · ') + window.NEURO_REGIONS.filter((r) => r.parent).length + t(' alt yapı') : String(n);
  }
  function buildList(filter) {
    const q = (filter || '').trim().toLocaleLowerCase(LOCALE);
    const has = (...xs) => !q || xs.join(' ').toLocaleLowerCase(LOCALE).includes(q);
    let html = '';
    if (state.ltab === 'sys') {
      html += t('<p class="lhead">Panksepp’in yedi temel duygu sistemi · kitaptan</p>');
      DV.systems.filter((s) => has(s.id, s.feel, s.circuit)).forEach((s) => {
        html += '<button class="scard" data-sys="' + esc(s.id) + '" style="--sc:' + s.color + '"><b>' + esc(s.id) + '</b>' +
          '<span>' + esc(s.feel) + '</span><small>' + s.core.length + t(' temel bölge') +
          (s.related.length ? ' · ' + s.related.length + t(' ilişkili') : '') + '</small></button>';
      });
    } else if (state.ltab === 'net') {
      html += t('<p class="lhead">Büyük ölçekli beyin ağları · Yeo 2011 ve çoklu talep</p>');
      if (has(NETS.all.name, 'yeo tümü hepsi all seven')) {
        html += '<button class="ncard all" data-net="all"><span class="sw">' + NET_LIST.filter((n) => n.yeo)
          .sort((a, b) => a.yeo - b.yeo).map((n) => '<i style="background:' + n.color + '"></i>').join('') + '</span>' +
          '<b>' + esc(NETS.all.name) + t('</b><small>Yeo 2011 · klasik yedi ağ haritası</small></button>');
      }
      NET_LIST.filter((n) => has(n.name, n.tr, n.short, n.eng, n.summary)).forEach((n) => {
        html += '<button class="ncard" data-net="' + n.id + '" style="--sc:' + n.color + '"><b>' + esc(n.name) +
          ' <em>' + esc(n.short) + '</em></b><span>' + esc(n.summary) + '</span></button>';
      });
    } else if (state.ltab === 'tani') {
      html += t('<p class="lhead">Tanılar · bölgeler, ağlar ve nörotransmitterler</p>');
      TANI_LIST.filter((d) => has(d.name, d.short, d.eng, d.summary)).forEach((d) => {
        html += '<button class="ncard" data-tani="' + d.id + '" style="--sc:' + d.color + '"><b>' + esc(d.name) +
          (d.short !== d.name ? ' <em>' + esc(d.short) + '</em>' : '') + '</b><span>' + esc(d.summary) + '</span><small>' +
          d.core.filter((x) => DATA[x]).length + t(' çekirdek') + ' · ' + d.related.filter((x) => DATA[x]).length + t(' ilişkili bölge') +
          (d.nets.length ? ' · ' + d.nets.length + t(' ağ') : '') + (d.nt.length ? ' · ' + d.nt.length + t(' nörotransmitter') : '') + '</small>' +
          (d.mercek ? t('<small class="tlenses">Devre · Bulgular · Belirtiler · Tedavi</small>') : '') + '</button>';
      });
    } else if (state.ltab === 'nt') {
      html += t('<p class="lhead">Nörotransmitter yolakları · canlı</p>');
      NT_LIST.filter((n) => has(n.name, n.short, n.eng, n.summary)).forEach((n) => {
        html += '<button class="ncard" data-ntid="' + n.id + '" style="--sc:' + n.color + '"><b>' + esc(n.name) +
          ' <em>' + esc(n.short) + '</em></b><span>' + esc(n.summary) + '</span></button>';
      });
    } else if (state.ltab === 'ilac') {
      html += '<p class="uyari">' + esc(UYARI) + '</p>';
      [...new Set(ILAC_LIST.map((d) => d.grup))].forEach((g) => {
        const list = ILAC_LIST.filter((d) => d.grup === g && has(d.name, d.sinif, d.ozet, d.grup));
        if (!list.length) return;
        html += '<p class="lhead">' + esc(g) + '</p>';
        list.forEach((d) => {
          html += '<button class="ncard" data-ilac="' + d.id + '" style="--sc:' + d.color + '"><b>' + esc(d.name) +
            ' <em>' + esc(d.sinif) + '</em></b><span>' + esc(d.ozet) + '</span></button>';
        });
      });
    } else if (state.ltab === 'path') {
      html += t('<p class="lhead">Kitaptaki ana yolaklar · Bölüm 20</p>');
      DV.pathways.filter((pw) => has(pw.name, pw.chain)).forEach((pw) => {
        html += '<button class="pcard" data-path="' + pw.id + '" style="--sc:' + DATA[pw.core[0]].color + '"><b>' + esc(pw.name) + '</b>' +
          '<span>' + esc(pw.chain) + '</span></button>';
      });
    } else {
      const match = (id) => { const d = DATA[id]; return has(d.name, d.short, d.latin, d.id, d.anatomy.join(' ')); };
      const open = familyOf(state.selected), selGroup = state.selected && DATA[state.selected].group;
      GROUPS.forEach(([g, gname]) => {
        let rows = '', n = 0;
        ORDER.filter((id) => DATA[id].group === g).forEach((id) => {
          const kids = (CHILDREN[id] || []).filter((k) => (q ? match(k) && DATA[k].parent === id : open === id));   // aramada iki ebeveynli alt yapı bir kez
          if (q && !match(id) && !kids.length) return;
          n++;
          rows += itemHTML(id) + kids.map((k) => itemHTML(k, true)).join('');
        });
        if (!rows) return;
        const isOpen = !!q || openGroups.has(g) || g === selGroup;
        html += '<details class="lg" data-g="' + g + '"' + (isOpen ? ' open' : '') + '><summary><span>' + esc(gname) + '</span>' +
          '<span class="cnt">' + n + '</span></summary>' + rows + '</details>';
      });
      if (q) {         // arama bütün atlası kapsar: öteki sekmelerdeki eşleşmeler altta
        const more = [];
        if (DV) DV.systems.filter((x) => has(x.id, x.feel, x.circuit)).forEach((x) => more.push(['data-sys="' + esc(x.id) + '"', x.color, x.id, t('Panksepp sistemi')]));
        NT_LIST.filter((x) => has(x.name, x.short, x.eng)).forEach((x) => more.push(['data-ntid="' + x.id + '"', x.color, x.name, t('Nörotransmitter yolakları')]));
        if (DV) DV.pathways.filter((x) => has(x.name, x.chain)).forEach((x) => more.push(['data-path="' + x.id + '"', DATA[x.core[0]].color, x.name, t('Kitaptaki yolak')]));
        NET_LIST.filter((x) => has(x.name, x.tr, x.short, x.eng)).forEach((x) => more.push(['data-net="' + x.id + '"', x.color, x.name, t('Beyin ağı')]));
        TANI_LIST.filter((x) => has(x.name, x.short, x.eng)).forEach((x) => more.push(['data-tani="' + x.id + '"', x.color, x.name, t('Tanı')]));
        if (more.length) html += t('<p class="lhead">Öteki sonuçlar</p>') + more.map(([a, c, nm, k]) =>
          '<button class="item" ' + a + '><span class="dot" style="background:' + c + '"></span><span class="nm">' + esc(nm) + '</span><span class="tag">' + k + '</span></button>').join('');
      }
    }
    listEl.innerHTML = html || t('<p style="padding:10px;color:var(--fg-3)">Eşleşen sonuç yok.</p>');
    listEl.querySelectorAll('details.lg').forEach((el) => el.addEventListener('toggle', () => {
      if (el.open) openGroups.add(el.dataset.g); else openGroups.delete(el.dataset.g);
    }));
    markList();
    const on = listEl.querySelector('.on');     // seçili öğe görünür kalsın (yalnızca liste kayar, sayfa değil)
    if (on) {
      const top = on.offsetTop - listEl.offsetTop, bottom = top + on.offsetHeight;
      if (top < listEl.scrollTop) listEl.scrollTop = top - 8;
      else if (bottom > listEl.scrollTop + listEl.clientHeight) listEl.scrollTop = bottom - listEl.clientHeight + 8;
    }
  }
  function markList() {
    const set = activeSet();
    listEl.querySelectorAll('.item[data-id]').forEach((b) =>
      b.classList.toggle('on', b.dataset.id === state.selected || !!(set && set.core.has(b.dataset.id))));
    listEl.querySelectorAll('[data-sys]').forEach((b) =>
      b.classList.toggle('on', !!state.set && state.set.kind === 'sys' && state.set.id === b.dataset.sys));
    listEl.querySelectorAll('[data-path]').forEach((b) =>
      b.classList.toggle('on', !!state.set && state.set.kind === 'path' && state.set.id === b.dataset.path));
    listEl.querySelectorAll('[data-net]').forEach((b) =>
      b.classList.toggle('on', !!state.set && state.set.kind === 'net' && state.set.id === b.dataset.net));
    listEl.querySelectorAll('[data-ntid]').forEach((b) =>
      b.classList.toggle('on', !!state.set && state.set.kind === 'nt' && state.set.id === b.dataset.ntid));
    listEl.querySelectorAll('[data-tani]').forEach((b) =>
      b.classList.toggle('on', !!state.set && state.set.kind === 'tani' && state.set.id === b.dataset.tani));
    listEl.querySelectorAll('[data-ilac]').forEach((b) =>
      b.classList.toggle('on', !!state.set && state.set.kind === 'ilac' && state.set.id === b.dataset.ilac));
  }
  // Raydaki bölüm düğmesi dizini o bölümle açar; açık olan bölüme yeniden basınca kapanır. Telefondaki bölüm çipleri yalnızca bölüm değiştirir.
  const drawerOpen = () => (compactMQ.matches ? indexEl.classList.contains('open') : panels.index && !mriIsOpen);
  function openSection(sec, opts) {
    opts = opts || {};
    if (mriIsOpen) openMRI(false);
    if (!opts.keep && drawerOpen() && state.ltab === sec) { closeDrawer(); return; }
    setLtab(sec);
    buildList($('#q').value);
    if (compactMQ.matches) { toggleMenu(true); dtabShow(); }
    else setPanels({ index: true });
    if (opts.focus) { $('#q').focus(); $('#q').select(); }
  }
  // telefonda bölüm sekmeleri yatay kayar: seçili sekme görünür alana getirilir, kenarlar devamı varsa solar
  const dtabsRow = $('.dtabs');
  function dtabEdges() {
    if (!dtabsRow) return;
    const max = dtabsRow.scrollWidth - dtabsRow.clientWidth;
    dtabsRow.classList.toggle('fl', dtabsRow.scrollLeft > 2);
    dtabsRow.classList.toggle('fr', dtabsRow.scrollLeft < max - 2);
  }
  function dtabShow() {
    const cur = dtabsRow && dtabsRow.querySelector('[aria-selected="true"]');
    if (!cur) return;
    const rr = dtabsRow.getBoundingClientRect(), cr = cur.getBoundingClientRect();
    if (rr.width) {
      if (cr.left < rr.left + 40) dtabsRow.scrollLeft -= rr.left + 40 - cr.left;
      else if (cr.right > rr.right - 40) dtabsRow.scrollLeft += cr.right - (rr.right - 40);
    }
    dtabEdges();
  }
  if (dtabsRow) { dtabsRow.addEventListener('scroll', dtabEdges, { passive: true }); addEventListener('resize', dtabEdges); }
  function closeDrawer() {
    if (compactMQ.matches) toggleMenu(false);
    else if (panels.index) setPanels({ index: false });
  }
  document.querySelectorAll('[data-ltab]').forEach((b) => b.addEventListener('click', () =>
    openSection(b.dataset.ltab, { keep: b.classList.contains('dtab') })));
  $('#indexMin').addEventListener('click', closeDrawer);
  listEl.addEventListener('click', (e) => {
    const b = e.target.closest('[data-id],[data-sys],[data-path],[data-net],[data-ntid],[data-tani],[data-ilac]');
    if (!b) return;
    if (b.dataset.ilac) selectSet('ilac', b.dataset.ilac);
    else if (b.dataset.net) selectSet('net', b.dataset.net);
    else if (b.dataset.tani) selectSet('tani', b.dataset.tani);
    else if (b.dataset.ntid) selectSet('nt', b.dataset.ntid);
    else if (b.dataset.sys) selectSet('sys', b.dataset.sys);
    else if (b.dataset.path) selectSet('path', b.dataset.path);
    else select(b.dataset.id, { fly: true });
    if (compactMQ.matches) toggleMenu(false);          // telefonda ve dar ekranda seçim yapılınca dizin kapanır, beyin görünür
    else if (drawerOverlay()) setPanels({ index: false });
  });
  $('#q').addEventListener('input', (e) => buildList(e.target.value));

  // telefonda dizin: alttaki Dizin düğmesiyle beynin üstünde açılır
  const dockIndexBtn = $('#dockIndex');
  function toggleMenu(open) {
    indexEl.classList.toggle('open', open);
    dockIndexBtn.setAttribute('aria-expanded', String(open));
    if (open) closeMenus();
  }
  dockIndexBtn.addEventListener('click', () => {
    if (mriIsOpen) openMRI(false);
    toggleMenu(!indexEl.classList.contains('open'));
    if (indexEl.classList.contains('open')) dtabShow();
  });

  /* ---------- bilgi paneli ---------- */
  function fmt(s) {
    return esc(s).replace(/\bBA\s?\d+[a-z]?(?:\s?[–\-\/,]\s?\d+[a-z]?)*/g, (m) => '<span class="ba">' + m + '</span>')
      .replace(/\s?\[(A|B|C|A\/B|B\/C)\]/g, (m, k) => ' <span class="ev" title="' + k.split('/').map((x) => EVIDENCE[x]).join(' · ') + '">' + k + '</span>');
  }
  // Kitaptaki "Bölüm N" göndermelerine bölüm adını ipucu olarak ekle
  function fmtBook(s) {
    const C = DV ? DV.chapters : {};
    return esc(s).replace(/(Bölüm|Chapters?)\s(\d+(?:\s?(?:[–,-]|ve|and)\s?\d+)*)/g, (m, w, nums) =>
      w + ' ' + nums.replace(/\d+/g, (n) => (C[n] ? '<abbr title="' + esc(C[n]) + '">' + n + '</abbr>' : n)));
  }
  function sysChip(sid) {
    const s = SYS[sid];
    return s ? '<button class="chip" data-sys="' + esc(sid) + '"><i style="background:' + s.color + '"></i>' + esc(sid) + '</button>' : '';
  }
  // Kartın sonundaki anatomik blok: canlı yolak kutusu ve bölge listeleri (kullanıcı 2026-10-11: "bilgiler daha önemli,
  // anatomik bağlantılar her kartta altta kalsın"); bilgi metni ve kaynak bunun üstünde durur
  const anatHTML = (inner) => (inner ? '<div class="anat">' + inner + '</div>' : '');
  function regionChips(ids) {
    return ids.filter((rid) => DATA[rid]).map((rid) =>
      '<button class="rchip" data-region="' + rid + '"><i style="background:' + DATA[rid].color + '"></i>' + esc(DATA[rid].name) + '</button>').join('');
  }
  const block = (label, html) => '<div class="blk"><h5>' + label + '</h5><p>' + html + '</p></div>';

  function renderIntro() {
    const legend = GROUPS.map(([g, n]) => {
      const first = ORDER.find((id) => DATA[id].group === g);
      return '<span><i class="dot" style="background:' + DATA[first].color + '"></i>' + esc(n) + '</span>';
    }).join('');
    const nSub = window.NEURO_REGIONS.filter((r) => r.parent).length;
    infoEl.innerHTML = '<div class="head intro"><div class="eyebrow">' + ORDER.length + t(' bölge · ') + nSub + t(' alt yapı</div>') +
      t('<h2>Bir yapıya dokunun</h2>') +
      t('<p class="summary">Seçilen yapı renkli kalır, ötekiler saydamlaşır. Kartta işlevleri, anatomisi, gelişimi, klinik bağlamı, tedavisi ve kitaptaki karşılığı açılır; maddeler literatürle desteklidir.</p>') +
      '<div class="qstart">' +
      t('<button data-ltabgo="regions"><b>Bölgeler</b><span>') + ORDER.length + t(' bölge, ') + nSub + t(' alt yapı</span></button>') +
      (DV ? t('<button data-ltabgo="sys"><b>Sistemler</b><span>Panksepp\'in 7 duygu sistemi, canlı devre</span></button>') : '') +
      (NT_LIST.length ? t('<button data-ltabgo="nt"><b>Nörotransmitterler</b><span>') + NT_LIST.length + t(' sistemin canlı yolları ve reseptörleri</span></button>') : '') +
      (DV ? t('<button data-ltabgo="path"><b>Yolaklar</b><span>Kitabın ana yolakları, canlı çizim</span></button>') : '') +
      t('<button data-ltabgo="net"><b>Ağlar</b><span>DMN, dikkat, belirginlik ve diğerleri</span></button>') +
      (TANI_LIST.length ? t('<button data-ltabgo="tani"><b>Tanılar</b><span>') + TANI_LIST.map((d) => esc(d.short)).join(', ') +
        t(': ilgili bölgeler, ağlar ve nörotransmitterler</span></button>') : '') +
      (ILAC_LIST.length ? t('<button data-ltabgo="ilac"><b>İlaçlar</b><span>') + ILAC_LIST.length + t(' ilacın etki yeri, yan etki yolları ve etkileşimleri</span></button>') : '') +
      '</div><p class="uyari">' + esc(UYARI) + '</p>' +
      t('<p class="hint">Sürükleyerek döndürün, tekerlekle yaklaşın. Üstteki arama kutusu (<kbd>K</kbd>) her şeye ulaştırır; soldaki ray dizinin bölümlerini ve MR kesiti açar. Bütün kısayollar için <button class="linkbtn" data-help>Kısayollar</button>.</p>') +
      '<div class="legend">' + legend + '</div></div>' +
      t('<div id="body"><p class="note" style="margin-top:0">Model, MNI ICBM152 ortalama beyninden ve CerebrA, HCP-MMP1.0, CIT168, Harvard AAN, SUIT ile Najdenovska talamus atlaslarından üretilmiştir; beyin ağları Yeo 2011 atlasından.') +
      t('Bazı küçük yapılar (vagal çekirdekler, stria terminalis, hipofiz) atlaslarda olmadığı için yaklaşık olarak modellenmiştir; ayrıntı her bölgenin Anatomi sekmesinde.') +
      (DV ? t(' Kitap içeriği: <i>') + esc(DV.book.title) + '</i>, ' + esc(DV.book.chapter) + '.' : '') + '</p>' + creditsHTML() +
      '<p class="credits"><a href="yasal.html">' + t('Yasal bilgiler: tıbbi uyarı, kullanım koşulları, gizlilik') + '</a></p></div>';
  }
  // Veri lisanslarının gerektirdiği atıflar (MNI telif notu tüm kopyalarda yer almalı)
  function creditsHTML() {
    return t('<details class="credits"><summary>Veri kaynakları ve lisanslar</summary><ul>') +
      t('<li><b>MNI ICBM152 2009c doğrusal olmayan simetrik şablon</b> (Fonov ve ark., NeuroImage 2011). ') +
      'Copyright (C) 1993–2004 Louis Collins, McConnell Brain Imaging Centre, Montreal Neurological Institute, McGill University. ' +
      'Permission to use, copy, modify, and distribute this software and its documentation for any purpose and without fee is hereby granted, ' +
      'provided that the above copyright notice appear in all copies. The authors and McGill University make no representations about the ' +
      'suitability of this software for any purpose. It is provided “as is” without express or implied warranty.</li>' +
      t('<li><b>CerebrA</b> (Manera, Dadar, Fonov ve Collins, Scientific Data 2020) — CC0 1.0. Kortikal giruslar ve derin çekirdekler.</li>') +
      t('<li><b>CIT168 subkortikal atlas</b> (Pauli, Nili ve Tyszka, Scientific Data 2018) — CC BY 4.0. ') +
      t('Hipotalamus, VTA, genişletilmiş amigdala, substantia nigra (SNc, SNr), kırmızı çekirdek, subtalamik çekirdek, habenula, ventral pallidum ') +
      t('ve globus pallidus segmentleri (GPe, GPi); olasılık haritalarından 3B yüzeye dönüştürülmüştür.</li>') +
      t('<li><b>Harvard Ascending Arousal Network atlası v2.0</b> (Edlow ve Kinney, Dryad 2023) — CC0 1.0. ') +
      t('PAG, rafe, locus coeruleus, parabrakial kompleks, PPN/LDT ve retiküler formasyon; FSL MNI152 uzayından ICBM 2009c şablonuna dünya koordinatlarıyla aktarılmıştır.</li>') +
      t('<li><b>Hipotalamus bölgesi atlası</b> (Neudorfer, Germann ve ark., Scientific Data 2020) — CC BY 4.0. ') +
      t('12 hipotalamus çekirdeği, Meynert bazal çekirdeği ve Broca\'nın diyagonal bandı; 990 HCP katılımcısının ortalama şablonunda elle çizilmiş 0,25 mm etiketlerden ICBM 2009c şablonuna dünya koordinatlarıyla aktarılmış, yüzeye dönüştürülmüştür.</li>') +
      t('<li><b>HCP-MMP1.0 korteks parselasyonu</b> (Glasser ve ark., Nature 2016; MNI hacimsel sürüm: A. Horn, figshare 2016) — CC BY 4.0. ') +
      t('Ön lob bölge sınırları (DLPFC, premotor, mPFC, OFC, Broca) ve TPJ bu alanlara göre çizilmiştir. Veriler WU-Minn İnsan Konnektom Projesi (HCP) kaynaklıdır.</li>') +
      t('<li><b>Yeo 2011 yedi ağ atlası</b> (Yeo, Krienen ve ark., J Neurophysiol 2011; 1000 kişinin dinlenim fMRI\'ı) — MIT lisansı, ') +
      t('Copyright (c) 2016 Computational Brain Imaging Group. Korteks köşelerinin ağ renkleri. ') +
      '<a href="https://github.com/ThomasYeoLab/CBIG" target="_blank" rel="noopener">ThomasYeoLab/CBIG</a></li>' +
      t('<li><b>Çoklu talep çekirdeği</b> (Assem, Glasser, Van Essen ve Duncan, Cerebral Cortex 2020): HCP-MMP1.0 alanlarından tanımlanmıştır.</li>') +
      t('<li><b>Talamus çekirdekleri atlası</b> (Najdenovska, Alemán-Gómez ve ark., Scientific Data 2018) — CC BY-SA 4.0. ') +
      t('Yedi çekirdek grubu; CerebrA talamusu bu olasılık haritalarına göre bölünmüştür. Bu atlastan türetilen talamus çekirdeği ') +
      t('yüzeyleri aynı lisansla (CC BY-SA 4.0) paylaşılır.</li>') +
      t('<li><b>SUIT serebellum atlası</b> (Diedrichsen ve ark., NeuroImage 2009; derin çekirdekler: Diedrichsen ve ark., NeuroImage 2011) — ') +
      t('CC BY-NC 3.0, yalnızca ticari olmayan kullanım. Serebellum lobülleri, dentat ve interpozit çekirdekler. ') +
      '<a href="http://www.diedrichsenlab.org/imaging/propatlas.htm" target="_blank" rel="noopener">diedrichsenlab.org</a></li>' +
      t('<li><b>Elle modellenenler:</b> vagal çekirdekler, stria terminalis, hipofiz.</li>') +
      t('<li>Görselleştirme: three.js (MIT).</li></ul></details>');
  }
  // Ağ kartı: bölge kartı gibi sekmeli; başta görünüm düğmeleri (iç yüz DMN için önemli) ve ilgili bölgeler
  const NET_VIEWS = [['lateralL', t('Sol yan')], ['lateralR', t('Sağ yan')], ['medial', t('İç yüz')], ['superior', t('Üst')], ['posterior', t('Arka')]];
  function renderNet() {
    const kind = state.set.kind, isNet = kind === 'net', n = setSrc(kind, state.set.id);
    const list = isNet ? ['all'].concat(NET_LIST.map((x) => x.id)) : NT_LIST.map((x) => x.id);
    const get = (id) => setSrc(kind, id);
    const i = list.indexOf(n.id), prev = get(list[(i - 1 + list.length) % list.length]), next = get(list[(i + 1) % list.length]);
    infoEl.style.setProperty('--rc', n.color);
    const views = '<div class="vrow">' + NET_VIEWS.map(([v, t]) => '<button class="ghostbtn" data-vw="' + v + '">' + t + '</button>').join('') + '</div>';
    let head = '<div class="head">' + crumbsHTML() + '<div class="eyebrow"><span class="dot" style="background:' + n.color + '"></span>' +
      (isNet ? t('Beyin ağı · ') + (n.md ? t('Assem ve ark., 2020') : t('Yeo ve ark., 2011')) : t('Nörotransmitter yolakları · canlı')) + '</div>' +
      '<h2>' + esc(n.name) + '</h2><div class="latin">' + esc((isNet ? [n.tr, n.short] : [n.eng, n.short]).filter(Boolean).join(' · ')) + '</div>' +
      '<p class="summary">' + esc(n.summary) + '</p>' + views;
    if (n.all) {
      head += '</div><div id="body"><div class="nlegend">' + NET_LIST.filter((x) => x.yeo).sort((a, b) => a.yeo - b.yeo).map((x) =>
        '<button class="nrow" data-setkind="net" data-setid="' + x.id + '"><i style="background:' + x.color + '"></i><b>' + esc(x.name) +
        '</b><span>' + esc(x.short) + '</span></button>').join('') + '</div>' +
        t('<p class="note">Gri: orta hat (korpus kallozum çevresi), ağ atlasında yer almaz. Çoklu talep çekirdeği ayrı bir katmandır; ') +
        t('listeden seçilince gösterilir.</p><p class="note">') + esc(window.NEURO_NETWORKS_NOTE || '') + '</p></div>';
      infoEl.innerHTML = head + '<div class="foot"><button class="ghostbtn" data-setkind="net" data-setid="' + prev.id + '">← ' + esc(prev.short) +
        t('</button><button class="ghostbtn" data-close>Tümünü göster</button><button class="ghostbtn" data-setkind="net" data-setid="') + next.id + '">' +
        esc(next.short) + ' →</button></div>';
      return;
    }
    const tabs = TABS.filter(([k]) => k !== 'divan' && (n[k] || []).length > 0);
    if (!tabs.some(([k]) => k === state.tab)) state.tab = tabs[0][0];
    infoEl.innerHTML = head + '</div>' +
      '<div class="tabs" role="tablist">' + tabs.map(([k, t]) =>
        '<button class="tab" role="tab" data-tab="' + k + '" aria-selected="' + (k === state.tab) + '">' + t + '</button>').join('') + '</div>' +
      '<div id="body" role="tabpanel"></div>' +
      '<div class="foot"><button class="ghostbtn" data-setkind="' + kind + '" data-setid="' + prev.id + '">← ' + esc(prev.short) + '</button>' +
      t('<button class="ghostbtn" data-close>Tümünü göster</button>') +
      '<button class="ghostbtn" data-setkind="' + kind + '" data-setid="' + next.id + '">' + esc(next.short) + ' →</button></div>';
    renderTab();
  }
  // ağ ve nörotransmitter kartının anatomik bloğu: canlı yolak (nörotransmitter), düğümler ya da kaynak çekirdekler ve hedefler
  function netAnatHTML(kind, n) {
    const isNet = kind === 'net';
    return anatHTML((isNet ? '' : flowCardHTML(FD && FD.SETS['nt:' + n.id])) +
      (n.core.length ? '<div class="family"><h5>' + (isNet ? t('Ağın düğümleri') : t('Kaynak çekirdekler')) + '</h5><div class="chips">' + regionChips(n.core) + '</div></div>' : '') +
      (n.related.length ? '<div class="family"><h5>' + (isNet ? t('İlişkili yapılar') : t('Başlıca hedefler')) + '</h5><div class="chips">' + regionChips(n.related) + '</div></div>' : ''));
  }
  // İlaç görünümünde kamera yönü korunur, uzaklık her ilaçta ve mercekte aynıdır (kullanıcı 2026-10-16: "yakınlık uzaklıkları orantısız")
  function ilacCamera() { flyTo(nav.position.clone().sub(controls.target), fitDistance() * (compactMQ.matches ? 1.05 : 0.92)); }   // telefonda tanılardaki gibi: beyin kenara değmesin
  // Mercek değişince kamera: TMS bobininde baş üstten, elektrotta yandan (yol boyu görünsün), bulgularda bütün beyin;
  // öteki merceklerde yön korunur, yapıları sığdıracak kadar yaklaşılır
  function taniCamera(first) {
    const set = activeSet();
    if (!set || !set.view) return;
    const v = set.view, dir = first ? new THREE.Vector3().fromArray(VIEWS.start) : nav.position.clone().sub(controls.target);
    // uzaklıklar bütün beyni gösteren uzaklığa göre: model ekrana sığsın (kullanıcı 2026-10-11: "3B model ekrana sığmıyor")
    if (v.marker && v.marker.bobin) flyTo(new THREE.Vector3(1, 0.78, 0.5), fitDistance() * 1.2);
    else if (v.marker) flyTo(new THREE.Vector3(1, 0.22, 0.2), fitDistance() * 1.0);
    else if (v.yon) flyTo(new THREE.Vector3().fromArray(v.yon), Math.max(fitDistance() * 1.05, fitFor(new THREE.Vector3().fromArray(v.yon))));   // mercek kendi açısını isteyebilir (ör. insulanın gizlediği amigdala alttan)
    else flyTo(dir, Math.max(fitDistance() * 1.05, fitFor(dir)));
  }
  // Tanı kartı (data/tanilar.js): başta özet ve ayrıntılı yazı bağlantısı, altında mercek sekmeleri; mercek 3B görünümü değiştirir
  function renderTani() {
    const d = TANI[state.set.id], s = taniState(d), lenses = taniLenses(d);
    if (!lenses.some(([k]) => k === s.lens)) s.lens = lenses[0][0];
    const i = TANI_LIST.indexOf(d), prev = TANI_LIST[(i - 1 + TANI_LIST.length) % TANI_LIST.length], next = TANI_LIST[(i + 1) % TANI_LIST.length];
    infoEl.style.setProperty('--rc', d.color);
    infoEl.innerHTML =
      '<div class="head">' + crumbsHTML() + '<div class="eyebrow"><span class="dot" style="background:' + d.color + '"></span>' + t('Tanı') + ' · ' + esc(d.short) +
      '</div>' +
      '<h2>' + esc(d.name) + '</h2>' + '<p class="summary">' + esc(d.summary) + '</p>' +
      (d.page ? '<a class="dlink" href="' + esc(d.page) + '">' + t('Ayrıntılı yazı') + ' <span aria-hidden="true">→</span></a>' : '') + '</div>' +
      '<div class="tabs" role="tablist">' + lenses.map(([k, n]) =>
        '<button class="tab" role="tab" data-lens="' + k + '" aria-selected="' + (k === s.lens) + '">' + n + '</button>').join('') + '</div>' +
      '<div id="body" role="tabpanel">' + lensHTML(d) + '</div>' +
      '<div class="foot"><button class="ghostbtn" data-setkind="tani" data-setid="' + prev.id + '">← ' + esc(prev.short) + '</button>' +
      t('<button class="ghostbtn" data-close>Tümünü göster</button>') +
      '<button class="ghostbtn" data-setkind="tani" data-setid="' + next.id + '">' + esc(next.short) + ' →</button></div>';
  }
  function renderIlac() {
    const d = ILAC[state.set.id], s = ilacState(d);
    const lenses = [['etki', t('Etki')], d.yanetki ? ['yanetki', t('Yan etki')] : null, ['cocuk', t('Çocuk ve ergen')], ['etkilesim', t('Etkileşim')]].filter(Boolean);
    if (!lenses.some(([k]) => k === s.lens)) s.lens = 'etki';
    const i = ILAC_LIST.indexOf(d), prev = ILAC_LIST[(i - 1 + ILAC_LIST.length) % ILAC_LIST.length], next = ILAC_LIST[(i + 1) % ILAC_LIST.length];
    infoEl.style.setProperty('--rc', d.color);
    infoEl.innerHTML =
      '<div class="head">' + crumbsHTML() + '<div class="eyebrow"><span class="dot" style="background:' + d.color + '"></span>' + t('İlaç') + ' · ' + esc(d.sinif) +
      '</div><h2>' + esc(d.name) + '</h2><p class="summary">' + esc(d.ozet) + '</p>' +
      '<p class="tlead"><b>' + t('Hedef:') + '</b> ' + fmt(d.hedef) + '</p><p class="uyari">' + esc(UYARI) + '</p></div>' +
      '<div class="tabs" role="tablist">' + lenses.map(([k, n]) =>
        '<button class="tab" role="tab" data-lens="' + k + '" aria-selected="' + (k === s.lens) + '">' + n + '</button>').join('') + '</div>' +
      '<div id="body" role="tabpanel">' + ilacBody(d, s) + '</div>' +
      '<div class="foot"><button class="ghostbtn" data-setkind="ilac" data-setid="' + prev.id + '">← ' + esc(prev.name) + '</button>' +
      t('<button class="ghostbtn" data-close>Tümünü göster</button>') +
      '<button class="ghostbtn" data-setkind="ilac" data-setid="' + next.id + '">' + esc(next.name) + ' →</button></div>';
  }
  function ilacBody(d, s) {
    const v = ilacView(d);
    const legend = (x) => (x.hot && x.hot.length ? '<p class="thot"><i></i>' + t('Turuncu nabız: ') + esc(x.hotTxt || t('etkinin arttığı yer')) + '</p>' : '') +
      (x.cold && x.cold.length ? '<p class="thot cold"><i></i>' + t('Mavi nabız: ') + esc(x.coldTxt || t('sinyalin kesildiği yer')) + '</p>' : '');
    const yolNot = '<p class="note">' + t('Yol parlaklığı ve yoğunluğu ilacın etkisini gösterir: geri alım kapanınca sinyal yoğun ve parlak, reseptör kapanınca seyrek ve sönük. İki ilacın birleşik etkisi hesaplanmaz.') + '</p>';
    if (s.lens === 'etki') {
      return '<p class="tlead">' + fmt(d.etki.text) + '</p>' + legend(d.etki) +
        anatHTML(flowCardHTML(v.def) + tchips(d.etki.core, d.etki.related || [])) + yolNot + tsrc(d.kaynak);
    }
    if (s.lens === 'yanetki' && d.yanetki) {
      return '<p class="tlead">' + t('Bir yan etki seçin: dayandığı yol 3B’de çizilir.') + '</p>' +
        tcards('data-iyan', d.yanetki, s.yan, (y) => '<p>' + fmt(y.text) + '</p>' + legend(y)) +
        anatHTML(flowCardHTML(v.def) + tchips(v.item.core, v.item.related || [])) + tsrc(d.kaynak);
    }
    if (s.lens === 'cocuk') return '<ul>' + d.cocuk.map((x) => '<li>' + fmt(x) + '</li>').join('') + '</ul>' +
      '<p class="note">' + esc(TARIH_NOTU) + '</p>' + tsrc(d.kaynak);
    return '<ul>' + d.etkilesim.map((x) => '<li>' + fmt(x) + '</li>').join('') + '</ul>' +
      '<p class="note">' + t('Etkileşimler ürün bilgilerinden ve yayımlanmış kaynaklardan özetlenmiştir; birlikte kullanım kararı hekimle verilir. Doz yazılmaz.') + '</p>' + tsrc(d.kaynak);
  }
  const tsrc = (x) => (x ? '<p class="tsrc">' + esc(x) + '</p>' : '');
  const tchips = (core, related) => (core.some((x) => DATA[x]) ? t('<h5 class="sub">Öne çıkan bölgeler</h5><div class="chips">') + regionChips(core) + '</div>' : '') +
    (related.some((x) => DATA[x]) ? t('<h5 class="sub">İlişkili bölgeler <small>(yarı saydam)</small></h5><div class="chips">') + regionChips(related) + '</div>' : '');
  const tseg = (attr, items, cur) => '<div class="seg" role="group">' + items.map(([k, n]) =>
    '<button ' + attr + '="' + esc(k) + '" aria-pressed="' + (k === cur) + '">' + esc(n) + '</button>').join('') + '</div>';
  const withEv = (txt, ev) => fmt(txt + (ev ? ' [' + ev + ']' : ''));
  // seçilebilir kart listesi; seçili kartın altında ayrıntısı açılır
  const tcards = (attr, list, cur, detail) => '<div class="tlist">' + list.map((x) =>
    '<button class="tcard' + (x.id === cur ? ' on' : '') + '" ' + attr + '="' + esc(x.id) + '" aria-pressed="' + (x.id === cur) + '"><b>' + esc(x.name) + '</b>' +
    (x.sub ? '<span>' + esc(x.sub) + '</span>' : '') + (x.devre ? '<small>' + esc(x.devre) + '</small>' : '') + '</button>' +
    (x.id === cur ? '<div class="tdetail">' + detail(x) + '</div>' : '')).join('') + '</div>';
  const MARK_VIEWS = [['lateralL', t('Sol yan')], ['anterior', t('Ön')], ['superior', t('Üst')]];
  function lensHTML(d) {
    const s = taniState(d), m = d.mercek || {}, v = taniView(d);
    if (s.lens === 'devre') {
      const c = m.devre, mode = c.modes[s.model];
      return '<h5 class="sub">' + esc(c.title) + '</h5><p class="tlead">' + withEv(c.text, c.ev) + '</p>' +
        tseg('data-tmodel', Object.keys(c.modes).map((k) => [k, c.modes[k].name]), s.model) +
        '<p class="tmode">' + esc(mode.text) + '</p>' +
        (mode.hot ? t('<p class="thot"><i></i>Turuncu nabız: artmış etkinlik</p>') : '') +
        (mode.cold ? t('<p class="thot cold"><i></i>Mavi nabız: azalmış etkinlik</p>') : '') +
        anatHTML(flowCardHTML(v.def) + tchips(c.core, c.related)) + tsrc(c.src);
    }
    if (s.lens === 'bulgular') {
      const B = m.bulgular, g = v.item;
      return '<p class="tlead">' + esc(B.text) + '</p>' + tseg('data-tgrup', B.gruplar.map((x) => [x.id, x.name]), g.id) +
        '<p class="tmode">' + esc(g.text) + '</p>' +
        t('<div class="ebar"><span>daha küçük / ince</span><i></i><span>daha büyük / kalın / etkin</span></div>') +
        '<div class="tfind">' + g.items.map((it) => '<button class="tfr" data-region="' + it.id + '"><i style="background:' + effectHex(it.d) + '"></i>' +
          '<b>' + esc(DATA[it.id] ? DATA[it.id].short : it.id) + '</b><span>' + esc(it.txt) + '</span><em>' + esc(it.dtxt) + '</em></button>').join('') + '</div>' +
        (g.hot ? t('<p class="thot"><i></i>Turuncu nabız: artmış etkinlik</p>') : '') + tsrc(g.src);
    }
    if (s.lens === 'belirtiler') {
      return t('<p class="tlead">Bir belirti boyutu seçin: dayandığı devre 3B’de canlı çizilir.</p>') +
        tcards('data-tbelirti', m.belirtiler, s.belirti, (b) => '<h5 class="sub">' + esc(b.devre) + '</h5><p>' + withEv(b.text, b.ev) + '</p>' +
          anatHTML(flowCardHTML(v.def) + tchips(b.core, b.related || []))) + tsrc(m.belirtilerSrc);
    }
    if (s.lens === 'tedavi') {
      return '<p class="uyari">' + esc(UYARI) + '</p>' + t('<p class="tlead">Bir tedavi seçin: etki ettiği yer 3B’de gösterilir.</p>') +
        tcards('data-ttedavi', m.tedavi, s.tedavi, (x) => '<p>' + withEv(x.text, x.ev) + '</p>' +
          (x.elektrot ? t('<p class="tkey"><i class="el"></i>Elektrot ve kontaklar <i class="vt"></i>Etkin kontak ve uyarılan doku</p>') : '') +
          (x.bobin ? t('<p class="tkey"><i class="tm"></i>Bobin ve manyetik alanın indiği derinlik</p>') : '') +
          (x.elektrot || x.bobin ? '<div class="vbtns">' + MARK_VIEWS.map(([k, n]) => '<button class="ghostbtn" data-vw="' + k + '">' + n + '</button>').join('') + '</div>' : '') +
          anatHTML((x.flow || x.routes ? flowCardHTML(v.def) : '') + tchips(x.core, x.related || [])) + tsrc(x.src));
    }
    if (s.lens === 'kitapta') return kitaptaHTML(d);
    // Bölgeler
    const chip = (attrs, color, label, tip) => '<button class="chip" ' + attrs + (tip ? ' title="' + esc(tip) + '"' : '') + '><i style="background:' + color + '"></i>' + esc(label) + '</button>';
    let h = tchips(d.core, d.related) + flowCardHTML(v.def);
    if (d.nets.some((id) => NETS[id])) h += t('<h5 class="sub">Ağlar <small>(3B’de ağ görünümüne geçer)</small></h5><div class="chips">') +
      d.nets.filter((id) => NETS[id]).map((id) => chip('data-setkind="net" data-setid="' + id + '"', NETS[id].color, NETS[id].name, NETS[id].tr || NETS[id].eng)).join('') + '</div>';
    if (d.nt.some((id) => NTS[id])) h += t('<h5 class="sub">Nörotransmitter sistemleri <small>(yolları 3B’de çizilir)</small></h5><div class="chips">') +
      d.nt.filter((id) => NTS[id]).map((id) => chip('data-setkind="nt" data-setid="' + id + '"', NTS[id].color, NTS[id].name, NTS[id].eng)).join('') + '</div>';
    return h;
  }
  // Kitapta: alıntılar kaynak metinde aranır; bulunamayan gösterilmez (birebir aktarım)
  function kitaptaHTML(d) {
    let h = BOOK_NOTE + (DV ? '<p class="src">' + esc(DV.book.title) + ' · ' + esc(DV.book.chapter) + '</p>' : '');
    const seen = new Set();     // aynı girdinin klinik satırı bir kez yazılır
    (d.kitapta || []).forEach((q) => {
      if (!DV) return;
      if (q.sys) {
        const S = SYS[q.sys];
        if (S) h += '<div class="tq">' + sysChip(q.sys) + '<p>' + t('Klinik bağlantılar: ') + '“' + esc(S.clinic) + '”</p></div>';
      } else if (q.path) {
        const P = PATH[q.path];
        if (P && q.snippet && (P[q.field || 'where'] || '').indexOf(q.snippet) >= 0)
          h += '<div class="tq"><button class="chip" data-path="' + esc(q.path) + '">' + esc(P.name) + '</button><p>“' + fmtBook(q.snippet) + '”</p></div>';
        else console.warn('Kitap alıntısı kaynakta yok:', q);
      } else {
        const E = DV.entries[q.entry];
        if (!E) return;
        const fld = q.field || 'where', ok = !q.snippet || (E[fld] || '').indexOf(q.snippet) >= 0;
        if (!ok) console.warn('Kitap alıntısı kaynakta yok:', q);
        const first = !seen.has(q.entry);
        seen.add(q.entry);
        h += '<div class="tq">' + (first ? '<b>' + esc(E.title) + '</b><p>' + t('Klinik: ') + '“' + esc(E.clinic) + '”</p>' : '') +
          (q.snippet && ok ? '<p>' + (fld === 'note' ? '' : t('Kitapta: ')) + '“' + fmtBook(q.snippet) + '”</p>' : '') + '</div>';
      }
    });
    if (d.panksepp.some((x) => SYS[x])) h += t('<h5 class="sub">Panksepp sistemleri</h5><div class="chips">') + d.panksepp.map(sysChip).join('') + '</div>';
    return h;
  }
  function renderSet() {
    if (state.set.kind === 'tani') { renderTani(); return; }
    if (state.set.kind === 'ilac') { renderIlac(); return; }
    if (state.set.kind === 'net' || state.set.kind === 'nt') { renderNet(); return; }
    const k = state.set.kind, src = k === 'sys' ? SYS[state.set.id] : PATH[state.set.id];
    const list = k === 'sys' ? DV.systems : DV.pathways;
    const i = list.indexOf(src), prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
    const color = k === 'sys' ? src.color : DATA[src.core[0]].color;
    infoEl.style.setProperty('--rc', color);
    let body = '';
    if (k === 'sys') {
      // kitaptan birebir anlatım (kullanıcı 2026-10-19: "Panksepp sistemlerinde hiç açıklama yok"): ilk parça açık, ötekiler açılır
      const txt = (DV.systemText || {})[src.id] || [];
      if (txt.length) {
        body += '<div class="kitap"><p class="src">' + esc(DV.book.title) + '</p>' + BOOK_NOTE + txt.map((x, n) => {
          const h = '<span class="bno">' + (/^\d/.test(x.bolum) ? t('Bölüm ') : '') + esc(x.bolum) + '</span>' + esc(x.baslik);
          const ps = x.p.map((q) => '<p>' + fmtBook(q) + '</p>').join('');
          return n === 0 ? '<section class="dv"><h4>' + h + '</h4>' + ps + '</section>' : '<details class="dv"><summary>' + h + '</summary>' + ps + '</details>';
        }).join('') + '</div>';
      }
      body += block(t('Temel devre'), esc(src.circuit)) + block(t('Nörokimya'), esc(src.chem)) + block(t('Klinik bağlantılar'), esc(src.clinic)) +
        block(t('Kitapta'), src.chapters.map((c) => t('Bölüm ') + c + ' — ' + esc(DV.chapters[c] || '')).join('<br>'));
    } else {
      body += BOOK_NOTE + block(t('Bağlantılar'), fmtBook(src.links)) + block(t('Kitapta nerelerde geçti'), fmtBook(src.where)) +
        '<blockquote>' + fmtBook(src.note) + '</blockquote>';
    }
    body += anatHTML(flowCardHTML(FD && FD.SETS[k + ':' + state.set.id]) +
      t('<h5 class="sub">Öne çıkan bölgeler</h5><div class="chips">') + regionChips(src.core) + '</div>' +
      (src.related.length ? t('<h5 class="sub">İlişkili bölgeler <small>(yarı saydam)</small></h5><div class="chips">') + regionChips(src.related) + '</div>' : ''));
    // kaynak ve çizim notu en sonda (kullanıcı 2026-10-11: "kaynak kısmı en alta, en önemsiz olanı")
    body += '<p class="note">' + (k === 'sys' ? esc(DV.systemsNote) : t('Yolak 3B modelde canlı olarak çizilir; çizim şematiktir.')) + '</p>';
    const nav = (t, label) => '<button class="ghostbtn" data-setkind="' + k + '" data-setid="' + esc(t.id) + '">' + label + '</button>';
    infoEl.innerHTML =
      '<div class="head">' + crumbsHTML() + '<div class="eyebrow"><span class="dot" style="background:' + color + '"></span>' +
      (k === 'sys' ? t('Panksepp sistemi') : t('Yolak')) + t(' · Kitaptan</div>') +
      '<h2>' + esc(k === 'sys' ? src.id : src.name) + '</h2><div class="latin">' + esc(k === 'sys' ? src.feel : src.chain) + '</div>' +
      '<p class="summary">' + (k === 'sys'
        ? t('Temel devredeki bölgeler renkli; kitapta bu sisteme bağlanan diğer bölgeler yarı saydam.')
        : esc(src.carries)) + '</p></div>' +
      '<div id="body">' + body + '</div>' +
      '<div class="foot">' + nav(prev, '← ' + (k === 'sys' ? esc(prev.id) : t('Önceki'))) +
      t('<button class="ghostbtn" data-close>Tümünü göster</button>') + nav(next, (k === 'sys' ? esc(next.id) : t('Sonraki')) + ' →') + '</div>';
  }
  function divanHTML(id) {
    let h = '<p class="src">' + esc(DV.book.title) + ' · ' + esc(DV.book.chapter) + '</p>' + BOOK_NOTE;
    DV.map[id].forEach((key) => {
      const e = DV.entries[key];
      h += '<section class="dv"><h4>' + esc(e.title) + '</h4>';
      if (e.systems.length || e.sysLabel) {
        h += '<div class="chips">' + e.systems.map(sysChip).join('') + (e.systems.length ? '' : '<span class="pill">' + esc(e.sysLabel) + '</span>') + '</div>';
      }
      h += block(t('Temel işlev'), fmtBook(e.role)) + block(t('Bağlantılar'), fmtBook(e.links)) + block(t('Kitapta nerelerde geçti'), fmtBook(e.where));
      if (e.clinic) h += block(t('Kitapta ilişkilendirilen klinik tablolar'), esc(e.clinic));
      h += '<blockquote>' + fmtBook(e.note) + '</blockquote></section>';
    });
    return h;
  }
  // bölge kartında: bölgenin kaynağı ya da başlıca hedefi olduğu nörotransmitter sistemleri
  function ntChipsHTML(id) {
    const src = NT_LIST.filter((n) => n.core.includes(id)), tgt = NT_LIST.filter((n) => n.related.includes(id));
    if (!src.length && !tgt.length) return '';
    const chip = (n) => '<button class="chip" data-setkind="nt" data-setid="' + n.id + '"><span class="dot" style="background:' + n.color + '"></span>' + esc(n.name) + '</button>';
    return t('<h5 class="sub">Nörotransmitter yolakları</h5><div class="chips">') +
      src.map((n) => chip(n).replace('</button>', t(' <small>kaynak</small></button>'))).join('') + tgt.map(chip).join('') + '</div>';
  }
  function bookPathsHTML(id) {
    if (!DV) return '';
    const ps = DV.pathways.filter((p) => p.core.includes(id) || p.related.includes(id));
    if (!ps.length) return '';
    return t('<h5 class="sub">Kitaptaki yolaklar</h5><div class="plist">') + ps.map((p) =>
      '<button class="prow" data-path="' + p.id + '"><b>' + esc(p.name) + '</b><span>' + esc(p.chain) + '</span></button>').join('') + '</div>';
  }
  // Bilgi panelinin üst satırı: geri tuşu ve seçim yolu (ör. Sistemler › SEEKING › mPFC)
  function crumbsHTML() {
    const sep = '<span class="sep">›</span>';
    const c = (attr, label) => '<button ' + attr + '>' + esc(label) + '</button>';
    let parts = [];
    if (state.set) {
      parts = [c('data-crumb="' + LTAB_OF[state.set.kind] + '"', SET_TAB[state.set.kind])];
    } else if (state.selected) {
      const d = DATA[state.selected];
      if (state.trail) {
        const tr = state.trail, name = setName(tr.kind, setSrc(tr.kind, tr.id));
        parts = [c('data-crumb="' + LTAB_OF[tr.kind] + '"', SET_TAB[tr.kind]),
          c('data-setkind="' + tr.kind + '" data-setid="' + esc(tr.id) + '"', name)];
      } else {
        parts = [c('data-crumb="regions"', t('Bölgeler')), c('data-crumb="grp:' + d.group + '"', GROUP_NAME[d.group])];
      }
      if (d.parent) parts.push(c('data-go="' + parentOf(d) + '"', DATA[parentOf(d)].short));
    }
    const back = history.length ? t('<button class="back" data-back title="Geri">←</button>') : '';
    return t('<nav class="crumbs" aria-label="Seçim yolu">') + back + parts.join(sep) + '</nav>';
  }
  // Kart rayı: kartın sekmeleri (bölge, ağ, nörotransmitter) ve tanı mercekleri masaüstünde kartın solunda simgeli dikey bir rayda
  // (soldaki bölüm rayının dili); telefonda yatay kayan çipler. Kart her yeniden çizildiğinde simge ve ad eklenir.
  const TAB_ICO = {
    etki: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4M5.2 5.2l2.8 2.8M16 16l2.8 2.8M5.2 18.8 8 16M16 8l2.8-2.8"/>',
    yanetki: '<path d="M12 3.5 21 19.5H3z"/><path d="M12 10v4.5M12 17.2v.3"/>',
    cocuk: '<circle cx="12" cy="7" r="3"/><path d="M6.5 20.5c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6"/>',
    etkilesim: '<circle cx="8.5" cy="12" r="5"/><circle cx="15.5" cy="12" r="5"/>',
    functions: '<path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3z"/>',
    divan: '<path d="M12 6.5c-2-1.6-4.6-2-8-1.8v13c3.4-.2 6 .2 8 1.8 2-1.6 4.6-2 8-1.8v-13c-3.4-.2-6 .2-8 1.8z"/><path d="M12 6.5v13"/>',
    anatomy: '<circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3"/>',
    tests: '<rect x="5" y="4" width="14" height="17" rx="2.5"/><path d="M9 4V3h6v1"/><path d="m8.5 11 1.5 1.5 3-3M8.5 16.5h7"/>',
    development: '<path d="M12 21v-8"/><path d="M12 13c0-4 2.8-6.5 7-6.5 0 4-2.8 6.5-7 6.5z"/><path d="M12 15.5c0-3-2.2-5-5.5-5 0 3 2.2 5 5.5 5z"/>',
    clinical: '<path d="M6 3.5V9a5 5 0 0 0 10 0V3.5"/><path d="M11 14v1.5a4.5 4.5 0 0 0 9 0V13"/><circle cx="20" cy="11" r="2"/>',
    treatment: '<rect x="3.5" y="8.5" width="17" height="7" rx="3.5" transform="rotate(-35 12 12)"/><path d="m9.4 8.1 5.2 7.8"/>',
    lesion: '<path d="M12 3.5 2.8 19.5h18.4L12 3.5z"/><path d="M12 10v4.5M12 17.2h.01"/>',
    links: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.2 1.2"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.2-1.2"/>',
    devre: '<path d="M6 7h9a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h9"/><circle cx="4.8" cy="7" r="1.6"/><circle cx="19.2" cy="19" r="1.6"/>',
    bulgular: '<path d="M4 20h16"/><rect x="5.5" y="11" width="3" height="7" rx="1"/><rect x="10.5" y="6" width="3" height="12" rx="1"/><rect x="15.5" y="13" width="3" height="5" rx="1"/>',
    belirtiler: '<circle cx="12" cy="7.5" r="3"/><path d="M5.5 20.5a6.5 6.5 0 0 1 13 0"/><path d="M18.5 4.5l1.5-1.5M20 8h2"/>',
    tedavi: '<rect x="3.5" y="8.5" width="17" height="7" rx="3.5" transform="rotate(-35 12 12)"/><path d="m9.4 8.1 5.2 7.8"/>',
    genel: '<path d="M11.6 5.2A3.2 3.2 0 0 0 5.9 7a3.3 3.3 0 0 0-1.6 5.5 3.2 3.2 0 0 0 2.6 4.9 3 3 0 0 0 4.7 1.4"/><path d="M12.4 5.2A3.2 3.2 0 0 1 18.1 7a3.3 3.3 0 0 1 1.6 5.5 3.2 3.2 0 0 1-2.6 4.9 3 3 0 0 1-4.7 1.4"/><path d="M12 5.4v13.4"/>',
    kitapta: '<path d="M12 6.5c-2-1.6-4.6-2-8-1.8v13c3.4-.2 6 .2 8 1.8 2-1.6 4.6-2 8-1.8v-13c-3.4-.2-6 .2-8 1.8z"/><path d="M12 6.5v13"/>' };
  // dar rayda kısa ad (yazı alanı 56 px); İngilizcede Interactions, Development ve Connections sığmıyordu (2026-10-23: "Developme", "Connection")
  const RAIL_SHORT = Object.assign({ tests: t('Pruebas'), cocuk: t('Niño') },
    { etkilesim: 'Interac.', development: 'Desarrollo', links: 'Conex.' });
  function decorateCard() {
    const tabs = infoEl.querySelector(':scope > .tabs');
    infoEl.classList.toggle('has-rail', !!tabs);
    document.body.classList.toggle('card-rail', !!tabs);      // kartı küçültme ve gizleme düğmeleri rayın tepesine geçer
    if (!tabs) return;
    tabs.setAttribute('aria-orientation', 'vertical');
    tabs.querySelectorAll('.tab').forEach((b) => {
      if (b.querySelector('.ico')) return;
      const k = b.dataset.tab || b.dataset.lens, label = b.textContent.trim(), short = RAIL_SHORT[k] || label;
      b.innerHTML = (TAB_ICO[k] ? '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + TAB_ICO[k] + '</svg>' : '') +
        '<span class="tl" data-full="' + esc(label) + '" data-short="' + esc(short) + '">' + esc(label) + '</span>';
      b.title = label;
    });
    cardTabsShow(tabs);
  }
  // telefonda kartın sekme şeridi yatay kayar: seçili sekme görünür alana gelir (kart her sekmede yeniden çizilir, şerit başa dönerdi),
  // kenar devamı varsa solar (dizin sekmeleri gibi; kullanıcı 2026-10-19: "ray gibi kaydırılmalı")
  function cardTabsEdges(row) {
    const max = row.scrollWidth - row.clientWidth;
    row.classList.toggle('fl', max > 2 && row.scrollLeft > 2);
    row.classList.toggle('fr', max > 2 && row.scrollLeft < max - 2);
  }
  function cardTabsShow(row) {
    if (!row.dataset.kay) { row.dataset.kay = '1'; row.addEventListener('scroll', () => cardTabsEdges(row), { passive: true }); }
    if (!compactMQ.matches) { row.classList.remove('fl', 'fr'); return; }
    const cur = row.querySelector('[aria-selected="true"]');           // ölçüm anında yerleşimi zorlar; kare beklemeye gerek yok
    if (cur && row.clientWidth) {
      const rr = row.getBoundingClientRect(), cr = cur.getBoundingClientRect();
      if (cr.left < rr.left + 36) row.scrollLeft -= rr.left + 36 - cr.left;
      else if (cr.right > rr.right - 36) row.scrollLeft += cr.right - (rr.right - 36);
    }
    cardTabsEdges(row);
  }
  new MutationObserver(decorateCard).observe(infoEl, { childList: true });
  // telefonda kart kaydırılınca üstteki boşluk düz şerit olur (atlas.html → #info.scrolled::before)
  infoEl.addEventListener('scroll', () => infoEl.classList.toggle('scrolled', infoEl.scrollTop > 1), { passive: true });
  let infoKey = '';
  function renderInfo() {
    const k = state.set ? state.set.kind + ':' + state.set.id : state.selected || '';
    // yeni seçimde panel başa döner, aynı seçimde yer korunur; telefonda tam açık çekmece yarıya iner (yeni yapı beyinde görünsün)
    if (k !== infoKey) { infoKey = k; infoEl.scrollTop = 0; if (SHEET.state === 'full') setSheet('half'); }
    if (state.set) { renderSet(); return; }
    const id = state.selected;
    if (!id) { renderIntro(); return; }
    const d = DATA[id];
    const tabs = TABS.filter(([k]) => (k === 'divan' ? hasBook(id) : (d[k] || []).length > 0));   // boş sekmeler gizli
    if (!tabs.some(([k]) => k === state.tab)) state.tab = tabs[0][0];
    const nav = navList(id), i = nav.indexOf(id);
    const prev = nav[(i - 1 + nav.length) % nav.length], next = nav[(i + 1) % nav.length];
    const par = d.parent && DATA[d.parent];
    infoEl.style.setProperty('--rc', d.color);
    infoEl.innerHTML =
      '<div class="head">' + crumbsHTML() + '<div class="eyebrow"><span class="dot" style="background:' + d.color + '"></span>' +
      esc(GROUP_NAME[d.group]) + ' · ' + esc(d.short) + (par ? t(' · alt yapı') : d.deep ? t(' · derin yapı') : '') + '</div>' +
      '<h2>' + esc(d.name) + '</h2><div class="latin">' + esc(d.latin) + '</div>' +
      '<p class="summary">' + esc(d.summary) + '</p>' + qactHTML(id) + '</div>' +
      '<div class="tabs" role="tablist">' + tabs.map(([k, n]) =>
        '<button class="tab' + (k === 'divan' ? ' book' : '') + '" role="tab" data-tab="' + k + '" aria-selected="' + (k === state.tab) + '">' + n + '</button>').join('') + '</div>' +
      '<div id="body" role="tabpanel"></div>' +
      '<div class="foot"><button class="ghostbtn" data-go="' + prev + '">← ' + esc(DATA[prev].short) + '</button>' +
      t('<button class="ghostbtn" data-close>Tümünü göster</button>') +
      '<button class="ghostbtn" data-go="' + next + '">' + esc(DATA[next].short) + ' →</button></div>';
    renderTab();
    updatePill();
  }
  // Alt yapılar ya da ebeveyn ve kardeşler: sekme içeriğinin altında (kullanıcı 2026-10-11: değişen bilgi üstte, anatomik ilişkiler altta;
  // talamus ve beyincikte bu liste başlıkta 240 px yer tutup sekme içeriğini kartın yarısının altına itiyordu)
  function familyHTML(id) {
    const d = DATA[id], kids = CHILDREN[id], pid = d.parent && parentOf(d), par = pid && DATA[pid];
    return kids
      ? t('<div class="family"><h5>Alt yapılar</h5><div class="chips">') + regionChips(kids) + '</div></div>'
      : par ? '<div class="family"><h5>' + esc(par.name) + t(' içinde</h5><div class="chips">') +
        regionChips([pid].concat(CHILDREN[pid].filter((k) => k !== id))) + '</div></div>' : '';
  }
  // Bölge kartında hızlı eylemler: yapıyı önden göster (kamera ona döner), MR'da kesitini aç, ayrıntılı yazı sayfası
  const QA_ICO = {
    face: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3"/></svg>',
    mri: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 12h16M12 4v16"/></svg>',
    page: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20V3.5z"/><path d="M14 3.5V8h4M9.5 12h5M9.5 15.5h5"/></svg>' };
  function qactHTML(id) {
    return '<div class="qact">' +
      '<button class="qa" data-qa="face" data-tip="Kamerayı bu yapıya çevirir">' + QA_ICO.face + t('Göster') + '</button>' +
      '<button class="qa" data-qa="mri" data-tip="Şablon MR\'ında bu yapının kesitini açar" data-key="M">' + QA_ICO.mri + t('MR\'da göster') + '</button>' +
      '<a class="qa" data-qa="page" href="bolge/' + id + '.html" data-tip="Bu yapının ayrıntılı yazı sayfası">' + QA_ICO.page + t('Yazı') + '</a></div>';
  }
  // Yapıyı göster: kamera yapının kameraya yakın yanına döner; derin yapıda yandan, korteks ve beyincikte yüzeyine dik
  function faceRegion(id) {
    const r = R[id];
    if (!r) return;
    const d = pingCenter(id).clone().sub(BRAIN_CENTER);
    if (r.kind === 'deep' || d.length() < 0.15) d.set(d.x >= 0 ? 1 : -1, 0.22, 0.12);
    d.normalize(); d.y += 0.12;
    stopSpin();
    if (state.hideLeft && d.x > 0) { state.hideLeft = false; applyState(); }
    flyTo(d, r.kind === 'deep' ? focusDistance([id], d) : narrowMQ.matches ? fitFor(d) : fitDistance() * 0.82);
    document.querySelectorAll('[data-view]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
  }
  function renderTab() {
    const taniCard = !!state.set && state.set.kind === 'tani';
    const d = state.set && (state.set.kind === 'net' || state.set.kind === 'nt' || taniCard) ? setSrc(state.set.kind, state.set.id) : DATA[state.selected];
    const body = $('#body');
    if (!d || !body) return;
    let html;
    if (taniCard) html = lensHTML(d);
    else if (state.tab === 'divan') html = divanHTML(state.selected);
    else {
      const items = d[state.tab] || [];
      html = TAB_LEAD[state.tab] ? '<p style="margin:0 0 12px;color:var(--fg-3);font-size:12.5px">' + TAB_LEAD[state.tab] + '</p>' : '';
      html += '<ul>' + items.map((s) => '<li>' + fmt(s) + '</li>').join('') + '</ul>';
      if (state.tab === 'links' && state.set) html += state.set.kind === 'net' ? '<p class="note">' + esc(window.NEURO_NETWORKS_NOTE || '') + '</p>' : '';
      else if (state.tab === 'links') {
        html += ntChipsHTML(state.selected) + bookPathsHTML(state.selected) +
          t('<p class="note">Bu bağlantılar bir sonraki aşamada 3B yolaklar ve nörotransmitter sistemleri olarak modele eklenecek.</p>');
      }
      const mn = window.MODEL_NOTES && MODEL_NOTES[state.selected];
      if (state.tab === 'anatomy' && mn) html += t('<p class="note"><b>Modelde:</b> ') + fmt(mn) + '</p>';
    }
    if (!state.set && state.selected) html += familyHTML(state.selected);   // her sekmenin sonunda
    else if (state.set && (state.set.kind === 'net' || state.set.kind === 'nt')) html += netAnatHTML(state.set.kind, d);
    body.innerHTML = html;
  }
  // Sekme içeriğinin başı (kaydırma konumu olarak). Masaüstünde sekmeler sağdaki rayda yapışık durduğu için ölçü #body'nin üstüdür;
  // telefonda yatay sekme şeridi içeriğin üstüne yapıştığından onun yüksekliği kadar yukarısı. (Eski hesap .tabs'ın offsetTop'una
  // bakıyordu; rayda yapışık şerit kaydırmayla birlikte indiği için hiç tetiklenmiyordu: kullanıcı 2026-10-15.)
  const stickyOver = () => { const tb = infoEl.querySelector(':scope > .tabs'); return tb && getComputedStyle(tb).flexDirection === 'row' ? tb.offsetHeight : 0; };
  const infoTop = (el) => el.getBoundingClientRect().top - infoEl.getBoundingClientRect().top + infoEl.scrollTop;
  function bodyStart() { const b = $('#body'); return b ? Math.max(0, infoTop(b) - stickyOver() - 8) : 0; }
  infoEl.addEventListener('click', (e) => {
    const il = e.target.closest('[data-lens],[data-iyan]');
    if (il && state.set && state.set.kind === 'ilac') {            // ilaç kartı: mercek ya da yan etki seçimi
      const s = ilacState(ILAC[state.set.id]);
      if (il.dataset.lens) s.lens = il.dataset.lens; else s.yan = il.dataset.iyan;
      applyColors(); applyState(); renderInfo(); ilacCamera();
      const card = il.dataset.iyan && infoEl.querySelector('.tcard.on');
      if (card) infoEl.scrollTop = Math.max(0, infoTop(card) - stickyOver() - 8);
      else infoEl.scrollTop = Math.min(infoEl.scrollTop, bodyStart());
      return;
    }
    const tl = e.target.closest('[data-lens],[data-tmodel],[data-tgrup],[data-tbelirti],[data-ttedavi]');
    if (tl && state.set && state.set.kind === 'tani') {
      const s = taniState(TANI[state.set.id]), ds = tl.dataset;
      if (ds.lens) s.lens = ds.lens; else if (ds.tmodel) s.model = ds.tmodel; else if (ds.tgrup) s.grup = ds.tgrup;
      else if (ds.tbelirti) s.belirti = ds.tbelirti; else s.tedavi = ds.ttedavi;
      applyColors(); applyState(); renderInfo();
      // okuma yeri: yeni mercekte merceğin başı, yeni seçilen kartta kartın başı (telefonda yapışık sekme şeridinin hemen altında)
      const card = (ds.tbelirti || ds.ttedavi) && infoEl.querySelector('.tcard.on');
      if (card) infoEl.scrollTop = Math.max(0, infoTop(card) - stickyOver() - 8);
      else if (ds.lens) infoEl.scrollTop = Math.min(infoEl.scrollTop, bodyStart());
      if (!ds.tmodel) flyAfterScatter(taniCamera);
      if (!ds.lens && narrowMQ.matches && SHEET.state === 'full') setSheet('half');   // telefonda seçenek seçilince sonuç 3B'de görünsün (yarım çekmece)
      return;
    }
    const qa = e.target.closest('[data-qa]');
    if (qa && state.selected) {
      if (qa.dataset.qa === 'face') { faceRegion(state.selected); if (narrowMQ.matches && SHEET.state !== 'peek') setSheet('peek'); }
      else if (qa.dataset.qa === 'mri') { if (mriIsOpen) mriFollowSelection(); else openMRI(true); }
      return;           // yazı sayfası bağlantısı kendi yoluyla açılır
    }
    const rb = e.target.closest('[data-route],[data-route-x]');
    if (rb) {          // canlı yol kartında yol adı: o yol seçilir (yeniden basınca bırakılır)
      if (rb.dataset.routeX !== undefined) pickRoute(null);
      else {
        const fs = flowSel(), ris = rb.dataset.route.split(',').map(Number);
        if (fs) pickRoute({ ris: new Set(ris), lead: null, key: ris.slice().sort((a, b) => a - b).join(','), fkey: fs.key });
        if (narrowMQ.matches && SHEET.state === 'full') setSheet('half');   // telefonda yol 3B'de görünsün
      }
      return;
    }
    const t = e.target.closest('[data-tab],[data-go],[data-close],[data-sys],[data-path],[data-region],[data-setid],[data-back],[data-crumb],[data-vw],[data-ltabgo],[data-help],[data-nt]');
    if (!t) return;
    if (t.dataset.back !== undefined) { goBack(); return; }
    if (t.dataset.vw) { setView(t.dataset.vw); return; }
    if (t.dataset.nt !== undefined) { setNT(!state.ntOn); return; }
    if (t.dataset.help !== undefined) { toggleHelp(true); return; }
    if (t.dataset.ltabgo) { openSection(t.dataset.ltabgo, { keep: true }); return; }
    if (t.dataset.crumb) {           // iz: sekmeye ya da lob grubuna git
      const [k, v] = t.dataset.crumb.split(':');
      if (k === 'grp') openGroups.add(v);
      openSection(k === 'grp' ? 'regions' : k, { keep: true });
      if (k === 'grp') { const el = listEl.querySelector('[data-g="' + v + '"]'); if (el) listEl.scrollTop = el.offsetTop - listEl.offsetTop - 4; }
      return;
    }
    if (t.dataset.tab) {
      state.tab = t.dataset.tab;
      infoEl.querySelectorAll('.tab').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.tab === state.tab)));
      renderTab();
      infoEl.scrollTop = Math.min(infoEl.scrollTop, bodyStart());   // yeni sekme başından okunur
      const row = infoEl.querySelector(':scope > .tabs'); if (row) cardTabsShow(row);   // telefonda seçili sekme şeritte görünür kalsın
    } else if (t.dataset.go) select(t.dataset.go, { fly: true });
    else if (t.dataset.sys) selectSet('sys', t.dataset.sys);
    else if (t.dataset.path) selectSet('path', t.dataset.path);
    else if (t.dataset.region) select(t.dataset.region, { fly: true, trail: state.set ? { kind: state.set.kind, id: state.set.id } : state.trail });
    else if (t.dataset.setid) selectSet(t.dataset.setkind, t.dataset.setid);
    else select(null);
  });

  /* ---------- araç çubuğu, menüler ve dil-tema ---------- */
  // Görünüm ve Katmanlar açılır menüleri (telefonda Daha da); dışarı tıklayınca kapanır. Katmanlar düğmesi açık seçenek sayısını gösterir.
  const menus = [['viewMenu', 'viewPop'], ['layerMenu', 'layerPop'], ['moreMenu', 'morePop']].map(([b, p]) => ({ btn: $('#' + b), pop: $('#' + p) }));
  function closeMenus(except) {
    menus.forEach((m) => { if (m !== except) { m.pop.hidden = true; m.btn.setAttribute('aria-expanded', 'false'); } });
  }
  menus.forEach((m) => m.btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = m.pop.hidden;
    closeMenus(m);
    if (open && compactMQ.matches) toggleMenu(false);
    m.pop.hidden = !open;
    m.btn.setAttribute('aria-expanded', String(open));
  }));
  document.addEventListener('click', (e) => { if (!e.target.closest('.tgroup')) closeMenus(); });
  $('#viewPop').addEventListener('click', (e) => { if (e.target.closest('[data-view],[data-act]')) closeMenus(); });
  // menü içindeki kısa yollar (telefonda Görünüm menüsünde Başa dön ve Döndür, Daha menüsünde Ara)
  document.querySelectorAll('[data-act]').forEach((b) => b.addEventListener('click', () => {
    closeMenus();
    if (b.dataset.act === 'home') goHome();
    else if (b.dataset.act === 'spin') $('#spin').click();
    else if (b.dataset.act === 'search') openPalette();
  }));
  function updateLayerCount() {
    const n = document.querySelectorAll('#layerPop [aria-pressed="true"]').length, el = $('#layerMenu .cnt');
    el.hidden = !n; el.textContent = n;
  }
  new MutationObserver(updateLayerCount).observe($('#layerPop'), { attributes: true, subtree: true, attributeFilter: ['aria-pressed'] });
  // dil ve tema kutusu: masaüstünde rayın altında, telefonda Daha menüsünde
  function placePrefs() {
    const p = $('#prefs'), box = compactMQ.matches ? $('#morePrefs') : $('#railPrefs');
    if (p && box && p.parentNode !== box) box.appendChild(p);
    // korteks seçenekleri: masaüstünde alt çubuğun içinde, telefonda üstte ayrı şerit (çubuğun bulanık zemini sabit konumu bozar)
    const d = $('#deepopt'), home = compactMQ.matches ? document.body : dockEl;
    if (d.parentNode !== home) { if (home === dockEl) dockEl.insertBefore(d, $('#moreGroup')); else document.body.appendChild(d); }
    setPanels({});
    if (!compactMQ.matches) toggleMenu(false);
  }
  placePrefs();
  try { compactMQ.addEventListener('change', placePrefs); } catch (e) { compactMQ.addListener(placePrefs); }
  try { dockedMQ.addEventListener('change', () => setPanels({})); } catch (e) { dockedMQ.addListener(() => setPanels({})); }

  /* ---------- telefonda bilgi kartı: alttan çekmece ---------- */
  // Üç kademe: kısa (başlık ve iki satır özet), yarım (beyin üstte görünür), tam. Tutamak sürüklenir (hızla fırlatılınca bir sonraki
  // kademeye geçer) ya da dokunulur (kısa ↔ yarım). İçerik başındayken aşağı kaydırmak bir kademe indirir, kısa kartta yukarı kaydırmak açar.
  const SHEET = { state: 'peek' };
  function sheetDims() {
    const top = 52 + (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sat')) || 0);
    const avail = Math.max(240, dockEl.getBoundingClientRect().top - 8 - top);
    return { half: Math.round(Math.max(220, avail * 0.52)), full: Math.round(avail), peek: 132 };
  }
  function setSheet(st) {
    if (st === true) st = 'half';
    if (!st) st = 'peek';
    SHEET.state = st;
    const d = sheetDims();
    document.documentElement.style.setProperty('--sheet-h', (st === 'full' ? d.full : d.half) + 'px');
    document.body.classList.toggle('sheet-open', st !== 'peek');
    document.body.classList.toggle('sheet-full', st === 'full');
    if (st === 'peek') infoEl.scrollTop = 0;
    else { const row = infoEl.querySelector(':scope > .tabs'); if (row) cardTabsShow(row); }   // şerit görünür olunca kenar solması ve seçili sekme
    sheetGrip.setAttribute('aria-label', st === 'peek' ? t('Kartı aç') : t('Kartı küçült'));
    if (built && narrowMQ.matches) { smoothLayout = true; layout(); smoothLayout = false; }
  }
  // çekmece yüksekliği geçişle değişir: geçiş bitince beyin kalan alanın ortasına yerleşir
  infoEl.addEventListener('transitionend', (e) => { if (e.target === infoEl && narrowMQ.matches) { smoothLayout = true; layout(); smoothLayout = false; } });
  sheetGrip.addEventListener('pointerdown', (e) => {
    if (!narrowMQ.matches || e.button) return;
    e.preventDefault();
    try { sheetGrip.setPointerCapture(e.pointerId); } catch (err) { /* işaretçi yakalanamadı */ }
    const d = sheetDims(), y0 = e.clientY, h0 = infoEl.getBoundingClientRect().height;
    let moved = false, lastY = y0, lastT = performance.now(), vel = 0;
    const move = (ev) => {
      if (!moved && Math.abs(ev.clientY - y0) < 5) return;
      if (!moved) { moved = true; document.body.classList.add('sheet-drag', 'sheet-open'); }
      const h = Math.min(d.full, Math.max(96, h0 - (ev.clientY - y0)));
      document.documentElement.style.setProperty('--sheet-h', h + 'px');
      const now = performance.now();
      vel = 0.6 * vel + 0.4 * ((ev.clientY - lastY) / Math.max(1, now - lastT));
      lastY = ev.clientY; lastT = now;
    };
    const up = () => {
      sheetGrip.removeEventListener('pointermove', move); sheetGrip.removeEventListener('pointerup', up); sheetGrip.removeEventListener('pointercancel', up);
      document.body.classList.remove('sheet-drag');
      if (!moved) { setSheet(SHEET.state === 'peek' ? 'half' : SHEET.state === 'full' ? 'half' : 'peek'); return; }
      const h = infoEl.getBoundingClientRect().height, stops = [['peek', d.peek], ['half', d.half], ['full', d.full]];
      let target;
      if (vel < -0.5) target = h < d.half - 10 ? 'half' : 'full';
      else if (vel > 0.5) target = h > d.half + 10 ? 'half' : 'peek';
      else target = stops.reduce((a, b) => (Math.abs(b[1] - h) < Math.abs(a[1] - h) ? b : a))[0];
      setSheet(target);
    };
    sheetGrip.addEventListener('pointermove', move);
    sheetGrip.addEventListener('pointerup', up);
    sheetGrip.addEventListener('pointercancel', up);
  });
  // kısa kartta başlığa dokununca yarıya açılır
  infoEl.addEventListener('click', (e) => {
    if (!narrowMQ.matches || SHEET.state !== 'peek') return;
    if (e.target.closest('.head') && !e.target.closest('button, a, input, label')) { e.preventDefault(); e.stopImmediatePropagation(); setSheet('half'); }
  }, true);
  let sheetY = null;
  infoEl.addEventListener('touchstart', (e) => { sheetY = narrowMQ.matches ? e.touches[0].clientY : null; }, { passive: true });
  infoEl.addEventListener('touchend', (e) => {
    if (sheetY === null) return;
    const dy = e.changedTouches[0].clientY - sheetY;
    sheetY = null;
    if (SHEET.state === 'peek' && dy < -30) setSheet('half');
    else if (SHEET.state !== 'peek' && dy > 50 && infoEl.scrollTop <= 0) setSheet(SHEET.state === 'full' ? 'half' : 'peek');
  }, { passive: true });
  window.addEventListener('resize', () => { if (narrowMQ.matches && SHEET.state !== 'peek') setSheet(SHEET.state); });

  /* ---------- görünüm ve katman düğmeleri ---------- */
  document.querySelectorAll('[data-view]').forEach((b) => b.addEventListener('click', () => setView(b.dataset.view)));
  $('#home').addEventListener('click', goHome);
  $('#zoomopen').addEventListener('click', () => {
    state.zoomOpen = !state.zoomOpen;
    try { localStorage.setItem('atlas.acilim', state.zoomOpen ? '1' : '0'); } catch (e) { /* depolama kapalı */ }
    applyState();
  });
  // Telefon: iki parmakla yakınlaştırma yerine "Aç / Topla" düğmesi (kullanıcı 2026-10-20: "telefona tuş ekleyebiliriz"). Her basış
  // yakınlaşınca açmanın bir kademesine gider: önce korteks söner; derin yapı seçiliyse ikinci basışta öteki yapılar uzaklaşır,
  // çekirdekler aralanır. Son kademede düğme "Topla" olur ve bütün beyne döner. Kip kapalıysa ilk basış onu açar.
  const depthBtn = $('#depthBtn');
  function depthNext() {
    const sel = state.selected && R[state.selected], steps = sel && sel.kind === 'deep' ? [OPEN_SPAN, OPEN_SPAN2] : [OPEN_SPAN];
    if (!state.zoomOpen) return steps[0];
    const s = Math.log(fitDistance() / nav.position.distanceTo(controls.target));
    return steps.find((x) => x > s + 0.05);
  }
  function flyNav(s) {      // yalnız gezinme uzaklığı değişir; yön aynı kalır
    const from = new THREE.Spherical().setFromVector3(nav.position.clone().sub(controls.target));
    const to = from.clone();
    to.radius = fitDistance() * Math.exp(-s);
    tween = { t0: performance.now(), dur: 900, from, to, dTheta: 0, fromTarget: controls.target.clone() };
  }
  depthBtn.addEventListener('click', () => {
    const next = depthNext();
    if (!state.zoomOpen) {
      state.zoomOpen = true;
      try { localStorage.setItem('atlas.acilim', '1'); } catch (e) { /* depolama kapalı */ }
      applyState();
    }
    flyNav(next === undefined ? 0 : next);
  });
  function updateDepthBtn() {
    const open = depthNext() !== undefined, key = open ? 'ac' : 'topla';
    if (depthBtn.dataset.s === key) return;
    depthBtn.dataset.s = key;
    depthBtn.querySelector('.lbl').textContent = open ? t('Aç') : t('Topla');
    depthBtn.setAttribute('aria-label', open ? t('Bir kademe aç: korteks söner, seçili derin yapıda çekirdekler aralanır') : t('Topla: bütün beyne dön'));
  }
  document.querySelectorAll('[data-cmode]').forEach((b) => b.addEventListener('click', () => {
    state.cortexMode = b.dataset.cmode;
    try { localStorage.setItem('atlas.korteks', state.cortexMode); } catch (e) { /* depolama kapalı */ }
    applyState();
  }));
  $('#hidedeep').addEventListener('click', () => {
    state.hideDeep = !state.hideDeep;
    if (state.hideDeep) state.xray = false;
    applyState();
  });
  $('#xray').addEventListener('click', () => {
    state.xray = !state.xray; state.selected = null; state.set = null;
    if (state.xray) state.hideDeep = false;
    applyColors(); applyState(); renderInfo(); buildList($('#q').value); setHash('');
  });
  $('#hemi').addEventListener('click', () => { state.hideLeft = !state.hideLeft; applyState(); });
  $('#tissue').addEventListener('click', () => { state.tissue = !state.tissue; applyColors(); applyState(); });
  $('#spin').addEventListener('click', () => {
    controls.autoRotate = !controls.autoRotate;
    $('#spin').setAttribute('aria-pressed', String(controls.autoRotate));
    document.querySelectorAll('[data-act="spin"]').forEach((b) => b.setAttribute('aria-pressed', String(controls.autoRotate)));
  });
  // Tanıtım sayfası: kendi adresini oturuma yazar (index.html); yazmadıysa göreli "./"
  function goLanding() {
    let u = null;
    try { u = sessionStorage.getItem('atlas.ana'); } catch (e) { /* depolama kapalı */ }
    location.href = u || './';
  }
  document.querySelectorAll('[data-home]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); goLanding(); }));
  // Başlığın solundaki düğme: bir önceki sayfa varsa oraya döner (gezinme.js), yoksa tanıtım sayfasına
  const backBtn = $('.tohome'), prevPage = window.GEZINME && GEZINME.onceki();
  if (backBtn && prevPage) {
    backBtn.textContent = '← ' + t('Geri');
    backBtn.dataset.tip = 'Önceki sayfaya döner';
    backBtn.addEventListener('click', (e) => {
      e.preventDefault(); e.stopImmediatePropagation();
      let u = null;
      try { u = sessionStorage.getItem('atlas.ana'); } catch (err) { /* depolama kapalı */ }
      GEZINME.geri(u || './');
    }, true);
  }

  /* ---------- ipucu balonları ---------- */
  // data-tip taşıyan düğmelerde fareyle kısa bekleyince işi ve kısayolu (data-key) gösterilir; metinler Türkçe anahtar, t() ile çevrilir
  const ttEl = $('#tt');
  let ttTimer = 0, ttFor = null;
  function hideTip() { clearTimeout(ttTimer); ttTimer = 0; ttFor = null; ttEl.hidden = true; }
  function showTip(el) {
    const key = el.dataset.key;
    ttEl.innerHTML = '<span>' + esc(t(el.dataset.tip)) + '</span>' + (key ? '<kbd>' + esc(t(key)) + '</kbd>' : '');
    ttEl.hidden = false;
    const r = el.getBoundingClientRect(), w = ttEl.offsetWidth, h = ttEl.offsetHeight, W = window.innerWidth, H = window.innerHeight;
    let x, y;
    if (el.closest('#rail')) { x = r.right + 10; y = r.top + r.height / 2 - h / 2; }
    else if (el.closest('#toolbar')) { x = r.left + r.width / 2 - w / 2; y = r.top - h - 10; }
    else if (el === infoGrip) { x = r.left - w - 8; y = Math.min(Math.max(8, (hoverY || r.top) - h / 2), H - h - 8); }
    else if (r.top < 90) { x = r.left + r.width / 2 - w / 2; y = r.bottom + 10; }
    else { x = r.left - w - 10; y = r.top + r.height / 2 - h / 2; }
    ttEl.style.left = Math.min(Math.max(8, x), W - w - 8) + 'px';
    ttEl.style.top = Math.min(Math.max(8, y), H - h - 8) + 'px';
  }
  let hoverY = 0;
  document.addEventListener('pointerover', (e) => {
    if (e.pointerType !== 'mouse') return;
    const el = e.target.closest('[data-tip]');
    if (el === ttFor) return;
    hideTip();
    if (!el) return;
    ttFor = el; hoverY = e.clientY;
    ttTimer = setTimeout(() => showTip(el), 420);
  });
  document.addEventListener('pointerdown', hideTip, true);
  window.addEventListener('blur', hideTip);

  /* ---------- kısayollar ve kullanım: klavye haritası ---------- */
  // Tek kaynak: tuş, iş, grup. Klavye haritası, gruplu liste ve komut paletindeki kısayol harfleri buradan.
  const KEYMAP = [
    ['K', t('Ara ve komut paleti'), 'gez'], ['/', t('Ara (K ile aynı)'), 'gez'], ['←', t('Önceki bölge, sistem, ağ ya da tanı'), 'gez'],
    ['→', t('Sonraki bölge, sistem, ağ ya da tanı'), 'gez'], ['⌫', t('Önceki seçime dön'), 'gez'], ['Esc', t('Kapat, seçimi kaldır'), 'gez'],
    ['B', t('Bölgeler'), 'diz'], ['S', t('Sistemler'), 'diz'], ['Y', t('Yolaklar'), 'diz'], ['N', t('Nörotransmitterler'), 'diz'], ['A', t('Ağlar'), 'diz'],
    ['T', t('Tanılar'), 'diz'], ['I', t('İlaçlar'), 'diz'],
    ['R', t('Başa dön'), 'gor'], ['1', t('Sol yan'), 'gor'], ['2', t('Sağ yan'), 'gor'], ['3', t('İç yüz'), 'gor'], ['4', t('Üst'), 'gor'],
    ['5', t('Alt'), 'gor'], ['6', t('Ön'), 'gor'], ['7', t('Arka'), 'gor'], ['␣', t('Döndür ya da durdur'), 'gor'], ['P', t('Odak: panelleri gizle'), 'gor'],
    ['D', t('Derin yapılar'), 'kat'], ['M', t('MR kesit'), 'kat'], ['C', t('Nörotransmitter renkleri (canlı yolakta)'), 'kat'],
    ['↑', t('MR kesitini ilerlet'), 'kat'], ['↓', t('MR kesitini geri al'), 'kat'],
    ['G', t('Gündüz ya da gece'), 'gen'], ['L', t('Türkçe ya da English'), 'gen'], ['H', t('Ana sayfa'), 'gen'], ['?', t('Bu pencere'), 'gen']];
  const KGROUPS = { gez: [t('Gezinme'), '#ae8cff'], diz: [t('Dizin'), '#5aa0ff'], gor: [t('Görünüm'), '#36c2a8'], kat: [t('Katmanlar ve MR'), '#e8a93a'],
    gen: [t('Genel'), '#e07aa8'] };
  const KEYOF = Object.fromEntries(KEYMAP.map(([k, d, g]) => [k, { d, g }]));
  let kbBuilt = false;
  function buildKeymap() {
    if (kbBuilt) return;
    kbBuilt = true;
    const rows = (LOCALE === 'tr' ? ['1234567890', 'QWERTYUIOPĞÜ', 'ASDFGHJKLŞİ', 'ZXCVBNMÖÇ'] : ['1234567890', 'QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'])
      .map((r) => Array.from(r)).concat([['Esc', '?', '/', '␣', '←', '↑', '↓', '→', '⌫']]);
    const key = (k) => {
      const m = KEYOF[k], g = m && KGROUPS[m.g];
      return '<span class="kk' + (m ? ' on' : '') + (k === '␣' ? ' space' : '') + '" data-k="' + esc(k) + '"' + (g ? ' style="--kc:' + g[1] + '"' : '') + '>' +
        (k === '␣' ? t('Boşluk') : esc(k)) + '</span>';
    };
    $('#kbmap').innerHTML = rows.map((r) => '<div class="kbrow">' + r.map(key).join('') + '</div>').join('') + '<p class="kbinfo" id="kbinfo">&nbsp;</p>';
    // gruplu liste: görünümler tek satır (1–7)
    $('#kbleg').innerHTML = Object.keys(KGROUPS).map((g) => {
      const items = KEYMAP.filter((x) => x[2] === g && !/^[2-7]$/.test(x[0])).map(([k, d]) => k === '1'
        ? '<div data-k="1 2 3 4 5 6 7"><dt><kbd>1</kbd>–<kbd>7</kbd></dt><dd>' + esc(t('Sol yan, sağ yan, iç yüz, üst, alt, ön, arka')) + '</dd></div>'
        : '<div data-k="' + esc(k) + '"><dt><kbd>' + esc(k === '␣' ? t('Boşluk') : k) + '</kbd></dt><dd>' + esc(d) + '</dd></div>').join('');
      return '<div style="--kc:' + KGROUPS[g][1] + '"><h4><i></i>' + esc(KGROUPS[g][0]) + '</h4><dl>' + items + '</dl></div>';
    }).join('');
    const info = $('#kbinfo');
    const light = (ks, on) => {
      ks.forEach((k) => {
        document.querySelectorAll('#kbmap .kk[data-k="' + CSS.escape(k) + '"]').forEach((el) => el.classList.toggle('lit', on));
        document.querySelectorAll('#kbleg [data-k]').forEach((el) => { if (el.dataset.k.split(' ').includes(k)) el.classList.toggle('lit', on); });
      });
    };
    $('#kbmap').addEventListener('pointerover', (e) => {
      const el = e.target.closest('.kk.on');
      document.querySelectorAll('.lit').forEach((x) => x.classList.remove('lit'));
      if (!el) { info.innerHTML = '&nbsp;'; return; }
      const k = el.dataset.k;
      info.innerHTML = '<b>' + esc(k === '␣' ? t('Boşluk') : k) + '</b> · ' + esc(KEYOF[k].d);
      light([k], true);
    });
    $('#kbleg').addEventListener('pointerover', (e) => {
      const el = e.target.closest('[data-k]');
      document.querySelectorAll('.lit').forEach((x) => x.classList.remove('lit'));
      if (el) light(el.dataset.k.split(' '), true);
    });
  }
  const helpEl = $('#help');
  const toggleHelp = (on) => {
    if (on) { closePalette(); closeMenus(); buildKeymap(); }
    helpEl.hidden = !on;
    if (on) $('#helpClose').focus();
  };
  $('#helpbtn').addEventListener('click', () => toggleHelp(helpEl.hidden));
  $('#moreHelp').addEventListener('click', () => { closeMenus(); toggleHelp(true); });
  $('#helpClose').addEventListener('click', () => toggleHelp(false));
  // pencerenin dışına tıklayınca kapanır (düğmeyle açılış tıklaması sayılmaz)
  document.addEventListener('pointerdown', (e) => {
    if (!helpEl.hidden && !helpEl.contains(e.target) && !e.target.closest('#helpbtn, #moreHelp, [data-help]')) { e.stopPropagation(); toggleHelp(false); }
  }, true);

  /* ---------- komut paleti ---------- */
  // Bölge, sistem, yolak, ağ, tanı, görünüm ve komutlar tek listede. Yazarken Türkçe harf farkları ve büyük-küçük harf önemsenmez.
  // ↑/↓ ile gezilen yapı (ya da bir kümenin çekirdek bölgeleri) beyinde nabız atan halkayla yerinde işaretlenir; Enter açar.
  const ckEl = $('#cmdk'), ckq = $('#ckq'), cklist = $('#cklist');
  const foldCh = (ch) => { const c = ch.toLocaleLowerCase(LOCALE).normalize('NFD').replace(/[̀-ͯ]/g, ''); return c === 'ı' ? 'i' : c.charAt(0) || ch; };
  const fold = (s) => Array.from(String(s || '')).map(foldCh).join('');
  const SVG = (d) => '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>';
  const CKI = { cmd: SVG('<path d="m5 7 4 5-4 5M11 17h8"/>'), view: SVG('<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
    layer: SVG('<path d="M12 3 21 8l-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/>'), mri: SVG('<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 12h16M12 4v16"/>') };
  const KIND = { region: t('Bölge'), sys: t('Sistem'), nt: t('Nörotransmitter'), path: t('Yolak'), net: t('Ağ'), tani: t('Tanı'), ilac: t('İlaç'), view: t('Görünüm'), cmd: t('Komut') };
  let ckAll = null, ckRes = [], ckSel = 0, ckReturn = null;
  let recent = [];
  try { recent = JSON.parse(localStorage.getItem('atlas.son') || '[]').filter((x) => x && x.k); } catch (e) { recent = []; }
  const ntSources = (id) => { const def = FD && FD.SETS['nt:' + id]; return def ? [...new Set(def.routes.map((rt) => rt.from).filter((x) => DATA[x]))] : []; };
  function ckItems() {
    if (ckAll) return ckAll;
    const it = [];
    const add = (o) => { o.fn = fold(o.label); o.fs = fold(o.short || ''); o.fk = fold((o.keys || []).join(' ') + ' ' + (o.sub || '')); it.push(o); };
    Object.keys(DATA).forEach((id) => {
      const d = DATA[id], par = d.parent && DATA[d.parent];
      add({ k: 'region', id, label: d.name, short: d.short, color: d.color, boost: par ? 2 : 4,
        sub: GROUP_NAME[d.group] + ' · ' + d.short + (par ? ' · ' + par.name : d.deep ? t(' · derin yapı') : ''),
        keys: [d.latin, id, par ? par.name : ''], preview: [id], run: () => select(id, { fly: true }) });
    });
    if (DV) {
      DV.systems.forEach((x) => add({ k: 'sys', id: x.id, label: x.id, sub: x.feel, color: x.color, boost: 3, keys: [x.circuit, x.slug],
        preview: x.core, run: () => selectSet('sys', x.id) }));
      DV.pathways.forEach((x) => add({ k: 'path', id: x.id, label: x.name, sub: x.chain, color: DATA[x.core[0]].color, boost: 2,
        preview: x.core, run: () => selectSet('path', x.id) }));
    }
    NT_LIST.forEach((x) => add({ k: 'nt', id: x.id, label: x.name, short: x.short, sub: x.summary, color: x.color, boost: 3, keys: [x.eng],
      preview: ntSources(x.id), run: () => selectSet('nt', x.id) }));
    [NETS.all].concat(NET_LIST).forEach((x) => add({ k: 'net', id: x.id, label: x.name, short: x.short, sub: x.tr || x.summary, color: x.color, boost: 2,
      keys: [x.eng, x.summary], preview: [], run: () => selectSet('net', x.id) }));
    TANI_LIST.forEach((x) => add({ k: 'tani', id: x.id, label: x.name, short: x.short, sub: x.summary, color: x.color, boost: 3, keys: [x.eng],
      preview: x.core.filter((r) => DATA[r]), run: () => selectSet('tani', x.id) }));
    ILAC_LIST.forEach((x) => add({ k: 'ilac', id: x.id, label: x.name, sub: x.sinif + ' · ' + x.grup, color: x.color, boost: 3, keys: [x.grup, x.sinif],
      preview: x.etki.core.filter((r) => DATA[r]), run: () => selectSet('ilac', x.id) }));
    const VNAME = { lateralL: t('Sol yan'), lateralR: t('Sağ yan'), medial: t('İç yüz'), superior: t('Üst'), inferior: t('Alt'), anterior: t('Ön'), posterior: t('Arka') };
    KEY_VIEWS.forEach((v, n) => add({ k: 'view', id: v, label: t('Görünüm: ') + VNAME[v], icon: 'view', kbd: String(n + 1), boost: 1,
      keys: [t('yön bakış'), v], run: () => setView(v) }));
    const cmd = (label, o) => add(Object.assign({ k: 'cmd', label, icon: 'cmd', boost: 1 }, o));
    cmd(t('Başa dön'), { kbd: 'R', keys: [t('açılış sıfırla')], run: goHome });
    cmd(t('Döndür'), { kbd: '␣', on: () => controls.autoRotate, keys: [t('otomatik dönme')], run: () => $('#spin').click() });
    cmd(t('MR kesit'), { kbd: 'M', icon: 'mri', on: () => mriIsOpen, keys: ['mri t1 kesit aksiyel koronal sagittal'], run: () => openMRI(!mri.open) });
    cmd(t('MR: üçlü görünüm'), { icon: 'mri', on: () => mri.triple, keys: ['mri aksiyel koronal sagittal'], run: () => { if (!mri.open) openMRI(true); setTriple(!mri.triple); } });
    cmd(t('Derin yapılar'), { kbd: 'D', icon: 'layer', on: () => state.xray, keys: [t('saydam korteks çekirdekler')], run: () => $('#xray').click() });
    cmd(t('Derin yapıları gizle'), { icon: 'layer', on: () => !!state.hideDeep, run: () => $('#hidedeep').click() });
    cmd(t('Sol yarıküreyi gizle'), { icon: 'layer', on: () => state.hideLeft, keys: [t('iç yüz medial'), t('sol korteksi gizle')], run: () => $('#hemi').click() });
    cmd(t('Yakınlaşınca aç'), { icon: 'layer', on: () => state.zoomOpen, keys: [t('hologram katman')], run: () => $('#zoomopen').click() });
    cmd(t('Doku rengi'), { icon: 'layer', on: () => state.tissue, keys: [t('gerçek renk')], run: () => $('#tissue').click() });
    cmd(t('Nörotransmitter renkleri'), { kbd: 'C', icon: 'layer', on: () => state.ntOn, when: () => !!flowSel(), keys: ['nt kimya'], run: () => setNT(!state.ntOn) });
    cmd(t('Korteks: saçıl'), { icon: 'layer', on: () => state.cortexMode === 'sacil', run: () => $('[data-cmode="sacil"]').click() });
    cmd(t('Korteks: gizle'), { icon: 'layer', on: () => state.cortexMode === 'gizle', run: () => $('[data-cmode="gizle"]').click() });
    cmd(t('Korteks: hayalet'), { icon: 'layer', on: () => state.cortexMode === 'hayalet', run: () => $('[data-cmode="hayalet"]').click() });
    cmd(t('Odak: panelleri gizle'), { kbd: 'P', on: () => !panels.index && !panels.info, when: () => !compactMQ.matches, run: () => $('#panels').click() });
    cmd(t('Kartı kısa özete indir'), { on: () => !!panels.infoMini, when: () => !compactMQ.matches, run: () => setPanels({ infoMini: !panels.infoMini, info: true }) });
    cmd(t('Seçimi kaldır'), { kbd: 'Esc', when: () => !!(state.selected || state.set), run: () => select(null) });
    cmd(t('Önceki seçime dön'), { kbd: '⌫', when: () => history.length > 0, run: goBack });
    cmd(t('Gündüz ya da gece'), { kbd: 'G', keys: [t('tema karanlık aydınlık'), 'theme dark light'], run: () => window.I18N && window.I18N.setTheme(!window.I18N.isDark()) });
    cmd(t('Kısayollar ve kullanım'), { kbd: '?', keys: [t('yardım rehber klavye'), 'help keyboard'], run: () => toggleHelp(true) });
    cmd(t('Ana sayfa'), { kbd: 'H', keys: [t('tanıtım geri')], run: goLanding });
    ckAll = it;
    return it;
  }
  const SUGGEST = [['region', 'amygdala'], ['region', 'dlpfc'], ['sys', 'SEEKING'], ['nt', 'da'], ['net', 'dmn'], ['tani', 'okb']];
  function ckFind(k, id) { return ckItems().find((x) => x.k === k && x.id === id); }
  function ckScore(o, terms) {
    let s = 0;
    for (const term of terms) {
      let v;
      if (o.fn.startsWith(term)) v = 100;
      else if (o.fs && o.fs.startsWith(term)) v = 92;
      else if ((' ' + o.fn).includes(' ' + term) || (' ' + o.fn).includes('(' + term)) v = 78;
      else if (o.fn.includes(term)) v = 58;
      else if (o.fk.includes(term)) v = 30;
      else return -1;
      s += v;
    }
    return s + o.boost - o.fn.length * 0.04;
  }
  function ckMark(label, term) {
    if (!term) return esc(label);
    const i = fold(label).indexOf(term);
    if (i < 0) return esc(label);
    const a = Array.from(label);
    return esc(a.slice(0, i).join('')) + '<mark>' + esc(a.slice(i, i + term.length).join('')) + '</mark>' + esc(a.slice(i + term.length).join(''));
  }
  function ckRow(o, n, term) {
    const on = o.on ? o.on() : null;
    const ic = o.color ? '<i style="background:' + o.color + '"></i>' : CKI[o.icon] || CKI.cmd;
    return '<button class="cki" role="option" id="ck' + n + '" data-n="' + n + '" aria-selected="false"><span class="ci">' + ic + '</span>' +
      '<span class="cl"><b>' + ckMark(o.label, term) + '</b>' + (o.sub ? '<small>' + esc(o.sub) + '</small>' : '') + '</span>' +
      '<span class="cr">' + (on === null ? '' : '<span class="st">' + (on ? t('Açık') : t('Kapalı')) + '</span>') +
      (o.kbd ? '<kbd>' + esc(o.kbd === '␣' ? t('Boşluk') : o.kbd) + '</kbd>' : '') + esc(KIND[o.k]) + '</span></button>';
  }
  function ckRender() {
    const raw = ckq.value.trim(), q = fold(raw), terms = q.split(/\s+/).filter(Boolean);
    const usable = (o) => !o.when || o.when();
    let html = '';
    ckRes = [];
    if (!terms.length) {
      const groups = [];
      const rec = recent.map((r) => ckFind(r.k, r.id)).filter(Boolean).slice(0, 5);
      if (rec.length) groups.push([t('Son açılanlar'), rec]);
      groups.push([t('Başlamak için'), SUGGEST.map(([k, id]) => ckFind(k, id)).filter((o) => o && !rec.includes(o))]);
      groups.push([t('Komutlar'), ckItems().filter((o) => o.k === 'cmd' && usable(o) && ['R', 'M', 'D', '?', 'G'].includes(o.kbd))]);
      groups.forEach(([h, list]) => {
        if (!list.length) return;
        html += '<div class="ckh">' + esc(h) + '</div>';
        list.forEach((o) => { html += ckRow(o, ckRes.length, ''); ckRes.push(o); });
      });
    } else {
      ckRes = ckItems().filter(usable).map((o) => [o, ckScore(o, terms)]).filter((x) => x[1] >= 0)
        .sort((a, b) => b[1] - a[1]).slice(0, 40).map((x) => x[0]);
      html = ckRes.map((o, n) => ckRow(o, n, terms[0])).join('');
    }
    cklist.innerHTML = html || '<p class="ckempty">' + esc(t('Eşleşen sonuç yok. Bir bölge adı, kısaltma (ör. ACC), sistem ya da komut deneyin.')) + '</p>';
    ckSel = 0;
    ckHighlight(true);
  }
  function ckHighlight(scroll) {
    cklist.querySelectorAll('.cki').forEach((b) => b.setAttribute('aria-selected', String(+b.dataset.n === ckSel)));
    const el = $('#ck' + ckSel);
    ckq.setAttribute('aria-activedescendant', el ? el.id : '');
    if (el && scroll) el.scrollIntoView({ block: 'nearest' });
    const o = ckRes[ckSel];
    setPings(o && o.preview ? o.preview : [], o ? o.label : '');
  }
  function ckRun(o) {
    if (!o) return;
    closePalette(true);
    if (['region', 'sys', 'nt', 'path', 'net', 'tani'].includes(o.k)) {
      recent = [{ k: o.k, id: o.id }].concat(recent.filter((r) => !(r.k === o.k && r.id === o.id))).slice(0, 6);
      try { localStorage.setItem('atlas.son', JSON.stringify(recent)); } catch (e) { /* depolama kapalı */ }
    }
    o.run();
  }
  function openPalette() {
    if (!ckEl.hidden) { ckq.select(); return; }
    hideTip(); closeMenus(); toggleHelp(false);
    if (compactMQ.matches) toggleMenu(false);
    ckReturn = document.activeElement;
    ckEl.hidden = false;
    document.body.classList.add('ck-open');
    cmdbarEl.setAttribute('aria-expanded', 'true');
    ckq.value = '';
    ckRender();
    ckq.focus();
    paletteBottom = ckEl.querySelector('.ckbox').getBoundingClientRect().bottom;
    smoothLayout = true; layout(); smoothLayout = false;
  }
  function closePalette(running) {
    if (ckEl.hidden) return;
    ckEl.hidden = true;
    document.body.classList.remove('ck-open');
    cmdbarEl.setAttribute('aria-expanded', 'false');
    setPings([]);
    paletteBottom = 0;
    smoothLayout = true; layout(); smoothLayout = false;
    if (!running && ckReturn && ckReturn.focus) ckReturn.focus();
    else if (document.activeElement === ckq) ckq.blur();
  }
  cmdbarEl.addEventListener('click', openPalette);
  ckq.addEventListener('input', ckRender);
  ckq.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!ckRes.length) return;
      ckSel = (ckSel + (e.key === 'ArrowDown' ? 1 : -1) + ckRes.length) % ckRes.length;
      ckHighlight(true);
    } else if (e.key === 'Enter') { e.preventDefault(); ckRun(ckRes[ckSel]); }
    else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closePalette(); }
    else if (e.key === 'Tab') e.preventDefault();
  });
  cklist.addEventListener('pointermove', (e) => {
    const b = e.target.closest('.cki');
    if (b && +b.dataset.n !== ckSel) { ckSel = +b.dataset.n; ckHighlight(false); }
  });
  cklist.addEventListener('click', (e) => { const b = e.target.closest('.cki'); if (b) ckRun(ckRes[+b.dataset.n]); });
  ckEl.addEventListener('pointerdown', (e) => { if (e.target === ckEl) closePalette(); });

  /* ---------- işaret halkaları ---------- */
  // Palette gezilen yapı beyinde nabız atan halkayla gösterilir; iki yanlı yapıda kameraya yakın olan yan. Kümede en çok 8 çekirdek bölge.
  const pingsEl = $('#pings'), pv = new THREE.Vector3();
  let pingIds = [], pingEls = [], pingGlow = null;
  function setPings(ids, label) {
    if (pingGlow && R[pingGlow] && pingGlow !== state.hovered) R[pingGlow].hoverT = 0;
    pingGlow = null;
    pingIds = (ids || []).filter((id) => R[id] && R[id].meshes.length).slice(0, 8);
    pingsEl.innerHTML = pingIds.map((id, k) => '<div class="ping' + (k ? ' small' : '') + '" style="--pc:' + DATA[id].color + '"><i></i><i></i>' +
      (k === 0 ? '<span>' + esc(pingIds.length > 1 ? label : DATA[id].name) + '</span>' : '') + '</div>').join('');
    pingEls = Array.from(pingsEl.children);
    if (pingIds.length === 1) { pingGlow = pingIds[0]; R[pingGlow].hoverT = 1; }
    updatePings();
  }
  function pingCenter(id) {
    const a = partCenter(id, 'L'), b = partCenter(id, 'R');
    if (!a || !b) return a || b || BRAIN_CENTER;
    return a.distanceToSquared(camera.position) <= b.distanceToSquared(camera.position) ? a : b;
  }
  function updatePings() {
    if (!pingIds.length) return;
    const W = window.innerWidth, H = window.innerHeight;
    pingIds.forEach((id, k) => {
      pv.copy(pingCenter(id)).project(camera);
      pingEls[k].style.transform = 'translate(' + ((pv.x + 1) / 2 * W).toFixed(1) + 'px,' + ((1 - pv.y) / 2 * H).toFixed(1) + 'px)';
    });
  }

  /* ---------- klavye kısayolları ---------- */
  // Yazı alanında, Alt ile ya da odaktaki düğmede boşluk/Enter ile çalışmaz. Ctrl/⌘+K her yerde arama açar.
  const KEY_VIEWS = ['lateralL', 'lateralR', 'medial', 'superior', 'inferior', 'anterior', 'posterior'];
  function shortcut(e) {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (k >= '1' && k <= '7') { setView(KEY_VIEWS[+k - 1]); return true; }
    switch (k) {
      case 'k': case '/': openPalette(); return true;
      case 'b': openSection('regions'); return true;
      case 's': if (!DV) return false; openSection('sys'); return true;
      case 'y': if (!DV) return false; openSection('path'); return true;
      case 'n': if (!NT_LIST.length) return false; openSection('nt'); return true;
      case 'i': case 'ı': case 'i̇': if (!ILAC_LIST.length) return false; openSection('ilac'); return true;
      case 'a': openSection('net'); return true;
      case 't': if (!TANI_LIST.length) return false; openSection('tani'); return true;
      case 'r': goHome(); return true;
      case 'd': $('#xray').click(); return true;
      case 'm': openMRI(!mri.open); return true;
      case 'c': if (!flowSel()) return false; setNT(!state.ntOn); return true;
      case 'p': if (compactMQ.matches) return false; $('#panels').click(); return true;
      case ' ': $('#spin').click(); return true;
      case '?': toggleHelp(helpEl.hidden); return true;
      case 'h': goLanding(); return true;
      case 'g': if (window.I18N) window.I18N.setTheme(!window.I18N.isDark()); return true;
      case 'Backspace': goBack(); return true;
      default: return false;
    }
  }
  window.addEventListener('keydown', (e) => {
    const tg = e.target instanceof Element ? e.target : document.body;
    if ((e.ctrlKey || e.metaKey) && !e.altKey && e.key.toLowerCase() === 'k') { e.preventDefault(); if (ckEl.hidden) openPalette(); else closePalette(); return; }
    if (tg.matches('input, textarea, select')) {
      if (e.key === 'Escape') tg.blur();
      return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === 'Escape') {
      if (!helpEl.hidden) toggleHelp(false);
      else if (menus.some((m) => !m.pop.hidden)) closeMenus();
      else if (compactMQ.matches && indexEl.classList.contains('open')) toggleMenu(false);
      else if (!compactMQ.matches && panels.index && drawerOverlay() && !mriIsOpen) setPanels({ index: false });
      else if (rsel.pick) pickRoute(null);
      else select(null);
      return;
    }
    if (!helpEl.hidden) return;
    if (mriIsOpen && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      e.preventDefault();
      mri.idx[mri.axis] += e.key === 'ArrowUp' ? 1 : -1;
      updateMRI();
      return;
    }
    if ((e.key === ' ' || e.key === 'Enter') && tg.closest('button, a, summary')) return;
    if (shortcut(e)) { e.preventDefault(); return; }
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const step = e.key === 'ArrowRight' ? 1 : -1;
    if (state.selected) {
      const nav = navList(state.selected), i = nav.indexOf(state.selected);
      select(nav[(i + step + nav.length) % nav.length], { fly: true });
    } else if (state.set) {
      const list = state.set.kind === 'net' ? ['all'].concat(NET_LIST.map((x) => x.id)) : state.set.kind === 'nt' ? NT_LIST.map((x) => x.id)
        : state.set.kind === 'tani' ? TANI_LIST.map((x) => x.id) : state.set.kind === 'ilac' ? ILAC_LIST.map((x) => x.id)
        : (state.set.kind === 'sys' ? DV.systems : DV.pathways).map((x) => x.id);
      const i = list.indexOf(state.set.id);
      selectSet(state.set.kind, list[(i + step + list.length) % list.length]);
    }
  });

  /* ---------- tanıtım turu (2026-10-13) ---------- */
  // Kullanıcı: "atlas açılınca çıksın, bir daha gösterme düğmesi de olsun". Her açılışta gösterilir; "Bir daha gösterme" →
  // localStorage atlas.rehber = 'kapali'. Kısayol penceresindeki düğme turu yeniden başlatır. Adımlar düzene göre farklı öğeleri gösterir.
  const tourEl = $('#tour'), tourRing = tourEl.querySelector('.tring'), tourCard = tourEl.querySelector('.tcard'), tourBlock = tourEl.querySelector('.tblock');
  let tourI = 0, tourList = [];
  const visible = (el) => { if (!el) return false; const r = el.getBoundingClientRect(); return r.width > 4 && r.height > 4 && getComputedStyle(el).visibility !== 'hidden'; };
  function tourSteps() {
    const touch = matchMedia('(hover: none) and (pointer: coarse)').matches, small = compactMQ.matches;
    return [
      { h: t('Atlasa hoş geldiniz'), p: (ILAC_LIST.length ? t('104 beyin yapısı, Panksepp’in duygu sistemleri, canlı nörotransmitter yolakları, beyin ağları, on tanı ve on üç ilaç. Bir dakikalık turla nasıl kullanılacağını gösterelim.')
        : t('104 beyin yapısı, Panksepp’in duygu sistemleri, canlı nörotransmitter yolakları, beyin ağları ve on tanı. Bir dakikalık turla nasıl kullanılacağını gösterelim.')) },
      { el: 'brain', h: t('Beyni çevirin, bir yapı seçin'), p: (touch
        ? t('Tek parmakla sürükleyin: beyin döner. İki parmakla sıkıştırın: yaklaşır. Bir yapıya dokunun: seçilir. Boş alana iki kez dokunun: seçim kalkar.')
        : t('Sürükleyin: beyin döner. Tekerlek: yaklaşır. Bir yapıya tıklayın: seçilir, ötekiler saydamlaşır. Boş alana çift tıklayın: seçim kalkar.')) + ' ' + t('Halkanın içinde hemen deneyebilirsiniz.') },
      { el: small ? '#dockIndex' : '#rail', h: t('Bölümler'), p: (ILAC_LIST.length ? t('Bölgeler, Sistemler, Yolaklar, Nörotransmitterler, Ağlar, Tanılar ve İlaçlar buradan açılır. Bir duygu sistemi, tanı ya da ilaç seçince ilgili yapılar ve yolaklar beyinde canlanır.')
        : t('Bölgeler, Sistemler, Yolaklar, Ağlar ve Tanılar buradan açılır. Bir duygu sistemi ya da tanı seçince ilgili yapılar ve yolaklar beyinde canlanır.')) },
      { el: '#cmdbar', h: t('Arama'), p: small ? t('Büyüteçle her şeyi arayın: yapı, sistem, yolak, ağ, tanı, ilaç ya da komut.') : t('Her şeyi buradan arayın: yapı, sistem, yolak, ağ, tanı, ilaç ya da komut. Kısayolu K.') },
      { el: '#info', h: t('Bilgi kartı'), p: small ? t('Seçtiğiniz yapının kartı burada açılır; tutamağından sürükleyerek yarıya ya da tama açın.') : t('Seçtiğiniz yapının kartı burada açılır. Sağdaki raydan anatomi, işlevler, klinik, tedavi ve kaynaklara geçin.') },
      { el: '#toolbar', h: t('Görünüm ve katmanlar'), p: (small ? t('Alttaki çubukta dizin, hazır yönler, katmanlar ve MR kesit görünümü var.') : t('Hazır yönler, katmanlar (derin yapılar, nörotransmitter renkleri) ve döndürme burada; MR kesit görünümü soldaki rayda.')) +
        (touch ? '' : ' ' + t('Bütün kısayollar için ? tuşuna basın.')) },
    ];
  }
  function tourTarget(st) {
    if (!st.el) return null;
    if (st.el === 'brain') {                 // beynin ekrandaki yeri: merkezin ve bir yan noktasının izdüşümü (görüntü kaydırması dahil)
      const c = canvas.getBoundingClientRect(), toPx = (v) => [c.left + (v.x + 1) / 2 * c.width, c.top + (1 - v.y) / 2 * c.height];
      camera.updateMatrixWorld(true);
      const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
      let [x, y] = toPx(BRAIN_CENTER.clone().project(camera)), [x2] = toPx(BRAIN_CENTER.clone().addScaledVector(right, 1.0).project(camera));
      let d = Math.max(140, Math.min(Math.abs(x2 - x) * 2, c.height * 0.8));
      if (!(x > c.left && x < c.right && y > c.top && y < c.bottom) || !isFinite(d)) {   // kamera henüz yerleşmediyse tuvalin ortası
        x = c.left + c.width / 2; y = c.top + c.height / 2; d = Math.min(c.width, c.height) * 0.45;
      }
      return { left: x - d / 2, top: y - d / 2, width: d, height: d, round: true };
    }
    const el = document.querySelector(st.el);
    if (!visible(el)) return null;
    const r = el.getBoundingClientRect();
    return { left: r.left - 6, top: r.top - 6, width: r.width + 12, height: r.height + 12 };
  }
  function tourShow(i) {
    tourI = i;
    const st = tourList[i], last = i === tourList.length - 1, box = tourTarget(st);
    tourCard.innerHTML = '<button class="tx" type="button" aria-label="' + esc(t('Kapat')) + '">×</button>' +
      '<div class="tstep">' + esc(t('Tanıtım')) + ' · ' + (i + 1) + '/' + tourList.length + '</div>' +
      '<h4 id="tourTitle">' + esc(st.h) + '</h4><p>' + esc(st.p) + '</p>' +
      '<div class="tbtns"><button class="tnever" type="button">' + esc(t('Bir daha gösterme')) + '</button><span class="sp"></span>' +
      (i > 0 ? '<button class="ghostbtn tback" type="button">' + esc(t('Geri')) + '</button>' : '') +
      '<button class="tnext" type="button">' + esc(i === 0 ? t('Turu başlat') : last ? t('Bitir') : t('İleri')) + '</button></div>' +
      '<div class="tdots">' + tourList.map((_, k) => '<i class="' + (k === i ? 'on' : '') + '"></i>').join('') + '</div>';
    const vw = innerWidth, vh = innerHeight, cw = tourCard.offsetWidth, ch = tourCard.offsetHeight, m = 12;
    let x = (vw - cw) / 2, y = (vh - ch) / 2;
    if (box) {
      tourRing.classList.remove('none');
      Object.assign(tourRing.style, { left: box.left + 'px', top: box.top + 'px', width: box.width + 'px', height: box.height + 'px', borderRadius: box.round ? '50%' : '16px' });
      // beyin adımında halkanın içi tıklamaya açık: kullanıcı söyleneni hemen deneyebilsin (kullanıcı 2026-10-13)
      if (box.round) {
        const r = box.width / 2, cx = box.left + r, cy = box.top + r;
        tourBlock.style.clipPath = `path(evenodd, 'M0 0H${vw}V${vh}H0Z M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z')`;
      } else tourBlock.style.clipPath = '';
      const below = box.top + box.height + m, above = box.top - ch - m, right = box.left + box.width + m, left = box.left - cw - m;
      if (box.round) {                         // halkanın yanı, yer yoksa altı: kart deliği kapatmasın
        const cy = box.top + box.height / 2 - ch / 2;
        if (right + cw <= vw - m) { x = right; y = cy; }
        else if (left >= m) { x = left; y = cy; }
        else if (below + ch <= vh - m) { y = below; x = box.left + box.width / 2 - cw / 2; }
        else { y = vh - ch - m; x = (vw - cw) / 2; }
      }
      else if (right + cw <= vw - m && box.height > vh * 0.5) { x = right; y = Math.max(m, Math.min(vh - ch - m, box.top + 20)); }
      else if (left >= m && box.height > vh * 0.5) { x = left; y = Math.max(m, Math.min(vh - ch - m, box.top + 20)); }
      else if (below + ch <= vh - m) { y = below; x = box.left + box.width / 2 - cw / 2; }
      else if (above >= m) { y = above; x = box.left + box.width / 2 - cw / 2; }
    } else {
      tourRing.classList.add('none');
      tourRing.removeAttribute('style');
      tourBlock.style.clipPath = '';
    }
    tourCard.style.left = Math.max(m, Math.min(vw - cw - m, x)) + 'px';
    tourCard.style.top = Math.max(m, Math.min(vh - ch - m, y)) + 'px';
    tourCard.querySelector('.tnext').focus();
  }
  function tourClose(never) {
    tourEl.hidden = true;
    if (never) { try { localStorage.setItem('atlas.rehber', 'kapali'); } catch (e) { /* depolama kapalı */ } }
  }
  function tourStart() {
    closePalette(); closeMenus(); toggleHelp(false);
    tourList = tourSteps().filter((st) => !st.el || tourTarget(st));
    tourEl.hidden = false;
    tourShow(0);
  }
  tourCard.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.classList.contains('tnext')) { if (tourI < tourList.length - 1) tourShow(tourI + 1); else tourClose(false); }
    else if (b.classList.contains('tback')) tourShow(tourI - 1);
    else if (b.classList.contains('tnever')) tourClose(true);
    else if (b.classList.contains('tx')) tourClose(false);
  });
  window.addEventListener('keydown', (e) => {          // tur açıkken klavye yalnız turu yönetir
    if (tourEl.hidden) return;
    e.stopImmediatePropagation();
    if (e.key === 'Escape') tourClose(false);
    else if (e.key === 'ArrowRight' || e.key === 'Enter') { e.preventDefault(); if (tourI < tourList.length - 1) tourShow(tourI + 1); else tourClose(false); }
    else if (e.key === 'ArrowLeft' && tourI > 0) tourShow(tourI - 1);
  }, true);
  window.addEventListener('resize', () => { if (!tourEl.hidden) tourShow(tourI); });
  $('#tourStart').addEventListener('click', tourStart);
  function firstTip() {
    if (window.__kare) return;               // ekran görüntüsü kipinde (?kare=elle) gösterilmez
    showNotice(() => {
      let off = false;
      try { off = localStorage.getItem('atlas.rehber') === 'kapali'; } catch (e) { /* depolama kapalı */ }
      if (!off) tourStart();
    });
  }
  // Bilgilendirme paneli (kullanıcı 2026-10-16: "tanıtımdan önce en başta bir bilgilendirme paneli"): her oturumda bir kez, "Anladım" ile kapanır
  let noticeEl = null, noticeDone = null;
  function showNotice(then) {
    let seen = false;
    try { seen = sessionStorage.getItem('atlas.bilgi') === 'ok'; } catch (e) { /* depolama kapalı */ }
    if (seen) { then(); return; }
    noticeDone = then;
    if (!noticeEl) {
      noticeEl = document.createElement('div');
      noticeEl.id = 'notice';
      noticeEl.setAttribute('role', 'dialog');
      noticeEl.setAttribute('aria-modal', 'true');
      noticeEl.setAttribute('aria-labelledby', 'noticeTitle');
      noticeEl.innerHTML = '<div class="ncard"><p class="tstep">' + esc(t('Bilgilendirme')) + '</p><h4 id="noticeTitle">' + esc(t('Eğitim için hazırlandı')) + '</h4>' +
        '<p>' + esc(t('Bu atlas tıp eğitimi ve genel bilgilendirme amaçlıdır; tanı, tedavi ya da ilaç önerisi değildir. Kendinizin ya da bir yakınınızın sağlığıyla ilgili kararlar için hekime başvurun.')) + '</p>' +
        '<p>' + esc(t('İçerik yayımlanmış kaynaklara dayanır; kanıt düzeyi A, B, C rozetleriyle gösterilir. Bilimsel bilgi ve ilaç onayları zamanla değişebilir; atlas kişiye özgü bir değerlendirme yapmaz, ilaç bölümünde doz yer almaz.')) + '</p>' +
        '<p><a href="yasal.html">' + esc(t('Tıbbi uyarı ve kullanım koşulları')) + '</a></p>' +
        '<div class="tbtns"><span class="sp"></span><button class="btn" id="noticeOk">' + esc(t('Anladım')) + '</button></div></div>';
      document.body.appendChild(noticeEl);
      noticeEl.querySelector('#noticeOk').addEventListener('click', closeNotice);
    }
    noticeEl.hidden = false;
    noticeEl.querySelector('#noticeOk').focus();
  }
  function closeNotice() {
    if (!noticeEl || noticeEl.hidden) return;
    noticeEl.hidden = true;
    try { sessionStorage.setItem('atlas.bilgi', 'ok'); } catch (e) { /* depolama kapalı */ }
    const f = noticeDone; noticeDone = null;
    if (f) f();
  }
  window.addEventListener('keydown', (e) => {          // panel açıkken klavye yalnız paneli yönetir
    if (!noticeEl || noticeEl.hidden) return;
    e.stopImmediatePropagation();
    if (e.key === 'Enter' || e.key === 'Escape') { e.preventDefault(); closeNotice(); }
  }, true);

  /* ---------- MR kesit görünümü ---------- */
  // Şablonun T1 kesitleri ve bölge etiketleri (assets/mri.*). Tekli görünümde seçilen yön, üçlü görünümde aksiyel,
  // koronal ve sagittal birlikte ve artı imleciyle bağlı. Kaydırıcı, fare tekerleği ya da ↑/↓ etkin yönün kesitini
  // ilerletir. 3B'de etkin yönün kesit düzlemi MR görüntüsüyle gösterilir ve model düzlemin bir yanından kesilir.
  // Kesit ekrana büyütülerek çizilir: görüntü kübik, bölge sınırları alt-voksel düzeyinde, ince kontur ile.
  const mriEl = $('#mri'), mriSlider = $('#mriSlider'), mriHover = $('#mriHover');
  // dokunmatik ekranda "üzerine gelin" yerine dokunma ipucu
  const mriHint = () => t(matchMedia('(hover: none) and (pointer: coarse)').matches ? 'Bir bölgeye dokunun; dokununca seçilir' : 'Bir bölgenin üzerine gelin; tıklayınca seçilir');
  const cells = Array.from(document.querySelectorAll('.mcell[data-cell]')).map((el) => ({
    el, canvas: el.querySelector('canvas'), axis: 'ax', rect: null, cache: null }));
  const mri = { open: false, ready: false, loading: null, axis: 'ax', triple: false, idx: { ax: 0, cor: 0, sag: 0 },
    labels: true, show3d: true, flip: false, contrast: 't1' };
  const ORIENT = { ax: [t('ÖN'), t('ARKA'), t('SAĞ'), t('SOL')], cor: [t('ÜST'), t('ALT'), t('SAĞ'), t('SOL')], sag: [t('ÜST'), t('ALT'), t('ÖN'), t('ARKA')] };   // üst, alt, sol, sağ
  const AXIS_LETTER = { ax: 'z', cor: 'y', sag: 'x' };
  const K_WEB = 2 / 176;      // MNI mm → web: X = −x·K, Y = (z − 15)·K, Z = (y + 16)·K
  const mniToWeb = (m) => new THREE.Vector3(-m[0] * K_WEB, (m[2] - 15) * K_WEB, (m[1] + 16) * K_WEB);
  const clipPlane = new THREE.Plane();
  let sliceMesh = null, sliceTex = null, clipOn = false, refineTimer = 0;
  const rgbOf = {};
  const hexRgb = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
  const mmText = (ax, mm) => AXIS_LETTER[ax] + ' = ' + (mm > 0 ? '+' : '') + mm + ' mm' +
    (ax === 'sag' ? (mm > 0 ? t(' · sol') : mm < 0 ? t(' · sağ') : t(' · orta hat')) : '');
  const regionName = (id) => (id ? (DATA[id] ? DATA[id].name : MRI.nameOf(id) && t(MRI.nameOf(id))) : null);

  async function openMRI(on) {
    mri.open = on;
    mriIsOpen = on;
    document.body.classList.toggle('mri-open', on);
    mriEl.hidden = !on;
    $('#mribtn').setAttribute('aria-pressed', String(on));
    $('#dockMri').setAttribute('aria-pressed', String(on));
    if (on && compactMQ.matches) { toggleMenu(false); closeMenus(); }
    updateMriCard();
    setPanels({});                 // dizin yerine MR (masaüstü), telefonda kart yerine MR
    if (on && !mri.ready) {
      mriHover.textContent = t('MR verisi yükleniyor…');
      try {
        mri.loading = mri.loading || MRI.load('assets/');
        await mri.loading;
        mri.ready = true;
      } catch (e) {
        mriHover.textContent = t('MR verisi yüklenemedi (') + e.message + ').';
        return;
      }
      mri.idx = { ax: MRI.mni2idx('ax', 8), cor: MRI.mni2idx('cor', -18), sag: MRI.mni2idx('sag', 24) };
      mriHover.textContent = mriHint();
    }
    smoothLayout = true;
    layout();
    smoothLayout = false;
    updateMRI();
    if (on && state.selected) mriFollowSelection();      // açılınca kesit seçili yapıya gider
  }

  function setTriple(on) {
    mri.triple = on;
    document.body.classList.toggle('mri-triple', on);
    cells.forEach((c, n) => { c.el.hidden = !on && n > 0; });
    $('.mcell.minfo').hidden = !on;
    $('#mriTriple').setAttribute('aria-pressed', String(on));
    smoothLayout = true;
    layout();
    smoothLayout = false;
    updateMRI();
  }

  function litIds() {
    const set = activeSet(), s = new Set(), fam = familyOf(state.selected);
    if (state.selected) s.add(state.selected);
    if (fam) { s.add(fam); (CHILDREN[fam] || []).forEach((k) => s.add(k)); }
    if (set) [set.core, set.related, set.flow].forEach((x) => x.forEach((k) => { s.add(k); (CHILDREN[k] || []).forEach((c) => s.add(c)); }));   // etiket hacminde vokseller alt yapıda
    return s;
  }

  // büyütülmüş kesitten ekran ve 3B doku görüntüsü: gri görüntü, bölge dolgusu, kontur; doku: beyin dışı saydam
  function composite(s, f, quick, lit) {
    const r = MRI.render(s, f, quick), W = r.W, H = r.H, any = lit.size > 0;
    const disp = new ImageData(W, H), tex = new ImageData(W, H), d = disp.data, t = tex.data;
    const fillA = (id) => (any ? (lit.has(id) ? 0.5 : 0.08) : 0.28), edgeA = (id) => (any ? (lit.has(id) ? 1 : 0.3) : 0.8);
    const edgeW = 1.8 / r.f;          // kontur genişliği: sınırdan yaklaşık bir doku pikseli (ağırlık farkı, iki etiket için 2w − 1)
    for (let V = 0, o = 0; V < H; V++) for (let U = 0; U < W; U++, o++) {
      const g = r.img[o], v = r.lab[o], q = o * 4;
      let R = g, G = g, B = g;
      const id = MRI.idOf(v);
      if (mri.labels && id && DATA[id]) {
        const c = rgbOf[id] || (rgbOf[id] = hexRgb(DATA[id].color));
        let e;
        if (r.mg) {      // kenar yumuşatmalı kontur: sınıra (iki etiketin ağırlıklarının eşitlendiği çizgiye) uzaklıkla söner
          const x = Math.min(1, r.mg[o] / (255 * edgeW));
          e = 1 - x * x * (3 - 2 * x);
        } else {         // hızlı kip: komşu pikselin etiketi farklıysa kenar
          const right = U + 1 < W ? r.lab[o + 1] & 127 : v & 127, down = V + 1 < H ? r.lab[o + W] & 127 : v & 127;
          const left = U > 0 ? r.lab[o - 1] & 127 : v & 127, up = V > 0 ? r.lab[o - W] & 127 : v & 127;
          e = right !== (v & 127) || down !== (v & 127) || left !== (v & 127) || up !== (v & 127) ? 1 : 0;
        }
        const a = fillA(id) + (edgeA(id) - fillA(id)) * e;
        R = g + (c[0] - g) * a; G = g + (c[1] - g) * a; B = g + (c[2] - g) * a;
      }
      d[q] = R; d[q + 1] = G; d[q + 2] = B; d[q + 3] = 255;
      t[q] = R; t[q + 1] = G; t[q + 2] = B; t[q + 3] = r.msk ? r.msk[o] : v & 128 ? 255 : 0;
    }
    const dc = document.createElement('canvas'), tc = document.createElement('canvas');
    dc.width = tc.width = W; dc.height = tc.height = H;
    dc.getContext('2d').putImageData(disp, 0, 0);
    tc.getContext('2d').putImageData(tex, 0, 0);
    return { disp: dc, tex: tc };
  }

  function renderCell(c, quick, lit, litKey) {
    const ax = c.axis, idx = mri.idx[ax];
    const box = c.el.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    const cw = Math.max(1, Math.round(box.width * dpr)), ch = Math.max(1, Math.round(box.height * dpr));
    if (c.canvas.width !== cw || c.canvas.height !== ch) { c.canvas.width = cw; c.canvas.height = ch; }
    const [w, h] = MRI.size(ax), scale = Math.min(cw / w, ch / h);
    const f = quick ? 1 : Math.max(1, Math.min(3, Math.ceil(scale - 0.01)));   // en çok 3 kat; kalanı tarayıcı yumuşak büyütür
    const key = [ax, idx, mri.contrast, mri.labels, litKey, f, quick].join('|');
    if (!c.cache || c.cache.key !== key) {
      const s = MRI.extract(ax, idx);
      c.cache = { key, s, comp: composite(s, f, quick, lit) };
    }
    // 3B kesit düzlemi yakından bakıldığında da düzgün görünsün: etkin yön için 4 kat çözünürlüklü ayrı doku
    if (!quick && mri.show3d && ax === mri.axis && !c.cache.tex3 && f < 4) c.cache.tex3 = composite(c.cache.s, 4, false, lit).tex;
    const dw = w * scale, dh = h * scale, x0 = (cw - dw) / 2, y0 = (ch - dh) / 2;
    c.rect = { x0: x0 / dpr, y0: y0 / dpr, s: scale / dpr };
    const g = c.canvas.getContext('2d');
    g.fillStyle = '#000';
    g.fillRect(0, 0, cw, ch);
    g.imageSmoothingEnabled = true;
    g.imageSmoothingQuality = 'high';
    g.drawImage(c.cache.comp.disp, x0, y0, dw, dh);
    if (mri.triple) {        // artı imleci: öteki iki kesitin bu kesitteki yeri
      const [px, py] = MRI.vox2pix(ax, [mri.idx.sag, mri.idx.cor, mri.idx.ax]);
      g.strokeStyle = ax === mri.axis ? 'rgba(174,140,255,0.85)' : 'rgba(174,140,255,0.55)';
      g.lineWidth = dpr;
      g.beginPath();
      g.moveTo(x0 + (px + 0.5) * scale, y0); g.lineTo(x0 + (px + 0.5) * scale, y0 + dh);
      g.moveTo(x0, y0 + (py + 0.5) * scale); g.lineTo(x0 + dw, y0 + (py + 0.5) * scale);
      g.stroke();
    }
    c.el.classList.toggle('active', mri.triple && ax === mri.axis);
    const mo = c.el.querySelectorAll('.mo');
    ['t', 'b', 'l', 'r'].forEach((side, q) => { mo[q].textContent = ORIENT[ax][q]; });
  }

  function updateMRI(quick) {
    if (!mri.open || !mri.ready) { update3dSlice(); return; }
    ['ax', 'cor', 'sag'].forEach((a) => { mri.idx[a] = Math.max(0, Math.min(MRI.count(a) - 1, Math.round(mri.idx[a]))); });
    const ax = mri.axis;
    mriSlider.max = MRI.count(ax) - 1;
    mriSlider.value = mri.idx[ax];
    $('#mriCoord').textContent = mmText(ax, MRI.idx2mm(ax, mri.idx[ax]));
    document.querySelectorAll('[data-axis]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.axis === ax)));
    const lit = litIds(), litKey = Array.from(lit).sort().join(',');
    cells.forEach((c, n) => {
      if (n > 0 && !mri.triple) return;
      c.axis = mri.triple ? ['ax', 'cor', 'sag'][n] : ax;
      renderCell(c, quick, lit, litKey);
    });
    if (mri.triple) {        // artı imlecinin koordinatı ve oradaki yapı
      const v = [mri.idx.sag, mri.idx.cor, mri.idx.ax], m = MRI.vox2mni(v);
      const s = cells[0].cache.s, [px, py] = MRI.vox2pix('ax', v), id = MRI.idOf(MRI.labelAt(s, px, py));
      $('.mcell.minfo').innerHTML = t('<b>Artı imleci</b><span>x = ') + m[0] + ' · y = ' + m[1] + ' · z = ' + m[2] + ' mm</span>' +
        '<span class="mname">' + esc(regionName(id) || t('Etiketsiz')) + '</span>' +
        t('<small>Bir kesite tıklayınca artı imleci oraya taşınır, öteki iki kesit onu izler.</small>');
    }
    update3dSlice();
    clearTimeout(refineTimer);
    if (quick) refineTimer = setTimeout(() => updateMRI(false), 140);
  }

  function setClip(on) {
    if (clipOn !== on) {
      clipOn = on;
      Object.values(R).forEach((r) => { r.mat.clippingPlanes = on ? [clipPlane] : null; r.mat.needsUpdate = true; });
    }
  }

  // 3B kesit düzlemi (etkin yön; dört köşesi kesitin voksel köşelerinden) ve kesme düzlemi
  function update3dSlice() {
    const on = mri.open && mri.ready && mri.show3d;
    setClip(on);
    if (!on) { if (sliceMesh) sliceMesh.visible = false; return; }
    const cell = cells.find((c) => (mri.triple || c === cells[0]) && c.axis === mri.axis && c.cache);
    if (!cell) return;
    if (!sliceMesh) {
      sliceTex = new THREE.CanvasTexture(cell.cache.comp.tex);
      sliceTex.encoding = THREE.sRGBEncoding;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3));
      geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]), 2));
      geo.setIndex([0, 2, 1, 1, 2, 3]);
      sliceMesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: sliceTex, side: THREE.DoubleSide, transparent: true,
        alphaTest: 0.5, toneMapped: false }));
      sliceMesh.renderOrder = 1;
      scene.add(sliceMesh);
    }
    const texImg = cell.cache.tex3 || cell.cache.comp.tex;
    if (sliceTex.image !== texImg) { sliceTex.dispose(); sliceTex.image = texImg; }
    sliceTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    sliceTex.needsUpdate = true;
    sliceMesh.material.opacity = litIds().size ? 0.62 : 1;   // seçili yapı düzlemin arkasından da görünsün; yoksa opak (kesilen modelin içi seçilmesin)
    const ax = mri.axis, idx = mri.idx[ax], [w, h] = MRI.size(ax), pos = sliceMesh.geometry.attributes.position;
    [[-0.5, -0.5], [w - 0.5, -0.5], [-0.5, h - 0.5], [w - 0.5, h - 0.5]].forEach(([px, py], n) => {
      const v = mniToWeb(MRI.vox2mni(MRI.pix2vox(ax, idx, px, py)));
      pos.setXYZ(n, v.x, v.y, v.z);
    });
    pos.needsUpdate = true;
    sliceMesh.geometry.computeBoundingSphere();
    sliceMesh.visible = true;
    const mm = MRI.idx2mm(ax, idx), s = mri.flip ? -1 : 1, eps = -0.004;   // model düzlemin 0,35 mm gerisinden kesilir: düzlemin önünde ince şerit kalmaz
    if (ax === 'ax') clipPlane.set(new THREE.Vector3(0, -s, 0), s * (mm - 15) * K_WEB + eps);       // üst kaldırılır
    else if (ax === 'cor') clipPlane.set(new THREE.Vector3(0, 0, -s), s * (mm + 16) * K_WEB + eps); // ön kaldırılır
    else clipPlane.set(new THREE.Vector3(-s, 0, 0), s * -mm * K_WEB + eps);                         // sol yan kaldırılır
  }

  // seçim değişince: kesit vurgusu yenilenir; seçilen bölge görünen kesitlerde yoksa kesit(ler) bölgenin merkezine geçer
  function mriFollowSelection() {
    if (!mri.open || !mri.ready) return;
    const id = state.selected;
    const cell = cells.find((c) => c.axis === mri.axis && c.cache);
    if (id && cell) {
      const want = new Set([id].concat(CHILDREN[id] || []));
      const lab = cell.cache.s.lab;
      let present = false;
      for (let p = 0; p < lab.length && !present; p++) present = want.has(MRI.idOf(lab[p]));
      if (!present) {
        const sideX = MRI.idx2mm('sag', mri.idx.sag) >= 0 ? 1 : -1;
        const c = MRI.centroid(id, sideX) || (CHILDREN[id] || []).map((k) => MRI.centroid(k, sideX)).find(Boolean);
        if (c) {
          if (mri.triple) { mri.idx.sag = c[0]; mri.idx.cor = c[1]; mri.idx.ax = c[2]; }
          else mri.idx[mri.axis] = mri.axis === 'ax' ? c[2] : mri.axis === 'cor' ? c[1] : c[0];
        }
      }
    }
    updateMRI();
  }

  // fare konumu → kesit (sürekli piksel) ve oradaki etiket
  function cellPick(c, e) {
    if (!c.cache || !c.rect) return null;
    const b = c.canvas.getBoundingClientRect(), r = c.rect, s = c.cache.s;
    const u = (e.clientX - b.left - r.x0) / r.s - 0.5, v = (e.clientY - b.top - r.y0) / r.s - 0.5;
    if (u < -0.5 || v < -0.5 || u > s.w - 0.5 || v > s.h - 0.5) return { out: true, id: null };
    return { out: false, u, v, id: MRI.idOf(MRI.labelAt(s, u, v)) };
  }
  cells.forEach((c) => {
    c.canvas.addEventListener('mousemove', (e) => {
      const p = cellPick(c, e);
      if (!p) return;
      mriHover.textContent = p.out ? mriHint() : regionName(p.id) || t('Etiketsiz (kafa dokusu ya da boşluk)');
      setHover(p.id && R[p.id] ? p.id : null, e.clientX, e.clientY);
    });
    c.canvas.addEventListener('mouseleave', () => setHover(null));
    c.canvas.addEventListener('click', (e) => {
      const p = cellPick(c, e);
      if (!p || p.out) return;
      mri.axis = c.axis;
      if (mri.triple) {        // artı imleci tıklanan noktaya
        const v = MRI.pix2vox(c.axis, mri.idx[c.axis], p.u, p.v);
        if (c.axis !== 'sag') mri.idx.sag = v[0];
        if (c.axis !== 'cor') mri.idx.cor = v[1];
        if (c.axis !== 'ax') mri.idx.ax = v[2];
      }
      if (p.id && DATA[p.id]) select(p.id, { fly: true });
      else updateMRI();
    });
    c.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      mri.axis = c.axis;
      mri.idx[c.axis] += e.deltaY > 0 ? -1 : 1;
      updateMRI(true);
    }, { passive: false });
  });
  mriSlider.addEventListener('input', () => { mri.idx[mri.axis] = +mriSlider.value; updateMRI(true); });
  document.querySelectorAll('[data-axis]').forEach((b) => b.addEventListener('click', () => {
    mri.axis = b.dataset.axis;
    mriFollowSelection();
  }));
  $('#mriTriple').addEventListener('click', () => setTriple(!mri.triple));
  $('#mriLabels').addEventListener('change', (e) => { mri.labels = e.target.checked; updateMRI(); });
  $('#mri3d').addEventListener('change', (e) => { mri.show3d = e.target.checked; updateMRI(); });
  $('#mriFlip').addEventListener('click', () => { mri.flip = !mri.flip; updateMRI(); });
  $('#mriClose').addEventListener('click', () => openMRI(false));
  $('#mribtn').addEventListener('click', () => openMRI(!mri.open));
  $('#dockMri').addEventListener('click', () => openMRI(!mri.open));
  // telefonda MR başlığındaki seçili yapı: dokununca MR kapanır, yapının kartı yarım çekmecede açılır
  const mriCard = $('#mriCard');
  function updateMriCard() {
    const id = state.selected, src = state.set && setSrc(state.set.kind, state.set.id);
    mriCard.hidden = !(id || src);
    if (mriCard.hidden) return;
    mriCard.innerHTML = '<i style="background:' + infoColor() + '"></i>' + esc(id ? DATA[id].short : infoTitle()) + ' ›';
    mriCard.title = t('Kartı aç');
  }
  mriCard.addEventListener('click', () => { openMRI(false); if (narrowMQ.matches) setSheet('half'); });
  // telefonda MR'ın üst kenarı sürüklenerek beyin ile kesit arasındaki oran değişir
  const mriGrip = $('#mriGrip');
  mriGrip.addEventListener('pointerdown', (e) => {
    if (!narrowMQ.matches || e.button) return;
    e.preventDefault();
    try { mriGrip.setPointerCapture(e.pointerId); } catch (err) { /* işaretçi yakalanamadı */ }
    const bottom = mriEl.getBoundingClientRect().bottom, H = window.innerHeight;
    const move = (ev) => document.documentElement.style.setProperty('--mri-h', Math.min(0.78 * H, Math.max(0.3 * H, bottom - ev.clientY + 9)) + 'px');
    const up = () => { mriGrip.removeEventListener('pointermove', move); mriGrip.removeEventListener('pointerup', up); mriGrip.removeEventListener('pointercancel', up); };
    mriGrip.addEventListener('pointermove', move);
    mriGrip.addEventListener('pointerup', up);
    mriGrip.addEventListener('pointercancel', up);
  });
  if (window.ResizeObserver) new ResizeObserver(() => { if (mri.open) layout(); }).observe(mriEl);
  function drawMRI() { if (mri.open && mri.ready) updateMRI(); }

  /* ---------- canlı yolaklar ve nörotransmitter sistemleri ---------- */
  // Bir sistem, kitap yolağı ya da nörotransmitter sistemi seçilince devrenin yolları 3B'de ince ışıklı tüp olarak
  // çizilir ve üzerlerinde sinyal paketleri akar (data/flows.js). "Nörotransmitter" açıkken her yol kendi kimyasının
  // renginde, kapalıyken kümenin renginde; ketleyici (frenleyici) yollarda parçacıklar halka biçimindedir.
  // Yollar şematiktir: uçlar ve duraklar veriden, güzergâh derlemede MR etiket bloğundan çözülür (sıvı ve beyin dışı yasak; tools/yol_cozucu.py).
  const flow = { key: '', fkey: '', alpha: 0, group: null, curves: [], nodes: [], tags: new Map(), lastH: null, pts: null, ptsHid: null, time: 0, def: null };
  const FLOW_SPEED = 0.3;            // web birimi/sn (~26 mm/sn)
  const TAIL = [0, 0.014, 0.028, 0.042, 0.058];   // bir sinyal paketinin parçacıkları (öndeki en büyük)
  try { state.ntOn = localStorage.getItem('atlas.nt') !== '0'; } catch (e) { state.ntOn = true; }

  function partCenter(id, side) {
    const r = R[id];
    if (!r || !r.meshes.length) return null;
    const ms = r.meshes.filter((m) => m.userData.side === side);
    const list = ms.length ? ms : r.meshes, c = new THREE.Vector3();
    list.forEach((m) => c.add(m.geometry.boundingSphere.center));
    c.divideScalar(list.length);
    // orta hat yapısından (VTA, rafe, hipotalamus) iki yana giden yollar hafifçe ayrık başlasın (3 mm)
    if (!ms.length) c.x = side === 'L' ? 3 * K_WEB : side === 'R' ? -3 * K_WEB : 0;
    return c;
  }
  const sideSign = (side) => (side === 'L' ? -1 : side === 'R' ? 1 : 0);   // MNI x işareti (sağ +x)
  function endPoint(ref, side) {
    if (ref[0] === '@') {
      const p = FD.POINTS[ref.slice(1)], sg = sideSign(side);
      return mniToWeb([sg * p.mni[0], p.mni[1], p.mni[2]]);
    }
    return partCenter(ref, side);
  }
  // ara noktalar kaynak tarafında; dördüncü öğesi 't' olan nokta hedef tarafında (çapraz yollar: beyincik döngüsü)
  function viaPoints(list, side, tside) {
    const out = [];
    (list || []).forEach((v) => (typeof v === 'string' ? FD.CHAINS[v.slice(1)] : [v]).forEach((m) =>
      out.push(mniToWeb([sideSign(m[3] === 't' ? tside || side : side) * m[0], m[1], m[2]]))));
    return out;
  }
  const crossSide = (side) => (side === 'L' ? 'R' : side === 'R' ? 'L' : side);
  // Çözülmüş geometri (data/yol_geo.js, tools/yol_cozucu.py): MR bloğundan derlemede çözülür, tarayıcı yalnız çizer. Sol taraf sağın aynası.
  // Anahtar tools/yol_dok.js → yolAnahtar ile aynı olmalı.
  const yolKey = (rt) => rt.from + (rt.zf ? '/' + rt.zf : '') + '>' + rt.to + (rt.zt ? '/' + rt.zt : '') + (rt.cross ? '^' + rt.cross : '') + '|' +
    (rt.via || []).map((v) => (typeof v === 'string' ? v : v.join(' '))).join(',');
  function solvedPath(rt, side) {
    const g = window.YOL_GEO && window.YOL_GEO[yolKey(rt) + (side === 'M' ? '|M' : '')];
    if (!g) return null;
    const s = side === 'L' ? -1 : 1, out = [];
    for (let i = 0; i < g.length; i += 3) out.push(mniToWeb([s * g[i] / 10, g[i + 1] / 10, g[i + 2] / 10]));
    return out;
  }
  const endName = (ref, z) => (z && DATA[z] ? DATA[z].short : ref[0] === '@' ? FD.POINTS[ref.slice(1)].name : DATA[ref] ? DATA[ref].short : ref);
  function setColor() {
    const k = state.set.kind, src = setSrc(k, state.set.id);
    return k === 'path' ? DATA[src.core[0]].color : src.color;
  }
  const routeColor = (rt) => (state.ntOn ? FD.CHEM[rt.chem].color : setColor());

  function buildFlow(def) {
    const group = new THREE.Group(), curves = [];
    // Katmanlar → "Sol yarıküreyi gizle" açıkken iki taraflı yollar yalnızca sağda çizilir (kullanıcı 2026-10-15); tek taraflı yollar aynen kalır
    const sidesOf = (rt) => { const sd = rt.sides || ['L', 'R']; return state.hideLeft && sd.includes('R') ? sd.filter((x) => x !== 'L') : sd; };
    def.routes.forEach((rt, ri) => sidesOf(rt).forEach((side) => {
      // cross: lifler karşı tarafa geçer. 'to': hedef karşı tarafta (köprü → karşı beyincik); 'from': kaynak karşı tarafta
      // (karşı dentat → talamus). Taraf anahtarı korteks/talamus tarafıdır; sol gizliyken döngü sağ korteks üzerinden tutarlı kalır.
      const fside = rt.cross === 'from' ? crossSide(side) : side, tside = rt.cross === 'to' ? crossSide(side) : side;
      let pts = solvedPath(rt, side);
      if (!pts) {
        const a = endPoint(rt.from, fside), b = endPoint(rt.to, tside);
        if (!a || !b) return;
        pts = [a];
        viaPoints(rt.via, fside, tside).concat([b]).forEach((p) => { if (p.distanceTo(pts[pts.length - 1]) > 0.012) pts.push(p); });
      }
      if (pts.length < 2) return;
      const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
      const col = new THREE.Color(routeColor(rt)), len = curve.getLength();
      const tgeo = new THREE.TubeGeometry(curve, Math.max(24, Math.round(len * 90)), rt.inh ? 0.006 : 0.008, 8, false);
      const tube = new THREE.Mesh(tgeo, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0, depthWrite: false, toneMapped: false }));
      // yapıların arkasında kalan kısım da sönük görünür (ikinci çizim, yalnızca örtülü yerde)
      const hid = new THREE.Mesh(tgeo, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0, depthWrite: false,
        toneMapped: false, depthFunc: THREE.GreaterDepth }));
      tube.renderOrder = hid.renderOrder = 3;
      group.add(tube, hid);
      curves.push({ rt, ri, side, curve, len, col, tube, hid, glow: null, em: 0, dm: 0,
        samp: curve.getSpacedPoints(Math.max(12, Math.round(len * 50))),      // fareyle yolu bulmak için ekrana izdüşürülen noktalar
        packets: Math.max(2, Math.round(len / (rt.inh ? 0.32 : 0.2) * (rt.n || 1))), phase: Math.random() });
    }));
    const nodes = buildMarks(group, curves);
    // sinyal paketleri ve varış halkaları tek nokta bulutunda
    const n = curves.reduce((k, c) => k + c.packets * TAIL.length + 1, 0);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(new Float32Array(n), 1));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(new Float32Array(n), 1));
    geo.setAttribute('aRing', new THREE.BufferAttribute(new Float32Array(n), 1));
    const mat = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 1 }, uOpacity: { value: 0 } },
      vertexShader: `attribute vec3 aColor; attribute float aSize; attribute float aAlpha; attribute float aRing; uniform float uScale;
        varying vec3 vC; varying float vA; varying float vRing;
        void main() { vC = aColor; vA = aAlpha; vRing = aRing; vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uScale / max(0.05, -mv.z); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform float uOpacity; varying vec3 vC; varying float vA; varying float vRing;
        void main() { float d = length(gl_PointCoord - 0.5) * 2.0; if (d > 1.0) discard;
          float core = exp(-d * d * 7.0), halo = (1.0 - d) * (1.0 - d);
          float ring = smoothstep(0.42, 0.6, d) * (1.0 - smoothstep(0.8, 1.0, d));
          float a = mix(clamp(core + halo * 0.55, 0.0, 1.0), clamp(ring * 1.3 + halo * 0.2, 0.0, 1.0), vRing);
          vec3 c = mix(mix(vC, vec3(1.0), core * 0.75), vC * 1.15 + 0.1, vRing);
          gl_FragColor = vec4(c, a * vA * uOpacity); }`,
      transparent: true, depthWrite: false
    });
    const pts = new THREE.Points(geo, mat);
    const ptsHid = new THREE.Points(geo, mat.clone());
    ptsHid.material.depthFunc = THREE.GreaterDepth;
    pts.frustumCulled = ptsHid.frustumCulled = false;
    pts.renderOrder = ptsHid.renderOrder = 4;
    group.add(pts, ptsHid);
    scene.add(group);
    return { group, curves, nodes, pts, ptsHid };
  }
  // Yolların çıkış noktaları ve modelde karşılığı olmayan uçlar (@: hipofiz, beden, adrenal) işaretlenir: yollar boşluktan çıkıp boşluğa
  // gidiyormuş gibi görünüyordu (kullanıcı 2026-10-11). 2026-10-24'ten beri parlayan düğüm yerine ekranda sabit boyda küçük nokta
  // (kullanıcı: "parlaklık tam kaynağı görmeyi zorlaştırıyor, karışık modellerde özellikle"); bütün canlı yol görsellerinde (sistem, kitap
  // yolağı, nörotransmitter, tanı ve ilaç mercekleri). Ad her yerde yazılmaz ("her noktanın çıkışını gösterirsek karışır"): yalnızca fareyle
  // üzerine gelinen ya da seçilen yolun iki ucunda (updateTags) ve @ uçlarında (üzerine gelinecek yapıları yok). İşaret derinlik
  // sınamasız çizilir, yapıların arkasında da okunur. Hedeflere varsayılan işaret konmaz (hedef bölgeler kümede zaten görünür).
  function buildMarks(group, curves) {
    const nodes = [], seen = new Map();
    curves.forEach((c) => [[c.rt.from, 0], [c.rt.to, 1]].forEach(([ref, u]) => {
      const at = ref[0] === '@';
      if (!at && u === 1) return;
      const p = c.curve.getPointAt(u), prev = seen.get(ref) || [];
      let nd = prev.find((q) => q.p.distanceTo(p) < 0.06);       // orta hat yapısının iki yana açılan yolları tek işaret
      if (!nd) {
        const lab = markLabel(at && !prev.length ? pointName(ref) : '', '#' + c.col.getHexString(), at);   // iki yanlı uçta ad bir kez
        lab.position.copy(p); group.add(lab);
        nd = { p, ref, side: c.side, lab, ris: new Set(), k: 1 };
        prev.push(nd); seen.set(ref, prev); nodes.push(nd);
      }
      nd.ris.add(c.ri);
    }));
    // kanla taşınan hormon: tüpün ortasında tek etiket (kullanıcı 2026-11-05: tüpsüz çizim "hiç yok gibi", eski görsele "kanla gider gibi" etiket)
    const kan = new Map();
    curves.forEach((c) => { if (c.rt.kan && (!kan.has(c.rt.kan) || c.side === 'R')) kan.set(c.rt.kan, c); });
    kan.forEach((c, text) => {
      const p = c.curve.getPointAt(0.5), lab = markLabel(t(text), '#' + c.col.getHexString(), true);
      lab.position.copy(p); group.add(lab);
      nodes.push({ p, ref: '@kan', side: c.side, lab, ris: new Set(curves.filter((q) => q.rt.kan === text).map((q) => q.ri)), k: 1 });
    });
    return nodes;
  }
  const pointName = (ref) => FD.POINTS[ref.slice(1)].name.split(' (')[0];
  // 3B'de yazılan ad: kısaltması yalnız büyük harfli ve kısa olan yapılarda (AMY, HC, PUT, TH …) adın kendisi (Amigdala, Hipokampus),
  // öteki yapılarda yerleşik kısaltma (VTA, DLPFC, mPFC)
  const ABBR = /^[A-ZÇĞİÖŞÜ]{2,3}$/;
  function tagName(ref, z) {
    if (ref[0] === '@') return pointName(ref);
    const d = DATA[z] || DATA[ref];
    if (!d) return ref;
    const n = d.name.split(' (')[0].split(' & ')[0];
    return ABBR.test(d.short) && n.length <= 15 ? n : d.short;
  }
  // vurgulanan yolların uçları: her uçta nokta, her yapının adı bir kez (önce imlecin altındaki yolun tarafında, sonra kameraya yakın
  // olanda); @ uçları zaten adlı. Etiketler bir kez üretilir, sönüp yeniden belirir.
  function updateTags(H) {
    flow.tags.forEach((tg) => { tg.want = false; });
    if (!H) return;
    const lead = H.lead, cs = flow.curves.filter((c) => H.ris.has(c.ri));
    const rank = (c) => (lead && c.side === lead.side ? (c.ri === lead.ri ? 0 : 10) : 20) + c.curve.getPointAt(0).distanceTo(camera.position);
    cs.sort((x, y) => rank(x) - rank(y));
    const named = new Set(), done = new Set();
    cs.forEach((c) => [[c.rt.from, 0, c.rt.zf], [c.rt.to, 1, c.rt.zt]].forEach(([ref, u, z]) => {
      if (ref[0] === '@') return;
      const p = c.curve.getPointAt(u), pk = ref + '|' + p.x.toFixed(3) + ',' + p.y.toFixed(3) + ',' + p.z.toFixed(3);
      if (done.has(pk)) return;
      done.add(pk);
      const first = !named.has(ref), key = pk + '|' + (first ? 1 : 0);
      named.add(ref);
      let tg = flow.tags.get(key);
      if (!tg) {
        const lab = markLabel(first ? tagName(ref, z) : '', '#' + c.col.getHexString(), false);
        lab.renderOrder = 8; lab.position.copy(p); flow.group.add(lab);
        tg = { lab, k: 0, want: false };
        flow.tags.set(key, tg);
      }
      tg.want = true;
    }));
  }
  function remakeMarks() {        // renkler değişince (nörotransmitter anahtarı) işaretler yeniden çizilir
    if (!flow.group) return;
    flow.nodes.map((nd) => nd.lab).concat(Array.from(flow.tags.values(), (tg) => tg.lab)).forEach((lab) => {
      flow.group.remove(lab); lab.material.map.dispose(); lab.material.dispose();
    });
    flow.nodes = buildMarks(flow.group, flow.curves);
    flow.tags = new Map(); flow.lastH = null;
  }
  // ekrandaki noktadaki canlı yol: önce işaret noktası (o noktaya bağlı bütün yollar), sonra en yakın yol çizgisi (thr piksel içinde)
  function routeAt(x, y, thr) {
    const fs = flowSel();
    if (!fs || !flow.group || flow.fkey !== fs.key || flow.alpha < 0.5) return null;   // tanı ve ilaç mercekleri yol tanımını her çağrıda yeniden üretir: anahtar karşılaştırılır
    const rc = canvas.getBoundingClientRect();
    const scr = (p) => { vFlow.copy(p).project(camera); return vFlow.z > 1 ? null : [rc.left + (vFlow.x + 1) / 2 * rc.width, rc.top + (1 - vFlow.y) / 2 * rc.height]; };
    const hit = (ris, lead) => { const a = Array.from(ris).sort((m, n) => m - n); return { ris: new Set(a), lead, key: a.join(','), fkey: fs.key }; };
    let nb = null, bd = Math.max(thr, 9);
    flow.nodes.forEach((nd) => { const q = scr(nd.p); if (!q) return; const d = Math.hypot(q[0] - x, q[1] - y); if (d < bd) { bd = d; nb = nd; } });
    if (nb) return hit(nb.ris, { ri: nb.ris.values().next().value, side: nb.side });
    let cb = null;
    bd = thr;
    flow.curves.forEach((c) => {
      let a = null;
      c.samp.forEach((p) => {
        const q = scr(p);
        if (q && a) {
          const dx = q[0] - a[0], dy = q[1] - a[1], L = dx * dx + dy * dy;
          const tt = L > 0 ? Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / L)) : 0;
          const d = Math.hypot(a[0] + tt * dx - x, a[1] + tt * dy - y);
          if (d < bd) { bd = d; cb = c; }
        }
        a = q;
      });
    });
    return cb ? hit([cb.ri], { ri: cb.ri, side: cb.side }) : null;
  }
  function routeText(ris) {       // "VTA → NAcc / VS" ya da "VTA → Amigdala, Hipokampus"
    const fs = flowSel(), rts = fs ? Array.from(ris, (i) => fs.def.routes[i]).filter(Boolean) : [];
    if (!rts.length) return '';
    const froms = Array.from(new Set(rts.map((rt) => rt.from))), tos = Array.from(new Set(rts.map((rt) => rt.to)));
    const zOf = new Map();
    rts.forEach((rt) => { if (rt.zf) zOf.set(rt.from, rt.zf); if (rt.zt) zOf.set(rt.to, rt.zt); });
    const nm = (r) => tagName(r, zOf.get(r));
    if (froms.length === 1) return nm(froms[0]) + ' → ' + tos.map(nm).join(', ');
    if (tos.length === 1) return froms.map(nm).join(', ') + ' → ' + nm(tos[0]);
    return rts.map((rt) => nm(rt.from) + ' → ' + nm(rt.to)).join(' · ');
  }
  function routeSub(ris) {        // kimya ve etki: "Dopamin · ketleyici"; açıklaması olan yolda açıklama
    const fs = flowSel(), rts = fs ? Array.from(ris, (i) => fs.def.routes[i]).filter(Boolean) : [];
    const chems = Array.from(new Set(rts.map((rt) => FD.CHEM[rt.chem].name)));
    return chems.join(', ') + (rts.some((rt) => rt.inh) ? t(' · ketleyici') : '') + (rts.length === 1 && rts[0].lbl ? ' · ' + rts[0].lbl : '');
  }
  function setRouteHover(h) {
    if ((h && h.key) === (rsel.hov && rsel.hov.key)) return;
    rsel.hov = h;
    if (!h) canvas.classList.toggle('pointer', !!state.hovered);
  }
  function showRouteTip(h, x, y) {
    tip.innerHTML = esc(routeText(h.ris)) + '<small>' + esc(routeSub(h.ris)) + '</small>';
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
    tip.hidden = false;
    canvas.classList.add('pointer');
  }
  // yol seçimi: aynı yola yeniden basınca bırakılır; seçili yolun uçları dışındaki yapılar biraz silikleşir (applyState → routeEnds)
  function pickRoute(h) {
    rsel.pick = h && !(rsel.pick && rsel.pick.key === h.key && rsel.pick.fkey === h.fkey) ? h : null;
    applyState();
    refreshFcard();
  }
  function routeEnds() {
    const p = rsel.pick, fs = p && flowSel();
    if (!fs || fs.key !== p.fkey) return null;
    const ends = new Set();
    p.ris.forEach((i) => { const rt = fs.def.routes[i]; if (rt) [rt.from, rt.to].forEach((x) => { if (x[0] !== '@') ends.add(x); }); });
    return ends;
  }
  function refreshFcard() {       // kartın canlı yol kutusu yerinde yenilenir (kartın kaydırma yeri değişmez)
    const fs = flowSel();
    if (fs) infoEl.querySelectorAll('.fcard').forEach((el) => { el.outerHTML = flowCardHTML(fs.def); });
  }
  // İşaretler ekranda sabit boyda, derinlik sınamasız; tek doku = tek sprite
  function spriteOf(cv, ax, k, order) {
    const tex = new THREE.CanvasTexture(cv);
    tex.encoding = THREE.sRGBEncoding;
    tex.minFilter = THREE.LinearFilter; tex.generateMipmaps = false;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0, depthTest: false, depthWrite: false,
      sizeAttenuation: false, toneMapped: false }));
    sp.center.set(ax / cv.width, 0.5);
    sp.userData = { w: cv.width / k, h: cv.height / k };
    sp.renderOrder = order;
    return sp;
  }
  // nokta + ad: çapa noktanın merkezi; solid: modelde karşılığı olmayan uç (@), nokta biraz büyük
  function markLabel(text, hex, solid) {
    const k = 2, dot = (solid ? 4.5 : 3.5) * k, gap = 5 * k, fs = 12 * k, padX = 7 * k, ph = fs + 9 * k;
    const font = '600 ' + fs + 'px "IBM Plex Sans", system-ui, sans-serif';
    const cv = document.createElement('canvas'), g = cv.getContext('2d');
    g.font = font;
    const tw = text ? Math.ceil(g.measureText(text).width) : 0;
    const cx = dot + 2 * k, W = Math.ceil(cx + dot + (text ? gap + tw + 2 * padX : 2 * k)), H = Math.ceil(ph + 2);
    cv.width = W; cv.height = H;
    const cy = H / 2;
    g.fillStyle = 'rgba(255,255,255,0.9)'; g.beginPath(); g.arc(cx, cy, dot + 1.5 * k, 0, Math.PI * 2); g.fill();
    g.fillStyle = hex; g.beginPath(); g.arc(cx, cy, dot, 0, Math.PI * 2); g.fill();
    if (text) {
      const x0 = cx + dot + gap, y0 = cy - ph / 2, w = tw + 2 * padX, r = ph / 2;
      g.beginPath();
      g.moveTo(x0 + r, y0); g.arcTo(x0 + w, y0, x0 + w, y0 + ph, r); g.arcTo(x0 + w, y0 + ph, x0, y0 + ph, r);
      g.arcTo(x0, y0 + ph, x0, y0, r); g.arcTo(x0, y0, x0 + w, y0, r); g.closePath();
      g.fillStyle = 'rgba(17,19,30,0.84)'; g.fill();
      g.lineWidth = 1.2 * k; g.strokeStyle = hex; g.stroke();
      g.fillStyle = '#fff'; g.font = font; g.textBaseline = 'middle';
      g.fillText(text, x0 + padX, cy + 0.5 * k);
    }
    return spriteOf(cv, cx, k, 7);
  }
  function disposeFlow() {
    if (!flow.group) return;
    scene.remove(flow.group);
    flow.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); } });
    flow.group = null; flow.curves = []; flow.nodes = []; flow.tags = new Map(); flow.lastH = null; flow.pts = flow.ptsHid = null;
  }
  // bilgi panelinin başlığındaki canlı yolak kartı: nörotransmitter açıkken kimyaya, kapalıyken kaynağa göre gruplanır
  function flowCardHTML(def) {
    if (!def) return '';
    // yollar 3B'de çiziliyorsa kaynak ve hedef adlarına basılır: o yol (kaynakta: o kaynaktan çıkan yollar) seçilir
    const live = flowSel(), act = !!live && (live.def === def || (live.def.routes.length === def.routes.length &&
      live.def.routes.every((rt, i) => rt.from === def.routes[i].from && rt.to === def.routes[i].to && rt.chem === def.routes[i].chem)));
    const pk = act && rsel.pick && rsel.pick.fkey === live.key ? rsel.pick : null;
    const btn = (label, ris) => {
      if (!act) return esc(label);
      const on = !!pk && pk.ris.size === ris.length && ris.every((i) => pk.ris.has(i));
      return '<button class="frb" data-route="' + ris.join(',') + '" aria-pressed="' + on + '">' + esc(label) + '</button>';
    };
    const rows = [], byKey = new Map();
    def.routes.forEach((rt, ri) => {
      const k = state.ntOn ? rt.chem : rt.from;
      if (!byKey.has(k)) byKey.set(k, []);
      byKey.get(k).push([rt, ri]);
    });
    byKey.forEach((rts, k) => {
      const chem = FD.CHEM[rts[0][0].chem];
      const from = new Map();          // aynı kaynaktan çıkanlar tek satırda: "LC → mPFC, DLPFC, HC"
      rts.forEach(([rt, ri]) => {
        if (rt.lbl) return;
        const f = endName(rt.from, rt.zf), tl = endName(rt.to, rt.zt);
        if (!from.has(f)) from.set(f, { ris: [], tails: new Map() });
        const e = from.get(f);
        e.ris.push(ri);
        if (!e.tails.has(tl)) e.tails.set(tl, []);
        e.tails.get(tl).push(ri);
      });
      const parts = Array.from(from.entries()).map(([f, e]) => btn(f, e.ris) + ' → ' + Array.from(e.tails.entries(), ([tl, ris]) => btn(tl, ris)).join(', '))
        .concat(rts.filter(([rt]) => rt.lbl).map(([rt, ri]) => btn(rt.lbl, [ri])));
      const inh = rts.some(([rt]) => rt.inh);
      const link = chem.nt ? ' data-setkind="nt" data-setid="' + chem.nt + '"' : chem.path && PATH[chem.path] ? ' data-path="' + chem.path + '"' : '';
      const name = state.ntOn ? '<button class="fchem"' + link + (link ? '' : ' disabled') + '>' + esc(chem.name) + '</button>' : '';
      rows.push('<div class="frow"><i class="' + (inh && !state.ntOn ? 'ring' : '') + '" style="color:' + (state.ntOn ? chem.color : setColor()) +
        ';background:currentColor"></i>' + name + '<span class="froute">' + parts.join(' · ') + '</span></div>');
    });
    const anyInh = def.routes.some((rt) => rt.inh);
    const selRow = pk ? '<div class="fsel"><span>' + t('Seçili yol') + '</span><b>' + esc(routeText(pk.ris)) + '</b><em>' + esc(routeSub(pk.ris)) +
      '</em><button class="fselx" data-route-x aria-label="' + t('Seçimi kaldır') + '">×</button></div>' : '';
    return t('<div class="fcard"><div class="fhead"><b>Canlı yolak</b><button class="ftog" data-nt aria-pressed="') + state.ntOn + t('" title="Yolları nörotransmitter renklerine göre göster">') +
      t('<span class="sw"></span>Nörotransmitter</button></div>') + selRow + rows.join('') +
      (act ? '<small class="fhint">' + t('Bir yola ya da adına basın: o yol öne çıkar, uçlarında adı görünür.') + '</small>' : '') +
      (anyInh ? t('<small><i class="ring"></i> halka biçimli sinyal: ketleyici (frenleyici) etki</small>') : '') +
      (def.note ? '<small>' + esc(def.note) + '</small>' : '') +
      t('<small class="fnote">Şematik çizim: yollar yapıları ak madde içinden birleştirir, gerçek lif demeti değildir. Katmanlarda sol yarıküre gizliyken yollar yalnızca sağda çizilir.</small></div>');
  }
  function setNT(on) {
    state.ntOn = on;
    try { localStorage.setItem('atlas.nt', on ? '1' : '0'); } catch (e) { /* depolama kapalı */ }
    flow.curves.forEach((c) => { c.col.set(routeColor(c.rt)); c.tube.material.color.copy(c.col); c.hid.material.color.copy(c.col); if (c.glow) c.glow.material.color.copy(c.col); });
    remakeMarks();
    if (state.set) renderInfo();
  }
  // çizilecek canlı yol: { def, key }. Tanıda merceğin yolu (anahtar merceğe ve seçeneğe göre değişir, yol yeniden kurulur)
  function flowSel() {
    if (!FD || !state.set || state.selected) return null;
    if (state.set.kind === 'tani') { const set = activeSet(); return set && set.view.def ? { def: set.view.def, key: 'tani:' + set.view.key } : null; }
    if (state.set.kind === 'ilac') { const set = activeSet(); return set && set.view.def ? { def: set.view.def, key: 'ilac:' + set.view.key } : null; }
    const key = state.set.kind + ':' + state.set.id, def = FD.SETS[key];
    return def ? { def, key } : null;
  }
  const vFlow = new THREE.Vector3();
  function updateFlows(dt) {
    const fs = flowSel(), def = fs && fs.def, want = fs ? fs.key + (state.hideLeft ? '|sag' : '') : '';   // sol gizlenince yol yeniden kurulur
    if (def && want !== flow.key) {        // yeni devre: eskisi hemen kalkar, yenisi sönükten başlar
      disposeFlow();
      rsel.hov = null;
      if (rsel.pick && rsel.pick.fkey !== fs.key) rsel.pick = null;   // başka küme ya da mercek: seçili yol bırakılır (sol gizlenince kalır)
      Object.assign(flow, buildFlow(def), { key: want, fkey: fs.key, alpha: 0, def });
    }
    if (!flow.group) return;
    flow.alpha += ((def ? 1 : 0) - flow.alpha) * (1 - Math.exp(-dt * (def ? 2.2 : 6)));
    if (!def && flow.alpha < 0.01) { disposeFlow(); flow.key = flow.fkey = ''; flow.def = null; rsel.pick = rsel.hov = null; return; }
    flow.time += dt;
    // vurgulanan yol(lar): fareyle üzerine gelinen, yoksa seçilen. Seçimde öteki yollar belirgin, üzerine gelmede biraz daha az söner.
    const H = def ? rsel.hov || (rsel.pick && rsel.pick.fkey === fs.key ? rsel.pick : null) : null;
    if (H !== flow.lastH) { flow.lastH = H; updateTags(H); }
    const dimOther = H ? (H === rsel.pick ? 0.85 : 0.6) : 0, kH = 1 - Math.exp(-dt * 10);
    const P = flow.pts.geometry.attributes, pos = P.position.array, col = P.aColor.array, size = P.aSize.array, al = P.aAlpha.array, ring = P.aRing.array;
    let o = 0;
    const put = (c, v, s, a, rg) => {
      pos[o * 3] = v.x; pos[o * 3 + 1] = v.y; pos[o * 3 + 2] = v.z;
      col[o * 3] = c.col.r; col[o * 3 + 1] = c.col.g; col[o * 3 + 2] = c.col.b;
      size[o] = s; al[o] = a; ring[o] = rg; o++;
    };
    flow.curves.forEach((c) => {
      const inH = !!H && H.ris.has(c.ri);
      c.em += ((inH ? 1 : 0) - c.em) * kH;
      c.dm += ((H && !inH ? dimOther : 0) - c.dm) * kH;
      const inh = c.rt.inh ? 1 : 0, sp = c.rt.spd || 1;
      const dim = (c.rt.dim === undefined ? 1 : c.rt.dim) * (1 - c.em) + c.em;   // tanı modelinde yolun kazancı; vurgulanan yol tam
      const keep = 1 - c.dm, big = 1 + 0.3 * c.em;
      c.tube.material.opacity = THREE.MathUtils.lerp((inh ? 0.32 : 0.5) * dim * keep, 0.95, c.em) * flow.alpha;
      c.hid.material.opacity = THREE.MathUtils.lerp(0.3 * dim * keep, 0.62, c.em) * flow.alpha;   // yapıların içinden geçen kısım da okunsun
      if (c.em > 0.01 && !c.glow) {     // vurgulanan yolun çevresinde geniş, soluk ışık (yapıların önünde de görünür)
        c.glow = new THREE.Mesh(new THREE.TubeGeometry(c.curve, Math.max(24, Math.round(c.len * 60)), 0.02, 8, false),
          new THREE.MeshBasicMaterial({ color: c.col, transparent: true, opacity: 0, depthWrite: false, depthTest: false, toneMapped: false }));
        c.glow.renderOrder = 3.5;
        flow.group.add(c.glow);
      }
      if (c.glow) { c.glow.visible = c.em > 0.01; c.glow.material.opacity = 0.2 * c.em * flow.alpha; }
      for (let k = 0; k < c.packets; k++) {
        const head = ((flow.time * FLOW_SPEED * sp / c.len + c.phase + k / c.packets) % 1) * c.len;
        TAIL.forEach((off, q) => {
          if (inh && q > 1) { put(c, vFlow, 0, 0, 1); return; }    // ketleyicide kuyruksuz halka
          const d = head - off, u = Math.min(1, Math.max(0, d / c.len));
          c.curve.getPointAt(u, vFlow);
          put(c, vFlow, (inh ? 0.056 : 0.05) * (1 - q * 0.16) * big,
            d < 0 ? 0 : dim * keep * (1 - q * 0.2) * THREE.MathUtils.smoothstep(u, 0, 0.06) * (1 - THREE.MathUtils.smoothstep(u, 0.93, 1)), inh);
        });
      }
      // varış noktasında paket her ulaştığında küçük, hızla sönen ince halka (dolu parıltı hedefi örtüyordu; belirgin halka da
      // "hep görünen daire" gibi duruyordu, kullanıcı 2026-10-24)
      const arr = ((flow.time * FLOW_SPEED * sp / c.len + c.phase) * c.packets) % 1;
      c.curve.getPointAt(1, vFlow);
      put(c, vFlow, (0.03 + 0.035 * arr) * big, dim * keep * (0.32 + 0.3 * c.em) * Math.pow(1 - arr, 3), 1);
    });
    // işaretler: ekranda sabit boy (sizeAttenuation kapalı: ölçek = 2·piksel / (f · tuval yüksekliği)); vurgulanmayan yolların
    // çıkış noktaları da söner, vurgulananların uçlarında adlı etiketler belirir
    const fK = 2 * Math.tan((camera.fov * Math.PI) / 360) / Math.max(1, renderer.domElement.clientHeight);
    const size2 = (lab) => lab.scale.set(lab.userData.w * fK, lab.userData.h * fK, 1);
    flow.nodes.forEach((nd) => {
      let on = !H;
      if (H) nd.ris.forEach((i) => { if (H.ris.has(i)) on = true; });
      nd.k += ((on ? 1 : 1 - dimOther) - nd.k) * kH;
      size2(nd.lab);
      nd.lab.material.opacity = flow.alpha * 0.95 * nd.k;
    });
    flow.tags.forEach((tg) => {
      tg.k += ((tg.want ? 1 : 0) - tg.k) * kH;
      tg.lab.visible = tg.k > 0.01;
      size2(tg.lab);
      tg.lab.material.opacity = flow.alpha * tg.k;
    });
    P.position.needsUpdate = P.aColor.needsUpdate = P.aSize.needsUpdate = P.aAlpha.needsUpdate = P.aRing.needsUpdate = true;
    const sc = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
    [[flow.pts, 1], [flow.ptsHid, 0.75]].forEach(([p, a]) => {
      p.material.uniforms.uOpacity.value = flow.alpha * a;
      p.material.uniforms.uScale.value = sc;
    });
  }

  /* ---------- tedavi işaretleri: derin beyin uyarımı elektrotları ve TMS bobini (şematik) ---------- */
  // Elektrot: hedef yapının merkezinden (ofset, MNI mm) başlar, yön boyunca yukarı çıkar; uçta dört kontak, etkin kontağın çevresinde
  // uyarılan doku hacmi nabız gibi atar. Yapıların içinde kalan kısım ikinci çizimle sönük görünür (canlı yollardaki gibi).
  // Bobin: H7 benzeri çift halka ve beynin içine doğru inen alan konisi (dalgalar aşağı akar).
  const mark = { key: '', alpha: 0, group: null, glow: [], cone: null };
  function markerSel() {
    if (!state.set || state.set.kind !== 'tani' || state.selected) return null;
    const set = activeSet();
    return set && set.view.marker ? { m: set.view.marker, key: set.view.key } : null;
  }
  const mmVec = (side, a) => new THREE.Vector3(-sideSign(side) * a[0], a[2], a[1]);    // [yan, ön, üst] mm → web yönü (ölçeksiz)
  function twoPass(geo, color, opacity, group) {
    const a = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false, toneMapped: false }));
    const b = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: opacity * 0.4, depthWrite: false,
      toneMapped: false, depthFunc: THREE.GreaterDepth }));
    a.userData.op = opacity; b.userData.op = opacity * 0.4;
    a.renderOrder = b.renderOrder = 5;
    group.add(a, b);
    return [a, b];
  }
  function placeAlong(mesh, from, dir, len) {   // Y ekseni boyunca uzanan silindiri from'dan dir yönünde len uzunlukta yerleştir
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    mesh.position.copy(from).addScaledVector(dir, len / 2);
  }
  function buildMarker(x) {
    const group = new THREE.Group(), glow = [];
    let cone = null;
    if (x.elektrot) {
      const e = x.elektrot, L = 82 * K_WEB, rL = 0.64 * K_WEB, rC = 0.76 * K_WEB;   // elektrot çapı 1,27 mm
      ['L', 'R'].forEach((side) => {
        const c = e.mni ? mniToWeb([sideSign(side) * e.mni[0], e.mni[1], e.mni[2]]) : partCenter(e.hedef, side);
        if (!c) return;
        const tip = e.mni ? c : c.clone().add(mmVec(side, e.ofset).multiplyScalar(K_WEB)), dir = mmVec(side, e.yon).normalize();
        twoPass(new THREE.CylinderGeometry(rL, rL, L, 12, 1, true), 0xc9d3e6, 0.7, group).forEach((m) => placeAlong(m, tip, dir, L));
        const cap = new THREE.Mesh(new THREE.SphereGeometry(rL, 12, 8), new THREE.MeshBasicMaterial({ color: 0xc9d3e6, transparent: true, opacity: 0.7, depthWrite: false }));
        cap.position.copy(tip); cap.userData.op = 0.7; cap.renderOrder = 5; group.add(cap);
        const [len, gap] = e.kontak;
        for (let k = 0; k < 4; k++) {
          const from = tip.clone().addScaledVector(dir, (0.6 + k * (len + gap)) * K_WEB), on = k === e.aktif;
          twoPass(new THREE.CylinderGeometry(rC, rC, len * K_WEB, 14), on ? 0xffb347 : 0xf2f5ff, on ? 0.95 : 0.85, group)
            .forEach((m) => { placeAlong(m, from, dir, len * K_WEB); if (on) glow.push({ m, kind: 'contact' }); });
          if (on) {      // uyarılan doku hacmi (yaklaşık 3 mm yarıçap)
            const vta = new THREE.Mesh(new THREE.SphereGeometry(3 * K_WEB, 20, 14), new THREE.MeshBasicMaterial({ color: 0xff9a3c,
              transparent: true, opacity: 0.25, depthWrite: false, toneMapped: false, blending: THREE.AdditiveBlending }));
            vta.position.copy(from).addScaledVector(dir, len * K_WEB / 2);
            vta.userData.op = 0.25; vta.renderOrder = 6;
            group.add(vta); glow.push({ m: vta, kind: 'vta' });
          }
        }
      });
    }
    if (x.bobin) {
      const b = x.bobin, top = mniToWeb(b.merkez), aim = mniToWeb(b.hedef), down = aim.clone().sub(top).normalize();
      const sep = new THREE.Vector3().crossVectors(down, Math.abs(down.y) > 0.8 ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(0, 1, 0)).normalize();
      [-1, 1].forEach((sg) => {        // çift halka (H7 ya da sekiz biçimli bobin, şematik); halkalar kafa yüzeyine teğet yan yana
        const ring = new THREE.Mesh(new THREE.TorusGeometry(b.yaricap * K_WEB, 1.6 * K_WEB, 10, 64),
          new THREE.MeshBasicMaterial({ color: 0x3fe0cf, transparent: true, opacity: 0.85, depthWrite: false, toneMapped: false }));
        ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), down);
        ring.position.copy(top).addScaledVector(sep, sg * b.ara * K_WEB);
        ring.userData.op = 0.85; ring.renderOrder = 6;
        group.add(ring); glow.push({ m: ring, kind: 'ring' });
      });
      const h = top.distanceTo(aim);
      const geo = new THREE.CylinderGeometry(26 * K_WEB, 6 * K_WEB, h, 40, 24, true);
      const mat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
        uniforms: { uTime: { value: 0 }, uAlpha: { value: 0 } },
        vertexShader: 'varying float vY; void main() { vY = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
        fragmentShader: `uniform float uTime; uniform float uAlpha; varying float vY;
          void main() { float wave = pow(0.5 + 0.5 * sin((vY * 5.0 + uTime * 1.6) * 6.2832), 6.0);
            float a = (0.05 + 0.32 * wave) * smoothstep(0.0, 0.25, vY) * uAlpha;
            gl_FragColor = vec4(vec3(0.25, 0.88, 0.81) * (0.6 + 0.6 * wave), a); }` });
      cone = new THREE.Mesh(geo, mat);
      cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), down.clone().negate());   // geniş ucu bobinde, dar ucu hedefte
      cone.position.copy(top).addScaledVector(down, h / 2);
      cone.renderOrder = 5;
      group.add(cone);
    }
    scene.add(group);
    return { group, glow, cone };
  }
  function disposeMarker() {
    if (!mark.group) return;
    scene.remove(mark.group);
    mark.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
    Object.assign(mark, { group: null, glow: [], cone: null });
  }
  function updateMarkers(dt, now) {
    const ms = markerSel(), want = ms ? ms.key : '';
    if (ms && want !== mark.key) { disposeMarker(); Object.assign(mark, buildMarker(ms.m), { key: want, alpha: 0 }); }
    if (!mark.group) return;
    mark.alpha += ((ms ? 1 : 0) - mark.alpha) * (1 - Math.exp(-dt * (ms ? 2.5 : 7)));
    if (!ms && mark.alpha < 0.01) { disposeMarker(); mark.key = ''; return; }
    const beat = 0.5 + 0.5 * Math.sin(now * 0.006);
    mark.group.traverse((o) => { if (o.material && o.userData.op !== undefined) o.material.opacity = o.userData.op * mark.alpha; });
    mark.glow.forEach((g) => {
      if (g.kind === 'vta') { g.m.scale.setScalar(0.85 + 0.35 * beat); g.m.material.opacity = (0.12 + 0.3 * beat) * mark.alpha; }
      else if (g.kind === 'contact') g.m.material.color.setRGB(1, 0.55 + 0.25 * beat, 0.2 + 0.2 * beat);
      else if (g.kind === 'ring') g.m.material.opacity = (0.55 + 0.4 * beat) * mark.alpha;
    });
    if (mark.cone) { mark.cone.material.uniforms.uTime.value = now / 1000; mark.cone.material.uniforms.uAlpha.value = mark.alpha; }
  }

  /* ---------- döngü ---------- */
  let last = performance.now();
  const viewDir = new THREE.Vector3(), vTmp = new THREE.Vector3();
  const OPEN_REACH = 0.45;      // yakınlaşınca açılmada parçaların merkezden en çok uzaklaşması (web birimi; beyin ~2)
  // parça başına sabit küçük sapma (bölge ve tarafa göre): aynı bölgenin yüzeyi, hacmi ve seçim kabuğu birlikte hareket eder
  function jitter(m) {
    let h = 7;
    const t = m.userData.id + '/' + m.userData.side;
    for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) | 0;
    return 0.9 + 0.4 * (((h >>> 0) % 1000) / 1000);
  }
  // 2. kademe (yakınlaşınca açma, derin yapı seçiliyken): seçimin merkezi ve kapsadığı yarıçap; aile çekirdekleri aralanır
  const SPREAD = 0.9;          // çekirdeklerin aile merkezine uzaklığı en çok 1,9 katına çıkar
  const REACH2 = 0.55;         // öteki derin yapılar seçimden bu kadar uzaklaşır (web birimi; beyin ~2)
  const DEEP_FRAME_SKIP = new Set(['pons', 'medulla', 'vagal']);   // 1. kademenin çerçevesine alınmaz (aşağıda kalır)
  let deepNeed = 0;            // derin yapıların beynin merkezinden en uzak sınırı (ilk karede bir kez)
  const st2 = { on: false, c: new THREE.Vector3(), r: 0, fam: null, sel: null };
  function stage2(sel) {
    st2.on = false; st2.fam = null; st2.sel = sel;
    const r = sel && R[sel];
    if (!state.zoomOpen || !r || r.kind !== 'deep' || !r.meshes.length) return st2;
    const fam = familyOf(sel);
    const kids = fam && DATA[fam].sub !== 'surface' ? CHILDREN[fam].filter((k) => R[k] && R[k].meshes.length) : [];
    st2.on = true;
    if (kids.length) {
      st2.fam = fam;
      st2.c.set(0, 0, 0);
      kids.forEach((k) => st2.c.add(R[k].center));
      st2.c.divideScalar(kids.length);
      st2.r = 0;
      kids.forEach((k) => R[k].meshes.forEach((m) => {
        const b = m.geometry.boundingSphere;
        st2.r = Math.max(st2.r, b.center.distanceTo(st2.c) * (1 + SPREAD) + b.radius);
      }));
    } else {
      st2.c.copy(r.center);
      st2.r = r.radius;
    }
    return st2;
  }
  // bir yarıçapı (web birimi) serbest alana sığdıran görünen uzaklık (focusDistance ile aynı ölçü)
  function frameDist(need) {
    const t = Math.tan((camera.fov * Math.PI) / 360);
    const frac = Math.max(0.2, Math.min(free.right - free.left, free.bottom - free.top) / window.innerHeight);
    return need / (0.85 * t * frac);
  }
  const vAway = new THREE.Vector3();
  // bir parçanın yer değiştirmesi: saçılma (ekran düzleminde) + yakınlaşınca açılma (beynin merkezinden dışa, 3B'de sabit)
  // + 2. kademe: seçimden uzaklaşma (away) ya da aile içinde aralanma (spread)
  function displace(m, fly, open, away, spread) {
    if (!(fly > 0 || open > 1e-3 || away > 1e-3 || spread > 1e-3 || m.position.lengthSq() > 0)) return;
    if (!m.userData.reach) {
      m.userData.reach = jitter(m);
      m.userData.dir3 = m.geometry.boundingSphere.center.clone().sub(BRAIN_CENTER).normalize();
    }
    m.position.set(0, 0, 0);
    if (fly > 0) {             // ekran düzleminde dışa: parçalar kameraya doğru uçup görüşü kapatmaz
      vTmp.copy(m.geometry.boundingSphere.center).sub(BRAIN_CENTER);
      vTmp.addScaledVector(viewDir, -vTmp.dot(viewDir));
      if (vTmp.lengthSq() < 1e-6) vTmp.set(0, 1, 0);
      m.position.addScaledVector(vTmp.normalize(), fly * m.userData.reach);
    }
    // kameraya bakan parçalar daha çok açılır: içeriye bir pencere açılır, arkadakiler fon olarak yakında kalır
    if (open > 1e-3) {
      const face = Math.max(0, m.userData.dir3.dot(viewDir));
      m.position.addScaledVector(m.userData.dir3, open * OPEN_REACH * m.userData.reach * (0.55 + 0.75 * face));
    }
    if (away > 1e-3) {
      vAway.copy(m.geometry.boundingSphere.center).sub(st2.c);
      if (vAway.lengthSq() < 1e-6) vAway.set(0, 1, 0);
      m.position.addScaledVector(vAway.normalize(), away * REACH2 * m.userData.reach);
    }
    if (spread > 1e-3) m.position.addScaledVector(vAway.copy(m.geometry.boundingSphere.center).sub(st2.c), spread * SPREAD);
  }
  const holoList = [];
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const k = 1 - Math.exp(-dt * 9);
    openBlend += ((state.zoomOpen ? 1 : 0) - openBlend) * k;
    if (Math.abs(openBlend - (state.zoomOpen ? 1 : 0)) < 1e-3) openBlend = state.zoomOpen ? 1 : 0;
    // yakınlaşınca açma: kademe sınırları (lv) ve 2. kademenin odağı
    const fit0 = fitDistance();
    if (!deepNeed) Object.values(R).forEach((r) => {
      if (r.kind === 'deep' && !DEEP_FRAME_SKIP.has(r.id) && !(r.data && r.data.parent)) r.meshes.forEach((m) => {
        const b = m.geometry.boundingSphere;
        deepNeed = Math.max(deepNeed, b.center.distanceTo(BRAIN_CENTER) + b.radius);
      });
    });
    const s2 = stage2(state.selected);
    const deepT = Math.log(fit0 / THREE.MathUtils.clamp(frameDist(0.85 * deepNeed), 0.55 * fit0, 0.85 * fit0));
    const famT = s2.on ? Math.max(deepT + 0.15, Math.log(fit0 / THREE.MathUtils.clamp(frameDist(0.8 * st2.r), 0.06 * fit0, fit0)))
      : deepT + (OPEN_SPAN2 - OPEN_SPAN);
    lv.deep += (deepT - lv.deep) * k;
    lv.fam += (famT - lv.fam) * k;
    const navS0 = Math.log(fit0 / nav.position.distanceTo(controls.target));
    const p2 = s2.on ? THREE.MathUtils.smoothstep(navS0, OPEN_SPAN + 0.03, OPEN_SPAN2) * openBlend : 0;
    const goal = vTmp.copy(BRAIN_CENTER).lerp(st2.c, p2);
    focusC.lerp(goal, k);
    controls.minDistance = Math.min(1.4, navDistance(1.4));     // açılma kipinde de en fazla aynı yakınlığa inilir
    stepTween(now);
    if (!tween) {
      vSync.copy(focusC).sub(controls.target);      // bakış merkezi kayarken kamera da aynı kadar kayar (yön ve uzaklık korunur)
      if (vSync.lengthSq() > 1e-12) { controls.target.add(vSync); nav.position.add(vSync); }
      controls.update();
    }
    syncCamera();
    if (Math.abs(vo.tx - vo.x) + Math.abs(vo.ty - vo.y) > 0.3) {
      vo.x += (vo.tx - vo.x) * k; vo.y += (vo.ty - vo.y) * k;
      applyViewOffset();
    }
    viewDir.copy(camera.position).sub(controls.target).normalize();
    // yakınlaşınca açılma: tekerleğin ilk kısmında (gezinme uzaklığı fit → fit/2) 0 → 1
    const navS = Math.log(fitDistance() / nav.position.distanceTo(controls.target));
    const zoomOpen = state.zoomOpen ? THREE.MathUtils.smoothstep(navS, 0.03, OPEN_SPAN) : 0;
    Object.values(R).forEach((r) => {
      const u = r.mat.userData.u;
      if (r.holo || r.ribHolo) [r.meshes, r.rib || []].forEach((list) => list.forEach((m) => { m.userData.camD = m.geometry.boundingSphere.center.distanceToSquared(camera.position); }));
      if (r.colT) r.mat.color.lerp(r.colT, k);
      // odaktaki yapı (seçili ya da küme çekirdeği) dışındaki korteks ve beyincik açılır ve hayalete döner
      const layer = r.kind === 'cortex' || r.kind === 'cereb';
      r.open += ((layer && r.selT < 0.5 ? zoomOpen : 0) - r.open) * k;
      if (r.open < 1e-4) r.open = 0;
      // 2. kademe: seçim ve ailesi dışındaki derin yapılar uzaklaşır, aile çekirdekleri aralanır
      const inFam = s2.on && (r.id === state.selected || (s2.fam && (r.id === s2.fam || (r.data && r.data.parent === s2.fam))));
      const awayT = s2.on && r.kind === 'deep' && !inFam ? p2 : 0;
      const spreadT = s2.fam && r.data && r.data.parent === s2.fam ? p2 : 0;
      r.away = (r.away || 0) + (awayT - (r.away || 0)) * k;
      r.spread = (r.spread || 0) + (spreadT - (r.spread || 0)) * k;
      if (r.away < 1e-4) r.away = 0;
      if (r.spread < 1e-4) r.spread = 0;
      // yakınlaşınca açmada korteks açılarak, öteki derin yapılar uzaklaşarak söner (hayalet kalmaz)
      r.vanish = Math.max(THREE.MathUtils.smoothstep(r.open, 0.45, 0.95), THREE.MathUtils.smoothstep(r.away, 0.3, 0.9));
      r.gEff = Math.max(r.ghostT, Math.min(1, r.open * 1.6));
      u.uGhost.value += (r.gEff - u.uGhost.value) * k;
      // açılan hologram parçası ve kümenin yalnızca ilişkili bölgeleri kendi renginde (gri hayalet değil)
      u.uTint.value += (Math.max(r.tintT || 0, Math.min(1, r.open * 1.2)) * 0.85 - u.uTint.value) * k;
      u.uGhostAlpha.value = r.alphaBase + (0.46 - r.alphaBase) * Math.min(1, r.open);   // açılınca daha belirgin hologram
      u.uSel.value += (r.selT - u.uSel.value) * k;
      u.uHot.value += ((r.hotT || 0) * (0.25 + 0.75 * Math.pow(0.5 + 0.5 * Math.sin(now * 0.0042), 2)) - u.uHot.value) * k;
      u.uCold.value += ((r.coldT || 0) * (0.3 + 0.5 * (0.5 + 0.5 * Math.sin(now * 0.0021))) - u.uCold.value) * k;   // azalmış etkinlik: yavaş mavi nabız
      u.uNetMix.value += ((r.netT || 0) - u.uNetMix.value) * k;
      u.uZone.value += ((r.zoneT || 0) - u.uZone.value) * k;
      u.uSideGray.value += ((r.sideGrayT || 0) - u.uSideGray.value) * k;
      u.uHover.value += ((r.hoverT && r.ghostT < 0.5 ? 1 : r.hoverT * 0.6) - u.uHover.value) * k;
      // saçılma: dışa doğru hızlı başlayıp yavaşlayan hareket, yolun ortasında sönme
      r.burst += (r.burstT - r.burst) * (1 - Math.exp(-dt * (r.burstT ? 2.3 : 3.2)));
      if (Math.abs(r.burstT - r.burst) < 1e-3) r.burst = r.burstT;
      const b = r.burst, fade = Math.min(1 - THREE.MathUtils.smoothstep(b, 0.08, 0.55), 1 - r.vanish);
      u.uFade.value = fade;
      const g = u.uGhost.value;
      r.mat.transparent = g > 0.002 || fade < 0.999;
      r.mat.depthWrite = g < 0.5 && fade > 0.6;
      const fly = state.cortexMode === 'sacil' ? b : 0;
      [r.meshes, r.vols, r.rib || []].forEach((list) => list.forEach((m) => {
        m.renderOrder = g > 0.5 || fade < 0.999 ? 2 : 0;
        m.visible = !!m.userData.want && fade > 0.01;
        displace(m, fly, r.open, r.away, r.spread);
        if ((r.holo || r.ribHolo) && m.visible && (!m.userData.rib || r.ribHolo)) holoList.push(m);
        else if (m.userData.pre) m.userData.pre.visible = false;
      }));
    });
    // hologram düğümleri uzaktan yakına: her biri önce derinlik, sonra renk (yolaklardan önce; içindeki yollar örtülü geçişle görünür)
    holoList.sort((a, b) => b.userData.camD - a.userData.camD);
    holoList.forEach((m, i) => {
      const pre = prepassOf(m), r = R[m.userData.id];
      pre.material = r && r.grow ? PRE_GROW : PRE_MAT;
      pre.visible = true; pre.renderOrder = 2.5 + i * 0.002; m.renderOrder = 2.5 + i * 0.002 + 0.001;
    });
    holoList.length = 0;
    // görünmez seçim kabukları açılan parçalarla birlikte kayar (sahnede olmadıkları için matris elle güncellenir)
    pickMeshes.forEach((m) => {
      if (m.parent) return;
      const r = R[m.userData.id];
      if (!r) return;
      const before = m.position.lengthSq();
      displace(m, 0, r.open, r.away, r.spread);
      if (before > 0 || m.position.lengthSq() > 0) m.updateMatrixWorld();
    });
    if (hoverXY && !down && now - lastPick > 45) {
      lastPick = now;
      const rh = routeAt(hoverXY[0], hoverXY[1], 7);      // canlı yolun üzerindeyse yol öne çıkar, yapı balonu yerine yolun adı
      setRouteHover(rh);
      if (rh) { setHover(null); showRouteTip(rh, hoverXY[0], hoverXY[1]); }
      else setHover(pickAt(hoverXY[0], hoverXY[1]), hoverXY[0], hoverXY[1]);
    }
    updateOrient();
    updatePings();
    if (compactMQ.matches) updateDepthBtn();
    if (narrowMQ.matches) {         // çekmece tutamağı kartın üst kenarında (kart yüksekliği geçişle değişir)
      const ir = infoEl.getBoundingClientRect();
      if (Math.abs(ir.top - sheetGripTop) > 0.5) { sheetGripTop = ir.top; sheetGrip.style.top = ir.top + 'px'; }
    }
    updateFlows(dt);
    updateMarkers(dt, now);
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  // dizin beynin üstündeyken (dar masaüstü) beyne dokunmak dizini kapatır
  canvas.addEventListener('pointerdown', () => {
    if (!compactMQ.matches && panels.index && drawerOverlay() && !mriIsOpen) setPanels({ index: false });
  });

  /* ---------- başlat ---------- */
  if (!DV) document.querySelectorAll('[data-ltab="sys"],[data-ltab="path"]').forEach((b) => { b.hidden = true; });
  if (!TANI_LIST.length) document.querySelectorAll('[data-ltab="tani"]').forEach((b) => { b.hidden = true; });
  setLtab('regions');
  buildList('');
  renderIntro();
  layout();
  setPanels({});
  nav.position.copy(BRAIN_CENTER).addScaledVector(new THREE.Vector3().fromArray(VIEWS.start).normalize(), fitDistance() * START_ZOOM);
  nav.lookAt(BRAIN_CENTER);
  const loadBar = $('#loadbar'), loadPct = $('#loadpct');
  BrainModel.load(THREE, undefined, (f) => {
    loadBar.style.width = (100 * f).toFixed(1) + '%';
    loadPct.textContent = f >= 1 ? '' : '%' + Math.round(100 * f);
    if (f >= 1) { loadBar.style.transition = 'none'; loading.querySelector('span').textContent = t('Model kuruluyor…'); }
  }).then((parts) => {
    build(parts);
    layout();
    nav.position.copy(BRAIN_CENTER).addScaledVector(new THREE.Vector3().fromArray(VIEWS.start).normalize(), fitDistance() * START_ZOOM);
    nav.lookAt(BRAIN_CENTER);
    built = true;
    loading.classList.add('done');
    setTimeout(firstTip, 900);
    requestAnimationFrame(frame);
    // korteks bölge hacimleri ayrı pakette, arka planda gelir; o zamana kadar seçili bölge yüzeyiyle görünür
    BrainModel.loadExtra(THREE, 'vol').then((vols) => { vols.forEach(addPart); applyState(); })
      .catch((e) => console.warn(t('Bölge hacimleri yüklenemedi:'), e));
    applyHash();
    // atlas açıkken adres çapası değişirse (ör. #nt-da → #nt-5ht; bağlantı ya da adres çubuğu) yeni çapa uygulanır (2026-10-13)
    window.addEventListener('hashchange', () => { if (decodeURIComponent((location.hash || '').slice(1)) !== hashNow) applyHash(); });
  }).catch((err) => {
    loading.textContent = t('Model yüklenemedi (') + err.message + t('). Sayfayı yenileyin.');
    throw err;
  });
  function applyHash() {
    const h = decodeURIComponent((location.hash || '').slice(1));
    hashNow = h;
    if (DATA[h]) select(h, { fly: true });
    else if (h.startsWith('ag-') && NETS[h.slice(3)]) selectSet('net', h.slice(3));
    else if (h.startsWith('nt-') && NTS[h.slice(3)]) selectSet('nt', h.slice(3));
    else if (h.startsWith('ilac-') && ILAC[h.slice(5)]) selectSet('ilac', h.slice(5));
    else if (h.startsWith('tani-') && TANI[h.slice(5)]) selectSet('tani', h.slice(5));
    else if (h === 'mr') openMRI(true);                       // tanıtım sayfasındaki bağlantılar için
    else if (h === 'derin' && !state.xray) $('#xray').click();
    else if (DV && h.startsWith('sistem-')) {
      const s = DV.systems.find((x) => 'sistem-' + x.slug === h);
      if (s) selectSet('sys', s.id);
    } else if (DV && h.startsWith('yolak-') && PATH[h.slice(6)]) selectSet('path', h.slice(6));
  }
})();
