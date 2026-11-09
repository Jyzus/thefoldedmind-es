/* Canlı yolaklar ve nörotransmitter sistemleri.
   Akışlar şematiktir: uçlar modeldeki yapıların merkezleri, aradaki duraklar ak madde içinden geçen yaklaşık MNI
   noktalarıdır (mm; x mutlak değer, taraf kodda işaretlenir: sağ +x). Gerçek lif demeti (traktografi) değildir.
   ROUTE: { from, to, chem, via?, inh?, sides?, lbl? }
     from/to : bölge kimliği ya da '@nokta' (POINTS); via: MNI noktaları ya da '#zincir' (CHAINS)
     chem 'hor' : kanla taşınan hormon; modelin dışından geçer, sinir yolu gibi çözülmez. kan: tüpün ortasındaki etiket
     zf/zt   : uç bir alt alana bağlı (tools/yol_cozucu.py → ALAN; ör. mPFC içinde vmPFC). Geometri web/data/yol_geo.js'te; rota değişince araç yeniden çalıştırılır
     inh     : ketleyici (parçacıklar halka biçiminde)
     sides   : ['L','R'] (varsayılan) ya da ['M'] (tek, orta hat) ya da ['R'] (yalnız sağ)
   SETS anahtarları: 'sys:<Panksepp>', 'path:<kitap yolağı>', 'nt:<nörotransmitter>'.
   Kaynaklar: bölge kartlarındaki çalışmalar ve klasik nöroanatomi; ayrıntı docs/bilgi/yolaklar.md. */
