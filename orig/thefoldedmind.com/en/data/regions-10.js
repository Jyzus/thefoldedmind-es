/* Bölge verileri — 10: korteks alt alanları (HCP-MMP1.0; pipeline/alt_alan.py) ve hipofiz. layer: "surface" → ebeveynin yüzeyini paylaşan bölüm.
   İçerik docs/bilgi/<kimlik>.md + tools/bilgi_aktar.py. */
(window.NEURO_REGIONS = window.NEURO_REGIONS || []).push(

{
  id: 'vmpfc', parent: 'mpfc', layer: 'surface', group: 'frontal', color: '#a47bdc', reviewed: '2026-11-05',
  name: "Ventromedial Prefrontal Korteks", short: "vmPFC", latin: "Cortex praefrontalis ventromedialis",
  summary: 'Seçeneklerin öznel değerini izler; sönmüş korkunun hatırlanmasıyla amigdalayı yatıştırır.',
  anatomy: [
    'Medial yüzün tabanı, frontal kutbun altı: HCP-MMP alanları 10r ve 10v (Glasser ve ark., 2016). Altında medial OFC, arkasında subgenual ve pregenual singulat bulunur.',
    'Unsinat fasikül üzerinden amigdala ve temporal kutupla, ayrıca ventral striatum ve hipotalamusla bağlantılıdır.'
  ],
  functions: [
    'Öznel değer: 206 fMRI çalışmasının meta-analizinde vmPFC ve ventral striatum, ödülün türünden bağımsız olarak öznel değeri izler (Bartra ve ark., 2013). [A]',
    'Korku sönmesi: sıçanda infralimbik nöronlar sönmenin ertesi gün hatırlanmasını işaretler (Milad ve Quirk, 2002); insanda vmPFC sönmenin geri çağrılmasında etkindir (Phelps ve ark., 2004) ve kalınlığı sönme belleğiyle ilişkilidir (Milad ve ark., 2005). [B]'
  ],
  tests: [
  ],
  development: [
    'Görev sırasında amigdala-prefrontal bağlantısı 4–22 yaş aralığında çocuklukta pozitifken ergenliğe geçişte negatife döner (Gee ve ark., 2013). [B]'
  ],
  clinical: [
    'Anksiyete ve TSSB modellerinde vmPFC\'nin amigdalayı yetersiz düzenlemesi ve sönme belleğinde zayıflık öne çıkar; grup bulgusudur, bireyde tanı koydurmaz.'
  ],
  treatment: [
    'Maruz bırakma terapisi sönme öğrenmesini kullanır: yeni "güvenli" öğrenme eski korku belleğini silmez, onunla yarışır.'
  ],
  lesion: [
    'Ventromedial prefrontal hasarda kumar görevinde uzun vadeli sonuçlara duyarsızlık (Bechara ve ark., 1994). [B]'
  ],
  links: [
    'Amigdala (unsinat fasikül)',
    'Akumbens ve ventral striatum',
    'VTA (mezolimbik dopamin)',
    'Hipotalamus'
  ]
},

{
  id: 'dmpfc', parent: 'mpfc', layer: 'surface', group: 'frontal', color: '#9167cc', reviewed: '2026-11-05',
  name: "Dorsomedial Prefrontal Korteks", short: "dmPFC", latin: "Cortex praefrontalis dorsomedialis",
  summary: 'Başkalarının ve kendi zihinsel durumlarımızı düşünmeyi taşır; varsayılan mod ağının ön medial düğümü.',
  anatomy: [
    'Superior frontal girusun medial yüzü: HCP-MMP alanları 9m, 8BM, 10d ve komşu dorsal alanlar (Glasser ve ark., 2016).'
  ],
  functions: [
    'Zihin kuramı: başkasının niyet ve inançlarını çıkarsamada medial frontal korteks tekrarlı biçimde etkinleşir (Amodio ve Frith, 2006; meta-analiz: Schurz ve ark., 2014). [A]',
    'Olumsuz duygunun değerlendirilmesi ve ifadesi: dorsal medial bölgeler bu işlevle, ventral bölgeler düzenlemeyle ilişkilendirilir (Etkin ve ark., 2011). [B]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
    'Depresyonda dinlenim bağlantısı meta-analizinde varsayılan mod ağı içinde bağlantı artışı bildirilir (Kaiser ve ark., 2015). [A]'
  ],
  lesion: [
  ],
  links: [
    'Varsayılan mod ağı',
    'Arka singulat ve prekuneus'
  ]
},

{
  id: 'fpc', parent: 'mpfc', layer: 'surface', group: 'frontal', color: '#a98adf', reviewed: '2026-11-05',
  name: "Frontal Kutup", short: "FPC", latin: "Polus frontalis (area 10)",
  summary: 'Bir hedefi askıda tutarken başka bir işe geçmeyi sağlar; yürütücü sistemin en üst basamağı olarak düşünülür.',
  anatomy: [
    'Ön lobun en ön ucu: HCP-MMP alanları 10pp, a10p ve p10p (Glasser ve ark., 2016).'
  ],
  functions: [
    'Yarım kalan bir planı akılda tutarak başka göreve geçme (Koechlin ve Hyafil, 2007). [B]',
    'Dikkati dış uyarandan iç düşünceye yöneltme ve tersi: "geçit" varsayımı (Burgess ve ark., 2007). [B]'
  ],
  tests: [
  ],
  development: [
    'Rostral prefrontal gelişim uzundur: gri madde ve sinaps yoğunluğundaki azalma ergenliğe dek sürer (Dumontheil ve ark., 2008). [B]'
  ],
  clinical: [
    'Aynı gözden geçirme DEHB ve otizmde rostral prefrontal bulguları tartışır; tanısal değeri yoktur (Dumontheil ve ark., 2008). [C]'
  ],
  lesion: [
  ],
  links: [
    'DLPFC',
    'Frontoparyetal kontrol ağı'
  ]
},

{
  id: 'sgacc', parent: 'acc', layer: 'surface', group: 'limbiccx', color: '#e8737c', reviewed: '2026-11-05',
  name: "Subgenual Ön Singulat", short: "sgACC", latin: "Gyrus cinguli, pars subgenualis (area 25, s32)",
  summary: 'Korpus kallozum dizinin altındaki singulat: duygu ve otonom düzenlemenin düğümü, depresyon araştırmalarının başlıca hedefi.',
  anatomy: [
    'Dizin altında, vmPFC\'nin arkasında: HCP-MMP alanları 25 ve s32 (Glasser ve ark., 2016).',
    'Singulatın dört bölgeli modelinde ön singulatın alt kısmıdır (Vogt, 2005).'
  ],
  functions: [
    'Duygusal ve otonom yanıtlarla ilişkilidir (Vogt, 2005; Drevets ve ark., 1997). [B]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
    'Ailesel bipolar ve unipolar depresyonda dizin altı prefrontal kortekste PET ile azalmış etkinlik ve MR ile gri madde kaybı (Drevets ve ark., 1997). Ergenlikte başlayan depresyonu olan genç kadınlarda sol subgenual hacim ortalama %19 küçük; orta yaşlı kadınlarda da benzer fark (Botteron ve ark., 2002). [B]',
    'Etkinliğin yönü çalışmaya göre değişir: dirençli depresyonda aşırı metabolik etkinlik bildirilmiştir (Mayberg ve ark., 2005). Bu bir modeldir, bireyde tanı koydurmaz. [B]'
  ],
  treatment: [
    'Derin beyin uyarımı: dirençli depresyonda 6 hastalık açık çalışmada 4 hastada kalıcı düzelme bildirildi (Mayberg ve ark., 2005), sahte kontrollü çalışmada etkinlik gösterilemedi (Holtzheimer ve ark., 2017). Deneyseldir, yalnızca erişkinde çalışılmıştır. [B]',
    'TMS: sol DLPFC\'de sgACC ile en güçlü ters bağlantılı noktanın hedeflenmesi etkiyle ilişkilidir (Fox ve ark., 2012). [B]'
  ],
  lesion: [
  ],
  links: [
    'Amigdala',
    'Hipotalamus',
    'DLPFC (ters bağlantı)'
  ]
},

{
  id: 'pgacc', parent: 'acc', layer: 'surface', group: 'limbiccx', color: '#dc5a66', reviewed: '2026-11-05',
  name: "Pregenual Ön Singulat", short: "pgACC", latin: "Gyrus cinguli, pars pregenualis",
  summary: 'Dizin önündeki singulat: duygusal çatışmayı çözerken amigdalayı yukarıdan düzenler.',
  anatomy: [
    'Korpus kallozum dizinin önünde: HCP-MMP alanları a24, p32 ve d32 (Glasser ve ark., 2016). Literatürde çoğu kez rostral ACC diye geçer.'
  ],
  functions: [
    'Duygusal çatışmanın çözümünde rostral singulat amigdala etkinliğini yukarıdan azaltır (Etkin ve ark., 2006). [B]',
    'Ventral medial bölgeler olumsuz duygunun düzenlenmesiyle ilişkilendirilir (Etkin ve ark., 2011). [B]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
    'Depresyon: dinlenimde yüksek rostral ACC etkinliği meta-analizde tedavi yanıtını öngörür (Pizzagalli, 2011); grup düzeyinde bir bulgudur, bireyde tedavi seçiminde kullanılmaz. [A]'
  ],
  lesion: [
  ],
  links: [
    'Amigdala',
    'Varsayılan mod ağı'
  ]
},

{
  id: 'dacc', parent: 'acc', layer: 'surface', group: 'limbiccx', color: '#d6505e', reviewed: '2026-11-05',
  name: "Dorsal Ön Singulat ve Ön Orta Singulat", short: "dACC", latin: "Gyrus cinguli, pars dorsalis et medius",
  summary: 'Olumsuz duygu, ağrı ve bilişsel kontrolün buluştuğu yer; salience ağının medial düğümü.',
  anatomy: [
    'Dizinin üstünde ve arkasında: HCP-MMP alanları p24, a24pr, p24pr, a32pr, p32pr, 33pr. Modelde singulat motor alanları (24dd, 24dv) de bu bölümdedir (Glasser ve ark., 2016).'
  ],
  functions: [
    'Olumsuz duygu, ağrı ve bilişsel kontrol ön orta singulatta örtüşür (meta-analiz: Shackman ve ark., 2011); alt bölgelerin ayrışması da savunulur (Vogt, 2005). [A]',
    'Ön insula ile birlikte salience ağını oluşturur (Seeley ve ark., 2007). [B]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
    'Pediatrik OKB\'de hataya bağlı beyin yanıtı (ERN) büyüktür ve tedaviden sonra da büyük kalır (Hajcak ve ark., 2008). [B]',
    'Tanılar üstü gri madde kaybı: 193 çalışmanın meta-analizinde dorsal ön singulat ve ön insula öne çıkar (Goodkind ve ark., 2015). [A]'
  ],
  lesion: [
  ],
  links: [
    'Ön insula (salience ağı)',
    'Kaudat (OKB döngüsü)',
    'Talamus'
  ]
},

{
  id: 'mofc', parent: 'ofc', layer: 'surface', group: 'frontal', color: '#8676ea', reviewed: '2026-11-05',
  name: "Medial Orbitofrontal Korteks", short: "mOFC", latin: "Cortex orbitofrontalis medialis",
  summary: 'Ödüllerin değerini izler; beklenen sonucu temsil ederek seçimi yönlendirir.',
  anatomy: [
    'Orbital yüzün medial kısmı: HCP-MMP alanları OFC ve pOFC (Glasser ve ark., 2016).'
  ],
  functions: [
    'Medial orbitofrontal etkinlik ödül değeriyle ilişkilidir (Kringelbach ve Rolls, 2004); para kazancı medial bölgeleri etkinleştirir (O\'Doherty ve ark., 2001). [B]',
    'Belirli sonuçların öngörülmesi ve değerlendirilmesi (Rudebeck ve Murray, 2014). [B]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
  ],
  lesion: [
  ],
  links: [
    'vmPFC',
    'Akumbens',
    'Amigdala'
  ]
},

{
  id: 'lofc', parent: 'ofc', layer: 'surface', group: 'frontal', color: '#7060dc', reviewed: '2026-11-05',
  name: "Lateral Orbitofrontal Korteks", short: "lOFC", latin: "Cortex orbitofrontalis lateralis",
  summary: 'Ceza ve olumsuz sonuçları değerlendirir; davranışın değiştirilmesi gerektiğini bildirir.',
  anatomy: [
    'Orbital yüzün lateral kısmı: HCP-MMP alanları 11l, 13l, 47m ve modelde 47. alanın öteki bölümleri (Glasser ve ark., 2016).'
  ],
  functions: [
    'Lateral orbitofrontal etkinlik cezaların değerlendirilmesiyle ve sonrasında davranış değişikliğiyle ilişkilidir (Kringelbach ve Rolls, 2004; O\'Doherty ve ark., 2001). [B]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
    'OKB: klasik kortiko-striatal modelin ötesinde lateral ve medial OFC, dorsal ön singulat ve amigdala devreleri tartışılır; sönme öğrenmesi de bozulmuştur (Milad ve Rauch, 2012). [B]'
  ],
  lesion: [
  ],
  links: [
    'Kaudat (OKB döngüsü)',
    'Amigdala'
  ]
},

{
  id: 'aic', parent: 'insula', layer: 'surface', group: 'limbiccx', color: '#df62a4', reviewed: '2026-11-05',
  name: "Ön İnsula", short: "aINS", latin: "Insula anterior",
  summary: 'Bedenden gelen sinyali duyguya ve farkındalığa çevirir; önemli olanı işaretleyerek ağlar arasında geçişi başlatır.',
  anatomy: [
    'İnsulanın ön kısmı: HCP-MMP alanları AVI, AAIC, MI, FOP5 ve komşu piriform kısım (Glasser ve ark., 2016).'
  ],
  functions: [
    'Bedensel durumun öznel farkındalığı (Craig, 2009). [B]',
    'Dorsal ön singulatla salience ağını oluşturur (Seeley ve ark., 2007); önemli olayı işaretleyip dış dikkat ve iç düşünce ağları arasında geçişi başlatır (Menon ve Uddin, 2010). [B]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
    'Anksiyete: ön insula aşırı etkinliği önerilir (Paulus ve Stein, 2006); otizmde azalmış etkinlik bildirilir (Menon ve Uddin, 2010). [B]',
    'Tanılar üstü gri madde kaybında ön insula öne çıkar (Goodkind ve ark., 2015). [A]'
  ],
  lesion: [
    'İnsula hasarından sonra sigarayı bırakan hastaların çoğu bunu hemen, kolayca ve nükssüz yapmıştır. Küçük, geriye dönük bir çalışmadır ve insulanın bütününe bakar, ön ve arka ayrımı yapmaz (Naqvi ve ark., 2007). [C]'
  ],
  links: [
    'Dorsal ön singulat (salience ağı)',
    'Amigdala',
    'Arka insula'
  ]
},

{
  id: 'pic', parent: 'insula', layer: 'surface', group: 'limbiccx', color: '#cf4890', reviewed: '2026-11-05',
  name: "Arka İnsula", short: "pINS", latin: "Insula posterior",
  summary: 'Bedenin iç durumunun birincil haritası: ısı, ağrı ve iç organ duyusu buraya ulaşır.',
  anatomy: [
    'İnsulanın arka kısmı: HCP-MMP alanları PoI1, PoI2, Ig, PI ve modelde komşu operküler alanlar (Glasser ve ark., 2016).'
  ],
  functions: [
    'Bedensel duyunun ilk kortikal temsili; ön insulaya doğru duygusal farkındalığa dönüşür (Craig, 2009). [B]',
    'Ağrı: dorsal arka insulada kan akımı bildirilen ağrı yoğunluğunu izler (Segerdahl ve ark., 2015); ağrıya özgül olduğu tartışmalıdır (Davis ve ark., 2015). [B]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
  ],
  lesion: [
  ],
  links: [
    'Talamus (VMb)',
    'Ön insula'
  ]
},

{
  id: 'sma', parent: 'premotor', layer: 'surface', group: 'frontal', color: '#5cc0bd', reviewed: '2026-11-05',
  name: "Ek Motor Alan ve Pre-SMA", short: "SMA / pre-SMA", latin: "Area motoria supplementaria et praesupplementaria",
  summary: 'Bilişi eyleme bağlar; uyarılınca hareket etme isteği doğurabilir.',
  anatomy: [
    'Dorsomedial frontal korteksteki SMA, ek göz alanı ve pre-SMA kümesi (Nachev ve ark., 2008). Modelde HCP-MMP alanları 6mp, 6ma ve SCEF (Glasser ve ark., 2016) tek alt yapı olarak gösterilir.'
  ],
  functions: [
    'Bilişi eyleme bağlar; olası eylemlerin çevre tarafından tam belirlenmediği görevlere birincil motor alanlardan daha duyarlıdır (Nachev ve ark., 2008). [B]',
    'Elektriksel uyarım sıklıkla birden çok eklemi içeren karmaşık hareketler, bazı olgularda ise hareket etme "isteği" doğurur (Fried ve ark., 1991). [C]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
    'Tourette: 10 erişkinde tikten önceki 2 saniyede SMA\'nın da içinde olduğu paralimbik ağ etkindir (Bohlhalter ve ark., 2006); örneklem küçüktür. [C]',
    'DEHB: ketleme görevlerinin meta-analizinde SMA etkinliği azalmıştır, bu azalma çocuk örneklemlerinde görülür (Hart ve ark., 2013); grup bulgusudur, bireyde tanı koydurmaz. [A]'
  ],
  lesion: [
    'SMA\'yı içeren cerrahi çıkarımdan sonra genel akinezi ve konuşma durmasıyla başlayan üç evreli seyir (Laplane ve ark., 1977; 3 hasta). [C]'
  ],
  links: [
    'Anterior singulat ve insula (tik öncesi birlikte etkin)'
  ]
},

{
  id: 'lpm', parent: 'premotor', layer: 'surface', group: 'frontal', color: '#3fa5a2', reviewed: '2026-11-05',
  name: "Lateral Premotor Korteks", short: "Lateral PMC", latin: "Area praemotoria lateralis",
  summary: 'Hareketi planlar ve seçer; dorsal ve ventral premotor alanlarla frontal göz alanını içerir.',
  anatomy: [
    'Alan 6\'nın lateral bölümü ve komşuları: HCP-MMP alanları 6a, 6d, 6v, 6r, 55b, FEF, PEF (Glasser ve ark., 2016).'
  ],
  functions: [
    'Dorsal ve ventral premotor alanlar ayrı kortikal ağlar içinde motor planlama ve karar vermenin farklı yönlerine katılır (Hoshi ve Tanji, 2007; ağırlıklı olarak maymun verisi). [B]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
  ],
  lesion: [
  ],
  links: [
  ]
},

{
  id: 'ifg44', parent: 'broca', layer: 'surface', group: 'frontal', color: '#4fb1e0', reviewed: '2026-11-05',
  name: "Pars Opercularis (Alan 44)", short: "IFG 44", latin: "Pars opercularis gyri frontalis inferioris",
  summary: 'Solda Broca bölgesinin arka parçası; sağ yanı yanıt ketleme araştırmalarının başlıca hedefi.',
  anatomy: [
    'İnferior frontal girusun arka parçası: HCP-MMP alanı 44 (Glasser ve ark., 2016). Sitoarkitektonik çalışmada alan 44 her beyinde sol-sağ asimetriktir, hacmi kişiler arasında yaklaşık on katına kadar değişir (Amunts ve ark., 1999).'
  ],
  functions: [
    'Sağ IFG ve ketleme: sağ frontal hasarlı hastalarda stop-sinyali yanıt süresi uzar (Aron ve ark., 2003). Yorumu tartışmalıdır: yeni bir lezyon çalışması hasarın ketlemenin uygulanmasını değil başlatılmasını bozduğunu öne sürer (Choo ve ark., 2022). [B]',
    'Alan 44\'ün asimetrisi, konuşma üretiminin sola yerleşmesinin olası anatomik karşılığı olarak önerilmiştir (Amunts ve ark., 1999). [C]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
    'DEHB: ketleme görevlerinin meta-analizinde sağ alt frontal etkinlik azalmıştır; yaşa göre ayrımda bu azalma erişkinlerde görülür (Hart ve ark., 2013); grup bulgusudur, bireyde tanı koydurmaz. [A]',
    'Bipolar bozukluk: ENIGMA\'da en güçlü bölgesel etkilerden biri sol pars opercularis incelmesidir (d ≈ −0,29; Hibar ve ark., 2018). Etki küçüktür; grup bulgusudur, bireyde tanı koydurmaz. [A]'
  ],
  lesion: [
    'Broca\'nın iki tarihi hastasının beyninde yeni MR, lezyonların yüzeyden medial bölgelere belirgin biçimde uzandığını gösterir; bu nedenle Broca afazisi yalnız bu alanla açıklanmamalıdır (Dronkers ve ark., 2007). [B]'
  ],
  links: [
    'Pars triangularis (Alan 45)',
    'Üst temporal girus (dorsal akım)'
  ]
},

{
  id: 'ifg45', parent: 'broca', layer: 'surface', group: 'frontal', color: '#3598cc', reviewed: '2026-11-05',
  name: "Pars Triangularis (Alan 45)", short: "IFG 45", latin: "Pars triangularis gyri frontalis inferioris",
  summary: 'Bellekten gelen seçenekler arasından doğru olanı seçmeye yardım eder; solda Broca bölgesinin ön parçası.',
  anatomy: [
    'İnferior frontal girusun üçgen parçası: HCP-MMP alanı 45 (Glasser ve ark., 2016). Sitoarkitektonik sınırlar oluk çizgileriyle örtüşmez, bu yüzden yeri yalnız oluklardan güvenle okunamaz (Amunts ve ark., 1999).'
  ],
  functions: [
    'Sol orta ventrolateral prefrontal korteks (yaklaşık BA 45), geri çağrılan temsiller arasındaki yarışı çözer (Badre ve Wagner, 2007). [B]',
    'Bilişsel yeniden değerlendirme: 48 çalışmalık meta-analizde bilişsel kontrol bölgelerini ve lateral temporal korteksi etkinleştirir, iki yanlı amigdalayı düzenler (Buhle ve ark., 2014). [A]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
    'Sözel varsanı: 68 hastalık meta-analizde varsanı sırasında Broca bölgesi ve çevresindeki konuşma üretim alanları etkindir (Jardri ve ark., 2011); grup bulgusudur, bireyde tanı koydurmaz. [B]'
  ],
  lesion: [
  ],
  links: [
    'Pars opercularis (Alan 44)',
    'Orta ve alt temporal girus (yeniden değerlendirme)',
    'Amigdala (yeniden değerlendirmede işlevsel düzenleme)'
  ]
},

{
  id: 'fop', parent: 'broca', layer: 'surface', group: 'frontal', color: '#61b9e4', reviewed: '2026-11-05',
  name: "Frontal Operkulum", short: "FOP", latin: "Operculum frontale",
  summary: 'İnsulayı örten frontal duvar; görev kontrolü ve tat işlemeyle ilişkilidir.',
  anatomy: [
    'Sylvian yarığının frontal duvarı: HCP-MMP alanları FOP1, FOP3, FOP4, FOP5, AVI ve MI\'nin IFG bölgesine düşen kısmı (Glasser ve ark., 2016). Aynı alanların insula bölgesine düşen kısmı ön ve arka insula alt yapılarındadır. Yan yüzden görünmez; seçilince çevresi saydamlaşır.'
  ],
  functions: [
    'Görev kontrolü: fMRI ve TMS çalışmasında frontal operkulum, oksipitotemporal alanların etkinliğini dikkat edilen kategoriye göre ayarlar; TMS bu ayarı zayıflatır (Higo ve ark., 2011). [B]',
    'Ön insula ve frontal operkulum, görev boyunca sabit kümeyi sürdürmeyle ilişkilendirilen singulo-operküler ağın parçasıdır (Dosenbach ve ark., 2007). [B]',
    'Tat: görüntüleme derlemesinde tat odakları insula ile frontal ve parietal operkuluma yayılır (Small ve ark., 1999). [B]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
  ],
  lesion: [
  ],
  links: [
    'Ön insula',
    'Dorsal ACC (singulo-operküler ağ)',
    'Oksipitotemporal alanlar (dikkat ayarı)'
  ]
},

{
  id: 'audstg', parent: 'stg', layer: 'surface', group: 'temporal', color: '#e67d4a', reviewed: '2026-11-05',
  name: "Üst Temporal Girus ve İşitsel Korteks", short: "STG / A1", latin: "Gyrus temporalis superior et cortex auditorius",
  summary: 'Sesin ve konuşmanın kortekste ilk işlendiği yer: Heschl girusundaki birincil işitsel korteks ve çevresi.',
  anatomy: [
    'Transvers (Heschl) girus ve üst temporal girus: HCP-MMP alanları A1, MBelt, LBelt, PBelt, RI, 52, A4, A5, TA2, STGa (Glasser ve ark., 2016). Solda parietal operkulumun küçük bir kısmı en yakın alan kuralıyla bu alt yapıda kalır.',
    '7 Tesla fMRI\'da birincil işitsel korteksin iki ayna tonotopik haritası Heschl girusunun biçimini izler (Da Costa ve ark., 2011).'
  ],
  functions: [
    'Konuşma: erken analiz iki yanlı üst temporal girusta başlar, ardından anlamaya giden ventral akım ve artikülasyona giden dorsal akım ayrılır (Hickok ve Poeppel, 2007). [B]'
  ],
  tests: [
  ],
  development: [
    'Üst temporal korteks, 4–21 yaş arasında izlenen 13 sağlıklı çocukta olgunlaşan son bölgedir (Gogtay ve ark., 2004). [B]'
  ],
  clinical: [
    'Sözel varsanı: meta-analizde konuşma üretim alanlarının yanı sıra işitsel çağrışım korteksi de etkindir (Jardri ve ark., 2011); grup bulgusudur, bireyde tanı koydurmaz. [B]'
  ],
  lesion: [
  ],
  links: [
    'Üst temporal sulkus',
    'Frontal artikülasyon ağı (dorsal akım)'
  ]
},

{
  id: 'sts', parent: 'stg', parent2: 'itg', layer: 'surface', group: 'temporal', color: '#d96a34', reviewed: '2026-11-05',
  name: "Üst Temporal Sulkus", short: "STS", latin: "Sulcus temporalis superior",
  summary: 'Bakış, yüz hareketi, ses ve beden hareketi gibi sosyal ipuçlarının buluştuğu oluk.',
  anatomy: [
    'Üst ve orta temporal giruslar arasındaki oluk: HCP-MMP alanları STSda, STSdp, STSva, STSvp (Glasser ve ark., 2016). Büyük bölümü oluğun içindedir. Modelde iki duvarı üst temporal ve alt temporal bölgelere düşer; bu alt yapı ikisini birleştirir, iki ailede de görünür.'
  ],
  functions: [
    'Sosyal algı: maymun ve insanda göz, ağız, el ve beden hareketlerine yanıt verir; başkasının niyetini okumanın erken basamağı olarak önerilir (Allison ve ark., 2000). [B]',
    'Ses: üst duvar boyunca iki yanlı, insan sesine seçici alanlar bulunur (Belin ve ark., 2000). [B]',
    'Arkadan öne dizilen alt bölgeler farklı sosyal girdilere seçicidir; dil ile zihin kuramı, yüz ile ses yanıtları kısmen örtüşür (Deen ve ark., 2015). [B]'
  ],
  tests: [
  ],
  development: [
    'Yüz ve yer alanlarının aksine STS\'nin hacmi 7–11 yaş, 12–16 yaş ve erişkinler arasında sabit kalır (Golarai ve ark., 2007). [B]'
  ],
  clinical: [
    'Otizm: 5 erişkinlik ilk çalışmada sese seçici STS yanıtı görülmemiştir (Gervais ve ark., 2004); 16 erişkinlik sonraki çalışmada pasif dinlemede yanıt tipiktir, sağ arka STS/STG\'deki işlev bozukluğu ses kimliğini tanırken ortaya çıkar (Schelinski ve ark., 2016). Küçük örneklemler; grup bulgusudur, bireyde tanı koydurmaz. [C]'
  ],
  lesion: [
  ],
  links: [
    'Üst temporal girus',
    'Fusiform girus (yüz alanı)'
  ]
},

{
  id: 'tpole', parent: 'stg', parent2: 'itg', layer: 'surface', group: 'temporal', color: '#d9613c', reviewed: '2026-11-05',
  name: "Temporal Kutup", short: "TP", latin: "Polus temporalis",
  summary: 'Temporal lobun ön ucu; işlenmiş algıyı duygusal yanıtla ve kavram bilgisiyle bağladığı düşünülür.',
  anatomy: [
    'Temporal lobun ön ucu: HCP-MMP alanları TGd, TGv (Glasser ve ark., 2016). Modelde üst yüzü üst temporal, alt yüzü alt temporal bölgeye düşer; bu alt yapı ikisini birleştirir, iki ailede de görünür.',
    'Unsinat fasikül onu orbitofrontal korteksle bağlar; bu yolun temporal bellek temsillerini ödül ve ceza geçmişine göre ayarladığı öne sürülür (Von Der Heide ve ark., 2013).'
  ],
  functions: [
    'Sosyal ve duygusal işlem: yüz tanıma ve zihin kuramına katılır; işlenmiş algısal girdiyi visseral duygusal yanıtla bağladığı önerilir (Olson ve ark., 2007). [B]',
    'Anlam: ön temporal lob, kavram bilgisinin merkez ve dal modelinde merkezdir; model ağırlıkla semantik demans verisine dayanır (Patterson ve ark., 2007). [B]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
    'Şizofreni: ENIGMA\'da yaşla birlikte iki yanlı temporal kutup incelmesi kontrollerden daha güçlüdür (van Erp ve ark., 2018); grup bulgusudur, bireyde tanı koydurmaz. [A]'
  ],
  lesion: [
    'Semantik demans: belirgin odaksal temporal atrofiyle sözcük bulma ve tek sözcük anlama bozulur; fonoloji, dilbilgisi ve otobiyografik bellek görece korunur (Hodges ve ark., 1992; 5 hasta). [C]'
  ],
  links: [
    'Orbitofrontal korteks (unsinat fasikül)'
  ]
},

{
  id: 'fusiform', parent: 'itg', layer: 'surface', group: 'temporal', color: '#de6a53', reviewed: '2026-11-05',
  name: "Fusiform Girus", short: "FG", latin: "Gyrus fusiformis",
  summary: 'Yüzleri ve nesne biçimlerini tanımada görev alır; yüz alanı burada bulunur.',
  anatomy: [
    'Temporal lobun alt yüzü: HCP-MMP alanları FFC, VVC, V8, VMV1–3 (Glasser ve ark., 2016). Komşu PIT alanı modelde oksipital bölgeye düşer, bu alt yapıda değildir.'
  ],
  functions: [
    'Yüz: 15 kişinin 12\'sinde fusiform girusta yüzlere nesnelerden güçlü yanıt veren bölge bulunmuştur (Kanwisher ve ark., 1997). [B]',
    'Okuma: görsel sözcük biçim alanı, hemen yandaki sol lateral oksipitotemporal sulkustadır; okuma, nesne ve yüz tanıma için evrilmiş korteksi yeniden kullanır (Dehaene ve Cohen, 2011). [B]'
  ],
  tests: [
  ],
  development: [
    'Yüz alanı 7–11 yaştan erişkinliğe büyür; bu büyüme yüz tanıma belleğindeki gelişmeyle ilişkilidir (Golarai ve ark., 2007). [B]'
  ],
  clinical: [
    'Otizm: fusiform etkinliği, göze bakma süresiyle güçlü biçimde ilişkilidir; bildirilen düşük yanıtın bir kısmı az bakmayla açıklanıyor olabilir (Dalton ve ark., 2005); grup bulgusudur, bireyde tanı koydurmaz. [B]',
    'Bipolar bozukluk: ENIGMA\'da sol fusiform incelmesi en güçlü bölgesel etkiler arasındadır (d ≈ −0,29; Hibar ve ark., 2018). Etki küçüktür; grup bulgusudur, bireyde tanı koydurmaz. [A]'
  ],
  lesion: [
    'Edinsel prozopagnozi: sağ fusiform lezyonu olan hastalarda yüz özelliklerinin düzenindeki değişiklikleri fark etme bozulur (Barton ve ark., 2002). [C]'
  ],
  links: [
    'Üst temporal sulkus',
    'Parahipokampal korteks'
  ]
},

{
  id: 'ento', parent: 'itg', layer: 'surface', group: 'temporal', color: '#c64a33', reviewed: '2026-11-05',
  name: "Entorinal ve Peririnal Korteks", short: "EC / PRC", latin: "Cortex entorhinalis et perirhinalis",
  summary: 'Parahipokampal korteksten aldığı girdiyi hipokampusa iletir; konum ve tanıdıklık bilgisi taşır, Alzheimer patolojisinin erken durağıdır.',
  anatomy: [
    'Parahipokampal girusun ön kısmı: HCP-MMP alanları EC (entorinal) ve PeEc (peririnal, ektorinal) (Glasser ve ark., 2016).',
    'Parahipokampal korteksten büyük girdi alır, doğrudan hipokampusa iletir (Aminoff ve ark., 2013).'
  ],
  functions: [
    'Konum: sıçan medial entorinal korteksindeki ızgara hücreleri, ortamı eşkenar üçgenlerden oluşan bir ızgarayla haritalar (Hafting ve ark., 2005). [B]',
    'İnsanda 42 kişilik fMRI çalışmasında, en güçlü sağ entorinal korteksteki altı yönlü sinyal ızgara hücrelerine benzer bir temsile işaret eder; hücreleri doğrudan göstermez (Doeller ve ark., 2010). [B]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
    'Alzheimer: 83 beyinlik evreleme çalışmasında nörofibriler değişiklikler önce transentorinal bölgede, sonra entorinal kortekste görülür (Braak ve Braak, 1991); erişkin hastalığıdır. [B]'
  ],
  lesion: [
    'Peririnal korteksin büyük bölümünü alıp hipokampusu koruyan ameliyat sonrası tek olguda tanıdıklık zayıflar, anımsama korunur (Bowles ve ark., 2007). [C]'
  ],
  links: [
    'Hipokampus',
    'Parahipokampal korteks'
  ]
},

{
  id: 'phg', parent: 'itg', layer: 'surface', group: 'temporal', color: '#d9604a', reviewed: '2026-11-05',
  name: "Parahipokampal Korteks", short: "PHC", latin: "Cortex parahippocampalis",
  summary: 'Sahne ve bağlam bilgisini belleğe bağlar; parahipokampal yer alanını içerir.',
  anatomy: [
    'HCP-MMP alanları TF, PHA1–3, PreS, H (Glasser ve ark., 2016). Hipokampus gibi bellek bölgeleriyle fusiform gibi üst düzey görsel bölgelerin birleşim yerindedir (Aminoff ve ark., 2013).'
  ],
  functions: [
    'Yer: sahnelere seçici yanıt verir; belirleyici olan mekânın düzeni bilgisidir, boş odalar da eşit güçlü yanıt doğurur (Epstein ve Kanwisher, 1998). [B]',
    'Bağlam: görsel-mekânsal işlem ve epizodik bellekteki rolleri, bağlamsal çağrışımları işleyen bir ağın parçası olmasıyla birleştirilir (Aminoff ve ark., 2013). [B]'
  ],
  tests: [
  ],
  development: [
    'Yer alanı 7–11 yaştan erişkinliğe büyür; büyüme yer tanıma belleğiyle ilişkilidir (Golarai ve ark., 2007). [B]'
  ],
  clinical: [
  ],
  lesion: [
    'Topografik yön bulma bozukluğu tek tip değildir: farklı alanların hasarına bağlı türleri vardır, biri yeni çevreyi öğrenememedir (Aguirre ve D\'Esposito, 1999). [C]'
  ],
  links: [
    'Hipokampus',
    'Entorinal korteks',
    'Retrosplenial korteks',
    'Amigdala'
  ]
},

{
  id: 'mitg', parent: 'itg', layer: 'surface', group: 'temporal', color: '#cf523a', reviewed: '2026-11-05',
  name: "Orta ve Alt Temporal Girus", short: "MTG / ITG", latin: "Gyri temporales medius et inferior",
  summary: 'Kavram ve sözcük anlamının dağıtık ağındaki temporal düğüm.',
  anatomy: [
    'Temporal lobun dış ve alt yüzü: HCP-MMP alanları TE1a, TE1m, TE1p, TE2a, TE2p, PHT, PH ve A5\'in bu bölgeye düşen kısmı (Glasser ve ark., 2016).'
  ],
  functions: [
    'Anlam: 120 görüntüleme çalışmasının meta-analizinde sol ağırlıklı anlam ağının düğümlerinden biridir (Binder ve ark., 2009). [A]',
    'Yeniden değerlendirme: bilişsel kontrol, lateral temporal korteksteki anlam temsillerini değiştirerek amigdala etkinliğini azaltıyor olabilir (Buhle ve ark., 2014). [A]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
    'Şizofreni: ENIGMA\'da 4474 hastada korteks genel olarak incedir (d ≈ −0,53), bölgesel farklar buna eklenir (van Erp ve ark., 2018); grup bulgusudur, bireyde tanı koydurmaz. [A]'
  ],
  lesion: [
  ],
  links: [
    'Fusiform girus',
    'Pars triangularis (Alan 45)',
    'Temporal kutup'
  ]
},

{
  id: 'pcing', parent: 'pcc', layer: 'surface', group: 'limbiccx', color: '#bf5ea7', reviewed: '2026-11-05',
  name: "Posterior Singulat Korteks", short: "PCC", latin: "Cortex cingularis posterior",
  summary: 'Varsayılan mod ağının arka düğümü; yoğun bağlantılı ve metabolik olarak etkindir, bilişsel rolü tartışmalıdır.',
  anatomy: [
    'Singulat girusun arka kısmı ve retrosplenial korteks: HCP-MMP alanları RSC, 23c, 23d, d23ab, v23ab, 31pv, 31pd, 31a (Glasser ve ark., 2016). Ebeveyn bölgenin sınırları gereği orta singulatın arka alanları (p24pr, 24dd, 24dv, 33pr) ile 5m ve 5mv de bu alt yapıdadır.'
  ],
  functions: [
    'Yoğun bağlantılı ve metabolik olarak etkindir; rolü üzerinde uzlaşı yoktur. Bir öneriye göre dorsal bölümü dikkat odağını ayarlar (Leech ve Sharp, 2014). [B]'
  ],
  tests: [
  ],
  development: [
    'Varsayılan ağın bölgeleri 7–9 yaşta seyrek bağlıdır, gelişimle birbirine bağlı bir ağa dönüşür (Fair ve ark., 2008). [B]'
  ],
  clinical: [
    'Alzheimer, şizofreni, otizm, depresyon ve DEHB\'de anormallik bildirilir; bu nedenle tanıya özgü değildir (Leech ve Sharp, 2014). [B]',
    'DEHB: 20 erişkinde ön singulat ile posterior singulat ve prekuneus arasındaki dinlenim bağlantısı azalmıştır (Castellanos ve ark., 2008); grup bulgusudur, bireyde tanı koydurmaz. [C]'
  ],
  lesion: [
    'Retrosplenial bölgeyi ve singulum demetini içeren hasarda geriye ve ileriye dönük amnezi bildirilmiştir (Valenstein ve ark., 1987; tek olgu). Bölge inmeye karşı iyi korunduğundan odak lezyon verisi azdır (Leech ve Sharp, 2014). [C]'
  ],
  links: [
    'Hipokampus ve ön talamus (retrosplenial yol)',
    'Anterior singulat',
    'Prekuneus'
  ]
},

{
  id: 'prek', parent: 'pcc', layer: 'surface', group: 'limbiccx', color: '#cf78ba', reviewed: '2026-11-05',
  name: "Prekuneus", short: "Prekuneus", latin: "Praecuneus",
  summary: 'Medial parietal yüzde; görsel-mekânsal imgelem, anı geri çağırma ve kendilikle ilgili işlemlerde rol alır.',
  anatomy: [
    'Medial parietal yüz: HCP-MMP alanları 7m, PCV, POS1, POS2, 7Am, 7Pm, 7PL, DVT, 5L (Glasser ve ark., 2016). Modelde yalnız bu ebeveyndedir; 7Am ve 7PL\'nin üst parietal yüze taşan küçük parçaları üst parietal bölgede kalır.',
    'İnsan ve maymunda dinlenim bağlantısıyla üç bölüm ayrılır: önde duyusal-motor, ortada bilişsel, arkada görsel (Margulies ve ark., 2009).'
  ],
  functions: [
    'Görsel-mekânsal imgelem, epizodik bellek geri çağırma, kendilik işlemleri ve bilinçle ilişkilendirilir (Cavanna ve Trimble, 2006). [B]',
    'Ağ geçişleri: 188 kişide dinlenimde varsayılan mod ağına, görev sırasında sol frontoparietal ağa bağlantısı artar (Utevsky ve ark., 2014). [B]'
  ],
  tests: [
  ],
  development: [
  ],
  clinical: [
    'DEHB: 20 erişkinde prekuneus ile varsayılan ağın öteki bileşenleri arasındaki bağlantı azalmıştır (Castellanos ve ark., 2008); grup bulgusudur, bireyde tanı koydurmaz. [C]'
  ],
  lesion: [
  ],
  links: [
    'Posterior singulat korteks',
    'Üst parietal korteks ve motor korteks (ön bölüm)',
    'Varsayılan mod ağı ve sol frontoparietal ağ'
  ]
},

{
  id: 'pit', parent: 'hypothalamus', group: 'dien', color: '#bd80e0', deep: true, reviewed: '2026-11-05',
  name: "Hipofiz", short: "Hipofiz", latin: "Hypophysis (glandula pituitaria)",
  summary: 'Hipotalamusun komutunu kana çeviren bez: ACTH, prolaktin, büyüme hormonu ve arka lobdan oksitosin ile vazopressin.',
  anatomy: [
    'Sella tursikada, hipotalamusa sapla bağlıdır. Ön lob portal damarlarla, arka lob hipotalamik aksonlarla denetlenir.'
  ],
  functions: [
    'Stres ekseni: paraventriküler çekirdekten CRH, hipofizden ACTH, adrenal korteksten kortizol; kortizol geri bildirimle ekseni kapatır (Herman ve ark., 2016).',
    'Prolaktin: arkuat çekirdeğin dopamini hipofizdeki D2 reseptörleri üzerinden frenler (Fitzgerald ve Dinan, 2008).'
  ],
  tests: [
  ],
  development: [
    'Stres ekseninin yanıtı gelişimle değişir ve erken bakım ortamından etkilenir (Gunnar ve Quevedo, 2007). [B]'
  ],
  clinical: [
    'Antipsikotiklerle hiperprolaktinemi D2 etkisiyle ilişkilidir: amisülprid, risperidon ve paliperidonda en sık, aripiprazol ve ketiapinde en az (Peuskens ve ark., 2014). [B]'
  ],
  lesion: [
  ],
  links: [
    'Hipotalamus (arkuat, paraventriküler, supraoptik)',
    'Adrenal korteks (kanla)'
  ]
}

);
