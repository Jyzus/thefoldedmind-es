/* Bölge verileri — 1/4: Frontal lob ve anterior singulat
   Alanlar: anatomy, functions, tests, development, clinical, lesion, links
   links: sonraki aşamada etkileşimli yolak/transmitter katmanına dönüşecek */
(window.NEURO_REGIONS = window.NEURO_REGIONS || []).push(

{
  id: 'dlpfc', group: 'frontal', color: '#4f7fe0', reviewed: '2026-10-12',
  name: 'Dorsolateral Prefrontal Korteks', short: 'DLPFC',
  latin: 'Cortex praefrontalis dorsolateralis',
  summary: 'Yürütücü işlevlerin merkezi: bilgiyi zihinde tutar, işler, plan yapar ve davranışı hedefe göre yönlendirir; en geç olgunlaşan, ilaç ve TMS ile en çok hedeflenen kortikal bölgelerden biridir.',
  anatomy: [
    'Orta frontal girus ve superior frontal girusun lateral yüzü; Brodmann alanı (BA) 9 ve 46, kısmen 8.',
    'Arkada premotor korteks (BA 6), aşağıda inferior frontal sulkus ve inferior frontal girus, önde frontopolar korteks (BA 10) ile sınırlanır.',
    'Granüler (katman IV belirgin) asosiyasyon korteksi; uzun mesafeli ak madde yolaklarıyla (superior longitudinal fasikül) parietal kortekse bağlanır.',
    'Kanlanma: orta serebral arter (MCA) superior dalları; dorsomedial kenarda anterior serebral arter (ACA).',
    'Modeldeki sınır: HCP-MMP1.0 alanları 46, 9-46 (d, a-v, p-v), 8Av, 8Ad, 8C, 8BL, 9a, 9p, i6-8, s6-8, SFL ve inferior frontal sulkus–bileşke alanları (IFSa, IFSp, IFJa, IFJp). Medial yüze düşenler mPFC\'ye verilir (Glasser ve ark., 2016). Öğrenci için: "DLPFC" tek bir alan değil, bir alan ailesidir.'
  ],
  functions: [
    'Çalışma belleği: bilgiyi kısa süre aklında tutma ve üzerinde işlem yapma (manipülasyon).',
    'Planlama, ardışık adımlara bölme, problem çözme ve organizasyon.',
    'Bilişsel esneklik (kural/strateji değiştirme) ve soyut akıl yürütme.',
    'Dikkatin yukarıdan aşağıya (top-down) kontrolü, dikkat dağıtıcıların bastırılması.',
    'Duygu düzenlemede bilişsel yeniden değerlendirme (reappraisal).',
    'Sözel akıcılık ve üretkenlik (sol baskın); görsel-uzamsal çalışma belleği (sağ baskın).',
    'Çalışma belleği nörokimyası (ilaç etkisini anlamanın anahtarı): Noradrenalin, α2A reseptörü: dendritik dikenlerde cAMP–HCN kanallarını kapatarak prefrontal ağ bağlantısını güçlendirir; dikkat dağıtıcılara direnç artar. Guanfasinin etki düzeneği budur (Wang ve ark., 2007). [B] Dopamin, D1 reseptörü: ters-U ilişki; çok az da çok fazla da çalışma belleğini bozar (Arnsten). Stres altında katekolamin fazlalığı DLPFC\'yi "çevrimdışı" bırakır. [B]'
  ],
  tests: [
    'N-back ve sayı dizisi geri (Digit Span Backward)',
    'Wisconsin Kart Eşleme Testi (WCST) — perseveratif hatalar',
    'Londra Kulesi / Hanoi Kulesi — planlama',
    'İz Sürme Testi B (TMT-B), Stroop (ACC ile birlikte)',
    'Sözel akıcılık (harf akıcılığı: K-A-S)'
  ],
  development: [
    'Beynin en geç olgunlaşan bölgelerinden biridir; frontal gri madde hacmi geç çocuklukta zirve yapar, ergenlikte sinaptik budamayla kortikal incelme başlar.',
    'Miyelinizasyon ve frontoparietal bağlantıların güçlenmesi 20\'li yaşların ortasına kadar sürer.',
    'Ergenlikte ödül sistemine göre geç olgunlaşma ("dual systems / dengesizlik modeli") risk alma davranışını açıklamaya yardım eder.',
    'Duyusal-motor → asosiyasyon ekseni: korteks olgunlaşması duyu ve motor alanlardan asosiyasyon kortekslerine doğru ilerler. DLPFC bu eksenin geç ucundadır; uzamış plastisite hem öğrenme fırsatı hem psikopatoloji riski taşır (Sydnor ve ark., 2021). [B]',
    'Yürütücü işlevlerin olgunlaşması: 10.766 kişiyle (8–35 yaş) ortak bir eğri. 10–15 yaşta hızlı gelişme, 15–17\'de yavaşlama, 18–20 yaşta erişkin düzeyi (Tervo-Clemmens ve ark., 2023). Klinik karşılığı: ergende "yetişkin gibi" planlama beklentisi yaşa göre ayarlanmalı. [A]'
  ],
  clinical: [
    'DEHB: Frontostriatal devrelerde hipoaktivasyon; kortikal kalınlık zirvesine ulaşmada yaklaşık 3 yıllık gecikme, en belirgin prefrontalde (Shaw ve ark., 2007). [B] ENIGMA kortikal analiz (2246 hasta, 1934 kontrol): çocuklarda yüzey alanı daha küçük, en çok frontal, singulat ve temporal bölgelerde; ergen ve erişkinde fark bulunmadı (Hoogman ve ark., 2019). Shaw 2007\'deki olgunlaşma gecikmesi modeliyle uyumlu. [A] Etkiler küçüktür; tek bir hastada MR ile tanı konmaz.',
    'Erken başlangıçlı şizofreni: çalışma belleği görevlerinde DLPFC işlev bozukluğu (hipofrontalite).',
    'Depresyon: sol DLPFC hipoaktivitesi; rTMS hedef bölgesi. 15–21 yaş majör depresyonda ek tedavi olarak FDA onayı (2024).',
    'Özgül öğrenme güçlükleri ve yürütücü işlev sorunlarında okul performansıyla ilişki.'
  ],
  treatment: [
    'Stimülanlar (metilfenidat, amfetamin) ve atomoksetin prefrontalde dopamin ve noradrenalini artırır. Guanfasin α2A üzerinden doğrudan prefrontal ağı güçlendirir (Wang ve ark., 2007). [B]',
    'rTMS, ergen: NeuroStar, Mart 2024\'te 15–21 yaş majör depresyonda antidepresana ek tedavi olarak FDA onayı aldı. Ergenler için onaylı ilk TMS tedavisi. [A] (düzenleyici karar)',
    'Hedef seçimi: sol DLPFC\'de sgACC ile ters bağlantılı noktalar daha etkili; en iyi koordinatlar BA 46\'da (Fox ve ark., 2012). [B]',
    'SAINT (hızlandırılmış, fMRI rehberli iTBS, 5 gün): dirençli depresyonda remisyon %78,6\'ya karşı plasebo %13,3 (Cole ve ark., 2022; 14\'e karşı 15 hasta, erişkin). FDA onayı 2022. Ergenlerde henüz araştırma aşamasında. [B]'
  ],
  lesion: [
    'Disegzekütif sendrom: planlama ve organizasyon bozukluğu, perseverasyon.',
    'Çalışma belleği kapasitesinde azalma, dikkat dağınıklığı.',
    'Strateji geliştirememe; davranışın çevresel uyaranlara bağımlı hale gelmesi.'
  ],
  links: ['Kaudat nükleus (bilişsel/dorsolateral frontostriatal döngü)', 'Talamus — mediodorsal çekirdek', 'Posterior parietal korteks (frontoparietal kontrol ağı)', 'Anterior singulat korteks', 'Serebellum (Crus I/II) — bilişsel serebellar döngü', 'Mezokortikal dopamin (VTA), noradrenalin (locus coeruleus)', 'Subgenual singulat (sgACC): ters (negatif) bağlantı; depresyonda TMS hedefinin başarısı bu ters bağlantının gücüyle ilişkili (Fox ve ark., 2012)']
},

{
  id: 'ofc', group: 'frontal', color: '#7a6ae6', sub: 'surface', reviewed: '2026-10-12',
  name: 'Orbitofrontal Korteks', short: 'OFC',
  latin: 'Cortex orbitofrontalis',
  summary: 'Ödül ve cezanın değerini hesaplar; beklentiye göre davranışı esnek biçimde günceller ve sosyal uygunluğu denetler.',
  anatomy: [
    'Frontal lobun orbita üzerindeki ventral yüzü: gyrus rectus (medial), orbital giruslar, olfaktör sulkus.',
    'BA 11, 12/47 (lateral orbital), 13 ve 14; lateral kısmı inferior frontal girusun pars orbitalis bölümüne uzanır.',
    'Sekonder olfaktör ve gustatuvar korteks; tat, koku, görsel ve iç beden bilgilerinin birleştiği alan.',
    'Kanlanma: ACA (medial orbitofrontal dal) ve MCA (lateral orbitofrontal arter).'
  ],
  functions: [
    'Uyaranların ödül/ceza değerinin kodlanması ve beklenen–gerçekleşen sonuç karşılaştırması.',
    'Tersine çevirme öğrenmesi: uyaran–pekiştireç ilişkisi değişince davranışı güncelleme.',
    'Duygusal karar verme (somatik belirteç hipotezi, vmPFC ile birlikte).',
    'Sosyal davranışın bağlama uygunluğu, dürtüsel yanıtların ketlenmesi.',
    'Koku ve tat bilgisinin hedonik değerle birleştirilmesi.'
  ],
  tests: [
    'Iowa Kumar Testi (IGT) — çocuk sürümleri mevcut',
    'Olasılıksal tersine çevirme öğrenmesi (reversal learning)',
    'Gecikmeli indirim (delay discounting)',
    'Go/No-Go ve sosyal karar oyunları (Ültimatom oyunu)'
  ],
  development: [
    'Yavaş olgunlaşır; ergenlikte ödül duyarlılığı yüksekken OFC\'nin düzenleyici katkısı henüz tam değildir.',
    'Erken yaşam olumsuzlukları (ihmal, istismar) OFC hacmi ve işleviyle ilişkilendirilmiştir.',
    'Kendini kontrol ve ödülü erteleme becerisi okul çağı boyunca belirgin şekilde gelişir.'
  ],
  clinical: [
    'OKB: kortiko-striato-talamo-kortikal (KSTK) devrede OFC hiperaktivitesi; tedavi yanıtıyla azalır.',
    'Davranım bozukluğu ve duygusal-katılık (CU) özellikleri: ödül/ceza öğrenmesinde OFC/vmPFC işlev bozukluğu.',
    'Madde kullanımı: ödül değerinin bozulması, kompulsif kullanım.',
    'DEHB: gecikme kaçınması, büyük-geç ödül yerine küçük-hemen ödülü seçme.',
    'Yeme bozuklukları: ödül ve tat işlemede farklılıklar.',
    'OKB\'de yapısal büyük örneklem (ENIGMA-OKB; 1905 hasta, 1760 kontrol): çocuklarda inferior ve superior parietal korteks ince, erişkinde parietal incelme ve temporal yüzey alanı azalması; etkiler küçük (d −0,10 ile −0,33). İlaç kullananlarda frontal farklar daha yaygın. OFC hiperaktivitesi işlevsel bir bulgudur; yapısal olarak en tutarlı fark parietaldir (ENIGMA-OKB, 2018). [A]'
  ],
  treatment: [
    'OKB\'de birinci basamak: maruz bırakma ve tepki önleme (ERP) içeren BDT ve SSRI; ikisinin birlikte kullanımı orta ve ağır çocukluk çağı OKB\'sinde sık. Etkili tedaviyle OFC–kaudat hiperaktivitesi azalır. [A]',
    'Derin TMS (H7 bobini, mPFC ve ACC): erişkin dirençli OKB\'de FDA onaylı (2018); ayrıntı mPFC kartında. [A]',
    'Gecikmeli indirim ve dürtüsellik hedefli müdahaleler (olumsallık yönetimi, ödül erteleme eğitimi) DEHB ve madde kullanımında OFC\'nin değer hesaplamasını kullanır.'
  ],
  lesion: [
    '"Psödopsikopatik" tablo: disinhibisyon, sosyal uygunsuzluk, dürtüsellik; klasik örnek Phineas Gage.',
    'Moria / Witzelsucht (uygunsuz şakacılık), iddiacılıkta artış.',
    'Anosmi (olfaktör yollara yakınlık).'
  ],
  links: ['Amigdala (duygusal değer)', 'Nükleus akumbens / ventral striatum (limbik döngü)', 'Kaudat başı (OFC–striatal döngü, OKB)', 'Talamus — mediodorsal çekirdek', 'İnsula ve hipotalamus', 'Dopamin (VTA), serotonin (rafe)']
},

{
  id: 'mpfc', group: 'frontal', color: '#9b6fd6', sub: 'surface', reviewed: '2026-10-12',
  name: 'Medial & Frontopolar Prefrontal Korteks', short: 'mPFC',
  latin: 'Cortex praefrontalis medialis',
  summary: 'Kendilik ve başkalarının zihnini temsil eder; amigdalayı düzenleyerek korkunun sönmesini ve duygusal dengeyi sağlar.',
  anatomy: [
    'Superior frontal girusun medial yüzü ve frontal kutup; BA 10 ve medial BA 9.',
    'Ventromedial kısım (vmPFC) BA 10–11–32 alt bölümlerini kapsar; subgenual singulat (BA 25) ve OFC ile komşudur.',
    'Dorsomedial PFC (dmPFC) zihinselleştirme, vmPFC değer ve duygu düzenleme ile öne çıkar.',
    'Kanlanma: ACA (frontopolar ve medial orbitofrontal dallar).'
  ],
  functions: [
    'Kendilik referanslı düşünme; varsayılan mod ağının (DMN) ön merkezi.',
    'Zihin kuramı (theory of mind): başkalarının niyet ve inançlarını çıkarsama (dmPFC).',
    'Amigdala üzerinde inhibitör kontrol; korku sönmesinin (extinction) hatırlanması (vmPFC).',
    'Değere dayalı karar verme, ahlaki yargı.',
    'Frontopolar: çoklu görev yönetimi, ileriye dönük bellek, alt hedefler arasında geçiş.'
  ],
  tests: [
    'Yanlış inanç görevleri (Sally-Anne), Faux Pas testi',
    'Gözlerden Zihin Okuma Testi (RMET — çocuk sürümü)',
    'Korku koşullama ve sönme paradigmaları',
    'Altı Öğe Testi (BADS-C) — çoklu görev'
  ],
  development: [
    'Amigdala–mPFC bağlantısı küçük çocuklukta pozitiften ergenlikte negatif (düzenleyici) yöne kayar (Gee ve ark., 2013).',
    'Ergenlikte sosyal-bilişsel görevlerde mPFC aktivitesi yetişkinden yüksektir ve yaşla azalır ("sosyal beyin" gelişimi).',
    'Akran değerlendirmesine duyarlılık ergenlikte zirve yapar.'
  ],
  clinical: [
    'Otizm spektrum bozukluğu (OSB): zihinselleştirme görevlerinde mPFC aktivasyon farklılıkları.',
    'Anksiyete ve TSSB: vmPFC\'nin amigdalayı yetersiz düzenlemesi, sönme belleğinde zayıflık. Sağlıklı erişkinlerde vmPFC (medial OFC) daha kalın olanlar söndürülmüş korkuyu ertesi gün daha iyi hatırladı (Milad ve ark., 2005; 14 kişi). Küçük örneklem, öncü bulgu. [C]',
    'Depresyon: dinlenim bağlantısı meta-analizinde (556 hasta, 518 kontrol) frontoparietal kontrol ağı içinde ve dikkat ağıyla bağlantı azalmış; varsayılan mod ağı (mPFC dahil) ile bağlantı artmış. İçe dönük düşünceye (ruminasyon) kayma ve dış dünyadan çekilmeyle uyumlu (Kaiser ve ark., 2015). [A]',
    'Davranım bozukluğu (CU özellikleri): empati ve ahlaki karar süreçlerinde vmPFC farklılıkları.'
  ],
  treatment: [
    'Maruz bırakma terapisi, vmPFC\'ye dayanan sönme öğrenmesini kullanır; yeni "güvenli" öğrenme eski korku belleğini silmez, onunla yarışır. Bu yüzden nüks ve bağlam değişikliğinde korku geri gelebilir. [B]',
    'D-sikloserin (NMDA kısmi agonisti) ile maruz bırakmayı güçlendirme: 21 çalışmanın bireysel veri meta-analizinde (1047 kişi) etki küçük ve yalnızca tedavi sonunda; klinik olarak anlamlı sayılmadı (Mataix-Cols ve ark., 2017). [A]',
    'Derin TMS (H7 bobini, mPFC ve ACC): erişkin OKB\'de ek tedavi olarak FDA onaylı (Ağustos 2018); 6 haftada yanıt oranı yaklaşık %38\'e karşı sahte uyarımda %11. Her seanstan önce kişiye özgü belirti kışkırtması yapılır. [A]'
  ],
  lesion: [
    'vmPFC: duygusal karar verme bozukluğu (IGT\'de riskli seçimler), sosyal yargı ve empatide azalma.',
    'dmPFC / bilateral medial: apati, abuli, spontan davranışta azalma.'
  ],
  links: ['Amigdala (top-down düzenleme)', 'Hipokampus (bağlamsal bellek, sönme)', 'Posterior singulat / prekuneus (DMN)', 'Hipotalamus ve PAG (otonomik yanıt)', 'Nükleus akumbens', 'Serotonin (rafe), dopamin (VTA)']
},

{
  id: 'broca', group: 'frontal', color: '#3fa5d8', sub: 'surface', reviewed: '2026-10-12',
  name: 'Broca Alanı (İnferior Frontal Girus)', short: 'Broca / IFG',
  latin: 'Gyrus frontalis inferior — pars opercularis et triangularis',
  summary: 'Konuşma üretimi, sözdizimi ve sözel çalışma belleği; sağ homoloğu yanıt ketlemede rol alır.',
  anatomy: [
    'İnferior frontal girusun pars opercularis (BA 44) ve pars triangularis (BA 45) bölümleri.',
    'Dil işlevleri sağ ellilerin yaklaşık %95\'inde, solakların ~%70\'inde sol hemisferde lateralizedir.',
    'Arkuat fasikül ve superior longitudinal fasikül ile Wernicke alanına bağlanır.',
    'Kanlanma: MCA superior bölümü.'
  ],
  functions: [
    'Konuşmanın motor planlaması ve artikülasyon sırası.',
    'Sözdizimi (sentaks) ve karmaşık cümle yapılarının işlenmesi.',
    'Sözel çalışma belleği (fonolojik döngü — artikülatör tekrar).',
    'Anlamsal seçim ve sözcük erişimi (BA 45).',
    'Taklit ve eylem anlama (ayna nöron sistemi, BA 44).',
    'Sağ IFG: yanıt ketleme ("dur" sinyali), duygusal prozodi.'
  ],
  tests: [
    'Harf akıcılığı, Boston Adlandırma Testi',
    'Cümle tekrarı, dilbilgisi anlama testleri',
    'Stop-Signal ve Go/No-Go görevleri (sağ IFG)'
  ],
  development: [
    'Arkuat fasikülün miyelinizasyonu doğumda zayıftır, çocukluk boyunca artar.',
    'Karmaşık sözdizimi işlemenin olgunlaşması okul yıllarına uzanır.',
    'Erken sol hemisfer hasarında dil işlevleri sağ hemisfere kayabilir (erken plastisite).'
  ],
  clinical: [
    'Gelişimsel dil bozukluğu (GDB): okula başlangıçta 7.267 çocukluk taramada yaklaşık %7,6 (her 30 kişilik sınıfta iki çocuk); zekâ geriliği ya da tıbbi tanıyla ilişkili dil bozukluğu ayrıca %2,3 (Norbury ve ark., 2016). Sol IFG\'de yapısal ve işlevsel farklılıklar. Sık ama az tanınır; dikkat ve davranış sorunu sanılabilir. [A]',
    'Kekemelik: sol IFG ve ilgili ak madde yolaklarında farklılıklar, sağ hemisferde aşırı aktivasyon.',
    'DEHB: sağ IFG hipoaktivasyonu, yanıt ketleme güçlüğü.',
    'Tourette: ketleyici kontrol ağlarının bir parçası olarak sağ IFG.'
  ],
  treatment: [
    'Gelişimsel dil bozukluğunda dil ve konuşma terapisi; okul desteği ve sınıf içi uyarlamalar. Okuma güçlüğü ve sosyal-duygusal sorunlar açısından izlem.',
    'Okul öncesi kekemelik: Lidcombe programı (ebeveyn yürütür, akıcı konuşmayı övme ve kekemeliği nazikçe düzeltme) 3–6 yaş 54 çocukta 9. ayda kekeme hece oranı Lidcombe grubunda %1,5, kontrol grubunda %3,9 idi (Jones ve ark., 2005). Erken müdahaleyi destekler. [B]',
    'DEHB\'de yanıt ketlemesi (sağ IFG): stimülanlar ve atomoksetin sağ IFG etkinliğini artırır; ayrıntı STN ve DLPFC kartlarında. [B]'
  ],
  lesion: [
    'Broca afazisi: akıcı olmayan, telgraf tarzı konuşma, agramatizm; anlama görece korunur, tekrar bozulur.',
    'Konuşma apraksisi, yazma bozukluğu.'
  ],
  links: ['Wernicke alanı (arkuat fasikül — dorsal dil yolu)', 'Premotor korteks / SMA', 'Bazal ganglionlar (konuşma başlatma)', 'Sağ IFG → subtalamik çekirdek (hiperdirekt ketleme yolu)']
},

{
  id: 'premotor', group: 'frontal', color: '#4cb3b0', sub: 'surface', reviewed: '2026-10-12',
  name: 'Premotor Korteks & SMA', short: 'PMC / SMA',
  latin: 'Area praemotoria et area motoria supplementaria',
  summary: 'Hareketi planlar ve sıraya koyar; içsel olarak başlatılan eylemleri, iki elin uyumunu ve göz hareketlerini yönetir.',
  anatomy: [
    'BA 6: lateralde premotor korteks (PMC), medial yüzde suplementer motor alan (SMA) ve önünde pre-SMA.',
    'Frontal göz alanı (FEF) BA 8 içinde, premotor korteksin önünde yer alır.',
    'Primer motor korteksin hemen önünde; kortikospinal yola da lif gönderir.',
    'Kanlanma: lateral kısım MCA, medial SMA ACA.'
  ],
  functions: [
    'Hareketin planlanması ve hazırlanması; dış ipuçlarıyla yönlendirilen hareket (lateral PMC).',
    'İçsel başlatılan ve ardışık (sekans) hareketler (SMA).',
    'Bimanuel koordinasyon ve motor öğrenme.',
    'Eylem anlama ve taklit (ventral PMC — ayna nöron sistemi).',
    'Pre-SMA: yanıt seçimi ve ketleme.',
    'FEF: istemli sakkadlar ve görsel dikkatin yönlendirilmesi.'
  ],
  tests: [
    'Luria motor sekansı (yumruk–kenar–avuç)',
    'Ardışık parmak vurma, Purdue Pegboard',
    'Antisakkad görevi (FEF)',
    'Praksis değerlendirmesi, nörolojik yumuşak bulgular (PANESS)'
  ],
  development: [
    'İnce motor beceriler ve sekans öğrenmesi okul çağında hızla gelişir.',
    'Ayna hareketleri (mirror movements) normalde ~10 yaşa kadar belirgin şekilde azalır; korpus kallozum olgunlaşmasıyla ilişkilidir.'
  ],
  clinical: [
    'Tourette ve kronik tik bozuklukları: SMA hiperaktivitesi, tik öncesi dürtü (premonitor dürtü) ağının parçası.',
    'Gelişimsel koordinasyon bozukluğu (DKB): motor planlama güçlüğü.',
    'DEHB: artmış ayna hareketleri, motor ketleme farklılıkları.',
    'OSB: taklit ve motor planlama (dispraksi) farklılıkları.'
  ],
  treatment: [
    'Gelişimsel koordinasyon bozukluğu: görev odaklı yaklaşımlar (çocuğun gerçek hayattaki zorlandığı beceriyi doğrudan çalışma; ör. CO-OP, nöromotor görev eğitimi) ve motor temelli müdahaleler; meta-analizde ortalama etki büyük (d ≈ 1,06) ancak çalışmaların kalitesi sınırlı (Smits-Engelsman ve ark., 2018). [B]',
    'Tik öncesi dürtü (SMA ve insula): CBIT dürtüyü fark etmeyi ve karşıt yanıtı öğretir; ayrıntı putamen kartında. [A]',
    'DEHB ve DKB birlikteliği sıktır; motor güçlükler el yazısı ve spor katılımını etkiler, ergoterapi ve okul uyarlamaları gerekir.'
  ],
  lesion: [
    'SMA sendromu: istemli hareket ve konuşma başlatmada azalma (geçici akinezi).',
    'Yabancı el sendromu (medial frontal), ideomotor apraksi.',
    'FEF lezyonu: kontralateral sakkad bozukluğu, gözlerin lezyon tarafına deviasyonu.'
  ],
  links: ['Primer motor korteks', 'Putamen (motor döngü)', 'Talamus — VA/VL çekirdekleri', 'Serebellum (dentat → talamus → korteks)', 'Posterior parietal korteks (görsel-motor dönüşüm)']
},

{
  id: 'motor', group: 'frontal', color: '#2f9a8a', reviewed: '2026-10-12',
  name: 'Primer Motor Korteks', short: 'M1',
  latin: 'Gyrus praecentralis — area motoria primaria',
  summary: 'İstemli hareketin yürütücüsü: kortikospinal yolun ana kaynağıdır, vücudun karşı yarısını kontrol eder.',
  anatomy: [
    'Presentral girus ve parasentral lobülün ön kısmı; BA 4. Santral sulkus ile somatosensoriyel korteksten ayrılır.',
    'Somatotopik düzen (motor homunkulus): medialde bacak-ayak, lateralde gövde, kol, el (geniş alan), yüz ve dil en altta.',
    'Katman V\'te dev piramidal hücreler (Betz hücreleri).',
    'Kanlanma: yüz-kol bölgesi MCA, bacak bölgesi (medial) ACA.'
  ],
  functions: [
    'İstemli hareketlerin yürütülmesi; kortikospinal ve kortikobulber yollar.',
    'Kuvvet, yön ve hızın kodlanması; ince parmak hareketleri.',
    'Motor öğrenmeyle somatotopik haritanın yeniden düzenlenmesi (plastisite).'
  ],
  tests: [
    'Parmak vurma hızı, Grooved Pegboard',
    'Kas gücü ve refleks muayenesi',
    'TMS ile motor uyarılmış potansiyeller ve kortikal ketleme (araştırma)'
  ],
  development: [
    'Kortikospinal yol miyelinizasyonu doğumdan yaklaşık 2 yaşa kadar hızlıdır; ince motor kontrol ergenliğe kadar gelişir.',
    'Primitif reflekslerin kaybolması kortikal ketlemenin olgunlaşmasını yansıtır.',
    'Erken dönemde var olan ipsilateral projeksiyonlar bebeklikte budanır.'
  ],
  clinical: [
    'Serebral palsi: perinatal hasara bağlı spastisite ve motor gecikme. Tanı artık 6 aydan (düzeltilmiş yaş) önce konabilir: 5 aydan önce genel hareketler değerlendirmesi (GMA) ve MR birlikte %95\'in üzerinde, sonrasında HINE ve MR birlikte %90\'ın üzerinde doğru (Novak ve ark., 2017). Erken tanı, beynin plastisitesinin en yüksek olduğu dönemde müdahaleye olanak verir. [A]',
    'Tourette ve DEHB: TMS çalışmalarında kısa aralıklı intrakortikal ketlemede (SICI) azalma.',
    'Fonksiyonel (konversiyon) motor bozukluklar: ergenlikte sık görülür; organik bulgu yokluğunda pozitif muayene bulguları.'
  ],
  treatment: [
    'Serebral palside erken, tanıya özgü müdahale: tek taraflı (hemiplejik) tutulumda kısıtlama-indüklü hareket tedavisi ve iki elli yoğun eğitim; spastisitede botulinum toksini; seçilmiş olgularda selektif dorsal rizotomi. [A]',
    'Fonksiyonel (konversiyon) motor bozukluk: tanı pozitif bulgularla konur (ör. Hoover işareti); tanının açık ve güvenle anlatılması, fizyoterapi ve psikoterapi birlikte. [B]',
    'TMS ile kortikal uyarılabilirlik ölçümleri (SICI) Tourette ve DEHB\'de araştırma aracıdır; tedavi değildir. [C]'
  ],
  lesion: [
    'Kontralateral üst motor nöron bulguları: güçsüzlük (özellikle distal ince hareketler), spastisite, hiperrefleksi, Babinski.',
    'Fokal motor nöbet ve "Jackson yürüyüşü"; nöbet sonrası Todd paralizisi.'
  ],
  links: ['Kortikospinal yol (iç kapsül → beyin sapı → omurilik)', 'Premotor korteks / SMA', 'Somatosensoriyel korteks', 'Talamus VL (serebellum ve bazal ganglion girdileri)', 'Putamen']
},

{
  id: 'acc', group: 'limbiccx', color: '#e0646f', sub: 'surface', reviewed: '2026-10-12',
  name: 'Anterior Singulat Korteks', short: 'ACC',
  latin: 'Gyrus cinguli — pars anterior',
  summary: 'Hata ve çatışmayı fark eder, çabayı ayarlar; duygu, ağrı ve dikkat arasında köprü kurar.',
  anatomy: [
    'Korpus kallozumu önden saran singulat girusun ön bölümü; BA 24, 32, 33 ve subgenual BA 25.',
    'Alt bölümler: dorsal ACC (bilişsel kontrol), pregenual/rostral ACC (duygusal), subgenual ACC (sgACC — duygudurum ve otonomik düzenleme).',
    'Anterior insula ile birlikte von Economo nöronları içerir.',
    'Kanlanma: ACA (perikallozal ve kallozomarjinal arterler).'
  ],
  functions: [
    'Hata saptama ve çatışma izleme; EEG\'de hata ilişkili negatifliğin (ERN) kaynağı.',
    'Bilişsel kontrolün ayarlanması, çaba ve maliyet-yarar hesabı.',
    'Ağrının duygusal (rahatsız edici) boyutu; sosyal dışlanmaya yanıt.',
    'Motivasyon ve davranış başlatma.',
    'Duygu düzenleme (rostral ACC); duygudurum ve HPA ekseni düzenlemesi (sgACC).',
    'Salience (belirginlik) ağının insula ile birlikte çekirdeği.'
  ],
  tests: [
    'Stroop, Flanker (Eriksen), Simon görevi',
    'Go/No-Go; ERN ve hata sonrası yavaşlama (EEG)',
    'Duygusal Stroop'
  ],
  development: [
    'ERN genliği çocukluktan ergenliğe doğru artar; hata izleme olgunlaşır.',
    'ACC–prefrontal bağlantılar ergenlikte güçlenir; bilişsel kontrol daha verimli hale gelir.'
  ],
  clinical: [
    'OKB: dACC hiperaktivitesi ve artmış ERN ("aşırı hata sinyali"). Pediatrik OKB\'de ERN büyüktür ve BDT ile belirtiler azalsa da büyük kalır; durum değil, yatkınlık (endofenotip) belirteci gibi davranır (Hajcak ve ark., 2008). [B]',
    'Anksiyete bozuklukları: 6 yaşında ERN\'si büyük olan çocuklarda 9 yaşına kadar yeni anksiyete bozukluğu gelişme olasılığı daha yüksek; başlangıç belirtileri ve annenin anksiyetesi hesaba katıldıktan sonra da (236 çocuk; Meyer ve ark., 2015). Erken tarama ve önleme için aday belirteç. [B]',
    'DEHB: dACC hipoaktivasyonu (Bush ve ark., 1999), hata izleme farklılıkları.',
    'Depresyon: sgACC hiperaktivitesi. Erişkin dirençli depresyonda sgACC (subkallozal) derin beyin uyarımı açık çalışmalarda umut verdi (Mayberg ve ark., 2005), ancak çok merkezli sahte kontrollü çalışmada 6 ayda plasebodan üstün bulunmadı (Holtzheimer ve ark., 2017). [B]',
    'Tanılar üstü ortak bulgu: 193 VBM çalışmasının meta-analizinde (yaklaşık 15.900 kişi) şizofreni, bipolar, depresyon, bağımlılık, OKB ve anksiyetede gri madde kaybı aynı üç bölgede birleşti: dorsal ACC ve iki taraflı insula. Bu ağdaki azalma yürütücü işlev zayıflığıyla ilişkili (Goodkind ve ark., 2015). [A]'
  ],
  treatment: [
    'TMS: sol DLPFC\'de sgACC ile en güçlü ters bağlantılı nokta hedeflenir; ACC dolaylı yoldan düzenlenir (Fox ve ark., 2012; SAINT). [B]',
    'Derin beyin uyarımı (subkallozal singulat): dirençli depresyonda deneysel; sahte kontrollü çalışmada etkinlik gösterilemedi (Holtzheimer ve ark., 2017). Yalnızca erişkin. [B]',
    'Singulotomi: dirençli OKB ve kanser ağrısında son basamak cerrahi; çocuk ve ergende uygulanmaz. [C]',
    'ERN, OKB\'de tedaviyle değişmediğinden tedavi yanıtını izlemekten çok risk belirlemede kullanılır (Hajcak ve ark., 2008).'
  ],
  lesion: [
    'Bilateral lezyonda akinetik mutizm; tek taraflı lezyonda apati ve abuli.',
    'Hata düzeltme ve dikkat kontrolünde bozulma, ağrıya kayıtsızlık (singulotomi).'
  ],
  links: ['DLPFC (bilişsel kontrol)', 'Anterior insula (salience ağı)', 'Amigdala ve hipotalamus', 'Kaudat ve ventral striatum', 'Talamus — anterior/mediodorsal', 'Dopamin, serotonin, noradrenalin girdileri']
}

);