window.FLOWDATA = (function () {
  const CHEM = {
    da: { name: 'Dopamin', color: '#f6c344', nt: 'da' },
    ne: { name: 'Noradrenalin', color: '#ff7a2f', nt: 'ne' },
    '5ht': { name: 'Serotonin', color: '#3ad17a', nt: '5ht' },
    ach: { name: 'Asetilkolin', color: '#22c7d6', nt: 'ach' },
    his: { name: 'Histamin', color: '#b8e04a', nt: 'his' },
    orx: { name: 'Oreksin', color: '#d26cf0', nt: 'orx' },
    glu: { name: 'Glutamat', color: '#4b8dff', nt: 'glu' },
    gaba: { name: 'GABA', color: '#9b8cff', nt: 'gaba' },
    oxt: { name: 'Oksitosin / vazopressin', color: '#ff6fb0', path: 'oxt' },
    crf: { name: 'CRF (stres peptidi)', color: '#e0304e', path: 'hpa' },
    opi: { name: 'Endojen opioidler', color: '#c9a46b', path: 'opioid' },
    sp: { name: 'P maddesi', color: '#ff4f4f' },
    hor: { name: 'Hormon (kan yoluyla)', color: '#b7b7c9' }
  };
  // adlandırılmış noktalar (MNI mm; x mutlak)
  const POINTS = {
    pit: { mni: [0, 2, -32], name: 'Hipofiz' },                  // modelde bez (seçilebilir alt yapı: pit); yol sapın içinden iner
    body: { mni: [0, -46, -75], name: 'Beden (omurilik ve organlar)' },   // kapı: medullanın alt ucu, omurilik modelde yok
    adrenal: { mni: [0, -10, -88], name: 'Adrenal bez (kanla)' }
  };
  // sık kullanılan geçiş yolları (sağ taraf, MNI)
  const CHAINS = {
    stria: [[27, -11, -17], [30, -22, -13], [30, -33, -7], [27, -37, 2], [22, -33, 11], [17, -24, 16], [13, -12, 15], [9, -2, 8]],
    vaf: [[16, -3, -14], [9, -4, -12]],                       // ventral amigdalofugal yol: amigdala → hipotalamus
    vafr: [[9, -4, -12], [16, -3, -14]],
    mfb: [[6, -8, -11], [7, 6, -11]],                         // medial önbeyin demeti (orta beyin → ön beyin)
    pfcm: [[5, 22, -10], [6, 40, -3], [7, 50, 9]],             // ön beyinden mPFC'ye (korpus kallozum dizinin önünden)
    pfcl: [[5, 22, -10], [10, 38, 0], [20, 40, 14], [32, 38, 26]],
    pfcv: [[5, 22, -10], [6, 40, -7]],                         // ön beyinden vmPFC'ye (korpus kallozum dizinin altından)
    accw: [[5, 22, -10], [5, 30, 4]],
    hpag: [[3, -14, -10], [3, -22, -9]],                      // hipotalamus → PAG
    dnb: [[5, -28, -14], [5, -16, -8], [7, -4, -9]],           // dorsal noradrenerjik demet / rafe çıkışı
    cing: [[7, 22, 2], [8, 22, 26], [8, -8, 38], [9, -40, 32]],  // singulum boyunca arkaya
    hipw: [[18, -8, -16]],
    amyw: [[16, -4, -16]],
    cbw: [[8, -46, -26]],                                     // üst serebellar pedünkül
    spin: [[4, -42, -40], [3, -44, -58]],                     // omuriliğe iniş
    unc: [[20, 18, -18], [28, 6, -22]],                       // unsinat fasikül: OFC/mPFC → amigdala
    uncr: [[28, 6, -22], [20, 18, -18]],
    nig: [[16, -10, -4]],                                     // SNc → striatum
    vag: [[6, -42, -38]],                                     // vagus kökü → NTS → parabrakial
    pba: [[10, -24, -14], [18, -8, -16]],
    pbh: [[6, -24, -14], [4, -12, -10]],
    pbi: [[8, -24, -10], [12, -18, 0], [30, -12, 8]],          // parabrakial → talamus (VMb) → insula
    fornix: [[3, 2, 12], [8, -14, 20], [20, -30, 10]],
    bfc: [[14, 16, 4], [12, 30, 18]],
    bfp: [[18, -6, 20], [26, -30, 30]],
    symp: [[4, -20, -20], [4, -40, -46]],
    acth: [[0, 8, -50]]
  };
  const R = (from, to, chem, o) => Object.assign({ from, to, chem }, o || {});

  const SETS = {
    // ---------------------------------------------------------------- Panksepp sistemleri (kitap, Giriş tablosu)
    'sys:SEEKING': { routes: [
      R('vta', 'nacc', 'da', { via: ['#mfb'] }), R('vta', 'mpfc', 'da', { zt: 'vmpfc', via: ['#mfb', '#pfcv'] }),
      R('mpfc', 'nacc', 'glu', { zf: 'vmpfc', via: [[8, 40, -8], [11, 28, -8]] }), R('hypothalamus', 'vta', 'orx', { via: [[7, -6, -12]] })] },
    'sys:RAGE': { routes: [
      R('amygdala', 'bnst', 'sp', { via: ['#stria'] }), R('bnst', 'hypothalamus', 'glu', { via: [[5, 0, -6]] }),
      R('hypothalamus', 'pag', 'glu', { via: ['#hpag'], sides: ['M'] }),
      R('raphe', 'hypothalamus', '5ht', { via: [[3, -18, -12]], inh: true, sides: ['M'] })],
      note: 'Serotonin bu sistemi frenler; ketleyici akışlar halka biçimindedir.' },
    'sys:FEAR': { routes: [
      R('amygdala', 'hypothalamus', 'glu', { via: ['#vaf'] }), R('hypothalamus', 'pag', 'glu', { via: ['#hpag'], sides: ['M'] }),
      R('amygdala', 'lc', 'crf', { via: [[18, -14, -20], [8, -30, -22]] }), R('hippocampus', 'amygdala', 'glu', { via: [[26, -14, -18]] }),
      R('amygdala', 'bnst', 'crf', { via: ['#stria'] })] },
    'sys:LUST': { routes: [
      R('amygdala', 'bnst', 'oxt', { via: ['#stria'] }), R('bnst', 'hypothalamus', 'oxt', { via: [[5, 0, -6]] }),
      R('hypothalamus', 'pag', 'glu', { via: ['#hpag'], sides: ['M'] }), R('hypothalamus', 'vta', 'da', { via: [[4, -8, -12]], sides: ['M'] })],
      note: 'Gonadal steroidler (testosteron, östrojen) bu çekirdeklerdeki reseptörler üzerinden sistemi açar.' },
    'sys:CARE': { routes: [
      R('hypothalamus', 'vta', 'oxt', { via: [[4, -8, -12]], sides: ['M'] }), R('vta', 'nacc', 'da', { via: ['#mfb'] }),
      R('hypothalamus', 'amygdala', 'oxt', { via: ['#vafr'] }), R('acc', 'pag', 'glu', { via: [[5, 20, -4], [4, 0, -8], '#hpag'] })] },
    'sys:PANIC/GRIEF': { routes: [
      R('acc', 'thalamus', 'glu', { via: [[8, 10, 22]] }), R('thalamus', 'pag', 'glu', { via: [[5, -22, -2]] }),
      R('bnst', 'pag', 'crf', { via: [[5, -6, -8], '#hpag'] }),
      R('hypothalamus', 'pag', 'opi', { via: ['#hpag'], inh: true, sides: ['M'] })],
      note: 'μ-opioidler, oksitosin ve prolaktin ayrılık acısını yatıştırır (halka: ketleyici).' },
    'sys:PLAY': { routes: [
      R('thalamus', 'pag', 'glu', { via: [[5, -22, -2]] }), R('pag', 'thalamus', 'ach', { via: [[6, -24, 2]] }),
      R('vta', 'nacc', 'da', { via: ['#mfb'] }), R('hypothalamus', 'nacc', 'opi', { via: [[6, 4, -10]] })] },

    // ---------------------------------------------------------------- kitaptaki yolaklar (Bölüm 20)
    'path:mezo': { routes: [
      R('vta', 'nacc', 'da', { via: ['#mfb'] }), R('vta', 'mpfc', 'da', { zt: 'vmpfc', via: ['#mfb', '#pfcv'] }),
      R('vta', 'dlpfc', 'da', { via: ['#mfb', '#pfcl'] }), R('mpfc', 'nacc', 'glu', { zf: 'vmpfc', via: [[8, 40, -8], [11, 28, -8]] }),
      R('mpfc', 'vta', 'glu', { zf: 'vmpfc', via: [[8, 30, -6], [6, 10, -12], [5, -6, -12]] })] },
    'path:vagal_aff': { routes: [
      R('vagal', 'pbc', 'glu', { via: ['#vag'] }), R('pbc', 'amygdala', 'glu', { via: ['#pba'] }),
      R('pbc', 'hypothalamus', 'glu', { via: ['#pbh'] }), R('pbc', 'insula', 'glu', { via: ['#pbi'] })],
      note: 'Bedenin durumu (kalp, mide, solunum) vagus → NTS → parabrakial üzerinden duyguya ve interosepsiyona ulaşır.' },
    'path:hpa': { routes: [
      R('amygdala', 'hypothalamus', 'glu', { via: ['#vaf'] }), R('hypothalamus', '@pit', 'crf', { sides: ['M'] }),
      R('@pit', '@adrenal', 'hor', { via: ['#acth'], sides: ['M'], kan: 'ACTH (kanla)', lbl: 'ACTH (kanla) → adrenal korteks' }),
      R('@adrenal', 'hippocampus', 'hor', { via: [[20, -20, -50], [28, -24, -24]], inh: true, kan: 'Kortizol (kanla)', lbl: 'Kortizol → hipokampus (negatif geri bildirim)' }),
      R('@adrenal', 'hypothalamus', 'hor', { via: [[4, -6, -50]], inh: true, sides: ['M'], kan: 'Kortizol (kanla)', lbl: 'Kortizol → hipotalamus (negatif geri bildirim)' }),
      R('mpfc', 'hypothalamus', 'glu', { via: [[6, 30, -10], [5, 10, -12]], inh: true })],
      note: 'Hipokampus ve mPFC ekseni frenler (halka); kortizol kendi salınımını geri bildirimle durdurur.' },
    'path:pag_col': { routes: [
      R('amygdala', 'pag', 'gaba', { via: ['#vaf', '#hpag'] }), R('hypothalamus', 'pag', 'glu', { via: ['#hpag'], sides: ['M'] }),
      R('pag', 'medulla', 'glu', { via: [[3, -34, -24]], sides: ['M'], lbl: 'PAG → RVM (inen ağrı ketlemesi)' }),
      R('medulla', '@body', '5ht', { via: ['#spin'], sides: ['M'], inh: true, lbl: 'RVM → omurilik (ağrıyı frenler)' }),
      R('pag', 'vagal', 'glu', { via: [[5, -36, -30]], lbl: 'Ventrolateral PAG → vagus (donma, bradikardi)' })] },
    'path:oxt': { routes: [
      R('hypothalamus', '@pit', 'oxt', { sides: ['M'], lbl: 'Hipotalamus → arka hipofiz (kana salınım)' }),
      R('hypothalamus', 'amygdala', 'oxt', { via: ['#vafr'] }), R('hypothalamus', 'nacc', 'oxt', { via: [[6, 4, -10]] }),
      R('hypothalamus', 'mpfc', 'oxt', { via: [[5, 8, -10], '#pfcm'] }), R('hypothalamus', 'vagal', 'oxt', { via: [[4, -20, -20], [5, -36, -36]] })] },
    'path:opioid': { routes: [
      R('hypothalamus', 'nacc', 'opi', { via: [[6, 4, -10]] }), R('hypothalamus', 'pag', 'opi', { via: ['#hpag'], sides: ['M'] }),
      R('hypothalamus', 'amygdala', 'opi', { via: ['#vafr'] }), R('nacc', 'vp', 'opi', { via: [[12, 4, -8]] })],
      note: 'Arkuat çekirdekteki β-endorfin nöronları ve akumbens–ventral pallidumdaki hedonik "sıcak noktalar".' },
    'path:schore': { routes: [
      R('ofc', 'amygdala', 'glu', { via: ['#unc'], sides: ['R'] }), R('amygdala', 'ofc', 'glu', { via: ['#uncr'], sides: ['R'] }),
      R('insula', 'ofc', 'glu', { via: [[30, 14, -10]], sides: ['R'] }), R('acc', 'amygdala', 'glu', { via: [[10, 20, -8], '#unc'], sides: ['R'] })],
      note: 'Kurama göre sağ yarıkürenin orbitofrontal-limbik devresi; yalnız sağ taraf çizilir.' },
    'path:vagal_hier': { routes: [
      R('vagal', '@body', 'ach', { via: [[10, -44, -56]], lbl: 'Ventral vagal (nükleus ambiguus) → kalp: sakin bağlantı' }),
      R('hypothalamus', '@body', 'ne', { via: ['#symp'], sides: ['M'], lbl: 'Sempatik: hipotalamus → omurilik → organlar (savaş/kaç)' }),
      R('pag', 'vagal', 'glu', { via: [[5, -36, -30]], lbl: 'PAG → dorsal vagal: donma ve çöküş' })],
      note: 'Polivagal kuramın anlatım modeli; temel öncülleri tartışmalıdır (vagal çekirdekler kartı).' },
    'path:amy_hip': { routes: [
      R('hippocampus', 'amygdala', 'glu', { via: [[26, -14, -18]] }), R('amygdala', 'hippocampus', 'glu', { via: [[24, -10, -22]] }),
      R('lc', 'amygdala', 'ne', { via: ['#dnb', '#amyw'] }), R('lc', 'hippocampus', 'ne', { via: ['#dnb', '#hipw'] })],
      note: 'Duygusal anıların pekişmesinde noradrenalin (β-reseptör) amigdala ve hipokampusa birlikte etki eder.' },
    'path:frontolimbic': { routes: [
      R('mpfc', 'amygdala', 'glu', { zf: 'vmpfc', via: ['#unc'], inh: true, lbl: 'vmPFC → amigdala (interkalat hücreler üzerinden ketleme)' }),
      R('ofc', 'amygdala', 'glu', { via: ['#unc'], inh: true }), R('amygdala', 'mpfc', 'glu', { zt: 'vmpfc', via: ['#uncr'] }),
      R('mpfc', 'hypothalamus', 'glu', { zf: 'vmpfc', via: [[6, 30, -10], [5, 10, -12]], inh: true })],
      note: 'Halkalar yukarıdan aşağı ketleyici düzenlemeyi gösterir: glutamaterjik lifler hedefte ketleyici ara nöronları uyarır.' },

    // ---------------------------------------------------------------- nörotransmitter sistemleri
    'nt:da': { holo: true, routes: [
      R('snc', 'putamen', 'da', { via: ['#nig'] }), R('snc', 'caudate', 'da', { via: ['#nig', [14, 4, 8]] }),
      R('vta', 'nacc', 'da', { via: ['#mfb'] }), R('vta', 'amygdala', 'da', { via: [[8, -8, -12], '#amyw'] }),
      R('vta', 'hippocampus', 'da', { via: [[10, -14, -12], '#hipw'] }),
      R('vta', 'mpfc', 'da', { via: ['#mfb', '#pfcm'] }), R('vta', 'dlpfc', 'da', { via: ['#mfb', '#pfcl'] }),
      R('vta', 'acc', 'da', { via: ['#mfb', '#accw'] }), R('hy_arc', '@pit', 'da', { sides: ['M'], inh: true, lbl: 'Arkuat → hipofiz (prolaktini frenler)' })],
      groups: [['Nigrostriatal', ['putamen', 'caudate']], ['Mezolimbik', ['nacc', 'amygdala', 'hippocampus']],
        ['Mezokortikal', ['mpfc', 'dlpfc', 'acc']], ['Tuberoinfundibular', ['@pit']]] },
    'nt:5ht': { holo: true, routes: [
      R('raphe', 'mpfc', '5ht', { via: ['#dnb', '#mfb', '#pfcm'] }), R('raphe', 'dlpfc', '5ht', { via: ['#dnb', '#mfb', '#pfcl'] }),
      R('raphe', 'acc', '5ht', { via: ['#dnb', '#mfb', '#accw'] }), R('raphe', 'pcc', '5ht', { via: ['#dnb', '#mfb', '#cing'] }),
      R('raphe', 'hippocampus', '5ht', { via: ['#dnb', '#hipw'] }), R('raphe', 'amygdala', '5ht', { via: ['#dnb', '#amyw'] }),
      R('raphe', 'putamen', '5ht', { via: ['#dnb', [16, 0, -4]] }), R('raphe', 'thalamus', '5ht', { via: [[4, -22, -8]] }),
      R('raphe', 'hypothalamus', '5ht', { via: [[3, -18, -12]], sides: ['M'] }), R('raphe', 'cerebellum', '5ht', { via: ['#cbw'] }),
      R('raphe', '@body', '5ht', { via: ['#spin'], sides: ['M'], lbl: 'Rafe → omurilik (ağrı ve motor)' })] },
    'nt:ne': { holo: true, routes: [
      R('lc', 'mpfc', 'ne', { via: ['#dnb', '#mfb', '#pfcm'] }), R('lc', 'dlpfc', 'ne', { via: ['#dnb', '#mfb', '#pfcl'] }),
      R('lc', 'somato', 'ne', { via: ['#dnb', '#mfb', [7, 22, 2], [8, 22, 26], [20, -10, 50]] }),
      R('lc', 'hippocampus', 'ne', { via: ['#dnb', '#hipw'] }), R('lc', 'amygdala', 'ne', { via: ['#dnb', '#amyw'] }),
      R('lc', 'thalamus', 'ne', { via: [[5, -22, -6]] }), R('lc', 'hypothalamus', 'ne', { via: [[5, -20, -14]] }),
      R('lc', 'cerebellum', 'ne', { via: ['#cbw'] }), R('lc', '@body', 'ne', { via: ['#spin'], lbl: 'LC → omurilik (inen ağrı ketlemesi)' })] },
    'nt:ach': { holo: true, routes: [
      R('nbm', 'mpfc', 'ach', { via: [[10, 20, -4]] }), R('nbm', 'dlpfc', 'ach', { via: ['#bfc'] }),
      R('nbm', 'ipl', 'ach', { via: ['#bfp'] }), R('nbm', 'occipital', 'ach', { via: [[18, -6, 20], [20, -50, 24]] }),
      R('dbb', 'hippocampus', 'ach', { via: ['#fornix'] }),
      R('ppn', 'thalamus', 'ach', { via: [[8, -22, -4]] }), R('ppn', 'vta', 'ach', { via: [[6, -22, -14]] }), R('ppn', 'snc', 'ach', { via: [[10, -22, -12]] })],
      groups: [['Bazal önbeyin → korteks', ['mpfc', 'dlpfc', 'ipl', 'occipital']], ['Septum ve diyagonal bant → hipokampus', ['hippocampus']],
        ['Beyin sapı (PPN/LDT)', ['thalamus', 'vta', 'snc']]] },
    'nt:his': { holo: true, routes: [
      R('hy_tm', 'mpfc', 'his', { via: [[5, 8, -10], '#pfcm'] }), R('hy_tm', 'dlpfc', 'his', { via: [[5, 8, -10], '#pfcl'] }),
      R('hy_tm', 'spl', 'his', { via: [[6, -8, 0], [10, -14, 30], [18, -50, 50]] }), R('hy_tm', 'thalamus', 'his', { via: [[6, -12, -2]] }),
      R('hy_tm', 'hippocampus', 'his', { via: ['#hipw'] }), R('hy_tm', 'amygdala', 'his', { via: ['#vafr'] })] },
    'nt:orx': { holo: true, routes: [
      R('hy_lh', 'lc', 'orx', { via: [[6, -16, -12], [5, -28, -18]] }), R('hy_lh', 'raphe', 'orx', { via: [[3, -18, -12]] }),
      R('hy_lh', 'vta', 'orx', { via: [[4, -8, -12]] }), R('hy_lh', 'ppn', 'orx', { via: [[6, -18, -10]] }),
      R('hy_lh', 'mpfc', 'orx', { via: [[5, 8, -10], '#pfcm'] })],
      note: 'Oreksin uyanıklık çekirdeklerini (LC, rafe, histamin, asetilkolin) birlikte açık tutar; kaybı narkolepsiye yol açar.' },
    // glutamat ve GABA her yerde: yerel devreler çizilmez, başlıca uzun projeksiyonlar örneklenir (docs/bilgi/nt-glu-gaba.md)
    'nt:glu': { holo: true, routes: [
      R('dlpfc', 'caudate', 'glu', { via: [[26, 24, 22], [16, 14, 14]] }), R('hippocampus', 'nacc', 'glu', { via: [[22, -10, -14], [12, 8, -8]] }),
      R('stn', 'gpi', 'glu', { via: [[14, -9, -6]] }),
      R('dlpfc', 'pons', 'glu', { via: [[22, 4, 14], [10, -22, -20]] }),
      R('pons', 'cb_crus1', 'glu', { cross: 'to', via: [[14, -40, -32, 't'], [24, -56, -33, 't']] }),
      R('cb_dentate', 'th_vld', 'glu', { cross: 'from', via: ['#cbw', [0, -32, -14], [12, -30, -2, 't']] }),
      R('th_vld', 'dlpfc', 'glu', { via: [[16, -6, 20], [26, 24, 28]] }),
      R('motor', '@body', 'glu', { via: [[24, -14, 16], [16, -18, -6], [9, -24, -26], [5, -36, -46]], lbl: 'Motor korteks → omurilik (kortikospinal yol)' })],
      note: 'Glutamat korteksin, talamusun ve hipokampusun ortak dilidir; burada başlıca örnekler çizilir: kortikostriatal, limbik, subtalamik, beyincik döngüsü ve kortikospinal yol. Köprü → beyincik ve dentat → talamus lifleri karşı tarafa geçer. Korteksler arası yollar çizilmez.' },
    // GABA: bazal gangliyon döngüsü korteksle birlikte (giriş ve dönüş glutamat; yön belli olsun: kullanıcı 2026-10-15 "putamenden mi korteksten mi
    // belli değil"), beyinciğin çıkışı, amigdala ve uyku; korteks ve hipokampusa uzanan GABA: bazal önbeyin ve medial septum
    'nt:gaba': { holo: true, routes: [
      R('motor', 'putamen', 'glu', { via: [[28, -10, 34], [26, -4, 14]] }),
      R('putamen', 'gpi', 'gaba', { via: [[21, -3, 0]], inh: true }), R('putamen', 'gpe', 'gaba', { via: [[22, -2, 2]], inh: true }),
      R('gpe', 'stn', 'gaba', { via: [[15, -8, -3]], inh: true }), R('gpi', 'th_va', 'gaba', { via: [[13, -6, 2]], inh: true }),
      R('th_va', 'premotor', 'glu', { via: [[14, -4, 20], [20, -2, 40]] }),
      R('cb_crus1', 'cb_dentate', 'gaba', { via: [[22, -64, -34]], inh: true }),
      R('amygdala', 'pag', 'gaba', { via: ['#vaf', '#hpag'], inh: true }),
      R('hypothalamus', 'lc', 'gaba', { via: [[6, -16, -12], [5, -28, -18]], inh: true }),
      R('nbm', 'dlpfc', 'gaba', { via: ['#bfc'], inh: true }), R('dbb', 'hippocampus', 'gaba', { via: ['#fornix'], inh: true })],
      note: 'Halkalar GABA (ketleyici), noktalar glutamat. Bazal gangliyon döngüsü korteksle birlikte çizilir: motor korteks → putamen (glutamat), putamen → GPi ve GPe → STN, GPi → VA talamus (GABA), talamus → premotor korteks (glutamat). Ayrıca Purkinje → dentat, santral amigdala → PAG, ventrolateral preoptik çekirdek (hipotalamus) → LC; bazal önbeyin ve medial septumdan korteks ve hipokampustaki ara nöronlara giden GABA lifleri. Yerel ara nöron devreleri çizilmez.' }
  };

  // nörotransmitter kartları (Yolaklar › Nörotransmitter yolakları; adlar "X yolakları": sekme Yolaklar, 3B'de yollar çizilir, kartın içeriği sistemin bütünü). core: kaynak çekirdekler, related: başlıca hedefler
  const NT = [
    { id: 'glu', name: 'Glutamat Yolakları', short: 'Glu', color: CHEM.glu.color, eng: 'Glutamate',
      summary: 'Beynin ana uyarıcı sinyali: korteks, talamus ve hipokampusun projeksiyon nöronları kullanır; öğrenme ve belleğin taşıyıcısı, ketaminin hedefi.',
      anatomy: [
        'Korteksin piramidal nöronları, talamusun aktarım nöronları, hipokampus, amigdalanın bazolateral çekirdeği, subtalamik çekirdek ve beyinciğin granül hücreleri glutamat kullanır. Beynin 86 milyar nöronunun yalnızca %19\'u beyin kabuğundadır; çoğu beyincikteki granül hücreleridir (Azevedo ve ark., 2009).',
        'Kortikostriatal yol: prefrontal ve motor korteks → kaudat, putamen ve akumbens; bazal gangliyon döngülerinin girişidir.',
        'Talamokortikal yol: talamus (MD, VA, VL) → prefrontal ve motor korteks; korteks de talamusa geri bağlanır.',
        'Limbik girdiler: hipokampus → akumbens (bağlam), amigdala → mPFC (duygusal değer).',
        'Subtalamik çekirdek → GPi (dolaylı yolun uyarıcı halkası); köprü → beyincik ve dentat → talamus (beyincik döngüsü).',
        'Korteksler arası uzun yollar (ör. arkuat fasikül: üst temporal → Broca) ve kortikospinal yol (motor korteks → omurilik). 3B\'de bu yolların yalnızca başlıca örnekleri çizilir.'
      ],
      functions: [
        'Hızlı uyarıcı iletim: duyudan harekete bilginin taşınması (AMPA reseptörleri).',
        'Öğrenme ve bellek: NMDA reseptörü eş zamanlı etkinliği algılar; uzun süreli güçlenme (LTP) belleğin hücresel modelidir (Bliss ve Collingridge, 1993). [B]',
        'Kortikostriatal girdi davranış seçimini ve alışkanlığı taşır; dopamin bu girdinin etkisini ayarlar.',
        'Fazlası zehirlidir (eksitotoksisite): inme, travma ve uzun nöbette nöron ölümüne katkıda bulunur (Choi, 1988). [B]'
      ],
      development: [
        'NMDA reseptörlerinde erken dönemde GluN2B alt birimi baskındır; olgunlaştıkça GluN2A artar ve sinaps daha hızlı çalışır (sıçan; Monyer ve ark., 1994). [B]',
        'Sinaps budaması: prefrontal korteksteki dendritik diken yoğunluğu çocuklukta erişkinin 2–3 katıdır, ergenlikte azalmaya başlar ve budama 20\'li yaşlar boyunca sürer (Petanjek ve ark., 2011). [B]'
      ],
      clinical: [
        'Anti-NMDA reseptör ensefaliti: 100 hastanın hepsi psikiyatrik belirti ya da bellek sorunuyla başvurdu (Dalmau ve ark., 2008); çocuklar olguların %40\'ı, %87,5\'inde ilk belirti davranış ya da kişilik değişikliği (Florance ve ark., 2009). Yeni başlayan psikoza nöbet, istemsiz hareket ya da bilinç değişikliği eşlik ediyorsa düşünülmelidir. [B]',
        'Şizofreni, NMDA hipofonksiyonu hipotezi: ketamin sağlıklı gönüllülerde şizofreninin pozitif ve negatif belirtilerine benzer bir tablo oluşturdu (Krystal ve ark., 1994). [B]',
        'OKB: tedavi almamış çocuklarda kaudatta glutamaterjik metabolitler (Glx) yüksekti, 12 haftalık paroksetinle düştü; düşüş belirtilerdeki azalmayla ilişkiliydi (11 çocuk; Rosenberg ve ark., 2000). [C]',
        'Depresyon: MRS meta-analizinde medial frontal kortekste glutamat + glutamin (Glx) düşük (Moriguchi ve ark., 2019). [A]',
        'Frajil X sendromu: hayvan modellerine dayanan mGluR5 antagonisti mavoglurant, ergen ve erişkin çalışmalarında birincil sonlanımda plasebodan ayrışmadı (Berry-Kravis ve ark., 2016). [B]'
      ],
      treatment: [
        'Ketamin (NMDA antagonisti): dirençli erişkin depresyonunda tek doz 2 saat içinde etki gösterdi, etki bir hafta sürdü (Zarate ve ark., 2006); burun spreyi esketamin dirençli erişkin depresyonunda FDA onaylı (2019). [A]',
        'Ergenlerde: tek doz ketamin 24. saatte aktif plasebodan (midazolam) üstündü (17 ergen; Dwyer ve ark., 2021); yakın intihar riski olan ergenlerde esketamin 24. saatte küçük farkla üstündü, intihar düşüncesinin şiddeti bütün gruplarda azaldı (147 ergen; Kosik-Gonzalez ve ark., 2026). Ergende onaylı değildir. [C]',
        'Hızlı etkinin olası düzeneği: prefrontal kortekste mTOR yolu üzerinden yeni sinaps oluşumu (sıçan; Li ve ark., 2010). [C]',
        'OKB\'de glutamatı hedefleyen ek tedaviler (memantin, N-asetilsistein, riluzol) araştırılıyor; kanıt sınırlıdır (Pittenger ve ark., 2011). [C]',
        'Glutamat üzerinden etkili öteki ilaçlar: lamotrijin (glutamat salınımını azaltır), memantin (NMDA antagonisti; Alzheimer), perampanel (AMPA antagonisti; epilepsi).'
      ],
      links: [
        'AMPA: hızlı uyarıcı akımı taşır; sinapsın gücü AMPA reseptörlerinin sayısıyla ayarlanır.',
        'NMDA: eş zamanlılık algılayıcısı; glutamat ile glisin ya da D-serin ister, magnezyum bloğu ancak hücre uyarılınca kalkar, kalsiyum girişi plastisiteyi başlatır. Ketamin, memantin ve fensiklidin kanalı kapatır.',
        'Kainat ve metabotropik reseptörler (mGluR1–8): daha yavaş, düzenleyici etki.',
        'Taşıyıcılar: veziküler VGLUT1 (korteks, hipokampus) ve VGLUT2 (talamus, beyin sapı). Salınan glutamatın çoğunu astrositler (EAAT2) geri alır ve glutamin olarak nörona geri verir (Danbolt, 2001).'
      ],
      core: ['dlpfc', 'motor', 'thalamus', 'hippocampus', 'stn'], related: ['caudate', 'nacc', 'gpi', 'pons', 'cb_crus1', 'cb_dentate', 'th_vld'] },
    { id: 'gaba', name: 'GABA Yolakları', short: 'GABA', color: CHEM.gaba.color, eng: 'GABA (γ-aminobutyric acid)',
      summary: 'Beynin ana frenleyici sinyali: çoğu yerel ara nöronlardadır, uzun yolları bazal gangliyon, beyincik ve amigdala çıkışlarıdır; benzodiazepinlerin ve alkolün hedefi.',
      anatomy: [
        'GABA nöronlarının çoğu yerel ara nörondur: korteks ve hipokampusta sayıca azınlıktadır ama çok çeşitlidir (parvalbümin, somatostatin, VIP içerenler) ve uyarıcı nöronların ne zaman ateşleneceğini ayarlar (Tremblay ve ark., 2016). Bu yerel devreler 3B\'de çizilmez.',
        'Bazal gangliyon: striatumun projeksiyon nöronları (orta dikenli nöronlar) GABAerjiktir. Doğrudan yol striatumdan GPi ve SNr\'ye, dolaylı yol GPe\'ye, oradan subtalamik çekirdeğe gider; GPi ve SNr talamusu sürekli frenler (Albin ve ark., 1989).',
        'Ödül döngüsü: akumbens → ventral pallidum → talamusun MD çekirdeği.',
        'Beyincik: Purkinje hücreleri beyincik korteksinin tek çıkışıdır ve derin çekirdekleri (dentat) frenler.',
        'Amigdalanın santral çekirdeği (çıkışı GABAerjik) → hipotalamus, PAG ve beyin sapı. Hipotalamusun ventrolateral preoptik çekirdeği (VLPO) uykuda LC\'yi, rafeyi ve tuberomamiller çekirdeği frenler. Talamusun retiküler çekirdeği ve VLPO modelde ayrı yapı değildir.',
        'Korteks ve hipokampusa uzanan GABA lifleri: medial septumun ve bazal önbeynin GABA nöronları oradaki ketleyici ara nöronları seçerek hedefler (ketlemenin ketlenmesi, ritimlerin düzenlenmesi) (Freund ve Antal, 1988; Freund ve Meskenaite, 1992). [B]'
      ],
      functions: [
        'Uyarılma ile ketlenme arasındaki dengeyi korur; ketleme yetersizse ağlar aşırı uyarılır, nöbet eşiği düşer.',
        'Zamanlama ve ritim: parvalbümin içeren hızlı ateşlenen ara nöronlar gama salınımlarını üretir (Cardin ve ark., 2009). [B]',
        'Davranış seçimi: bazal gangliyonun talamus üzerindeki sürekli frenini doğrudan yol kaldırır (hareketi serbest bırakır), dolaylı yol artırır (Albin ve ark., 1989). [B]',
        'Uyku: VLPO nöronları uykuda etkinleşir ve uyanıklık sistemlerini frenler (Sherin ve ark., 1996; Saper ve ark., 2005). [B]',
        'Donma: santral amigdalanın ketleyici yolu, PAG\'nin uyarıcı çıkışlarını üzerlerindeki frenden kurtararak donmayı başlatır (farede; Tovote ve ark., 2016). [C]'
      ],
      development: [
        'Gelişimin erken döneminde GABA uyarıcıdır: nöronun içindeki klor yüksektir; klorü dışarı atan taşıyıcı (KCC2) geç çıkınca GABA ketleyiciye döner (Ben-Ari, 2002). [B]',
        'Kritik dönemler: ketleyici devrelerin olgunlaşması duyusal kritik dönemi açar; farede benzodiazepin bu dönemi erken başlattı (Fagiolini ve Hensch, 2000; Hensch, 2005). [B]'
      ],
      clinical: [
        'Epilepsi: ketlemenin yetersizliği nöbete zemin hazırlar; birçok antiepileptik GABA sistemini güçlendirir.',
        'Şizofreni: DLPFC\'nin parvalbümin içeren ara nöronlarında GABA sentezi azalmıştır; çalışma belleği ve gama ritmi bozukluğuyla ilişkilendirilir (Lewis ve ark., 2005). [B]',
        'Otizm: uyarılma–ketlenme dengesizliği kuramsal bir modeldir (Rubenstein ve Merzenich, 2003). GABA\'nın ketleyici etkisini artırmayı hedefleyen bumetanid (NKCC1 blokörü) 2–17 yaşta iki faz 3 çalışmada plasebodan ayrışmadı (Fuentes ve ark., 2023). [A]',
        'Tourette: ölüm sonrası çalışmalarda kaudat ve putamende parvalbümin içeren ara nöronlar azalmış bulundu (Kalanithi ve ark., 2005; Kataoka ve ark., 2010). [C]',
        'Depresyon: MRS meta-analizinde GABA düzeyi düşük, en belirgin ön singulatta (Godfrey ve ark., 2018). [A]',
        'Benzodiazepin ve alkol GABA-A reseptörünü güçlendirir: birlikte kullanımda solunum baskılanır; uzun kullanımda tolerans ve bağımlılık gelişir, ani kesilmede nöbet riski vardır.'
      ],
      treatment: [
        'Status epileptikus: çocukta ilk basamak benzodiazepindir; damar içi lorazepam ve diazepam (düzey A), damar yolu yoksa rektal diazepam ya da kas içi, burun içi, yanak içi midazolam (düzey B) (Glauser ve ark., 2016). [A]',
        'Çocuk ve ergen anksiyetesinde kılavuz BDT ve SSRİ önerir; benzodiazepinler öneriler arasında değildir (Walter ve ark., 2020). [A]',
        'Vigabatrin (GABA\'yı yıkan enzimi ketler): infantil spazmlarda FDA onaylı (2009); yüksek doz daha etkili, tüberoz sklerozda yanıt daha hızlı (Elterman ve ark., 2001). Kalıcı görme alanı kaybı riski nedeniyle göz izlemi gerekir. [A]',
        'Nörosteroidler (sinaps dışı GABA-A): breksanolon iki faz 3 çalışmada doğum sonrası depresyonda etkili bulundu (Meltzer-Brody ve ark., 2018); breksanolon (2019) ve zuranolon (2023) erişkinde FDA onaylı. [A]',
        'Gabapentin ve pregabalin adlarına karşın GABA reseptörüne bağlanmaz; voltaja bağlı kalsiyum kanalının α2δ alt birimine bağlanır.'
      ],
      links: [
        'GABA-A: klor kanalı, hızlı ketleme. Benzodiazepinler α ile γ2 alt birimleri arasına bağlanır; fare genetiğine göre α1 uyku hali ve amneziden, α2 ve α3 kaygı gidermeden sorumludur (Rudolph ve Knoflach, 2011). Alkol, barbitüratlar, nörosteroidler ve genel anestezikler de bu reseptörü güçlendirir. [B]',
        'Sinaps dışı GABA-A (δ alt birimli): sürekli (tonik) ketleme; nörosteroidlerin hedefi.',
        'GABA-B: G proteinine bağlı, yavaş ketleme; baklofenin hedefi.',
        'Sentez ve temizleme: GABA glutamattan GAD enzimiyle (GAD65, GAD67) yapılır; GAT-1 geri alır (tiagabin bloke eder), GABA-transaminaz yıkar (vigabatrin ketler).',
        'Klor taşıyıcıları NKCC1 (içeri) ve KCC2 (dışarı) GABA\'nın uyarıcı mı ketleyici mi olacağını belirler; bumetanid NKCC1\'i bloke eder.'
      ],
      core: ['putamen', 'gpe', 'gpi', 'cb_crus1', 'amygdala', 'hypothalamus'], related: ['stn', 'th_va', 'cb_dentate', 'pag', 'lc', 'dlpfc', 'hippocampus', 'nbm', 'dbb'] },
    { id: 'da', name: 'Dopamin Yolakları', short: 'DA', color: CHEM.da.color, eng: 'Dopamine',
      summary: 'Motivasyonun, öğrenmenin ve hareketin sinyali: dört ana yolla yayılır; stimülanlar ve antipsikotiklerin ortak hedefi.',
      anatomy: [
        'Kaynaklar: ventral tegmental alan (VTA), substantia nigra pars kompakta (SNc), hipotalamusun arkuat çekirdeği.',
        'Nigrostriatal yol: SNc → kaudat ve putamen (hareket, alışkanlık).',
        'Mezolimbik yol: VTA → nukleus akumbens, amigdala, hipokampus (motivasyon, ödül öğrenmesi).',
        'Mezokortikal yol: VTA → prefrontal korteks ve ACC (çalışma belleği, bilişsel kontrol).',
        'Tuberoinfundibular yol: arkuat çekirdek → hipofiz; dopamin prolaktin salınımını frenler.'
      ],
      functions: [
        'Ödül tahmin hatası: beklenenden iyi sonuçta fazik dopamin artışı, beklenenden kötüde azalma (Schultz). [B]',
        'Teşvik belirginliği ("isteme"): uyaranlara motivasyonel değer atama; beğenme ise opioid sistemine daha çok bağlıdır.',
        'Hareketin başlatılması ve ölçeklenmesi (nigrostriatal yol).',
        'Prefrontal çalışma belleğinde D1 reseptörleri üzerinden ters-U ilişkisi: çok az da çok fazla da işlevi bozar (DLPFC kartı).'
      ],
      clinical: [
        'Psikoz: en belirgin bozukluk presinaptik; striatal dopamin sentezi ve salınımı artmış (d ≈ 0,79), D2 reseptörleri çok az değişmiş (Howes ve ark., 2012). [A]',
        'DEHB: tedavi almamış erişkinlerde ödül yolunda dopamin taşıyıcısı ve D2/3 reseptörleri düşük, dikkatsizlikle ilişkili (Volkow ve ark., 2009). [B]',
        'Antipsikotiklerin yan etkileri yollara göre ayrışır: nigrostriatal blokaj → ekstrapiramidal belirtiler; tuberoinfundibular blokaj → hiperprolaktinemi.',
        'Bağımlılık: bağımlılık yapan maddelerin çoğu, doğrudan ya da dolaylı yoldan mezolimbik dopamini artırır (Di Chiara ve Imperato, 1988).'
      ],
      treatment: [
        'Stimülanlar (metilfenidat, amfetamin): dopamin ve noradrenalin geri alımını engeller; DEHB\'de birinci basamak. [A]',
        'Antipsikotikler: D2 reseptör blokajı. Ksanomelin-trospiyum D2\'yi bloke etmeyen ilk antipsikotik (M1/M4 agonisti; erişkin, 2024). [A]',
        'Levodopa: dopa-duyarlı distoni ve Parkinson hastalığında dopamin öncülü. [A]',
        'Bupropion: dopamin ve noradrenalin geri alım inhibitörü (depresyon, sigara bırakma).'
      ],
      links: [
        'D1 ailesi (D1, D5): uyarıcı; prefrontal korteks ve striatumun doğrudan yolu.',
        'D2 ailesi (D2, D3, D4): ketleyici; dolaylı yol ve otoreseptör; antipsikotiklerin hedefi.',
        'Dopamin taşıyıcısı (DAT): metilfenidat ve amfetaminin hedefi.'
      ],
      core: ['vta', 'snc'], related: ['nacc', 'caudate', 'putamen', 'mpfc', 'dlpfc', 'acc', 'amygdala', 'hippocampus', 'hypothalamus'] },
    { id: '5ht', name: 'Serotonin Yolakları', short: '5-HT', color: CHEM['5ht'].color, eng: 'Serotonin',
      summary: 'Rafe çekirdeklerinden bütün beyne yayılan düzenleyici: duygudurum, dürtü kontrolü, uyku ve ağrı; SSRI\'ların hedefi.',
      anatomy: [
        'Kaynaklar: dorsal ve median rafe çekirdekleri (orta beyin ve pons) ön beyne çıkar; kaudal rafe çekirdekleri omuriliğe iner.',
        'Hedefler: prefrontal ve singulat korteks, hipokampus, amigdala, striatum, talamus, hipotalamus, serebellum ve omurilik.'
      ],
      functions: [
        'Duygudurum ve dürtü kontrolü; olumsuz olaylara verilen yanıtın düzenlenmesi.',
        'Uyku–uyanıklık ve sirkadiyen ritim; iştah (hipotalamusta 5-HT2C).',
        'İnen ağrı kontrolü (rafe → omurilik).'
      ],
      clinical: [
        'Depresyon, anksiyete ve OKB: SSRI\'ların hedefi serotonin taşıyıcısıdır.',
        'Serotonin sendromu: serotonerjik ilaç birlikteliklerinde ajitasyon, hipertermi, klonus.',
        'Dürtüsel saldırganlık ve kendine zarar vermede düşük serotonerjik işlev bulguları (rafe kartı).'
      ],
      treatment: [
        'Ergen depresyonu (TADS): yanıt fluoksetin + BDT\'de %71, plaseboda %35 (TADS, 2004). [A]',
        'Çocukluk çağı anksiyetesi (CAMS): belirgin düzelme sertralin + BDT\'de %80,7, plaseboda %23,7 (Walkup ve ark., 2008). [A]',
        'Atipik antipsikotikler 5-HT2A reseptörlerini de bloke eder; buspiron 5-HT1A kısmi agonistidir.',
        'Antidepresanlarda 25 yaş altında intihar düşüncesi uyarısı: başlangıçta yakın izlem.'
      ],
      links: [
        '5-HT1A: ketleyici; rafede otoreseptör, hipokampus ve korteks.',
        '5-HT2A: uyarıcı; korteks; atipik antipsikotikler bloke eder, psikedelikler etkinleştirir.',
        '5-HT2C: iştah ve dopamin salınımı; antipsikotiğe bağlı kilo artışıyla ilişkili.',
        '5-HT3: iyonotropik; bulantı (area postrema); ondansetronun hedefi.',
        'Serotonin taşıyıcısı (SERT): SSRI\'ların hedefi.'
      ],
      core: ['raphe'], related: ['mpfc', 'dlpfc', 'acc', 'pcc', 'hippocampus', 'amygdala', 'putamen', 'thalamus', 'hypothalamus', 'cerebellum'] },
    { id: 'ne', name: 'Noradrenalin Yolakları', short: 'NE', color: CHEM.ne.color, eng: 'Noradrenaline (norepinephrine)',
      summary: 'Locus coeruleus\'tan yayılan uyanıklık ve dikkat sinyali; stres yanıtını başlatır, prefrontal işlevle ters-U ilişkisi vardır.',
      anatomy: [
        'Kaynak: locus coeruleus (pons); küçük bir çekirdekten neredeyse bütün beyne dallanır. Lateral tegmental grup (medulla) hipotalamus ve amigdalaya.',
        'Hedefler: bütün korteks, hipokampus, amigdala, talamus, hipotalamus, serebellum ve omurilik; striatuma katkısı azdır.'
      ],
      functions: [
        'Uyanıklık ve uyarılmışlık; dikkatin göreve odaklanması ya da keşfe açılması (adaptif kazanç).',
        'Prefrontal kortekste α2A reseptörleri çalışma belleği ağını güçlendirir; stresteki yüksek düzey α1 ve β üzerinden bozar (Wang ve ark., 2007). [B]',
        'Duygusal olayların belleğe yerleşmesi (amigdala ve hipokampusta β-reseptör).',
        'İnen ağrı ketlemesi (LC → omurilik).'
      ],
      clinical: [
        'DEHB: noradrenerjik tedavilerin hedefi.',
        'Anksiyete, panik ve TSSB: artmış noradrenerjik tepkisellik, hiperuyarılmışlık.',
        'Opioid yoksunluğu: LC hiperaktivitesi otonom yoksunluk belirtilerine yol açar.'
      ],
      treatment: [
        'Atomoksetin (noradrenalin geri alım inhibitörü); guanfasin (seçici α2A agonisti) ve klonidin (α2 agonisti). [A]',
        'SNRI\'lar ve bupropion; propranolol (β blokörü) performans kaygısının bedensel belirtilerinde.',
        'Prazosin TSSB kâbuslarında büyük çalışmada plasebodan üstün bulunmadı (Raskind ve ark., 2018). [B]',
        'Lofeksidin ve klonidin opioid yoksunluğunda; lofeksidin erişkinde FDA onaylı (2018). [A]'
      ],
      links: [
        'α1: uyarıcı; stres altında prefrontal işlevi bozar; prazosin bloke eder.',
        'α2A: ketleyici otoreseptör ve prefrontal dikenlerde; guanfasin ve klonidinin hedefi.',
        'β1 ve β2: bellek pekiştirmesi ve kalp; propranolol bloke eder.',
        'Noradrenalin taşıyıcısı (NET): atomoksetinin hedefi; prefrontalde dopamini de temizler.'
      ],
      core: ['lc'], related: ['mpfc', 'dlpfc', 'somato', 'hippocampus', 'amygdala', 'thalamus', 'hypothalamus', 'cerebellum'] },
    { id: 'ach', name: 'Asetilkolin Yolakları', short: 'ACh', color: CHEM.ach.color, eng: 'Acetylcholine',
      summary: 'Dikkat, öğrenme ve uyanıklığın kolinerjik sinyali: bazal önbeyinden kortekse, septumdan hipokampusa, beyin sapından talamusa.',
      anatomy: [
        'Bazal önbeyin (Meynert\'in bazal çekirdeği) → bütün korteks; medial septum ve diyagonal bant → hipokampus (forniks). Meynert çekirdeği ve diyagonal bant modelde ayrı yapıdır (Neudorfer ve ark., 2020); medial septum açık atlaslarda olmadığından hipokampusa giden yol diyagonal banttan başlar.',
        'Pedinkülopontin ve laterodorsal tegmental çekirdekler (PPN/LDT) → talamus, VTA, SN: uyanıklık ve REM uykusu.',
        'Striatumda yerel kolinerjik ara nöronlar dopaminle dengelidir.'
      ],
      functions: [
        'Dikkat ve sinyal saptama; korteksin duyusal girdiye açılması.',
        'Hipokampusta yeni anıların kodlanması.',
        'Uyanıklık ve REM uykusu (PPN/LDT).'
      ],
      clinical: [
        'Antikolinerjik yük: birden çok antikolinerjik ilaç dikkat ve belleği bozar, deliryum riskini artırır (PPN kartı).',
        'Antipsikotiklerin ekstrapiramidal yan etkilerinde antikolinerjikler akut distoni ve parkinsonizmde kullanılır; akatizide etkisi sınırlıdır, tardif diskineziyi kötüleştirebilir (striatal dopamin–asetilkolin dengesi).',
        'Alzheimer hastalığında bazal önbeyin kolinerjik nöronları erken kaybolur (erişkin).'
      ],
      treatment: [
        'Ksanomelin-trospiyum: M1/M4 muskarinik agonisti; dopamini bloke etmeden etkili ilk antipsikotik (erişkin, 2024). [A]',
        'Biperiden: antipsikotiğe bağlı akut distonide. [B]',
        'Kolinesteraz inhibitörleri: Alzheimer hastalığında (erişkin).'
      ],
      links: [
        'Nikotinik reseptörler (iyonotropik; α4β2, α7): dikkat; sigara bağımlılığı.',
        'Muskarinik M1 (korteks, hipokampus: bellek) ve M4 (striatum: dopamin dengesi).'
      ],
      core: ['nbm', 'dbb', 'ppn'], related: ['thalamus', 'vta', 'snc', 'mpfc', 'dlpfc', 'ipl', 'occipital', 'hippocampus'] },
    { id: 'his', name: 'Histamin Yolakları', short: 'HA', color: CHEM.his.color, eng: 'Histamine',
      summary: 'Uyanıklığın kimyasal anahtarlarından: arka hipotalamustaki tuberomamiller çekirdekten bütün beyne; birçok psikotrop ilacın uyku ve kilo yan etkisinin nedeni.',
      anatomy: [
        'Kaynak: tuberomamiller çekirdek (arka hipotalamus; modelde hipotalamusun içinde ayrı yapı).',
        'Hedefler: bütün korteks, talamus, hipokampus, amigdala, bazal önbeyin.'
      ],
      functions: [
        'Uyanıklığın sürdürülmesi (H1 reseptörü); uyurken susar.',
        'İştah ve dikkat düzenlemesi.'
      ],
      clinical: [
        'H1 blokajı: sedatif antihistaminikler ve birçok antipsikotik ile mirtazapin uyku hali ve kilo artışı yapar (hipotalamus kartı).',
        'Narkolepside oreksin kaybıyla histamin sistemi de daha az uyarılır; buna karşın ölüm sonrası çalışmalarda histamin nöronlarının sayısı artmış bulundu (Valko ve ark., 2013).'
      ],
      treatment: [
        'Pitolisant (H3 ters agonisti): histamin salınımını artırır; 6 yaş ve üstü narkolepside gündüz uykululuğu için FDA onaylı (2024). [A]',
        'Sedatif antihistaminikler (ör. hidroksizin) kısa süreli kaygıda kullanılır; uykusuzlukta kılavuzlar önermez, tolerans gelişir ve antikolinerjik yük taşır (Sateia ve ark., 2017).'
      ],
      links: [
        'H1: uyanıklık; sedatif ilaçların hedefi.',
        'H3: ketleyici otoreseptör; pitolisant bunu ters yönde etkiler.'
      ],
      core: ['hy_tm'], related: ['hypothalamus', 'mpfc', 'dlpfc', 'spl', 'thalamus', 'hippocampus', 'amygdala'] },
    { id: 'orx', name: 'Oreksin (Hipokretin) Yolakları', short: 'OX', color: CHEM.orx.color, eng: 'Orexin / hypocretin',
      summary: 'Lateral hipotalamusun uyanıklık dengeleyicisi: öteki uyanıklık çekirdeklerini birlikte açık tutar; kaybı narkolepsiye yol açar.',
      anatomy: [
        'Kaynak: lateral ve perifornikal hipotalamustaki az sayıda nöron.',
        'Hedefler: locus coeruleus, rafe, tuberomamiller çekirdek, VTA, PPN/LDT ve korteks.'
      ],
      functions: [
        'Uyku–uyanıklık geçişini sabitler: uyanıkken uyanık, uykudayken uykuda kalmayı sağlar.',
        'Beslenme ve ödülle bağlantılı motivasyon (VTA\'ya projeksiyon; SEEKING sistemi).'
      ],
      clinical: [
        'Narkolepsi tip 1: oreksin nöronlarının %85–95\'i kaybolur (Thannickal ve ark., 2000); başlangıç sıklıkla çocukluk ve ergenliktedir. [B]',
        'Uykusuzluk: oreksin reseptör antagonistleri erişkinde kullanılır.'
      ],
      treatment: [
        'Narkolepside sodyum oksibat (7 yaş ve üstü, 2018) ve pitolisant (6 yaş ve üstü, 2024) FDA onaylı. [A]',
        'İkili oreksin reseptör antagonistleri (ör. suvoreksant): erişkin uykusuzluğunda.'
      ],
      links: ['Oreksin 1 ve 2 reseptörleri: locus coeruleus\'ta ağırlıkla OX1, tuberomamiller çekirdekte OX2; rafe ve VTA\'da ikisi de bulunur.'],
      core: ['hy_lh'], related: ['hypothalamus', 'lc', 'raphe', 'vta', 'ppn', 'mpfc'] }
  ];
  return { CHEM, POINTS, CHAINS, SETS, NT };
})();
