/* Bölge verileri — 8: talamus çekirdekleri (Najdenovska ve ark., 2018) ve serebellum alt yapıları (SUIT, Diedrichsen 2009)
   layer: 'surface' → ebeveynin yüzeyini paylaşan bölüm (serebellum lobülleri); diğerleri ebeveynin içindeki yapılar. */
(window.NEURO_REGIONS = window.NEURO_REGIONS || []).push(

/* ---------- talamus (ebeveyn: thalamus) ---------- */
{
  id: 'th_ant', parent: 'thalamus', group: 'dien', color: '#4fae7c', deep: true, reviewed: '2026-10-12',
  name: 'Anterior Çekirdek Grubu', short: 'AN', latin: 'Nuclei anteriores thalami',
  summary: 'Papez devresinin talamik istasyonu: mamiller cisimden gelen bilgiyi singulat kortekse aktararak epizodik belleği ve yön bulmayı destekler.',
  anatomy: [
    'Talamusun ön ucunda, internal medüller laminanın iki kolu arasında.',
    'Girdi: mamiller cisim (mamillotalamik yol) ve hipokampal formasyon (forniks); çıkış: singulat ve retrosplenial korteks.'
  ],
  functions: [
    'Epizodik belleğin pekiştirilmesi (Papez devresi).',
    'Uzamsal yön bulma; baş yönü (head direction) sinyalleri.'
  ],
  tests: [], development: [],
  clinical: [
    'Talamik amnezi ve Wernicke-Korsakoff sendromunda (mamiller cisim–anterior talamus) bellek bozukluğu.',
    'Dirençli fokal epilepside anterior talamik çekirdek derin beyin stimülasyonu (erişkin).'
  ],
  treatment: [
    'Dirençli fokal epilepside anterior talamik çekirdek derin beyin uyarımı (SANTE; 110 hasta): kör dönemde nöbet sıklığında ortanca azalma %40,4\'e karşı plaseboda %14,5; açık izlemde 7 yılda %75. FDA onayı 2018, 18 yaş ve üstü (Fisher ve ark., 2010). [A]',
    'Wernicke ensefalopatisinde acil tiamin; anoreksiya nervoza ve bariatrik cerrahi sonrası ergenlerde de görülebilir. [A]'
  ],
  lesion: [], links: []
},

{
  id: 'th_md', parent: 'thalamus', group: 'dien', color: '#e0b23a', deep: true, reviewed: '2026-10-12',
  name: 'Mediodorsal Çekirdek', short: 'MD', latin: 'Nucleus mediodorsalis thalami',
  summary: 'Prefrontal korteksin talamik ortağı: çalışma belleği, karar verme ve ödül öğrenmesini prefrontal devrelerle birlikte yürütür.',
  anatomy: [
    'Talamusun medialinde, 3. ventriküle komşu, internal medüller laminanın medialinde.',
    'DLPFC, OFC ve ACC ile karşılıklı bağlantılı; girdi: amigdala, ventral pallidum, SNr.'
  ],
  functions: [
    'Çalışma belleği ve bilişsel esneklik: prefrontal etkinliğin sürdürülmesi.',
    'Ödül ve değer bilgisinin prefrontal kortekse aktarılması (limbik döngü).'
  ],
  tests: [], development: [],
  clinical: [
    'Şizofreni: mediodorsal çekirdek hacminde azalma ve prefrontal–talamik bağlantı farklılıkları.',
    'Korsakoff sendromunda bellek bozukluğuna katkı.'
  ],
  lesion: [], links: []
},

{
  id: 'th_va', parent: 'thalamus', group: 'dien', color: '#e0646f', deep: true, reviewed: '2026-10-12',
  name: 'Ventral Anterior Çekirdek', short: 'VA', latin: 'Nucleus ventralis anterior thalami',
  summary: 'Bazal ganglion çıkışını premotor ve prefrontal kortekse ileten motor planlama istasyonu.',
  anatomy: [
    'Talamusun ventral ön kısmında.',
    'Girdi: GPi ve SNr (GABAerjik); çıkış: premotor korteks, SMA ve prefrontal korteks.'
  ],
  functions: [
    'Hareketin planlanması ve başlatılması (bazal ganglion–talamus–korteks döngüsü).'
  ],
  tests: [], development: [],
  clinical: [
    'Bazal ganglion çıkışındaki bozukluklar (parkinsonizm, distoni, tikler) bu talamik halka üzerinden kortekse yansır.'
  ],
  lesion: [], links: []
},

{
  id: 'th_vld', parent: 'thalamus', group: 'dien', color: '#d98a2b', deep: true, reviewed: '2026-10-12',
  name: 'Ventral Lateral Grup (Dorsal Bölüm)', short: 'VLd', latin: 'Pars dorsalis regionis ventralis lateralis thalami',
  summary: 'Ventral lateral bölgenin dorsal kısmı: serebellum ve bazal ganglion girdilerini motor kortekse aktaran röle çekirdeklerinin bulunduğu alan.',
  anatomy: [
    'Atlas bu grubu difüzyon MR yön bilgisinin kümelenmesiyle tanımlar; adı klasik çekirdeklere göre verilmiştir, sınırları histolojik çekirdeklerle birebir örtüşmez.',
    'Ventral lateral çekirdek serebellumdan (dentat) ve globus pallidustan girdi alıp motor kortekse iletir.'
  ],
  functions: [
    'Serebellar ve bazal ganglion girdilerinin motor kortekse aktarılması; hareketin koordinasyonu.'
  ],
  tests: [], development: [],
  clinical: [
    'Ventral lateral bölgedeki VIM çekirdeği esansiyel tremorda derin beyin stimülasyonu ve odaklanmış ultrason hedefidir (erişkin).'
  ],
  treatment: [
    'Esansiyel tremorda ventral talamus (VIM) hedefli MR rehberli odaklanmış ultrason talamotomisi: 76 hastada sahte işleme göre 3 ayda el tremoru belirgin azaldı (Elias ve ark., 2016); kesi gerektirmez, tek taraflıdır. Derin beyin uyarımı alternatifi. Erişkin. [A]'
  ],
  lesion: [], links: []
},

{
  id: 'th_vlv', parent: 'thalamus', group: 'dien', color: '#c94f7c', deep: true, reviewed: '2026-10-12',
  name: 'Ventral Lateral Grup (Ventral Bölüm)', short: 'VLv', latin: 'Pars ventralis regionis ventralis lateralis thalami',
  summary: 'Ventral lateral bölgenin ventral kısmı: motor ve duyusal röle çekirdeklerine komşu, korteksle karşılıklı bağlantılı alan.',
  anatomy: [
    'Atlas bu grubu difüzyon MR yön bilgisinin kümelenmesiyle tanımlar; sınırları histolojik çekirdeklerle birebir örtüşmez.',
    'Talamusun ventral ve lateral kısmında, ventral posterior (duyusal röle) çekirdeklere komşu.'
  ],
  functions: [
    'Motor ve duyusal bilginin korteksle karşılıklı aktarımı.'
  ],
  tests: [], development: [], clinical: [], lesion: [], links: []
},

{
  id: 'th_cl', parent: 'thalamus', group: 'dien', color: '#4aa3df', deep: true, reviewed: '2026-10-12',
  name: 'Santral Lateral – Lateral Posterior – Medial Pulvinar', short: 'CL-LP-MPu', latin: 'Nucleus centralis lateralis, nucleus lateralis posterior et pulvinar mediale',
  summary: 'Uyanıklıkla ilişkili intralaminar santral lateral çekirdeği ve asosiyasyon kortekslerine bağlı lateral posterior ile medial pulvinarı içeren grup.',
  anatomy: [
    'Atlas bu çekirdekleri ortak kortikal bağlantı örüntüleri nedeniyle tek grupta toplar.',
    'Santral lateral çekirdek intralaminar gruba aittir; lateral posterior ve medial pulvinar parietal ve limbik kortekslerle bağlantılıdır.'
  ],
  functions: [
    'Uyanıklık ve bilinç düzeyinin sürdürülmesi (intralaminar çekirdekler; uyanıklık ağı).',
    'Dikkat ve çok duyulu bütünleştirme (lateral posterior, medial pulvinar).'
  ],
  tests: [], development: [],
  clinical: [
    'Ağır travmatik beyin hasarı sonrası bilinç bozukluğunda santral talamusun uyarılması araştırılmıştır (Schiff ve ark., 2007).'
  ],
  lesion: [], links: []
},

{
  id: 'th_pul', parent: 'thalamus', group: 'dien', color: '#6a5acd', deep: true, reviewed: '2026-10-12',
  name: 'Pulvinar', short: 'Pul', latin: 'Pulvinar thalami',
  summary: 'Talamusun en büyük çekirdeği: görsel dikkati, belirginliği ve korteks alanları arasındaki iletişimi düzenler.',
  anatomy: [
    'Talamusun arka ucunda, lateral genikulat cismin üzerinde.',
    'Görsel ve asosiyasyon kortekslerle (parietal, temporal, prefrontal) karşılıklı bağlantılı; superior kollikulustan girdi alır.'
  ],
  functions: [
    'Görsel dikkatin yönlendirilmesi ve dikkat dağıtıcıların süzülmesi.',
    'Korteks alanları arasındaki eşzamanlılığın düzenlenmesi.',
    'Superior kollikulus–pulvinar–amigdala yolu: tehdit uyaranlarının hızlı, bilinç dışı işlenmesi.'
  ],
  tests: [], development: [],
  clinical: [
    'Pulvinar lezyonlarında karşı tarafa yönelik dikkat ihmali.',
    'OSB ve şizofrenide pulvinar yapı ve bağlantı farklılıkları bildirilmiştir.'
  ],
  lesion: [], links: []
},

/* ---------- serebellum (ebeveyn: cerebellum; lobüller yüzey bölümü) ---------- */
{
  id: 'cb_ant', parent: 'cerebellum', layer: 'surface', group: 'cereb', color: '#8bc34a', deep: true, reviewed: '2026-10-12',
  name: 'Ön Lob (Lobül I–V)', short: 'I–V', latin: 'Lobus anterior cerebelli',
  summary: 'Serebellumun duyu-motor ön lobu: gövde ve uzuvların birinci somatotopik haritası; yürüme ve postürü düzenler.',
  anatomy: [
    'Primer fissürün önünde; vermis ve hemisferlerin I–V lobülleri.',
    'Omurilikten (spinoserebellar yollar) ve motor korteksten (pontin çekirdekler üzerinden) girdi alır.'
  ],
  functions: [
    'Yürüme, postür ve uzuv koordinasyonu.',
    'Birinci duyu-motor vücut haritası (lobül V–VI ile süreklilik).'
  ],
  tests: [], development: [],
  clinical: [
    'Ön lob (özellikle vermis) hasarında gövde ve yürüme ataksisi.'
  ],
  lesion: [], links: []
},

{
  id: 'cb_vi', parent: 'cerebellum', layer: 'surface', group: 'cereb', color: '#26a69a', deep: true, reviewed: '2026-10-12',
  name: 'Lobül VI', short: 'VI', latin: 'Lobulus simplex (VI)',
  summary: 'Duyu-motor ve bilişsel bölgeler arasındaki geçiş lobülü: hareket, dil ve dikkat görevlerinde etkinleşir.',
  anatomy: [
    'Primer fissürün hemen arkasında; posterior lobun ilk lobülü (hemisfer kısmı; vermis VI posterior vermiste).'
  ],
  functions: [
    'Duyu-motor haritanın devamı (el, yüz).',
    'Sözel çalışma belleği ve dil işlemesine katkı.'
  ],
  tests: [], development: [], clinical: [], lesion: [], links: []
},

{
  id: 'cb_crus1', parent: 'cerebellum', layer: 'surface', group: 'cereb', color: '#3f51b5', deep: true, reviewed: '2026-10-12',
  name: 'Crus I', short: 'Crus I', latin: 'Crus primum lobuli ansiformis',
  summary: 'Serebellumun bilişsel çekirdeği: prefrontal ve parietal kortekslerle döngü kurar, yürütücü işlevleri ve dili destekler.',
  anatomy: [
    'Lobül VII\'nin üst kısmı (ansiform lobül); hemisferlerin en geniş lobülü.',
    'Karşı taraf prefrontal ve parietal korteksle pontin çekirdekler ve dentat–talamus üzerinden bağlantılı.'
  ],
  functions: [
    'Yürütücü kontrol ve varsayılan mod ağlarının serebellar temsili (Buckner ve ark., 2011).',
    'Dil ve sözel çalışma belleği (özellikle sağ Crus I).'
  ],
  tests: [
    'Serebellar Bilişsel Duygusal Sendrom Ölçeği (CCAS ölçeği): yatak başı tarama; kategori değiştirme, geri sayı dizisi, harf akıcılığı ve sözel kayıt gibi maddeler. Başarısız madde sayısına göre olası, muhtemel ve kesin sendrom (Hoche ve ark., 2018). Grup düzeyinde yararlı, bireysel tanıda özgüllüğü sınırlı; çocuk sürümü yok. [B]'
  ], development: [],
  clinical: [
    'OSB: sağ Crus I ile prefrontal korteks arasındaki bağlantı farklılıkları; farelerde bu devrenin uyarılması sosyal davranışı düzeltmiştir (Stoodley ve ark., 2017).'
  ],
  lesion: [], links: []
},

{
  id: 'cb_crus2', parent: 'cerebellum', layer: 'surface', group: 'cereb', color: '#8e24aa', deep: true, reviewed: '2026-10-12',
  name: 'Crus II', short: 'Crus II', latin: 'Crus secundum lobuli ansiformis',
  summary: 'Sosyal ve bilişsel işlemeye katılan posterior lob bölgesi: zihinselleştirme ve yürütücü ağlarla bağlantılı.',
  anatomy: [
    'Lobül VII\'nin alt kısmı; Crus I\'den horizontal fissürle ayrılır.'
  ],
  functions: [
    'Zihinselleştirme (başkalarının niyet ve inançlarını anlama) sırasında etkinleşir (Van Overwalle ve ark., 2014).',
    'Yürütücü kontrol ve varsayılan mod ağlarına katılım.'
  ],
  tests: [], development: [],
  clinical: [
    'OSB ve sosyal biliş güçlüklerinde posterior serebellum katılımı araştırılmaktadır.'
  ],
  lesion: [], links: []
},

{
  id: 'cb_viib', parent: 'cerebellum', layer: 'surface', group: 'cereb', color: '#d81b60', deep: true, reviewed: '2026-10-12',
  name: 'Lobül VIIb', short: 'VIIb', latin: 'Lobulus VIIB',
  summary: 'Crus II ile lobül VIII arasındaki, dikkat ve çalışma belleği ağlarıyla bağlantılı posterior lob lobülü.',
  anatomy: [
    'Lobül VII\'nin en alt kısmı; lobül VIII\'den prepiramidal fissürle ayrılır.'
  ],
  functions: [
    'Dorsal dikkat ağı ve çalışma belleği görevlerinde etkinleşme.'
  ],
  tests: [], development: [], clinical: [], lesion: [], links: []
},

{
  id: 'cb_viii', parent: 'cerebellum', layer: 'surface', group: 'cereb', color: '#fb8c00', deep: true, reviewed: '2026-10-12',
  name: 'Lobül VIII (VIIIa–VIIIb)', short: 'VIII', latin: 'Lobulus biventer (VIII)',
  summary: 'İkinci duyu-motor vücut haritasını taşıyan lobül; dikkat ağlarıyla da bağlantılıdır.',
  anatomy: [
    'Biventral lobül; VIIIa ve VIIIb alt bölümleri (hemisfer kısmı; vermis VIII posterior vermiste).'
  ],
  functions: [
    'İkinci somatotopik duyu-motor harita (Grodd ve ark., 2001).',
    'Dorsal dikkat ağına katılım (VIIIa).'
  ],
  tests: [], development: [], clinical: [], lesion: [], links: []
},

{
  id: 'cb_ix', parent: 'cerebellum', layer: 'surface', group: 'cereb', color: '#6d4c41', deep: true, reviewed: '2026-10-12',
  name: 'Lobül IX (Tonsil)', short: 'IX', latin: 'Tonsilla cerebelli (IX)',
  summary: 'Varsayılan mod ağıyla bağlantılı posterior lob bölgesi; hemisferik kısmı serebellar tonsildir.',
  anatomy: [
    'Hemisferik kısmı tonsil, vermis kısmı uvuladır (uvula modelde posterior vermiste); foramen magnumun hemen üstünde.'
  ],
  functions: [
    'Varsayılan mod ağının serebellar temsili (Buckner ve ark., 2011).'
  ],
  tests: [], development: [],
  clinical: [
    'Chiari malformasyonu tip I: tonsillerin foramen magnumdan aşağı uzanması; baş ağrısı, uyku apnesi, yutma güçlüğü.'
  ],
  lesion: [], links: []
},

{
  id: 'cb_x', parent: 'cerebellum', layer: 'surface', group: 'cereb', color: '#00acc1', deep: true, reviewed: '2026-10-12',
  name: 'Flokkulonodüler Lob (Lobül X)', short: 'X', latin: 'Lobus flocculonodularis',
  summary: 'Vestibüloserebellum: dengeyi, göz–baş koordinasyonunu ve bakışın sabit tutulmasını düzenler.',
  anatomy: [
    'Flokkulus (hemisferler) ve nodulus (vermis); posterolateral fissürle ayrılır.',
    'Vestibüler çekirdeklerle doğrudan bağlantılı.'
  ],
  functions: [
    'Denge ve gövde postürü.',
    'Vestibülo-oküler refleksin ayarı ve bakışın sabit tutulması.'
  ],
  tests: [], development: [],
  clinical: [
    'Hasarında gövde ataksisi, geniş tabanlı yürüme ve nistagmus.',
    'Medulloblastom (çocukluğun en sık malign beyin tümörü) sıklıkla orta hatta, vermis ve 4. ventrikül çevresinde yerleşir.'
  ],
  lesion: [], links: []
},

{
  id: 'cb_vermis', parent: 'cerebellum', layer: 'surface', group: 'cereb', color: '#e53935', deep: true, reviewed: '2026-10-12',
  name: 'Posterior Vermis (Lobül VI–IX)', short: 'Vermis', latin: 'Vermis cerebelli (lobuli VI–IX)',
  summary: 'Orta hattaki "limbik serebellum": duygu düzenleme, göz hareketleri ve otonom yanıtlarla ilişkili.',
  anatomy: [
    'Hemisferler arasındaki orta hat şeridi: deklive (VI), folium ve tuber (VII), piramis (VIII), uvula (IX).',
    'Fastigial çekirdek üzerinden vestibüler çekirdeklere ve retiküler formasyona çıkış verir.'
  ],
  functions: [
    'Duygu düzenleme ve duygulanım (Schmahmann\'ın "limbik serebellum" kavramı).',
    'Sakkad ve düzgün takip göz hareketlerinin ayarı (okülomotor vermis VI–VII).'
  ],
  tests: [], development: [],
  clinical: [
    'OSB: vermis VI–VII hipoplazisi bildirilmiştir (Courchesne ve ark., 1988).',
    'DEHB: posterior-inferior vermis hacminde azalma.',
    'Posterior fossa sendromu (serebellar mutizm): çocuklarda vermis tümörü cerrahisi sonrası.'
  ],
  lesion: [], links: []
},

{
  id: 'cb_dentate', parent: 'cerebellum', group: 'cereb', color: '#fdd835', deep: true, reviewed: '2026-10-12',
  name: 'Dentat Çekirdek', short: 'DN', latin: 'Nucleus dentatus',
  summary: 'Serebellumun en büyük derin çekirdeği: lateral hemisferlerin çıkışını talamus üzerinden motor ve prefrontal kortekse taşır.',
  anatomy: [
    'Hemisfer ak maddesinde, kıvrımlı torba biçiminde; hilusu medial ve öne bakar.',
    'Çıkış: superior serebellar pedinkül → karşı taraf kırmızı çekirdek ve talamus (VL) → korteks.'
  ],
  functions: [
    'Motor planlama ve zamanlama (dorsal kısım).',
    'Bilişsel işlevler: ventral kısmı prefrontal korteksle döngü kurar (Dum ve Strick, 2003).'
  ],
  tests: [], development: [],
  clinical: [
    'Friedreich ataksisinde dentat çekirdek atrofisi.',
    'Dentat–talamo–kortikal yolun bozuklukları tremor ve ataksiye yol açar.'
  ],
  lesion: [], links: []
},

{
  id: 'cb_interposed', parent: 'cerebellum', group: 'cereb', color: '#f4511e', deep: true, reviewed: '2026-10-12',
  name: 'İnterpozit Çekirdek (Emboliform ve Globoz)', short: 'IP', latin: 'Nucleus interpositus (emboliformis et globosus)',
  summary: 'Paravermal bölgenin çıkışı: uzuv hareketlerini anlık olarak düzeltir; koşullu göz kırpma öğrenmesinde rol oynar.',
  anatomy: [
    'Dentat ile fastigial çekirdek arasında; emboliform ve globoz çekirdeklerden oluşur.',
    'Çıkış: karşı taraf kırmızı çekirdek ve talamus.'
  ],
  functions: [
    'Hareket sırasında uzuv hatalarının düzeltilmesi.',
    'Koşullu göz kırpma refleksinin öğrenilmesi (hayvan çalışmaları).'
  ],
  tests: [], development: [],
  clinical: [
    'Hasarında aynı tarafta intansiyonel tremor ve dismetri.'
  ],
  lesion: [], links: []
}

);
