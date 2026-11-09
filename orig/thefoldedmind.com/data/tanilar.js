/* Tanılar: atlasın "Tanılar" sekmesi (app.js: küme türü 'tani'; bağlantı çapası #tani-<kimlik>, ör. atlas.html#tani-okb).
   Bir tanı seçilince kartın üstündeki merceklerden biri 3B görünümü belirler:
     Devre       tanının devre modeli canlı akar; "Sağlıklı" ile hastalık modeli arasında geçilir (yolların hızı, yoğunluğu ve
                 parlaklığı değişir, artmış etkinlik gösteren yapılar turuncu nabızla parlar)
     Bulgular    büyük görüntüleme çalışmalarının bulguları: bölgeler etki yönüne ve büyüklüğüne göre renklenir
                 (sıcak renk daha büyük/kalın ya da daha etkin, soğuk renk daha küçük/ince)
     Belirtiler  belirti boyutu → devre: seçilen belirtinin devresi ve döngüsü
     Tedavi      tedavinin etki yeri: nörotransmitter yolları, kitaptaki yolaklar, derin beyin uyarımı elektrotları, TMS bobini
     Bölgeler    çekirdek ve ilişkili bölgeler, ağlar, nörotransmitter sistemlerinin yolları (her tanıda)
     Kitapta     kitaptan birebir alıntılar (çalışma anında kaynak metinde aranır; bulunamayan alıntı gösterilmez) ve Panksepp sistemleri

   KAYIT
     id, name, short, eng, color, summary, page    kimlik, ad, kısaltma, İngilizce ad (arama), renk, kısa özet, ayrıntılı yazı
     core[], related[], nets[], nt[], panksepp[]   Bölgeler merceği (alt yapı da olur: th_md, gpi …; ebeveyni katmanlı gösterilir)
     kitapta[]   { sys } Panksepp sisteminin klinik satırı · { entry, field?, snippet? } kitap bölge girdisi (clinic satırı ve
                 field alanından alıntı) · { path, snippet } kitap yolağının "where" alanından alıntı
     mercek      { devre, bulgular, belirtiler, tedavi } (isteğe bağlı)
       devre      { title, text, core, related, routes[], modes: { <kimlik>: { name, text, gain: { <cls>: [hız, yoğunluk, parlaklık] }, hot[] } }, ev, src }
       bulgular   { text, gruplar: [{ id, name, text, items: [{ id, d, dtxt, txt }], hot[], src }] }
       belirtiler [{ id, name, sub, devre, text, core, related, routes, ev, src }]
       tedavi     [{ id, name, sub, text, core, related, flow? ('nt:5ht', 'path:frontolimbic' ya da ['nt:da', 'nt:ne']),
                    flowTo? (yalnız bu hedeflere giden yollar; dizi ya da { küme: [hedefler] }), routes?, elektrot?, bobin?, ev, src }]
         elektrot  { hedef, ofset: [yan, ön, üst] mm, yon: [yan, ön, üst], kontak: [uzunluk, aralık] mm, aktif }
         bobin     { merkez: [x, y, z] MNI mm, hedef: [x, y, z], yaricap, ara } (H7 benzeri çift bobin, şematik)
     Yollar flows.js biçimindedir ({ from, to, chem, via?, inh?, sides? }); cls hastalık modelinde yolun kazancını seçer.
   Mercekler beş tanının hepsinde (2026-10-11). Kaynaklar docs/bilgi/tani-<kimlik>.md. */
