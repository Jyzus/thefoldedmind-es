/* Bölge verileri — 2/4: Parietal, temporal, oksipital, insula, posterior singulat */
(window.NEURO_REGIONS = window.NEURO_REGIONS || []).push(

{
  id: 'somato', group: 'parietal', color: '#e9a23b', reviewed: '2026-10-12',
  name: 'Primer Somatosensoriyel Korteks', short: 'S1',
  latin: 'Gyrus postcentralis — area somatosensoria primaria',
  summary: 'Dokunma, basınç, ağrı, ısı ve vücut pozisyonu bilgisini haritalayarak bedeni algılatır.',
  anatomy: [
    'Postsentral girus ve parasentral lobülün arka kısmı; BA 3a, 3b, 1 ve 2.',
    'Somatotopik düzen (duyusal homunkulus): el, dudak ve dil geniş temsil edilir.',
    'Talamusun VPL (gövde-ekstremite) ve VPM (yüz) çekirdeklerinden girdi alır. S2 parietal operkulumdadır.',
    'Kanlanma: MCA (lateral), ACA (medial — bacak).'
  ],
  functions: [
    'Dokunma, basınç, titreşim; ağrı ve ısının lokalizasyonu.',
    'Propriosepsiyon: eklem ve kas pozisyonu (BA 3a).',
    'Doku ve şekil ayırt etme: stereognozi, iki nokta ayırımı, grafestezi (BA 1, 2).',
    'Duyusal geri bildirimle hareketin ince ayarı; beden şemasına katkı.'
  ],
  tests: [
    'İki nokta ayırımı, stereognozi, grafestezi',
    'Pozisyon ve titreşim duyusu muayenesi',
    'Duyusal Profil (Dunn) — duyusal işleme örüntüleri'
  ],
  development: [
    'Dokunsal sistem prenatal dönemde en erken gelişen duyusal sistemlerdendir.',
    'Somatosensoriyel haritalar deneyime bağlı şekillenir; erken dönem dokunsal deneyim önemlidir.',
    'Bebeklikte şefkatli dokunma (C-taktil lifler, insula ile) bağlanma ve duygu düzenlemeyle ilişkilidir.'
  ],
  clinical: [
    'OSB: duyusal aşırı veya az duyarlılık (DSM-5 kriteri), dokunsal savunuculuk.',
    'DEHB ve duyusal modülasyon güçlükleri.',
    'Tourette: duyusal fenomenler ve tik öncesi dürtülerde S1/S2 ve insula katılımı.',
    'Kendine zarar verme davranışında ağrı işleme farklılıkları.'
  ],
  treatment: [
    'Duyu bütünleme terapileri: Amerikan Pediatri Akademisi (2012) "duyusal işlemleme bozukluğu"nu ayrı bir tanı olarak kullanmamayı, altta yatan OSB, DEHB, motor ya da anksiyete bozukluğunu araştırmayı önerir. Bu terapilerin kanıtı sınırlı ve tutarsızdır; uygulanacaksa işlevsel hedefler konup ilerleme ölçülmelidir. [B]',
    'OSB\'de duyusal aşırı duyarlılık: ortam uyarlamaları (gürültü engelleyici kulaklık, öngörülebilir rutin) ve kademeli alıştırma; anksiyete eşlik ediyorsa BDT. [C]',
    'Kendine zarar vermede ağrı eşiği farklılıkları tedavinin hedefi değil, işaretidir; diyalektik davranış terapisi (DBT) yüksek intihar riskli 173 ergende destekleyici terapiye göre intihar girişimini ve kendine zarar vermeyi daha çok azalttı (McCauley ve ark., 2018); bu alanda iyi kanıtlanmış ilk tedavi. [A]'
  ],
  lesion: [
    'Kontralateral duyu kaybı, astereognozi, grafestezi kaybı.',
    'Propriosepsiyon bozukluğuna bağlı duyusal ataksi; fokal duyusal nöbetler.'
  ],
  links: ['Talamus VPL/VPM (dorsal kolon–medial lemniskus ve spinotalamik yollar)', 'Primer motor korteks', 'Posterior parietal korteks', 'İnsula (S2 ve iç beden duyusu)']
},

{
  id: 'spl', group: 'parietal', color: '#c9b03a', reviewed: '2026-10-12',
  name: 'Superior Parietal Lobül', short: 'SPL / IPS',
  latin: 'Lobulus parietalis superior',
  summary: 'Görme ile hareketi birleştirir: nesnenin nerede olduğunu hesaplar, uzanma ve kavramayı yönlendirir, sayı hissine katkı verir.',
  anatomy: [
    'Postsentral sulkusun arkasında, intraparietal sulkusun (IPS) üstünde; BA 5 ve 7.',
    'Medialde prekuneus ile devam eder; arkada parieto-oksipital sulkus.',
    'Dorsal görsel akımın ("nerede / nasıl") parietal durağı.',
    'Kanlanma: MCA ve ACA dallarının sınır (watershed) bölgesi.'
  ],
  functions: [
    'Görsel-motor entegrasyon: uzanma, kavrama, göz-el koordinasyonu.',
    'Mekânsal dikkat (dorsal dikkat ağı — FEF ile birlikte).',
    'Beden şeması ve uzuv pozisyonunun izlenmesi.',
    'Zihinsel döndürme ve görsel-uzamsal çalışma belleği.',
    'Sayısal büyüklük temsili (IPS — sayı hissi).'
  ],
  tests: [
    'Zihinsel döndürme görevleri',
    'Rey-Osterrieth Karmaşık Figür (kopya), WISC Blok Desenleri',
    'Corsi blokları, sayı doğrusu tahmini'
  ],
  development: [
    'IPS sayısal işlemler için çocukluk boyunca özelleşir.',
    'Görsel-uzamsal çalışma belleği ergenliğe kadar gelişmeye devam eder.'
  ],
  clinical: [
    'Diskalkuli: IPS\'de yapısal ve işlevsel farklılıklar.',
    'Williams sendromu: dorsal akım ve görsel-uzamsal güçlük.',
    'Turner sendromu: görsel-uzamsal ve aritmetik güçlükler (parietal).',
    'DKB ve DEHB: görsel-motor entegrasyon ve dikkat ağları.',
    'OKB\'de yapısal büyük örneklem (ENIGMA-OKB): çocuklarda inferior ve superior parietal korteks ince (küçük etki); OKB\'nin "frontal" bir bozukluk olduğu görüşünü parietal korteksle genişletir (ENIGMA-OKB, 2018). [A]'
  ],
  treatment: [
    'Görsel-uzamsal ve görsel-motor güçlüklerde (Williams sendromu, Turner sendromu, DKB) ergoterapi, sözel stratejilerle telafi ve okulda uyarlamalar (ör. geometri ve harita görevlerinde sözel adım listesi). [C]',
    'Diskalkuli için sayı duyusu eğitimi; ayrıntı IPL kartında.'
  ],
  lesion: [
    'Optik ataksi: görsel hedefe uzanmada bozulma.',
    'Bálint sendromu (bilateral): simultanagnozi, optik ataksi, okülomotor apraksi.',
    'Sağ lezyonda kontralateral ihmal.'
  ],
  links: ['Oksipital korteks (dorsal akım)', 'Frontal göz alanı ve premotor korteks', 'DLPFC (frontoparietal ağ)', 'Pulvinar (talamus)', 'Serebellum']
},

{
  id: 'ipl', group: 'parietal', color: '#d98a2b', reviewed: '2026-10-12',
  name: 'İnferior Parietal Lobül', short: 'IPL',
  latin: 'Lobulus parietalis inferior — gyrus supramarginalis et angularis',
  summary: 'Okuma, hesaplama ve praksisin (sol); dikkatin yeniden yönlenmesi ve başkasının bakış açısını almanın (sağ) bölgesi.',
  anatomy: [
    'Supramarginal girus (BA 40) ve angular girus (BA 39); IPS\'nin altında.',
    'Temporoparietal bileşke (TPJ): angular/supramarginal girus ile posterior superior temporal girusun birleşim bölgesi.',
    'Belirgin lateralizasyon: sol — dil ve sayı, sağ — dikkat ve sosyal biliş.',
    'Kanlanma: MCA inferior bölümü (angular arter).'
  ],
  functions: [
    'Sol: okuma ve yazma (grafem–fonem–anlam eşleştirme), aritmetik olguların hatırlanması.',
    'Sol supramarginal: fonolojik depo, praksis (hareket programları).',
    'Sağ: beklenmedik uyarana dikkatin yeniden yönlendirilmesi (ventral dikkat ağı), uzamsal farkındalık.',
    'Sağ TPJ: başkasının inançlarını temsil etme (zihin kuramı), benlik–öteki ayrımı, bakış açısı alma.',
    'Çoklu duyusal entegrasyon ve beden sahipliği hissi.'
  ],
  tests: [
    'Okuma, heceleme ve fonolojik farkındalık testleri',
    'Sözel aritmetik, parmak gnozisi',
    'Pantomim/praksis değerlendirmesi',
    'Yanlış inanç görevleri (rTPJ); çizgi bölme ve iptal testleri (ihmal)'
  ],
  development: [
    'Okumayı öğrenmek sol temporoparietal devreleri yeniden şekillendirir.',
    'Yanlış inanç anlayışı ~4 yaşta belirginleşir; rTPJ özelleşmesi çocuklukta artar.'
  ],
  clinical: [
    'Disleksi: sol temporoparietal hipoaktivasyon (fonolojik işlem). 8–12 yaş 20 çocukta 8 haftalık dil ve işitsel işlemleme eğitimi okumayı iyileştirdi; sol temporoparietal ve sol IFG etkinliği iyi okuyuculara yaklaştı, sol temporoparietal artış dil kazanımıyla ilişkiliydi (Temple ve ark., 2003). Beyin müdahaleyle değişebilir. [B]',
    'OSB: rTPJ\'de zihinselleştirme ile ilişkili aktivasyon farklılıkları.',
    'Diskalkuli ve DEHB (ventral dikkat ağı).'
  ],
  treatment: [
    'Disleksi: yapılandırılmış, açık ses bilgisi (fonik) temelli okuma öğretimi; erken başlanan yoğun müdahale en etkilidir. Sınavda ek süre ve sesli kitap gibi uyarlamalar. [A]',
    'Diskalkuli: sayı duyusu ve sayı doğrusu eğitimi, somut materyalle aşamalı öğretim. [C]',
    'Ihmal sendromunda (sağ parietal) prizma adaptasyonu ve görsel tarama eğitimi (erişkin rehabilitasyonu). [B]'
  ],
  lesion: [
    'Gerstmann sendromu (sol angular): agrafi, akalkuli, parmak agnozisi, sağ-sol karışıklığı.',
    'Kondüksiyon afazisi (supramarginal/arkuat fasikül), ideomotor apraksi (sol).',
    'Sağ lezyon: hemispasyal ihmal, anozognozi.'
  ],
  links: ['Broca ve Wernicke alanları (arkuat fasikül)', 'Sağ IFG (ventral dikkat ağı)', 'mPFC ve prekuneus (zihinselleştirme ağı)', 'Fusiform görsel sözcük alanı']
},

{
  id: 'tpj', group: 'parietal', color: '#7b5ea7', reviewed: '2026-10-12',
  name: 'Temporoparietal Bileşke', short: 'TPJ',
  latin: 'Junctio temporoparietalis',
  summary: 'Kendini başkasından ayırma, başkasının inancını temsil etme ve dikkati beklenmedik uyaranlara çevirme bölgesi; sağ TPJ zihin kuramının kortikal merkezlerinden biridir.',
  anatomy: [
    'Superior temporal sulkusun arka ucu, angular girusun alt kısmı ve supramarginal girusun arka kısmının birleşim yeri.',
    'Modelde HCP-MMP1.0 alanları: TPOJ1–3, STV, PSL ve PGi (Glasser ve ark., 2016).',
    'Belirgin lateralizasyon: sağ TPJ sosyal biliş ve dikkatle, sol TPJ dil ve anlamsal işlemeyle öne çıkar.',
    'Kanlanma: MCA inferior bölümü (posterior temporal ve angular dallar).'
  ],
  functions: [
    'Zihin kuramı: başkasının yanlış inancını temsil etme (sağ TPJ; Saxe ve Kanwisher, 2003).',
    'Benlik–öteki ayrımı, bakış açısı alma ve taklidin denetlenmesi.',
    'Dikkatin beklenmedik ama önemli uyaranlara yeniden yönlendirilmesi (ventral dikkat ağı; Corbetta ve Shulman, 2002).',
    'Çok duyulu bütünleştirme ve beden sahipliği; bölgenin uyarılmasıyla beden dışı deneyim bildirilmiştir (Blanke ve ark., 2002).'
  ],
  tests: [
    'Yanlış inanç görevleri (Sally-Anne, ikinci derece inanç)',
    'Görsel bakış açısı alma görevleri',
    'Posner ipucu görevi (geçersiz ipucu sonrası yeniden yönlenme)'
  ],
  development: [
    'Yanlış inanç anlayışı yaklaşık 4 yaşında belirginleşir; sağ TPJ\'nin zihinsel durumlara seçiciliği çocukluk boyunca artar (Gweon ve ark., 2012).',
    'Ergenlikte sosyal-bilişsel ağların (mPFC, TPJ) yeniden düzenlenmesi sürer.'
  ],
  clinical: [
    'OSB: zihinselleştirme görevlerinde sağ TPJ etkinliği ve bağlantı farklılıkları.',
    'Şizofreni: benlik–öteki ayrımındaki bozulma ve etki edilme yaşantılarıyla ilişkilendirilmiştir.',
    'Dissosiyatif ve beden dışı deneyimler; ihmal sendromunda sağ TPJ katılımı.'
  ],
  treatment: [
    'OSB\'de sosyal beceri eğitimi: PEERS (ebeveyn destekli grup programı) ergenlerde arkadaşlık becerisini, sosyal yanıt verebilirliği ve akran etkileşimini artırdı; kazanımlar 14 haftalık izlemde sürdü (Laugeson ve ark., 2012), bağımsız randomize tekrarlar var (Schohl ve ark., 2013). [B]',
    'Zihinselleştirme temelli terapi (MBT-A): ergen kendine zarar vermesinde ve sınır kişilik özelliklerinde başkalarının ve kendi zihnini anlama becerisini hedefler. [B]',
    'Şizofrenide benlik–öteki ayrımı ve etki edilme yaşantıları: antipsikotik tedavi ve psikoz için BDT. [A]'
  ],
  lesion: [
    'Sağ TPJ hasarı: uzamsal ihmal ve dikkatin yeniden yönlendirilmesinde bozulma.',
    'Sol TPJ hasarı: Wernicke bölgesine yakınlık nedeniyle anlama güçlüğü, okuma ve yazma bozuklukları.'
  ],
  links: ['mPFC ve prekuneus (zihinselleştirme ağı)', 'Sağ IFG ve anterior insula (ventral dikkat ağı)', 'Posterior superior temporal sulkus (sosyal algı)', 'Arkuat ve orta longitudinal fasikül']
},

{
  id: 'stg', group: 'temporal', color: '#e0703c', sub: 'surface', reviewed: '2026-10-12',
  name: 'Superior Temporal Girus & Wernicke', short: 'STG / STS',
  latin: 'Gyrus temporalis superior',
  summary: 'Duyduğumuzu işler ve anlamlandırır; sesler, konuşma, prozodi ve sosyal hareket algısı burada birleşir.',
  anatomy: [
    'Heschl girusu (transvers temporal girus, BA 41–42): primer işitsel korteks, Sylvian fissürün derininde.',
    'Wernicke alanı: posterior STG (BA 22), planum temporale (solda genellikle daha büyük).',
    'Superior temporal sulkus (STS): sosyal algı bölgesi.',
    'Kanlanma: MCA inferior bölümü.'
  ],
  functions: [
    'İşitsel algı (tonotopik harita), seslerin tanınması.',
    'Konuşma seslerinin (fonem) çözümlenmesi ve sözcük anlamının kavranması (Wernicke).',
    'Sağ: müzik, ses tonu ve prozodiden duygu çıkarımı.',
    'STS: biyolojik hareket, bakış yönü ve yüz ifadesi dinamiklerinin algısı; ses–yüz entegrasyonu.'
  ],
  tests: [
    'Dikotik dinleme, işitsel işlemleme testleri',
    'Token testi (sözel anlama), fonolojik ayırt etme',
    'Prozodi tanıma; biyolojik hareket (point-light) paradigmaları'
  ],
  development: [
    'İlk yıl içinde ana dilin seslerine özelleşme (6–12 ay, algısal daralma).',
    'İşitsel yolakların miyelinizasyonu erken çocuklukta tamamlanır; STS sosyal algı ağı çocuklukta gelişir.'
  ],
  clinical: [
    'OSB: insan sesine STS yanıtında azalma (Gervais ve ark., 2004), biyolojik hareket işleme farklılıkları.',
    'Erken başlangıçlı şizofreni: işitsel halüsinasyon sırasında STG aktivasyonu, STG hacim azalması.',
    'Gelişimsel dil bozukluğu, işitsel işlemleme bozukluğu, disleksi (fonolojik).',
    'Landau-Kleffner sendromu: temporal epileptiform aktiviteye bağlı edinilmiş afazi.'
  ],
  treatment: [
    'Landau-Kleffner sendromu: epileptiform etkinliği baskılamak için kortikosteroid ve antiepileptikler; erken tedavi dil kazanımı için önemlidir. Konuşma-dil terapisi, gerekirse işaret dili. [C]',
    'Erken başlangıçlı şizofrenide işitsel halüsinasyonlar: antipsikotik tedavi; dirençli olguda klozapin (ergen dahil). Sesler için BDT ve sesle ilişki kurma (avatar) terapileri erişkinde umut verici. [A]',
    'İşitsel işlemleme ve dil güçlüklerinde konuşma-dil terapisi; sınıfta FM sistemi ve gürültünün azaltılması. [C]'
  ],
  lesion: [
    'Wernicke afazisi: akıcı ama anlamsız konuşma (parafazi, neolojizm), anlama ve tekrar bozuk.',
    'Bilateral Heschl hasarı: kortikal sağırlık veya saf sözcük sağırlığı.',
    'Sağ: amüzi, aprozodi.'
  ],
  links: ['Talamus — medial genikulat cisim (işitsel girdi)', 'Broca alanı (arkuat fasikül)', 'Amigdala (sesin duygusal değeri)', 'Fusiform yüz alanı (STS ile sosyal algı)']
},

{
  id: 'itg', group: 'temporal', color: '#d4573f', sub: 'surface', reviewed: '2026-10-12',
  name: 'İnferior Temporal & Fusiform Korteks', short: 'ITG / FG',
  latin: 'Gyri temporales medius et inferior, gyrus fusiformis',
  summary: 'Gördüğümüzün "ne" olduğunu söyler: yüz, nesne ve yazılı sözcük tanıma; kavram bilgisinin deposu.',
  anatomy: [
    'Orta ve inferior temporal girus (BA 21, 20), fusiform girus (BA 37), temporal kutup (BA 38).',
    'Fusiform yüz alanı (FFA — sağ baskın) ve görsel sözcük formu alanı (VWFA — sol fusiform).',
    'Medialde parahipokampal girus ve entorinal korteks (BA 28, 35–36) hipokampusa açılan kapıdır.',
    'Kanlanma: PCA (inferior temporal dallar) ve MCA (lateral yüz).'
  ],
  functions: [
    'Ventral görsel akım ("ne?"): nesne ve şekil tanıma.',
    'Yüz tanıma ve kimlik ayırt etme (FFA).',
    'Okuma: yazılı sözcük formlarının hızlı tanınması (VWFA).',
    'Anlamsal bellek: kavram ve sözcük anlamı bilgisi (temporal kutup, ITG).',
    'Sahne ve yer işleme (parahipokampal yer alanı), renk işleme.'
  ],
  tests: [
    'Benton Yüz Tanıma, Cambridge Yüz Belleği Testi (çocuk sürümü)',
    'Nesne adlandırma, kategori akıcılığı (hayvan isimleri)',
    'Okuma hızı ve akıcılığı'
  ],
  development: [
    'Yüz seçici bölgeler çocukluk ve ergenlik boyunca büyür ve özelleşir.',
    'VWFA okuma öğrenimiyle (5–7 yaş) ortaya çıkar ve okuma deneyimiyle güçlenir.',
    'Görsel kelime biçimi alanı (VWFA) okumayı öğrenmekle oluşur: okuma yazma bilmeyen, erişkinlikte öğrenen ve çocuklukta öğrenen erişkinlerin karşılaştırmasında okuryazarlık sol fusiformda yazıya yanıtı artırdı ve aynı yerde yüz işlemleme ile küçük bir yarışma başlattı; değişikliklerin çoğu erişkinlikte öğrenenlerde de görüldü (Dehaene ve ark., 2010). Kültürel bir icat (okuma) eski bir görsel alanı "geri dönüştürür". [B]'
  ],
  clinical: [
    'OSB: yüzlere fusiform yanıtında azalma; göz bölgesine bakma örüntüsüyle ilişkili.',
    'Disleksi: VWFA hipoaktivasyonu.',
    'Gelişimsel prosopagnozi.',
    'Temporal lob epilepsisi: davranışsal ve duygusal belirtiler, bellek sorunları.'
  ],
  treatment: [
    'Disleksi müdahalesi VWFA ve sol temporoparietal etkinliği artırır; ayrıntı IPL kartında. [B]',
    'Gelişimsel prosopagnozide telafi stratejileri (ses, saç, yürüyüş, giysi ipuçları) ve okulda farkındalık. [C]'
  ],
  lesion: [
    'Prosopagnozi (sağ/bilateral fusiform), görsel nesne agnozisi.',
    'Saf aleksi (sol VWFA), akromatopsi.',
    'Temporal kutup: anlamsal bellek kaybı, anomi. Bilateral anterior temporal: Klüver-Bucy sendromu.'
  ],
  links: ['Oksipital korteks (ventral akım)', 'Hipokampus ve amigdala', 'OFC (unsinat fasikül)', 'İnferior longitudinal fasikül']
},

{
  id: 'occipital', group: 'occipital', color: '#5aa85a', reviewed: '2026-10-12',
  name: 'Oksipital Lob — Görsel Korteks', short: 'V1–V5',
  latin: 'Lobus occipitalis — cortex visualis',
  summary: 'Görsel bilginin ilk işlendiği yer: kenar, yön, renk, hareket ve derinliği çözümleyip dorsal ve ventral akımlara dağıtır.',
  anatomy: [
    'V1 (BA 17, striat korteks): kalkarin sulkusun iki dudağında; Gennari çizgisi.',
    'V2–V3 (BA 18) ve asosiyasyon alanları (BA 19); V4 (renk) ventralde, V5/MT (hareket) temporo-oksipital bileşkede.',
    'Cuneus (kalkarin üstü) alt görme alanını, lingual girus (kalkarin altı) üst görme alanını temsil eder.',
    'Lateral genikulat cisimden optik radyasyon girdisi. Kanlanma: PCA (kalkarin arter); oksipital kutup MCA–PCA sınırı.'
  ],
  functions: [
    'Retinotopik görsel harita; kenar, yön, kontrast ve uzamsal frekans çözümlemesi.',
    'Renk (V4), hareket (V5/MT), binoküler derinlik (stereopsis).',
    'Dorsal (parietal — "nerede/nasıl") ve ventral (temporal — "ne") akımları besler.'
  ],
  tests: [
    'Görme alanı muayenesi (konfrontasyon, perimetri)',
    'Görsel algı testleri (Beery VMI görsel algı alt testi)',
    'Görsel uyarılmış potansiyeller (VEP), hareket algısı eşikleri'
  ],
  development: [
    'Binoküler görme ve görme keskinliği için kritik dönem ilk yıllardır; ambliyopi erken tedavi gerektirir.',
    'V1\'de sinaptik yoğunluk bebeklikte (~8. ay civarı) zirve yapar, ardından budanır (Huttenlocher).',
    'Görsel korteks en erken olgunlaşan kortikal alanlardandır.'
  ],
  clinical: [
    'Kortikal/serebral görme bozukluğu (CVI): gelişmiş ülkelerde çocukluk çağı görme bozukluğunun en sık nedeni (ABD\'de 0–3 yaş kayıtta %24; Birleşik Krallık\'ta ağır görme kaybının %48\'ine kadar). En sık neden hipoksik-iskemik hasar, özellikle prematürelerde periventriküler lökomalazi. Göz muayenesi normal olabilir; davranış ve öğrenme sorunu sanılabilir. [A]',
    'OSB: detay odaklı (lokal) görsel işleme.',
    'Çocukluk çağı oksipital epilepsileri: Panayiotopoulos sendromu (otonomik), Gastaut tipi (görsel halüsinasyonlar).',
    'Migren aurası (kortikal yayılan depresyon).'
  ],
  treatment: [
    'Çocukluk çağı migreninde önleyici ilaçlar: CHAMP çalışmasında (8–17 yaş, 361 hasta) amitriptilin ve topiramat plasebodan üstün bulunmadı (atak sıklığında en az %50 azalma: %52, %55, plasebo %61) ve yan etkileri daha fazlaydı (Powers ve ark., 2017). Yaşam tarzı düzenlemesi ve BDT önleyici tedavinin temelidir. [A]',
    'CVI\'da görsel ortamın uyarlanması (yüksek karşıtlık, sade arka plan, hareketli ve renkli nesneler) ve erken görsel rehabilitasyon. [C]',
    'Oksipital epilepsilerin çoğu (ör. Panayiotopoulos sendromu) iyi seyirlidir; sık nöbette antiepileptik.'
  ],
  lesion: [
    'Kontralateral homonim hemianopsi (makula korunabilir).',
    'Bilateral: kortikal körlük, Anton sendromu (körlüğün inkârı).',
    'Akinetopsi (V5), akromatopsi (V4), görsel halüsinasyon ve illüzyonlar.'
  ],
  links: ['Talamus — lateral genikulat cisim ve pulvinar', 'Parietal korteks (dorsal akım)', 'İnferior temporal/fusiform korteks (ventral akım)', 'Frontal göz alanı', 'Superior kollikulus']
},

{
  id: 'insula', group: 'limbiccx', color: '#d9539a', sub: 'surface', reviewed: '2026-10-12',
  name: 'İnsula', short: 'İnsula',
  latin: 'Lobus insularis (Reil adası)',
  summary: 'Bedenin içini hisseder: kalp atışı, açlık, tiksinme ve ağrıyı öznel duyguya dönüştürür; belirgin olana dikkati çevirir.',
  anatomy: [
    'Lateral sulkusun derininde, frontal, parietal ve temporal operkulumlarla örtülü; dairesel sulkusla çevrili.',
    'Kısa (anterior) ve uzun (posterior) insular giruslar.',
    'Anterior insula von Economo nöronları içerir.',
    'Kanlanma: MCA M2 segmentleri.'
  ],
  functions: [
    'İnterosepsiyon: kalp atışı, solunum, açlık, mesane gibi iç beden durumlarının algılanması.',
    'Öznel duygu deneyimi ve beden farkındalığı.',
    'Tiksinme işleme; primer tat korteksi (anterior insula/frontal operkulum).',
    'Ağrı ve ısı (posterior insula), otonomik düzenleme.',
    'Salience ağı (ACC ile): DMN ve yürütücü ağ arasında geçiş.',
    'Empati, belirsizlik ve risk değerlendirmesi, istek (craving).'
  ],
  tests: [
    'Kalp atışı algılama/sayma görevleri',
    'İnteroseptif farkındalık ölçekleri',
    'Tiksinme yüz ifadesi tanıma, empati paradigmaları'
  ],
  development: [
    'İnteroseptif farkındalık ergenlikte gelişir.',
    'Anterior insula–ACC salience ağı bağlantıları ergenlikte güçlenir.',
    'Ergenlerde sosyal dışlanmaya (Cyberball) insula yanıtı belirgindir.'
  ],
  clinical: [
    'Anksiyete bozuklukları: anterior insula hiperaktivitesi, belirsizliğe tahammülsüzlük.',
    'Anoreksiya nervoza: interoseptif işleme ve beden algısı bozukluğu.',
    'OSB: interosepsiyon farklılıkları, aleksitimi, salience ağı farklılıkları.',
    'Madde kullanımı: insula hasarı olan sigara içicilerde sigarayı kolayca ve isteksiz bırakma ("istek" ortadan kalkar) (Naqvi ve ark., 2007). İnsula, bedensel "istek" duygusunu bilinçli dürtüye çevirir. [B]',
    'Tourette: tik öncesi dürtü sırasında insula aktivasyonu.',
    'Tanılar üstü ortak bulgu: psikiyatrik bozukluklarda gri madde kaybının en tutarlı yerleri iki taraflı ön insula ve dorsal ACC\'dir (193 çalışma; Goodkind ve ark., 2015). Belirginlik ağının zayıflaması, tanıdan bağımsız yürütücü işlev güçlüğüyle ilişkili. [A]'
  ],
  treatment: [
    'Derin TMS (H4 bobini): erişkinde kısa süreli sigara bırakma desteği olarak FDA onaylı (Ağustos 2020; 262 kişilik sahte kontrollü çalışma, 6 haftada 18 seans). Bağımlılık alanında ilk TMS onayı. [A]',
    'İnterosepsiyon odaklı yaklaşımlar (beden farkındalığı, nefes ve kalp atışı farkındalığı) anksiyete, yeme bozuklukları ve OSB\'de araştırılıyor; insula bu müdahalelerin kuramsal hedefidir. [C]'
  ],
  lesion: [
    'Tat bozukluğu, otonomik disregülasyon (sağ insula — aritmi).',
    'Tiksinme tanımada bozulma, anozognozi (sağ posterior).',
    'Sol anterior insula: konuşma apraksisi.'
  ],
  links: ['ACC (salience ağı)', 'Amigdala', 'OFC ve vmPFC', 'Talamus VMpo/VMb (interoseptif girdi)', 'Hipotalamus ve beyin sapı otonom merkezleri']
},

{
  id: 'pcc', group: 'limbiccx', color: '#c76ab0', sub: 'surface', reviewed: '2026-10-12',
  name: 'Posterior Singulat & Prekuneus', short: 'PCC / Prekuneus',
  latin: 'Gyrus cinguli posterior et praecuneus',
  summary: 'Varsayılan mod ağının merkezi: iç odaklı düşünce, otobiyografik bellek ve kendilik deneyimi burada toplanır.',
  anatomy: [
    'Posterior singulat korteks (BA 23, 31), retrosplenial korteks (BA 29–30), prekuneus (medial BA 7).',
    'Korpus kallozum spleniumunun çevresinde ve üstünde; arkada parieto-oksipital sulkus.',
    'Beynin metabolik olarak en aktif ve en çok bağlantılı bölgelerinden biri.',
    'Kanlanma: ACA (perikallozal), PCA (parieto-oksipital dallar).'
  ],
  functions: [
    'Varsayılan mod ağı (DMN) merkezi: dinlenmede en yüksek aktivite, iç odaklı düşünce.',
    'Otobiyografik bellek geri çağırma, kendilikle ilgili işlemler.',
    'Geleceği hayal etme (epizodik simülasyon), zihin gezinmesi.',
    'Retrosplenial: mekânsal navigasyon, bakış açısı dönüşümü.',
    'Prekuneus: görsel imgeleme, epizodik bellek, farkındalık.'
  ],
  tests: [
    'Dinlenim durumu fMRI (DMN bağlantısı)',
    'Otobiyografik bellek görüşmesi',
    'Sanal navigasyon ve imgeleme görevleri'
  ],
  development: [
    'DMN bebeklikte parçalıdır; çocukluk ve ergenlikte uzun mesafeli bağlantılar güçlenir (Fair ve ark., 2008).',
    'DMN ile görev-pozitif ağlar arasındaki anti-korelasyon yaşla belirginleşir.'
  ],
  clinical: [
    'DEHB: görev sırasında varsayılan mod ağının (DMN) yeterince baskılanamaması ve dikkat dalgalanmaları (Sonuga-Barke ve Castellanos, 2007). İlaçsızken DMN baskılanması zayıf olan DEHB\'li gençlerde stimülan ile baskılanma sağlıklı düzeye geldi; ventral ACC\'nin lateral PFC üzerindeki etkisi düzeldi (Peterson ve ark., 2009; 16 hasta). [B]',
    'OSB: DMN bağlantı farklılıkları.',
    'Depresyon: ruminasyonla ilişkili DMN artışı.',
    'Travma: dissosiyasyon ve kendilik algısı değişiklikleri.'
  ],
  treatment: [
    'Stimülanlar görev sırasında DMN\'nin baskılanmasını normalleştirir; "zihnin dalması" ile ilişkili ağın düzenlenmesi bir etki düzeneği olabilir (Peterson ve ark., 2009). [B]',
    'Depresyonda ruminasyon odaklı BDT ve davranışsal aktivasyon, DMN\'nin aşırı içe dönük işleyişini hedefler; ilişkili ağ bulguları mPFC kartında (Kaiser ve ark., 2015). [B]',
    'Travma ve dissosiyasyonda travma odaklı BDT (TF-CBT) çocuk ve ergende birinci basamaktır. [A]'
  ],
  lesion: [
    'Topografik oryantasyon bozukluğu (retrosplenial — yolunu kaybetme).',
    'Epizodik bellek bozukluğu, farkındalık değişiklikleri.'
  ],
  links: ['mPFC (DMN ön merkezi)', 'Hipokampus ve parahipokampal korteks', 'Angular girus', 'Talamus — anterior çekirdek', 'Singulum demeti']
}

);
