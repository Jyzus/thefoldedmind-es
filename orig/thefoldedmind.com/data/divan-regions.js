/* Divandaki Yeşil Ceviz — Bölüm 20, "Nöroanatomik Korelasyon": I. Ana Bölgeler
   Metinler kitaptan aktarılmıştır. map: atlas bölgesi → kitap girdileri */
window.DIVAN = window.DIVAN || {};
window.DIVAN.book = {
  title: 'Divandaki Yeşil Ceviz',
  chapter: 'Bölüm 20 — Nöroanatomik Korelasyon'
};
window.DIVAN.chapters = {
  1: 'Faz 0 — Doğum Öncesi: Fetal Programlama', 2: 'Faz 1 — Temel (0–6 ay): Damasio, Freud; OKB ve otizm',
  3: 'Faz 2 — Derinleşme (6–12 ay): Winnicott, CARE ve PANIC/GRIEF, Klein', 4: 'Mahler: Ayrışma-Bireyleşme',
  5: 'Faz 3 — Entegrasyon (1–2 yıl): Schore, polivagal kuram, Fonagy, Bowlby', 6: 'Faz 4 — Sentez: Friston ve Solms',
  7: 'Faz 5 — İleri Entegrasyon: Stern’den Bion’a', 8: 'SEEKING ve PLAY', 9: 'RAGE', 10: 'FEAR Sistemi', 11: 'LUST Sistemi',
  12: 'Oral, Anal ve Fallik Dönemler', 13: 'Latent Dönem', 14: 'Genital Evre I: Olgun Aşk', 15: 'Genital Evre II: Kimlik ve Beden Şeması',
  16: 'Erikson: Sekiz Evre', 17: 'Anna Freud: Savunmalar', 18: 'Çocukta Travma ve PTSD', 19: 'Vaka Formülasyon Şablonu',
  20: 'Nöroanatomik Korelasyon', 21: 'Tanı Bazlı Analizler', 22: 'Araştırma Önerileri'
};
window.DIVAN.map = {
  pag: ['pag'], midbrain: ['pag', 'vta_nacc'], amygdala: ['amygdala'], bnst: ['bnst'], hypothalamus: ['hypothalamus'],
  vta: ['vta_nacc'], nacc: ['vta_nacc', 'bg'], ofc: ['ofc_vmpfc'], mpfc: ['ofc_vmpfc', 'pfc_dev'], dlpfc: ['pfc_dev'],
  hippocampus: ['hippocampus'], insula: ['insula'], acc: ['acc'], ipl: ['tpj_sts'], tpj: ['tpj_sts'], stg: ['tpj_sts'],
  vagal: ['vagal'], medulla: ['vagal'], cerebellum: ['cerebellum'], caudate: ['bg'], putamen: ['bg'], gp: ['bg']
};
window.DIVAN.entries = {
  pag: {
    title: 'PAG (periakuaduktal gri madde)',
    systems: ['RAGE', 'FEAR', 'PANIC/GRIEF', 'LUST', 'PLAY'], sysLabel: 'RAGE, FEAR, PANIC/GRIEF, LUST, PLAY',
    clinic: 'PTSD ve dissosiyasyon, seçici mutizm, depresyonda tükenme, EMDR hipotezi',
    role: 'Orta beyinde, üçüncü ve dördüncü ventrikülleri birbirine bağlayan serebral akuaduktu (Sylvius kanalı) çevreleyen gri madde halkası. Panksepp’in modelinde tüm duygusal sistemlerin ortak alarm/eylem merkezi — kolonlara (dorsomedial, dorsolateral, lateral, ventrolateral) ayrılmış, her kolon farklı bir duygusal-davranışsal program çalıştırıyor.',
    links: 'Dorsal kolonlar: RAGE (saldırı) ve FEAR’ın aktif savunma ucu. Lateral kolon: aktif kaçış, “savaş/kaç”. Ventrolateral kolon: donma, dorsal vagal ile örtüşen “ölü taklidi”. Ayrıca PANIC/GRIEF’in ayrılık çağrısı ve LUST’un bazı bileşenleri de PAG üzerinden geçiyor.',
    where: 'Solms’un bilinç tezi ve PAG kolonları (Bölüm 6, Şekil 6.1), EMDR hipotezi (Bölüm 6), FEAR sisteminin alt bölgelere ayrılması, kaçış–donma ayrımı ve savunma basamakları (Bölüm 10), RAGE devresi (Bölüm 9), PANIC/GRIEF’in ayrılık çağrısı (Bölüm 3), seçici mutizmde donma tepkisi (Bölüm 10), öğrenilmiş çaresizlik ve dorsal raphe (Bölüm 6).',
    note: 'PAG, kitaptaki en sık geçen tek yapı — bu tesadüf değil: Panksepp’in “duygular subkortikaldir” tezinin somut kanıtı. Farklı duygusal sistemlerin aynı bölgede, farklı kolonlarda kodlanmış olması, bunların birbirinden kesin sınırlarla ayrılmadığını, sıkışık bir mimaride komşu olduğunu gösteriyor — klinikte bir sistemin aşırı etkinleşmesinin komşu sistemi de tetiklemesinin (örneğin yoğun FEAR’ın RAGE’e sıçraması) anatomik zemini budur.'
  },
  amygdala: {
    title: 'Amigdala',
    systems: ['FEAR', 'RAGE'], sysLabel: 'FEAR, RAGE',
    clinic: 'Anksiyete, davranışsal inhibisyon, PTSD, duygusuz-katı özellikler',
    role: 'Temporal lobun medial ucunda, badem şeklinde çekirdek grubu. Tehdit tespiti, duygusal önem atama ve korku koşullanmasının merkezi; bazolateral, santral ve medial çekirdek grupları var; tehdit işlemede öne çıkan ikisi bazolateral ve santral çekirdek.',
    links: 'Bazolateral amigdala duyusal girdiyi (görme, işitme, koku) alıp değerlendiriyor; santral çekirdek çıktıyı hipotalamus ve PAG’a yönlendirip otonom/davranışsal tepkiyi başlatıyor. PFC’den (özellikle vmPFC) gelen yukarıdan aşağı projeksiyonlar amigdalayı frenliyor.',
    where: 'FEAR sisteminin PAG öncesindeki değerlendirme kademesi ve “alçak yol” (Bölüm 10), Kagan’ın davranışsal inhibisyonu (Bölüm 1 ve 10), fetal programlama (annenin kortizolünün fetal amigdala gelişimini etkilemesi; Bölüm 1), travma sonrası hipokampüs-amigdala dengesizliği (Bölüm 18), otizmde sosyal uyaranlara atipik amigdala yanıtı (Bölüm 7), duygulanım etiketlemenin amigdalayı yatıştırması (Bölüm 7), duygusuz-katı özelliklerde azalmış yanıt (Bölüm 9).',
    note: 'Amigdala “korku merkezi” olarak basitleştirilir ama aslında bir önem atama motoru: nötr bir uyaranı bile geçmiş deneyime göre tehlikeli işaretleyebiliyor. Bu, erken dönem CARE eksikliğinin neden sonradan genelleşmiş bir tetikte olma haline dönüştüğünü açıklıyor — amigdala “tehlikeli” etiketini dar bir bağlamdan öğrenip geniş bir bağlama yayıyor.'
  },
  bnst: {
    title: 'BNST (stria terminalisin yatak çekirdeği)',
    systems: ['FEAR', 'PANIC/GRIEF', 'CARE', 'LUST', 'RAGE'], sysLabel: 'FEAR (süreğen kaygı), PANIC/GRIEF, CARE, LUST, RAGE',
    clinic: 'Yaygın anksiyete, kronik stres',
    role: 'Amigdala ile hipotalamus arasında uzanan, “genişletilmiş amigdalanın” bir parçası sayılan çekirdek grubu. Amigdalanın santral çekirdeği yakın ve belirgin tehditlere hızlı (fazik) korku yanıtı verirken, BNST uzak, belirsiz ve öngörülemez tehditlere karşı süreğen (kalıcı) kaygı yanıtını yürütür (Davis ve ark., 2010). Bu ayrım kesin değil, ağırlık farkıdır; iki yapı birlikte “genişletilmiş amigdala” olarak çalışır.',
    links: 'Amigdala, hipotalamus (PVN), PAG ve beyin sapı otonom çekirdekleri; HPA ekseninin önemli bir düzenleyicisi.',
    where: 'Panksepp’in RAGE, CARE, PANIC/GRIEF ve LUST devrelerinin ortak istasyonu (Giriş, Tablo; Bölüm 3, 9, 11), kronik stres ile cinsel motivasyon arasındaki köprü (Bölüm 11).',
    note: 'FEAR ile “kaygı” arasındaki ayrım anatomik olarak da vardır: somut bir tehdide verilen korku ile “bir şey olacak” biçimindeki belirsiz, süreğen kaygı farklı devreleri ağırlıklı kullanır. Yaygın anksiyete ve “kötü bir şey olacak hissi” (Bölüm 3’teki PANIC tarifi) BNST ağırlıklı bir örüntüyle daha iyi açıklanabilir.'
  },
  hypothalamus: {
    title: 'Hipotalamus',
    systems: ['CARE', 'LUST', 'SEEKING'], sysLabel: 'CARE, LUST, SEEKING (homeostatik)',
    clinic: 'Stres yanıtı, ergenlik, beslenme sorunları',
    role: 'Diensefalonda, talamusun altında; otonom sinir sistemi ve endokrin sistemin ana kumanda merkezi. Tek bir yapı değil, işlevsel olarak uzmanlaşmış çok sayıda çekirdekten oluşuyor.',
    links: 'Paraventriküler çekirdek: oksitosin/vazopressin üretimi (CARE, LUST, bağlanma) ve HPA ekseninin başlangıcı (CRF salınımı). Lateral hipotalamus: SEEKING’in homeostatik senkronizasyonu (açlık, susuzluk). Ventromedial hipotalamus: LUST’un dişi devresi. Medial preoptik alan: LUST’un erkek devresi ve CARE’in bir kısmı.',
    where: 'CARE ve LUST’un hedef ekseni ayrımı (Bölüm 11), SEEKING’in açlıkla senkronizasyonu (Bölüm 8), HPA ekseni ile PANIC/GRIEF’in kortizol yükü (Bölüm 3, 5), fetal programlamada HPA ekseninin doğum öncesi ayarı (Bölüm 1), latent dönemde GnRH baskılanması ve ergenlikte uyanışı (Bölüm 13).',
    note: 'Hipotalamus, kitaptaki neredeyse her sistemin ortak paydası olarak çalışıyor — çünkü her duygusal sistemin bir bedensel/hormonal karşılığı olmak zorunda, ve bu karşılığı üreten nihai istasyon çoğunlukla hipotalamus. Farklı çekirdeklerin birbirine yakın olması, CARE ile LUST’un neden bu kadar kolay karışabildiğinin (örneğin ergenlikte) de bir parçası.'
  },
  vta_nacc: {
    title: 'VTA ve nucleus accumbens',
    systems: ['SEEKING', 'PLAY'], sysLabel: 'SEEKING, PLAY',
    clinic: 'Depresyon (anhedoni), DEHB, bağımlılık, mani',
    role: 'Ventral tegmental alan (orta beyinde) dopaminerjik hücre gövdelerinin kaynağı; nucleus accumbens (bazal önbeyinde) bu hücrelerin projekte ettiği, “isteme” sinyalinin üretildiği ödül merkezi.',
    links: 'Mezolimbik yolak (VTA → NAcc) motivasyon/istek sinyalini taşıyor; mezokortikal yolak (VTA → PFC) bu isteği hedefe yönelik plana çeviriyor. NAcc’ın kabuk (shell) ve çekirdek (core) alt bölgeleri farklı işlevlere sahip — kabukta hedonik sıcak noktalar, çekirdekte eylem seçimi.',
    where: 'SEEKING’in nöroanatomik yolağı (Bölüm 8), metilfenidatın etki mekanizması (Bölüm 8), depresyonda SEEKING’in sönmesi ve anhedoni (Bölüm 8), DEHB’de kronik düşük tonik dopamin hipotezi (Bölüm 7), PLAY’in ödül bileşeni (Bölüm 8), rüyayı başlatan dopaminerjik sistem (Bölüm 6), romantik aşkta ödül sistemi etkinleşmesi (Bölüm 14–15).',
    note: 'Bu devre kitapta defalarca farklı bağlamda karşımıza çıkıyor çünkü SEEKING, Panksepp’in deyişiyle diğer altı sistemin çoğunun üzerinde çalıştığı motor — RAGE, FEAR, LUST, CARE’in hepsi bir ölçüde SEEKING’i harekete geçiriyor ya da SEEKING’in sönmesiyle birlikte söndürülüyor.'
  },
  ofc_vmpfc: {
    title: 'OFC ve vmPFC',
    systems: [], sysLabel: 'Tümünün düzenlenmesi',
    clinic: 'OKB, borderline ve narsisistik örgütlenme, karar verme',
    role: 'Orbitofrontal korteks (gözlerin hemen üzerinde) ve ventromedial prefrontal korteks; duygusal değeri kodlayan, farklı sistemlerden gelen bilgiyi bütünleştiren, sosyal/ahlaki muhakemede rol oynayan prefrontal bölgeler.',
    links: 'Amigdaladan gelen tehdit sinyalini, hipokampüsten gelen bağlamsal bilgiyle, insuladan gelen bedensel durum bilgisiyle birleştirip “şu an gerçekten ne kadar tehlikedeyim” sorusuna bütünleşik bir cevap üretiyor. Amigdalaya ve PAG’a inhibitör projeksiyonlar gönderiyor.',
    where: 'Somatik işaretleyiciler ve Iowa Kumar Görevi (Bölüm 2), bütünleştirme kapasitesi (haset örneğinde üçüncü yol; Bölüm 3), OKB’de yanlış ayar (Bölüm 2 ve 12), narsisistik/antisosyal yapılarda bütünleştirme yetersizliği (Bölüm 3, 9), fallik ve latent dönemde ara tonsuz kimlik denemeleri (Bölüm 12–13), kontrol edilebilirliğin algılanması (Bölüm 6), tehdit yaklaştıkça vmPFC’den PAG’a kayma (Bölüm 10).',
    note: 'OFC, kitaptaki “olgunlaşma” temasının anatomik karşılığı — ilkel sistemler (PAG, amigdala, hipotalamus) doğuştan hazır çalışırken, OFC yıllarca süren deneyimle şekilleniyor. Kitap boyunca “bölme yerine bütünleştirme”, “ham tepki yerine düzenlenmiş tepki” dediğimiz her şeyin nöral karşılığı büyük ölçüde bu bölgenin olgunlaşma derecesi.'
  },
  hippocampus: {
    title: 'Hipokampüs',
    systems: ['FEAR'], sysLabel: 'FEAR’ın bağlamı',
    clinic: 'PTSD, yaygın anksiyete, çocukluk amnezisi',
    role: 'Temporal lobda, amigdalaya komşu; bağlamsal ve epizodik bellek, ayrıca HPA ekseni üzerinde olumsuz geri bildirim (kortizolü frenleme) işlevi gören yapı.',
    links: 'Amigdala ile yakın, çift yönlü bağlantılı — amigdala “bu tehlikeli” derken hipokampüs “ama bu bağlamda değil” diyerek dengeliyor. Kronik kortizole karşı özellikle savunmasız (glukokortikoid reseptör yoğunluğu yüksek; kronik stres dendritik atrofiye, nörogenezin azalmasına ve hacim küçülmesine yol açabiliyor).',
    where: 'Çocukluk amnezisi ve örtük bellek (Bölüm 2), kronik stresin bağlamsallaştırma kaybına yol açması (PTSD’de “her yer tehlikeli” hissi; Bölüm 10 ve 18), sönmenin bağlama bağlılığı ve yenilenme (Bölüm 10), HPA ekseni ile geri bildirim döngüsü (Bölüm 5), bilinçli bastırmada hipokampal etkinliğin azalması (Bölüm 17).',
    note: 'Hipokampüs-amigdala dengesi, kitaptaki “genelleşmiş tepki mi yoksa duruma özgü tepki mi” ayrımının anatomik zemini. Bu denge bozulduğunda (kronik kortizol yüküyle) sistem ayırt etmeyi bırakıp her uyaranı potansiyel tehdit olarak işlemeye başlıyor — anksiyete bozukluklarının ortak mekanizmalarından biri.'
  },
  insula: {
    title: 'İnsula',
    systems: [], sysLabel: 'Tümünün hissedilmesi',
    clinic: 'Aleksitimi, somatizasyon, otizmde interosepsiyon',
    role: 'Frontal, parietal ve temporal lobların arasında “gizli” beşinci lob; bedensel durumun (kalp atışı, mide, solunum) bilinçli farkındalığa (interosepsiyon) taşındığı ana istasyon.',
    links: 'Vagal afferent yolağın (10. kranyal sinir → NTS → parabrakial çekirdek → talamus) varış noktalarından biri. Anterior insula özellikle öznel duygusal deneyimle ilişkilendiriliyor — “ne hissettiğimi hissetmek.”',
    where: 'Damasio’nun somatik işaretleyici kuramı (Bölüm 2), aleksitimi ve otizmde empatik insula yanıtının aleksitimiyle ilişkisi (Bölüm 2), otizmde interosepsiyon farklılıkları (Bölüm 2, 7), canlılık biçimlerinin dorsal-santral insulada işlenmesi (Bölüm 7), polivagal kuramda bedensel durumun bilince raporlanması (Bölüm 5), beden şeması (Bölüm 15).',
    note: 'İnsula, kitaptaki “beden ile zihin arasındaki köprü” temasının en somut anatomik karşılığı. Bastırmanın “etki bedende kalıyor ama temsil edilmiyor” tezi, tam olarak insulanın bu işlevi yeterince yerine getirememesiyle ilgili — duyum var, ama insula onu bilinçli, adlandırılabilir bir duyguya çeviremiyor.'
  },
  acc: {
    title: 'ACC (anterior singulat korteks)',
    systems: ['PANIC/GRIEF'], sysLabel: 'PANIC/GRIEF',
    clinic: 'Sosyal acı, yas, OKB’de hata izleme',
    role: 'Frontal lobun iç yüzünde, korpus kallozumun hemen üzerinde şerit şeklinde bölge; çatışma izleme, hata tespiti, ayrılık/sosyal dışlanma acısının işlenmesi ve dikkat düzenlemesinde rol oynuyor.',
    links: 'Dorsal ACC bilişsel çatışma ve hata izlemeyle, subgenual/ventral ACC duygusal düzenleme ve ayrılık acısıyla ilişkili. PFC ve limbik yapılar arasında bir “trafik polisi” gibi çalışıyor.',
    where: 'PANIC/GRIEF’in sosyal ayrılık acısının fiziksel acıyla ortak devre paylaşması ve Cyberball deneyi (Bölüm 3), hasette dorsal ACC etkinliği (Bölüm 3), OKB’de hata tespit döngüsünün aşırı etkinliği (Bölüm 2), dikkat düzenlemesi ve DEHB (Bölüm 7).',
    note: 'ACC’nin hem “fiziksel acı” hem “sosyal ayrılık acısı” için kullanılıyor olması, kitaptaki PANIC/GRIEF tartışmasının merkezi iddiasını anatomik olarak destekliyor: kaybın acısı mecazi değil, gerçek anlamda acı sisteminin bir parçası. Örtüşmenin ne kadar olduğu tartışmalıdır: sonraki çalışmalar iki acının ACC’de komşu ama ayrışan örüntüler kullandığını gösterdi.'
  },
  tpj_sts: {
    title: 'TPJ ve STS (temporoparietal bileşke ve superior temporal sulkus)',
    systems: ['CARE', 'PLAY'], sysLabel: 'CARE ve PLAY’in sosyal yüzü',
    clinic: 'Otizm, mentalizasyon güçlükleri',
    role: 'TPJ, başkasının bakış açısını ve inançlarını temsil etme (zihin kuramı) ve bedenin uzamsal sahipliği için kritik bir bölgedir; STS ise biyolojik hareketi, bakış yönünü, yüz ifadesini ve ses tonunu sosyal anlama çevirir.',
    links: 'Medial PFC, precuneus ve temporal kutupla birlikte “zihinselleştirme ağını” oluşturur; STS görsel ve işitsel korteksten gelen sosyal bilgiyi amigdala ve prefrontal bölgelere taşır.',
    where: 'Mentalizasyonun nöroanatomisi (Bölüm 5), heteronom ahlak ve niyet değerlendirme (Bölüm 13), otizmde sosyal sinyal işleme (Bölüm 7), canlılık duygulanımları (Bölüm 7), beden şeması ve cinsiyet kimliği (Bölüm 15).',
    note: 'Bu bölgeler, “başkasının zihnini görebilme” kapasitesinin korteksteki karşılığıdır; ama kitabın ana tezine uygun olarak bu kapasite de önce bir başkasının bizi zihinselleştirmesiyle, ilişki içinde kurulur.'
  },
  vagal: {
    title: 'Vagal çekirdekler (dorsal motor nükleus ve nucleus ambiguus)',
    systems: ['CARE', 'FEAR'], sysLabel: 'CARE (ventral), FEAR (donma)',
    clinic: 'Dissosiyasyon, kapanma, cinsel işlev',
    role: 'Beyin sapında, medullada yer alan iki farklı parasempatik çıkış noktası; Porges’in polivagal kuramının anatomik temeli.',
    links: 'Dorsal motor nükleus: miyelinsiz, yavaş, diyafram altı organları (mide, bağırsak) düzenliyor; kurama göre aşırı tehdit altında masif deşarjla donma/çöküş üretiyor. Nucleus ambiguus: miyelinli, hızlı, diyafram üstü organları (kalp, larinks, farenks) ve yüz-boğaz kaslarıyla ilişkili sosyal bağlantı sistemini düzenliyor.',
    where: 'Polivagal kuramın tüm çerçevesi ve eleştirileri (Bölüm 5), nörosepsiyon, seçici mutizmde donma (Bölüm 10), terapötik ortamın güvenlik sinyalleri, orta kulak kaslarının terapist sesini seçmesi (Bölüm 5), inflamatuvar refleks (Bölüm 5).',
    note: 'İki farklı vagal çıkışın varlığı, “sakinlik” kelimesinin tek bir durum olmadığını gösteriyor — biri gerçek güvenlik/bağlantı sakinliği (ventral), diğeri çöküş/teslimiyet sakinliği (dorsal). Klinikte bir çocuğun “sakinleşmesi” aslında hangi sistemin devrede olduğuna göre çok farklı şeyler ifade edebiliyor; bu ayrım kitap boyunca tekrar eden bir uyarı.'
  },
  cerebellum: {
    title: 'Serebellum',
    systems: ['SEEKING', 'PLAY'], sysLabel: 'SEEKING, PLAY',
    clinic: 'OKB, tikler, alışkanlık haline gelmiş savunmalar',
    role: 'Beyincik; klasik olarak motor koordinasyonla ilişkilendirilse de, artık duygusal düzenleme, zamanlamalı öğrenme ve sosyal-bilişsel işlevlerde de rol oynadığı biliniyor.',
    links: 'Beyin sapı ve bazal ganglialarla bağlantılı; oyun davranışının motor koordinasyon ve kural öğrenme boyutunu destekliyor. Otomatikleşmiş, tekrarlayan davranış kalıplarının (prosedürel öğrenme) depolanmasında rol oynuyor.',
    where: 'Örtük bellek (Bölüm 2), PLAY sisteminin motor/kural öğrenme bileşeni (Bölüm 8), savunma mekanizmalarının zamanla otomatikleşmesi (Bölüm 17).',
    note: 'Serebellumun kitaptaki rolü sınırlı ama önemli bir noktayı destekliyor: tekrarlayan deneyim (oyun, terapi, alışkanlık) sadece “öğrenilmiyor”, gerçek anlamda motor/prosedürel bir devreye kodlanıyor — bu da tedavinin neden zaman aldığının bir başka anatomik gerekçesi.'
  },
  bg: {
    title: 'Bazal ganglia',
    systems: ['SEEKING', 'PLAY'], sysLabel: 'SEEKING, PLAY',
    clinic: 'OKB, tikler, alışkanlık haline gelmiş savunmalar',
    role: 'Striatum (kaudat, putamen, nucleus accumbens), globus pallidus ve substantia nigra’dan oluşan çekirdek grubu; alışkanlık öğrenimi, otomatikleşmiş davranış ve dopamin sinyaliyle eylem seçiminde merkezi rol oynuyor.',
    links: 'Nucleus accumbens aslında ventral striatumun bir parçası — VTA’dan gelen dopamin burada eylem seçimini şekillendiriyor. Kortiko-striato-talamo-kortikal döngüler, davranışın giderek daha otomatik hale gelmesini sağlıyor.',
    where: 'Kompulsiyonların otomatikleşmesi ve tedaviyle kaudat metabolizmasının değişmesi (Bölüm 2), tikler ve öncü dürtüler (Bölüm 9), kısayolların/refleksleşmiş tepkilerin bazal ganglia düzeyinde kodlanması ve alışkanlık haline gelmiş savunma mekanizmaları (Bölüm 17).',
    note: 'Bazal ganglia, kitaptaki “neden bir kalıp bu kadar inatçı” sorusunun cevaplarından biri — bir davranış (kompulsiyon, savunma, ilişki örüntüsü) yeterince tekrarlandığında, bilinçli/esnek PFC devresinden çıkıp otomatik, hızlı bazal ganglia devresine geçiyor; bu geçiş tedaviyi zorlaştıran ama aynı zamanda yeni, sağlıklı bir alışkanlığın da aynı yolla inşa edilebileceğini gösteren bir mekanizma.'
  },
  pfc_dev: {
    title: 'PFC’nin gelişimsel olgunlaşma zaman çizelgesi',
    systems: [], sysLabel: '',
    clinic: '',
    role: 'Prefrontal korteks, beynin en geç olgunlaşan bölgesi; dorsolateral (“soğuk” biliş, planlama) ve ventromedial/orbitofrontal (“sıcak” biliş, duygusal düzenleme) alt bölgeleri farklı hızlarda gelişiyor, olgunlaşma yirmili yaşların ortasına kadar sürüyor.',
    links: 'Amigdala ve diğer subkortikal yapılarla kurduğu inhibitör bağlantılar, miyelinizasyon ve sinaptik budama yoluyla yıllar içinde güçleniyor — bu yüzden küçük çocukta “düzenleme” büyük ölçüde dışarıdan (ebeveynin PFC’si) sağlanmak zorunda.',
    where: 'Yeterince iyi annenin dışsal PFC işlevi (Bölüm 3), anal dönemde PFC’nin ilk “fitness çalışması” (Bölüm 12), DEHB’de kortikal olgunlaşmanın gecikmesi (Bölüm 7), latent dönemde süperegonun içselleşmesi (Bölüm 13), ergenlikte risk alma davranışının nörogelişimsel zemini (Bölüm 11), Erikson’un kimlik krizinde PFC’nin rolü (Bölüm 15).',
    note: 'PFC’nin bu kadar geç olgunlaşması, kitabın çocuk/ergen psikiyatrisi eksenini anatomik olarak haklı çıkarıyor: bu kitapta anlatılan gelişim çizgisinin neredeyse tamamı, aslında PFC’nin ilkel sistemleri ne zaman, ne ölçüde düzenleyebildiğinin hikâyesi.'
  }
};
