/* Bölge verileri — 3/4: Limbik yapılar ve bazal ganglionlar */
(window.NEURO_REGIONS = window.NEURO_REGIONS || []).push(

{
  id: 'hippocampus', group: 'limbic', color: '#f08a5d', deep: true, reviewed: '2026-10-12',
  name: 'Hipokampus', short: 'HC',
  latin: 'Hippocampus',
  summary: 'Yeni anıları kodlar ve pekiştirir; mekânı ve bağlamı haritalar, stres yanıtını frenler.',
  anatomy: [
    'Medial temporal lobda, lateral ventrikülün temporal boynuzunun tabanında; baş (pes), gövde ve kuyruk.',
    'Alt alanlar: dentat girus, CA1–CA4, subikulum. Ana girdi kapısı entorinal korteks (perforan yol).',
    'Çıkış: fimbria–forniks → mamiller cisimler → talamus anterior çekirdek → singulat (Papez devresi).',
    'Kanlanma: PCA (hipokampal arterler) ve anterior koroidal arter.'
  ],
  functions: [
    'Yeni deklaratif (epizodik) anıların kodlanması ve konsolidasyonu.',
    'Mekânsal bellek ve navigasyon (yer hücreleri; entorinal ızgara hücreleri).',
    'Bağlamsal bellek: korkunun bağlama bağlanması ve bağlamın yanıtı düzenlemesi.',
    'Örüntü ayırma (dentat girus) ve örüntü tamamlama (CA3).',
    'HPA ekseninin negatif geri bildirimi (yoğun glukokortikoid reseptörleri).'
  ],
  tests: [
    'Sözel liste öğrenme (RAVLT, CVLT-C)',
    'Hikâye hatırlama, Çocuklar İçin Bellek Ölçeği (CMS)',
    'Rey figürü gecikmeli hatırlama, sanal navigasyon'
  ],
  development: [
    'İnfantil amnezi: erken çocukluk anıları kalıcı değildir; hipokampal devreler (özellikle dentat girus) okul öncesi dönemde olgunlaşır.',
    'Hacim çocukluk ve ergenlik boyunca artar; ön ve arka bölümler farklı gelişim hızı gösterir.',
    'Erken çocuklukta destekleyici ebeveynlik daha büyük hipokampal hacimle ilişkili bulunmuştur (Luby ve ark., 2012).',
    'Kronik stres, yoksulluk ve istismar daha küçük hipokampal hacimle ilişkilidir. Çocukluk çağı kötü muamelesi özellikle sol CA2–CA3, CA4–dentat girus ve subikulumu etkiler; ilişki depresyon ya da TSSB öyküsüyle açıklanmıyor (Teicher ve ark., 2012; 193 genç erişkin). Hayvanlarda stresin nörogenezi baskıladığı ve dendritleri budadığı alanlarla aynı yerler. [B]'
  ],
  clinical: [
    'TSSB ve kronik stres: erişkinlerde küçük hacim; çocuk bulguları daha tutarsız.',
    'Depresyon: ENIGMA\'da (1728 hasta, 7199 kontrol) hipokampus küçük (d = −0,14). Fark tekrarlayan depresyonda belirgin, ilk atakta yok. 21 yaş ve öncesinde başlayan depresyonda daha büyük (d = −0,20) (Schmaal ve ark., 2016). Erken başlangıç ve tekrarın önlenmesinin önemini destekler. [A]',
    'Temporal lob epilepsisi: mezial temporal skleroz (uzamış febril nöbet öyküsü ile ilişkili olabilir).',
    'Erken başlangıçlı şizofreni, Down sendromu, prematürite: hipokampal hacim farklılıkları.'
  ],
  treatment: [
    'EKT: her seansta hipokampus hacmi yaklaşık %0,28 artar (281 hasta), ancak bu artış klinik yanıtı açıklamaz; hacim değişimi yanıt belirteci değildir (Oltedal ve ark., 2018). [A]',
    'Depresyonda erken ve yeterli tedavi ile tekrarın önlenmesi, ENIGMA\'daki tekrar ve erken başlangıç bulgularıyla uyumludur (Schmaal ve ark., 2016). [B]',
    'Bellek sorunlarında bilişsel rehabilitasyon ve dış bellek destekleri (ajanda, hatırlatıcı) epilepsi cerrahisi sonrası ve temporal lob epilepsisinde kullanılır.'
  ],
  lesion: [
    'Bilateral: anterograd amnezi (H.M. vakası); retrograd amnezi zamana göre derecelenir.',
    'Kısa süreli bellek ve prosedürel bellek korunur.',
    'Sol lezyon sözel, sağ lezyon görsel-uzamsal belleği daha çok etkiler.'
  ],
  links: ['Entorinal korteks (perforan yol)', 'Forniks → mamiller cisim → talamus anterior (Papez devresi)', 'Amigdala', 'mPFC ve PCC', 'Hipotalamus (HPA geri bildirimi)', 'Kolinerjik septal girdiler, glutamat']
},

{
  id: 'amygdala', group: 'limbic', color: '#e8505b', deep: true, reviewed: '2026-10-12',
  name: 'Amigdala', short: 'AMY',
  latin: 'Corpus amygdaloideum',
  summary: 'Duygusal önem (salience) dedektörü: bir uyaranın "benim için önemli mi, tehlikeli mi, değerli mi" sorusunu hızla yanıtlar, bu ilişkiyi öğrenir ve bedeni (otonom, endokrin, davranış) buna göre hazırlar.',
  anatomy: [
    'Medial temporal lobda, hipokampus başının önünde, unkusun içinde badem şekilli çekirdek kompleksi.',
    'Üç ana grup ve iş bölümü: Bazolateral kompleks (lateral, bazal, aksesuar bazal): duyusal girdinin kapısı ve öğrenme yeri. Santral çekirdek: ana çıkış. Medial ve kortikal çekirdekler: koku ve sosyal-üreme işaretleri. [B]',
    'İnterkalat hücreler vmPFC aracılığıyla ketlemeyi sağlar. Stria terminalis yatak çekirdeği (BNST) "uzamış amigdala"dır.',
    'Kanlanma: anterior koroidal arter, MCA dalları.',
    'Çıkışlar belirtilerin haritasıdır. Santral çekirdek → hipotalamus ve BNST (HPA ekseni, kortizol), PAG (donma), locus coeruleus (uyarılma), parabrakial ve vagal çekirdekler (kalp hızı, solunum). Anksiyetenin bedensel belirtileri bu çıkışlardan okunabilir. [B]',
    'İki girdi yolu: talamustan hızlı ve kaba bir yol, kortekslerden yavaş ve ayrıntılı bir yol (LeDoux\'nun "alçak ve yüksek yolu"). Hızlı yolun insandaki önemi tartışmalıdır; ders anlatımında model olarak sunulmalı. [B]'
  ],
  functions: [
    'Tehdit saptama ve Pavlovyan korku koşullanması.',
    'Duygusal belirginlik: olumsuz ve olumlu uyaranlara dikkat.',
    'Yüz ifadelerinin (özellikle korku) ve göz bölgesinin hızlı işlenmesi.',
    'Duygusal anıların güçlendirilmesi (hipokampus modülasyonu).',
    'Otonom ve endokrin stres yanıtının başlatılması (hipotalamus–HPA).',
    'Sosyal değerlendirme: güvenilirlik, kişisel alan.',
    'Ödül değeri: uyaran–değer ilişkilerini öğrenir ve günceller; bazolateral amigdala → nukleus akumbens yolu motive davranışı yönlendirir. Amigdala yalnızca korku merkezi değildir (Baxter ve Murray, 2002). [B]',
    'Korkuyu hissetmek dış tehditler için amigdalaya bağlıdır: iki taraflı amigdala hasarlı S.M. yılan, örümcek ve perili evde korku yaşamadı (Feinstein ve ark., 2011). [B]',
    'Ancak içeriden gelen tehdit için amigdala gerekmez: aynı hastalar %35 CO₂ solununca korku ve panik atağı yaşadı (Feinstein ve ark., 2013). Panik bozukluğunda interoseptif yolların (beyin sapı, insula) rolünü gösteren önemli bir bulgu. [B]',
    'Belirsizlik ve öngörülemezlik: tehdidin ne zaman geleceği bilinmediğinde yanıt BNST\'ye kayar. Fazik korku (amigdala) ile süreğen kaygı (BNST) ayrımı yapılır. [B]'
  ],
  tests: [
    'Korku koşullanması ve sönme paradigmaları',
    'Duygusal yüz tanıma (NEPSY-II Duygu Tanıma)',
    'Dikkat yanlılığı (dot-probe), irkilme refleksi (startle)',
    'Gözlerden Zihin Okuma Testi (çocuk sürümü): sosyal bilişte amigdala ve temporal ağ.'
  ],
  development: [
    'Erken gelişir; bebeklikte bakımverenin varlığı amigdala yanıtını tamponlar.',
    'Ergenlikte duygusal yüzlere amigdala tepkiselliği artar; mPFC düzenlemesi henüz olgunlaşmamıştır.',
    'Kurum bakımı: geç evlat edinme, daha büyük amigdala hacmi, daha zayıf duygu düzenleme ve daha çok kaygıyla ilişkili (Tottenham ve ark., 2010). Yoksunluk yaşayan çocuklarda negatif amigdala–mPFC bağlantısı erken ortaya çıkar; bu "hızlanmış olgunlaşma" stres uyumu olarak yorumlanır (Gee ve ark., 2013, PNAS). [B]',
    'Amigdala–mPFC bağlantısının işaret değiştirmesi: 10 yaşından önce pozitif (olgunlaşmamış), 10 yaşından sonra negatif (düzenleyici). Amigdala tepkiselliği bu sırada azalır (Gee ve ark., 2013, J Neurosci; 4–22 yaş). [B]',
    'Ebeveyn tamponu: annenin fotoğrafı çocuklarda amigdala tepkisini bastırır ve bağlantıyı olgun düzene yaklaştırır; ergenlerde bu etki yoktur. Çocukluk, bu devre için duyarlı bir dönem olabilir (Gee ve ark., 2014). [B]',
    'Subkortikal gri madde hacmi yaşam boyu en yüksek düzeyine yaklaşık 14,4 yaşında ulaşır (Bethlehem ve ark., 2022; 123.984 MR). [A]'
  ],
  clinical: [
    'Anksiyete bozuklukları: Çocuk ve ergen fMRI meta-analizi (48 çalışma, 2000\'den fazla katılımcı): içselleştirme bozukluklarında, özellikle anksiyetede, iki taraflı amigdala hiperaktivasyonu (Ashworth ve ark., 2021). [A] Ergen YAB\'de bilinçdışı (maskelenmiş) öfkeli yüzlere sağ amigdala yanıtı artmış ve şiddetle ilişkili; vlPFC\'de dengeleyici artış yok (Monk ve ark., 2008). [B]',
    'Davranım bozukluğu + CU özellikleri: korkulu yüzlere azalmış amigdala yanıtı. Reaktif saldırganlıkta ise artmış yanıt.',
    'OSB: 7–12 yaş erkeklerde büyük amigdala, ergenlikte fark kaybolur (Schumann ve ark., 2004). Büyük örneklemde (ENIGMA-ASD, yaşam boyu) amigdala ortalamada biraz küçük (d ≈ 0,11–0,16) (van Rooij ve ark., 2018). Fark yaşa bağlıdır; "OSB\'de amigdala büyüktür" genellemesi yapılmamalı. [A/B]',
    'Depresyon ve TSSB: amigdala hiperreaktivitesi; TSSB\'de korkunun sönmesinin bozulması (vmPFC ile birlikte). [B]',
    'DEHB: ENIGMA (1713 hasta, 1529 kontrol) DEHB\'de amigdala hacmini küçük bulmuştur; fark çocuklarda belirgin, erişkinde silinir (Hoogman ve ark., 2017). Etki küçüktür, tanı koydurucu değildir. [A]',
    'Davranım bozukluğu: ENIGMA-Antisosyal Davranış: amigdala hacmi daha küçük (d ≈ 0,13); duygusal katılık (CU) özellikleri yüksek olanlarda farklar daha yaygın (Gao ve ark., 2024). [A]',
    'Williams sendromu (7q11.23 mikrodelesyonu): öfkeli ya da korkulu yüzlere amigdala yanıtı azalmış (sosyal korkusuzluk), sosyal olmayan tehdit sahnelerine ise artmış (sosyal olmayan kaygı). Aynı yapı, uyaranın türüne göre ters yönde çalışıyor (Meyer-Lindenberg ve ark., 2005). [B]'
  ],
  treatment: [
    'Pediatrik YAB: tedavi öncesi amigdala yanıtı yüksek olanlar fluoksetin ya da BDT\'ye daha iyi yanıt verdi; etkili tedaviyle amigdala hiperaktivitesi azalır (McClure ve ark., 2007). [C]',
    'Benzodiazepinler: amigdaladaki yoğun GABA-A reseptörleri üzerinden. Çocukta kısa süreli ve dikkatli kullanım.',
    'Nörogeri bildirim: fMRI\'dan türetilmiş EEG imzasıyla ("amigdala elektriksel parmak izi") yapılan 6 seanslık eğitim, stresli askerî eğitimdeki 180 sağlıklı erişkinde aleksitimiyi azalttı ve stres başa çıkmasını iyileştirdi (Keynan ve ark., 2019). Ucuz ve taşınabilir; ergen çalışmaları sürüyor. [C]',
    'Derin beyin uyarımı: dirençli savaş TSSB\'sinde bazolateral amigdala uyarımı (Langevin ve ark., 2016). Yalnızca erişkin, deneysel. [C]'
  ],
  lesion: [
    'Urbach-Wiethe hastalığı (S.M. vakası): dış tehditlere korku yok, kişisel alan duygusu yok; ancak CO₂ ile panik var (Feinstein 2011, 2013).',
    'Klüver-Bucy sendromu (bilateral anterior temporal): hiperoralite, hiperseksüalite, korkusuzluk, görsel agnozi.',
    'Mezial temporal lob epilepsisi: amigdala kaynaklı aura (yükselen epigastrik his, ani korku). Çocukta panik atağıyla karışabilir.'
  ],
  links: ['vmPFC / mPFC (düzenleme)', 'Hipotalamus (HPA ekseni, CRH)', 'PAG ve beyin sapı (savunma, otonom)', 'Hipokampus', 'Nükleus akumbens', 'Locus coeruleus (noradrenalin), serotonin, GABA–benzodiazepin reseptörleri', 'Belirginlik (salience) ağı: dorsal ACC ve ön insula ile birlikte', 'Unsinat fasikül: OFC ve temporal kutup', 'Stria terminalis: BNST ve hipotalamus; ventral amigdalofugal yol: hipotalamus ve mediodorsal talamus', 'CRF: santral çekirdekte stres yanıtını yürütür', 'Oksitosin: amigdala yanıtını azaltır; tek doz burun içi oksitosin korku uyaranlarına aktivasyonu düşürdü (Kirsch ve ark., 2005, erişkin erkek) [C]', 'Endokannabinoid (CB1): korkunun sönmesi için gerekli (Marsicano ve ark., 2002, fare) [B]']
},

{
  id: 'caudate', group: 'basal', color: '#4aa3df', deep: true, reviewed: '2026-10-12',
  name: 'Kaudat Nükleus', short: 'CN',
  latin: 'Nucleus caudatus',
  summary: 'Prefrontal korteksin striatal ortağı: hedefe yönelik davranışı, geri bildirimle öğrenmeyi ve bilişsel esnekliği destekler.',
  anatomy: [
    'C şeklinde; baş (lateral ventrikül frontal boynuzunun lateral duvarı), gövde ve kuyruk (temporal boynuzun tavanı, amigdalaya uzanır).',
    'Putamenle birlikte dorsal striatum; iç kapsül ile ayrılır, gri köprülerle bağlıdır (çizgili görünüm).',
    'Girdi: DLPFC, OFC, ACC; substantia nigra pars kompakta (nigrostriatal dopamin).',
    'Kanlanma: lentikülostriat arterler (MCA), Heubner rekürren arteri (ACA) — baş.'
  ],
  functions: [
    'Hedefe yönelik davranış ve eylem–sonuç öğrenmesi.',
    'Bilişsel döngü (DLPFC–kaudat–talamus): çalışma belleği ve planlamaya destek.',
    'Geri bildirime dayalı öğrenme ve ödül beklentisi.',
    'Bilişsel esneklik ve ketleme; okülomotor döngü (göz hareketleri).'
  ],
  tests: [
    'Olasılıksal kategori öğrenmesi',
    'Set değiştirme görevleri, TMT-B',
    'Geri bildirimli öğrenme görevleri'
  ],
  development: [
    'Striatal hacim orta çocukluk–erken ergenliğe kadar artar, sonra azalır (kortekse benzer ters-U eğrisi).',
    'Kortikostriatal bağlantılar ergenlik boyunca olgunlaşır.'
  ],
  clinical: [
    'OKB: KSTK devresinde kaudat hiperaktivitesi. PANS/PANDAS hipotezi (tartışmalı); Sydenham koresinde kaudat tutulumu.',
    'Tourette: daha küçük kaudat hacmi (Peterson ve ark., 2003); çocuklukta kaudat hacmi erişkin tik şiddetini öngörür (Bloch ve ark., 2005).',
    'DEHB: kaudat hacminde küçüklük (yaşla azalan fark).',
    'Jüvenil Huntington hastalığı (Westphal varyantı): kaudat atrofisi.'
  ],
  treatment: [
    'OKB: maruz bırakma ve tepki önleme (ERP) ile SSRI; etkili tedaviyle kaudat ve OFC\'deki hiperaktivite azalır. [A]',
    'Huntington koresi: VMAT2 inhibitörleri (tetrabenazin, deutetrabenazin) dopamin depolanmasını azaltarak koreyi hafifletir; depresyon ve intihar düşüncesi açısından izlem gerekir. [A]',
    'Sydenham koresi: streptokok enfeksiyonunun tedavisi ve uzun süreli penisilin profilaksisi; kore ve davranış belirtileri için semptomatik tedavi. [B]',
    'Tikler için davranışsal ve ilaç tedavisi putamen kartında.'
  ],
  lesion: [
    'Abuli/apati, frontal benzeri yürütücü işlev bozukluğu, disinhibisyon.',
    'Kore (Huntington), OKB benzeri belirtiler.'
  ],
  links: ['DLPFC ve OFC (kortikostriatal girdi)', 'Globus pallidus / SNr (çıkış)', 'Talamus VA ve mediodorsal', 'Substantia nigra (dopamin — D1/D2 reseptörleri)', 'GABA (orta dikenli nöronlar), asetilkolin (internöronlar)']
},

{
  id: 'putamen', group: 'basal', color: '#3c7fc7', deep: true, reviewed: '2026-10-12',
  name: 'Putamen', short: 'PUT',
  latin: 'Putamen',
  summary: 'Motor döngünün giriş kapısı: hareketin başlatılması, otomatikleşen alışkanlıklar ve motor sekans öğrenmesi.',
  anatomy: [
    'Lentiform çekirdeğin lateral kısmı (globus pallidus ile birlikte).',
    'Dış kapsül ile klaustrumdan, iç kapsül ile kaudat ve talamustan ayrılır.',
    'Girdi: primer motor ve somatosensoriyel korteks, SMA (motor döngü); substantia nigra pars kompakta.',
    'Kanlanma: lentikülostriat arterler (MCA).'
  ],
  functions: [
    'Hareketin başlatılması ve ölçeklendirilmesi.',
    'Alışkanlıklar (uyaran–yanıt öğrenmesi) ve otomatik davranışlar.',
    'Motor sekans öğrenmesi ve prosedürel bellek.',
    'Ritim ve zamanlama; konuşma artikülasyonu.',
    'Dopaminerjik ödül tahmin hatası sinyallerinin alınması.'
  ],
  tests: [
    'Seri tepki süresi görevi (SRTT — örtük öğrenme)',
    'Ayna çizimi, ritim senkronizasyonu (tapping)',
    'Rotor takip'
  ],
  development: [
    'Alışkanlık sistemleri erken işlev görür; motor otomatikleşme çocuklukta hızlanır.',
    'Putamen hacmi çocuklukta artar.'
  ],
  clinical: [
    'Tourette ve tik bozuklukları: motor döngü işlev bozukluğu; tikler alışkanlık benzeri davranışlardır.',
    'DEHB: ENIGMA çalışmasında çocuklarda putamen, kaudat, akumbens, amigdala ve hipokampus hacimleri küçük (Hoogman ve ark., 2017).',
    'OSB: tekrarlayıcı motor davranışlar ve striatal büyüklük ilişkisi.',
    'Wilson hastalığı: ergenlikte psikiyatrik belirtilerle başlayabilir; putamende bakır birikimi.',
    'Antipsikotik ilişkili ekstrapiramidal yan etkiler (striatal D2 blokajı).'
  ],
  treatment: [
    'Tiklerde ilk basamak davranış terapisi (CBIT: tiki öncesindeki dürtüyü fark etme ve tikle bağdaşmayan karşıt hareket): 9–17 yaş 126 çocukta belirgin düzelme %52,5\'e karşı destekleyici tedavide %18,5 (tedavi edilmesi gereken sayı 3); yanıt verenlerin %87\'sinde etki 6 ay sürdü (Piacentini ve ark., 2010). [A]',
    'Tik ilaçları: α2 agonistleri (guanfasin, klonidin; DEHB eşlik ediyorsa), D2 blokörleri (aripiprazol, haloperidol, pimozid). [A]',
    'Wilson hastalığı: bakır şelasyonu (penisilamin, trientin) ve çinko; erken tanıyla nörolojik ve psikiyatrik belirtiler geri dönebilir. [B]',
    'Ekopipam (D1 antagonisti, yeni bir mekanizma): faz III çalışmada (167 çocuk) yanıt verenlerde nüks %41,9\'a karşı plaseboda %68,1; kilo ve hareket bozukluğu yan etkisi yok. Henüz FDA onaylı değil; başvuru Ağustos 2026\'da öncelikli incelemeye alındı, karar 2027\'nin ilk çeyreğinde bekleniyor. [B]',
    'Antipsikotiğe bağlı tardif diskinezi: VMAT2 inhibitörleri (valbenazin, deutetrabenazin) erişkinde onaylı. [A]'
  ],
  lesion: [
    'Distoni, parkinsonizm (dopamin kaybı).',
    'Prosedürel öğrenme bozukluğu.'
  ],
  links: ['Motor ve somatosensoriyel korteks, SMA', 'Globus pallidus (doğrudan/dolaylı yol)', 'Talamus VL', 'Substantia nigra pars kompakta (nigrostriatal dopamin)']
},

{
  id: 'gp', group: 'basal', color: '#6f8fd8', deep: true, reviewed: '2026-10-12',
  name: 'Globus Pallidus', short: 'GPe / GPi',
  latin: 'Globus pallidus',
  summary: 'Bazal ganglionların çıkış freni: talamusu tonik olarak baskılar, istenen hareketi serbest bırakır, istenmeyeni durdurur.',
  anatomy: [
    'Lentiform çekirdeğin medial kısmı; medial medüller lamina ile dış (GPe) ve iç (GPi) segmente ayrılır.',
    'GPi, substantia nigra pars retikülata ile birlikte bazal ganglionların ana çıkış çekirdeğidir.',
    'Ventral pallidum: ödül ve motivasyon devresinin parçası.',
    'Kanlanma: anterior koroidal arter (GPi), lentikülostriat arterler.'
  ],
  functions: [
    'Doğrudan yol (striatum → GPi): talamusun disinhibisyonu → istenen hareketin serbest bırakılması.',
    'Dolaylı yol (striatum → GPe → STN → GPi): istenmeyen hareketlerin baskılanması.',
    'Hareket genliği ve hızının düzenlenmesi.',
    'Ventral pallidum: hedonik "beğenme" ve motivasyon.'
  ],
  tests: [
    'Hareket bozukluğu ölçekleri: YGTSS (tik), AIMS (tardif diskinezi), Simpson-Angus (EPS)',
    'Nörolojik muayene: distoni, kore, bradikinezi'
  ],
  development: [
    'Kernikterus (yenidoğan hiperbilirubinemisi) globus pallidusu seçici olarak etkiler.',
    'Perinatal hipoksi-iskemide bazal ganglion–talamus tutulum paterni.'
  ],
  clinical: [
    'Kernikterus → diskinetik serebral palsi (koreoatetoz).',
    'Distoni: GPi DBS çocuklarda (özellikle DYT1) etkili.',
    'Tourette: dirençli olgularda GPi DBS hedefi (ileri ergen ve erişkin).',
    'PKAN (pantotenat kinaz ilişkili nörodejenerasyon): MR\'da "kaplan gözü" bulgusu.',
    'Karbon monoksit zehirlenmesi: bilateral pallidal nekroz.'
  ],
  treatment: [
    'Primer jeneralize distoni (özellikle DYT1): iki taraflı GPi derin beyin uyarımı kontrollü çalışmalarda hareket bozukluğunu ve yetiyitimini belirgin azalttı (Vidailhet ve ark., 2005; Kupsch ve ark., 2006, sahte kontrollü). Çocuklarda erken uygulama daha iyi sonuçla ilişkilendirilir. [B]',
    'Tourette\'te ön GPi, sentromedian talamustan sonra en sık derin beyin uyarımı hedefidir; ayrıntı talamus kartında (Martinez-Ramirez ve ark., 2018). [C]',
    'Kernikterusun önlenmesi: yenidoğan sarılığında risk eğrilerine göre fototerapi ve gerekirse kan değişimi; pallidal hasar kalıcıdır. [A]'
  ],
  lesion: [
    'Bilateral pallidal lezyon: apati, abuli ("psişik akinezi"), parkinsonizm veya distoni.'
  ],
  links: ['Striatum (girdi)', 'Subtalamik çekirdek (dolaylı ve hiperdirekt yollar)', 'Talamus VA/VL (GABAerjik çıkış)', 'Pedunkülopontin çekirdek', 'GABA, enkefalin, P maddesi']
},

{
  id: 'nacc', group: 'basal', color: '#f2b134', deep: true, reviewed: '2026-10-12',
  name: 'Nükleus Akumbens', short: 'NAcc / VS',
  latin: 'Nucleus accumbens septi',
  summary: 'Ödülün motivasyona dönüştüğü yer: "istemek", yaklaşma davranışı ve pekiştirmeyle öğrenme.',
  anatomy: [
    'Kaudat başı ile putamenin ventral birleşim yerinde, septumun lateralinde; ventral striatumun ana bileşeni.',
    'Çekirdek (core) ve kabuk (shell) bölgeleri.',
    'Girdi: VTA (mezolimbik dopamin), vmPFC/OFC, amigdala, hipokampus. Çıkış: ventral pallidum.',
    'Kanlanma: lentikülostriat arterler, Heubner rekürren arteri.'
  ],
  functions: [
    'Ödül beklentisi ve motivasyon ("istek / wanting", teşvik belirginliği).',
    'Ödül tahmin hatasıyla pekiştirme öğrenmesi (VTA dopamin sinyali).',
    'Limbik bilginin motor eyleme dönüştürülmesi ("limbik–motor arayüz").',
    'Hedonik zevk (kabuktaki opioiderjik "sıcak noktalar"), sosyal ödül, plasebo yanıtı.'
  ],
  tests: [
    'Parasal Teşvik Gecikme görevi (MID, fMRI)',
    'Efor–ödül görevi (EEfRT), gecikmeli indirim',
    'Balon Analog Risk Görevi (BART)'
  ],
  development: [
    'Ergenlikte ödüle akumbens yanıtı çocuk ve erişkinden yüksektir; OFC ise hâlâ çocuk düzenindedir. Ödül devresinin denetim devresinden önce olgunlaşması yenilik arayışı ve risk almayı açıklayabilir (Galván ve ark., 2006; 7–29 yaş). [B]',
    'Akran varlığında ergenlerin risk alması ve ventral striatal aktivite artar (Chein ve ark., 2011).',
    'Pubertal hormonlar ödül duyarlılığını etkiler.'
  ],
  clinical: [
    'Madde kullanım bozuklukları: ergenlik özellikle hassas bir dönemdir.',
    'DEHB: ödül beklentisinde ventral striatal hipoaktivasyon (Plichta ve Scheres, 2014), gecikmeden kaçınma. Erişkin DEHB\'de akumbens D2/3 düzeyi dikkatsizlik ve motivasyonla ilişkili (Volkow ve ark., 2009). [B]',
    'Depresyon ve anhedoni: 1576 ergende (IMAGEN) ödül beklentisinde ventral striatum etkinliği depresyonda düşük. Sağlıklı ergenlerde düşük etkinlik 2 yıl içinde eşik altı ya da klinik depresyona geçişi öngördü. Bulgu düşük duygudurumdan çok anhedoniyle ilişkili (Stringaris ve ark., 2015). Grup düzeyinde belirteç, bireysel tanı aracı değil. [A]',
    'Davranışsal bağımlılıklar (oyun bozukluğu), davranım bozukluğu.'
  ],
  treatment: [
    'Davranışsal aktivasyon: anhedonide ödüllendirici etkinlikleri planlı biçimde artırır; ödül devresini kullanarak işleyen bir psikoterapi.',
    'Stimülanlar ve bağımlılık riski: tedavi dozunda ağızdan alınan metilfenidat yavaş dopamin artışı yapar; bağımlılık yapan hızlı artıştan farklıdır.',
    'Derin beyin uyarımı (akumbens): dirençli OKB\'de 16 erişkinde 8 ayda Y-BOCS %46 azaldı, 9 hasta yanıtlı; sahte uyarıma göre %25 fark (Denys ve ark., 2010). Yalnızca erişkin, ileri basamak. [C]'
  ],
  lesion: [
    'Anhedoni, apati, motivasyon kaybı.',
    'Erişkinde dirençli OKB ve depresyonda DBS hedefi.'
  ],
  links: ['VTA (mezolimbik dopamin yolu)', 'vmPFC ve OFC', 'Amigdala ve hipokampus', 'Ventral pallidum → talamus mediodorsal', 'Dopamin, endojen opioidler, glutamat']
}

);
