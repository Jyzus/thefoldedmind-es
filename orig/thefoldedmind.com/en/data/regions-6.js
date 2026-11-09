/* Bölge verileri — 6: Harvard AAN v2.0 ile eklenen beyin sapı çekirdekleri
   (locus coeruleus, rafe, parabrakial kompleks, PPN/LDT, retiküler formasyon) */
(window.NEURO_REGIONS = window.NEURO_REGIONS || []).push(

{
  id: 'lc', group: 'stem', color: '#3a5fd9', deep: true, reviewed: '2026-10-12',
  name: 'Locus Coeruleus', short: 'LC',
  latin: 'Locus caeruleus',
  summary: 'Beynin ana noradrenalin kaynağı: uyanıklığı, dikkati ve stres yanıtını ayarlar; küçük bir çekirdekten neredeyse tüm beyne yayılır.',
  anatomy: [
    'Pons tegmentumunun dorsolateralinde, 4. ventrikülün tabanına yakın, yaklaşık 15 mm uzunluğunda ince bir hücre sütunu; adını nöromelanin pigmentinin verdiği mavimsi renkten alır.',
    'Her iki yanda yalnızca birkaç on bin noradrenerjik nöron bulunur; buna karşın aksonları beynin hemen her bölgesine dallanır.',
    'Çıkış: korteks, hipokampus, amigdala, talamus ve hipotalamus (dorsal noradrenerjik demet); serebellum ve omurilik. Striatuma katkısı azdır.',
    'Girdi: medulladaki paragigantoselüler çekirdek ve prepositus hipoglossi, prefrontal korteks (ACC, OFC), amigdala santral çekirdeği (CRF), lateral hipotalamus (oreksin).'
  ],
  functions: [
    'Uyanıklık ve uyarılmışlık düzeyi: uyanıkken etkin, NREM uykusunda yavaşlar, REM uykusunda neredeyse susar.',
    'Dikkat: fazik yanıtlar göreve odaklanmayı, yüksek tonik etkinlik dikkatin dağılmasını ve keşfi destekler (adaptif kazanç kuramı; Aston-Jones ve Cohen, 2005).',
    'Prefrontal korteks: orta düzey noradrenalin α2A reseptörleri üzerinden çalışma belleğini güçlendirir; stresteki yüksek düzey α1 ve β reseptörleri üzerinden bozar (ters-U ilişkisi).',
    'Stres yanıtı: amigdaladan gelen CRF ile etkinleşir, tetikte olmayı ve sempatik uyarılmayı artırır.',
    'Duygusal olarak önemli olayların belleğe yerleşmesini güçlendirir (amigdala ve hipokampusta noradrenalin).',
    'İnen ağrı ketlemesi: omuriliğe giden noradrenerjik lifler ağrı iletimini baskılar.'
  ],
  tests: [
    'Pupillometri: pupil çapı ve fazik pupil yanıtları LC etkinliğinin dolaylı göstergesidir (araştırma)',
    'Oddball paradigması ve P3 bileşeni: LC fazik yanıtıyla ilişkilendirilir (Nieuwenhuis ve ark., 2005)',
    'Sürekli performans testleri ve tepki süresi değişkenliği: uyarılmışlık ve dikkat düzenlemesi',
    'Nöromelanine duyarlı MR ile LC sinyal yoğunluğu (araştırma)'
  ],
  development: [
    'LC nöronları embriyonik dönemde erken oluşur; noradrenalin, kortikal gelişimde nöron göçü ve sinaps oluşumunu etkileyen bir sinyal olarak da iş görür (hayvan çalışmaları).',
    'Hayvan modellerinde erken yaşam stresi LC\'nin CRF\'ye duyarlılığını ve stres tepkiselliğini kalıcı biçimde artırabilir.',
    'Rett sendromu fare modellerinde LC nöronlarında işlev bozukluğu gösterilmiştir.'
  ],
  clinical: [
    'DEHB: atomoksetin (noradrenalin geri alım inhibitörü), guanfasin ve klonidin (α2A agonistleri) prefrontal işlevi destekler; stimülanlar da noradrenalini artırır.',
    'Anksiyete ve panik: artmış noradrenerjik tepkisellik; α2 antagonisti yohimbin panik bozukluğu olanlarda panik benzeri belirtileri tetikleyebilir.',
    'TSSB: hiperuyarılmışlık, abartılı irkilme, kâbuslar. α1 antagonisti prazosin kâbuslar için kullanılmış, büyük bir çalışmada plasebodan üstün bulunmamıştır (Raskind ve ark., 2018).',
    'Depresyon: noradrenerjik etkili antidepresanlar (SNRI\'lar, bupropion).',
    'Opioid yoksunluğu: LC hiperaktivitesi otonom yoksunluk belirtilerine katkıda bulunur; klonidin ve lofeksidin bu belirtileri hafifletir.'
  ],
  treatment: [
    'Atomoksetin: noradrenalin geri alım inhibitörü; prefrontalde noradrenalin ve dopamini artırır (prefrontalde dopamini de noradrenalin taşıyıcısı temizler). DEHB\'de stimülan olmayan seçenek. [A]',
    'Klonidin ve guanfasin (α2A agonistleri): klonidin LC ateşlenmesini azaltır; guanfasin daha çok prefrontal dikenlerde HCN kanallarını kapatarak çalışma belleği ağını güçlendirir (Wang ve ark., 2007). DEHB\'de etkili. [A] Tiklerde kanıt daha zayıf: klonidinle olumlu çalışmalar var, uzatılmış salımlı guanfasin küçük bir pediatrik çalışmada plasebodan üstün bulunmadı (Murphy ve ark., 2017). [B]',
    'Lofeksidin ve klonidin: opioid yoksunluğunda LC hiperaktivitesine bağlı otonom belirtileri azaltır; lofeksidin erişkinde FDA onaylı (2018). [A]',
    'Prazosin (α1 antagonisti): TSSB kâbuslarında yaygın kullanılsa da büyük çok merkezli çalışmada plasebodan üstün bulunmadı (Raskind ve ark., 2018). [B]',
    'Propranolol (β antagonisti): performans kaygısının bedensel belirtilerinde kullanılır; travmatik anıların yeniden pekiştirilmesini engelleme amaçlı kullanımı deneysel. [C]'
  ],
  lesion: [
    'İzole LC lezyonu insanda nadirdir; hayvanlarda uyanıklık, dikkatin yeniden yönlendirilmesi ve stres yanıtı bozulur.',
    'Dopamin β-hidroksilaz eksikliği (noradrenalin yapılamaz): doğuştan ağır ortostatik hipotansiyon, pitoz, burun tıkanıklığı.',
    'Parkinson ve Alzheimer hastalığında LC nöronları hastalığın erken döneminde kaybolur (erişkin).'
  ],
  links: ['LC → korteks, hipokampus, amigdala, talamus (dorsal noradrenerjik demet)', 'LC → serebellum ve omurilik (inen ağrı ketlemesi)', 'Amigdala santral çekirdeği → LC (CRF; stres)', 'Prefrontal korteks (ACC, OFC) → LC (yukarıdan aşağı denetim)', 'Lateral hipotalamus → LC (oreksin; uyanıklık)', 'Noradrenalin: α1, α2A ve β reseptörleri']
},

{
  id: 'raphe', group: 'stem', color: '#7cb342', deep: true, reviewed: '2026-10-12',
  name: 'Rafe Çekirdekleri (Dorsal ve Median)', short: 'DR / MnR',
  latin: 'Nucleus raphes dorsalis et nucleus raphes medianus',
  summary: 'Ön beyne giden serotoninin ana kaynağı: duygudurumu, dürtü kontrolünü, uykuyu ve stresle başa çıkmayı düzenler; SSRI\'ların etki ettiği sistemin merkezi.',
  anatomy: [
    'Beyin sapının orta hattında (rafe: dikiş yeri) dizilen serotonerjik çekirdeklerin üst (rostral) kümesi; alt küme (rafe magnus, obscurus, pallidus) medullada yer alır ve omuriliğe projekte olur.',
    'Dorsal rafe (DR): orta beyin ve pons üst kısmında, akuaduktun ve PAG\'ın ventralinde; ön beyindeki serotonerjik liflerin büyük kısmının kaynağı.',
    'Median rafe (MnR, superior santral çekirdek): pons üst kısmında, orta hatta, DR\'nin ventralinde; özellikle hipokampus ve septuma projekte olur.',
    'Nöronların bir kısmı serotonerjik değildir: GABA, glutamat ve dopamin nöronları da bulunur.'
  ],
  functions: [
    'Duygudurum ve olumsuz uyaranlara karşı duygusal tepkiselliğin düzenlenmesi.',
    'Dürtü kontrolü: gecikmiş ödülü bekleyebilme ve cezaya karşı davranışı durdurma.',
    'Uyku–uyanıklık: uyanıkken en etkin, NREM uykusunda azalır, REM uykusunda susar; iştah ve sirkadiyen ritme katkı.',
    'Stresle başa çıkma: kontrol edilemeyen stres DR\'yi aşırı etkinleştirir; kontrol edilebilirlik algısı mPFC üzerinden bunu frenler (öğrenilmiş çaresizlik modeli; Maier ve Seligman, 2016).',
    'MnR: hipokampal ritim ve bağlamsal belleğin düzenlenmesi.'
  ],
  tests: [
    'Duygusal işleme ve olumsuz yanlılık görevleri (duygusal yüz tanıma, dot-probe)',
    'Gecikmeli indirim ve bekleme görevleri: dürtüsellik',
    'Akut triptofan azaltma paradigması (araştırma)',
    'PET ile serotonin taşıyıcısı (SERT) ve 5-HT1A reseptörü görüntüleme (araştırma)'
  ],
  development: [
    'Serotonerjik nöronlar embriyonik dönemin erken haftalarında oluşur; serotonin, nöron göçü ve devre kurulumunu etkileyen trofik bir sinyal olarak da iş görür.',
    'Farelerde erken yaşamda serotonin taşıyıcısının engellenmesi erişkinlikte kaygı benzeri davranışı artırır (Ansorge ve ark., 2004); insanda gebelikte SSRI maruziyetinin uzun dönem etkileri tartışmalıdır.',
    'OSB\'li çocuklarda beyin serotonin sentez kapasitesinin gelişimsel seyri farklı bulunmuştur (Chugani ve ark., 1999).'
  ],
  clinical: [
    'Depresyon, anksiyete ve OKB: SSRI\'ların hedefi serotonin taşıyıcısıdır. Pediatrik OKB\'de sertralin, fluoksetin ve fluvoksamin; ergen depresyonunda fluoksetin ve essitalopram FDA onaylıdır.',
    'Antidepresanlarda 25 yaş altında intihar düşüncesi ve davranışı riskine ilişkin kutu uyarısı vardır; tedavinin ilk haftalarında yakın izlem gerekir.',
    'Serotonin sendromu: serotonerjik ilaç birlikteliklerinde ajitasyon, hipertermi, klonus.',
    'Dürtüsel saldırganlık ve kendine zarar verme davranışında düşük serotonerjik işlev bulguları bildirilmiştir.',
    'OSB: çocukların bir kısmında kan serotonin düzeyi yüksektir (hiperserotonemi).'
  ],
  treatment: [
    'Ergen depresyonu (TADS; 12–17 yaş, 439 hasta, 12 hafta): yanıt fluoksetin + BDT\'de %71, yalnız fluoksetinde %61, yalnız BDT\'de %43, plaseboda %35. İntihar düşüncesindeki en büyük azalma birleşik tedavide (TADS, 2004). 36. haftada üç etkin kol da %81–86 düzeyine ulaştı. [A]',
    'Çocukluk çağı anksiyetesi (CAMS; 7–17 yaş, 488 hasta): belirgin düzelme sertralin + BDT\'de %80,7, BDT\'de %59,7, sertralinde %54,9, plaseboda %23,7; birleşik tedavi ikisinden de üstün (Walkup ve ark., 2008). [A]',
    'SSRI başlarken: düşük dozla başlama, ilk haftalarda intihar düşüncesi ve aktivasyon (huzursuzluk, uykusuzluk) açısından yakın izlem; tedavi en az 6–12 ay sürdürülür. [A]',
    'Serotonin sendromunu önlemek için serotonerjik ilaç birliktelikleri (ör. SSRI ile tramadol, linezolid, triptanlar) gözden geçirilir. [B]'
  ],
  lesion: [
    'İzole rafe lezyonu insanda nadirdir; hayvanlarda serotonin tükenmesi dürtüsellik, saldırganlık ve uyku bozukluklarına yol açar.',
    'Hayvan çalışmalarında yüksek doz MDMA (ekstazi) serotonerjik aksonlarda hasar oluşturur.'
  ],
  links: ['DR → prefrontal korteks, striatum, amigdala, talamus, hipotalamus', 'MnR → hipokampus ve septum', 'mPFC → DR (kontrol edilebilirlik; stresin frenlenmesi)', 'Lateral habenula → DR ve VTA (ketleme)', 'Serotonin: 5-HT1A (otoreseptör), 5-HT2A, 5-HT2C, 5-HT3 reseptörleri; SERT (SSRI hedefi)']
},

{
  id: 'pbc', group: 'stem', color: '#d63c78', deep: true, reviewed: '2026-10-12',
  name: 'Parabrakial Kompleks', short: 'PBN',
  latin: 'Nuclei parabrachiales',
  summary: 'Bedenden gelen tehlike sinyallerinin kavşağı: iç organ, tat, ağrı, ısı ve nefes darlığı bilgisini amigdala, hipotalamus ve insulaya aktarır.',
  anatomy: [
    'Pons üst kısmının dorsolateralinde, superior serebellar pedinkülün (brachium conjunctivum) çevresinde; adını bu pedinkülün iki yanında yer almasından alır.',
    'Medial ve lateral alt çekirdekler; komşu Kölliker-Fuse çekirdeği solunum ritmine katılır.',
    'Girdi: nükleus traktus solitarius (iç organ duyusu, tat, barorefleks) ve omurilik dorsal boynuzu (spinoparabrakial yol: ağrı, ısı).',
    'Çıkış: amigdala santral çekirdeği, BNST, hipotalamus ve preoptik alan, talamus (oradan insulaya), PAG.'
  ],
  functions: [
    'İç organlardan gelen interoseptif bilgiyi (mide, kalp, solunum) limbik ön beyne ileten ana istasyon.',
    'Genel alarm: ağrı, aşırı ısı, bulantı ve nefes darlığı gibi bedensel tehlikeleri amigdalaya bildirir (Palmiter, 2018).',
    'İştah ve tokluk: lateral parabrakial CGRP nöronları bulantı ve tokluk sinyalleriyle yemeyi baskılar (Carter ve ark., 2013).',
    'Solunum: Kölliker-Fuse ile birlikte solunum ritmini ayarlar; kanda CO₂ yükselince uyandırma yanıtını başlatır (Kaur ve ark., 2013).',
    'Isı düzenleme: deriden gelen sıcak ve soğuk bilgisini preoptik alana iletir.'
  ],
  tests: [
    'CO₂ solutma testi: panik bozuklukta ve çocukluk çağı anksiyete bozukluklarında artmış duyarlılık bildirilmiştir (Pine ve ark., 2000)',
    'İnteroseptif farkındalık görevleri (kalp atışı algılama): dolaylı değerlendirme',
    'Ağrı eşikleri (kantitatif duyu testi), tat eşikleri'
  ],
  development: [
    'Yenidoğanda solunum kontrolü ve CO₂ artışına uyanma yanıtı olgunlaşma sürecindedir; bu yanıtın yetersizliği ani bebek ölümü sendromunu açıklamaya çalışan modellerde yer alır.',
    'Bulantıyla eşleşen bir yiyecekten kaçınmayı öğrenme (koşullu tat kaçınması) parabrakial devrelere dayanır (hayvan çalışmaları).'
  ],
  clinical: [
    'Panik bozukluk: "boğulma yanlış alarmı" kuramı, CO₂\'ye aşırı duyarlılık (Klein, 1993); parabrakial–amigdala yolu aday devrelerden biridir.',
    'Kronik ağrı ve bedensel belirti bozuklukları: spinoparabrakial–amigdala yolu ağrının duygusal yükünü taşır.',
    'Yeme sorunları ve ilaca bağlı bulantı: parabrakial CGRP nöronları iştah baskılanmasında rol oynar (hayvan çalışmaları).',
    'Opioid ilişkili solunum depresyonu: parabrakial ve Kölliker-Fuse bölgesindeki μ-opioid reseptörleri katkıda bulunur.'
  ],
  treatment: [
    'Panik bozuklukta interoseptif maruz bırakma (ör. bilerek hızlı nefes alma, döndürme, nefes tutma) BDT\'nin bir parçasıdır; bedensel alarm sinyallerine (parabrakial–amigdala yolu) karşı alışmayı hedefler. [B]',
    'Opioid kaynaklı solunum depresyonu naloksonla geri döndürülür; parabrakial ve Kölliker-Fuse bölgesindeki μ-opioid reseptörleri bu yan etkinin başlıca yerlerindendir. [B]',
    'Kemoterapi ve ilaçla ilişkili bulantıda antiemetikler; koşullu tat kaçınması (bulantıyla eşleşen yiyeceğe karşı tiksinti) çocuklarda tedavi sırasında beslenmeyi bozabilir, yeni yiyecekleri tedavi günlerinden uzak tutmak önerilir. [C]'
  ],
  lesion: [
    'Hayvanlarda lateral parabrakial hasar ağrıya duygusal yanıtları ve koşullu tat kaçınmasını azaltır, CO₂ artışına uyanma yanıtını ortadan kaldırır.',
    'Dorsolateral üst pons (pnömotaksik merkez) lezyonlarında solunum ritmi bozulabilir.'
  ],
  links: ['NTS → PBN (iç organ duyusu, tat): kitaptaki vagal afferent yolak', 'Omurilik dorsal boynuzu → PBN (ağrı, ısı)', 'PBN → amigdala santral çekirdeği ve BNST (alarm, ağrının duygusal yönü)', 'PBN → hipotalamus ve preoptik alan (ısı, iştah)', 'PBN → talamus → insula (interosepsiyon)', 'Glutamat, CGRP; μ-opioid reseptörleri']
},

{
  id: 'ppn', group: 'stem', color: '#8e5bd6', deep: true, reviewed: '2026-10-12',
  name: 'Pedinkülopontin ve Laterodorsal Tegmental Çekirdekler', short: 'PPN / LDT',
  latin: 'Nucleus tegmentalis pedunculopontinus et nucleus tegmentalis laterodorsalis',
  summary: 'Beyin sapının asetilkolin kaynağı: uyanıklığı ve REM uykusunu açar, dikkati ve ödüle yönelimi destekler; PPN yürüme ve postürde de rol alır.',
  anatomy: [
    'Orta beyin–pons bileşkesinde: PPN superior serebellar pedinkülün çevresinde ve lateralinde; LDT daha medialde, PAG\'ın kaudal ucunda, 4. ventrikülün tabanına yakın.',
    'Kolinerjik nöronlar Ch5 (PPN) ve Ch6 (LDT) gruplarını oluşturur; aralarında glutamaterjik ve GABAerjik nöronlar da bulunur.',
    'Harvard AAN atlasında PPN "pedunkülotegmental çekirdek (PTg)" adıyla geçer.',
    'Bağlantılar: talamus, bazal ganglionlar (GPi, subtalamik çekirdek, substantia nigra), VTA, retiküler formasyon, omurilik.'
  ],
  functions: [
    'Uyanıklık ve REM uykusu: talamusa giden kolinerjik lifler talamokortikal etkinliği açar; REM uykusunun başlatılmasına katılır.',
    'Dikkat ve duyusal kapılama: irkilme refleksinin ön uyaranla ketlenmesine (prepulse inhibisyonu) katkı.',
    'Ödül ve motivasyon: LDT ve PPN, VTA ve substantia nigradaki dopamin nöronlarını uyararak fazik dopamin salınımını destekler.',
    'Hareket: PPN mezensefalik lokomotor bölgenin parçasıdır; yürümeyi başlatma ve postür kontrolü.'
  ],
  tests: [
    'Polisomnografi: REM uykusu latansı ve süresi',
    'Prepulse inhibisyonu (PPI) ve irkilme refleksi',
    'Yürüme ve denge analizi (hareket bozukluklarında)'
  ],
  development: [
    'Yenidoğanda uykunun yaklaşık yarısı REM uykusudur; REM etkinliğinin gelişen beyni içeriden uyardığı öne sürülmüştür (Roffwarg ve ark., 1966).',
    'REM uykusunun oranı çocukluk boyunca azalır, uyku–uyanıklık geçişleri pekişir.'
  ],
  clinical: [
    'Narkolepsi tip 1: oreksin kaybıyla REM uykusunu düzenleyen beyin sapı devreleri denetimsiz kalır; katapleksi, uyku paralizisi, hipnagojik halüsinasyonlar.',
    'Kâbus bozukluğu ve travma sonrası uyku bozuklukları: REM uykusu düzenlemesindeki değişiklikler.',
    'Şizofreni: duyusal kapılama (PPI) bozuklukları; postmortem çalışmalarda PPN/LDT kolinerjik nöron sayısında artış bildirilmiştir.',
    'Antikolinerjik ilaçlar (ör. difenhidramin, bazı antipsikotikler, trisiklikler) uyku yapısını, belleği ve dikkati bozabilir, deliryuma yol açabilir.',
    'Parkinson hastalığında yürüme donması: PPN, derin beyin stimülasyonu hedefi olarak araştırılmaktadır (erişkin).'
  ],
  treatment: [
    'Antikolinerjik yük: birden çok antikolinerjik ilacın (difenhidramin, hidroksizin, trisiklikler, bazı antipsikotikler) birlikte kullanımı dikkat, bellek ve uyku yapısını bozar; çocukta ve gelişimsel yetersizliği olanlarda deliryum riski artar. İlaç listesinin gözden geçirilmesi önerilir. [B]',
    'Narkolepside REM ile ilgili belirtiler (katapleksi, uyku paralizisi) sodyum oksibat ve pitolisantla azalır; ayrıntı hipotalamus kartında. [A]',
    'PPN derin beyin uyarımı: Parkinson hastalığında yürüme donması için erişkinde deneysel. [C]'
  ],
  lesion: [
    'İki yanlı PPN hasarı: uyanıklıkta azalma ve yürüme bozukluğu; hayvan çalışmalarında REM uykusunda azalma.',
    'Pontomezensefalik tegmentum lezyonlarında bilinç bozukluğu görülebilir (uyanıklık ağı).'
  ],
  links: ['PPN/LDT → talamus (uyanıklık, talamokortikal etkinlik)', 'LDT → VTA, PPN → substantia nigra (dopamin nöronlarının uyarılması)', 'PPN ↔ bazal ganglionlar (GPi, subtalamik çekirdek): hareket', 'PPN → retiküler formasyon ve omurilik (postür, yürüme)', 'Asetilkolin (nikotinik ve muskarinik reseptörler), glutamat, GABA']
},

{
  id: 'rf', group: 'stem', color: '#1f8a78', deep: true, reviewed: '2026-10-12',
  name: 'Retiküler Formasyon (Mezensefalik ve Pontin)', short: 'mRt / PnO',
  latin: 'Formatio reticularis',
  summary: 'Beyin sapının ortasındaki ağ benzeri çekirdek alanı: kortekse yükselen uyanıklık sinyalini taşır (ARAS), bilinç düzeyini ve kas tonusunu ayarlar.',
  anatomy: [
    'Beyin sapı tegmentumunun merkezinde, belirgin sınırları olmayan, nöronların lif demetleri arasına dağıldığı (retiküler: ağ benzeri) alan.',
    'Modelde iki bölüm: mezensefalik retiküler formasyon (mRt; orta beyin) ve nükleus pontis oralis (PnO; pons üst kısmı).',
    'Yükselen retiküler aktive edici sistem (ARAS): talamusun intralaminer çekirdekleri (dorsal yol) ile hipotalamus ve bazal ön beyin (ventral yol) üzerinden kortekse ulaşır.',
    'Harvard AAN atlası bu uyanıklık ağının düğümlerini postmortem insan beyin sapında histoloji ve MR ile haritalamıştır (Edlow ve ark., 2012; atlasın 2.0 sürümü 2023).'
  ],
  functions: [
    'Uyanıklığın ve bilinç düzeyinin sürdürülmesi.',
    'Uyku–uyanıklık geçişleri; PnO REM uykusunun oluşmasına katılır.',
    'Kas tonusu ve postür (retikülospinal yollar); REM uykusundaki kas atonisine katkı.',
    'Yeni ve beklenmedik uyaranlara yönelim ve uyarılma yanıtı.',
    'Alt beyin sapındaki retiküler alanlarla birlikte solunum ve dolaşım düzenlemesiyle bütünleşme.'
  ],
  tests: [
    'Bilinç düzeyi: Glasgow Koma Skalası (pediatrik sürümü)',
    'EEG: uyanıklık ritimleri ve uyku evreleri',
    'Beyin sapı işitsel uyarılmış potansiyelleri (ABR): beyin sapı bütünlüğü'
  ],
  development: [
    'Yenidoğanda uyku ve uyanıklık gün boyuna dağınıktır; ilk aylarda gündüz uyanıklık ve gece uykusu pekişir.',
    'Prematüre bebeklerde beyin sapı olgunlaşması ABR ile izlenebilir.'
  ],
  clinical: [
    'Bilinç bozuklukları (koma, minimal bilinç durumu): beyin sapı uyanıklık ağının hasarı; çocuklarda başlıca nedenler travmatik beyin hasarı ve hipoksik-iskemik hasardır.',
    'DEHB: düşük uyarılmışlık ve uyarılma düzenlemesi kuramları beyin sapı ile talamik uyanıklık sistemlerini öne çıkarır; kanıtlar dolaylıdır.',
    'Çocukluk çağı beyin sapı tümörleri (ör. diffüz orta hat gliomu) ve Chiari malformasyonu bilinç, uyku ve otonom işlevleri etkileyebilir.'
  ],
  treatment: [
    'Amantadin: travmatik beyin hasarı sonrası bitkisel ya da minimal bilinç durumundaki 184 erişkin hastada (16–65 yaş; 4–16. haftalar) 4 haftalık tedavi işlevsel düzelmeyi hızlandırdı; ilaç kesildikten 2 hafta sonra gruplar arasındaki fark kayboldu (Giacino ve ark., 2012). Kalıcı etki mi, yalnızca hızlanma mı belirsiz. Çocuklarda kanıt olgu serileriyle sınırlı. [B]',
    'Bilinç bozukluklarında yapılandırılmış değerlendirme (ör. Coma Recovery Scale-Revised) tanı hatasını azaltır; çocuklar için uyarlanmış sürümler araştırılıyor. [C]',
    'Uyanıklık sistemini etkileyen ilaçlar (sedatif antihistaminikler, benzodiazepinler, antipsikotikler) çocukta gündüz uykululuğu ve dikkat sorunu olarak görünebilir.'
  ],
  lesion: [
    'Pontomezensefalik tegmentum hasarı, özellikle iki yanlı olduğunda, komaya yol açar (Parvizi ve Damasio, 2003).',
    'Yalnızca ventral ponsun hasarında bilinç korunur (kilitlenmiş insan sendromu); tegmentumun etkilenip etkilenmemesi belirleyicidir.'
  ],
  links: ['mRt/PnO → talamus intralaminer çekirdekleri → korteks (dorsal ARAS yolu)', 'Retiküler formasyon → hipotalamus ve bazal ön beyin (ventral ARAS yolu)', 'PPN/LDT (asetilkolin), locus coeruleus (noradrenalin), rafe (serotonin) ile birlikte uyanıklık ağı', 'Retikülospinal yollar → omurilik (kas tonusu, postür)', 'Glutamat, asetilkolin, GABA']
}

);
