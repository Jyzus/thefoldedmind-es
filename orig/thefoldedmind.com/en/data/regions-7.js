/* Bölge verileri — 7: CIT168 ile eklenen çekirdekler ve alt yapılar
   parent: alt yapının ebeveyni; alt yapılar ebeveyn ya da kardeşleri seçilince görünür.
   Alt yapı kartları kısadır; boş sekmeler gösterilmez. */
(window.NEURO_REGIONS = window.NEURO_REGIONS || []).push(

{
  id: 'sn', group: 'basal', color: '#4a4f9e', deep: true, reviewed: '2026-10-12',
  name: 'Substantia Nigra', short: 'SN',
  latin: 'Substantia nigra',
  summary: 'Orta beyindeki "kara cisim": dopaminle hareketi ve alışkanlık öğrenmesini besleyen kompakta ile bazal ganglionların çıkışını taşıyan retikülata bölümlerinden oluşur.',
  anatomy: [
    'Orta beyin tabanında, serebral pedinkülün dorsalinde, VTA\'nın lateralinde iki yanlı yerleşir; nöromelanin içeren nöronları nedeniyle koyu renklidir.',
    'İki bölüm: dorsaldeki pars kompakta (SNc; dopaminerjik nöronlar) ve ventraldeki pars retikülata (SNr; GABAerjik çıkış nöronları).',
    'SNc dorsal striatuma (nigrostriatal yol), SNr talamusa (VA/VL ve mediodorsal), superior kollikulusa ve PPN\'ye projekte olur.',
    'Kanlanma: posterior serebral arter dalları.'
  ],
  functions: [
    'SNc: dorsal striatuma dopamin sağlayarak hareketin başlatılmasını, hızını ve motor öğrenmeyi destekler.',
    'Alışkanlık ve beceri öğrenmesi: dorsal striatumdaki dopamin sinyali eylemlerin otomatikleşmesine katkıda bulunur.',
    'SNr: GPi ile birlikte bazal ganglionların çıkış çekirdeği; talamusu ve superior kollikulusu tonik olarak frenler, istenen hareket için bu fren kalkar.',
    'Göz hareketleri: SNr → superior kollikulus yolu istemli sakkadları kapılar.'
  ],
  tests: [
    'Nörolojik muayene: bradikinezi, rijidite, tremor, postür (ekstrapiramidal bulgular)',
    'Hareket bozukluğu ölçekleri: Simpson-Angus (ilaca bağlı parkinsonizm), AIMS',
    'Dopamin taşıyıcısı görüntüleme (DaT-SPECT)',
    'Nöromelanine duyarlı MR: SN sinyali striatal dopamin salınım kapasitesiyle ilişkili; şizofrenide ve psikoz için klinik yüksek riskli bireylerde sinyal yüksekliği belirti şiddetiyle ilişkili (Cassidy ve ark., 2019). Işınım ve girişim gerektirmeyen dopamin göstergesi; araştırma aşamasında. [C]'
  ],
  development: [
    'Dopaminerjik nöronlar embriyonik dönemde orta beyin tabanında oluşur; nigrostriatal bağlantılar doğumdan önce kurulur.',
    'Nöromelanin pigmenti yaşla birikir; çocuklarda substantia nigra erişkindeki kadar koyu görünmez.',
    'İnsan postmortem çalışmalarında striatal dopamin reseptör yoğunluğu çocuklukta zirve yapıp sonra azalır.'
  ],
  clinical: [
    'Antipsikotiklerin ekstrapiramidal yan etkileri (akut distoni, akatizi, parkinsonizm): nigrostriatal yolda D2 blokajı; çocuk ve ergenlerde akut distoni riski daha yüksektir.',
    'Tourette ve tik bozuklukları: dopaminerjik aşırı duyarlılık hipotezi; D2 antagonistleri ve kısmi agonistleri (aripiprazol) tikleri azaltır.',
    'DEHB: stimülanlar striatal dopamini artırır; DEHB\'li çocuklarda transkraniyal ultrasonda SN ekojenitesinde artış bildirilmiştir (Romanos ve ark., 2010).',
    'Dopa-duyarlı distoni (Segawa hastalığı): çocuklukta gün içinde kötüleşen distoni ve yürüme bozukluğu; düşük doz levodopaya belirgin yanıt.',
    'Nöroleptik malign sendrom: dopamin blokajıyla ilişkili, hayatı tehdit eden tablo (rijidite, hipertermi, otonom dengesizlik).'
  ],
  treatment: [
    'Antipsikotiğe bağlı akut distoni: antikolinerjik (biperiden) ya da difenhidramin; ergen ve genç erkeklerde risk daha yüksek. Parkinsonizmde doz azaltma ya da antikolinerjik; akatizide propranolol. [A]',
    'Nöroleptik malign sendrom: acil durum; antipsikotik hemen kesilir, yoğun destek tedavisi (sıvı, soğutma). Ağır olguda dantrolen ya da bromokriptin kullanılır; bu ilaçların kanıtı olgu serilerine dayanır. [B]',
    'Dopa-duyarlı distoni (Segawa): düşük doz levodopaya dramatik ve kalıcı yanıt; açıklanamayan çocukluk distonisinde levodopa denemesi önerilir. [A]'
  ],
  lesion: [
    'SNc nöron kaybı: Parkinson hastalığı (bradikinezi, rijidite, istirahat tremoru); belirtiler nöronların büyük kısmı kaybolunca ortaya çıkar.',
    'MPTP toksisitesi: seçici SNc hasarı ve parkinsonizm.'
  ],
  links: ['SNc → dorsal striatum (nigrostriatal dopamin yolu)', 'Striatum → SNr (doğrudan yol, GABA)', 'SNr → talamus VA/VL ve mediodorsal, superior kollikulus, PPN', 'Subtalamik çekirdek → SNr (glutamat)', 'Dopamin (D1, D2 reseptörleri), GABA']
},

{
  id: 'snc', parent: 'sn', group: 'basal', color: '#2f3a8f', deep: true, reviewed: '2026-10-12',
  name: 'Substantia Nigra Pars Kompakta', short: 'SNc',
  latin: 'Substantia nigra pars compacta',
  summary: 'Nigrostriatal dopamin yolunun kaynağı: dorsal striatumu besleyerek hareketi ve alışkanlık öğrenmesini destekler.',
  anatomy: [
    'SN\'nin dorsal bölümü; nöromelanin içeren, sıkı dizilmiş dopaminerjik nöronlar (A9 hücre grubu).',
    'Medialde VTA (A10) ile süreklidir.'
  ],
  functions: [
    'Dorsal striatuma dopamin: hareketin başlatılması ve ölçeklendirilmesi.',
    'Ödül tahmin hatası sinyalleri ve beceri/alışkanlık öğrenmesi.'
  ],
  tests: [], development: [],
  clinical: [
    'Parkinson hastalığında en erken ve en çok etkilenen dopamin hücre grubu.',
    'Antipsikotiklerin nigrostriatal D2 blokajı ekstrapiramidal yan etkilerin temelidir.'
  ],
  lesion: [], links: []
},

{
  id: 'snr', parent: 'sn', group: 'basal', color: '#7d86d6', deep: true, reviewed: '2026-10-12',
  name: 'Substantia Nigra Pars Retikülata', short: 'SNr',
  latin: 'Substantia nigra pars reticulata',
  summary: 'GPi ile birlikte bazal ganglionların iki çıkış çekirdeğinden biri: talamusu ve superior kollikulusu frenleyen GABAerjik nöronlar.',
  anatomy: [
    'SN\'nin ventral bölümü; serebral pedinküle komşu, gevşek dizilmiş GABAerjik nöronlar.',
    'Striatumdan (doğrudan yol) ve subtalamik çekirdekten girdi alır.'
  ],
  functions: [
    'Talamus (VA/VL, mediodorsal) ve superior kollikulus üzerinde tonik ketleme; istenen hareket ve sakkad için ketleme kalkar.',
    'Hayvan modellerinde nöbetlerin yayılmasını denetleyen bir kapı olarak tanımlanmıştır.'
  ],
  tests: [], development: [],
  clinical: [
    'Bazal ganglion çıkışındaki dengesizlik distoni ve kore gibi hareket bozukluklarına katkıda bulunur.'
  ],
  lesion: [], links: []
},

{
  id: 'gpe', parent: 'gp', group: 'basal', color: '#8fa9ea', deep: true, reviewed: '2026-10-12',
  name: 'Globus Pallidus Dış Segment', short: 'GPe',
  latin: 'Globus pallidus externus',
  summary: 'Dolaylı yolun ara istasyonu: subtalamik çekirdeği frenleyerek istenmeyen hareketlerin baskılanmasını ayarlar.',
  anatomy: [
    'Lentiform çekirdeğin putamene bitişik dış kısmı; medial medüller lamina ile GPi\'den ayrılır.',
    'Striatumdan (dolaylı yol, enkefalinerjik nöronlar) GABAerjik girdi alır; subtalamik çekirdekle karşılıklı bağlantılıdır.'
  ],
  functions: [
    'Dolaylı yol: striatum → GPe → subtalamik çekirdek → GPi/SNr.',
    'GPe–STN döngüsü bazal ganglion ritimlerini (beta salınımları) düzenler.'
  ],
  tests: [], development: [],
  clinical: [
    'Parkinson hastalığında GPe–STN döngüsünde aşırı beta ritmi görülür.'
  ],
  lesion: [], links: []
},

{
  id: 'gpi', parent: 'gp', group: 'basal', color: '#3f63c4', deep: true, reviewed: '2026-10-12',
  name: 'Globus Pallidus İç Segment', short: 'GPi',
  latin: 'Globus pallidus internus',
  summary: 'Bazal ganglionların ana çıkış çekirdeği: talamusu frenler; distoni ve dirençli Tourette\'te derin beyin stimülasyonu hedefi.',
  anatomy: [
    'Lentiform çekirdeğin en medial kısmı; iç kapsülün arka bacağına komşu.',
    'Doğrudan yoldan (striatum) ve subtalamik çekirdekten (dolaylı ve hiperdirekt yollar) girdi alır.'
  ],
  functions: [
    'Talamus VA/VL\'ye tonik GABAerjik çıkış; doğrudan yolla ketlenince talamus serbest kalır ve istenen hareket başlar.',
    'Ventromedial (limbik) bölümü motivasyonla ilgili devrelere katılır.'
  ],
  tests: [], development: [],
  clinical: [
    'Distoni (özellikle DYT1) ve dirençli Tourette\'te GPi derin beyin stimülasyonu.',
    'Kernikterus, karbon monoksit zehirlenmesi ve PKAN\'da pallidal tutulum.'
  ],
  lesion: [], links: []
},

{
  id: 'stn', group: 'basal', color: '#2e9e6a', deep: true, reviewed: '2026-10-12',
  name: 'Subtalamik Çekirdek', short: 'STN',
  latin: 'Nucleus subthalamicus',
  summary: 'Bazal ganglionların "dur" düğmesi: hiperdirekt yolla korteksten hızlı sinyal alır ve hareketleri ve kararları bir an için frenler.',
  anatomy: [
    'Diensefalonun ventralinde, talamusun altında, iç kapsülün medialinde mercek biçimli küçük bir çekirdek; hemen altında substantia nigra bulunur.',
    'Bazal ganglionların tek glutamaterjik (uyarıcı) çekirdeği.',
    'Girdi: korteks (hiperdirekt yol: sağ IFG, pre-SMA, motor korteks) ve GPe; çıkış: GPi, SNr ve GPe.',
    'Dorsolateralden ventromediale motor, ilişkisel ve limbik alt bölgeler.'
  ],
  functions: [
    'Yanıt ketleme: "dur" sinyalinin hızlı iletimi (sağ IFG → STN).',
    'Karar çatışmasında frenleme: seçenekler zorlaştığında karar eşiğini yükseltir (Frank, 2006).',
    'Dolaylı ve hiperdirekt yollarla GPi/SNr\'yi uyararak istenmeyen hareketleri baskılar.'
  ],
  tests: [
    'Stop-Signal görevi (durma tepki süresi)',
    'Go/No-Go görevi',
    'Hareket bozukluğu muayenesi (balizm, kore)'
  ],
  development: [
    'Yanıt ketleme becerisi (durma tepki süresi) çocukluktan ergenliğe belirgin biçimde gelişir; fronto-subtalamik ağın olgunlaşmasıyla ilişkilendirilir.'
  ],
  clinical: [
    'DEHB: yanıt ketleme güçlüğü; sağ IFG–STN ağında farklılıklar bildirilmiştir.',
    'OKB: erişkin dirençli OKB\'de STN derin beyin stimülasyonu araştırılmıştır (Mallet ve ark., 2008).',
    'Parkinson hastalığında STN derin beyin stimülasyonu motor belirtileri düzeltir; bazı hastalarda dürtüsellik ve hipomani yan etki olarak görülür.'
  ],
  treatment: [
    'Parkinson hastalığında STN derin beyin uyarımı motor belirtileri ve ilaç gereksinimini azaltır; bazı hastalarda dürtüsellik ve hipomani gelişebilir, bu da STN\'nin "dur" işlevinin karar vermedeki rolünü gösterir. [A]',
    'Dirençli OKB\'de STN uyarımı sahte kontrollü çaprazlama çalışmada belirtileri azalttı (Mallet ve ark., 2008); erişkin, ileri basamak. [B]',
    'DEHB\'de metilfenidat, yanıt ketleme görevlerinde sağ IFG etkinliğini artırır (fMRI meta-analizleri); bu etkinin STN düzeyindeki karşılığına ilişkin insan kanıtı sınırlıdır. [C]'
  ],
  lesion: [
    'Karşı tarafta hemiballismus: ani, savurucu, istemsiz kol-bacak hareketleri (klasik olarak STN infarktı).'
  ],
  links: ['Korteks (sağ IFG, pre-SMA, motor korteks) → STN (hiperdirekt yol, glutamat)', 'GPe ↔ STN (dolaylı yol, beta ritmi)', 'STN → GPi ve SNr (uyarıcı çıkış)', 'Glutamat (çıkış), GABA (girdi)']
},

{
  id: 'rn', group: 'stem', color: '#e0263f', deep: true, reviewed: '2026-10-12',
  name: 'Kırmızı Çekirdek', short: 'RN',
  latin: 'Nucleus ruber',
  summary: 'Orta beyinde serebellum ile motor sistem arasındaki istasyon: hareketin koordinasyonuna ve motor öğrenmeye katkıda bulunur.',
  anatomy: [
    'Orta beyin tegmentumunda, superior kollikulus düzeyinde, substantia nigranın dorsomedialinde; demir içeriği nedeniyle T2 ağırlıklı MR\'da koyu seçilir.',
    'Büyük hücreli (rubrospinal yol) ve küçük hücreli (rubro-olivar yol) bölümler; insanda küçük hücreli bölüm baskındır.',
    'Girdi: karşı taraf dentat çekirdekten superior serebellar pedinkülle, ayrıca motor ve premotor korteksten.',
    'Okülomotor sinir lifleri çekirdeğin içinden geçer.'
  ],
  functions: [
    'Serebellar çıkışın motor sisteme aktarılması.',
    'Rubro-olivar döngü ile motor öğrenme ve hata düzeltmeye katkı.',
    'Rubrospinal yol: insanda küçüktür, kol ve el hareketlerine katkıda bulunur.'
  ],
  tests: [
    'Serebellar muayene: parmak–burun, intansiyonel tremor',
    'Göz hareketleri (okülomotor sinir)',
    'Demire duyarlı MR (SWI): kırmızı çekirdek ve substantia nigra görüntüsü'
  ],
  development: [
    'Beyin demiri yaşla artar; kırmızı çekirdek ve substantia nigradaki demir çocukluk ve ergenlikte hızla yükselir.'
  ],
  clinical: [
    'Holmes (rubral) tremoru: orta beyin lezyonlarından sonra istirahat, postür ve hareketle birlikte görülen yavaş, kaba tremor.',
    'Huzursuz bacak sendromu ve DEHB\'de düşük ferritin ve beyin demiri ile ilişkili bulgular araştırılmaktadır.',
    'Wilson hastalığında orta beyinde "dev panda yüzü" MR bulgusu (kırmızı çekirdek ve substantia nigra çevresi).'
  ],
  lesion: [
    'Benedikt sendromu: aynı tarafta okülomotor sinir felci, karşı tarafta tremor ve ataksi.',
    'Claude sendromu: aynı tarafta okülomotor sinir felci, karşı tarafta serebellar ataksi.'
  ],
  links: ['Dentat çekirdek (karşı taraf) → kırmızı çekirdek (superior serebellar pedinkül)', 'Kırmızı çekirdek → inferior olive (rubro-olivar yol) → serebellum', 'Kırmızı çekirdek → omurilik (rubrospinal yol)', 'Motor ve premotor korteks → kırmızı çekirdek']
},

{
  id: 'hb', group: 'dien', color: '#e0a03a', deep: true, reviewed: '2026-10-12',
  name: 'Habenula', short: 'Hb',
  latin: 'Nuclei habenulares',
  summary: 'Hayal kırıklığı ve kaçınmanın sinyali: beklenen ödül gelmeyince etkinleşir, dopamin ve serotonin nöronlarını frenler; depresyonda aşırı etkin olduğu düşünülür.',
  anatomy: [
    'Epitalamusta, talamusun dorsomedialinde, 3. ventrikülün arka-üst kenarında, pineal bezin önünde iki yanlı küçük çekirdek.',
    'Medial ve lateral habenula; lateral habenula (LHb) ödül ve ceza devresinin ana parçasıdır.',
    'Girdi: stria medullaris ile bazal ön beyin, lateral hipotalamus ve pallidum sınır bölgesinden; çıkış: fasikülüs retrofleksus ile interpedünküler çekirdek, RMTg, VTA ve rafe.'
  ],
  functions: [
    'Olumsuz ödül tahmin hatası: beklenen ödül gelmediğinde ya da ceza geldiğinde etkinleşir (Matsumoto ve Hikosaka, 2007).',
    'RMTg üzerinden VTA dopamin nöronlarını, ayrıca rafe serotonin nöronlarını ketler; kaçınma ve vazgeçme davranışını destekler.',
    'Uyku ve sirkadiyen ritim düzenlemesine katkı.'
  ],
  tests: [
    'Olasılıksal ödül ve ceza öğrenme görevleri (olumsuz tahmin hatası)',
    'Yüksek çözünürlüklü MR ve fMRI (araştırma; küçük boyutu ölçümü zorlaştırır)'
  ],
  development: [
    'Evrimsel olarak korunmuş, erken gelişen bir yapıdır; insanda gelişimsel veri sınırlıdır.',
    'Hayvan modellerinde erken yaşam stresinin lateral habenula etkinliğini artırdığı bildirilmiştir.'
  ],
  clinical: [
    'Depresyon: lateral habenula hiperaktivitesi hayvan modellerinde gösterilmiştir; ketaminin hızlı antidepresan etkisi kısmen LHb\'deki patlama tarzı ateşlemeyi engellemesine bağlanmıştır (Yang ve ark., 2018).',
    'Erişkin dirençli depresyonda habenula derin beyin stimülasyonu vaka düzeyinde denenmiştir.',
    'Madde kullanımı ve yoksunluğun olumsuz duygulanımı: kaçınma devresinin parçası.'
  ],
  treatment: [
    'Esketamin (burun spreyi, NMDA antagonisti): erişkin dirençli depresyonda FDA onaylı (2019); hayvan çalışmalarında hızlı etki lateral habenuladaki patlama tarzı ateşlemenin engellenmesine bağlanmıştır (Yang ve ark., 2018). Ergenlerde rutin kullanımı yok. [B]',
    'Habenula derin beyin uyarımı: dirençli depresyonda yalnızca vaka düzeyinde, deneysel. [C]'
  ],
  lesion: [
    'Hayvanlarda lateral habenula lezyonu öğrenilmiş çaresizlik benzeri davranışı azaltır.'
  ],
  links: ['Bazal ön beyin, lateral hipotalamus ve pallidum sınır bölgesi → habenula (stria medullaris)', 'Lateral habenula → RMTg → VTA ve substantia nigra (dopaminin ketlenmesi)', 'Lateral habenula → rafe çekirdekleri (serotonin)', 'Medial habenula → interpedünküler çekirdek (nikotin, kaygı)']
},

{
  id: 'vp', group: 'basal', color: '#a3349a', deep: true, reviewed: '2026-10-12',
  name: 'Ventral Pallidum', short: 'VP',
  latin: 'Pallidum ventrale',
  summary: 'Ödülün "beğenilme" ve motivasyon çıkışı: nükleus akumbensten gelen sinyali talamus ve beyin sapına aktarır; hedonik sıcak noktalar içerir.',
  anatomy: [
    'Bazal ön beyinde, anterior komissürün altında, globus pallidusun ventralinde ve nükleus akumbensin arkasında.',
    'Ventral striatumun (akumbens) GABAerjik çıkışını alır; çıkışı mediodorsal talamus, lateral habenula, VTA ve lateral hipotalamusa gider.',
    'Bazal ön beyin kolinerjik nöronlarıyla (Meynert çekirdeği) iç içe geçer.'
  ],
  functions: [
    'Hedonik "beğenme": opioid sıcak noktası tatlı tatlara verilen hoşlanma yanıtını artırır (Berridge ve Kringelbach, 2015).',
    'Motivasyonun eyleme dönüştürülmesi: limbik döngünün (akumbens → VP → mediodorsal talamus → PFC) parçası.',
    'Sosyal bağlanma: bozkır faresinde ventral pallidumdaki vazopressin V1a reseptörleri eş bağının oluşumuna katılır (Lim ve ark., 2004); oksitosin daha çok nükleus akumbens üzerinden etkili.'
  ],
  tests: [
    'Tat hedonik tepkileri (araştırma)',
    'Ödülün beklenti ve tüketim evrelerini ayıran fMRI görevleri'
  ],
  development: [
    'Ödül devresinin parçası olarak ergenlikteki ödül duyarlılığı artışına katkıda bulunduğu düşünülür; doğrudan gelişimsel veri sınırlıdır.'
  ],
  clinical: [
    'Anhedoni ve depresyon: hedonik devrelerde işlev azalması.',
    'Madde kullanım bozuklukları: VP, madde arayışının yeniden başlamasında (nüks) rol oynar (hayvan çalışmaları).'
  ],
  lesion: [
    'Hayvanlarda VP lezyonu tatlıya karşı hoşlanma yanıtını tiksinmeye çevirebilir.'
  ],
  links: ['Nükleus akumbens → ventral pallidum (GABA, enkefalin)', 'Ventral pallidum → mediodorsal talamus → PFC (limbik döngü)', 'Ventral pallidum ↔ VTA, lateral habenula, lateral hipotalamus', 'μ-opioid, GABA ve vazopressin (V1a) reseptörleri']
}

);
