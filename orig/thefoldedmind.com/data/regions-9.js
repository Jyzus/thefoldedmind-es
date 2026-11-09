/* Bölge verileri — 9: bazal önbeyin kolinerjik çekirdekleri ve hipotalamus çekirdekleri (Neudorfer ve ark., 2020)
   Hipotalamus çekirdekleri hypothalamus'un alt yapılarıdır: ebeveyn saydamlaşır, çekirdekler içinde görünür.
   Sıra önden arkaya (preoptik → kiazmatik → tuber → mamiller bölge). Dayanak: docs/bilgi/nbm.md, dbb.md, hipotalamus-cekirdekleri.md. */
(window.NEURO_REGIONS = window.NEURO_REGIONS || []).push(

/* ---------- bazal önbeyin ---------- */
{
  id: 'nbm', group: 'limbic', color: '#22c7d6', deep: true,
  name: 'Meynert Bazal Çekirdeği', short: 'NBM',
  latin: 'Nucleus basalis (Meynert)',
  summary: 'Neokorteksin başlıca asetilkolin kaynağı: dikkati, uyarana yönelmeyi ve öğrenmeyi destekler; Alzheimer ve Lewy cisimcikli demanslarda erken yıkılır.',
  anatomy: [
    'Bazal önbeyinde, globus pallidusun altında (substantia innominata) ve anterior komissürün çevresinde dağınık iri (magnoselüler) nöron kümeleri; keskin sınırlı bir çekirdek değildir (Liu ve ark., 2015).',
    'Mesulam sınıflamasında Ch4: medial septum (Ch1) ve Broca\'nın diyagonal bandının dikey ve yatay kolları (Ch2, Ch3) ile birlikte bazal önbeyin kolinerjik sistemini oluşturur (Mesulam ve ark., 1983).',
    'Çıkış: bütün neokorteks ve amigdala. Kolinerjik nöronların arasında kortekse uzanan GABAerjik ve glutamaterjik nöronlar da vardır (Ballinger ve ark., 2016).',
    'Canlı insanın MR\'ında seçilemez; konumu ölüm sonrası beyinlerden çıkarılmış olasılık haritalarıyla belirlenir (Zaborszky ve ark., 2008).'
  ],
  functions: [
    'Dikkat ve uyarana yönelme: kolinerjik salınım saniyeler içinde artarak önemli ipucunun fark edilmesini ve dikkatin sürdürülmesini kolaylaştırır (Hasselmo ve Sarter, 2011). [B]',
    'Öğrenme ve bellek kaydı: kortekste ve hipokampusta duyusal girdinin işlenmesini güçlendirir, plastisiteye izin verir.',
    'Uyanıklıkta kortikal etkinleşme (beyin sapı ve hipotalamustaki uyarılma sistemleriyle birlikte).'
  ],
  tests: [
    'Sürdürülmüş dikkat ve ipucu algılama görevleri (CPT)',
    'Sözel liste öğrenme ve bellek testleri',
    'Araştırmada: MR\'da bazal önbeyin hacmi (olasılık haritasıyla), kolinerjik PET'
  ],
  development: [
    'Gebeliğin 9. haftasında bazal önbeyinde ilk kolinesteraz etkinliği görülür; 15. haftada medial septal, diyagonal ve bazal çekirdekler ayrışır ve lifleri kortekse ilerler; 18–22. haftalarda geçici subplak katmanına ulaşır (Kostović, 1986).',
    'Yaşlanmada Ch4 bölgesinin hacmi küçülür (Zaborszky ve ark., 2008; 10 ölüm sonrası beyin).'
  ],
  clinical: [
    'Alzheimer hastalığı: Meynert çekirdeğindeki nöronların %75\'ten fazlası seçici olarak kaybolur; korteksteki kolinerjik eksikliğin yapısal karşılığıdır (Whitehouse ve ark., 1982). [B]',
    'Bazal önbeyin hacmindeki azalma entorinal korteksin yıkımından önce gelir ve onu öngörür (Schmitz ve Spreng, 2016; ADNI kohortu). [B]',
    'Parkinson hastalığı demansı ve Lewy cisimcikli demans: Lewy kendi adını alan cisimcikleri ilk kez bu çekirdekte görmüştür; nöron kaybı Alzheimer\'dakinden az değildir (Liu ve ark., 2015).',
    'Kolinerjik reseptörleri kapatan ilaçlar dikkat ve bellek kaydını bozar (Hasselmo ve Sarter, 2011); aşırı dozda antikolinerjik deliryum sık görülen bir tablodur (Dawson ve Buckley, 2016). [B]'
  ],
  treatment: [
    'Kolinesteraz inhibitörleri asetilkolini yıkan enzimi durdurur; sinapsta kalan asetilkolin artar ve Meynert nöronlarının kaybı kısmen telafi edilir. Donepezil Alzheimer\'da bilişte küçük ama tutarlı bir düzelme sağlar (30 çalışma, 8257 hasta; Birks ve Harvey, 2018); rivastigmin Parkinson demansında da etkilidir (541 hasta; Emre ve ark., 2004). Belirtisel tedavidir (erişkin). [A]',
    'Meynert çekirdeği derin beyin uyarımı deneyseldir: Alzheimer\'da 6 hastalık faz I çalışmada uygulanabilir ve iyi tolere edildi (Kuhn ve ark., 2015); Parkinson demansında 6 hastalık çift kör çapraz çalışmada birincil bilişsel sonuçlarda düzelme olmadı (Gratwicke ve ark., 2018). [C]'
  ],
  lesion: [
    'Ön iletişim arteri anevrizması kanaması gibi bazal önbeyin hasarlarında Korsakoff benzeri amnezi ve kişilik değişikliği; hasar septal çekirdekleri, akumbensi ve substantia innominatayı kapsar (Damasio ve ark., 1985; 5 hasta). [B]'
  ],
  links: ['Bütün neokorteks ve amigdala (kolinerjik çıkış)', 'Medial septum ve diyagonal bant (Ch1–Ch3)', 'Hipotalamus, PPN ve LC (uyarılma girdileri)', 'Asetilkolin: muskarinik (M1) ve nikotinik (α4β2, α7) reseptörler']
},

{
  id: 'dbb', group: 'limbic', color: '#7fe3a8', deep: true,
  name: 'Broca\'nın Diyagonal Bandı', short: 'DBB',
  latin: 'Stria diagonalis (Broca) et nucleus striae diagonalis',
  summary: 'Medial septumla birlikte hipokampusun asetilkolin ve GABA kaynağı: teta ritmini ve yeni anıların kaydını düzenleyen bazal önbeyin çekirdeği.',
  anatomy: [
    'Bazal önbeyinin alt yüzünde, anterior perfore maddenin arka kenarı boyunca uzanan lif demeti ve içindeki çekirdek; dikey kolu (Ch2) septuma doğru yükselir, yatay kolu (Ch3) yana uzanır (Mesulam ve ark., 1983).',
    'Medial septumla (Ch1) birlikte medial septum–diyagonal bant kompleksini (MS/DB) oluşturur; bu kompleks forniks yoluyla hipokampusa kolinerjik ve GABAerjik lifler gönderir.',
    'Yatay kol (Ch3) koku soğanına projeksiyon yapar (Mesulam ve ark., 1983).'
  ],
  functions: [
    'Hipokampal teta ritmi: MS/DB\'nin GABAerjik lifleri hipokampustaki ketleyici ara nöronları hedef alır (Freund ve Antal, 1988); teta hipokampusun "çevrim içi" durumudur ve bellek kaydına zaman çerçevesi sağlar (Buzsáki, 2002). [B]',
    'Kolinerjik girdiyle yeni bilginin kodlanması, uzamsal bellek ve keşif.',
    'Koku bilgisinin işlenmesi ve koku öğrenmesi (yatay kol).'
  ],
  tests: [
    'Epizodik ve uzamsal bellek testleri',
    'Araştırmada: hipokampal teta (iEEG, MEG)'
  ],
  development: [
    'Gebeliğin 10,5. haftasında septumdan medial limbik kortekse uzanan ince bir kolinesteraz demeti belirir; 15. haftada medial septal, diyagonal ve bazal çekirdekler birbirinden ayrışır (Kostović, 1986).'
  ],
  clinical: [
    'Alzheimer hastalığında bazal önbeyin hacmi entorinal korteksten önce azalır ve onun yıkımını öngörür (Schmitz ve Spreng, 2016). Bu çalışma bazal önbeyni bir bütün olarak ölçtü; diyagonal bant bu bütünün parçasıdır. [B]'
  ],
  lesion: [
    'Bazal önbeyin hasarında (ör. ön iletişim arteri anevrizması) Korsakoff benzeri amnezi; septal çekirdekler ve diyagonal bant hasarın parçasıdır, bellek bozukluğu hipokampal sistemin girdisini yitirmesine bağlanır (Damasio ve ark., 1985). [B]'
  ],
  links: ['Hipokampus (forniks; septohipokampal yol)', 'Medial septum (Ch1)', 'Koku soğanı (Ch3)', 'Hipotalamus ve preoptik alan', 'Asetilkolin ve GABA']
},

/* ---------- hipotalamus çekirdekleri (ebeveyn: hypothalamus) ---------- */
{
  id: 'hy_mpo', parent: 'hypothalamus', group: 'dien', color: '#f27fb8', deep: true,
  name: 'Medial Preoptik Çekirdek', short: 'MPO', latin: 'Nucleus preopticus medialis',
  summary: 'Hipotalamusun en ön ucundaki çekirdek: ebeveyn bakımı, cinsel davranış ve ısı düzenlemesinde rol alır.',
  anatomy: [
    'Lamina terminalisin arkasında, 3. ventrikülün ön ucunun iki yanında; preoptik alanın medial bölümü.',
    'İnsan hipotalamusunun preoptik alanında cinsiyete göre farklılaşan bir hücre grubu tanımlandı: hacmi erkeklerde kadınlardakinin 2,5 katı, hücre sayısı 2,2 katı; 10 ile 93 yaş arasında hacmi ve hücre sayısı belirgin azalır. İşlevi gösterilmedi; bulunduğu alan öteki memelilerde gonadotropin salınımı ve cinsel davranış için gereklidir (Swaab ve Fliers, 1985). [B]'
  ],
  functions: [
    'Ebeveyn bakımı: farede MPO\'daki galanin nöronları hem anne hem babada yavru bakımını yönetir; yok edilince bakım bozulur, uyarılınca yavruya saldırı bastırılır (Wu ve ark., 2014). [C]',
    'Cinsel davranış ve gonadotropin salınımı (steroid hormon geri bildirimi).',
    'Isı düzenleme ve uyku: preoptik alanın ısıya duyarlı nöronları beden ısısını ayarlar (Morrison ve Nakamura, 2019); komşu ventrolateral preoptik çekirdek uykuyu başlatan anahtardır (Saper ve ark., 2005). [B]'
  ],
  tests: [], development: [], clinical: [], lesion: [], links: []
},

{
  id: 'hy_scn', parent: 'hypothalamus', group: 'dien', color: '#f2d94e', deep: true,
  name: 'Suprakiazmatik Çekirdek', short: 'SCN', latin: 'Nucleus suprachiasmaticus',
  summary: 'Beynin ana sirkadiyen saati: retinadan gelen ışık bilgisiyle uyku, beslenme, hormon ve beden ısısı ritimlerini günün saatine eşler.',
  anatomy: [
    'Optik kiyazmanın hemen üstünde, 3. ventrikülün iki yanında küçük çekirdek çifti (modelde her yanda yaklaşık 5 mm³).',
    'Girdi: melanopsin içeren ışığa duyarlı retina ganglion hücrelerinden retinohipotalamik yol (Hattar ve ark., 2002). Çıkış: DMH ve PVN üzerinden uyku, beslenme ve hormon ritimlerine (Chou ve ark., 2003).'
  ],
  functions: [
    'Merkezi saat: birbirine bağlı nöron osilatörleri dinlenme–etkinlik, beslenme, beden ısısı ve hormon ritimlerini yönetir ve bedendeki çevresel saatleri eşler (Mohawk ve ark., 2012). [B]',
    'Işıkla ayarlanma: sabah ışığı ritmi öne, akşam ışığı geriye kaydırır; melatonin salınımı PVN ve sempatik yol üzerinden geceye sınırlanır.'
  ],
  tests: [], development: [],
  clinical: [
    'Ergenlikte uyku süresi kısalır ama uyku ihtiyacı azalmaz: sirkadiyen faz gecikmesi biyolojik, psikolojik ve toplumsal etkenlerle birleşir (Carskadon, 2011). [B]'
  ],
  treatment: [
    'Melatonin SCN\'deki MT1/MT2 reseptörleri üzerinden ritmi kaydırır ve uykuya geçişi kolaylaştırır. Otizmli 125 çocukta (2–17,5 yaş) uzun salımlı pediatrik melatonin 13 haftada gece uykusunu ortalama 57,5 dk uzattı (plaseboda 9,1 dk) ve uykuya dalma süresini kısalttı (Gringras ve ark., 2017). [B]'
  ],
  lesion: [], links: []
},

{
  id: 'hy_so', parent: 'hypothalamus', group: 'dien', color: '#48b6e8', deep: true,
  name: 'Supraoptik Çekirdek', short: 'SON', latin: 'Nucleus supraopticus',
  summary: 'Optik yolun üstündeki iri hücreli çekirdek: vazopressin ve oksitosini doğrudan arka hipofize taşıyarak su dengesini korur.',
  anatomy: [
    'Optik kiyazma ve optik yolun dorsolateralinde, beynin alt yüzüne yakın.',
    'İri (magnoselüler) nöronları vazopressin ve oksitosin üretir; aksonları hipofiz sapından geçip arka hipofizde sonlanır (Swanson ve Sawchenko, 1983).'
  ],
  functions: [
    'Su dengesi: plazma ozmolalitesi yükselince vazopressin salınır, böbrekte su geri emilir.',
    'Doğum ve emzirmede oksitosin salınımı (PVN\'nin iri hücreleriyle birlikte).'
  ],
  tests: [], development: [],
  clinical: [
    'Santral diabetes insipidus: supraoptik ve paraventriküler çekirdeklerin ya da hipofiz sapının hasarı (kraniyofarenjiom, Langerhans hücreli histiyositoz, cerrahi, travma) poliüri ve polidipsiye yol açar; tedavide desmopressin.'
  ],
  lesion: [], links: []
},

{
  id: 'hy_aha', parent: 'hypothalamus', group: 'dien', color: '#f39c4a', deep: true,
  name: 'Anterior Hipotalamik Alan', short: 'AHA', latin: 'Area hypothalamica anterior',
  summary: 'Preoptik alanla tuber bölgesi arasındaki alan: ısı düzenlemede ve savunma ya da saldırı davranışlarında rol alır.',
  anatomy: [
    'Hipotalamusun ön (kiazmatik) bölgesinde, preoptik alanın arkasında ve PVN\'nin altında.'
  ],
  functions: [
    'Isı düzenleme: preoptik–anterior hipotalamik ısı merkezinin parçası (Morrison ve Nakamura, 2019). [B]',
    'Saldırganlık: hamsterde anterior hipotalamustaki vazopressin saldırıyı artırır, serotonin frenler (Ferris ve ark., 1997). [C]'
  ],
  tests: [], development: [], clinical: [],
  lesion: [
    'Ön hipotalamus hasarı ısı kaybı mekanizmalarını bozarak hipertermiye yol açabilir.'
  ],
  links: []
},

{
  id: 'hy_pvn', parent: 'hypothalamus', group: 'dien', color: '#e0405a', deep: true,
  name: 'Paraventriküler Çekirdek', short: 'PVN', latin: 'Nucleus paraventricularis hypothalami',
  summary: 'Stres ekseninin komuta noktası: CRH ile HPA eksenini başlatır; oksitosin ve vazopressinle bağlanma ve su dengesine, beyin sapına inen lifleriyle otonom yanıtlara katılır.',
  anatomy: [
    '3. ventrikülün üst yan duvarında, ince bir kanat biçiminde.',
    'Üç nöron topluluğu: arka hipofize giden iri hücreler (oksitosin, vazopressin), ön hipofizi portal damarlarla yöneten küçük hücreler (CRH, TRH) ve beyin sapı ile omuriliğe inen otonom nöronlar (Swanson ve Sawchenko, 1983).'
  ],
  functions: [
    'HPA ekseni: stresle CRH salınır → ACTH → kortizol. Tehdit beklentisinde amigdala PVN üzerindeki GABA frenini kaldırır; kortizol beyin sapı, hipokampus ve PVN üzerinden geri bildirimle ekseni kapatır (Herman ve ark., 2016). [B]',
    'Oksitosin: doğum, emzirme, bağlanma ve sosyal davranış.',
    'Otonom denetim: sempatik ve parasempatik çıkışların ayarı.'
  ],
  tests: [], development: [],
  clinical: [
    'Depresyon: ölüm sonrası çalışmada major depresyon ya da bipolar bozukluğu olan 6 hastada PVN\'deki CRH nöronları kontrollerin dört katıydı (Raadsheer ve ark., 1994). [C]',
    'Prader-Willi sendromu: 5 olguda PVN hacmi %28, oksitosin nöronları %42 azalmıştı; doyma bozukluğuna aday bir mekanizma (Swaab ve ark., 1995). [C]'
  ],
  lesion: [], links: []
},

{
  id: 'hy_dmh', parent: 'hypothalamus', group: 'dien', color: '#5b8def', deep: true,
  name: 'Dorsomedial Çekirdek', short: 'DMH', latin: 'Nucleus dorsomedialis hypothalami',
  summary: 'SCN\'den gelen saat bilgisini uyku, beslenme ve kortizol ritimlerine çeviren ara istasyon; strese bağlı ısı ve kalp hızı artışını da yönetir.',
  anatomy: [
    'Tuber bölgesinde, ventromedial çekirdeğin dorsalinde, 3. ventrikül duvarına yakın.',
    'Girdi: SCN (doğrudan ve dolaylı). Çıkış: uykuyu başlatan ventrolateral preoptik çekirdeğe GABAerjik, uyanıklık sağlayan lateral hipotalamusa (oreksin nöronları) glutamaterjik lifler (Chou ve ark., 2003).'
  ],
  functions: [
    'Sirkadiyen çıkış: sıçanda DMH hasarı uyanıklık, beslenme, hareket ve kortikosteron ritimlerini %78–89 azaltır (Chou ve ark., 2003). [C]',
    'Duygusal strese bağlı taşikardi ve ısı artışı: sıçanda kahverengi yağ dokusunda titremesiz ısı üretimini beyin sapındaki rafe pallidus üzerinden başlatır (DiMicco ve Zaretsky, 2007). [C]'
  ],
  tests: [], development: [], clinical: [], lesion: [], links: []
},

{
  id: 'hy_vmh', parent: 'hypothalamus', group: 'dien', color: '#9b5de5', deep: true,
  name: 'Ventromedial Çekirdek', short: 'VMH', latin: 'Nucleus ventromedialis hypothalami',
  summary: 'Tuber bölgesinin büyük çekirdeği: savunma ve saldırı yanıtlarını, tokluk ve glukoz dengesini düzenler.',
  anatomy: [
    'Tuber bölgesinde, arkuat çekirdeğin dorsolateralinde, oval çekirdek.',
    'Medial amigdaladan girdi alır, PAG\'ye savunma yanıtları için çıkış verir.'
  ],
  functions: [
    'Savunma: farede VMH\'nin dorsomedial nöronları kaçma ve donma gibi savunma davranışlarını başlatır; bu etkinlik ölçeklenebilir, olumsuz ve kalıcı bir duygu durumunun özelliklerini taşır (Kunwar ve ark., 2015). [C]',
    'Saldırganlık: farede ventrolateral bölümün optogenetik uyarımı saldırı başlatır, susturulması saldırıyı durdurur (Lin ve ark., 2011). [C]',
    'Tokluk, glukoz dengesi ve enerji harcaması.'
  ],
  tests: [], development: [], clinical: [],
  lesion: [
    'VMH bölgesini tutan bir tümörde aşırı yeme, öfke nöbetleri ve bellek bozukluğu (Reeves ve Plum, 1969); ön ve orta hipotalamusu tutan bir astrositomda aşırı yeme, obezite ve saldırgan davranış (Haugh ve Markesbery, 1983). Olgu düzeyinde, birbirini doğrulayan gözlemler. [B]'
  ],
  links: []
},

{
  id: 'hy_arc', parent: 'hypothalamus', group: 'dien', color: '#3ccf8e', deep: true,
  name: 'Arkuat Çekirdek', short: 'ARC', latin: 'Nucleus arcuatus (infundibularis)',
  summary: 'Hipotalamusun tabanındaki iştah ve hormon merkezi: açlık ve tokluk nöronlarını, prolaktini frenleyen dopamin nöronlarını ve puberteyi başlatan kisspeptin nöronlarını barındırır.',
  anatomy: [
    '3. ventrikülün tabanında, median eminens ve hipofiz sapının hemen üstünde; kan-beyin bariyerinin zayıf olduğu bu bölgede kandaki hormonları algılar.',
    'İnsanda infundibular çekirdek olarak da anılır.'
  ],
  functions: [
    'İştah: AgRP/NPY nöronları açlığı, POMC nöronları tokluğu uyarır; leptin, insülin ve ghrelin bu iki topluluk üzerinden etki eder (Andermann ve Lowell, 2017). [B]',
    'Prolaktin: tuberoinfundibular dopamin nöronları portal kana dopamin salar; dopamin hipofizdeki D2 reseptörleriyle prolaktini frenler (Ben-Jonathan ve Hnasko, 2001). [B]',
    'Puberte: kisspeptin ve reseptörü GPR54 GnRH salınımını başlatır; GPR54 mutasyonu olanlarda puberte başlamaz (Seminara ve ark., 2003). [B]'
  ],
  tests: [], development: [],
  clinical: [
    'Antipsikotiklere bağlı hiperprolaktinemi: hipofizdeki D2 reseptörlerinin blokajı tuberoinfundibular freni kaldırır (bkz. İlaçlar: risperidon).',
    'Leptin–melanokortin yolundaki mutasyonlar (LEPR, POMC, MC4R) erken başlangıçlı şiddetli obeziteye yol açar (bkz. Hipotalamus kartı: setmelanotid).'
  ],
  lesion: [], links: []
},

{
  id: 'hy_lh', parent: 'hypothalamus', group: 'dien', color: '#d26cf0', deep: true,
  name: 'Lateral Hipotalamus', short: 'LH', latin: 'Area hypothalamica lateralis',
  summary: 'Oreksin ve MCH nöronlarının yuvası: uyanıklığı, beslenmeyi ve ödül arayışını besleyen, medial önbeyin demetinin geçtiği geniş alan.',
  anatomy: [
    'Forniks sütununun lateralinde, medial önbeyin demetinin içinden geçtiği geniş ve sınırları belirsiz alan (modelde en büyük hipotalamik parça, her yanda yaklaşık 215 mm³).',
    'Oreksin (hipokretin) ve MCH (melanin yoğunlaştırıcı hormon) üreten nöronlar burada ve komşu perifornikal bölgede bulunur.'
  ],
  functions: [
    'Uyanıklık: oreksin nöronları uyanıklık çekirdeklerini (LC, rafe, tuberomamiller çekirdek, VTA) birlikte uyarır; duygu, ödül ve enerji dengesini uyanıklığa bağlar (Sakurai, 2007). [B]',
    'Ödül arayışı: elektrotla kendi kendini uyarma deneyleri septal alandan başladı (Olds ve Milner, 1954); lateral hipotalamus ve içinden geçen medial önbeyin demeti Panksepp\'in SEEKING sisteminin ana hattıdır.',
    'Beslenme ve enerji dengesi.'
  ],
  tests: [], development: [],
  clinical: [
    'Narkolepsi tip 1: oreksin nöronlarının %85–95\'i kaybolur (Thannickal ve ark., 2000); başlangıç sıklıkla çocukluk ve ergenliktedir (bkz. Hipotalamus kartı). [B]'
  ],
  lesion: [], links: []
},

{
  id: 'hy_tm', parent: 'hypothalamus', group: 'dien', color: '#b8e04a', deep: true,
  name: 'Tuberomamiller Çekirdek', short: 'TMN', latin: 'Nucleus tuberomammillaris',
  summary: 'Beynin tek histamin kaynağı: uyanıklığı destekler; birçok psikiyatrik ilacın uyku hali ve iştah artışı yan etkisinin hedefidir.',
  anatomy: [
    'Hipotalamusun arka tabanında, mamiller cismin önünde ve yanında dağınık iri nöronlar.',
    'Histamin lifleri korteks, talamus ve öteki uyanıklık bölgeleri başta olmak üzere hemen bütün beyne yayılır (Scammell ve ark., 2019).'
  ],
  functions: [
    'Uyanıklık: histamin nöronları uyanıkken ateşlenir, uykuda susar (Haas ve Panula, 2003); etkinlikleri azalınca uyku hali gelir (Scammell ve ark., 2019). [B]',
    'Oreksin nöronlarından uyarıcı girdi alır; uykuda ventrolateral preoptik çekirdek tarafından frenlenir (Saper ve ark., 2005).'
  ],
  tests: [], development: [],
  clinical: [
    'H1 reseptörünü kapatan ilaçlar uyku hali ve iştah artışı yapar: 17 antipsikotikte H1 reseptörüne bağlanma gücü kısa süreli kilo artışını öngördü; olanzapin ve ketiapin H1\'e en güçlü bağlananlardandır (Kroeze ve ark., 2003). Mirtazapinin en sık yan etkileri de uyku hali, iştah ve kilo artışıdır (Anttila ve Leinonen, 2001). Birinci kuşak antihistaminikler de bu gruptadır (bkz. İlaçlar). [B]'
  ],
  treatment: [
    'Pitolisant (H3 reseptör ters agonisti) histamin salınımını artırır; narkolepside gündüz uykululuğunu ve katapleksiyi azaltır (Scammell ve ark., 2019); 6 yaş ve üstünde gündüz uykululuğu için FDA onaylı (2024). [A]'
  ],
  lesion: [], links: []
},

{
  id: 'hy_ph', parent: 'hypothalamus', group: 'dien', color: '#6ec6c0', deep: true,
  name: 'Posterior Hipotalamik Çekirdek', short: 'PH', latin: 'Nucleus posterior hypothalami',
  summary: 'Mamiller cisimlerin üstündeki çekirdek: uyarılma ve sempatik yanıtlarda rol alır; dirençli saldırganlıkta ve küme baş ağrısında deneysel derin beyin uyarımı hedefi.',
  anatomy: [
    'Hipotalamusun arka bölümünde, mamiller cisimlerin dorsalinde, 3. ventrikül duvarında; orta beyne geçiş bölgesinde.'
  ],
  functions: [
    'Uyarılma ve sempatik etkinlik: kalp hızını, kan basıncını ve uyanıklığı artırır.',
    'Savunma ve saldırı yanıtlarının hipotalamik çıkışlarından biri.'
  ],
  tests: [], development: [], clinical: [],
  treatment: [
    'Dirençli saldırganlıkta posteromedial hipotalamus uyarımı deneyseldir: ilk iki olgu (zihinsel yetersizlik) Sano\'nun 1960\'lardaki lezyon hedefini izledi (Franzini ve ark., 2005); 7 hastalık seride 5 hastada uzun süreli belirgin düzelme (Torres ve ark., 2021). [C]',
    'İlaca dirençli kronik küme baş ağrısında arka hipotalamus uyarımı: 16 hastanın 13\'ü ortalama 23 ayda ağrısız ya da neredeyse ağrısız (Leone ve ark., 2006). [C]'
  ],
  lesion: [], links: []
},

{
  id: 'hy_mm', parent: 'hypothalamus', group: 'dien', color: '#ffb3a7', deep: true,
  name: 'Mamiller Cisim', short: 'MB', latin: 'Corpus mammillare',
  summary: 'Hipotalamusun arka ucundaki yuvarlak çıkıntılar: forniksle hipokampustan bilgi alır, mamillotalamik yolla anterior talamusa iletir; Papez devresinin bellek istasyonu.',
  anatomy: [
    'Beynin tabanında, interpedünküler çukurun önünde iki yuvarlak çıkıntı (modelde her yanda yaklaşık 105 mm³).',
    'Girdi: hipokampal formasyon (forniks) ve beyin sapındaki Gudden tegmental çekirdekleri; çıkış: mamillotalamik yolla anterior talamik çekirdekler (Vann ve Aggleton, 2004).'
  ],
  functions: [
    'Epizodik bellek: medial mamiller çekirdek Papez devresinin hipotalamik istasyonudur (Vann ve Aggleton, 2004). [B]',
    'Baş yönü sinyallerinin taşınması (lateral mamiller çekirdek).'
  ],
  tests: [], development: [],
  clinical: [
    'Wernicke-Korsakoff sendromu: tiamin eksikliğinde mamiller cisimler hasar görür ve küçülür; ergenlerde anoreksiya nervoza, uzun süren kusma ve bariatrik cerrahi sonrası da görülebilir (bkz. Anterior Çekirdek Grubu).'
  ],
  lesion: [], links: []
}

);
