/* Büyük ölçekli beyin ağları — Yeo 2011 yedi ağ atlası (1000 genç erişkinin dinlenim fMRI'ı; ThomasYeoLab/CBIG, MIT)
   ve çoklu talep (MD) çekirdeği (Assem ve ark., 2020; HCP-MMP1.0 alanları). Korteks köşeleri adım 3'te ağlara ayrılır
   (pipeline/networks.py): yeo = Yeo ağ numarası (1–7), md = çoklu talep çekirdeği. Kaynakların tam listesi:
   docs/bilgi/aglar.md. Ağ adları Türkçede de İngilizce (yerleşik Türkçe karşılıkları yok; kullanıcı 2026-10-08), tr: Türkçe açıklama
   (kartın alt satırında ve aramada). core/related: kartta gösterilen ve ağla ilişkili bölgeler (kortikal olmayanlar ağ atlasında yok). */
window.NEURO_NETWORKS = [

{
  id: 'dmn', yeo: 7, color: '#cd3e4e',
  name: 'Default Mode Network', tr: 'Varsayılan mod ağı', short: 'DMN', eng: 'Default mode network',
  summary: 'Dış dünyadan çekilince etkinleşen ağ: kendini düşünme, anılar, geleceği tasarlama ve başkalarının zihnini anlama.',
  anatomy: [
    'Ana düğümler: medial prefrontal korteks, posterior singulat ve prekuneus, angular girus (inferior parietal), lateral temporal korteks, hipokampal formasyon.',
    'Ön (mPFC: kendilik ve değer) ve arka (PCC/prekuneus: bellek ve sahne kurma) çekirdekler arasındaki bağlantı ağın omurgasıdır.',
    'Modelde Yeo 2011 yedi ağ atlasının "Default" ağı; korteksin en geniş ağı.'
  ],
  functions: [
    'Dinlenimde etkin, dışa dönük dikkat gerektiren görevlerde baskılanır; görevlerde sönmesi ilk kez PET çalışmalarında gösterildi (Shulman ve ark., 1997); "varsayılan mod" adını Raichle ve ark. (2001) verdi. [B]',
    'Otobiyografik bellek, geleceği zihinde canlandırma, kendine ilişkin düşünme ve zihin dolaşması (mind-wandering).',
    'Zihin kuramı: başkalarının inanç ve niyetlerini çıkarsama (dmPFC, TPJ ile birlikte).',
    'Görevlerde dikkat ağlarıyla ters (antikorelasyonlu) çalışır; bu dengeyi belirginlik ağı ayarlar (üçlü ağ modeli; Menon, 2011). [B]'
  ],
  development: [
    '7–9 yaşta ağın bölgeleri arasında bağlantı seyrek; ağ, gelişim boyunca tek bir bütünleşik sisteme dönüşür (Fair ve ark., 2008). [B]',
    'Asosiyasyon korteksinin parçası olarak en geç olgunlaşan ağlardandır; duyusal-motor ağların tersine uzun plastisite penceresi taşır (Sydnor ve ark., 2021). [B]'
  ],
  clinical: [
    'DEHB: dorsal ACC ile DMN arasındaki normalde ters olan ilişki zayıflamış (Castellanos ve ark., 2008); görev sırasında DMN yeterince baskılanamaz ve dikkat dalgalanır ("varsayılan mod girişimi"; Sonuga-Barke ve Castellanos, 2007). [B]',
    'Depresyon: DMN içinde ve DMN ile frontoparietal sistem arasında artmış bağlantı; içe dönük düşünceye (ruminasyon) kayma (Kaiser ve ark., 2015; 556 hasta). [A]',
    'Şizofreni: DMN aşırı etkin ve aşırı bağlı; görevde mPFC baskılanması zayıf. Aynı bulgu hastalığı olmayan birinci derece yakınlarda da var (Whitfield-Gabrieli ve ark., 2009; küçük örneklem). [C]',
    'OSB: DMN bağlantı farklılıkları bildirilmiş, yönü çalışmalar arasında tutarsız.'
  ],
  treatment: [
    'Stimülanlar DEHB\'li gençlerde görev sırasında DMN baskılanmasını sağlıklı düzeye getirir (Peterson ve ark., 2009). [B]',
    'Uzun süreli meditasyon pratiği olanlarda DMN çekirdeklerinin (mPFC, PCC) etkinliği daha düşük ve PCC\'nin kontrol bölgeleriyle bağlantısı daha güçlü (Brewer ve ark., 2011). Grup karşılaştırması; neden-sonuç değil. [C]',
    'Ruminasyon odaklı BDT ve davranışsal aktivasyon depresyonda DMN\'nin içe dönük işleyişini hedefler.'
  ],
  tests: [
    'Dinlenim fMRI bağlantısı (araştırma)',
    'Görev sırasında DMN baskılanması (ör. çalışma belleği görevleri)',
    'Zihin dolaşması örnekleme yöntemleri; zihin kuramı görevleri'
  ],
  links: ['Belirginlik ağı (ağlar arası geçiş)', 'Frontoparietal kontrol ağı (zor görevlerde birlikte çalışma)', 'Hipokampus (bellek alt sistemi)', 'Talamus mediodorsal çekirdek, serebellum Crus I–II'],
  core: ['mpfc', 'pcc', 'ipl', 'hippocampus'], related: ['tpj', 'itg', 'stg', 'cb_crus1', 'cb_crus2']
},

{
  id: 'fpn', yeo: 6, color: '#e69422',
  name: 'Frontoparietal Control Network', tr: 'Frontoparietal kontrol ağı', short: 'FPN', eng: 'Frontoparietal control network',
  summary: 'Esnek bilişsel kontrolün merkezi: göreve göre öteki ağlarla bağlantısını değiştirip hedefe yönelik davranışı düzenler.',
  anatomy: [
    'Ana düğümler: dorsolateral ve rostrolateral prefrontal korteks, inferior parietal lobül ve intraparietal sulkus çevresi, orta singulat ve prekuneusun bir kısmı.',
    'Yeo 2011 atlasının "Control" ağı; merkezi yürütücü ağ (central executive network) olarak da anılır.'
  ],
  functions: [
    'Esnek merkez (flexible hub): bütün beyinle bağlantısını görevden göreve en çok değiştiren ağ; yeni görevleri öğrenirken eski bağlantı örüntülerini yeniden kullanır (Cole ve ark., 2013). [B]',
    'Çalışma belleği, kural değiştirme, planlama ve bilişsel duygu düzenleme.',
    'Belirginlik ağıyla birlikte, dikkatin içe (DMN) ya da dışa (dikkat ağları) yönelmesini ayarlar (Menon, 2011). [B]'
  ],
  development: [
    'Yürütücü işlevler 10–15 yaşta hızla gelişir, 18–20 yaşta erişkin düzeyine ulaşır (Tervo-Clemmens ve ark., 2023). [A]',
    'Bebeklikte yüksek düzeyli ağlar dağınıktır ve ilk iki yılda giderek birbirine bağlanır; birincil duyusal ağlar ise doğumda erişkine benzer (Gao ve ark., 2015). [B]'
  ],
  clinical: [
    'Depresyon: frontoparietal ağ içinde ve dorsal dikkat ağıyla bağlantı azalmış; dikkatin içe kaymasıyla uyumlu (Kaiser ve ark., 2015). [A]',
    'Tanılar üstü: yürütücü işlev zayıflığı birçok bozuklukta ortaktır; belirginlik ağıyla birlikte ortak gri madde kaybı (Goodkind ve ark., 2015). [A]',
    'DEHB ve şizofrenide çalışma belleği ve bilişsel kontrol güçlüğü bu ağın işlevini yansıtır.'
  ],
  treatment: [
    'Depresyonda TMS hedefi sol DLPFC bu ağın düğümüdür; en etkili noktalar subgenual singulat ile ters bağlantılıdır (Fox ve ark., 2012). [B]',
    'Stimülanlar ve α2A agonistleri prefrontal kontrol düğümlerinin işlevini destekler (DLPFC kartı). [A]'
  ],
  tests: ['Wisconsin Kart Eşleme, İz Sürme B, n-back', 'Görev değiştirme (task switching) paradigmaları'],
  links: ['Varsayılan mod ağı', 'Dorsal dikkat ağı', 'Belirginlik ağı', 'Kaudat (bilişsel kortikostriatal döngü), talamus mediodorsal, serebellum Crus I'],
  core: ['dlpfc', 'ipl'], related: ['spl', 'acc', 'caudate', 'th_md', 'cb_crus1']
},

{
  id: 'md', md: true, color: '#2bbfd6',
  name: 'Multiple-Demand (MD) Core', tr: 'Çoklu talep çekirdeği', short: 'MD', eng: 'Multiple-demand network',
  summary: 'Zor olan hemen her görevde birlikte etkinleşen "genel amaçlı" çekirdek: akıcı zekâ ve problem çözmenin altyapısı.',
  anatomy: [
    'Her yarıkürede 10 HCP-MMP1.0 alanı: i6-8, p9-46v, a9-46v, 8C, IFJp (lateral prefrontal), 8BM/SCEF (medial frontal), AVI (ön insula), IP1, IP2 (intraparietal sulkus), PFm (inferior parietal) (Assem ve ark., 2020). Çevresinde 17 alanlık bir yarı-gölge (penumbra) bulunur. [B]',
    'Korteks dışında en güçlü etkinlik kaudat ve serebellumdadır (Assem ve ark., 2020). [B]',
    'Çoğu frontoparietal kontrol ağı içindedir ama üç başka dinlenim ağına da taşar; modelde Yeo ağlarından bağımsız ayrı bir katman olarak boyanır.'
  ],
  functions: [
    'Görev türünden bağımsız zorluk: çalışma belleği, akıl yürütme, görev değiştirme gibi çok farklı görevlerde zorluk arttıkça birlikte etkinleşir. [B]',
    'Akıcı zekâ: 80 lokal lezyonlu hastada akıcı zekâ kaybı yalnızca bu frontoparietal alanlardaki hasarla ilişkili bulundu (Woolgar ve ark., 2010). Dil alanlarının hasarı ise akıcı zekâyı etkilemiyor. [B]'
  ],
  development: [
    'Yürütücü işlevlerin olgunlaşma eğrisi (10–15 yaşta hızlı, 18–20 yaşta erişkin düzeyi) bu sistemin gelişimini yansıtır (Tervo-Clemmens ve ark., 2023). [A]'
  ],
  clinical: [
    'Prefrontal ya da parietal hasar sonrası "genel zekâ" kaybı bu çekirdeğe düşen lezyonlarla ilişkilidir (Woolgar ve ark., 2010). [B]',
    'Nöropsikolojik değerlendirmede akıcı akıl yürütme testlerindeki düşüş, dil ya da duyusal sorunlardan ayrı bir "çekirdek" bozukluğu düşündürür.'
  ],
  tests: ['Akıcı akıl yürütme: Raven Matrisleri, WISC-V Akıcı Akıl Yürütme alt testleri', 'Çalışma belleği ve görev değiştirme görevleri'],
  links: ['Frontoparietal kontrol ağı (büyük ölçüde örtüşür)', 'Belirginlik ağı (ön insula AVI)', 'Kaudat ve serebellum'],
  core: ['dlpfc', 'insula', 'ipl'], related: ['spl', 'mpfc', 'caudate', 'cb_crus1']
},

{
  id: 'sal', yeo: 4, color: '#c43afa',
  name: 'Salience / Ventral Attention Network', tr: 'Belirginlik ve ventral dikkat ağı', short: 'SN / VAN', eng: 'Salience / ventral attention network',
  summary: 'Önemli olanı fark eden ve dikkati oraya çeviren ağ: bedenden ve çevreden gelen belirgin sinyallere göre öteki ağlar arasında geçişi başlatır.',
  anatomy: [
    'Ana düğümler: ön insula ve frontal operkulum, dorsal anterior singulat, sağ temporoparietal bileşke, ventral frontal korteks.',
    'Belirginlik ağı tanımı: dorsal ACC ve orbital frontoinsular korteks çekirdekli, subkortikal ve limbik yapılarla güçlü bağlantılı ağ; yürütücü kontrol ağından ayrışır (Seeley ve ark., 2007). [B]',
    'Yeo 2011 atlasında belirginlik ve ventral dikkat ağları tek ağ ("Salience/Ventral Attention") olarak çıkar.'
  ],
  functions: [
    'Ağlar arası geçiş: sağ frontoinsular korteks, merkezi yürütücü ağın etkinleşmesini ve DMN\'nin sönmesini başlatır (Sridharan ve ark., 2008). [B]',
    'Beklenmedik ama önemli uyaranlara dikkatin yeniden yönlenmesi (ventral dikkat; Corbetta ve Shulman, 2002). [B]',
    'İnterosepsiyon ve duygusal belirginlik: bedensel durumun bilinçli duyguya dönüşmesi (insula), çatışma ve hata izleme (ACC).'
  ],
  development: [
    'Ön insula–ACC bağlantıları ergenlikte güçlenir (insula kartı); duygusal belirginliğe duyarlılık ergenlikte yüksektir.'
  ],
  clinical: [
    'Tanılar üstü ortak bulgu: psikiyatrik bozukluklarda gri madde kaybının en tutarlı olduğu yerler dorsal ACC ve iki taraflı ön insula; bu ağın zayıflaması yürütücü işlev güçlüğüyle ilişkili (Goodkind ve ark., 2015; 193 çalışma). [A]',
    'Anksiyete: dorsal ACC belirginlik düğümünün bağlantısı kaygı düzeyiyle ilişkili (Seeley ve ark., 2007). [C]',
    'Üçlü ağ modeli: belirginlik, yürütücü ve varsayılan mod ağları arasındaki dengesizlik depresyon, şizofreni, DEHB ve OSB\'de ortak bir mekanizma olarak öne sürülür (Menon, 2011). [B]',
    'Psikozda "aşırı anlam atfı" (aberrant salience): dopamin fazlalığıyla nötr uyaranların belirgin hale gelmesi (VTA kartı).'
  ],
  treatment: [
    'BDT\'de dikkat ve yorum yanlılıklarını hedefleyen teknikler ile interoseptif maruz bırakma bu ağın işlevine yöneliktir. [C]',
    'Derin TMS (H7 bobini, mPFC ve ACC) erişkin OKB\'de FDA onaylı (mPFC kartı). [A]'
  ],
  tests: ['Oddball paradigması', 'Posner ipucu görevi (geçersiz ipucu: yeniden yönelme)', 'Kalp atışı algılama (interosepsiyon)'],
  links: ['Amigdala, ventral striatum, hipotalamus (subkortikal belirginlik)', 'Frontoparietal kontrol ağı', 'Varsayılan mod ağı', 'Dorsal dikkat ağı'],
  core: ['insula', 'acc', 'tpj'], related: ['amygdala', 'nacc', 'broca']
},

{
  id: 'dan', yeo: 3, color: '#00760e',
  name: 'Dorsal Attention Network', tr: 'Dorsal dikkat ağı', short: 'DAN', eng: 'Dorsal attention network',
  summary: 'Amaca yönelik dikkati yöneten ağ: neye ve nereye bakılacağını yukarıdan aşağıya seçer, göz hareketlerini yönlendirir.',
  anatomy: [
    'Ana düğümler: frontal göz alanı (FEF), intraparietal sulkus ve superior parietal lobül, MT+ (hareket alanı).',
    'İki yarıkürede simetrik; ventral dikkat ağı ise sağda baskındır.'
  ],
  functions: [
    'Amaca yönelik (yukarıdan aşağıya) dikkat seçimi: superior parietal lobül, intraparietal sulkus ve FEF; beklenmedik uyaranlara yönelmeyi ise ventral sistem yürütür (Corbetta ve Shulman, 2002). [B]',
    'Uzamsal dikkat, görsel arama ve sakkad planlaması; görsel-uzamsal çalışma belleği.'
  ],
  development: [
    'Görsel dikkat ve sakkad kontrolü (ör. antisakkad) çocukluk boyunca gelişir, ergenlikte erişkin düzeyine yaklaşır.'
  ],
  clinical: [
    'İhmal sendromu: sağ ventral lezyonlar yapısal olarak sağlam dorsal parietal alanların etkinliğini de bozar; iyileşme iki yarıküre arasındaki dengenin yeniden kurulmasıyla paralel gider (Corbetta ve ark., 2005; 11 hasta). [C]',
    'Depresyon: frontoparietal ağ ile dorsal dikkat ağı arasında bağlantı azalmış (Kaiser ve ark., 2015). [A]',
    'DEHB ve gelişimsel koordinasyon bozukluğunda görsel-uzamsal dikkat ve görsel-motor bütünleştirme güçlükleri.'
  ],
  tests: ['Posner uzamsal ipucu görevi', 'Görsel arama, antisakkad', 'Çizgi bölme ve iptal testleri (ihmal)'],
  links: ['Ventral dikkat ve belirginlik ağı', 'Frontoparietal kontrol ağı', 'Görsel ağ (dorsal akım)', 'Superior kollikulus ve pulvinar'],
  core: ['spl', 'premotor'], related: ['ipl', 'itg', 'occipital', 'th_pul']
},

{
  id: 'smn', yeo: 2, color: '#4682b4',
  name: 'Somatomotor Network', tr: 'Duyusal-motor ağ', short: 'SMN', eng: 'Somatomotor network',
  summary: 'Bedeni hareket ettiren ve hisseden ağ; Yeo atlasında işitme korteksini de içerir. Doğumda en olgun ağlardandır.',
  anatomy: [
    'Ana düğümler: presentral ve postsentral giruslar (M1, S1), SMA, sekonder somatosensoriyel korteks ve posterior insula, superior temporal girustaki işitme korteksi.',
    'Yeo 2011 atlasının "Somatomotor" ağı.'
  ],
  functions: [
    'Hareketin yürütülmesi ve beden duyusu; iki yarıküredeki eş alanlar dinlenimde birlikte salınır. Dinlenim bağlantısı ilk kez el motor korteksinde gösterildi (Biswal ve ark., 1995). [B]',
    'İşitsel işleme (superior temporal girus) ve ağız-yüz hareketleriyle konuşmanın motor yönü.'
  ],
  development: [
    'Birincil duyusal-motor ağlar doğumda erişkine benzer biçimdedir (Gao ve ark., 2015). [B]',
    'Korteks olgunlaşması duyusal-motor alanlardan asosiyasyon kortekslerine doğru ilerler; bu ağ eksenin erken ucundadır (Sydnor ve ark., 2021). [B]'
  ],
  clinical: [
    'Serebral palsi, gelişimsel koordinasyon bozukluğu ve tik bozuklukları bu ağın düğümlerini ilgilendirir (motor, premotor ve putamen kartları).',
    'OSB\'de duyusal aşırı ya da az duyarlılık; fonksiyonel motor bozukluklar.'
  ],
  tests: ['Parmak vurma, Purdue Pegboard', 'Nörolojik yumuşak bulgular (PANESS)', 'Duyusal profil ölçekleri'],
  links: ['Putamen ve talamus ventral lateral (motor döngü)', 'Serebellum ön lob', 'Dorsal dikkat ağı'],
  core: ['motor', 'somato', 'premotor'], related: ['stg', 'insula', 'putamen', 'th_vld', 'cb_ant']
},

{
  id: 'vis', yeo: 1, color: '#781286',
  name: 'Visual Network', tr: 'Görsel ağ', short: 'VIS', eng: 'Visual network',
  summary: 'Oksipital lobun görsel alanları: görüntünün çözümlenmesinden nesne ve hareket algısına uzanan ilk basamaklar.',
  anatomy: [
    'Ana düğümler: birincil görme korteksi (V1, kalkarin sulkus), çevresindeki görsel alanlar (V2–V4) ve ventral oksipitotemporal korteksin arka kısmı.',
    'Yeo 2011 atlasının "Visual" ağı; dorsal akım dorsal dikkat ağına, ventral akımın ön kısmı varsayılan mod ve limbik ağlara komşudur.'
  ],
  functions: [
    'Görsel özelliklerin (kenar, renk, hareket) çözümlenmesi ve nesne tanımanın ilk basamakları.',
    'Okumayı öğrenmek görsel korteksin yanıtlarını, V1\'e kadar, değiştirir (Dehaene ve ark., 2010). [B]'
  ],
  development: [
    'Doğumda birincil görsel ağ erişkine benzer biçimdedir (Gao ve ark., 2015). [B]',
    'Görme gelişiminin kritik dönemleri: erken çocuklukta tedavi edilmeyen şaşılık ya da katarakt kalıcı göz tembelliğine yol açar.'
  ],
  clinical: [
    'Serebral (kortikal) görme bozukluğu: gelişmiş ülkelerde çocukluk çağı görme bozukluğunun en sık nedeni (oksipital lob kartı). [A]',
    'Migren aurası, oksipital epilepsiler; OSB\'de ayrıntı odaklı görsel işleme.'
  ],
  tests: ['Görme keskinliği ve görme alanı', 'Görsel algı testleri (ör. Beery VMI görsel algı alt testi)'],
  links: ['Dorsal dikkat ağı (dorsal akım)', 'Talamus lateral genikulat ve pulvinar', 'İnferior temporal ve fusiform korteks'],
  core: ['occipital'], related: ['itg', 'spl', 'th_pul']
},

{
  id: 'lim', yeo: 5, color: '#b9d77a',
  name: 'Limbic Network (Yeo)', tr: 'Limbik ağ', short: 'LIM', eng: 'Limbic network (Yeo 2011)',
  summary: 'Yeo atlasında orbitofrontal korteks ve temporal kutuptan oluşan ağ; adı limbik olsa da amigdala ve hipokampusu içermez.',
  anatomy: [
    'Ana düğümler: orbitofrontal korteks ve temporal kutup (ön ve alt temporal lob).',
    'Önemli uyarı: bu bölgeler hava-doku sınırlarına (sinüsler) komşu olduğu için standart fMRI\'da sinyal zayıftır; ağın tanımı bu yüzden belirsizdir. Yüksek sinyal kaliteli çok ekolu fMRI ile bu "limbik ağın" aslında genişletilmiş varsayılan mod ağının parçası olduğu öne sürülmüştür (Girn ve ark., 2024). [C]',
    'Klasik limbik sistem (amigdala, hipokampus, hipotalamus) korteks dışındadır ve bu ağ atlasında yer almaz.'
  ],
  functions: [
    'Orbitofrontal korteks: ödül ve cezanın değeri, tersine çevirme öğrenmesi (OFC kartı).',
    'Temporal kutup: kişiler ve nesneler hakkındaki anlamsal ve sosyal-duygusal bilgi.'
  ],
  clinical: [
    'OKB, madde kullanımı ve davranım bozukluğunda orbitofrontal değer hesaplaması (OFC kartı).',
    'Temporal lob epilepsisi ve temporal kutup hasarında sosyal-duygusal davranış değişiklikleri.'
  ],
  tests: ['Iowa Kumar Testi, tersine çevirme öğrenmesi', 'Yüz ve kişi tanıma, anlamsal bilgi testleri'],
  links: ['Amigdala ve hipotalamus', 'Varsayılan mod ağı', 'Ventral striatum'],
  core: ['ofc', 'itg'], related: ['amygdala', 'hippocampus', 'nacc']
}

];

window.NEURO_NETWORKS_NOTE = 'Ağ sınırları 1000 genç erişkinin grup ortalamasından (Yeo ve ark., 2011) gelir. Kişiden kişiye ağların yeri ve ' +
  'sınırı belirgin değişir (Gordon ve ark., 2017); çocuklarda ağlar henüz daha az ayrışmıştır. Renkler Yeo atlasının ' +
  'özgün renkleridir; limbik ağ açık zeminde görünsün diye biraz koyulaştırıldı.';
