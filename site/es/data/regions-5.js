/* Bölge verileri — 5/5: Kitaptaki nöroanatomik korelasyon için eklenen yapılar
   (PAG, VTA, BNST, vagal çekirdekler) */
(window.NEURO_REGIONS = window.NEURO_REGIONS || []).push(

{
  id: 'pag', group: 'stem', color: '#ec7a3c', deep: true, reviewed: '2026-10-12',
  name: 'Periakuaduktal Gri Madde', short: 'PAG',
  latin: 'Substantia grisea periaquaeductalis',
  summary: 'Orta beyinde akuadüktü saran gri madde: savunma (savaş, kaç, don), ağrının bastırılması ve duygusal seslenmenin ortak çıkış istasyonu.',
  anatomy: [
    'Mezensefalonda serebral akuadüktü (Sylvius) halka gibi saran gri madde; rostralde 3. ventriküle, kaudalde 4. ventriküle uzanır.',
    'Dört uzunlamasına kolon: dorsomedial, dorsolateral, lateral ve ventrolateral.',
    'Girdi: amigdala santral çekirdeği, hipotalamus, mPFC/ACC, insula. Çıkış: rostral ventromedial medulla (RVM), beyin sapı otonom çekirdekleri, talamus.',
    'Kanlanma: posterior serebral ve superior serebellar arter dalları.',
    'İnsanda kolonlar görüntülenebilir: 7 T fMRI\'da (0,75 mm) duygusal görüntüler rostral PAG\'da lateral ve dorsomedial, kaudal PAG\'da ventrolateral bölgeleri etkinleştirdi; lateral ve ventrolateral bölgeler farklı duygularla (öfke, üzüntü) gruplandı (Satpute ve ark., 2013). Hayvanlardaki kolon modeli insanda da geçerli görünüyor. [B]'
  ],
  functions: [
    'Aktif savunma (dorsolateral/lateral kolon): savaş-kaç, taşikardi, kan basıncında artış.',
    'Pasif savunma (ventrolateral kolon): donma, hareketsizlik, bradikardi, hipotansiyon.',
    'Endojen ağrı kontrolü: opioid aracılı inen ketleme (PAG → RVM → omurilik dorsal boynuzu); stres analjezisi. Plasebo analjezisi de bu yolu kullanır: nalokson plaseboyu azalttı ve rostral ACC–PAG bağlaşımını ortadan kaldırdı (Eippert ve ark., 2009). Beklenti ve güvenin ağrıyı azaltmasının biyolojik karşılığıdır. [B]',
    'Duygusal seslenme: ağlama, ayrılık çağrısı.',
    'Solunum ve otonom yanıtların duygusal duruma göre ayarlanması.'
  ],
  tests: [
    'Tehdit yakınlığı paradigmaları (fMRI): tehdit yaklaştıkça etkinlik vmPFC\'den PAG\'a kayar (Mobbs ve ark., 2007)',
    'Koşullu ağrı modülasyonu',
    'Kalp hızı, deri iletkenliği ve irkilme ile donma yanıtlarının ölçümü'
  ],
  development: [
    'Filogenetik olarak eski, doğumda işlevsel bir yapıdır; bebeğin ayrılık ağlaması ve temel savunma refleksleri bu düzeyde örgütlenir.',
    'vmPFC/ACC\'den gelen yukarıdan aşağı düzenleme yıllar içinde olgunlaşır; küçük çocukta düzenleme büyük ölçüde bakımverene dayanır.'
  ],
  clinical: [
    'Panik bozukluk: dorsal PAG uyarımı panik benzeri belirtiler (boğulma hissi, kaçma isteği) oluşturur.',
    'TSSB ve dissosiyasyon: dorsolateral PAG etkin savunmayı (savaş-kaç), ventrolateral PAG edilgen savunmayı (donma, otonom körelme) yürütür. TSSB\'de ve dissosiyatif alt tipinde PAG\'ın duygusal tepkisellik ve savunma bölgeleriyle dinlenim bağlantısı yaygın biçimde artmış; dissosiyatif alt tip edilgen savunmaya kayar (Harricharan ve ark., 2016). [B]',
    'Kronik ve fonksiyonel ağrı: inen ağrı ketlemesinde zayıflama.',
    'Seçici mutizm: donma tepkisiyle ilişkilendirilen savunma basamağı (kuramsal model).'
  ],
  treatment: [
    'Opioid analjezikler etkisini kısmen PAG ve RVM\'deki μ-opioid reseptörleri üzerinden gösterir; aynı devre plasebo ve beklenti etkisini de taşır (Eippert ve ark., 2009). [B]',
    'Psikoterapide karşılığı: güvenlik sinyali ve beklenti ağrıyı ve savunma yanıtını değiştirebilir (rostral ACC → PAG). Kronik ağrılı çocukta bilişsel davranışçı yaklaşımların biyolojik gerekçesi.',
    'Derin beyin uyarımı (periventriküler/periakuaduktal gri madde): dirençli nöropatik ağrıda erişkin serisinde hastaların yaklaşık üçte ikisi fayda gördü (Boccard ve ark.). Yalnızca erişkin, deneysel. [C]'
  ],
  lesion: [
    'Hayvan çalışmalarında duygusal seslenme ve savunma davranışlarında kayıp.',
    'Dorsal mezensefalon lezyonlarında Parinaud sendromu ve akuadukt stenozuna bağlı hidrosefali eşlik edebilir.'
  ],
  links: ['Amigdala santral çekirdeği → PAG (savunma çıktısı)', 'Hipotalamus ↔ PAG', 'vmPFC/ACC → PAG (yukarıdan aşağı düzenleme)', 'PAG → RVM → omurilik (inen ağrı kontrolü)', 'Endojen opioidler, GABA, glutamat, endokannabinoidler']
},

{
  id: 'vta', group: 'stem', color: '#f5c542', deep: true, reviewed: '2026-10-12',
  name: 'Ventral Tegmental Alan', short: 'VTA',
  latin: 'Area tegmentalis ventralis',
  summary: 'Mezolimbik ve mezokortikal dopaminin kaynağı: motivasyonun, ödül beklentisinin ve öğrenmenin sinyalini üretir.',
  anatomy: [
    'Orta beyin tabanında, interpedünküler fossanın dorsalinde, substantia nigranın medialinde; orta hatta iki yanlı yerleşir.',
    'Hücrelerin çoğunluğu (~%60) dopaminerjik, kalanı GABAerjik ve az sayıda glutamaterjik nörondur.',
    'Projeksiyonlar: nükleus akumbens, amigdala, hipokampus (mezolimbik); PFC ve ACC (mezokortikal).',
    'Girdi: lateral hipotalamus (medial önbeyin demeti), PFC glutamatı, laterodorsal tegmentum; lateral habenula üzerinden ketleme.'
  ],
  functions: [
    'Ödül tahmin hatası: beklenenden iyi sonuçta fazik dopamin artışı, beklenenden kötüde azalma (Schultz).',
    'Teşvik belirginliği ("isteme"): uyaranlara motivasyonel değer atama.',
    'Yaklaşma davranışı, keşif ve merak (Panksepp\'in SEEKING sistemi).',
    'Mezokortikal kol: çalışma belleği ve hedefe yönelik planlamaya dopamin desteği.'
  ],
  tests: [
    'Parasal Teşvik Gecikme (MID) görevi',
    'Olasılıksal ödül öğrenme ve ödül tahmin hatası modelleri',
    'PET ile dopamin salınımı (araştırma)'
  ],
  development: [
    'PFC\'ye ulaşan dopaminerjik liflerin yoğunluğu ergenliğe kadar artar.',
    'Ergenlikte ödül duyarlılığındaki artış, mezolimbik sistemin prefrontal denetime göre erken olgunlaşmasıyla ilişkilendirilir.'
  ],
  clinical: [
    'DEHB: tedavi almamış 53 erişkinde ödül yolunda (akumbens, orta beyin, sol kaudat) dopamin taşıyıcısı ve D2/3 reseptörleri daha düşük; akumbens ve orta beyindeki düzeyler dikkatsizlikle ilişkili (Volkow ve ark., 2009). Stimülanlar dopamin taşıyıcısını (metilfenidat ayrıca noradrenalin taşıyıcısını) bloke ederek sinaptik dopamini artırır. [B]',
    'Depresyon ve anhedoni: mezolimbik sistemde hipoaktivite.',
    'Madde kullanımı: bağımlılık yapan maddeler mezolimbik dopamini doğrudan ya da dolaylı artırır.',
    'Psikoz: dopamin fazlalığı esas olarak presinaptiktir. 44 PET/SPECT çalışmasının meta-analizinde (618 hasta, 606 kontrol) striatal dopamin sentezi ve salınımı belirgin artmış (d ≈ 0,79), D2/3 reseptörleri çok az değişmiş, dopamin taşıyıcısı değişmemiş (Howes ve ark., 2012). Klinik karşılığı: aşırı anlam atfı (aberrant salience). [A]'
  ],
  treatment: [
    'Stimülanlar (metilfenidat, amfetamin): dopamin ve noradrenalin geri alımını engeller; amfetamin ayrıca salınımı artırır. DEHB\'de birinci basamak. [A]',
    'Antipsikotikler: D2 reseptör blokajı; etkinlik ve yan etkiler (EPS, prolaktin) aynı reseptörden. [A]',
    'Ksanomelin-trospiyum: D2\'yi bloke etmeyen ilk antipsikotik (M1/M4 muskarinik agonist; trospiyum çevresel yan etkileri önler). Dopamin salınımını dolaylı düzenler. Erişkin şizofrenide FDA onaylı (Eylül 2024); çocuk ve ergende henüz onaylı değil. [A]',
    'Bağımlılık: bütün bağımlılık yapıcı maddeler mezolimbik dopamini artırır; tedavide ödülü yeniden düzenleyen yaklaşımlar (olumsallık yönetimi, motivasyonel görüşme) bu sistemi hedefler. [B]'
  ],
  lesion: [
    'Apati ve motivasyon kaybı; hayvanlarda keşif davranışında belirgin azalma.'
  ],
  links: ['VTA → nükleus akumbens (mezolimbik)', 'VTA → PFC ve ACC (mezokortikal)', 'Lateral hipotalamus → VTA (medial önbeyin demeti)', 'Glutamat (+), GABA (−), oreksin, opioidler']
},

{
  id: 'bnst', group: 'limbic', color: '#f0849b', deep: true, reviewed: '2026-10-12',
  name: 'Stria Terminalis Yatak Çekirdeği', short: 'BNST',
  latin: 'Nucleus interstitialis striae terminalis',
  summary: 'Genişletilmiş amigdalanın parçası: belirsiz ve uzak tehditlere karşı süreğen kaygıyı yürütür, stres eksenini ayarlar.',
  anatomy: [
    'Anterior komissürün çevresinde, lateral ventrikülün ventralinde, septumun lateralinde yer alan çekirdek grubu.',
    'Amigdalaya stria terminalis ile bağlanır: bu ince lif demeti kaudat nükleusun C şeklini izleyerek talamusun üzerinden amigdalaya uzanır (modelde ince yay).',
    'Santral amigdala ve akumbens kabuğu ile birlikte "genişletilmiş amigdala" olarak anılır.',
    'Cinsiyet dimorfizmi gösteren alt çekirdekleri vardır.'
  ],
  functions: [
    'Belirsiz, uzak ya da öngörülemeyen tehditlere süreğen kaygı yanıtı; amigdalanın fazik korku yanıtının karşılığı (Davis ve ark., 2010). İnsanda BNST, tehdit düzeyindeki değişimi sürekli izler; kaygı düzeyi yüksek bireylerde bu izleme aşırı tetikte olma biçimini alır (Somerville ve ark., 2010; 50 erişkin). [B]',
    'HPA ekseninin düzenlenmesi (paraventriküler çekirdeğe projeksiyon).',
    'Otonom yanıtların sürdürülmesi.',
    'Sosyal, cinsel ve annelik davranışları; stres ile ödül sistemleri arasında köprü.'
  ],
  tests: [
    'NPU tehdit görevi (nötr, öngörülebilir, öngörülemeyen tehdit — Grillon)',
    'Tehdit beklentisi sırasında fMRI',
    'Sürdürülmüş korkuda irkilme refleksi'
  ],
  development: [
    'Kaygılı mizaç kısmen kalıtsaldır: 592 genç rhesus maymununda kalıtılan riski taşıyan şey beyin yapısı değil, prefrontal–limbik–orta beyin devresinin metabolizmasıydı (Fox ve ark., 2015). Sonraki çalışmada santral genişletilmiş amigdalanın (santral çekirdek ve BNST) metabolizması mizaçla ilişkili bulundu. Davranışsal ketlenme gösteren çocukların biyolojisine bir model. [B]',
    'Hayvan modellerinde erken yaşam stresi BNST\'deki CRF sistemini kalıcı biçimde etkiler; pediatrik insan verisi sınırlıdır.'
  ],
  clinical: [
    'Yaygın anksiyete bozukluğu: belirsizliğe tahammülsüzlük ve süreğen beklenti kaygısı.',
    'TSSB: sürekli tetikte olma, sürdürülmüş tehdit yanıtı.',
    'Madde kullanımında yoksunluk ve stresle tetiklenen nüks (CRF).'
  ],
  treatment: [
    'SSRI ve BDT, yaygın anksiyete bozukluğunda birinci basamak; benzodiazepinler kısa süreli.',
    'CRF1 reseptör antagonistleri hayvan modellerinde BNST aracılı kaygıyı azaltsa da insanda başarısız oldu: pexacerfont yaygın anksiyete bozukluğunda plasebodan ayrışmadı (Coric ve ark., 2010) ve hiçbir CRF1 antagonisti faz III\'ü tamamlayamadı. Hayvandan insana aktarımın sınırlarını gösteren bir örnek. [B]',
    'Belirsizliğe tahammülsüzlüğü hedefleyen BDT bileşenleri, BNST\'nin işlevine (belirsiz tehdidi izleme) karşılık gelir.'
  ],
  lesion: [
    'Hayvan çalışmalarında BNST lezyonu fazik korkuyu bozmadan süreğen kaygı yanıtını azaltır.'
  ],
  links: ['Amigdala (stria terminalis)', 'Hipotalamus PVN (HPA ekseni)', 'PAG ve beyin sapı otonom çekirdekleri', 'Nükleus akumbens kabuğu', 'CRF, NPY, noradrenalin, oksitosin/vazopressin']
},

{
  id: 'vagal', group: 'stem', color: '#3fbfcf', deep: true, reviewed: '2026-10-12',
  name: 'Vagal Çekirdekler', short: 'DMV / NA',
  latin: 'Nucleus dorsalis nervi vagi et nucleus ambiguus',
  summary: 'Medulladaki iki parasempatik çıkış: kalbi ve yüz-boğaz kaslarını düzenleyen nükleus ambiguus ile iç organları düzenleyen dorsal motor çekirdek.',
  anatomy: [
    'Dorsal motor vagus çekirdeği (DMV): 4. ventrikül tabanında, hipoglossal çekirdeğin lateralinde (vagal trigon).',
    'Nükleus ambiguus (NA): ventrolateral medullada, retiküler formasyon içinde; IX, X ve XI. sinirlerin motor lifleri.',
    'Komşu nükleus traktus solitarius (NTS): vagal afferentlerin ilk durağı.',
    'Vagus siniri medullanın lateralinden, olive ile inferior serebellar pedinkül arasından çıkar (modelde sinir kökü).'
  ],
  functions: [
    'NA: kalp hızının hızlı, solunumla uyumlu frenlenmesi (solunumsal sinüs aritmisi); larinks ve farinks kasları (ses, yutma).',
    'DMV: diyafram altı organlar (mide, bağırsak); sindirim, motilite, sekresyon.',
    'Vagal afferentler (liflerin yaklaşık %80\'i) bedenin durumunu NTS üzerinden beyne bildirir.',
    'İnflamatuvar refleks: kolinerjik anti-inflamatuvar yol.',
    'Polivagal kuram üzerine not: kitapta da kullanılan Porges modeli ventral vagal (nükleus ambiguus) sistemi sosyal katılıma, dorsal vagal (DMV) sistemi donma ve kapanmaya bağlar. Kuramın temel öncülleri (iki çekirdeğin kalp üzerinde ayrı rolleri, RSA\'nın genel vagal tonusu yansıtması, RSA\'nın memelilere özgü olması) fizyoloji literatüründe ciddi eleştiri aldı (Grossman, 2023). Klinikte faydalı bir anlatım modeli, ancak anatomik gerçeklik olarak değil, kuram olarak öğretilmeli. [B]'
  ],
  tests: [
    'Kalp hızı değişkenliği / RSA (vagal tonus göstergesi)',
    'Ortostatik test, Valsalva manevrası',
    'Yutma ve fonasyon değerlendirmesi'
  ],
  development: [
    'Vagal liflerin miyelinizasyonu son trimester ve doğum sonrası dönemde artar.',
    'Vagal tonus (RSA) bebeklikten itibaren artar; duygu düzenleme ve sosyal katılımla ilişkili bulunmuştur.'
  ],
  clinical: [
    'Anksiyete ve travma: istirahatte kalp hızı değişkenliği (RSA) azalmış; anksiyete bozukluklarında meta-analizle gösterilmiş (Chalmers ve ark., 2014). Uzun dönem kardiyovasküler riskle ilişkisi de tartışılıyor. [A]',
    'Anoreksiya nervoza: vagal baskınlığa bağlı bradikardi.',
    'Kan-iğne fobisi ve vazovagal senkop (ergenlerde sık): iki fazlı yanıt.',
    'Vagus sinir stimülasyonu: dirençli epilepside (çocuklarda da) ve erişkin dirençli depresyonda kullanılır.'
  ],
  treatment: [
    'Vagus sinir stimülasyonu (implante): ilaca dirençli epilepside 4 yaş ve üstünde FDA onaylı (2017; önceden 12 yaş). Erişkin dirençli depresyonda da onaylı. [A]',
    'Eşleştirilmiş VNS ile inme rehabilitasyonu: hareket egzersizleriyle eş zamanlı vagus uyarımı, kronik iskemik inmede üst ekstremite işlevini iyileştirdi (108 hasta); FDA onayı 2021. Vagusun "öğrenmeyi güçlendirme" (plastisite) etkisine dayanır. [A]',
    'Kalp hızı değişkenliği biyogeri bildirimi ve yavaş nefes egzersizleri, anksiyetede vagal düzenlemeyi hedefleyen düşük riskli yaklaşımlardır. [C]'
  ],
  lesion: [
    'Ses kısıklığı, disfaji, uvula deviasyonu (NA); otonom düzensizlik.'
  ],
  links: ['NTS → parabrakial → amigdala, hipotalamus, insula (afferent kol)', 'NA → kalp (SA düğümü), larinks, farinks', 'DMV → mide, bağırsak', 'Asetilkolin (efferent), glutamat (afferent)']
}

);
