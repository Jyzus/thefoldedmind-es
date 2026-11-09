/* Bölge verileri — 4/4: Diensefalon, komissür, beyin sapı, serebellum */
(window.NEURO_REGIONS = window.NEURO_REGIONS || []).push(

{
  id: 'thalamus', group: 'dien', color: '#8a7ff0', deep: true, reviewed: '2026-10-12',
  name: 'Talamus', short: 'TH',
  latin: 'Thalamus',
  summary: 'Kortekse açılan kapı: koku dışındaki tüm duyuları süzer ve aktarır; uyanıklığı, dikkati ve motor döngüleri düzenler.',
  anatomy: [
    'Diensefalonun en büyük bölümü; iki yumurta şekilli kitle, 3. ventrikülün yan duvarları, interthalamik adezyon ile bağlı.',
    'İnternal medüller lamina ile anterior, medial ve lateral gruplar.',
    'Çekirdekler: VPL/VPM (somatosensoriyel), LGN (görme), MGN (işitme), VA/VL (motor), mediodorsal (PFC), anterior (limbik), pulvinar (görsel dikkat), retiküler (GABAerjik kapı), intralaminer (uyarılmışlık).',
    'Kanlanma: PCA (talamoperforan, talamogenikulat arterler), posterior komünikan ve anterior koroidal arterler.'
  ],
  functions: [
    'Duyusal bilginin kortekse aktarımı ve süzülmesi (koku hariç).',
    'Uyku–uyanıklık ve bilinç düzeyi; talamokortikal ritimler ve uyku iğcikleri (retiküler çekirdek).',
    'Dikkat: pulvinar ve retiküler "kapı" mekanizması.',
    'Bazal ganglion ve serebellum çıkışlarını motor kortekse iletme (VA/VL).',
    'Çalışma belleği ve yürütücü işlevler (mediodorsal–PFC); bellek (anterior çekirdek — Papez).'
  ],
  tests: [
    'EEG: uyku iğcikleri, absans nöbetlerinde 3 Hz diken-dalga',
    'Duyusal kapılama: P50 supresyonu, prepulse inhibisyonu (PPI)',
    'Dikkat testleri'
  ],
  development: [
    'Talamokortikal aksonlar fetal dönemde kortikal alanların haritalanmasını yönlendirir.',
    'Uyku iğcikleri bebeklikte (~2–3. ay) ortaya çıkar; talamokortikal bağlantılar çocukluk boyunca olgunlaşır.',
    'Prematüre doğumda talamus hacmi ve bağlantılarında azalma.'
  ],
  clinical: [
    'Çocukluk çağı absans epilepsisi: talamokortikal ritim bozukluğu; T-tipi kalsiyum kanalları etosüksimidin hedefi. Etosüksimid ve valproat lamotrijinden daha etkili; valproat dikkat sorunlarına daha sık yol açtığından etosüksimid ilk seçimdir (Glauser ve ark., 2010). [A]',
    'Şizofreni: talamus hacmi ve PFC–talamus bağlantısında azalma (erken başlangıçlı olgularda da). Erişkin çalışmalarında uyku iğcikleri (talamik retiküler çekirdeğin ürettiği 12–16 Hz NREM salınımları) belirgin azalmış; bulgu gece boyunca kararlı, antipsikotiklere bağlı değil ve bilişsel performansla ilişkili (Ferrarelli ve ark., 2007, 2010). Aday biyolojik belirteç. [B]',
    'Tourette ve OKB: KSTK devresinin talamik halkası. ENIGMA-OKB\'de ilaç almayan çocuklarda talamus daha büyük (d = 0,38); erişkinde ise pallidum büyük, hipokampus küçük. Çocuk ve erişkin OKB\'sinin biyolojisi farklı olabilir (Boedhoe ve ark., 2017). [A]',
    'OSB ve şizofrenide duyusal kapılama farklılıkları.'
  ],
  treatment: [
    'Absans epilepsisi: etosüksimid ile başlanır; 16 haftada tedavi başarısızlığı olmayanlar etosüksimidde %53, valproatta %58, lamotrijinde %29; dikkat sorunu valproatta %49, etosüksimidde %33 (Glauser ve ark., 2010; 453 çocuk). Jeneralize tonik-klonik nöbet de varsa etosüksimid yetmez. [A]',
    'Tourette\'te derin beyin uyarımı: uluslararası kayıtta (185 hasta, 31 merkez) en sık hedef sentromedian talamus; 12 ayda motor tiklerde yaklaşık %38, vokal tiklerde %43 azalma; uyarıma bağlı konuşma bozukluğu ve parestezi sık ama geri dönüşlü (Martinez-Ramirez ve ark., 2018). Yalnızca dirençli, ağır olgularda. [C]',
    'Esansiyel tremorda talamik VIM çekirdeği derin beyin uyarımı ve odaklanmış ultrason (erişkin). [B]'
  ],
  lesion: [
    'Talamik ağrı sendromu (Dejerine-Roussy), kontralateral duyu kaybı.',
    'Talamik amnezi (anterior/mediodorsal); Wernicke ensefalopatisi (tiamin eksikliği — ergenlerde anoreksiya veya bariyatrik cerrahi sonrası bildirilmiştir).',
    'Bilateral paramedian infarkt: hipersomni, apati, vertikal bakış felci.'
  ],
  links: ['Tüm korteks (talamokortikal ve kortikotalamik projeksiyonlar)', 'Bazal ganglionlar (GPi → VA/VL)', 'Serebellum (dentat → VL)', 'Hipokampus ve mamiller cisim (anterior çekirdek)', 'Glutamat (projeksiyon), GABA (retiküler), asetilkolin ve noradrenalin girdileri']
},

{
  id: 'hypothalamus', group: 'dien', color: '#b06fd8', deep: true, reviewed: '2026-10-12',
  name: 'Hipotalamus & Hipofiz', short: 'HT',
  latin: 'Hypothalamus et hypophysis',
  summary: 'İç dengenin yöneticisi: ısı, açlık, uyku, stres ve puberteyi hormonlar ve otonom sinir sistemiyle düzenler.',
  anatomy: [
    '3. ventrikülün tabanı ve alt yan duvarları; talamusun altında (hipotalamik sulkus). Önde lamina terminalis ve optik kiyazma, arkada mamiller cisimler.',
    'Çekirdekler: suprakiazmatik (SCN — sirkadiyen saat), paraventriküler (CRH, oksitosin, vazopressin), supraoptik (ADH), arkuat (iştah, GnRH ağı, dopamin), ventromedial (tokluk, savunma), lateral (oreksin/hipokretin), preoptik (ısı, uyku — VLPO).',
    'Hipofiz: ön lob (portal damarlarla hormon kontrolü), arka lob (oksitosin ve ADH\'nin aksonal salınımı).',
    'Kanlanma: Willis poligonu dalları, superior hipofizer arter.'
  ],
  functions: [
    'Homeostaz: vücut ısısı, açlık–tokluk, susuzluk ve su dengesi.',
    'Uyku–uyanıklık ve sirkadiyen ritim (SCN, oreksin, VLPO).',
    'Nöroendokrin eksenler: HPA (stres–kortizol), HPG (puberte), HPT (tiroid), büyüme hormonu, prolaktin.',
    'Otonom sinir sisteminin üst kontrolü.',
    'Temel motive davranışlar: beslenme, cinsellik, savunma; bağlanma ve sosyal bağ (oksitosin, vazopressin).'
  ],
  tests: [
    'Endokrin değerlendirme: kortizol ritmi, prolaktin (antipsikotik izlemi), tiroid',
    'Aktigrafi ve uyku günlüğü',
    'Büyüme eğrisi, Tanner pubertal evrelemesi'
  ],
  development: [
    'Puberte başlangıcı: GnRH\'nin pulsatil salınımının yeniden etkinleşmesi (kisspeptin).',
    'Ergenlikte sirkadiyen faz gecikmesi: melatonin daha geç salınır, geç yatma eğilimi.',
    'Erken yaşam stresi HPA ekseninin programlanmasını değiştirir.'
  ],
  clinical: [
    'Anoreksiya nervoza: hipotalamik amenore (HPG baskılanması), HPA aktivasyonu.',
    'Antipsikotiklere bağlı kilo artışı (H1, 5-HT2C) ve hiperprolaktinemi (tuberoinfundibular D2 blokajı).',
    'Narkolepsi tip 1: lateral hipotalamustaki oreksin (hipokretin) nöronlarının %85–95\'i kaybolur; komşu MCH nöronları korunur, gliozis dejeneratif (büyük olasılıkla otoimmün) süreci düşündürür (Thannickal ve ark., 2000). Başlangıç sıklıkla çocukluk ve ergenliktedir; dikkat sorunu ya da depresyon sanılabilir. [B]',
    'Prader-Willi sendromu (hiperfaji), kraniyofarenjiom (hipotalamik obezite, davranış değişikliği).',
    'Hipotalamik hamartom: jelastik (gülme) nöbetleri, erken puberte, davranış sorunları.',
    'Kızlarda erken puberte depresyon ve anksiyete riskinde artışla ilişkilidir.',
    'Otizmde oksitosin: 3–17 yaş 290 çocukta 24 hafta burun içi oksitosin sosyal işlevi plasebodan farklı iyileştirmedi (SOARS-B; Sikich ve ark., 2021). Endikasyon dışı kullanımı desteklenmiyor. [B]'
  ],
  treatment: [
    'Narkolepsi (çocuk): sodyum oksibat 7 yaş ve üstünde katapleksi ve gündüz uykululuğu için FDA onaylı (2018); pitolisant (H3 reseptör ters agonisti, histamin salınımını artırır) 6 yaş ve üstünde gündüz uykululuğu için FDA onaylı (2024). İkisi de oreksin kaybının aşağı akışını telafi eder. [A]',
    'Prader-Willi sendromu: diazoksit kolin (uzun salımlı) 4 yaş ve üstünde hiperfaji için FDA onaylı ilk ilaç (Mart 2025). [A]',
    'Monogenik ve sendromik obezite: setmelanotid (MC4R agonisti) POMC, PCSK1 ya da LEPR eksikliğinde ve Bardet-Biedl sendromunda 2 yaş ve üstünde FDA onaylı; edinilmiş hipotalamik obezitede (ör. kraniyofarenjiom sonrası) 4 yaş ve üstü. Hipotalamik doyma yolunun doğrudan hedeflenmesi. [A]',
    'Santral erken puberte: GnRH agonistleri hipofizi duyarsızlaştırarak pubertal ilerlemeyi durdurur. [B]',
    'Antipsikotik izlemi: kilo, açlık glukozu, lipidler ve prolaktin; hiperprolaktinemi tuberoinfundibular D2 blokajından.',
    'Oksitosin: otizmde sosyal işlev için etkisiz (Sikich ve ark., 2021). [B]'
  ],
  lesion: [
    'Diabetes insipidus, hipo/hipertermi.',
    'Hiperfaji ve obezite veya kaşeksi; uyku bozuklukları.',
    'Öfke nöbetleri (ventromedial), endokrin yetmezlikler, bellek bozukluğu (mamiller cisimler).'
  ],
  links: ['Hipofiz (portal sistem, nörohipofiz)', 'Amigdala ve BNST (stria terminalis)', 'Hipokampus (forniks)', 'Beyin sapı otonom çekirdekleri ve PAG', 'Retina → SCN (retinohipotalamik yol)', 'Oreksin, histamin (tuberomamiller), oksitosin, CRH']
},

{
  id: 'cc', group: 'comm', color: '#d7dde8', deep: true, reviewed: '2026-10-12',
  name: 'Korpus Kallozum', short: 'CC',
  latin: 'Corpus callosum',
  summary: 'İki hemisferi birbirine bağlayan en büyük ak madde köprüsü; duyusal, motor ve bilişsel bilgiyi paylaştırır.',
  anatomy: [
    'Yaklaşık 200 milyon aksondan oluşan en büyük komissür.',
    'Bölümler: rostrum, genu (frontal — forceps minor), gövde (motor/somatosensoriyel), isthmus, splenium (oksipital-temporal — forceps major).',
    'Lateral ventriküllerin tavanı; üstünde singulat girus, altında forniks ve septum pellucidum.',
    'Kanlanma: perikallozal arter (ACA); splenium PCA.'
  ],
  functions: [
    'Hemisferler arası bilgi aktarımı ve koordinasyon.',
    'Bimanuel motor koordinasyon.',
    'Sağ hemisferdeki bilginin dil sistemine ulaşması (adlandırma).',
    'Hemisferler arası ketleme ve lateralizasyonun desteklenmesi; işlem hızı.'
  ],
  tests: [
    'Dikotik dinleme, çapraz parmak lokalizasyonu',
    'Bimanuel koordinasyon görevleri',
    'DTI ile fraksiyonel anizotropi (FA) ölçümleri'
  ],
  development: [
    'Doğumdan sonra hızlı miyelinize olur; olgunlaşma ergenlik ve genç erişkinliğe kadar sürer.',
    'Ayna hareketlerinin azalması kallozal olgunlaşmayla ilişkilidir.',
    'Kesitsel alan çocukluk ve ergenlikte artar.'
  ],
  clinical: [
    'Korpus kallozum agenezisi ya da hipoplazisi: Kaliforniya nüfus kaydında (3,4 milyon canlı doğum) 10.000 doğumda yaklaşık 1,8; prematürelerde yaklaşık 4 kat sık (Kaliforniya nüfus çalışması, 2008). İzole ya da sendromik; sosyal-bilişsel güçlükler ve OSB ile ilişki. İzole olgularda gelişimsel sonuç geniş yelpazededir, prenatal tanıda danışmanlık buna göre yapılır. [A]',
    'OSB: KK hacmi ve FA\'da azalma (meta-analizler).',
    'Erken yaşam ihmali: KK alanında azalma (Teicher ve ark., 2004).',
    'Fetal alkol spektrum bozukluğu ve prematüritede KK anomalileri sık.'
  ],
  treatment: [
    'Agenezide gelişimsel izlem ve erken müdahale (konuşma, motor, sosyal beceri); epilepsi ve eşlik eden anomaliler açısından değerlendirme, genetik inceleme. [B]',
    'Erken ihmal sonrası (Teicher ve ark., 2004) güvenli bakım ortamına erken geçiş ve bağlanma odaklı müdahaleler, gelişimi destekleyen en güçlü etkendir. [B]'
  ],
  lesion: [
    'Diskoneksiyon sendromu (split-brain): sol elde taktil anomi ve apraksi.',
    'Yabancı el sendromu; sol oksipital + splenium lezyonunda agrafisiz aleksi.'
  ],
  links: ['Homotopik kortikal alanlar (iki hemisfer)', 'Forceps minor (frontal), forceps major (oksipital)', 'Singulum demeti (üstünde)']
},

{
  id: 'midbrain', group: 'stem', color: '#c9a07a', deep: true, reviewed: '2026-10-12',
  name: 'Mezensefalon (Orta Beyin)', short: 'Orta beyin',
  latin: 'Mesencephalon',
  summary: 'Dopaminin kaynağı: hareket (substantia nigra) ve ödül–motivasyon (VTA); savunma, ağrı ve göz refleksleri.',
  anatomy: [
    'Pons ile diensefalon arasında; ortasından serebral akuadukt (Sylvius) geçer.',
    'Tektum: superior kollikulus (görsel oryantasyon, sakkad), inferior kollikulus (işitsel).',
    'Tegmentum: substantia nigra pars kompakta (nigrostriatal dopamin), ventral tegmental alan (VTA — mezolimbik/mezokortikal dopamin), kırmızı çekirdek, periakuaduktal gri (PAG), III ve IV kranial sinir çekirdekleri.',
    'Serebral pedinküller (krus serebri): kortikospinal ve kortikopontin lifler. Kanlanma: PCA, superior serebellar arter.'
  ],
  functions: [
    'Dopaminerjik sistemler: hareket (SNc) ve ödül–motivasyon–öğrenme (VTA → NAcc, PFC).',
    'Refleks bakış ve baş oryantasyonu (superior kollikulus), işitsel oryantasyon.',
    'PAG: savunma davranışları (donma/kaçma), endojen opioid ağrı kontrolü, vokalizasyon.',
    'Göz hareketleri (III, IV), pupilla refleksi (Edinger-Westphal), uyanıklık (retiküler formasyon).'
  ],
  tests: [
    'Pupil ışık ve yakın refleksi, göz hareketleri muayenesi',
    'PET dopamin görüntüleme (araştırma)',
    'Ödül tahmin hatası paradigmaları'
  ],
  development: [
    'Mezokortikal dopamin projeksiyonları ergenlikte yeniden düzenlenir; striatal dopamin reseptörleri ergenlikte zirve yapar (hayvan çalışmaları) — ödül duyarlılığı.',
    'Yenidoğanın yüzlere yönelimi kısmen subkortikal (superior kollikulus–pulvinar) yolla açıklanır (Johnson).'
  ],
  clinical: [
    'DEHB: dopamin hipotezi; metilfenidat ve amfetaminler dopamin taşıyıcısı (DAT) üzerinden etki eder.',
    'Şizofreni: mezolimbik hiperdopaminerji (pozitif belirtiler), mezokortikal hipodopaminerji (negatif/bilişsel belirtiler).',
    'Madde kullanımı: VTA dopamin nöronlarında plastisite.',
    'Tourette: dopamin aşırı duyarlılığı; D2 antagonist ve kısmi agonist tedaviler.',
    'Pineal bölge tümörleri (ergenler): dorsal orta beyin basısı — Parinaud sendromu, akuadukt stenozu ve hidrosefali.'
  ],
  treatment: [
    'Dopamin sistemini hedefleyen tedaviler (stimülanlar, antipsikotikler, D2 dışı yeni antipsikotik ksanomelin-trospiyum) VTA ve SN kartlarında. [A]',
    'Pineal bölge tümörlerinde akuadukt stenozuna bağlı hidrosefali: endoskopik üçüncü ventrikülostomi ya da şant; tümöre özgü cerrahi, kemoterapi, radyoterapi. [A]',
    'Diffüz orta hat gliomu (H3 K27M) orta beyin ve talamusta da yerleşebilir; tedavi pons kartında.'
  ],
  lesion: [
    'Parinaud sendromu: yukarı bakış felci, ışık–yakın dissosiyasyonu.',
    'Weber sendromu: ipsilateral III. sinir felci + kontralateral hemiparezi.',
    'Pedunküler halüsinozis; akuadukt stenozu → obstrüktif hidrosefali.'
  ],
  links: ['Nigrostriatal yol (SNc → dorsal striatum)', 'Mezolimbik yol (VTA → NAcc, amigdala, hipokampus)', 'Mezokortikal yol (VTA → PFC)', 'PAG ↔ amigdala, hipotalamus', 'Superior kollikulus ↔ FEF, pulvinar']
},

{
  id: 'pons', group: 'stem', color: '#b98d68', deep: true, reviewed: '2026-10-12',
  name: 'Pons', short: 'Köprü',
  latin: 'Pons Varolii',
  summary: 'Korteks ile serebellum arasındaki köprü; noradrenalin (locus coeruleus) ve serotonin (rafe) kaynağı, REM uykusunun üreteci.',
  anatomy: [
    'Beyin sapının orta bölümü. Ventral bazilar kısım: pontin çekirdekler ve transvers lifler → orta serebellar pedinkül.',
    'Dorsal tegmentum: locus coeruleus (noradrenalin), rafe çekirdekleri (serotonin), pontin retiküler formasyon, kolinerjik PPN/LDT (REM).',
    'V, VI, VII ve VIII. kranial sinir çekirdekleri; medial longitudinal fasikül (MLF).',
    'Kanlanma: baziler arter (paramedian ve sirkumferansiyel dallar), AICA.'
  ],
  functions: [
    'Kortikopontoserebellar yol: korteksten serebelluma motor plan aktarımı.',
    'Locus coeruleus: uyarılmışlık, dikkat (performansla ters-U ilişki), stres yanıtı.',
    'Rafe: duygudurum, dürtüsellik, uyku ve iştahın serotonerjik düzenlemesi.',
    'REM uykusu ve REM atonisi; uyku–uyanıklık geçişleri.',
    'Yüz duyusu ve çiğneme (V), yüz ifadesi (VII), işitme ve denge (VIII), lateral bakış (VI), solunum ritmi ayarı.'
  ],
  tests: [
    'Polisomnografi (REM uykusu)',
    'İşitsel beyin sapı yanıtları (ABR)',
    'Pupillometri (LC aktivitesinin dolaylı göstergesi — araştırma); kranial sinir muayenesi'
  ],
  development: [
    'REM uykusu yenidoğanda toplam uykunun yaklaşık yarısıdır, çocuklukta azalır.',
    'ABR, prematüre bebeklerde beyin sapı olgunlaşmasının göstergesidir.',
    'Serotonin erken beyin gelişiminde nörotrofik sinyal olarak da rol oynar.'
  ],
  clinical: [
    'Anksiyete ve panik: LC hiperaktivitesi. TSSB: hiperuyarılmışlık, kâbuslar (α1 antagonist prazosin, α2 agonistler).',
    'DEHB: noradrenerjik tedaviler (atomoksetin; α2A agonistleri guanfasin ve klonidin).',
    'Depresyon, anksiyete, OKB: serotonerjik tedaviler (SSRI).',
    'Narkolepside katapleksi (REM atonisinin uyanıklığa girmesi); kâbus bozukluğu.',
    'Diffüz orta hat gliomu (H3 K27M, eski adıyla DIPG): çoğunlukla 3–10 yaş çocukları etkileyen pontin (ayrıca talamik ve omurilik) tümör; standart tedavi radyoterapi, prognoz kötü. [A]',
    'Möbius sendromu (VI ve VII sinir tutulumu); OSB ile birliktelik bildirilmiştir.'
  ],
  treatment: [
    'Dordaviprone (ONC201; D2/3 antagonisti ve mitokondriyal ClpP aktivatörü): H3 K27M mutant diffüz orta hat gliomunda, önceki tedaviye rağmen ilerlemiş hastalıkta 1 yaş ve üstünde FDA hızlandırılmış onay (Ağustos 2025); 50 hastada yanıt oranı %22, ortanca yanıt süresi 10,3 ay. Bu tümör için onaylanan ilk sistemik ilaç; yeni tanıda faz III sürüyor. [A]',
    'Noradrenerjik ve serotonerjik tedaviler (atomoksetin, α2 agonistleri, SSRI) LC ve rafe kartlarında. [A]',
    'Möbius sendromunda yüz felcine yönelik cerrahi (gülümseme cerrahisi) ve konuşma-beslenme terapisi; sosyal iletişimde yüz ifadesi eksikliği OSB değerlendirmesini zorlaştırabilir. [C]'
  ],
  lesion: [
    'Kilitlenmiş insan (locked-in) sendromu: ventral pons — bilinç ve dikey göz hareketleri korunur.',
    'İnternükleer oftalmopleji (MLF), Millard-Gubler sendromu.',
    'REM uyku davranış bozukluğu.'
  ],
  links: ['Locus coeruleus → tüm korteks, hipokampus, amigdala, talamus (noradrenalin)', 'Rafe → korteks, limbik sistem, striatum (serotonin)', 'Pontin çekirdekler → serebellum', 'PPN/LDT → talamus (asetilkolin)']
},

{
  id: 'medulla', group: 'stem', color: '#a77b58', deep: true, reviewed: '2026-10-12',
  name: 'Medulla Oblongata', short: 'MO',
  latin: 'Medulla oblongata',
  summary: 'Yaşamsal merkezler: solunum ritmi, kalp ve kan basıncı, yutma ve kusma; beyin ile omurilik arasındaki son geçit.',
  anatomy: [
    'Beyin sapının en alt kısmı; foramen magnumda omuriliğe devam eder.',
    'Ventralde piramitler (kortikospinal yol; %85–90 çaprazlaşma), olive (inferior olivar çekirdek — serebelluma tırmanıcı lifler).',
    'Dorsalde gracilis ve cuneatus çekirdekleri; nükleus traktus solitarius (NTS — viseral duyu, tat, barorefleks), dorsal motor vagus, nükleus ambiguus (IX, X), XII çekirdeği.',
    'Area postrema (kusma tetik bölgesi); ventrolateral medullada pre-Bötzinger kompleksi (solunum ritim üreteci). Kanlanma: vertebral arter, PICA, anterior spinal arter.'
  ],
  functions: [
    'Solunum ritmi; kalp hızı ve kan basıncı kontrolü (barorefleks).',
    'Yutma, öksürük, hapşırma, kusma (area postrema).',
    'Vagal (parasempatik) çıkış ve viseral duyunun beyne iletimi (NTS → parabrakiyal → hipotalamus, amigdala, insula).',
    'Duyu ve motor yolların geçişi ve çaprazlaşması; dil hareketleri (XII), ses (X).'
  ],
  tests: [
    'Kalp hızı değişkenliği (HRV — vagal tonus göstergesi)',
    'Solunumsal sinüs aritmisi (RSA) — duygu düzenleme araştırmalarında',
    'Yutma değerlendirmesi, ortostatik otonom testler'
  ],
  development: [
    'Solunum kontrolü doğumdan sonra olgunlaşır (prematüre apnesi).',
    'Ani bebek ölümü sendromunda (SIDS) medüller serotonerjik anomaliler gösterilmiştir (Kinney ve Richerson, 2009).',
    'Vagal tonus (RSA) çocuklukta duygu düzenleme becerisiyle ilişkili gelişir.'
  ],
  clinical: [
    'Anksiyete bozukluklarında azalmış HRV.',
    'Anoreksiya nervoza: vagal baskınlığa bağlı bradikardi.',
    'SSRI başlangıcında bulantı (area postrema 5-HT3); opioid aşırı dozunda solunum depresyonu (pre-Bötzinger μ reseptörleri).',
    'Rett sendromu: beyin sapı otonom işlev bozukluğuna bağlı solunum düzensizlikleri.',
    'Chiari malformasyonu: baş ağrısı, uyku apnesi, yutma güçlüğü.'
  ],
  treatment: [
    'Rett sendromu: trofinetid (IGF-1\'in N-ucundan türetilmiş tripeptit analoğu), 2 yaş ve üstünde FDA onaylı ilk ilaç (Mart 2023). 5–20 yaş 187 kızda 12 haftada davranış ölçeğinde plasebodan üstün; ishal (%82) ve kusma (%29) sık. Solunum düzensizlikleri için ayrıca izlem. [A]',
    'SSRI başlangıcındaki bulantı (area postrema 5-HT3) genellikle 1–2 haftada geçer; ilacı yemekle almak ve yavaş titrasyon yardımcı olur. [B]',
    'Opioid aşırı dozunda naloksonun hızla uygulanması solunum merkezindeki (pre-Bötzinger) μ reseptör etkisini geri döndürür; ergenler ve aileleri için nalokson eğitimi önerilir. [A]',
    'Belirtili Chiari malformasyonunda posterior fossa dekompresyonu. [B]'
  ],
  lesion: [
    'Lateral medüller (Wallenberg) ve medial medüller sendromlar.',
    'Disfaji, dizartri; solunum ve kardiyovasküler yetmezlik yaşamı tehdit eder.'
  ],
  links: ['Vagus siniri (viseral afferent/efferent)', 'NTS → hipotalamus, amigdala, insula', 'İnferior olive → serebellum', 'Kortikospinal yol (piramidal dekussasyon)', 'Rafe obscurus/magnus → omurilik (ağrı modülasyonu)']
},

{
  id: 'cerebellum', group: 'cereb', color: '#5fb3a1', deep: false, sub: 'surface', reviewed: '2026-10-12',
  name: 'Serebellum (Beyincik)', short: 'CB',
  latin: 'Cerebellum',
  summary: 'Hareketi zamanlar ve düzeltir; aynı hesaplamayı düşünce, dil ve duyguya da uygular. Beyindeki nöronların çoğu buradadır.',
  anatomy: [
    'Arka kafa çukurunda, tentorium serebellinin altında; orta hatta vermis ve iki hemisfer. Anterior, posterior ve flokkulonodüler lob; folia.',
    'Korteks: moleküler, Purkinje ve granüler tabakalar. Derin çekirdekler: dentat, interpozit (emboliform + globoz), fastigial.',
    'Pedinküller: superior (çıkış — dentato-rubro-talamik), orta (pontin girdi), inferior (spinal ve olivar girdi).',
    'Beyindeki nöronların yaklaşık %80\'i (granül hücreleri) buradadır. Kanlanma: SCA, AICA, PICA.'
  ],
  functions: [
    'Motor koordinasyon, denge ve postür (vermis, flokkulonodüler lob).',
    'Hareketin zamanlaması ve öngörüsü (iç model), motor öğrenme.',
    'Göz hareketleri ve vestibülo-oküler refleks adaptasyonu.',
    'Bilişsel işlevler: lateral posterior hemisferler (Crus I/II) PFC ile döngü kurar — çalışma belleği, dil, zamanlama.',
    'Duygusal düzenleme (posterior vermis — "limbik serebellum"), sosyal biliş.'
  ],
  tests: [
    'Parmak–burun, topuk–diz, hızlı alternan hareketler (disdiadokokinezi)',
    'Tandem yürüyüş, Romberg',
    'Ritim ve zamanlama görevleri; göz kırpma koşullanması'
  ],
  development: [
    'Son trimester ve ilk yıllarda çok hızlı büyür; ilk yılda hacmi yaklaşık %240 artar (Knickmeyer ve ark., 2008).',
    'Hacim zirvesi kortekse göre geç, ergenlikte görülür (Tiemeier ve ark., 2010).',
    'Prematüre doğumda serebellar hasar, OSB tarama pozitifliği ile ilişkili bulunmuştur (Limperopoulos ve ark., 2007).'
  ],
  clinical: [
    'OSB: postmortem Purkinje hücre azalması, vermis hipoplazisi; erken serebellar hasar en güçlü risk faktörlerinden biri olarak öne sürülmüştür (Wang, Kloth & Badura, 2014).',
    'DEHB: posterior-inferior vermis hacminde azalma, zamanlama güçlükleri.',
    'Posterior fossa sendromu (serebellar mutizm): medulloblastom ameliyatı sonrası 450 çocuğun %24\'ünde gelişti; ameliyat öncesi beyin sapı tutulumu tek risk etkeniydi. Bir yılda konuşma-dil, bilişsel sorunlar ve ataksi önemli bir kısmında sürüyordu (Robertson ve ark., 2006). [A]',
    'Serebellar bilişsel duygusal sendrom (Schmahmann).',
    'Joubert sendromu ("molar diş" bulgusu), FASD (vermis), şizofrenide "bilişsel dismetri" (Andreasen).',
    'Şizofrenide negatif belirtiler: sağ DLPFC ile serebellum arasındaki bağlantı azaldıkça negatif belirtiler ağırlaşıyor; 11 hastada vermise (lobül VIIb) 5 gün TMS bağlantıyı onardı ve bağlantı artışı belirti düzelmesiyle ilişkiliydi (Brady ve ark., 2019). Sahte kontrollü sonraki çalışmada iki kol arasında fark çıkmadı (Basavaraju ve ark., 2021; 60 hasta; bağlantı arttı, belirtiler iki kolda da düzeldi); hedef umut verici ama kanıtlanmış değil. [C]'
  ],
  treatment: [
    'Posterior fossa sendromunda yoğun konuşma-dil terapisi ve nöropsikolojik rehabilitasyon; aileye geçici mutizm konusunda bilgi verilir. [B]',
    'Serebellar TMS (vermis) şizofrenide negatif belirtiler için araştırma aşamasında (Brady ve ark., 2019). [C]',
    'OSB ve DEHB\'de serebellum tedavi hedefi değil; motor ve zamanlama güçlüklerinde ergoterapi.'
  ],
  lesion: [
    'İpsilateral ataksi, dismetri, intansiyonel tremor, disdiadokokinezi, nistagmus, skandiye dizartri, hipotoni.',
    'Vermis: gövde ataksisi.',
    'Posterior lob: yürütücü işlev, görsel-uzamsal, dil ve duygulanım bozuklukları (düz duygulanım, disinhibisyon).'
  ],
  links: ['Pons (kortikopontoserebellar girdi)', 'İnferior olive (tırmanıcı lifler)', 'Dentat → talamus VL → motor ve prefrontal korteks', 'Kırmızı çekirdek', 'Vestibüler çekirdekler']
}

);