(function () {
  'use strict';
  // OKB devresi: kortiko-striato-talamo-kortikal döngü (Alexander 1986 lateral orbitofrontal ve ön singulat döngüleri; Saxena ve Rauch 2000)
  // Yollar iki yarıkürede çizilir (kullanıcı 2026-10-11: "nörotransmitterler beynin tek tarafında çalışır halde kalmış"; önceden
  // yalnızca sol yarıküre). Yana özgü yollar kendi sides alanıyla işaretlenir (ör. sol DLPFC'ye TMS). Y yalnızca yol listesini işaretler.
  const Y = (list) => list;
  const CSTC = Y([
    { from: 'ofc', to: 'caudate', chem: 'glu', via: [[18, 24, -4], [14, 18, 4]], cls: 'giris' },
    { from: 'acc', to: 'caudate', chem: 'glu', via: [[9, 22, 12]], cls: 'giris' },
    { from: 'caudate', to: 'gpi', chem: 'gaba', inh: true, via: [[15, 4, 4]], cls: 'dogrudan' },
    { from: 'caudate', to: 'gpe', chem: 'gaba', inh: true, via: [[18, 7, 7]], cls: 'dolayli' },
    { from: 'gpe', to: 'stn', chem: 'gaba', inh: true, via: [[15, -8, -3]], cls: 'dolayli' },
    { from: 'stn', to: 'gpi', chem: 'glu', via: [[14, -9, -6]], cls: 'dolayli' },
    { from: 'gpi', to: 'th_va', chem: 'gaba', inh: true, via: [[13, -6, 2]], cls: 'cikis' },
    { from: 'gpi', to: 'th_md', chem: 'gaba', inh: true, via: [[12, -9, 2], [8, -12, 5]], cls: 'cikis' },
    { from: 'th_md', to: 'ofc', chem: 'glu', via: [[9, -4, 8], [14, 16, 2], [18, 28, -6]], cls: 'donus' },
    { from: 'th_va', to: 'ofc', chem: 'glu', via: [[13, 2, 6], [18, 24, -2]], cls: 'donus' },
    { from: 'th_md', to: 'acc', chem: 'glu', via: [[8, -4, 10], [9, 14, 14]], cls: 'donus' }
  ]);
  const BG_OUT = (to) => [   // GPi → talamus (ketleyici çıkış)
    { from: 'gpi', to, chem: 'gaba', inh: true, via: [[12, -8, 2]] }];

  // ---------------------------------------------------------------- DEHB
  const M_DEHB = {
    devre: {
      title: 'Fronto-striatal döngü ve katekolaminler',
      text: 'DLPFC ve ön singulat, kaudat ve putamen üzerinden talamusa, oradan yeniden kortekse giden döngüyle dikkati ve davranışı yönetir. Ventral tegmental alandan gelen dopamin striatumu ve prefrontal korteksi, locus coeruleus\'tan gelen noradrenalin prefrontal korteksi ayarlar. DEHB ilaçları bu iki sistemi güçlendirir.',
      core: ['dlpfc', 'acc', 'caudate', 'putamen'], related: ['vta', 'lc', 'th_md', 'nacc'],
      routes: Y([
        { from: 'dlpfc', to: 'caudate', chem: 'glu', via: [[26, 24, 22], [16, 14, 14]], cls: 'kortiko' },
        { from: 'acc', to: 'caudate', chem: 'glu', via: [[9, 22, 12]], cls: 'kortiko' },
        { from: 'caudate', to: 'gpi', chem: 'gaba', inh: true, via: [[15, 4, 4]], cls: 'bg' },
        { from: 'putamen', to: 'gpi', chem: 'gaba', inh: true, via: [[21, -3, 0]], cls: 'bg' },
        { from: 'gpi', to: 'th_md', chem: 'gaba', inh: true, via: [[12, -9, 2], [8, -12, 5]], cls: 'bg' },
        { from: 'th_md', to: 'dlpfc', chem: 'glu', via: [[10, 0, 14], [26, 24, 26]], cls: 'kortiko' },
        { from: 'vta', to: 'caudate', chem: 'da', via: ['#mfb', [12, 10, 4]], cls: 'da' },
        { from: 'vta', to: 'nacc', chem: 'da', via: ['#mfb'], cls: 'da' },
        { from: 'vta', to: 'dlpfc', chem: 'da', via: ['#pfcl'], cls: 'da' },
        { from: 'lc', to: 'dlpfc', chem: 'ne', via: ['#dnb', '#pfcl'], cls: 'ne' },
        { from: 'lc', to: 'acc', chem: 'ne', via: ['#dnb', '#accw'], cls: 'ne' }]),
      modes: {
        tipik: { name: 'Tipik gelişim', text: 'Dopamin ve noradrenalin sinyali görev sırasında prefrontal ve striatal hedeflere düzenli ulaşır; döngü dikkati sürdürür, gereksiz tepkiyi frenler.', gain: {} },
        dehb: { name: 'DEHB modeli', text: 'Dopamin ve noradrenalin sinyali zayıf ve dalgalı, fronto-striatal döngü görev sırasında yeterince devreye girmez. 55 fMRI çalışmasının meta-analizinde çocuklarda yürütücü (frontoparietal) ve ventral dikkat sistemleri az, varsayılan mod ağı fazla etkinleşmiştir.',
          gain: { da: [0.6, 0.5, 0.45], ne: [0.6, 0.5, 0.45], kortiko: [0.75, 0.6, 0.6], bg: [0.85, 0.7, 0.7] }, cold: ['dlpfc', 'caudate'] }
      },
      ev: 'B', src: 'Döngü: Alexander ve ark., 1986. İşlevsel görüntüleme: Cortese ve ark., 2012 (American Journal of Psychiatry, 55 çalışma). Dopamin: Volkow ve ark., 2009. Model bir kuramdır.'
    },
    bulgular: {
      text: 'Renk bulgunun yönünü ve büyüklüğünü gösterir: soğuk renk daha küçük, ince ya da az etkin; sıcak renk daha büyük ya da fazla etkin. Farklar grup ortalamasıdır, küçüktür; tek bir çocukta görüntüleme DEHB tanısı koydurmaz.',
      gruplar: [
        { id: 'yapi', name: 'Yapı (ENIGMA)', text: 'ENIGMA-ADHD (1.713 DEHB, 1.529 kontrol): akumbens, amigdala, kaudat, hipokampus ve putamen küçük. Farklar 15 yaş altında belirgin, erişkinlerde anlamlı değil; ilaç kullanımı sonucu değiştirmedi.',
          items: [
            { id: 'amygdala', d: -0.19, dtxt: 'd = −0,19', txt: 'Amigdala küçük (en büyük fark).' },
            { id: 'nacc', d: -0.15, dtxt: 'd = −0,15', txt: 'Nükleus akumbens küçük.' },
            { id: 'putamen', d: -0.14, dtxt: 'd = −0,14', txt: 'Putamen küçük.' },
            { id: 'caudate', d: -0.11, dtxt: 'd = −0,11', txt: 'Kaudat küçük.' },
            { id: 'hippocampus', d: -0.11, dtxt: 'd = −0,11', txt: 'Hipokampus küçük.' }],
          src: 'Hoogman ve ark., 2017 (Lancet Psychiatry).' },
        { id: 'olgunlasma', name: 'Olgunlaşma', text: 'Korteks olağan sırayla (arkadan öne) olgunlaşır ama ortalama yaklaşık 3 yıl gecikir; gecikme en çok ön bölgelerde, motor korteks ise biraz erken olgunlaşır (446 çocuk, 824 MR). Burada renk etki büyüklüğünü değil, gecikmenin yönünü gösterir. Bulgu, DEHB\'nin bir olgunlaşma gecikmesi olarak görülmesini destekler.',
          items: [
            { id: 'dlpfc', d: -0.35, dtxt: 'gecikmeli', txt: 'Dorsolateral prefrontal korteks: kalınlık zirvesi geç.' },
            { id: 'mpfc', d: -0.3, dtxt: 'gecikmeli', txt: 'Medial prefrontal korteks: geç olgunlaşır.' },
            { id: 'motor', d: 0.2, dtxt: 'biraz erken', txt: 'Motor korteks: biraz erken olgunlaşır.' }],
          src: 'Shaw ve ark., 2007 (PNAS).' },
        { id: 'islev', name: 'İşlev (fMRI)', text: 'Görev sırasında çocuklarda yürütücü işlevi taşıyan frontoparietal sistem ve ventral dikkat sistemi az, kendine yönelik düşünmeyi taşıyan varsayılan mod ağı fazla etkinleşir.',
          items: [
            { id: 'dlpfc', d: -0.3, dtxt: 'az etkin', txt: 'Frontoparietal sistemin ön düğümü.' },
            { id: 'ipl', d: -0.25, dtxt: 'az etkin', txt: 'Frontoparietal sistemin arka düğümü.' },
            { id: 'pcc', d: 0.3, dtxt: 'fazla etkin', txt: 'Varsayılan mod ağının arka düğümü.' }],
          src: 'Cortese ve ark., 2012 (55 fMRI çalışmasının meta-analizi).' }
      ]
    },
    belirtiler: [
      { id: 'denetim', name: 'Dikkat ve ketleme', sub: 'Dağınıklık, dürtüsellik, planlama güçlüğü', devre: 'Dorsal fronto-striatal yol (bilişsel denetim)',
        text: 'DLPFC ve alt frontal girus, dorsal kaudat üzerinden dikkati sürdürür ve başlayan tepkiyi durdurur. DEHB\'li çocukların bir kısmında güçlük ağırlıkla bu yoldadır.',
        core: ['dlpfc', 'caudate'], related: ['broca', 'gpi', 'th_md'],
        routes: Y([{ from: 'dlpfc', to: 'caudate', chem: 'glu', via: [[26, 24, 22], [16, 14, 14]] },
          { from: 'broca', to: 'caudate', chem: 'glu', via: [[30, 18, 10], [18, 14, 10]] },
          { from: 'caudate', to: 'gpi', chem: 'gaba', inh: true, via: [[15, 4, 4]] }].concat(BG_OUT('th_md'),
          [{ from: 'th_md', to: 'dlpfc', chem: 'glu', via: [[10, 0, 14], [26, 24, 26]] }])), ev: 'B' },
      { id: 'odul', name: 'Ödül ve bekleyememe', sub: 'Hemen ödül isteme, beklemekten kaçınma', devre: 'Ventral fronto-striatal yol (ödül)',
        text: 'OFC ve nükleus akumbens ödülü değerlendirir; dopamin bu yolu besler. Gecikmiş ödülün değeri hızla düşer, çocuk beklemek yerine hemen gelen küçük ödülü seçer.',
        core: ['ofc', 'nacc'], related: ['vta', 'vp', 'amygdala'],
        routes: Y([{ from: 'ofc', to: 'nacc', chem: 'glu', via: [[16, 22, -10]] }, { from: 'vta', to: 'nacc', chem: 'da', via: ['#mfb'] },
          { from: 'nacc', to: 'vp', chem: 'gaba', inh: true, via: [[13, 6, -8]] }, { from: 'vp', to: 'th_md', chem: 'gaba', inh: true, via: [[9, -6, 0]] },
          { from: 'th_md', to: 'ofc', chem: 'glu', via: [[9, -4, 8], [14, 16, 2], [18, 28, -6]] }]), ev: 'B' },
      { id: 'zaman', name: 'Zamanlama', sub: 'Zamanı tahmin etme, ritim, sıralama', devre: 'Fronto-serebellar yol (zamanlama)',
        text: 'Prefrontal korteks pons üzerinden beyinciğe, beyinciğin dentat çekirdeği talamus üzerinden yeniden prefrontal kortekse bağlanır. Beyincik çıkışı karşı taraf talamusuna çaprazlanır; çizim şematiktir.',
        core: ['cb_dentate', 'dlpfc'], related: ['pons', 'th_vld'],
        routes: Y([{ from: 'dlpfc', to: 'pons', chem: 'glu', via: [[22, 4, 14], [10, -22, -20]] },
          { from: 'pons', to: 'cb_dentate', chem: 'glu', via: [[14, -44, -30]] },
          { from: 'cb_dentate', to: 'th_vld', chem: 'glu', via: ['#cbw', [12, -30, -2]] },
          { from: 'th_vld', to: 'dlpfc', chem: 'glu', via: [[16, -6, 20], [26, 24, 28]] }]), ev: 'B' },
      { id: 'dalgalanma', name: 'Dikkat dalgalanması', sub: 'Dalıp gitme, görev sırasında kopmalar', devre: 'Varsayılan mod ağı (girişim hipotezi)',
        text: 'Görev sırasında susması gereken varsayılan mod ağı yeterince susturulamaz ve dikkati görevden koparır. Bu bir hipotezdir; görev sırasında DMN\'nin fazla etkinleştiği bulunmuştur.',
        core: ['mpfc', 'pcc'], related: ['acc'],
        routes: Y([{ from: 'mpfc', to: 'pcc', zt: 'pcing', chem: 'glu', via: ['#cing'] }, { from: 'pcc', zf: 'pcing', to: 'mpfc', chem: 'glu', via: [[9, -40, 32], [8, -8, 38], [8, 22, 26], [7, 22, 2]] }]), ev: 'C' }
    ],
    belirtilerSrc: 'Üç yol: Sonuga-Barke ve ark., 2010; de Zeeuw ve ark., 2012 (149 kişi; güçlüğü olan DEHB\'lilerin %80\'inde yalnızca bir alanda). Varsayılan mod girişimi: Sonuga-Barke ve Castellanos, 2007 (hipotez); Cortese ve ark., 2012.',
    tedavi: [
      { id: 'mph', name: 'Metilfenidat', sub: 'Dopamin ve noradrenalin taşıyıcılarını bloke eder', ev: 'A',
        text: 'Çocuk ve ergende kısa dönemde ilk seçenek ilaç; erişkinde amfetaminler (133 çift kör çalışmalık ağ meta-analizi). Taşıyıcılar bloke olunca striatum ve prefrontal kortekste dopamin ve noradrenalin artar; amfetaminler ayrıca salınımı artırır. Uzun dönem verisi sınırlıdır.',
        core: ['caudate', 'putamen', 'nacc', 'dlpfc'], related: ['vta', 'snc', 'lc', 'mpfc', 'acc'], flow: ['nt:da', 'nt:ne'],
        flowTo: ['caudate', 'putamen', 'nacc', 'dlpfc', 'mpfc', 'acc'], src: 'Cortese ve ark., 2018 (Lancet Psychiatry).' },
      { id: 'atx', name: 'Atomoksetin', sub: 'Seçici noradrenalin geri alım inhibitörü', ev: 'B',
        text: 'Uyarıcı olmayan seçenek. Prefrontal kortekste noradrenalini ve dopamini artırır. Etkisi birkaç haftada ortaya çıkar.',
        core: ['dlpfc', 'mpfc'], related: ['lc', 'vta', 'acc'], flow: ['nt:ne', 'nt:da'], flowTo: ['dlpfc', 'mpfc', 'acc'],
        src: 'Cortese ve ark., 2018.' },
      { id: 'guanfasin', name: 'Guanfasin', sub: 'α2A adrenerjik reseptör agonisti', ev: 'B',
        text: 'Prefrontal kortekste α2A reseptörlerini uyararak çalışma belleği ağlarında sinyal iletimini güçlendirir. Uzun etkili biçimi tek başına ya da uyarıcılara ek kullanılır.',
        core: ['dlpfc'], related: ['lc', 'mpfc', 'acc'], flow: 'nt:ne', flowTo: ['dlpfc', 'mpfc'], src: 'Cortese ve ark., 2018.' },
      { id: 'davranis', name: 'Ebeveyn eğitimi ve davranışçı müdahale', sub: 'Okul öncesinde ilk basamak', ev: 'B',
        text: 'Beş yaş altında ilk basamak. Belirtilerde ve karşı gelme sorunlarında küçük-orta etki; en belirgin etki tedaviye en yakın değerlendiricilerde (21 çalışma, 2.200\'den fazla çocuk). Kuramsal olarak düzenli ve hemen gelen pekiştirme, ödül yolundaki güçlüğü dengelemeyi hedefler.',
        core: ['ofc', 'nacc'], related: ['dlpfc', 'vta'],
        routes: Y([{ from: 'ofc', to: 'nacc', chem: 'glu', via: [[16, 22, -10]] }, { from: 'vta', to: 'nacc', chem: 'da', via: ['#mfb'] }]),
        src: 'NICE NG87; Groenman ve ark., 2022 (JAACAP).' },
      { id: 'amfetamin', name: 'Amfetamin grubu', sub: 'Uyarıcı; Türkiye\'de kullanılmaz', ev: 'A',
        text: '133 çift kör çalışmalık ağ meta-analizinde erişkinde ilk seçenek önerilen grup; çocuk ve ergende metilfenidat önerilir. Taşıyıcıları kapatmanın yanında dopamin ve noradrenalin salınımını artırır. Türkiye\'de kullanılmaz, ABD\'de onaylıdır.',
        core: ['caudate', 'putamen', 'nacc', 'dlpfc'], related: ['vta', 'snc', 'lc', 'mpfc', 'acc'], flow: ['nt:da', 'nt:ne'], src: 'Cortese ve ark., 2018 (Lancet Psychiatry).' }
    ]
  };

  // ---------------------------------------------------------------- Depresyon
  const M_DEP = {
    devre: {
      title: 'Ödül ve duygu düzenleme dengesi',
      text: 'Ventral tegmental alandan akumbense ve medial prefrontal kortekse giden dopamin yolu ödülü ve güdülenmeyi taşır. Ön singulat (özellikle subgenual bölümü) ve amigdala olumsuz duyguyu, DLPFC ise bunu yukarıdan düzenler. Lateral habenula "beklenen ödül gelmedi" sinyaliyle dopamin çekirdeklerini frenler; amigdala hipotalamus üzerinden stres eksenini çalıştırır.',
      core: ['acc', 'amygdala', 'nacc', 'dlpfc'], related: ['vta', 'hb', 'mpfc', 'hypothalamus'],
      routes: Y([
        { from: 'vta', to: 'nacc', chem: 'da', via: ['#mfb'], cls: 'odul' },
        { from: 'vta', to: 'mpfc', zt: 'vmpfc', chem: 'da', via: ['#pfcv'], cls: 'odul' },
        { from: 'mpfc', to: 'nacc', zf: 'vmpfc', chem: 'glu', via: [[10, 30, -6]], cls: 'odul' },
        { from: 'amygdala', to: 'acc', zt: 'sgacc', chem: 'glu', via: [[16, 4, -16], [8, 20, -6]], cls: 'olumsuz' },
        { from: 'amygdala', to: 'hypothalamus', chem: 'crf', via: ['#vaf'], cls: 'stres' },
        { from: 'dlpfc', to: 'amygdala', chem: 'glu', inh: true, via: [[30, 30, 20], [24, 10, -10]], cls: 'duzenleme' },
        { from: 'hb', to: 'vta', chem: 'glu', inh: true, via: [[3, -24, -6]], cls: 'hb' }]),
      modes: {
        saglikli: { name: 'Sağlıklı', text: 'Ödül sinyali güdülenmeyi besler; olumsuz duygu ortaya çıktığında prefrontal korteks onu düzenler ve stres yanıtı söner.', gain: {} },
        depresyon: { name: 'Depresyon modeli', text: 'Ödül sinyali zayıflar (zevk alamama); ön singulat ve amigdala daha etkin, DLPFC\'nin yukarıdan düzenlemesi zayıftır (limbik-kortikal dengesizlik modeli). Habenula dopamin çekirdeklerini daha çok frenler, stres ekseni süreğen çalışır.',
          gain: { odul: [0.55, 0.5, 0.45], olumsuz: [1.6, 1.8, 1.15], stres: [1.4, 1.6, 1.1], duzenleme: [0.6, 0.5, 0.45], hb: [1.5, 1.8, 1.15] },
          hot: ['acc', 'amygdala', 'hb'], cold: ['dlpfc', 'nacc'] }
      },
      ev: 'B', src: 'Limbik-kortikal model: Mayberg, 1997. Habenula: Hikosaka, 2010. Model bir kuramdır; depresyon birden çok devre örüntüsünü kapsar.'
    },
    bulgular: {
      text: 'Renk bulgunun yönünü ve büyüklüğünü gösterir: soğuk renk daha küçük ya da ince, sıcak renk daha büyük. Farklar grup ortalamasıdır ve küçüktür; görüntüleme bireyde tanı koydurmaz.',
      gruplar: [
        { id: 'yapi', name: 'Hipokampus', text: 'ENIGMA-MDD (1.728 hasta, 7.199 kontrol): hipokampus küçük. Fark yineleyen depresyonda ve 21 yaşından önce başlayan depresyonda belirgin; ilk atakta kontrollerden farklı değil.',
          items: [{ id: 'hippocampus', d: -0.14, dtxt: 'd = −0,14', txt: 'Hipokampus küçük (%1,2); yineleyende −0,17, erken başlayanda −0,20.' }],
          src: 'Schmaal ve ark., 2016 (Molecular Psychiatry).' },
        { id: 'eriskin', name: 'Erişkin (korteks)', text: 'ENIGMA-MDD (2.148 hasta, 7.957 kontrol): erişkinlerde orbitofrontal, ön ve arka singulat, insula ve temporal korteks ince; incelme erişkinlikte başlayanlarda görülür. Etki büyüklükleri küçük; renk yoğunluğu yaklaşıktır.',
          items: [
            { id: 'ofc', d: -0.15, dtxt: 'ince', txt: 'Orbitofrontal korteks ince.' },
            { id: 'acc', d: -0.15, dtxt: 'ince', txt: 'Ön singulat ince.' },
            { id: 'pcing', d: -0.15, dtxt: 'ince', txt: 'Arka singulat ince.' },
            { id: 'insula', d: -0.15, dtxt: 'ince', txt: 'İnsula ince.' },
            { id: 'stg', d: -0.12, dtxt: 'ince', txt: 'Temporal korteks ince.' }],
          src: 'Schmaal ve ark., 2017 (Molecular Psychiatry).' },
        { id: 'ergen', name: 'Ergen (korteks)', text: 'Ergenlerde korteks kalınlığında fark yok; toplam yüzey alanı küçük, en çok frontal ve duyusal-motor bölgelerde ve yineleyen ergenlerde. Gelişen beyinde etki erişkinden farklıdır.',
          items: [
            { id: 'dlpfc', d: -0.15, dtxt: 'yüzey alanı küçük', txt: 'Frontal korteks yüzey alanı küçük.' },
            { id: 'motor', d: -0.15, dtxt: 'yüzey alanı küçük', txt: 'Motor korteks yüzey alanı küçük.' },
            { id: 'somato', d: -0.15, dtxt: 'yüzey alanı küçük', txt: 'Duyusal korteks yüzey alanı küçük.' }],
          src: 'Schmaal ve ark., 2017.' }
      ]
    },
    belirtiler: [
      { id: 'anhedoni', name: 'Zevk alamama', sub: 'İlgi ve güdü kaybı', devre: 'Ödül devresi',
        text: 'VTA, nükleus akumbens ve prefrontal korteksten oluşan ödül devresinde ödüle yanıt azalmıştır. Kitapta bu devre SEEKING sistemi olarak anlatılır.',
        core: ['nacc', 'vta'], related: ['mpfc', 'ofc'],
        routes: Y([{ from: 'vta', to: 'nacc', chem: 'da', via: ['#mfb'] }, { from: 'vta', to: 'mpfc', zt: 'vmpfc', chem: 'da', via: ['#pfcv'] },
          { from: 'ofc', to: 'nacc', chem: 'glu', via: [[16, 22, -10]] }]), ev: 'B' },
      { id: 'ruminasyon', name: 'Olumsuz düşünceleri döndürme', sub: 'Kendine yönelik, tekrarlayan düşünce', devre: 'Varsayılan mod ağı',
        text: 'Medial prefrontal korteks ve arka singulat kendine yönelik düşünmeyi taşır; depresyonda bu ağın bağlantısı artmış, olumsuz düşünceler döner durur.',
        core: ['mpfc', 'pcc'], related: ['acc'],
        routes: Y([{ from: 'mpfc', to: 'pcc', zt: 'pcing', chem: 'glu', via: ['#cing'] }, { from: 'pcc', zf: 'pcing', to: 'mpfc', chem: 'glu', via: [[9, -40, 32], [8, -8, 38], [8, 22, 26], [7, 22, 2]] }]), ev: 'B' },
      { id: 'olumsuz', name: 'Olumsuz duygu ve stres', sub: 'Çökkünlük, tehdide duyarlılık, uyku ve iştah', devre: 'Olumsuz duygu devresi ve stres ekseni',
        text: 'Amigdala ve ön singulat olumsuz uyaranlara daha güçlü yanıt verir; amigdala hipotalamus üzerinden stres eksenini (kortizol) çalıştırır.',
        core: ['amygdala', 'acc'], related: ['hypothalamus', 'insula'],
        routes: Y([{ from: 'amygdala', to: 'acc', chem: 'glu', via: [[16, 4, -16], [8, 20, -6]] }, { from: 'amygdala', to: 'hypothalamus', chem: 'crf', via: ['#vaf'] }]), ev: 'B' },
      { id: 'denetim', name: 'Odaklanma ve karar verme', sub: 'Dikkat ve konsantrasyon güçlüğü', devre: 'Bilişsel denetim devresi',
        text: 'DLPFC ve dorsal ön singulat dikkati ve kararları yönetir; bu devrenin az çalışması konsantrasyon güçlüğüyle ve kimi hastada tedaviye yanıtla ilişkilendirilmiştir.',
        core: ['dlpfc', 'acc'], related: ['ipl'],
        routes: Y([{ from: 'dlpfc', to: 'acc', chem: 'glu', via: [[24, 28, 30], [10, 20, 28]] }, { from: 'dlpfc', to: 'ipl', chem: 'glu', via: [[38, -4, 40]] }]), ev: 'B' }
    ],
    belirtilerSrc: 'Devreler: Williams, 2016 (Lancet Psychiatry; depresyon ve anksiyete için devre sınıflaması). Belirti-devre eşleşmesi kuramsal bir çerçevedir.',
    tedavi: [
      { id: 'ssri', name: 'SSRİ (fluoksetin, essitalopram)', sub: 'Serotonin geri alımını ketler', ev: 'A',
        text: 'Orta ve ağır depresyonda psikoterapiye ek. Çocuk ve ergende FDA onaylı: fluoksetin (8 yaş üstü), essitalopram (12 yaş üstü). 25 yaş altında intihar düşüncesi uyarısı vardır, yakın izlem gerekir. Ergenlerde 12 haftada yanıt: fluoksetin + BDT %71,0, yalnız fluoksetin %60,6, plasebo %34,8.',
        core: ['raphe'], related: ['acc', 'amygdala', 'hippocampus', 'mpfc'], flow: 'nt:5ht', src: 'TADS, 2004 (JAMA).' },
      { id: 'bdt', name: 'Bilişsel davranışçı terapi', sub: 'Düşünce ve davranış örüntüleri', ev: 'A',
        text: 'Hafif depresyonda ilk basamak, orta ve ağırda ilaçla birlikte. Olumsuz düşünceleri ve davranışsal geri çekilmeyi hedefler; prefrontal düzenleme yolları üzerinden çalıştığı düşünülür (atlasta kitaptaki fronto-limbik yol). Ergenlerde yalnız BDT 12 haftada %43,2; 36. haftada yalnız BDT de yalnız fluoksetin de %81\'e ulaştı.',
        core: ['mpfc', 'amygdala'], related: ['dlpfc', 'acc'], flow: 'path:frontolimbic', src: 'TADS, 2004.' },
      { id: 'rtms', name: 'Tekrarlayıcı TMS (sol DLPFC)', sub: 'Kafatası üzerinden manyetik uyarı', ev: 'B',
        text: 'Dirençli erişkin depresyonunda kullanılır. 2024\'te 15–21 yaş için antidepresana ek tedavi olarak FDA onayı aldı (şirketin gerçek yaşam verisiyle; randomize çalışma değil). Bobin sol DLPFC\'nin üstüne konur; etki bağlantılı olduğu ön singulat ağına da yayılır.',
        core: ['dlpfc'], related: ['sgacc'], taraf: { dlpfc: 'L' }, bobin: { merkez: [-58, 34, 46], hedef: [-40, 30, 32], yaricap: 17, ara: 17 },
        routes: [{ from: 'dlpfc', to: 'acc', chem: 'glu', inh: true, via: [[30, 30, 20], [12, 26, 4]], sides: ['L'] }],
        src: 'FDA, 2024 (NeuroStar). Sol DLPFC hedefinin subgenual singulatla ters bağlantısı: Fox ve ark., 2012. Bobin, alan ve yol şematiktir.' },
      { id: 'dbs', name: 'Derin beyin uyarımı (subgenual singulat)', sub: 'Araştırma aşamasında', ev: 'C',
        text: 'İlk çalışmada 6 hastanın 4\'ünde belirgin düzelme oldu; sonraki çok merkezli randomize çalışma erken dönemde sahte uyarımı geçemedi. Yalnızca araştırma kapsamında, erişkinde. Çocuklarda kullanılmaz.',
        core: ['sgacc'], related: ['amygdala', 'hypothalamus', 'nacc'],
        elektrot: { mni: [6, 24, -8], yon: [0.22, 0.55, 0.8], kontak: [1.5, 1.5], aktif: 1 },
        src: 'Mayberg ve ark., 2005 (Neuron); Holtzheimer ve ark., 2017 (Lancet Psychiatry). Elektrot yolu şematiktir.' },
      { id: 'ekt', name: 'Elektrokonvülsif tedavi (EKT)', sub: 'Ağır ya da dirençli depresyon', ev: 'A',
        text: 'Erişkin çalışmalarının meta-analizinde antidepresan ilaçlardan üstündür. Ergenlerde kanıt olgu ve küçük çalışmalara dayanan uygulama kılavuzudur; öncesinde ve sonrasında belirti ve biliş değerlendirmesi önerilir, ergenlik öncesi çocuklar kılavuzun dışındadır. 281 hastalık MR çalışmasında hipokampus hacmi seans başına yaklaşık %0,28 artar, ama bu artış iyileşmeyi açıklamaz. Bu kartta beyin yolu çizilmez.',
        core: [], related: [], src: 'UK ECT Review Group, 2003 (Lancet); Ghaziuddin ve ark., 2004 (JAACAP); Oltedal ve ark., 2018 (Biological Psychiatry).' },
      { id: 'ketamin', name: 'Ketamin ve esketamin', sub: 'Hızlı etkili, dirençli depresyon', ev: 'B',
        text: 'Erişkin dirençli depresyonda burun içi esketamin, oral antidepresana ek olarak hızlı ve dozla ilişkili etki gösterdi (67 hasta); FDA 2019 onayı erişkin içindir ve sertifikalı merkezde uygulanır. 17 ergenlik çapraz çalışmada tek doz damar içi ketamin 24 saatte midazolamdan üstündü, ama kan basıncı artışı ve dissosiyatif belirtiler daha sıktı; uzun dönem güvenlik verisi eksiktir. Glutamat sistemi üzerinden etki ettiği düşünülür.',
        core: [], related: [], flow: 'nt:glu', src: 'Daly ve ark., 2018 (JAMA Psychiatry); Dwyer ve ark., 2021 (American Journal of Psychiatry); FDA, 2019.' },
      { id: 'kat', name: 'Kişilerarası psikoterapi', sub: 'Ergen depresyonu', ev: 'B',
        text: 'Okul temelli klinik çalışmasında 63 ergende 12 seanslık kişilerarası psikoterapi, olağan bakıma göre belirtileri daha çok azalttı, işlevselliği daha çok düzeltti. Bu kartta beyin yolu çizilmez.',
        core: [], related: [], src: 'Mufson ve ark., 2004 (Archives of General Psychiatry).' },
      { id: 'obur', name: 'Öteki antidepresanlar', sub: 'Bupropion, SNRİ, mirtazapin', ev: 'A',
        text: 'Erişkinde 21 antidepresanın 522 çalışmalık ağ meta-analizinde hepsi plasebodan üstündür. Çocuk ve ergende tablo farklıdır: ağ meta-analizinde plasebodan anlamlı üstün tek ilaç fluoksetindir. 25 yaş altında intihar düşüncesi uyarısı geçerlidir.',
        core: [], related: [], flow: ['nt:ne', 'nt:da'], src: 'Cipriani ve ark., 2018; Cipriani ve ark., 2016 (Lancet).' }
    ]
  };

  // ---------------------------------------------------------------- Yaygın anksiyete bozukluğu
  const M_YAB = {
    devre: {
      title: 'Tehdit ve düzenleme döngüsü',
      text: 'Amigdala yakın ve belirgin tehdide, BNST belirsiz ve uzak tehdide yanıt verir; ikisi de hipotalamus (stres ekseni) ve PAG (savunma) üzerinden bedeni hazırlar. Ventromedial ve ventrolateral prefrontal korteks amigdalayı frenler; insula bedensel kaygı duyumlarını taşır; locus coeruleus uyarılmışlığı artırır.',
      core: ['amygdala', 'bnst', 'mpfc', 'insula'], related: ['hypothalamus', 'pag', 'broca', 'lc'],
      routes: Y([
        { from: 'amygdala', to: 'bnst', chem: 'glu', via: ['#stria'], cls: 'tehdit' },
        { from: 'amygdala', to: 'hypothalamus', chem: 'crf', via: ['#vaf'], cls: 'tehdit' },
        { from: 'bnst', to: 'hypothalamus', chem: 'crf', via: [[5, -2, -6]], cls: 'surekli' },
        { from: 'bnst', to: 'pag', chem: 'glu', via: [[4, -10, -4], [3, -22, -9]], cls: 'surekli' },
        { from: 'insula', to: 'amygdala', chem: 'glu', via: [[30, -2, -12]], cls: 'beden' },
        { from: 'mpfc', zf: 'vmpfc', to: 'amygdala', chem: 'glu', inh: true, via: ['#unc'], cls: 'duzenleme' },
        { from: 'broca', to: 'amygdala', chem: 'glu', inh: true, via: [[40, 14, -4], [28, 4, -16]], cls: 'duzenleme' },
        { from: 'lc', to: 'amygdala', chem: 'ne', via: ['#dnb', '#amyw'], cls: 'tehdit' }]),
      modes: {
        saglikli: { name: 'Sağlıklı', text: 'Tehdit sinyali gerçek tehlikeyle orantılıdır; prefrontal korteks amigdalayı frenler, tehlike geçince stres yanıtı söner.', gain: {} },
        yab: { name: 'YAB modeli', text: 'Tehdit sinyali güçlü, prefrontal fren zayıf: YAB\'lı çocuk ve ergenlerde öfkeli yüzlere sağ amigdala yanıtı daha büyük, ventrolateral PFC\'nin karşı dengelemesi zayıftır. BNST belirsiz tehdide süreğen kaygıyı taşır; döngü "kötü bir şey olacak" hissini besler.',
          gain: { tehdit: [1.5, 1.7, 1.15], surekli: [1.5, 1.7, 1.15], beden: [1.3, 1.4, 1.1], duzenleme: [0.55, 0.5, 0.45] },
          hotTaraf: { amygdala: 'R' }, hot: ['amygdala', 'bnst', 'insula'], cold: ['broca'] }
      },
      ev: 'B', src: 'Çocuk ve ergen YAB: Monk ve ark., 2008. BNST ve süreğen kaygı: Davis ve ark., 2010; Grupe ve Nitschke, 2013. Model bir kuramdır.'
    },
    bulgular: {
      text: 'Renk bulgunun yönünü gösterir: sıcak renk fazla etkin, soğuk renk az etkin ya da zayıf bağlantı. YAB\'da yapısal farklar küçüktür; bulgular daha çok işlev ve bağlantıdadır.',
      gruplar: [
        { id: 'islev', name: 'İşlev (çocuk ve ergen)', text: 'Fark edilmeyecek kadar kısa (17 ms) gösterilen öfkeli yüzlere YAB\'lı gençlerde sağ amigdala daha güçlü yanıt verir ve bu yanıt kaygı şiddetiyle ilişkilidir; sağlıklı gençlerde amigdalayı dengeleyen sağ ventrolateral PFC bağlantısı YAB\'da daha zayıf olma eğilimindedir.',
          items: [
            { id: 'amygdala', side: 'R', d: 0.35, dtxt: 'fazla etkin', txt: 'Sağ amigdala yanıtı büyük.' },
            { id: 'broca', side: 'R', d: -0.3, dtxt: 'dengeleme zayıf', txt: 'Ventrolateral PFC (alt frontal girus) karşı dengelemesi zayıf.' }],
          src: 'Monk ve ark., 2008 (Archives of General Psychiatry).' },
        { id: 'yapi', name: 'Yapı (ENIGMA)', text: 'ENIGMA-Anxiety\'nin 28 merkezli YAB çalışmasında (5–90 yaş) beyin yapısındaki farklar küçük bulundu. YAB\'ın temeli büyük olasılıkla yapıdan çok işlev ve bağlantıdır; bölge gri görünür.',
          items: [{ id: 'amygdala', d: 0.03, dtxt: 'belirgin fark yok', txt: 'Yapısal farklar küçük.' }],
          src: 'Harrewijn ve ark., 2021 (Translational Psychiatry).' }
      ]
    },
    belirtiler: [
      { id: 'endise', name: 'Endişe', sub: 'Denetlenemeyen, geleceğe yönelik tekrarlayan düşünce', devre: 'Varsayılan mod ağı',
        text: 'Medial prefrontal korteks ve arka singulat kendine ve geleceğe yönelik düşünmeyi taşır; YAB\'da bu ağ endişeyle ilişkili tekrarlayan düşüncenin dayanağıdır.',
        core: ['mpfc', 'pcc'], related: ['acc'],
        routes: Y([{ from: 'mpfc', to: 'pcc', zt: 'pcing', chem: 'glu', via: ['#cing'] }, { from: 'pcc', zf: 'pcing', to: 'mpfc', chem: 'glu', via: [[9, -40, 32], [8, -8, 38], [8, 22, 26], [7, 22, 2]] }]), ev: 'C' },
      { id: 'tehdit', name: 'Tehdide duyarlılık', sub: 'Belirsiz uyaranı tehlike olarak algılama', devre: 'Olumsuz duygu devresi',
        text: 'Amigdala ve ön singulat tehdit ipuçlarına güçlü yanıt verir; prefrontal düzenleme zayıf kaldığında tehdit algısı yaygınlaşır.',
        core: ['amygdala', 'acc'], related: ['insula', 'broca'],
        routes: Y([{ from: 'amygdala', to: 'acc', chem: 'glu', via: [[16, 4, -16], [8, 20, -6]] }, { from: 'broca', to: 'amygdala', chem: 'glu', inh: true, via: [[40, 14, -4], [28, 4, -16]] }]), ev: 'B' },
      { id: 'belirsizlik', name: 'Belirsizliğe tahammülsüzlük', sub: '"Ya kötü bir şey olursa" hissi', devre: 'BNST ve insula (süreğen kaygı)',
        text: 'Belirsiz ve öngörülemez tehdit BNST\'yi ve insulayı çalıştırır; yanıt tehdit belirginleşene dek sürer. Kitapta BNST\'nin "kötü bir şey olacak hissi" ile ilişkisi anlatılır.',
        core: ['bnst', 'insula'], related: ['amygdala', 'hypothalamus'],
        routes: Y([{ from: 'amygdala', to: 'bnst', chem: 'glu', via: ['#stria'] }, { from: 'insula', to: 'bnst', chem: 'glu', via: [[24, 4, -2], [10, 6, 0]] },
          { from: 'bnst', to: 'hypothalamus', chem: 'crf', via: [[5, -2, -6]] }]), ev: 'B' },
      { id: 'beden', name: 'Bedensel gerginlik ve uyarılmışlık', sub: 'Kas gerginliği, huzursuzluk, uyku güçlüğü', devre: 'Uyarılmışlık ve stres ekseni',
        text: 'Locus coeruleus noradrenalinle uyarılmışlığı, hipotalamus stres eksenini (kortizol) yönetir; ikisi de amigdaladan gelen sinyalle güçlenir.',
        core: ['lc', 'hypothalamus'], related: ['amygdala', 'insula'],
        routes: Y([{ from: 'lc', to: 'amygdala', chem: 'ne', via: ['#dnb', '#amyw'] }, { from: 'amygdala', to: 'hypothalamus', chem: 'crf', via: ['#vaf'] },
          { from: 'lc', to: 'mpfc', chem: 'ne', via: ['#dnb', '#pfcm'] }]), ev: 'B' }
    ],
    belirtilerSrc: 'Devreler: Williams, 2016 (Lancet Psychiatry); belirsizlik ve süreğen kaygı: Grupe ve Nitschke, 2013. Belirti-devre eşleşmesi kuramsal bir çerçevedir.',
    tedavi: [
      { id: 'bdt', name: 'Maruz bırakmalı BDT', sub: 'İlk basamak; ebeveyn katılımıyla', ev: 'A',
        text: 'Kaçınmayla beslenen kaygı döngüsünü kırar; korku sönmesini ve prefrontal düzenlemeyi kullanır (atlasta kitaptaki fronto-limbik yol). Ebeveynin güvence verme ve kaçınmayı destekleme döngüsünün kırılması tedavinin parçasıdır. Çocuk ve ergenlerde 12 haftada belirgin düzelme yalnız BDT ile %59,7.',
        core: ['mpfc', 'amygdala'], related: ['broca', 'hippocampus'], flow: 'path:frontolimbic', src: 'CAMS: Walkup ve ark., 2008 (NEJM).' },
      { id: 'ssri', name: 'SSRİ ve SNRİ', sub: 'Serotonin (ve noradrenalin) geri alımını ketler', ev: 'A',
        text: 'SSRİ\'ler (sertralin, fluoksetin, fluvoksamin) etkilidir; çocuk ve ergende YAB için FDA onaylı ilaç duloksetindir (7–17 yaş, SNRİ). 7–17 yaşta 488 çocukta 12 haftada belirgin düzelme: sertralin + BDT %80,7, yalnız sertralin %54,9, plasebo yaklaşık %24. İntihar düşüncesi uyarısı ve yakın izlem geçerlidir.',
        core: ['raphe'], related: ['amygdala', 'acc', 'insula'], flow: ['nt:5ht', 'nt:ne'], flowTo: { 'nt:ne': ['amygdala', 'mpfc'] },
        src: 'CAMS: Walkup ve ark., 2008.' }
    ]
  };

  // ---------------------------------------------------------------- Otizm spektrum bozukluğu
  const M_OSB = {
    devre: {
      title: 'Sosyal algı ağı',
      text: 'Yüz ve göz bilgisi alt temporal korteksteki fusiform bölgeden, biyolojik hareket ve ses üst temporal sulkustan gelir; amigdala bu sosyal ipuçlarının önemini değerlendirir. Temporoparyetal kavşak ve medial PFC başkasının zihnini anlamayı (zihin kuramı) sağlar; insula bedensel ve duygusal farkındalığı taşır.',
      core: ['stg', 'amygdala', 'tpj', 'mpfc'], related: ['itg', 'insula', 'ofc'],
      routes: Y([
        { from: 'itg', zf: 'fusiform', to: 'amygdala', chem: 'glu', via: [[34, -14, -24]], cls: 'yuz' },
        { from: 'itg', zf: 'fusiform', to: 'stg', zt: 'sts', chem: 'glu', via: [[48, -20, -16]], cls: 'yuz' },
        { from: 'stg', zf: 'sts', to: 'amygdala', chem: 'glu', via: [[34, -8, -18]], cls: 'ses' },
        { from: 'amygdala', to: 'ofc', chem: 'glu', via: ['#uncr'], cls: 'deger' },
        { from: 'stg', zf: 'sts', to: 'tpj', chem: 'glu', via: [[52, -30, 8]], cls: 'zihin' },
        { from: 'tpj', to: 'mpfc', chem: 'glu', via: [[44, -30, 30], [20, 10, 40]], cls: 'zihin' },
        { from: 'insula', to: 'amygdala', chem: 'glu', via: [[30, -2, -12]], cls: 'beden' }]),
      modes: {
        tipik: { name: 'Tipik gelişim', text: 'Bebek ilk aylardan itibaren yüzlere ve göz bölgesine yönelir; sosyal ipuçları bu ağda işlenir ve zamanla başkasının niyetini anlamaya dönüşür.', gain: {} },
        osb: { name: 'Otizm modeli', text: 'Sosyal ipuçları ağa daha zayıf ve farklı biçimde aktarılır: sonradan otizm tanısı alan bebeklerde göz bölgesine bakma 2–6. aylar arasında azalmaya başlar; pek çok çalışmada yüzlere fusiform ve amigdala yanıtı farklıdır. Bulgular kişiden kişiye çok değişir; bu çizim tek bir "bozuk devre" değil, olası bir şemadır.',
          gain: { yuz: [0.6, 0.5, 0.45], ses: [0.75, 0.7, 0.6], zihin: [0.7, 0.6, 0.55], deger: [0.75, 0.7, 0.6] }, cold: ['itg'] }
      },
      ev: 'B', src: 'Göz bölgesine bakma: Jones ve Klin, 2013 (Nature). Model şematiktir; otizm tek bir devre bozukluğu değildir.'
    },
    bulgular: {
      text: 'Renk bulgunun yönünü gösterir: soğuk renk daha küçük ya da ince, sıcak renk daha kalın. Farklar küçük ve grup düzeyindedir; görüntüleme bireyde tanı koydurmaz.',
      gruplar: [
        { id: 'yapi', name: 'Yapı (ENIGMA)', text: 'ENIGMA-ASD (1.571 otizmli, 1.651 kontrol, 2–64 yaş): pallidum, putamen, amigdala ve akumbens küçük; frontal korteks kalın, temporal korteks ince. Korteks farkları en çok ergenlik çevresinde. Tek tek bölgelerin etki büyüklükleri yerine çalışmanın aralıkları verildi; renk yoğunluğu yaklaşıktır. Ayrıca otizmli kardeşi olan bebeklerde 6–12. aylarda korteks yüzey alanı hızla genişler (tanı alan 15 bebek).',
          items: [
            { id: 'gp', d: -0.13, dtxt: 'd ≈ −0,1 ile −0,16', txt: 'Pallidum küçük.' },
            { id: 'putamen', d: -0.13, dtxt: 'd ≈ −0,1 ile −0,16', txt: 'Putamen küçük.' },
            { id: 'amygdala', d: -0.12, dtxt: 'd ≈ −0,1 ile −0,16', txt: 'Amigdala küçük.' },
            { id: 'nacc', d: -0.12, dtxt: 'd ≈ −0,1 ile −0,16', txt: 'Akumbens küçük.' },
            { id: 'dlpfc', d: 0.2, dtxt: 'd ≈ 0,2', txt: 'Frontal korteks kalın.' },
            { id: 'stg', d: -0.2, dtxt: 'd ≈ −0,2', txt: 'Temporal korteks ince.' }],
          src: 'van Rooij ve ark., 2018 (American Journal of Psychiatry); Hazlett ve ark., 2017 (Nature).' }
      ]
    },
    belirtiler: [
      { id: 'sosyal', name: 'Sosyal iletişim ve zihin kuramı', sub: 'Karşılıklılık, niyet ve duyguyu anlama', devre: 'Zihin kuramı ağı',
        text: 'Üst temporal sulkus, temporoparyetal kavşak ve medial PFC başkasının bakış açısını ve niyetini anlamayı sağlar.',
        core: ['tpj', 'mpfc'], related: ['stg'],
        routes: Y([{ from: 'stg', zf: 'sts', to: 'tpj', chem: 'glu', via: [[52, -30, 8]] }, { from: 'tpj', to: 'mpfc', chem: 'glu', via: [[44, -30, 30], [20, 10, 40]] }]), ev: 'B' },
      { id: 'yuz', name: 'Yüz ve göz teması', sub: 'Göz bölgesine bakma, yüz ifadesini okuma', devre: 'Yüz işleme yolu',
        text: 'Fusiform bölge yüzleri, amigdala yüz ifadesinin önemini işler. Sonradan otizm tanısı alan bebeklerde göz bölgesine bakma süresi erken dönemde azalır.',
        core: ['itg', 'amygdala'], related: ['stg'],
        routes: Y([{ from: 'itg', zf: 'fusiform', to: 'amygdala', chem: 'glu', via: [[34, -14, -24]] }, { from: 'itg', zf: 'fusiform', to: 'stg', zt: 'sts', chem: 'glu', via: [[48, -20, -16]] }]), ev: 'B' },
      { id: 'yinelenen', name: 'Yinelenen davranışlar ve aynılık ısrarı', sub: 'Sınırlı ilgiler, rutinlere bağlılık', devre: 'Kortiko-striatal döngüler',
        text: 'Alışkanlık ve esneklik devreleri; ENIGMA\'da bazal ganglion hacim farkları bulunmuştur. Bu belirtilerin devre temeli henüz net değildir.',
        core: ['caudate', 'putamen'], related: ['ofc', 'gpi', 'th_md'],
        routes: Y([{ from: 'ofc', to: 'caudate', chem: 'glu', via: [[18, 24, -4], [14, 18, 4]] }, { from: 'caudate', to: 'gpi', chem: 'gaba', inh: true, via: [[15, 4, 4]] }].concat(BG_OUT('th_md'),
          [{ from: 'th_md', to: 'ofc', chem: 'glu', via: [[9, -4, 8], [14, 16, 2], [18, 28, -6]] }])), ev: 'C' },
      { id: 'duyusal', name: 'Duyusal farklılıklar ve iç beden duyumu', sub: 'Aşırı ya da az duyarlılık, interosepsiyon', devre: 'İnsula ve duyusal korteks',
        text: 'Duyusal korteks çevreden, insula bedenin içinden gelen bilgiyi duygusal farkındalığa taşır. Kitapta otizmde interosepsiyon farklılıkları anlatılır.',
        core: ['insula'], related: ['somato', 'amygdala'],
        routes: Y([{ from: 'somato', to: 'insula', chem: 'glu', via: [[44, -16, 18]] }, { from: 'insula', to: 'amygdala', chem: 'glu', via: [[30, -2, -12]] }]), ev: 'C' },
      { id: 'dil', name: 'Dil', sub: 'Konuşmanın gecikmesi ve kullanım farklılıkları', devre: 'Dil ağı',
        text: 'Üst temporal girus konuşmayı algılar, alt frontal girus (Broca) üretir; aralarındaki bağlantı dili taşır. Otizmde dil düzeyi kişiden kişiye çok değişir.',
        core: ['stg', 'broca'], related: ['tpj'],
        routes: Y([{ from: 'stg', zf: 'audstg', to: 'broca', zt: 'ifg44', chem: 'glu', via: [[48, -30, 24], [48, 0, 22]] }, { from: 'broca', to: 'stg', chem: 'glu', via: [[46, 4, 14], [50, -24, 4]] }]), ev: 'B' }
    ],
    belirtilerSrc: 'Sosyal algı: Allison ve ark., 2000; zihin kuramı: Saxe ve Kanwisher, 2003. Yüz ve bakış: Dalton ve ark., 2005; Jones ve Klin, 2013. Yapı: van Rooij ve ark., 2018. Konuşma: Hickok ve Poeppel, 2007. Belirti-devre eşleşmesi kuramsal bir çerçevedir; otizmde bulgular kişiden kişiye çok değişir.',
    tedavi: [
      { id: 'ndbi', name: 'Erken gelişimsel-davranışçı müdahale', sub: 'Doğal ortamda, oyun ve günlük rutin içinde', ev: 'A',
        text: 'Doğal ortamda uygulanan gelişimsel-davranışçı müdahaleler (NDBI) ve gelişimsel müdahaleler sosyal iletişim için en güçlü kanıta sahiptir (130 örneklem, 0–8 yaş). Ortak dikkat ve sosyal ilgiyi hedefler; erken yoğun davranışçı müdahale umut verici ama daha nitelikli çalışma gerekir.',
        core: ['tpj', 'stg', 'mpfc'], related: ['amygdala', 'itg'],
        routes: Y([{ from: 'itg', zf: 'fusiform', to: 'amygdala', chem: 'glu', via: [[34, -14, -24]] }, { from: 'stg', zf: 'sts', to: 'tpj', chem: 'glu', via: [[52, -30, 8]] },
          { from: 'tpj', to: 'mpfc', chem: 'glu', via: [[44, -30, 30], [20, 10, 40]] }]), src: 'Sandbank ve ark., 2020 (Psychological Bulletin).' },
      { id: 'antipsikotik', name: 'Risperidon ve aripiprazol', sub: 'Eşlik eden irritabilite ve saldırganlık için', ev: 'A',
        text: 'Çekirdek belirtileri değil, eşlik eden irritabilite ve saldırganlığı hedefler; FDA onaylı (risperidon 5 yaş üstü, aripiprazol 6–17 yaş). Dopamin ve serotonin reseptörlerini etkiler; kilo artışı ve metabolik yan etkiler izlenir. Çekirdek belirtileri tedavi eden onaylı bir ilaç yoktur.',
        core: ['caudate', 'putamen', 'nacc'], related: ['vta', 'snc', 'mpfc', 'dlpfc'], flow: ['nt:da', 'nt:5ht'],
        flowTo: { 'nt:5ht': ['mpfc', 'dlpfc', 'acc'] }, src: 'FDA onayları (2006, 2009).' },
      { id: 'oksitosin', name: 'Burun içi oksitosin (araştırma)', sub: 'Sosyal bağlanma hormonu', ev: 'B',
        text: '290 çocukta 24 haftalık burun içi oksitosin sosyal işlevi plaseboya göre iyileştirmedi. Kitapta oksitosin yolu ve otizmdeki oksitosin çalışmaları anlatılır.',
        core: ['hypothalamus'], related: ['amygdala', 'nacc'], flow: 'path:oxt', src: 'Sikich ve ark., 2021 (NEJM).' },
      { id: 'melatonin', name: 'Uzatılmış salımlı melatonin', sub: 'Uykusuzluk', ev: 'B',
        text: 'Davranışçı müdahale yetmediğinde uykusuzluğu olan 125 çocukta (çoğu otizmli, 2–17 yaş) 13 haftada toplam uyku yaklaşık 57 dakika arttı (plasebo 9); uykuya dalma süresi kısaldı. Bu kartta beyin yolu çizilmez.',
        core: [], related: [], src: 'Gringras ve ark., 2017 (JAACAP).' },
      { id: 'osbdehb', name: 'Eşlik eden hiperaktivite: metilfenidat', sub: 'Yanıt daha küçük', ev: 'B',
        text: 'Hiperaktivitesi olan 5–14 yaş 72 çocukta çapraz çalışmada hiperaktiviteyi azalttı, ama yanıt tipik gelişen DEHB\'li çocuklardakinden küçüktü; %18\'i yan etki nedeniyle bıraktı, yüksek dozda sosyal geri çekilme arttı.',
        core: ['caudate', 'putamen', 'dlpfc'], related: ['vta', 'snc', 'lc'], flow: ['nt:da', 'nt:ne'], src: 'RUPP Autism Network, 2005 (Archives of General Psychiatry).' }
    ]
  };

  // ---------------------------------------------------------------- TSSB
  const UNC_AMY = { from: 'mpfc', zf: 'vmpfc', to: 'amygdala', chem: 'glu', inh: true, via: ['#unc'] };
  const M_TSSB = {
    devre: {
      title: 'Korku öğrenmesi ve sönme devresi',
      text: 'Amigdala tehdidi değerlendirir; hipotalamus ve PAG üzerinden stres yanıtını ve savunmayı (kaç, savaş, don) başlatır, locus coeruleus uyarılmışlığı artırır. Hipokampus bağlamı ("burası güvenli mi") taşır; ventromedial PFC öğrenilmiş sönmeyi hatırlatıp amigdalayı frenler.',
      core: ['amygdala', 'hippocampus', 'mpfc'], related: ['pag', 'hypothalamus', 'lc'], yon: [1, -0.55, 0.3],
      routes: Y([
        { from: 'amygdala', to: 'hypothalamus', chem: 'crf', via: ['#vaf'], cls: 'korku' },
        { from: 'amygdala', to: 'pag', chem: 'glu', via: [[14, -10, -16], [5, -24, -12]], cls: 'korku' },
        { from: 'lc', to: 'amygdala', chem: 'ne', via: ['#dnb', '#amyw'], cls: 'korku' },
        { from: 'hippocampus', to: 'amygdala', chem: 'glu', via: [[26, -14, -18]], cls: 'baglam' },
        { from: 'hippocampus', to: 'mpfc', zt: 'vmpfc', chem: 'glu', via: [[24, -10, -20], [12, 22, -14]], cls: 'baglam' },
        Object.assign({ cls: 'sonme' }, UNC_AMY)]),
      modes: {
        saglikli: { name: 'Sağlıklı', text: 'Tehlike geçince hipokampus güvenli bağlamı tanır, ventromedial PFC amigdalayı frenler; korku söner ve beden sakinleşir.', gain: {} },
        tssb: { name: 'TSSB modeli', text: 'Amigdala tehdit ipuçlarına aşırı yanıt verir; ventromedial PFC\'nin frenlemesi ve hipokampusun bağlam bilgisi zayıftır. Sönme öğrenilse de hatırlanamaz, korku travmayı hatırlatan her yere genelleşir ("her yer tehlikeli"). Uyarılmışlık ve stres ekseni süreğen çalışır.',
          gain: { korku: [1.6, 1.8, 1.15], baglam: [0.6, 0.5, 0.45], sonme: [0.55, 0.5, 0.45] }, hot: ['amygdala'], cold: ['mpfc', 'hippocampus'] }
      },
      ev: 'B', src: 'Korku öğrenmesi ve sönme devresi klasik nörodevre modelidir; hipokampus: Logue ve ark., 2018. Model bir kuramdır.'
    },
    bulgular: {
      text: 'Renk bulgunun yönünü ve büyüklüğünü gösterir: soğuk renk daha küçük. Farklar grup ortalamasıdır ve küçüktür; görüntüleme bireyde tanı koydurmaz.',
      gruplar: [
        { id: 'yapi', name: 'Yapı (ENIGMA-PGC)', text: 'ENIGMA-PGC (1.868 kişi, 794 TSSB, 16 kohort): mevcut TSSB\'de hipokampus, travmaya maruz kalmış ama TSSB gelişmemiş kişilerden küçük. Amigdala farkı çoklu karşılaştırma düzeltmesinden sonra anlamlı değil.',
          items: [
            { id: 'hippocampus', d: -0.17, dtxt: 'd = −0,17', txt: 'Hipokampus küçük.' },
            { id: 'amygdala', d: -0.11, dtxt: 'd = −0,11', txt: 'Amigdala küçük (düzeltmeden sonra anlamlı değil).' }],
          src: 'Logue ve ark., 2018 (Biological Psychiatry).' }
      ]
    },
    belirtiler: [
      { id: 'yeniden', name: 'Yeniden yaşama', sub: 'Anılar, kabuslar, travmatik oyun', devre: 'Amigdala-hipokampus bellek devresi',
        text: 'Travma anısı duygusal yüküyle birlikte depolanır; hipokampus bağlamı ve zamanı yeterince işleyemeyince anı "şimdi oluyormuş" gibi yeniden yaşanır. Kitapta bu yolak "PTSD\'de bağlamsal genelleme" olarak anlatılır.',
        core: ['amygdala', 'hippocampus'], related: ['insula'],
        routes: Y([{ from: 'hippocampus', to: 'amygdala', chem: 'glu', via: [[26, -14, -18]] }, { from: 'amygdala', to: 'hippocampus', chem: 'glu', via: [[24, -10, -22]] }]), ev: 'B' },
      { id: 'uyarilma', name: 'Aşırı uyarılmışlık', sub: 'İrkilme, tetikte olma, uyku güçlüğü', devre: 'Uyarılmışlık ve stres ekseni',
        text: 'Locus coeruleus noradrenalinle, hipotalamus stres ekseniyle (kortizol) bedeni sürekli hazır tutar; ikisi de amigdaladan gelen sinyalle güçlenir.',
        core: ['lc', 'hypothalamus'], related: ['amygdala'],
        routes: Y([{ from: 'lc', to: 'amygdala', chem: 'ne', via: ['#dnb', '#amyw'] }, { from: 'amygdala', to: 'hypothalamus', chem: 'crf', via: ['#vaf'] },
          { from: 'lc', to: 'mpfc', chem: 'ne', via: ['#dnb', '#pfcm'] }]), ev: 'B' },
      { id: 'kacinma', name: 'Kaçınma ve sönmeyen korku', sub: 'Hatırlatıcılardan uzak durma', devre: 'Fronto-limbik sönme devresi',
        text: 'Ventromedial PFC öğrenilmiş sönmeyi hatırlatarak amigdalayı frenler; TSSB\'de bu fren zayıftır. Kaçınma, sönme öğrenmesine fırsat vermediği için korkuyu sürdürür.',
        core: ['mpfc', 'amygdala'], related: ['hippocampus'],
        routes: Y([UNC_AMY, { from: 'hippocampus', to: 'mpfc', zt: 'vmpfc', chem: 'glu', via: [[24, -10, -20], [12, 22, -14]] }]), ev: 'B' },
      { id: 'dissosiyasyon', name: 'Dissosiyasyon ve donma', sub: 'Kopukluk, uyuşma, donakalma', devre: 'PAG ve vagal savunma',
        text: 'Kaçışın mümkün olmadığı tehditte PAG donma ve kapanma yanıtını başlatır; kitapta dissosiyasyon PAG ve polivagal hiyerarşi üzerinden anlatılır. Dissosiyatif alt tipte prefrontal korteksin limbik yanıtı aşırı bastırdığı öne sürülür.',
        core: ['pag', 'vagal'], related: ['amygdala', 'mpfc'],
        routes: Y([{ from: 'amygdala', to: 'pag', chem: 'glu', via: [[14, -10, -16], [5, -24, -12]] }, { from: 'pag', to: 'vagal', chem: 'glu', via: [[4, -36, -30]] }]), ev: 'C' }
    ],
    belirtilerSrc: 'Bağlam: Liberzon ve Abelson, 2016. Sönme: Milad ve ark., 2009 (16 hasta). Stres yanıtı: Ulrich-Lai ve Herman, 2009. Dissosiyatif alt tip: Lanius ve ark., 2010. Belirti-devre eşleşmesi kuramsal bir çerçevedir.',
    tedavi: [
      { id: 'tobdt', name: 'Travma odaklı BDT', sub: 'Çocuk ve ergende ilk basamak', ev: 'A',
        text: 'Yaştan, cinsiyetten ve travma türünden bağımsız etkili (bireysel veri meta-analizi). Travma anlatısı ve kademeli maruz bırakma, korku sönmesini (ventromedial PFC → amigdala) ve güvenli bağlamın yeniden kurulmasını kullanır. Atlasta kitaptaki fronto-limbik yol çizilir.',
        core: ['mpfc', 'amygdala'], related: ['hippocampus'], flow: 'path:frontolimbic', src: 'The Lancet Child & Adolescent Health, 2023 (bireysel veri meta-analizi).' },
      { id: 'ssri', name: 'SSRİ', sub: 'Çocukta ilk seçenek değil', ev: 'B',
        text: '131 çocuk ve ergende 10 haftalık sertralin plaseboyu geçemedi. Erişkinde etkilidir; çocukta eşlik eden depresyon ve anksiyetede kullanılabilir.',
        core: ['raphe'], related: ['amygdala', 'mpfc', 'hippocampus'], flow: 'nt:5ht', src: 'Robb ve ark., 2010.' },
      { id: 'emdr', name: 'EMDR', sub: 'Göz hareketleriyle duyarsızlaştırma', ev: 'B',
        text: 'Çocuk ve gençlerde 32 çalışmalık ağ meta-analizinde etkilidir, ama etkisi bireysel travma odaklı BDT\'den küçüktür; kanıt orta-düşük niteliktedir. Bu kartta beyin yolu çizilmez.',
        core: [], related: [], src: 'Mavranezouli ve ark., 2020 (Journal of Child Psychology and Psychiatry).' },
      { id: 'pe', name: 'Uzatılmış maruz bırakma', sub: 'Ergen uyarlaması', ev: 'B',
        text: 'Cinsel istismara bağlı TSSB\'si olan 13–18 yaş 61 kızda destekleyici danışmanlıktan üstündü, fark 12 ay sürdü; tedaviyi toplum kliniğindeki danışmanlar uyguladı. Korku sönmesini kullanır (atlasta kitaptaki fronto-limbik yol).',
        core: ['mpfc', 'amygdala'], related: ['hippocampus'], flow: 'path:frontolimbic', src: 'Foa ve ark., 2013 (JAMA).' }
    ]
  };

  // ---------------------------------------------------------------- Bipolar
  const REG_DUZ = [{ from: 'broca', to: 'amygdala', chem: 'glu', inh: true, via: [[40, 14, -4], [28, 4, -16]], cls: 'duzen' },
    { from: 'ofc', to: 'amygdala', chem: 'glu', inh: true, via: ['#unc'], cls: 'duzen' }];
  const M_BIP = {
    devre: {
      title: 'Duygu düzenleme ve ödül dengesi',
      text: 'Amigdala duygusal uyaranın şiddetini, ventrolateral PFC (alt frontal girus) ve OFC onun düzenlenmesini taşır. VTA\'dan akumbense giden dopamin yolu ödül ve güdülenmeyi besler. Bipolar bozuklukta bu iki sistemin dengesi atak boyunca iki yöne kayar.',
      core: ['amygdala', 'broca', 'ofc', 'nacc'], related: ['vta', 'acc', 'hippocampus'],
      routes: Y(REG_DUZ.concat([
        { from: 'amygdala', to: 'acc', chem: 'glu', via: [[16, 4, -16], [8, 20, -6]], cls: 'duygu' },
        { from: 'vta', to: 'nacc', chem: 'da', via: ['#mfb'], cls: 'odul' },
        { from: 'ofc', to: 'nacc', chem: 'glu', via: [[16, 22, -10]], cls: 'odul' }])),
      modes: {
        saglikli: { name: 'Dengede', text: 'Ödül sinyali güdülenmeyi besler, prefrontal korteks duygusal yanıtı düzenler; duygudurum olaylara göre inip çıkar, sonra dengeye döner.', gain: {} },
        depresif: { name: 'Depresif atak', text: 'Ödül yolu zayıflar (zevk alamama, enerji kaybı); olumsuz duygu artar. Bipolar depresyonda antidepresanlar tek başına kullanılmaz.',
          gain: { odul: [0.5, 0.5, 0.45], duygu: [1.4, 1.6, 1.1], duzen: [0.7, 0.6, 0.6] }, hot: ['amygdala'], cold: ['nacc'] },
        mani: { name: 'Mani modeli', text: 'Ödül yolu aşırı çalışır: güdülenme, enerji ve risk alma artar, uyku gereksinimi azalır. Amigdala daha duyarlı, ventrolateral PFC ve OFC\'nin frenlemesi zayıftır. Manide ödül duyarlılığının arttığı bir kuramdır.',
          gain: { odul: [1.7, 2, 1.2], duygu: [1.4, 1.6, 1.1], duzen: [0.55, 0.5, 0.45] }, hot: ['nacc', 'amygdala'], cold: ['broca'] }
      },
      ev: 'B', src: 'ENIGMA\'da en büyük korteks incelmesi sol pars opercularis\'te (alt frontal girus; Hibar ve ark., 2018). Ödül duyarlılığı modeli kuramsaldır.'
    },
    bulgular: {
      text: 'Renk bulgunun yönünü ve büyüklüğünü gösterir: soğuk renk daha küçük ya da ince. Farklar grup ortalamasıdır ve küçüktür; görüntüleme bireyde tanı koydurmaz.',
      gruplar: [
        { id: 'alt', name: 'Alt kortikal (ENIGMA)', text: 'ENIGMA-BD (1.710 hasta, 2.594 kontrol): hipokampus ve talamus küçük, lateral ventriküller büyük. Lityum kullananlarda talamus daha büyük bulundu (keşifsel).',
          items: [{ id: 'hippocampus', d: -0.23, dtxt: 'd = −0,23', txt: 'Hipokampus küçük.' }, { id: 'thalamus', d: -0.15, dtxt: 'd = −0,15', txt: 'Talamus küçük.' }],
          src: 'Hibar ve ark., 2016 (Molecular Psychiatry).' },
        { id: 'korteks', name: 'Korteks (ENIGMA)', text: 'ENIGMA-BD (1.837 hasta, 2.582 kontrol): frontal, temporal ve parietal korteks ince; hastalık süresi uzadıkça incelme artar. Lityum, antiepileptik ve antipsikotikler korteks ölçümleriyle ilişkili.',
          items: [{ id: 'ifg44', side: 'L', d: -0.29, dtxt: 'd = −0,29', txt: 'Sol pars opercularis (alt frontal girus) ince.' },
            { id: 'fusiform', side: 'L', d: -0.29, dtxt: 'd = −0,29', txt: 'Sol fusiform girus ince.' },
            { id: 'dlpfc', side: 'L', d: -0.28, dtxt: 'd = −0,28', txt: 'Sol rostral orta frontal korteks ince.' }],
          src: 'Hibar ve ark., 2018 (Molecular Psychiatry).' }
      ]
    },
    belirtiler: [
      { id: 'mani', name: 'Mani: artmış enerji ve risk alma', sub: 'Uyku gereksiniminde azalma, hızlanma, riskli davranış', devre: 'Ödül devresi',
        text: 'Ödül beklentisi ve güdülenme artar; ödül devresinde artmış duyarlılık öne sürülür. Kitapta SEEKING sisteminin klinik karşılıkları arasında mani de sayılır.',
        core: ['nacc', 'vta'], related: ['ofc'],
        routes: Y([{ from: 'vta', to: 'nacc', chem: 'da', via: ['#mfb'] }, { from: 'ofc', to: 'nacc', chem: 'glu', via: [[16, 22, -10]] }]), ev: 'C' },
      { id: 'duygu', name: 'Duygusal dalgalanma ve irritabilite', sub: 'Yoğun ve hızlı değişen duygu', devre: 'Duygu düzenleme devresi',
        text: 'Amigdala duygusal uyaranlara güçlü yanıt verir; ventrolateral PFC ve OFC\'nin frenlemesi zayıf kaldığında duygu hızla yükselir.',
        core: ['amygdala', 'broca'], related: ['ofc', 'acc'],
        routes: Y(REG_DUZ.concat([{ from: 'amygdala', to: 'acc', chem: 'glu', via: [[16, 4, -16], [8, 20, -6]] }])), ev: 'B' },
      { id: 'depresif', name: 'Depresif atak', sub: 'Çökkünlük, enerji kaybı', devre: 'Ödül ve olumsuz duygu devreleri',
        text: 'Bipolar depresyonda ödül yanıtı azalır, olumsuz duygu artar. İlk atak çoğu kez depresiftir; bu yüzden ergen depresyonunda aile öyküsü önemlidir.',
        core: ['acc', 'amygdala'], related: ['nacc', 'mpfc'],
        routes: Y([{ from: 'amygdala', to: 'acc', chem: 'glu', via: [[16, 4, -16], [8, 20, -6]] }, { from: 'vta', to: 'nacc', chem: 'da', via: ['#mfb'] }]), ev: 'B' }
    ],
    belirtilerSrc: 'Duygu ve ödül devreleri: Phillips ve Swartz, 2014. Davranışsal yaklaşım sistemi: Urošević ve ark., 2008. Belirti-devre eşleşmesi kuramsal bir çerçevedir.',
    tedavi: [
      { id: 'lityum', name: 'Lityum', sub: 'Duygudurum dengeleyici', ev: 'A',
        text: '2018\'de 7–17 yaşta akut mani ve idame tedavisi için FDA onayı aldı (81 çocuklu plasebo kontrollü çalışma dahil). Kan düzeyi, böbrek ve tiroit izlemi gerekir. ENIGMA\'da lityum kullananlarda talamus hacmi daha büyük bulundu (keşifsel). Türkiye KÜB\'ünde 12 yaş altında kullanılmamalı. Mekanizma kesin bilinmediği için bu kartta beyin yolu ya da bölge vurgusu çizilmez.',
        core: [], related: [], routes: Y(REG_DUZ), src: 'FDA, 2018; Hibar ve ark., 2016.' },
      { id: 'antipsikotik', name: 'İkinci kuşak antipsikotikler', sub: 'Akut mani', ev: 'A',
        text: 'Ergenlerde akut mani için onaylıdır (ör. aripiprazol, risperidon, ketiapin); D2 reseptörlerini engelleyerek ödül yolundaki aşırı dopamin sinyalini azaltır. Kilo ve metabolik yan etkiler izlenir.',
        core: ['nacc', 'caudate', 'putamen'], related: ['vta', 'snc'], flow: 'nt:da', src: 'FDA onayları.' },
      { id: 'psikoegitim', name: 'Psikoeğitim ve aile odaklı terapi', sub: 'Atakları önleme', ev: 'B',
        text: '58 ergenlik randomize çalışmada aile odaklı terapi depresif belirtilerde daha hızlı düzelme ve daha az depresif hafta sağladı; yineleme zamanı ve mani farklı değildi. Bu kartta beyin yolu çizilmez.',
        core: [], related: [], src: 'Miklowitz ve ark., 2008 (Archives of General Psychiatry).' },
      { id: 'lamotrijin', name: 'Lamotrijin', sub: 'Ek idame tedavisi', ev: 'B',
        text: '10–17 yaşta randomize kesilme çalışmasında birincil analiz anlamlı değildi; 13–17 yaşta üstünlük görüldü, 10–12 yaşta görülmedi. Deri reaksiyonları izlenir. Bu kartta beyin yolu çizilmez.',
        core: [], related: [], src: 'Findling ve ark., 2015 (JAACAP).' },
      { id: 'valproat', name: 'Valproat', sub: 'Kanıt zayıf, gebelik riski yüksek', ev: 'B',
        text: '10–17 yaşta 150 gençte uzatılmış salımlı divalproeks, 4 haftada maniyi plasebodan fazla azaltmadı. Gebelikte malformasyon ve gelişim sorunları riski yüksektir: Avrupa\'da çocuk doğurabilecek kız ve kadınlarda gebelik önleme programı olmadan kontrendikedir, bipolar bozuklukta gebelikte kullanılmaz. Bu kartta beyin yolu çizilmez.',
        core: [], related: [], src: 'Wagner ve ark., 2009 (JAACAP); EMA, 2018.' }
    ]
  };

  // ---------------------------------------------------------------- Şizofreni
  const M_SZ = {
    devre: {
      title: 'Dopamin yolları ve hipokampus',
      text: 'VTA\'dan akumbense ve birleştirici striatuma (mezolimbik), prefrontal kortekse (mezokortikal) dopamin yolları çıkar; substantia nigra dorsal striatumu besler. Hipokampus akumbens ve ventral pallidum üzerinden VTA dopamin nöronlarının etkinliğini ayarlar.',
      core: ['caudate', 'vta', 'hippocampus', 'dlpfc'], related: ['nacc', 'sn', 'vp', 'stg'],
      routes: Y([
        { from: 'vta', to: 'nacc', chem: 'da', via: ['#mfb'], cls: 'meso' },
        { from: 'vta', to: 'caudate', chem: 'da', via: ['#mfb', [12, 10, 4]], cls: 'meso' },
        { from: 'snc', to: 'caudate', chem: 'da', via: ['#nig', [14, 4, 8]], cls: 'meso' },
        { from: 'vta', to: 'dlpfc', chem: 'da', via: ['#pfcl'], cls: 'kortikal' },
        { from: 'hippocampus', to: 'nacc', chem: 'glu', via: [[22, -10, -14], [12, 8, -8]], cls: 'hip' },
        { from: 'nacc', to: 'vp', chem: 'gaba', inh: true, via: [[13, 6, -8]], cls: 'hip' },
        { from: 'vp', to: 'vta', chem: 'gaba', inh: true, via: [[8, -6, -10], [4, -14, -12]], cls: 'hip' }]),
      modes: {
        saglikli: { name: 'Sağlıklı', text: 'Dopamin yalnızca önemli ve beklenmedik olaylarda anlam sinyali verir; prefrontal korteks yeterli dopaminle çalışma belleğini ve planlamayı yürütür.', gain: {} },
        psikoz: { name: 'Psikoz modeli', text: 'Striatumda dopamin sentezi ve salınımı artmıştır (44 çalışmanın meta-analizi, d = 0,79): nötr uyaranlara aşırı anlam yüklenir, sanrı ve varsanılar bu deneyimden doğar. Hipokampal aşırı etkinliğin dopamin nöronlarını sürdüğü öne sürülür; prefrontal kortekse giden dopamin ise azalmıştır (olumsuz ve bilişsel belirtiler).',
          gain: { meso: [1.7, 2, 1.2], hip: [1.4, 1.6, 1.1], kortikal: [0.5, 0.5, 0.45] }, hot: ['caudate', 'hippocampus'], cold: ['dlpfc'] }
      },
      ev: 'B', src: 'Dopamin: Howes ve ark., 2012; aşırı anlam atfı: Kapur, 2003. Hipokampus-dopamin modeli kuramsaldır.'
    },
    bulgular: {
      text: 'Renk bulgunun yönünü ve büyüklüğünü gösterir: sıcak renk daha büyük ya da fazla, soğuk renk daha küçük. Farklar grup ortalamasıdır; görüntüleme bireyde tanı koydurmaz.',
      gruplar: [
        { id: 'alt', name: 'Alt kortikal (ENIGMA)', text: 'ENIGMA-SZ (2.028 hasta, 2.540 kontrol): hipokampus, amigdala, talamus ve akumbens küçük; pallidum ve lateral ventriküller büyük. Hipokampus farkı ilaçsız hasta oranıyla ilişkili.',
          items: [
            { id: 'hippocampus', d: -0.46, dtxt: 'd = −0,46', txt: 'Hipokampus küçük (en büyük fark).' },
            { id: 'amygdala', d: -0.31, dtxt: 'd = −0,31', txt: 'Amigdala küçük.' },
            { id: 'thalamus', d: -0.31, dtxt: 'd = −0,31', txt: 'Talamus küçük.' },
            { id: 'nacc', d: -0.25, dtxt: 'd = −0,25', txt: 'Akumbens küçük.' },
            { id: 'gp', d: 0.21, dtxt: 'd = +0,21', txt: 'Pallidum büyük.' }],
          src: 'van Erp ve ark., 2016 (Molecular Psychiatry).' },
        { id: 'dopamin', name: 'Dopamin (PET)', text: '44 çalışmanın meta-analizinde striatumda presinaptik dopamin işlevi (sentez ve salınım) belirgin artmış; dopamin taşıyıcısında değişiklik yok, D2/3 reseptörlerindeki küçük artış ilaçsız hastalarda görülmedi.',
          items: [{ id: 'caudate', d: 0.79, dtxt: 'd = 0,79', txt: 'Striatumda presinaptik dopamin işlevi artmış (en çok birleştirici striatum).' }],
          hot: ['caudate'], src: 'Howes ve ark., 2012 (Archives of General Psychiatry).' }
      ]
    },
    belirtiler: [
      { id: 'olumlu', name: 'Varsanı ve sanrılar', sub: 'Olumlu belirtiler', devre: 'Mezolimbik dopamin ve aşırı anlam atfı',
        text: 'Düzensiz dopamin salınımı nötr uyaranlara anlam yükler; sanrılar bu deneyimi açıklama çabası olarak görülür. İşitsel varsanılarda üst temporal girus da etkinleşir. Kitapta SEEKING için "psikozda aşırı anlam atfı" geçer.',
        core: ['nacc', 'caudate', 'vta'], related: ['audstg'],
        routes: Y([{ from: 'vta', to: 'nacc', chem: 'da', via: ['#mfb'] }, { from: 'vta', to: 'caudate', chem: 'da', via: ['#mfb', [12, 10, 4]] }]), ev: 'B' },
      { id: 'olumsuz', name: 'Olumsuz belirtiler', sub: 'Güdü ve duygulanımda azalma, sosyal çekilme', devre: 'Mezokortikal yol ve ödül',
        text: 'Prefrontal kortekse giden dopaminin azalması ve ödül devresindeki değişiklikler güdü ve duygulanım kaybıyla ilişkilendirilir; antipsikotikler bu belirtilerde az etkilidir.',
        core: ['dlpfc', 'mpfc'], related: ['vta', 'nacc'],
        routes: Y([{ from: 'vta', to: 'dlpfc', chem: 'da', via: ['#pfcl'] }, { from: 'vta', to: 'mpfc', chem: 'da', via: ['#pfcm'] }]), ev: 'B' },
      { id: 'bilissel', name: 'Bilişsel güçlükler', sub: 'Çalışma belleği, dikkat, planlama', devre: 'Dorsolateral prefrontal devre',
        text: 'Çalışma belleği ve planlama DLPFC\'nin striatum ve talamusla döngüsüne dayanır; bilişsel güçlükler günlük işlevselliği belirgin biçimde sınırlar.',
        core: ['dlpfc'], related: ['caudate', 'th_md'],
        routes: Y([{ from: 'dlpfc', to: 'caudate', chem: 'glu', via: [[26, 24, 22], [16, 14, 14]] }, { from: 'th_md', to: 'dlpfc', chem: 'glu', via: [[10, 0, 14], [26, 24, 26]] }]), ev: 'B' }
    ],
    belirtilerSrc: 'Dopamin: Howes ve ark., 2012; Kapur, 2003; prefrontal dopamin: Slifstein ve ark., 2015 (20 hasta). Varsanı: Jardri ve ark., 2011. Biliş ve işlevsellik: Green, 1996. Belirti-devre eşleşmesi kuramsal bir çerçevedir.',
    tedavi: [
      { id: 'antipsikotik', name: 'Antipsikotikler', sub: 'D2 reseptör blokajı', ev: 'A',
        text: 'Ortak etkileri D2 reseptör blokajıdır; olumlu belirtileri azaltır, olumsuz ve bilişsel belirtilerde etkileri sınırlıdır. Ergenlerde birçok ikinci kuşak antipsikotik onaylıdır; kilo ve metabolik yan etkiler izlenir. Kitapta mezolimbik yol antipsikotiklerin hedefi olarak anlatılır.',
        core: ['caudate', 'putamen', 'nacc'], related: ['vta', 'snc'], flow: 'nt:da', src: 'Howes ve ark., 2012.' },
      { id: 'klozapin', name: 'Klozapin', sub: 'Tedaviye dirençli olgular', ev: 'B',
        text: 'Tedaviye dirençli erken başlangıçlı şizofrenide en etkili seçenek: 39 ergenlik çift kör çalışmada yanıt klozapinde %66, olanzapinde %33. Kan sayımı (nötropeni) ve nöbet izlemi gerekir. Türkiye KÜB\'ünde 16 yaş altında kullanılmamalı.',
        core: ['caudate', 'nacc'], related: ['vta', 'mpfc', 'dlpfc'], flow: ['nt:da', 'nt:5ht'], flowTo: { 'nt:5ht': ['mpfc', 'dlpfc', 'acc'] },
        src: 'Kumra ve ark., 2008 (Biological Psychiatry).' },
      { id: 'psikososyal', name: 'Aile müdahalesi ve psikososyal destek', sub: 'Nüksü azaltma', ev: 'A',
        text: 'Aile müdahalesi şizofrenide nüksü azaltır; 2024 güncellemesinde bu kısa dönem kanıtın kesinliği düşüktür, bir ay içinde hastaneye yatışta belirgin fark yoktur. Veriler ağırlıkla erişkinlerden gelir. Bu kartta beyin yolu çizilmez.',
        core: [], related: [], src: 'Pharoah ve ark., 2010; Chien ve ark., 2024 (Cochrane).' },
      { id: 'lai', name: 'Uzun etkili enjeksiyon antipsikotikler', sub: 'Nüksü önleme', ev: 'A',
        text: '137 çalışmalık meta-analizde yatış ya da nüks riski oral antipsikotiklerden düşüktür (randomize çalışmalarda RR 0,88). Gözlemsel çalışmaların niteliği yorumu sınırlar.',
        core: ['caudate', 'putamen', 'nacc'], related: ['vta', 'snc'], flow: 'nt:da', src: 'Kishimoto ve ark., 2021 (Lancet Psychiatry).' },
      { id: 'bdtp', name: 'Psikozda bilişsel davranışçı terapi', sub: 'Belirtilere ek destek', ev: 'B',
        text: '34 çalışmalık meta-analizde etki küçüktür (toplam belirti −0,33; olumlu −0,25; olumsuz −0,13) ve yanlılık kaynakları, özellikle körleme, gözetilince daha da azalır. Bu kartta beyin yolu çizilmez.',
        core: [], related: [], src: 'Jauhar ve ark., 2014 (British Journal of Psychiatry).' },
      { id: 'erken', name: 'Erken müdahale hizmetleri', sub: 'İlk atak ve erken evre psikoz', ev: 'A',
        text: '10 randomize çalışmada (2.176 hasta) erken müdahale, olağan bakıma göre tedaviyi bırakmayı ve hastaneye yatışı azaltır; üstünlük 24 aya kadar görülür, 18–24 ayda genel ve depresif belirti şiddeti bunun dışındadır. Bu kartta beyin yolu çizilmez.',
        core: [], related: [], src: 'Correll ve ark., 2018 (JAMA Psychiatry).' },
      { id: 'ksanomelin', name: 'Ksanomelin-trospiyum', sub: 'Muskarinik M1 ve M4 hedefi', ev: 'B',
        text: 'D2 reseptörünü bloke etmeden M1 ve M4 muskarinik reseptörleri hedefler; FDA 2024\'te yalnız erişkinde onayladı. 5 haftalık çalışmada PANSS puanı plaseboya göre 8,4 puan daha çok düştü.',
        core: [], related: [], flow: 'nt:ach', src: 'Kaul ve ark., 2024 (JAMA Psychiatry); FDA, 2024.' }
    ]
  };

  // ---------------------------------------------------------------- Borderline
  const M_BPD = {
    devre: {
      title: 'Duygu düzenleme devresi',
      text: 'Amigdala ve insula duygusal uyaranların yoğunluğunu, ön singulat duygusal acıyı taşır; DLPFC, OFC ve medial PFC bu yanıtı yukarıdan düzenler. Temporoparyetal kavşak ve medial PFC kendinin ve başkasının zihnini anlamayı (zihinselleştirme) sağlar.',
      core: ['amygdala', 'dlpfc', 'acc', 'insula'], related: ['ofc', 'mpfc', 'tpj', 'pcc'], yon: [1, -0.55, 0.3],
      routes: Y([
        { from: 'amygdala', to: 'acc', chem: 'glu', via: [[16, 4, -16], [8, 20, -6]], cls: 'duygu' },
        { from: 'insula', to: 'amygdala', chem: 'glu', via: [[30, -2, -12]], cls: 'duygu' },
        { from: 'dlpfc', to: 'amygdala', chem: 'glu', inh: true, via: [[30, 30, 20], [24, 10, -10]], cls: 'duzen' },
        { from: 'ofc', to: 'amygdala', chem: 'glu', inh: true, via: ['#unc'], cls: 'duzen' },
        { from: 'tpj', to: 'mpfc', chem: 'glu', via: [[44, -30, 30], [20, 10, 40]], cls: 'zihin' }]),
      modes: {
        saglikli: { name: 'Sağlıklı', text: 'Duygusal uyaran yükseldiğinde prefrontal korteks onu düzenler; stres altında da kendini ve başkasını anlama kapasitesi korunur.', gain: {} },
        bpd: { name: 'Borderline modeli', text: 'Olumsuz duygusal uyaranlara sol amigdala aşırı, DLPFC az yanıt verir (duygunun gaz pedalı güçlü, freni zayıf); duygu hızla yükselir, yavaş söner. Zihinselleştirme yoğun duygu altında çöker.',
          gain: { duygu: [1.6, 1.8, 1.15], duzen: [0.55, 0.5, 0.45], zihin: [0.6, 0.5, 0.5] }, hotTaraf: { amygdala: 'L' }, hot: ['amygdala', 'insula'], cold: ['dlpfc'] }
      },
      ev: 'B', src: 'Schulze ve ark., 2016 (çok kipli meta-analiz; bulgular çalışmalar arasında tutarsız). Zihinselleştirme modeli kuramsaldır.'
    },
    bulgular: {
      text: 'Renk bulgunun yönünü gösterir: sıcak renk fazla etkin, soğuk renk az etkin. Bulgular çalışmalar arasında tutarsızdır; görüntüleme bireyde tanı koydurmaz.',
      gruplar: [
        { id: 'islev', name: 'İşlev (meta-analiz)', text: '19 işlevsel çalışma (281 hasta, 293 kontrol): olumsuz duygusal uyaranlarda sol amigdala ve arka singulat fazla, iki yanlı DLPFC az etkin. Sol amigdalada gri madde hacmi de küçük; amigdala aşırı etkinliği ilaçsız örneklemlerde belirgin.',
          items: [
            { id: 'amygdala', side: 'L', d: 0.35, dtxt: 'fazla etkin', txt: 'Sol amigdala aşırı yanıt verir; gri madde hacmi küçük.' },
            { id: 'pcing', d: 0.25, dtxt: 'fazla etkin', txt: 'Arka singulat fazla etkin.' },
            { id: 'dlpfc', d: -0.3, dtxt: 'az etkin', txt: 'Dorsolateral PFC yanıtı körelmiş.' }],
          src: 'Schulze ve ark., 2016 (Biological Psychiatry).' }
      ]
    },
    belirtiler: [
      { id: 'duygu', name: 'Duygusal dengesizlik', sub: 'Yoğun, hızlı değişen duygu', devre: 'Duygu düzenleme devresi',
        text: 'Amigdala ve insula yoğun duyguyu taşır; DLPFC\'nin frenlemesi zayıf kaldığında duygu hızla yükselir ve yavaş söner.',
        core: ['amygdala', 'dlpfc'], related: ['insula'],
        routes: Y([{ from: 'dlpfc', to: 'amygdala', chem: 'glu', inh: true, via: [[30, 30, 20], [24, 10, -10]] }, { from: 'insula', to: 'amygdala', chem: 'glu', via: [[30, -2, -12]] }]), ev: 'B' },
      { id: 'terk', name: 'Terk edilme korkusu ve ilişkiler', sub: 'Reddedilmeye duyarlılık', devre: 'Sosyal acı devresi',
        text: 'Sağlıklı gönüllülerde sosyal dışlanma ön singulat ve ön insulayı etkinleştirir; bunun fiziksel acıyla aynı ağ olup olmadığı tartışmalıdır. Kitapta sosyal acı ve ayrılık PANIC/GRIEF sistemiyle anlatılır.',
        core: ['acc', 'insula'], related: ['amygdala'],
        routes: Y([{ from: 'amygdala', to: 'acc', chem: 'glu', via: [[16, 4, -16], [8, 20, -6]] }, { from: 'insula', to: 'acc', chem: 'glu', via: [[24, 10, 10]] }]), ev: 'C' },
      { id: 'durtu', name: 'Dürtüsellik ve kendine zarar', sub: 'Ani, riskli davranışlar', devre: 'Orbitofrontal dürtü denetimi',
        text: 'OFC ödül ve sonuçları değerlendirip dürtüyü frenler; zayıf kaldığında yoğun duygu anında ani davranışa dönüşür.',
        core: ['ofc', 'nacc'], related: ['amygdala'],
        routes: Y([{ from: 'ofc', to: 'nacc', chem: 'glu', via: [[16, 22, -10]] }, { from: 'ofc', to: 'amygdala', chem: 'glu', inh: true, via: ['#unc'] }]), ev: 'C' },
      { id: 'kimlik', name: 'Kimlik ve zihinselleştirme', sub: 'Kendini ve başkasını anlama', devre: 'Zihinselleştirme ağı',
        text: 'Temporoparyetal kavşak ve medial PFC kendinin ve başkasının zihinsel durumunu anlamayı sağlar; mentalizasyon temelli tedavi bu kapasiteyi hedefler.',
        core: ['tpj', 'mpfc'], related: ['pcc'],
        routes: Y([{ from: 'tpj', to: 'mpfc', chem: 'glu', via: [[44, -30, 30], [20, 10, 40]] }, { from: 'mpfc', to: 'pcc', zt: 'pcing', chem: 'glu', via: ['#cing'] }]), ev: 'C' }
    ],
    belirtilerSrc: 'Duygu: Schulze ve ark., 2016. Sosyal dışlanma: Eisenberger ve ark., 2003; Cacioppo ve ark., 2013. Zihinselleştirme: Fonagy ve Luyten, 2009. Belirti-devre eşleşmesi kuramsal bir çerçevedir.',
    tedavi: [
      { id: 'dbt', name: 'Diyalektik davranış terapisi (DBT-A)', sub: 'Ergenler için', ev: 'B',
        text: 'Tekrarlayan kendine zararı olan 12–18 yaşındaki gençlerde intihar düşüncesi ve depresyonda belirgin azalma; kendine zarar sıklığındaki üstünlük 3 yıllık izlemde sürdü. Duygu düzenleme ve dayanma becerileri öğretir; prefrontal düzenleme yollarını hedeflediği düşünülür. İlaç borderline bozukluğun kendisi için önerilmez.',
        core: ['amygdala', 'mpfc'], related: ['dlpfc'], flow: 'path:frontolimbic', src: 'Mehlum ve ark., 2014; 2019. NICE CG78.' },
      { id: 'mbt', name: 'Mentalizasyon temelli tedavi (MBT)', sub: 'Zihinselleştirmeyi güçlendirme', ev: 'B',
        text: 'Kendinin ve başkasının zihnini, özellikle duygusal yoğunluk altında, anlamayı güçlendirir; erişkinlerde DBT\'den sonra en çok çalışılan tedavidir, ergenlerde çalışmalar sürmektedir.',
        core: ['tpj', 'mpfc'], related: ['pcc'],
        routes: Y([{ from: 'tpj', to: 'mpfc', chem: 'glu', via: [[44, -30, 30], [20, 10, 40]] }]), src: 'Stoffers-Winterling ve ark., 2012; Storebø ve ark., 2020 (Cochrane).' },
      { id: 'ilacyeri', name: 'İlacın yeri', sub: 'Bozukluğun kendisi için ilaç yok', ev: 'A',
        text: 'Cochrane 2022: hiçbir ilaç borderline patolojisini özgül olarak iyileştirmiyor gibi görünmektedir; yan etki bildirimi de zayıftır. Eşlik eden tablolarda ilaç kararını hekim ayrıca değerlendirir. Bu kartta beyin yolu çizilmez.',
        core: [], related: [], src: 'Stoffers-Winterling ve ark., 2022 (Cochrane).' },
      { id: 'sema', name: 'Şema terapi', sub: 'Erişkin çalışması', ev: 'B',
        text: '88 hastalık 3 yıllık randomize çalışmada iki tedavi de belirtileri ve yaşam kalitesini düzeltti; şema terapi aktarım odaklı psikoterapiden üstündü, tedaviyi bırakma daha azdı. Çalışma erişkindedir. Bu kartta beyin yolu çizilmez.',
        core: [], related: [], src: 'Giesen-Bloo ve ark., 2006 (Archives of General Psychiatry).' }
    ]
  };

  // ---------------------------------------------------------------- Tik bozuklukları
  const M_TIK = {
    devre: {
      title: 'Duyusal-motor döngü ve öncü dürtü',
      text: 'Ek motor alan ve motor korteks putamene, putamen GPi üzerinden talamusa, talamus yeniden kortekse bağlanır; bu döngü hareket programlarını seçer ve alışkanlıkları yürütür. Substantia nigra dopaminle döngüyü ayarlar. İnsula tikten önce gelen rahatsız edici dürtüyü (öncü dürtü) taşır; bu yol Belirtiler → Öncü dürtü bölümünde çizilir.',
      core: ['putamen', 'premotor', 'motor', 'th_va'], related: ['gpi', 'gpe', 'sn'], yon: [1, -0.3, 0.55],
      routes: Y([
        { from: 'premotor', zf: 'sma', to: 'putamen', chem: 'glu', via: [[24, 2, 30]], cls: 'motor' },
        { from: 'motor', to: 'putamen', chem: 'glu', via: [[28, -10, 34], [26, -4, 14]], cls: 'motor' },
        { from: 'putamen', to: 'gpi', chem: 'gaba', inh: true, via: [[21, -3, 0]], cls: 'dogrudan' },
        { from: 'putamen', to: 'gpe', chem: 'gaba', inh: true, via: [[22, -2, 2]], cls: 'dolayli' },
        { from: 'gpe', to: 'gpi', chem: 'gaba', inh: true, via: [[19, -3, 0]], cls: 'dolayli' },
        { from: 'gpi', to: 'th_va', chem: 'gaba', inh: true, via: [[13, -6, 2]], cls: 'cikis' },
        { from: 'th_va', to: 'premotor', zt: 'sma', chem: 'glu', via: [[14, -4, 20], [20, -2, 40]], cls: 'donus' },
        { from: 'snc', to: 'putamen', chem: 'da', via: ['#nig'], cls: 'da' }]),
      modes: {
        tipik: { name: 'Tipik', text: 'Döngü istenen hareketi seçip ötekileri frenler; dürtü sinyali zayıftır, hareketler amaçlıdır.', gain: {} },
        tik: { name: 'Tik modeli', text: 'Döngünün frenleri yeterince seçici değildir: istenmeyen hareket programları zaman zaman serbest kalır. İnsula ve ön singulat öncü dürtüyü taşır (Belirtiler); tik dürtüyü kısa süre rahatlatır ve döngüyü pekiştirir. Dopamin blokörlerinin tikleri azaltması dopaminin rolünü düşündürür.',
          gain: { motor: [1.4, 1.6, 1.1], dogrudan: [1.5, 1.7, 1.15], dolayli: [0.6, 0.5, 0.45], donus: [1.4, 1.6, 1.1], da: [1.3, 1.4, 1.1] },
          hot: ['premotor', 'putamen'] }
      },
      ev: 'B', src: 'Duyusal-motor döngü: Alexander ve ark., 1986. Öncü dürtü: Bohlhalter ve ark., 2006 (10 erişkin). Model bir kuramdır.'
    },
    bulgular: {
      text: 'Renk bulgunun yönünü gösterir. Çalışmalar küçüktür; görüntüleme bireyde tanı ya da gidiş öngörüsü sağlamaz.',
      gruplar: [
        { id: 'yapi', name: 'Yapı', text: 'Çocuklukta (14 yaş öncesi) çekilen MR\'da kaudat hacmi küçük olanlarda yaklaşık 7,5 yıl sonra tik ve OKB belirtileri daha ağırdı (43 çocuk). Kaudat hacmi çekim anındaki şiddetle ilişkili değildi.',
          items: [{ id: 'caudate', d: -0.3, dtxt: 'ters ilişki', txt: 'Kaudat küçükse erişkinlikte belirtiler daha ağır.' }],
          src: 'Bloch ve ark., 2005 (Neurology).' },
        { id: 'islev', name: 'İşlev (tik öncesi)', text: 'Tikten hemen önce ön singulat, insula ve ek motor alan; tik anında duyusal-motor korteks ve beyincik etkinleşir (10 erişkin, olaya bağlı fMRI).',
          items: [
            { id: 'insula', d: 0.35, dtxt: 'tikten önce', txt: 'İnsula: öncü dürtüyle ilişkili.' },
            { id: 'acc', d: 0.3, dtxt: 'tikten önce', txt: 'Ön singulat: tikten önce etkin.' },
            { id: 'sma', d: 0.3, dtxt: 'tikten önce', txt: 'Ek motor alan: tikten önce etkin.' },
            { id: 'motor', d: 0.25, dtxt: 'tik anında', txt: 'Motor korteks: tik anında etkin.' }],
          hot: ['insula'], src: 'Bohlhalter ve ark., 2006 (Brain).' }
      ]
    },
    belirtiler: [
      { id: 'motor', name: 'Motor ve ses tikleri', sub: 'Göz kırpma, baş sallama, boğaz temizleme', devre: 'Duyusal-motor döngü',
        text: 'Ek motor alan, putamen, GPi ve talamustan geçen döngü hareket programlarını seçer; frenleri yetersiz kalınca istenmeyen programlar tik olarak ortaya çıkar.',
        core: ['putamen', 'sma', 'motor'], related: ['gpi', 'th_va'],
        routes: Y([{ from: 'premotor', zf: 'sma', to: 'putamen', chem: 'glu', via: [[24, 2, 30]] }, { from: 'putamen', to: 'gpi', chem: 'gaba', inh: true, via: [[21, -3, 0]] },
          { from: 'gpi', to: 'th_va', chem: 'gaba', inh: true, via: [[13, -6, 2]] }, { from: 'th_va', to: 'premotor', zt: 'sma', chem: 'glu', via: [[14, -4, 20], [20, -2, 40]] }]), ev: 'B' },
      { id: 'durtu', name: 'Öncü dürtü', sub: 'Tikten önce gelen rahatsız edici duyum', devre: 'İnsula ve ön singulat',
        text: 'İnsula ve ön singulat bedenin içinden gelen rahatsızlık duyumunu taşır; tik bu duyumu kısa süre giderir. Kitapta "tikler ve öncü dürtüler" bazal ganglia başlığında anlatılır.',
        core: ['insula', 'acc'], related: ['premotor'],
        routes: Y([{ from: 'insula', to: 'premotor', zt: 'sma', chem: 'glu', via: [[36, 0, 20], [30, 0, 44]] }, { from: 'acc', to: 'premotor', zt: 'sma', chem: 'glu', via: [[8, 10, 40]] }]), ev: 'C' },
      { id: 'bastirma', name: 'Tiki bastırma', sub: 'Kısa süre tutabilme', devre: 'Prefrontal ketleme',
        text: 'Tikler kısa süre bastırılabilir; alt frontal korteksten subtalamik çekirdeğe giden bir yol bulunur, bastırma sırasında bazal gangliyon ve talamusta etkinlik değişir. CBIT bu kapasiteyi rakip tepkiyle kullanır.',
        core: ['broca', 'caudate'], related: ['stn'],
        routes: Y([{ from: 'broca', zf: 'ifg44', to: 'stn', chem: 'glu', via: [[30, 6, 4], [17, -6, -4]] }, { from: 'broca', zf: 'ifg44', to: 'caudate', chem: 'glu', via: [[30, 18, 10], [18, 14, 10]] }]), ev: 'C' },
      { id: 'eslik', name: 'DEHB ve OKB eşliği', sub: 'Sık birlikte görülen tablolar', devre: 'Bitişik kortiko-striatal döngüler',
        text: 'Tik bozukluklarında DEHB ve OKB sıktır; bu tablolar aynı kortiko-striatal sistemin bitişik döngülerini paylaşır.',
        core: ['caudate', 'ofc'], related: ['dlpfc'],
        routes: Y([{ from: 'ofc', to: 'caudate', chem: 'glu', via: [[18, 24, -4], [14, 18, 4]] }, { from: 'dlpfc', to: 'caudate', chem: 'glu', via: [[26, 24, 22], [16, 14, 14]] }]), ev: 'B' }
    ],
    belirtilerSrc: 'Tik öncesi ağ: Bohlhalter ve ark., 2006. Bastırma: Peterson ve ark., 1998; alt frontal-subtalamik yol: Aron ve ark., 2007. Eşlik eden tablolar: Hirschtritt ve ark., 2015. Belirti-devre eşleşmesi kuramsal bir çerçevedir.',
    tedavi: [
      { id: 'cbit', name: 'Kapsamlı davranışsal müdahale (CBIT)', sub: 'İlk basamak', ev: 'A',
        text: '126 çocukta (9–17 yaş) belirgin düzelme CBIT ile %52,5, destekleyici tedavi ile yaklaşık %18,5; etkisi ilaç çalışmalarındakine benzer. Tik farkındalığı ve rakip tepki eğitimi, ebeveyn katılımıyla.',
        core: ['premotor', 'insula'], related: ['broca'],
        routes: Y([{ from: 'insula', to: 'premotor', zt: 'sma', chem: 'glu', via: [[36, 0, 20], [30, 0, 44]] }, { from: 'broca', zf: 'ifg44', to: 'stn', chem: 'glu', via: [[30, 6, 4], [17, -6, -4]] }]),
        src: 'Piacentini ve ark., 2010 (JAMA).' },
      { id: 'aripiprazol', name: 'Aripiprazol ve antipsikotikler', sub: 'Dopamin sinyalini düzenler', ev: 'A',
        text: 'Aripiprazol 6–18 yaşta Tourette için FDA onaylıdır; dopamin sinyalini düzenleyerek tikleri azaltır. Kilo ve metabolik yan etkiler izlenir.',
        core: ['putamen', 'caudate'], related: ['snc'], flow: 'nt:da', src: 'FDA etiketi.' },
      { id: 'alfa2', name: 'Guanfasin ve klonidin', sub: 'α2 agonistleri', ev: 'B',
        text: 'Randomize çalışmaların meta-analizinde tiklere etkisi antipsikotiklerden küçüktür; tik ve DEHB birlikte olan çalışmalarda orta-büyük, DEHB\'yi dışlayan çalışmalarda küçük ve anlamsızdır.',
        core: ['lc'], related: ['sma', 'dlpfc'], flow: 'nt:ne', src: 'Weisman ve ark., 2013 (Neuroscience and Biobehavioral Reviews).' },
      { id: 'dbs', name: 'Derin beyin uyarımı (talamus)', sub: 'Dirençli ağır erişkin olgular', ev: 'C',
        text: 'Talamusun centromedian-parafasiküler kompleksi ya da GPi hedeflenir; uluslararası kayıtta tik şiddeti bir yılda azaldı, hastaların yaklaşık üçte biri yan etki bildirdi; cerrahi yöntem ve alım ölçütleri merkezler arasında farklıydı. Çocuklarda kullanılmaz.',
        core: ['thalamus'], related: ['gpi', 'putamen'],
        elektrot: { mni: [9, -20, 1], yon: [0.25, 0.38, 0.88], kontak: [1.5, 0.5], aktif: 1 },
        src: 'Martinez-Ramirez ve ark., 2018 (JAMA Neurology). Elektrot yolu şematiktir.' }
    ]
  };

  window.TANILAR = [
    {
      id: 'dehb', name: 'Dikkat Eksikliği ve Hiperaktivite Bozukluğu', short: 'DEHB', eng: 'Attention-deficit/hyperactivity disorder ADHD',
      color: '#e0862f', page: 'tani/dehb.html',
      summary: 'Dikkat, dürtü denetimi ve ödül devreleri; frontostriatal ve frontoparietal ağlar, dopamin ve noradrenalin.',
      core: ['dlpfc', 'acc', 'caudate', 'putamen', 'nacc'], related: ['amygdala', 'hippocampus', 'vta', 'lc', 'cerebellum', 'ipl', 'spl'],
      nets: ['fpn', 'dan', 'dmn'], nt: ['da', 'ne'], panksepp: ['SEEKING', 'PLAY'],
      mercek: M_DEHB,
      kitapta: [{ sys: 'SEEKING' }, { sys: 'PLAY' }, { entry: 'vta_nacc', snippet: 'DEHB’de kronik düşük tonik dopamin hipotezi (Bölüm 7)' }]
    },
    {
      id: 'osb', name: 'Otizm Spektrum Bozukluğu', short: 'OSB', eng: 'Autism spectrum disorder ASD',
      color: '#2fa8a0', page: 'tani/osb.html',
      summary: 'Sosyal algı, zihin kuramı, duyusal işlemleme ve interosepsiyon devreleri; görüntüleme farkları küçük ve grup düzeyinde.',
      core: ['amygdala', 'stg', 'tpj', 'mpfc', 'insula'], related: ['itg', 'putamen', 'gp', 'nacc', 'cb_crus1', 'cb_crus2', 'acc', 'ofc'],
      nets: ['dmn', 'sal'], nt: ['5ht'], panksepp: ['PLAY', 'CARE', 'PANIC/GRIEF'],
      mercek: M_OSB,
      kitapta: [{ sys: 'PLAY' }, { path: 'oxt', snippet: 'otizmde intranazal oksitosin çalışmaları (Bölüm 7)' },
        { entry: 'insula', snippet: 'otizmde interosepsiyon farklılıkları (Bölüm 2, 7)' },
        { entry: 'amygdala', snippet: 'otizmde sosyal uyaranlara atipik amigdala yanıtı (Bölüm 7)' },
        { entry: 'tpj_sts', snippet: 'otizmde sosyal sinyal işleme (Bölüm 7)' }]
    },
    {
      id: 'okb', name: 'Obsesif Kompulsif Bozukluk', short: 'OKB', eng: 'Obsessive-compulsive disorder OCD',
      color: '#a867d6', page: 'tani/okb.html',
      summary: 'Orbitofrontal korteks, singulat korteks, striatum ve talamustan geçen döngülerin "takılıp kalması".',
      core: ['ofc', 'acc', 'caudate', 'putamen', 'thalamus'], related: ['gp', 'nacc', 'stn', 'dlpfc', 'ipl', 'spl', 'amygdala', 'hippocampus'],
      nets: ['fpn', 'sal', 'lim'], nt: ['5ht', 'da'], panksepp: ['SEEKING', 'PLAY', 'PANIC/GRIEF'],
      kitapta: [
        { entry: 'ofc_vmpfc', snippet: 'OKB’de yanlış ayar (Bölüm 2 ve 12)' },
        { entry: 'acc', snippet: 'OKB’de hata tespit döngüsünün aşırı etkinliği (Bölüm 2)' },
        { entry: 'bg', snippet: 'Kompulsiyonların otomatikleşmesi ve tedaviyle kaudat metabolizmasının değişmesi (Bölüm 2)' },
        { entry: 'bg', field: 'note', snippet: 'Bazal ganglia, kitaptaki “neden bir kalıp bu kadar inatçı” sorusunun cevaplarından biri — bir davranış (kompulsiyon, savunma, ilişki örüntüsü) yeterince tekrarlandığında, bilinçli/esnek PFC devresinden çıkıp otomatik, hızlı bazal ganglia devresine geçiyor; bu geçiş tedaviyi zorlaştıran ama aynı zamanda yeni, sağlıklı bir alışkanlığın da aynı yolla inşa edilebileceğini gösteren bir mekanizma.' }],
      mercek: {
        devre: {
          title: 'Kortiko-striato-talamo-kortikal döngü',
          text: 'Orbitofrontal korteks (OFC) ve ön singulat korteks (ACC) kaudatı uyarır. Kaudattan iki yol çıkar: doğrudan yol talamusun üzerindeki freni gevşetir ("devam et"), dolaylı yol GPe ve subtalamik çekirdek (STN) üzerinden freni sıkar ("dur"). Talamus OFC ve ACC\'yi yeniden uyararak döngüyü kapatır.',
          core: ['ofc', 'acc', 'caudate', 'th_md'], related: ['gpi', 'gpe', 'stn', 'th_va'],
          routes: CSTC,
          modes: {
            saglikli: { name: 'Sağlıklı', text: 'İki yol dengede: "bir şeyler yolunda değil" sinyali, iş görülünce ya da tehlike geçince söner. Döngü bir uyarana yanıt verir, sonra durulur.',
              gain: {} },
            okb: { name: 'OKB modeli', text: 'Doğrudan yol baskın, dolaylı yol zayıf: talamusun freni gevşer, talamus korteksi daha çok uyarır ve döngü kendini besler. Hata sinyali sönmez; kompulsiyon kısa bir rahatlama sağlar, döngü yeniden başlar. Turuncu nabız: dinlenimde ve belirti kışkırtmada etkinliği artmış bulunan yapılar.',
              gain: { giris: [1.5, 1.6, 1.1], dogrudan: [1.75, 2, 1.2], dolayli: [0.55, 0.5, 0.4], cikis: [0.7, 0.7, 0.55], donus: [1.75, 2, 1.2] },
              hot: ['ofc', 'acc', 'caudate', 'th_md'] }
          },
          ev: 'B', src: 'Döngü: Alexander ve ark., 1986. OKB modeli: Saxena ve Rauch, 2000. PET: Baxter ve ark., 1987 (14 hasta; sol orbital girus ve iki yanlı kaudatta artmış glukoz kullanımı). Model bir kuramdır; her hastada aynı biçimde görülmez.'
        },
        bulgular: {
          text: 'Bölgeler bulgunun yönüne ve büyüklüğüne göre renklenir: sıcak renk daha büyük, kalın ya da etkin; soğuk renk daha küçük ya da ince. Farklar grup ortalamasıdır ve küçüktür (d 0,2 altı küçük etki sayılır); tek bir hastada görüntüleme OKB tanısı koydurmaz.',
          gruplar: [
            { id: 'cocuk', name: 'Çocuk ve ergen', text: 'ENIGMA-OCD: çocuk ve ergenlerin bulguları erişkinlerden farklı; bu, bozukluğun gelişen beyni farklı evrelerde etkilediğini düşündürür.',
              items: [
                { id: 'thalamus', d: 0.38, dtxt: '+0,38', txt: 'Talamus hacmi büyük (ilaç almayan çocuk ve ergenlerde, %3 kadar).' },
                { id: 'ipl', d: -0.22, dtxt: '−0,10 ile −0,33', txt: 'Alt parietal korteks ince.' },
                { id: 'spl', d: -0.22, dtxt: '−0,10 ile −0,33', txt: 'Üst parietal korteks ince.' }],
              src: 'Alt kortikal: Boedhoe ve ark., 2017 (1.830 hasta, 1.759 kontrol). Korteks: Boedhoe ve ark., 2018 (1.905 hasta, 1.760 kontrol). Parietal bulgular için çalışmanın bütün korteks bulgularının etki aralığı verildi; renk yoğunluğu yaklaşıktır.' },
            { id: 'eriskin', name: 'Erişkin', text: 'Erişkinlerde öne çıkan yapılar pallidum ve hipokampus; ilaç kullananlarda farklar daha belirgin (pallidum +0,29, hipokampus −0,29). Bu, ilacın neden olduğunu göstermez: ilaç kullananların hastalığı daha ağır olabilir.',
              items: [
                { id: 'gp', d: 0.16, dtxt: '+0,16', txt: 'Pallidum hacmi büyük (%3 kadar).' },
                { id: 'hippocampus', d: -0.13, dtxt: '−0,13', txt: 'Hipokampus hacmi küçük (%3 kadar).' },
                { id: 'ipl', d: -0.22, dtxt: '−0,10 ile −0,33', txt: 'Alt parietal korteks ince.' }],
              src: 'Boedhoe ve ark., 2017; 2018 (ENIGMA-OCD). Parietal bulgu için çalışmanın etki aralığı verildi.' },
            { id: 'islev', name: 'İşlev (PET)', text: 'Yapıdan çok işlev: dinlenimde ölçülen glukoz kullanımı OFC ve kaudatta artmış. Başarılı tedaviden sonra (SSRİ ya da BDT) kaudat ve OFC etkinliği azalır.',
              items: [
                { id: 'ofc', d: 0.4, dtxt: 'artmış', txt: 'Orbitofrontal korteks: glukoz kullanımı artmış (ilk çalışmada sol orbital girus).' },
                { id: 'caudate', d: 0.4, dtxt: 'artmış', txt: 'Kaudat: iki yanlı artmış glukoz kullanımı; tedaviyle azalır.' }],
              hot: ['ofc', 'caudate'],
              src: 'Baxter ve ark., 1987 (FDG-PET, 14 hasta). Tedaviyle azalma: Baxter ve ark., 1992; van der Straten ve ark., 2017 (meta-analiz).' }
          ]
        },
        belirtiler: [
          { id: 'korku', name: 'Korku ve kaygı', sub: 'Korkuya dayalı obsesyonlar, sönmeyen korku', devre: 'Fronto-limbik devre',
            text: 'Ventromedial PFC korku öğrenmesini ve sönmesini düzenler, amigdalayı frenler. OKB\'de korku sönmesi zayıf; maruz bırakma tedavisi bu devreyi çalıştırır. Halkalar ketleyici (frenleyici) etkidir.',
            core: ['mpfc', 'amygdala'], related: ['hippocampus'],
            routes: Y([{ from: 'mpfc', zf: 'vmpfc', to: 'amygdala', chem: 'glu', inh: true, via: ['#unc'] }, { from: 'amygdala', to: 'mpfc', zt: 'vmpfc', chem: 'glu', via: ['#uncr'] },
              { from: 'hippocampus', to: 'mpfc', zt: 'vmpfc', chem: 'glu', via: [[24, -10, -20], [12, 22, -14]] }]), ev: 'B' },
          { id: 'eksik', name: 'Eksiklik hissi ve alışkanlık', sub: '"Tam olmadı" hissi, otomatikleşen kompulsiyonlar', devre: 'Duyusal-motor devre',
            text: 'Ek motor alan (SMA) ve arka putamen uyaranla tetiklenen alışkanlıkları ve duyusal-motor bütünleştirmeyi yürütür. "Tam olmadı" hissiyle tekrarlanan davranış zamanla bu otomatik devreye yerleşir.',
            core: ['sma', 'putamen'], related: ['gpi', 'th_va'],
            routes: Y([{ from: 'premotor', zf: 'sma', to: 'putamen', chem: 'glu', via: [[24, 2, 30]] }].concat(
              [{ from: 'putamen', to: 'gpi', chem: 'gaba', inh: true, via: [[21, -3, 0]] }], BG_OUT('th_va'),
              [{ from: 'th_va', to: 'premotor', zt: 'sma', chem: 'glu', via: [[14, -4, 20], [20, -2, 40]] }])), ev: 'B' },
          { id: 'dur', name: 'Durduramama', sub: 'Başlayan davranışı kesememe', devre: 'Ventral bilişsel devre',
            text: 'Alt frontal girus (ventrolateral PFC; özellikle sağda) ve ventral kaudat tepki ketlemesini sağlar. "Dur" komutu IFG\'den doğrudan STN\'ye giden hızlı yolla da (hiperdirekt yol) iletilir. OKB\'de ketleme görevlerinde bu devrede farklar bildirilmiştir.',
            core: ['broca', 'caudate'], related: ['stn', 'gpi', 'th_md'],
            routes: Y([{ from: 'broca', zf: 'ifg44', to: 'caudate', chem: 'glu', via: [[30, 18, 10], [18, 14, 10]] },
              { from: 'broca', zf: 'ifg44', to: 'stn', chem: 'glu', via: [[30, 6, 4], [17, -6, -4]] }, { from: 'stn', to: 'gpi', chem: 'glu', via: [[14, -9, -6]] },
              { from: 'caudate', to: 'gpi', chem: 'gaba', inh: true, via: [[15, 4, 4]] }].concat(BG_OUT('th_md'),
              [{ from: 'th_md', to: 'broca', zt: 'ifg44', chem: 'glu', via: [[12, 0, 10], [30, 16, 10]] }])), ev: 'B' },
          { id: 'esneklik', name: 'Planlama ve esneklik', sub: 'Zihinsel esneklik, çalışma belleği', devre: 'Dorsal bilişsel devre',
            text: 'Dorsolateral PFC ve dorsal kaudat planlama, çalışma belleği ve duyguların yukarıdan düzenlenmesini sağlar. Bu devrenin az çalışması, korkuya dayalı obsesyonlarda fronto-limbik devrenin aşırı etkinliğiyle birlikte düşünülür.',
            core: ['dlpfc', 'caudate'], related: ['gpi', 'th_md'],
            routes: Y([{ from: 'dlpfc', to: 'caudate', chem: 'glu', via: [[26, 24, 22], [16, 14, 14]] },
              { from: 'caudate', to: 'gpi', chem: 'gaba', inh: true, via: [[15, 4, 4]] }].concat(BG_OUT('th_md'),
              [{ from: 'th_md', to: 'dlpfc', chem: 'glu', via: [[10, 0, 14], [26, 24, 26]] }])), ev: 'B' },
          { id: 'odul', name: 'Ödül ve rahatlama', sub: 'Kompulsiyonun getirdiği kısa rahatlama, güdülenme', devre: 'Ventral duygusal devre',
            text: 'OFC ve nükleus akumbens ödülü ve güdülenmeyi işler; ventral tegmental alandan gelen dopamin bu devreyi besler. Kompulsiyonun getirdiği rahatlama davranışı pekiştirir.',
            core: ['ofc', 'nacc'], related: ['vp', 'th_md', 'vta'],
            routes: Y([{ from: 'ofc', to: 'nacc', chem: 'glu', via: [[16, 22, -10]] }, { from: 'vta', to: 'nacc', chem: 'da', via: ['#mfb'] },
              { from: 'nacc', to: 'vp', chem: 'gaba', inh: true, via: [[13, 6, -8]] }, { from: 'vp', to: 'th_md', chem: 'gaba', inh: true, via: [[9, -6, 0]] },
              { from: 'th_md', to: 'ofc', chem: 'glu', via: [[9, -4, 8], [14, 16, 2], [18, 28, -6]] }]), ev: 'B' }
        ],
        belirtilerSrc: 'Beş devre: van den Heuvel ve ark., 2016; Shephard ve ark., 2021 (Molecular Psychiatry). Belirti-devre eşleşmesi kuramsal bir çerçevedir; ölçümler çoğu kez birden çok devreyi birlikte çalıştırır.',
        tedavi: [
          { id: 'ssri', name: 'SSRİ ve klomipramin', sub: 'Serotonin geri alımını ketler', ev: 'A',
            text: 'İlk basamak ilaç tedavisi. OKB\'de depresyondakinden daha yüksek doz ve daha uzun süre (8–12 hafta) gerekir. Çocuklarda FDA onaylı: sertralin (6 yaş üstü), fluoksetin (7), fluvoksamin (8), klomipramin (10). Türkiye KÜB\'ünde klomipramin 10–17 yaşta yalnız OKB\'de endike. Başarılı tedaviden sonra kaudat ve OFC etkinliği azalır.',
            core: ['raphe'], related: ['ofc', 'acc', 'caudate', 'th_md'], flow: 'nt:5ht',
            src: 'POTS, 2004 (JAMA); van der Straten ve ark., 2017 (meta-analiz).' },
          { id: 'erp', name: 'Maruz bırakma ve tepki önleme', sub: 'Bilişsel davranışçı terapi (BDT)', ev: 'A',
            text: 'Çocuk ve ergende ilk basamak; ilaçla birlikte en yüksek düzelme (POTS: birlikte %53,6, yalnız BDT %39,3, plasebo %3,6). Korku sönmesi öğrenmesini kullanır: ventromedial PFC amigdalayı frenler. Atlasta bu düzenleme kitaptaki "Fronto-limbik olgunlaşma yolu" ile çizilir. Yanıt verenlerde kaudat metabolizması azalır.',
            core: ['mpfc', 'amygdala'], related: ['ofc', 'hippocampus', 'caudate'], flow: 'path:frontolimbic',
            src: 'POTS, 2004; Baxter ve ark., 1992.' },
          { id: 'dbs-vcvs', name: 'Derin beyin uyarımı: VC/VS', sub: 'Ventral kapsül ve ventral striatum', ev: 'B',
            text: 'Tedaviye dirençli ağır erişkin OKB\'de. Elektrot iç kapsülün ön bacağı boyunca iner, uç kontakları ventral striatumdadır (akumbens çevresi). FDA insani cihaz muafiyeti 2009. Bütün DBS hedeflerini kapsayan meta-analizde (31 çalışma, 116 hasta; çoğu striatal hedef) belirtiler ortalama %45 azaldı, yanıt oranı %60. Çocuklarda kullanılmaz.',
            core: ['nacc'], related: ['caudate', 'putamen', 'ofc', 'th_md'],
            elektrot: { hedef: 'nacc', mni: [9, 12, -7.5], yon: [0.24, 0.5, 0.83], kontak: [3, 4], aktif: 1 },
            src: 'Alonso ve ark., 2015 (meta-analiz). Elektrot yolu şematiktir.' },
          { id: 'dbs-stn', name: 'Derin beyin uyarımı: STN', sub: 'Subtalamik çekirdeğin ön-iç bölümü', ev: 'B',
            text: 'Parkinson hastalığındaki motor hedefin önündeki ve içindeki duygusal-bilişsel bölüm. 16 hastalık çift kör çapraz çalışmada Y-BOCS ortalaması uyarım açıkken 19, sahte uyarımda 28 idi; ciddi yan etkiler de görüldü. Çocuklarda kullanılmaz.',
            core: ['stn'], related: ['gpi', 'gpe', 'th_va', 'caudate'],
            elektrot: { hedef: 'stn', mni: [9.7, -10.6, -8.2], yon: [0.27, 0.38, 0.88], kontak: [1.5, 0.5], aktif: 1 },
            src: 'Mallet ve ark., 2008 (NEJM). Elektrot yolu şematiktir.' },
          { id: 'dtms', name: 'Derin TMS (H7 bobini)', sub: 'Medial prefrontal korteks ve ön singulat', ev: 'B',
            text: 'Kafatası üzerinden manyetik uyarı; H7 bobini daha derine, ön singulata ulaşır. Her seansta belirtiler önce kışkırtılır. 99 erişkinde yanıt oranı tedavi sonunda %38,1 (plasebo %11,1), bir ay sonra %45,2 (plasebo %17,8). FDA 2018. Çocuklarda kullanılmaz.',
            core: ['mpfc', 'acc'], related: ['ofc', 'caudate'],
            bobin: { merkez: [0, 26, 82], hedef: [0, 28, 22], yaricap: 21, ara: 17 },
            src: 'Carmi ve ark., 2019 (American Journal of Psychiatry). Bobin ve alan şematiktir.' },
      { id: 'apgucl', name: 'Antipsikotik güçlendirmesi', sub: 'SSRİ ve BDT\'ye yanıt yoksa', ev: 'B',
        text: 'Erişkin meta-analizinde aripiprazol kısa dönemde etkili, risperidonun etkisi küçüktür; ketiapin ve olanzapin plasebodan farklı bulunmadı. Yazarlar dikkatli kullanım ve 4. haftada değerlendirme önerir. Uzun dönem riskleri göz önünde tutulur.',
        core: ['caudate', 'putamen'], related: ['vta', 'snc'], flow: 'nt:da', src: 'Veale ve ark., 2014 (BMC Psychiatry).' }
    ]
      }
    },
    {
      id: 'depresyon', name: 'Depresyon', short: 'Depresyon', eng: 'Depression major depressive disorder',
      color: '#5e82d9', page: 'tani/depresyon.html',
      summary: 'Ödül, stres yanıtı ve duygu düzenleme devreleri; ergenlikte irritabilite ve anhedoni öne çıkabilir.',
      core: ['acc', 'mpfc', 'ofc', 'hippocampus', 'amygdala', 'nacc'], related: ['vta', 'hb', 'hypothalamus', 'dlpfc', 'insula', 'pag', 'raphe', 'lc', 'thalamus'],
      nets: ['dmn', 'fpn', 'sal'], nt: ['5ht', 'da', 'ne'], panksepp: ['SEEKING', 'PANIC/GRIEF', 'PLAY', 'CARE'],
      mercek: M_DEP,
      kitapta: [{ sys: 'SEEKING' }, { sys: 'PANIC/GRIEF' }, { sys: 'PLAY' }, { sys: 'CARE' },
        { entry: 'vta_nacc', snippet: 'depresyonda SEEKING’in sönmesi ve anhedoni (Bölüm 8)' }, { entry: 'pag' }]
    },
    {
      id: 'yab', name: 'Yaygın Anksiyete Bozukluğu', short: 'YAB', eng: 'Generalized anxiety disorder GAD',
      color: '#c99a2e', page: 'tani/yab.html',
      summary: 'Tehdit algısı (amigdala), belirsiz tehdide süreğen kaygı (BNST), beden duyumu (insula) ve prefrontal düzenleme.',
      core: ['amygdala', 'bnst', 'insula', 'acc', 'mpfc', 'hippocampus'], related: ['hypothalamus', 'lc', 'pag', 'ofc', 'dlpfc', 'thalamus', 'raphe'],
      nets: ['sal', 'dmn', 'lim'], nt: ['5ht', 'ne'], panksepp: ['FEAR', 'PANIC/GRIEF'],
      mercek: M_YAB,
      kitapta: [{ sys: 'FEAR' }, { entry: 'bnst', field: 'note', snippet: 'Yaygın anksiyete ve “kötü bir şey olacak hissi” (Bölüm 3’teki PANIC tarifi) BNST ağırlıklı bir örüntüyle daha iyi açıklanabilir.' },
        { entry: 'amygdala' }, { entry: 'hippocampus' }, { sys: 'PANIC/GRIEF' }]
    },
    {
      id: 'tssb', name: 'Travma Sonrası Stres Bozukluğu', short: 'TSSB', eng: 'Post-traumatic stress disorder PTSD',
      color: '#c4573f', page: 'tani/tssb.html',
      summary: 'Korku öğrenmesi ve sönme devresi: amigdala aşırı, ventromedial PFC frenlemesi ve hipokampusun bağlam bilgisi zayıf.',
      core: ['amygdala', 'hippocampus', 'mpfc', 'acc', 'insula'], related: ['pag', 'hypothalamus', 'lc', 'thalamus', 'vagal'],
      nets: ['sal', 'dmn'], nt: ['ne', '5ht'], panksepp: ['FEAR', 'PANIC/GRIEF'],
      mercek: M_TSSB,
      kitapta: [{ sys: 'FEAR' }, { entry: 'pag' },
        { entry: 'hippocampus', snippet: 'kronik stresin bağlamsallaştırma kaybına yol açması (PTSD’de “her yer tehlikeli” hissi; Bölüm 10 ve 18)' },
        { entry: 'amygdala', snippet: 'travma sonrası hipokampüs-amigdala dengesizliği (Bölüm 18)' },
        { path: 'amy_hip', snippet: 'PTSD’de bağlamsal genelleme (Bölüm 18)' },
        { path: 'vagal_hier', snippet: 'travma sonrası dissosiyasyon ve tolerans penceresi (Bölüm 18)' }]
    },
    {
      id: 'bipolar', name: 'Bipolar Bozukluk', short: 'Bipolar', eng: 'Bipolar disorder',
      color: '#d9608e', page: 'tani/bipolar.html',
      summary: 'Duygu düzenleme (amigdala, ventrolateral PFC) ve ödül devreleri; mani ve depresif atak arasında dalgalanma.',
      core: ['amygdala', 'broca', 'ofc', 'nacc', 'hippocampus'], related: ['vta', 'acc', 'thalamus', 'mpfc', 'dlpfc'],
      nets: ['lim', 'fpn', 'sal'], nt: ['da', '5ht', 'ne'], panksepp: ['SEEKING'],
      mercek: M_BIP,
      kitapta: [{ sys: 'SEEKING' }, { entry: 'vta_nacc' }]
    },
    {
      id: 'sizofreni', name: 'Şizofreni', short: 'Şizofreni', eng: 'Schizophrenia psychosis',
      color: '#4aa8c4', page: 'tani/sizofreni.html',
      summary: 'Striatumda artmış dopamin, hipokampus ve prefrontal korteks; olumlu, olumsuz ve bilişsel belirtiler.',
      core: ['caudate', 'putamen', 'vta', 'hippocampus', 'dlpfc'], related: ['sn', 'nacc', 'stg', 'thalamus', 'amygdala', 'gp', 'acc'],
      nets: ['fpn', 'dmn', 'sal'], nt: ['da'], panksepp: ['SEEKING'],
      mercek: M_SZ,
      kitapta: [{ sys: 'SEEKING' }, { path: 'mezo', field: 'note', snippet: 'psikiyatride kullanılan ilaçların çoğunun (stimülan, antipsikotik, hatta bazı antidepresanlar) dolaylı ya da doğrudan hedefi' }]
    },
    {
      id: 'borderline', name: 'Borderline Kişilik Bozukluğu', short: 'Borderline', eng: 'Borderline personality disorder BPD',
      color: '#d0703f', page: 'tani/borderline.html',
      summary: 'Duygu düzenleme devresi: olumsuz duygulara amigdala aşırı, DLPFC az yanıt; zihinselleştirme ve sosyal acı.',
      core: ['amygdala', 'dlpfc', 'acc', 'insula', 'ofc'], related: ['mpfc', 'pcc', 'tpj', 'hippocampus'],
      nets: ['lim', 'sal', 'fpn'], nt: ['5ht'], panksepp: ['PANIC/GRIEF', 'RAGE', 'FEAR'],
      mercek: M_BPD,
      kitapta: [{ entry: 'ofc_vmpfc' }, { entry: 'acc' }, { sys: 'PANIC/GRIEF' }]
    },
    {
      id: 'tik', name: 'Tik Bozuklukları ve Tourette', short: 'Tik', eng: 'Tic disorders Tourette syndrome',
      color: '#5fae55', page: 'tani/tik.html',
      summary: 'Duyusal-motor kortiko-striato-talamo-kortikal döngü; tikten önce gelen öncü dürtü insula ve ek motor alanla ilişkili.',
      core: ['putamen', 'caudate', 'premotor', 'motor', 'insula'], related: ['gpi', 'thalamus', 'th_vld', 'acc', 'cerebellum', 'sn'],
      nets: ['smn', 'sal'], nt: ['da', 'ne'], panksepp: ['SEEKING', 'PLAY'],
      mercek: M_TIK,
      kitapta: [{ entry: 'bg', snippet: 'tikler ve öncü dürtüler (Bölüm 9)' }, { entry: 'cerebellum' }]
    }
  ];
})();
