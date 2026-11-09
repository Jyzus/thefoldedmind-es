/* İngilizce içerik (2/2): ağlar, nörotransmitter kartları, canlı yolak adları ve notları, model notları, kitap katmanının
   kısa alanları. Son yüklenir ve bütün İngilizce metinleri Türkçe verilerin üzerine işler (data/en/regions-*.js dahil).
   Kitap pasajlarının (DIVAN entries, yolakların carries/links/where/note) çevirisi data/en/divan.js'te. */
(function () {
  'use strict';
  const put = (obj, en) => { if (obj && en) Object.keys(en).forEach((k) => { obj[k] = en[k]; }); };

  /* ---------------------------------------------------------------- bölge kartları */
  const RE = window.NEURO_REGIONS_EN || {};
  (window.NEURO_REGIONS || []).forEach((r) => put(r, RE[r.id]));

  /* ---------------------------------------------------------------- model notları ("In the model") */
  const TH = 'Najdenovska et al. (2018) thalamic nuclei atlas (diffusion MRI clustering; ICBM 2009a symmetric template). Each voxel of the CerebrA thalamus was assigned to the most probable nucleus in these probability maps; because the atlas thalamus is about 20% larger than CerebrA’s, the borders were fitted to the shell (overlap of the two thalami: Dice 0.86–0.89).';
  const CB = 'SUIT atlas (Diedrichsen et al., 2009) lobule labels; each point of the cerebellar surface was assigned to the nearest lobule just beneath it. Overlap between SUIT and the model’s cerebellum: Dice 0.90.';
  const HCP = 'HCP-MMP1.0 areas (Glasser et al., 2016; MNI volumetric version: Horn, 2016)';
  const NOTES = {
    dlpfc: HCP + ': 46, 9-46d, a9-46v, p9-46v, 8Av, 8Ad, 8C, 8BL, 9a, 9p, i6-8, s6-8, SFL and the inferior frontal sulcus areas (IFSa, IFSp, IFJa, IFJp). Parts falling on the medial surface were given to mPFC. Each vertex of the frontal gyri was labeled by the nearest HCP area just beneath it; because the volumetric version is derived from the surface, borders may be uncertain by 1–2 mm.',
    ofc: HCP + ': 11l, 13l, OFC, pOFC, 47m, 47s, 47l, a47r, p47r. CerebrA lateral orbitofrontal and pars orbitalis where there is no HCP match.',
    mpfc: HCP + ': 9m, 8BM, 10d, 10r, 10v, 10pp, a10p, p10p (dmPFC, vmPFC and frontal pole) and the DLPFC areas falling on the medial surface.',
    broca: HCP + ' 44 and 45; inferior frontal sulcus areas go to the DLPFC, frontal operculum areas follow the CerebrA gyrus.',
    premotor: HCP + ': 6a, 6d, 6v, 6r, 55b, FEF, PEF (lateral premotor) and 6ma, 6mp, SCEF (SMA and pre-SMA, medial surface).',
    motor: HCP + ' 4 (posterior precentral gyrus and paracentral lobule); precentral vertices without an HCP match follow the CerebrA gyrus.',
    somato: 'Postcentral gyrus (CerebrA); in the paracentral lobule, HCP-MMP1.0 areas 3a, 3b, 1, 2 and 5m, 5L, 5mv.',
    spl: 'Superior parietal cortex.',
    ipl: 'Supramarginal and inferior parietal (angular) cortex (CerebrA). The TPJ areas (PGi, PSL, STV, TPOJ1–3) are a separate region.',
    tpj: HCP + ': TPOJ1, TPOJ2, TPOJ3, STV, PSL and PGi; applied to vertices of the inferior parietal, supramarginal, superior and middle temporal gyri. There is no single universally accepted border for the TPJ; this definition rests on the HCP parcels.',
    stg: 'Superior temporal and transverse temporal (Heschl) gyri.',
    itg: 'Middle and inferior temporal, fusiform, parahippocampal and entorhinal cortex; the uncus on the medial temporal surface is shown in this color too.',
    occipital: 'Lateral occipital cortex, cuneus, lingual gyrus and pericalcarine cortex.',
    insula: 'As in real anatomy it lies beneath the opercula; when selected, its surroundings turn transparent and it becomes visible.',
    acc: 'Rostral and caudal anterior cingulate cortex (CerebrA); cingulate HCP-MMP1.0 areas falling on the frontal gyri (areas 25, s32, 24 and 32, 33pr) were also given to the ACC.',
    pcc: 'Posterior cingulate, isthmus cingulate and precuneus.',
    thalamus: 'CerebrA thalamus label. When selected, seven nuclear groups divided according to the Najdenovska et al. (2018) atlas appear inside.',
    caudate: 'CerebrA caudate label.',
    putamen: 'CerebrA putamen label.',
    gp: 'CerebrA pallidum label (external and internal segments together). When selected, GPe and GPi from CIT168 appear inside.',
    gpe: 'CIT168 GPe probability map (right/left). The outer shell is the CerebrA pallidum label; the borders of the two atlases may differ slightly.',
    gpi: 'CIT168 GPi probability map (right/left). The outer shell is the CerebrA pallidum label; the borders of the two atlases may differ slightly.',
    sn: 'Union of the CIT168 SNc and SNr probability maps (each side separately); the surface volume was matched to the CIT168 hard-label volume. CIT168 is registered to the MNI 2009c asymmetric template; its overlap with CerebrA labels on the symmetric template is high (putamen 0.89–0.90, pallidum 0.82–0.83).',
    snc: 'CIT168 SNc probability map (right/left); volume equal to the CIT168 hard label.',
    snr: 'CIT168 SNr probability map (right/left); volume equal to the CIT168 hard label.',
    stn: 'CIT168 subthalamic nucleus probability map (right/left).',
    rn: 'CIT168 red nucleus probability map (right/left).',
    hb: 'CIT168 habenula probability map (right/left); the structure is very small (about 60 voxels per side), so its shape is approximate.',
    vp: 'CIT168 ventral pallidum probability map (right/left).',
    nacc: 'CerebrA accumbens area label.',
    amygdala: 'CerebrA amygdala label.',
    hippocampus: 'CerebrA hippocampus label.',
    hypothalamus: 'CIT168 hypothalamus and mammillary body probability map (threshold 0.35). The pituitary and its stalk are approximate shapes positioned from the T1 image. When selected, 12 nuclei from the Neudorfer et al. (2020) atlas appear inside it; the very small periventricular nuclei (Pe, DPEH) were not added.',
    vta: 'CIT168 VTA and parabrachial pigmented nucleus (VTA complex; threshold 0.3).',
    bnst: 'CIT168 extended amygdala label (threshold 0.35). The stria terminalis is an approximate arc drawn by hand.',
    pag: 'Harvard AAN v2.0 PAG label (Edlow and Kinney, 2023). The atlas is on the FSL MNI152 1 mm grid; because its left–right pairs are symmetric about x = +0.5 mm, it was shifted by 0.5 mm and transferred to the ICBM 2009c template with world coordinates (no nonlinear registration). 99–100% of the transferred nuclei fall within the template’s brainstem (PPN 90%); PAG voxels lie a median 2.7 mm from the aqueduct line.',
    lc: 'Harvard AAN v2.0 right and left LC labels (see the PAG note for the transfer). Because it is only a few voxels wide at 1 mm resolution, the surface was smoothed while preserving volume; fine shape detail is approximate.',
    raphe: 'Harvard AAN v2.0 dorsal raphe (DR) and median raphe (MnR) labels; two separate parts in the same color. The caudal raphe nuclei of the medulla (magnus, obscurus, pallidus) are not in the atlas.',
    pbc: 'Harvard AAN v2.0 parabrachial complex labels (right/left). Because the voxels are scattered in the atlas, the surface is a smoothed envelope around them; the medial and lateral subnuclei and the Kölliker-Fuse nucleus are not shown separately.',
    ppn: 'Harvard AAN v2.0 pedunculotegmental (PTg, i.e. PPN) and laterodorsal tegmental (LDTg) labels (right/left), in the same color. The atlas’s separate “PTg_L” file contains both sides, so the combined label file was used.',
    rf: 'Harvard AAN v2.0 mesencephalic reticular formation (mRt) and pontis oralis (PnO) labels (right/left). The reticular areas of the medulla are not in the atlas.',
    vagal: 'No atlas data: the dorsal motor nucleus and nucleus ambiguus were positioned by hand on medullary sections; the vagus root is schematic.',
    cc: 'A slab of the template’s white matter probability within ±6 mm of the midline. May include part of the fornix.',
    midbrain: 'Upper part of the CerebrA brainstem label (z ≥ −21 mm).',
    pons: 'Parte media de la etiqueta del tronco encefálico de CerebrA (aproximadamente z −21 a −47 mm; determinado por la protuberancia anterior).',
    medulla: 'Parte inferior de la etiqueta del tronco encefálico de CerebrA (z < −47 mm). El campo de visión de la plantilla corta el extremo inferior de la médula.',
    cerebellum: 'Etiquetas de materia gris y blanca cerebelosa de CerebrA y del vermis. Los folios no son distintos en la plantilla promedio. Cuando se selecciona, la superficie se colorea según los lóbulos de SUIT (Diedrichsen et al., 2009); los núcleos dentado e interpuesto están dentro. El núcleo fastigial no se muestra porque solo tiene unos pocos voxeles en el mapa de etiquetas más probables del atlas.',
    cb_vermis: CB + ' Como el vermis I–V no está etiquetado por separado en SUIT, se incluye en el lóbulo anterior, y el vermis X (nódulo) en el lóbulo floculonodular.',
    cb_dentate: 'Atlas de núcleos profundos de SUIT (Diedrichsen et al., 2011), mapa de etiquetas más probables; una superficie suavizada que preserva el volumen.',
    cb_interposed: 'Atlas de núcleos profundos de SUIT (Diedrichsen et al., 2011), mapa de etiquetas más probables; una superficie suavizada que preserva el volumen.'
  };
  ['th_ant', 'th_md', 'th_va', 'th_vld', 'th_vlv', 'th_cl', 'th_pul'].forEach((id) => { NOTES[id] = TH; });
  ['cb_ant', 'cb_vi', 'cb_crus1', 'cb_crus2', 'cb_viib', 'cb_viii', 'cb_ix', 'cb_x'].forEach((id) => { NOTES[id] = CB; });
  NOTES.sma = "HCP-MMP1.0 (Glasser et al., 2016) areas: 6ma, 6mp, SCEF. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.lpm = "HCP-MMP1.0 (Glasser et al., 2016) areas: 6a, 6d, 6v, 6r, 55b, FEF, PEF. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.ifg44 = "HCP-MMP1.0 (Glasser et al., 2016) areas: 44. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.ifg45 = "HCP-MMP1.0 (Glasser et al., 2016) areas: 45. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.fop = "HCP-MMP1.0 (Glasser et al., 2016) areas: FOP1, FOP3, FOP4, FOP5, AVI, MI. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.audstg = "HCP-MMP1.0 (Glasser et al., 2016) areas: A1, MBelt, LBelt, PBelt, RI, 52, A4, A5, TA2, STGa. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.sts = "HCP-MMP1.0 (Glasser et al., 2016) areas: STSda, STSdp, STSva, STSvp. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.tpole = "HCP-MMP1.0 (Glasser et al., 2016) areas: TGd, TGv. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.fusiform = "HCP-MMP1.0 (Glasser et al., 2016) areas: FFC, VVC, V8, VMV1, VMV2, VMV3. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.ento = "HCP-MMP1.0 (Glasser et al., 2016) areas: EC, PeEc. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.phg = "HCP-MMP1.0 (Glasser et al., 2016) areas: TF, PHA1, PHA2, PHA3, PreS, H. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.mitg = "HCP-MMP1.0 (Glasser et al., 2016) areas: TE1a, TE1m, TE1p, TE2a, TE2p, PHT, PH, A5. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.pcing = "HCP-MMP1.0 (Glasser et al., 2016) areas: RSC, 23c, 23d, d23ab, v23ab, 31pv, 31pd, 31a, p24pr, 24dd, 24dv, 33pr, 5m, 5mv. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.prek = "HCP-MMP1.0 (Glasser et al., 2016) areas: 7m, PCV, POS1, POS2, 7Am, 7Pm, 7PL, DVT, 5L. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.vmpfc = "HCP-MMP1.0 (Glasser et al., 2016) areas: 10r, 10v. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.dmpfc = "HCP-MMP1.0 (Glasser et al., 2016) areas: 9m, 8BM, 10d, 9a, 9p, 8BL, 8Ad, SFL, s6-8, i6-8, SCEF. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.fpc = "HCP-MMP1.0 (Glasser et al., 2016) areas: 10pp, a10p, p10p. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.sgacc = "HCP-MMP1.0 (Glasser et al., 2016) areas: 25, s32. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.pgacc = "HCP-MMP1.0 (Glasser et al., 2016) areas: a24, p32, d32. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.dacc = "HCP-MMP1.0 (Glasser et al., 2016) areas: p24, a24pr, p24pr, a32pr, p32pr, 33pr, 24dd, 24dv. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.mofc = "HCP-MMP1.0 (Glasser et al., 2016) areas: OFC, pOFC. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.lofc = "HCP-MMP1.0 (Glasser et al., 2016) areas: 11l, 13l, 47m, 47s, 47l, a47r, p47r. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.aic = "HCP-MMP1.0 (Glasser et al., 2016) areas: AVI, AAIC, MI, FOP5, Pir. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.pic = "HCP-MMP1.0 (Glasser et al., 2016) areas: PoI1, PoI2, Ig, PI, FOP2, FOP3, OP2-3, 52, RI. Each vertex of the region surface in the model was assigned to the area of the nearest HCP voxel; vertices outside this list joined the nearest sub-area along the surface, and the boundary is a smoothed iso-line. This is a group average: boundaries vary between individuals.";
  NOTES.pit = 'An approximate shape positioned from the midline profile of the T1 image: the gland and its stalk. The anterior and posterior lobes are not modelled separately.';
  const NEU = 'Neudorfer et al. (2020) atlas of the hypothalamic region: hand-drawn at 0.25 mm on the average T1 and T2 template of 990 HCP participants (CC BY 4.0). The atlas is in the ICBM 2009b asymmetric template; it was transferred by world coordinates without nonlinear registration (centres within 1.0–1.7 mm of CIT168 for shared structures). The surface was smoothed while preserving volume.';
  ['hy_mpo', 'hy_scn', 'hy_so', 'hy_aha', 'hy_pvn', 'hy_dmh', 'hy_vmh', 'hy_arc', 'hy_lh', 'hy_tm', 'hy_ph', 'hy_mm'].forEach((id) => {
    NOTES[id] = NEU + ' The nuclei were clipped to the outer boundary of the hypothalamus (the parent, from CIT168) with a 1 mm margin; this is a representational limit, and the part of the lateral hypothalamus extending beyond it is not shown.';
  });
  NOTES.nbm = NEU + ' The nucleus basalis consists of scattered cell clusters without a sharp boundary; the atlas outline shows the part distinguishable on the template.';
  NOTES.dbb = NEU + ' The medial septal nucleus is not defined in openly licensed atlases, so the model contains only the diagonal band; pathways from the septum to the hippocampus start from this nucleus.';
  if (window.MODEL_NOTES) put(window.MODEL_NOTES, NOTES);

  /* ---------------------------------------------------------------- beyin ağları */
  const NETS = {
    dmn: {
      name: 'Red de modo predeterminado', short: 'DMN',
      summary: 'La red que se activa cuando nos retiramos del mundo exterior: pensando en uno mismo, recuerdos, imaginando el futuro y entendiendo otras mentes.',
      anatomy: [
        'Nodos principales: corteza prefrontal medial, cingulado posterior y precúneo, giro angular (parietal inferior), corteza temporal lateral, formación hipocámpica.',
        'La conexión entre los hubs anterior (mPFC: yo y valor) y posterior (PCC/precuneus: memoria y construcción de escenas) es la columna vertebral de la red.',
        'En el modelo, la red “Predeterminada” del atlas de siete redes de Yeo 2011; la mayor red de la corteza.'
      ],
      functions: [
        'Activa en reposo y suprimida durante tareas que exigen atención hacia afuera; su desactivación durante tareas se mostró por primera vez en estudios de PET (Shulman et al., 1997); Raichle et al. (2001) la nombraron “modo predeterminado”. [B]',
        'Memoria autobiográfica, imaginando el futuro, pensamiento autorreferencial y divagación mental.',
        'Teoría de la mente: inferir las creencias e intenciones de los demás (junto con el dmPFC y el TPJ).',
        'Durante las tareas funciona opuesta (anticorrelacionada) a las redes de atención; la red de saliencia establece este equilibrio (el modelo de red triple; Menon, 2011). [B]'
      ],
      development: [
        'Entre las edades de 7 a 9 años, las conexiones entre las regiones de la red son escasas; durante el desarrollo, la red se convierte en un único sistema integrado (Fair et al., 2008). [B]',
        'Como parte de la corteza de asociación, es una de las redes que maduran más tarde; a diferencia de las redes sensoriomotoras, lleva una larga ventana de plasticidad (Sydnor et al., 2021). [B]'
      ],
      clinical: [
        'TDAH: la relación normalmente opuesta entre el ACC dorsal y el DMN se debilita (Castellanos et al., 2008); el DMN no se suprime lo suficiente durante las tareas y la atención fluctúa (“interferencia del modo predeterminado”; Sonuga-Barke y Castellanos, 2007). [B]',
        'Depresión: conectividad aumentada dentro del DMN y entre el DMN y el sistema frontoparietal; un cambio hacia el pensamiento introspectivo (rumiación) (Kaiser et al., 2015; 556 pacientes). [A]',
        'Esquizofrenia: el DMN es hiperactivo y sobreconectado; débil supresión del mPFC durante las tareas. El mismo hallazgo aparece en parientes de primer grado no afectados (Whitfield-Gabrieli et al., 2009; muestra pequeña). [C]',
        'TEA: se han reportado diferencias en la conectividad del DMN, con dirección inconsistente entre estudios.'
      ],
      treatment: [
        'Los estimulantes traen la supresión del DMN durante tareas a niveles saludables en jóvenes con TDAH (Peterson et al., 2009). [B]',
        'Los meditadores a largo plazo muestran menor actividad en los hubs del DMN (mPFC, PCC) y una conectividad más fuerte del PCC con regiones de control (Brewer et al., 2011). Comparación de grupo; no causa y efecto. [C]',
        'CBT enfocado en la rumiación y activación conductual apuntan a la actividad interna del DMN en la depresión.'
      ],
      tests: [
        'Conectividad de estado de reposo en fMRI (investigación)',
        'Supresión del DMN durante tareas (por ejemplo, tareas de memoria de trabajo)',
        'Métodos de muestreo de divagación mental; tareas de teoría de la mente'
      ],
      links: ['Red de saliencia (cambio entre redes)', 'Red de control frontoparietal (trabajando juntas en tareas difíciles)', 'Hipocampo (subsistema de memoria)', 'Núcleo mediodorsal del tálamo, cerebelo Crus I–II']
    },
    fpn: {
      name: 'Frontoparietal Control Network', short: 'FPN',
      summary: 'The hub of flexible cognitive control: changes its connections with the other networks according to the task and regulates goal-directed behavior.',
      anatomy: [
        'Main nodes: dorsolateral and rostrolateral prefrontal cortex, the inferior parietal lobule and intraparietal sulcus region, mid-cingulate and part of the precuneus.',
        'The “Control” network of the Yeo 2011 atlas; also called the central executive network.'
      ],
      functions: [
        'Flexible hub: the network that changes its connectivity with the whole brain the most from task to task; it reuses old connectivity patterns when learning new tasks (Cole et al., 2013). [B]',
        'Working memory, rule switching, planning and cognitive emotion regulation.',
        'Together with the salience network it sets whether attention turns inward (DMN) or outward (attention networks) (Menon, 2011). [B]'
      ],
      development: [
        'Executive functions develop rapidly at ages 10–15 and reach adult levels at 18–20 (Tervo-Clemmens et al., 2023). [A]',
        'In infancy, higher-order networks are scattered and become progressively connected over the first two years, whereas primary sensory networks are adult-like at birth (Gao et al., 2015). [B]'
      ],
      clinical: [
        'Depression: reduced connectivity within the frontoparietal network and with the dorsal attention network; consistent with attention shifting inward (Kaiser et al., 2015). [A]',
        'Transdiagnostic: weak executive function is shared across many disorders; shared gray matter loss together with the salience network (Goodkind et al., 2015). [A]',
        'Difficulties with working memory and cognitive control in ADHD and schizophrenia reflect the function of this network.'
      ],
      treatment: [
        'The TMS target in depression, the left DLPFC, is a node of this network; the most effective sites are anticorrelated with the subgenual cingulate (Fox et al., 2012). [B]',
        'Stimulants and α2A agonists support the function of the prefrontal control nodes (DLPFC card). [A]'
      ],
      tests: ['Wisconsin Card Sorting, Trail Making B, n-back', 'Task-switching paradigms'],
      links: ['Default mode network', 'Dorsal attention network', 'Salience network', 'Caudate (cognitive corticostriatal loop), thalamus mediodorsal, cerebellum Crus I']
    },
    md: {
      name: 'Núcleo de Demanda Múltiple (MD)', short: 'MD',
      summary: 'Un núcleo de “propósito general” que se activa junto en casi cualquier tarea difícil: la infraestructura de la inteligencia fluida y la resolución de problemas.',
      anatomy: [
        '10 áreas HCP-MMP1.0 en cada hemisferio: i6-8, p9-46v, a9-46v, 8C, IFJp (prefrontal lateral), 8BM/SCEF (frontal medial), AVI (insula anterior), IP1, IP2 (surco intraparietal), PFm (parietal inferior) (Assem et al., 2020). Una penumbra de 17 áreas lo rodea. [B]',
        'Fuera de la corteza, la actividad más fuerte se encuentra en el caudado y el cerebelo (Assem et al., 2020). [B]',
        'Se encuentra principalmente dentro de la red de control frontoparietal pero se extiende a tres otras redes en estado de reposo; en el modelo se pinta como una capa separada, independiente de las redes de Yeo.'
      ],
      functions: [
        'Dificultad sin importar el tipo de tarea: se activa junto a medida que la dificultad aumenta en tareas muy diferentes como memoria de trabajo, razonamiento y cambio de tarea. [B]',
        'Inteligencia fluida: en 80 pacientes con lesiones focales, la pérdida de inteligencia fluida se vinculó únicamente a daños en estas áreas frontoparietales (Woolgar et al., 2010). El daño a las áreas del lenguaje no afecta la inteligencia fluida. [B]'
      ],
      development: [
        'La curva de maduración de las funciones ejecutivas (rápida entre 10 y 15 años, nivel adulto entre 18 y 20) refleja el desarrollo de este sistema (Tervo-Clemmens et al., 2023). [A]'
      ],
      clinical: [
        'La pérdida de “inteligencia general” después de daño prefrontal o parietal está vinculada a lesiones en este núcleo (Woolgar et al., 2010). [B]',
        'En la evaluación neuropsicológica, una caída en las pruebas de razonamiento fluido sugiere un deterioro “central” separado de problemas de lenguaje o sensoriales.'
      ],
      tests: ['Razonamiento fluido: Matrices de Raven, subpruebas de razonamiento fluido WISC-V', 'Tareas de memoria de trabajo y cambio de tarea'],
      links: ['Red de control frontoparietal (en gran parte superpuesta)', 'Red de saliencia (insula anterior AVI)', 'Caudado y cerebelo']
    },
    sal: {
      name: 'Red de Saliencia y Atención Ventral', short: 'SN / VAN',
      summary: 'La red que detecta lo que importa y dirige la atención a ello: inicia el cambio entre las otras redes según señales salientes del cuerpo y el entorno.',
      anatomy: [
        'Nodos principales: ínsula anterior y operculo frontal, cingulado anterior dorsal, unión temporoparietal derecha, corteza frontal ventral.',
        'Definición de la red de saliencia: una red con ACC dorsal y hubs frontoinsulares orbitales, fuertemente conectada con estructuras subcorticales y límbicas; se separa de la red de control ejecutivo (Seeley et al., 2007). [B]',
        'En el atlas de Yeo 2011, las redes de saliencia y atención ventral emergen como una sola red (“Saliencia/Atención Ventral”).'
      ],
      functions: [
        'Cambio entre redes: la corteza frontoinsular derecha inicia la activación de la red de control ejecutivo central y la desactivación del DMN (Sridharan et al., 2008). [B]',
        'Reorientación de la atención hacia estímulos inesperados pero importantes (atención ventral; Corbetta y Shulman, 2002). [B]',
        'Interocepción y saliencia emocional: convertir el estado corporal en sentimiento consciente (ínsula), monitoreo de conflictos y errores (ACC).'
      ],
      development: [
        'Las conexiones ínsula anterior-ACC se fortalecen en la adolescencia (tarjeta de ínsula); la sensibilidad a la saliencia emocional es alta en la adolescencia.'
      ],
      clinical: [
        'Un hallazgo transdiagnóstico compartido: los sitios más consistentes de pérdida de materia gris en trastornos psiquiátricos son el ACC dorsal y la ínsula anterior bilateral; el debilitamiento de esta red se relaciona con dificultades ejecutivas (Goodkind et al., 2015; 193 estudios). [A]',
        'Ansiedad: la conectividad del nodo de saliencia ACC dorsal se relaciona con el nivel de ansiedad (Seeley et al., 2007). [C]',
        'Modelo de red triple: el desequilibrio entre las redes de saliencia, ejecutiva y de modo predeterminado se propone como un mecanismo compartido en depresión, esquizofrenia, TDAH y TEA (Menon, 2011). [B]',
        'Saliencia aberrante en psicosis: con un exceso de dopamina, los estímulos neutrales se vuelven salientes (tarjeta VTA).'
      ],
      treatment: [
        'Técnicas de CBT que apuntan a sesgos de atención e interpretación, y exposición interoceptiva, abordan la función de esta red. [C]',
        'TMS profunda (bobina H7, mPFC y ACC) está aprobada por la FDA para el TOC en adultos (tarjeta mPFC). [A]'
      ],
      tests: ['Paradigma Oddball', 'Tarea de señalización de Posner (señal inválida: reorientación)', 'Detección del latido del corazón (interocepción)'],
      links: ['Amígdala, estriado ventral, hipotálamo (saliencia subcortical)', 'Red de control frontoparietal', 'Red de modo predeterminado', 'Red de atención dorsal']
    },
    dan: {
      name: 'Red de Atención Dorsal', short: 'DAN',
      summary: 'La red que dirige la atención orientada a objetivos: selecciona de arriba hacia abajo qué y dónde mirar, y guía los movimientos oculares.',
      anatomy: [
        'Nodos principales: campo ocular frontal (FEF), surco intraparietal y lóbulos parietales superiores, MT+ (área de movimiento).',
        'Simétrica en los dos hemisferios, mientras que la red de atención ventral es dominante a la derecha.'
      ],
      functions: [
        'Selección atencional orientada a objetivos (de arriba hacia abajo): lóbulos parietales superiores, surco intraparietal y FEF; la orientación a estímulos inesperados es manejada por el sistema ventral (Corbetta y Shulman, 2002). [B]',
        'Atención espacial, búsqueda visual y planificación de sacadas; memoria de trabajo visuoespacial.'
      ],
      development: [
        'La atención visual y el control de sacadas (por ejemplo, antisacadas) se desarrollan a lo largo de la infancia y alcanzan niveles adultos en la adolescencia.'
      ],
      clinical: [
        'Síndrome de negligencia: lesiones ventrales derechas también interrumpen la actividad en áreas parietales dorsales estructuralmente intactas; la recuperación es paralela a la restauración del equilibrio entre los dos hemisferios (Corbetta et al., 2005; 11 pacientes). [C]',
        'Depresión: conectividad reducida entre la red frontoparietal y la red de atención dorsal (Kaiser et al., 2015). [A]',
        'Dificultades con la atención visuoespacial y la integración visuomotora en el TDAH y los trastornos de coordinación del desarrollo.'
      ],
      tests: ['Tarea de señalización espacial de Posner', 'Búsqueda visual, antisacadas', 'Pruebas de bisección de línea y cancelación (negligencia)'],
      links: ['Red de atención ventral y red de saliencia', 'Red de control frontoparietal', 'Red visual (vía dorsal)', 'Colículo superior y pulvinar']
    },
    smn: {
      name: 'Red Somatomotora', short: 'SMN',
      summary: 'La red que mueve y siente el cuerpo; en el atlas de Yeo también incluye la corteza auditiva. Una de las redes más maduras al nacer.',
      anatomy: [
        'Nodos principales: giros precentral y postcentral (M1, S1), SMA, corteza somatosensoria secundaria e ínsula posterior, corteza auditiva en el giro temporal superior.',
        'La red “Somatomotora” del atlas de Yeo 2011.'
      ],
      functions: [
        'Ejecución de movimiento y sensación corporal; las áreas homólogas en los dos hemisferios fluctúan juntas en reposo. Se demostró por primera vez conectividad en reposo en la corteza motora de la mano (Biswal et al., 1995). [B]',
        'Procesamiento auditivo (giro temporal superior) y la parte motora del habla con movimientos de boca y cara.'
      ],
      development: [
        'Las redes sensoriomotoras primarias son similares a las de los adultos al nacer (Gao et al., 2015). [B]',
        'La maduración cortical avanza desde las áreas sensoriomotoras hacia las cortezas de asociación; esta red se sitúa en el extremo temprano del eje (Sydnor et al., 2021). [B]'
      ],
      clinical: [
        'La parálisis cerebral, el trastorno de coordinación del desarrollo y los trastornos de tics involucran los nodos de esta red (tarjetas motoras, premotoras y de putamen).',
        'Hipersensibilidad o hiposensibilidad sensorial en TEA; trastornos motores funcionales.'
      ],
      tests: ['Golpeo de dedos, tablero de Purdue', 'Signos neurológicos suaves (PANESS)', 'Escalas de perfil sensorial'],
      links: ['Putamen y tálamo ventral lateral (bucle motor)', 'Lóbulo anterior del cerebelo', 'Red de atención dorsal']
    },
    vis: {
      name: 'Red Visual', short: 'VIS',
      summary: 'Las áreas visuales del lóbulo occipital: los primeros pasos desde el análisis de la imagen hasta la percepción de objetos y movimiento.',
      anatomy: [
        'Nodos principales: corteza visual primaria (V1, surco calcarino), las áreas visuales circundantes (V2–V4) y la corteza occipitotemporales ventral posterior.',
        'La red “Visual” del atlas de Yeo 2011; la vía dorsal limita con la red de atención dorsal y el frente de la vía ventral limita con las redes de modo predeterminado y límbicas.'
      ],
      functions: [
        'Análisis de características visuales (bordes, color, movimiento) y los primeros pasos del reconocimiento de objetos.',
        'Aprender a leer cambia las respuestas de la corteza visual, hasta V1 (Dehaene et al., 2010). [B]'
      ],
      development: [
        'La red visual primaria es similar a la de los adultos al nacer (Gao et al., 2015). [B]',
        'Períodos críticos de desarrollo visual: estrabismo o catarata no tratados en la primera infancia conducen a ambliopía permanente.'
      ],
      clinical: [
        'Impairment visual cerebral (cortical): la causa más común de discapacidad visual en la infancia en países desarrollados (tarjeta de lóbulo occipital). [A]',
        'Aura migrañosa, epilepsias occipitales; procesamiento visual enfocado en detalles en TEA.'
      ],
      tests: ['Agudeza visual y campos visuales', 'Pruebas de percepción visual (por ejemplo, subprueba de percepción visual Beery VMI)'],
      links: ['Red de atención dorsal (vía dorsal)', 'Tálamo geniculado lateral y pulvinar', 'Corteza temporal inferior y fusiforme']
    },
    lim: {
      name: 'Red Límbica (Yeo)', short: 'LIM',
      summary: 'En el atlas de Yeo, una red compuesta por la corteza orbitofrontal y el polo temporal; a pesar de su nombre, no incluye la amígdala ni el hipocampo.',
      anatomy: [
        'Nodos principales: corteza orbitofrontal y polo temporal (lóbulos temporal anteriores e inferiores).',
        'Una advertencia importante: estas regiones limitan interfaces aire-tejido (senos), por lo que la señal es débil en fMRI estándar y la definición de la red es incierta. La fMRI multi-eco de alta calidad sugiere que esta “red límbica” es en realidad parte de una red de modo predeterminado extendida (Girn et al., 2024). [C]',
        'El clásico sistema límbico (amígdala, hipocampo, hipotálamo) se encuentra fuera de la corteza y no está en este atlas de red.'
      ],
      functions: [
        'Corteza orbitofrontal: el valor de la recompensa y el castigo, aprendizaje reverso (tarjeta OFC).',
        'Polo temporal: conocimiento semántico y socioemocional sobre personas y objetos.'
      ],
      clinical: [
        'Cálculo del valor orbitofrontal en TOC, abuso de sustancias y trastorno de conducta (tarjeta OFC).',
        'Cambios en el comportamiento socioemocional en epilepsia del lóbulo temporal y daño en el polo temporal.'
      ],
      tests: ['Tarea de Juego de Iowa, aprendizaje reverso', 'Reconocimiento de rostros y personas, pruebas de conocimiento semántico'],
      links: ['Amígdala y hipotálamo', 'Red de modo predeterminado', 'Estriado ventral']
    }
  };
  (window.NEURO_NETWORKS || []).forEach((n) => { put(n, NETS[n.id]); n.tr = ''; });   // tr: Türkçe açıklama satırı, İngilizcede yok
  window.NEURO_NETWORKS_NOTE = 'Network borders come from the group average of 1000 young adults (Yeo et al., 2011). The location and borders of ' +
    'networks vary noticeably from person to person (Gordon et al., 2017); in children the networks are still less differentiated. The colors are ' +
    'the Yeo atlas’s original colors; the limbic network was darkened slightly so it shows on a light background.';

  /* ---------------------------------------------------------------- canlı yolaklar ve nörotransmitter sistemleri */
  const FD = window.FLOWDATA;
  if (FD) {
    const CHEM = { da: 'Dopamine', ne: 'Noradrenaline', '5ht': 'Serotonin', ach: 'Acetylcholine', his: 'Histamine', orx: 'Orexin',
      glu: 'Glutamate', gaba: 'GABA', oxt: 'Oxytocin / vasopressin', crf: 'CRF (stress peptide)', opi: 'Endogenous opioids',
      sp: 'Substance P', hor: 'Hormone (via the blood)' };
    Object.keys(CHEM).forEach((k) => { if (FD.CHEM[k]) FD.CHEM[k].name = CHEM[k]; });
    const PTS = { pit: 'Pituitary', body: 'Body (spinal cord and organs)', adrenal: 'Adrenal gland (via the blood)' };
    Object.keys(PTS).forEach((k) => { if (FD.POINTS[k]) FD.POINTS[k].name = PTS[k]; });
    const NOTE = {
      'sys:RAGE': 'Serotonin brakes this system; inhibitory flows are drawn as rings.',
      'sys:LUST': 'Gonadal steroids (testosterone, estrogen) switch the system on through receptors in these nuclei.',
      'sys:PANIC/GRIEF': 'μ-opioids, oxytocin and prolactin soothe separation distress (ring: inhibitory).',
      'path:vagal_aff': 'The state of the body (heart, stomach, breathing) reaches emotion and interoception via vagus → NTS → parabrachial.',
      'path:hpa': 'The hippocampus and mPFC brake the axis (ring); cortisol stops its own release by feedback.',
      'path:opioid': 'β-endorphin neurons in the arcuate nucleus and the hedonic “hot spots” in the accumbens–ventral pallidum.',
      'path:schore': 'According to the theory, the orbitofrontal-limbic circuit of the right hemisphere; only the right side is drawn.',
      'path:vagal_hier': 'An explanatory model from polyvagal theory; its core premises are debated (vagal nuclei card).',
      'path:amy_hip': 'In the consolidation of emotional memories, noradrenaline (β-receptor) acts on the amygdala and hippocampus together.',
      'path:frontolimbic': 'Rings show top-down inhibitory regulation: glutamatergic fibers excite inhibitory interneurons in the target.',
      'nt:orx': 'Orexin keeps the wakefulness nuclei (LC, raphe, histamine, acetylcholine) on together; its loss causes narcolepsy.',
      'nt:glu': 'Glutamate is the shared language of the cortex, thalamus and hippocampus; the main examples are drawn: corticostriatal, limbic, subthalamic, the cerebellar loop and the corticospinal tract. Pons → cerebellum and dentate → thalamus fibers cross to the other side. Cortico-cortical pathways are not drawn.',
      'nt:gaba': 'Rings are GABA (inhibitory), dots glutamate. The basal ganglia loop is drawn with the cortex: motor cortex → putamen (glutamate), putamen → GPi and GPe → STN, GPi → VA thalamus (GABA), thalamus → premotor cortex (glutamate). Also Purkinje → dentate, central amygdala → PAG, ventrolateral preoptic nucleus (hypothalamus) → LC; GABA fibers from the basal forebrain and medial septum to interneurons of the cortex and hippocampus. Local interneuron circuits are not drawn.'
    };
    Object.keys(NOTE).forEach((k) => { if (FD.SETS[k]) FD.SETS[k].note = NOTE[k]; });
    const LBL = {
      'ACTH (kanla) → adrenal korteks': 'ACTH (via the blood) → adrenal cortex',
      'Kortizol → hipokampus (negatif geri bildirim)': 'Cortisol → hippocampus (negative feedback)',
      'Kortizol → hipotalamus (negatif geri bildirim)': 'Cortisol → hypothalamus (negative feedback)',
      'PAG → RVM (inen ağrı ketlemesi)': 'PAG → RVM (descending pain inhibition)',
      'RVM → omurilik (ağrıyı frenler)': 'RVM → spinal cord (brakes pain)',
      'Ventrolateral PAG → vagus (donma, bradikardi)': 'Ventrolateral PAG → vagus (freezing, bradycardia)',
      'Hipotalamus → arka hipofiz (kana salınım)': 'Hypothalamus → posterior pituitary (release into the blood)',
      'Ventral vagal (nükleus ambiguus) → kalp: sakin bağlantı': 'Ventral vagal (nucleus ambiguus) → heart: calm engagement',
      'Sempatik: hipotalamus → omurilik → organlar (savaş/kaç)': 'Sympathetic: hypothalamus → spinal cord → organs (fight/flight)',
      'PAG → dorsal vagal: donma ve çöküş': 'PAG → dorsal vagal: freezing and collapse',
      'vmPFC → amigdala (interkalat hücreler üzerinden ketleme)': 'vmPFC → amygdala (inhibition via intercalated cells)',
      'Arkuat → hipofiz (prolaktini frenler)': 'Arcuate → pituitary (brakes prolactin)',
      'Rafe → omurilik (ağrı ve motor)': 'Raphe → spinal cord (pain and motor)',
      'LC → omurilik (inen ağrı ketlemesi)': 'LC → spinal cord (descending pain inhibition)',
      'Motor korteks → omurilik (kortikospinal yol)': 'Motor cortex → spinal cord (corticospinal tract)'
    };
    Object.values(FD.SETS).forEach((s) => s.routes.forEach((r) => { if (r.lbl && LBL[r.lbl]) r.lbl = LBL[r.lbl]; }));

    const NT = {
      da: {
        name: 'Dopamine Pathways', short: 'DA',
        summary: 'The signal of motivation, learning and movement: spreads along four main pathways; the shared target of stimulants and antipsychotics.',
        anatomy: [
          'Sources: ventral tegmental area (VTA), substantia nigra pars compacta (SNc), arcuate nucleus of the hypothalamus.',
          'Nigrostriatal pathway: SNc → caudate and putamen (movement, habit).',
          'Mesolimbic pathway: VTA → nucleus accumbens, amygdala, hippocampus (motivation, reward learning).',
          'Mesocortical pathway: VTA → prefrontal cortex and ACC (working memory, cognitive control).',
          'Tuberoinfundibular pathway: arcuate nucleus → pituitary; dopamine brakes prolactin release.'
        ],
        functions: [
          'Reward prediction error: a phasic dopamine burst when an outcome is better than expected, a dip when it is worse (Schultz). [B]',
          'Incentive salience (“wanting”): assigning motivational value to stimuli; “liking” depends more on the opioid system.',
          'Initiation and scaling of movement (nigrostriatal pathway).',
          'An inverted-U relationship via D1 receptors in prefrontal working memory: too little and too much both impair function (DLPFC card).'
        ],
        clinical: [
          'Psychosis: the clearest abnormality is presynaptic; striatal dopamine synthesis and release are increased (d ≈ 0.79), D2 receptors change very little (Howes et al., 2012). [A]',
          'ADHD: in untreated adults, dopamine transporter and D2/3 receptor levels along the reward pathway are low and relate to inattention (Volkow et al., 2009). [B]',
          'Antipsychotic side effects separate by pathway: nigrostriatal blockade → extrapyramidal symptoms; tuberoinfundibular blockade → hyperprolactinemia.',
          'Addiction: most addictive substances raise mesolimbic dopamine, directly or indirectly (Di Chiara and Imperato, 1988).'
        ],
        treatment: [
          'Estimulantes (metilfenidato, anfetamina): bloquean la recaptación de dopamina y noradrenalina; primera línea en TDAH. [A]',
          'Antipsicóticos: bloqueo de receptores D2. Xanomelina-trospium es el primer antipsicótico que no bloquea D2 (un agonista M1/M4; adultos, 2024). [A]',
          'Levodopa: precursor de la dopamina en distonía responsiva a dopa y enfermedad de Parkinson. [A]',
          'Bupropión: un inhibidor de la recaptación de dopamina y noradrenalina (depresión, cesación del tabaquismo).'
        ],
        links: [
          'Familia D1 (D1, D5): excitatoria; corteza prefrontal y la vía directa del estriado.',
          'Familia D2 (D2, D3, D4): inhibitoria; vía indirecta y autoreceptor; el objetivo de los antipsicóticos.',
          'Transportador de dopamina (DAT): el objetivo del metilfenidato y la anfetamina.'
        ]
      },
      '5ht': {
        name: 'Vías de Serotonina', short: '5-HT',
        summary: 'Un modulador que se extiende desde los núcleos del raphe hasta todo el cerebro: estado de ánimo, control de impulsos, sueño y dolor; el objetivo de los ISRS.',
        anatomy: [
          'Fuentes: los núcleos del raphe dorsal y medial (mesencéfalo y puente) ascienden al prosencéfalo; los núcleos del raphe caudal descienden a la médula espinal.',
          'Objetivos: corteza prefrontal y cingulada, hipocampo, amígdala, estriado, tálamo, hipotálamo, cerebelo y médula espinal.'
        ],
        functions: [
          'Estado de ánimo y control de impulsos; regulación de la respuesta a eventos negativos.',
          'Sueño-vigilia y ritmo circadiano; apetito (5-HT2C en el hipotálamo).',
          'Control del dolor descendente (raphe → médula espinal).'
        ],
        clinical: [
          'Depresión, ansiedad y TOC: el objetivo de los ISRS es el transportador de serotonina.',
          'Síndrome serotoninérgico: agitación, hipertermia y clonus con combinaciones de fármacos serotoninérgicos.',
          'Hallazgos de baja función serotonérgica en agresión impulsiva y autolesiones (tarjeta del raphe).'
        ],
        treatment: [
          'Depresión en adolescentes (TADS): respuesta del 71% con fluoxetina + CBT frente al 35% con placebo (TADS, 2004). [A]',
          'Ansiedad infantil (CAMS): mejora con sertralina + CBT 80.7% frente a placebo 23.7% (Walkup et al., 2008). [A]',
          'Los antipsicóticos atípicos también bloquean los receptores 5-HT2A; buspirona es un agonista parcial de 5-HT1A.',
          'La advertencia sobre el pensamiento suicida en menores de 25 años con antidepresivos: monitoreo cercano al inicio.'
        ],
        links: [
          '5-HT1A: inhibitoria; autoreceptor en el raphe, hipocampo y corteza.',
          '5-HT2A: excitatoria; corteza; bloqueada por antipsicóticos atípicos, activada por psicodélicos.',
          '5-HT2C: apetito y liberación de dopamina; vinculada al aumento de peso relacionado con antipsicóticos.',
          '5-HT3: ionotrópico; náusea (área postrema); el objetivo de ondansetron.',
          'Transportador de serotonina (SERT): el objetivo de los ISRS.'
        ]
      },
      ne: {
        name: 'Vías de Noradrenalina', short: 'NE',
        summary: 'Una señal de vigilia y atención que se extiende desde el locus coeruleus; inicia la respuesta al estrés y tiene una relación en forma de U invertida con la función prefrontal.',
        anatomy: [
          'Fuente: locus coeruleus (puente); un pequeño núcleo que se ramifica a casi todo el cerebro. El grupo tegmental lateral (médula) proyecta al hipotálamo y la amígdala.',
          'Objetivos: toda la corteza, hipocampo, amígdala, tálamo, hipotálamo, cerebelo y médula espinal; poca contribución al estriado.'
        ],
        functions: [
          'Vigilia y excitación; enfocando la atención en una tarea o abriéndola a la exploración (ganancia adaptativa).',
          'En la corteza prefrontal, los receptores α2A fortalecen la red de memoria de trabajo; los altos niveles de estrés la perjudican a través de α1 y β (Wang et al., 2007). [B]',
          'Consolidación de eventos emocionales en la memoria (receptores β en la amígdala y el hipocampo).',
          'Inhibición del dolor descendente (LC → médula espinal).'
        ],
        clinical: [
          'TDAH: el objetivo de los tratamientos noradrenérgicos.',
          'Ansiedad, pánico y TEPT: reactividad noradrenérgica aumentada, hiperactividad.',
          'Retirada de opioides: la hiperactividad de LC causa síntomas autónomos de retirada.'
        ],
        treatment: [
          'Atomoxetine (un inhibidor de la recaptación de noradrenalina); guanfacina (un agonista α2A selectivo) y clonidina (un agonista α2). [A]',
          'SNRIs y bupropión; propranolol (un bloqueador β) para los síntomas corporales de la ansiedad por rendimiento.',
          'La prazosina no fue superior al placebo para pesadillas de TEPT en un gran ensayo (Raskind et al., 2018). [B]',
          'Lofexidina y clonidina en la retirada de opioides; lofexidina está aprobada por la FDA para adultos (2018). [A]'
        ],
        links: [
          'α1: excitatorio; perjudica la función prefrontal bajo estrés; bloqueada por prazosina.',
          'α2A: autoreceptor inhibitoria y en espinas prefrontales; el objetivo de guanfacina y clonidina.',
          'β1 y β2: consolidación de la memoria y el corazón; bloqueados por propranolol.',
          'Transportador de noradrenalina (NET): el objetivo de atomoxetine; también limpia dopamina en la corteza prefrontal.'
        ]
      },
      ach: {
        name: 'Vías de Acetilcolina', short: 'ACh',
        summary: 'La señal colinérgica de atención, aprendizaje y vigilia: del cerebro basal a la corteza, del septo al hipocampo, del tronco encefálico al tálamo.',
        anatomy: [
          'Cerebro basal (núcleo basalis de Meynert) → toda la corteza; septo medial y banda diagonal → hipocampo (fornix). El núcleo basalis y la banda diagonal son estructuras separadas en el modelo (Neudorfer et al., 2020); como el septo medial no está en atlas abiertos, el camino hacia el hipocampo comienza desde la banda diagonal.',
          'Núcleos pedunculopontinos y tegmentales laterodorsales (PPN/LDT) → tálamo, VTA, SN: vigilia y sueño REM.',
          'En el estriado, las interneuronas colinérgicas locales están equilibradas con dopamina.'
        ],
        functions: [
          'Atención y detección de señales; abriendo la corteza a la entrada sensorial.',
          'Codificación de nuevos recuerdos en el hipocampo.',
          'Vigilia y sueño REM (PPN/LDT).'
        ],
        clinical: [
          'Carga anticolinérgica: varios fármacos anticolinérgicos juntos perjudican la atención y la memoria y aumentan el riesgo de delirium (tarjeta PPN).',
          'Para los efectos secundarios extrapiramidales de los antipsicóticos, se utilizan anticolinérgicos en distonía aguda y parkinsonismo; su efecto en la akatisia es limitado y pueden empeorar la discinesia tardía (el equilibrio dopamina-acetilcolina estriatal).',
          'En la enfermedad de Alzheimer, se pierden temprano las neuronas colinérgicas del cerebro basal (adultos).'
        ],
        treatment: [
          'Xanomeline-trospium: un agonista colinérgico M1/M4; el primer antipsicótico efectivo sin bloquear la dopamina (adultos, 2024). [A]',
          'Biperiden: para distonía aguda inducida por antipsicóticos. [B]',
          'Inhibidores de la colinesterasa: en la enfermedad de Alzheimer (adultos).'
        ],
        links: [
          'Receptores nicotínicos (ionotrópicos; α4β2, α7): atención; adicción al tabaco.',
          'Muscarínico M1 (corteza, hipocampo: memoria) y M4 (estriado: equilibrio de dopamina).'
        ]
      },
      his: {
        name: 'Vías de Histamina', short: 'HA',
        summary: 'Uno de los interruptores químicos de la vigilia: del núcleo tuberomamilar del hipotálamo posterior a todo el cerebro; la causa de la sedación y los efectos secundarios de peso de muchos fármacos psicotrópicos.',
        anatomy: [
          'Fuente: núcleo tuberomamilar (hipotálamo posterior; una estructura separada dentro del hipotálamo en el modelo).',
          'Objetivos: toda la corteza, tálamo, hipocampo, amígdala, cerebro basal.'
        ],
        functions: [
          'Mantenimiento de la vigilia (receptor H1); silencioso durante el sueño.',
          'Regulación del apetito y la atención.'
        ],
        clinical: [
          'Bloqueo H1: los antihistamínicos sedantes, muchos antipsicóticos y mirtazapina causan somnolencia y aumento de peso (tarjeta del hipotálamo).',
          'En la narcolepsia, con pérdida de orexina, el sistema histamínico también está menos estimulado; sin embargo, estudios post-mortem encontraron un número aumentado de neuronas histaminérgicas (Valko et al., 2013).'
        ],
        treatment: [
          'Pitolisant (un agonista inverso H3): aumenta la liberación de histamina; aprobado por la FDA desde los 6 años para la somnolencia diurna en narcolepsia (2024). [A]',
          'Antihistamínicos sedantes (por ejemplo, hidroxicina) se utilizan para la ansiedad a corto plazo; las pautas no los recomiendan para el insomnio, se desarrolla tolerancia y tienen una carga anticolinérgica (Sateia et al., 2017).'
        ],
        links: [
          'H1: vigilia; el objetivo de los fármacos sedantes.',
          'H3: autoreceptor inhibitoria; pitolisant actúa en la dirección opuesta.'
        ]
      },
      orx: {
        name: 'Vías de Orexina (Hipocretina)', short: 'OX',
        summary: 'El estabilizador de vigilia del hipotálamo lateral: mantiene activados los otros núcleos de vigilia juntos; su pérdida causa narcolepsia.',
        anatomy: [
          'Fuente: un pequeño número de neuronas en el hipotálamo lateral y perifornical.',
          'Objetivos: locus coeruleus, raphe, núcleo tuberomammilar, VTA, PPN/LDT y corteza.'
        ],
        functions: [
          'Estabiliza el interruptor sueño-vigilia: nos mantiene despiertos cuando estamos despiertos y dormidos cuando estamos dormidos.',
          'Motivación vinculada a la alimentación y la recompensa (proyección al VTA; el sistema SEEKING).'
        ],
        clinical: [
          'Narcolepsia tipo 1: 85–95% de las neuronas de orexina se pierden (Thannickal et al., 2000); el inicio es a menudo en la infancia y la adolescencia. [B]',
          'Insomnio: se utilizan antagonistas de receptores de orexina en adultos.'
        ],
        treatment: [
          'En la narcolepsia, el oxibato de sodio (desde los 7 años, 2018) y pitolisant (desde los 6 años, 2024) están aprobados por la FDA. [A]',
          'Antagonistas duales de receptores de orexina (por ejemplo, suvorexant): para insomnio en adultos.'
        ],
        links: ['Receptores de orexina 1 y 2: principalmente OX1 en el locus coeruleus, OX2 en el núcleo tuberomammilar; ambos en el raphe y VTA.']
      },
      glu: {
        name: 'Vías de Glutamato', short: 'Glu',
        summary: 'La principal señal excitatoria del cerebro: utilizada por las neuronas de proyección de la corteza, tálamo y hipocampo; portadora del aprendizaje y la memoria, y el objetivo de la ketamina.',
        anatomy: [
          'Las neuronas piramidales corticales, las neuronas de relevo talámico, el hipocampo, la amígdala basolateral, el núcleo subtalámico y las células granulares del cerebelo utilizan glutamato. Solo el 19% de los 86 mil millones de neuronas del cerebro se encuentran en la corteza cerebral; la mayoría son células granulares del cerebelo (Azevedo et al., 2009).',
          'Vía corticostriatal: corteza prefrontal y motora → caudado, putamen y accumbens; la entrada a los bucles de ganglios basales.',
          'Vía talamocortical: tálamo (MD, VA, VL) → corteza prefrontal y motora; la corteza proyecta de regreso al tálamo.',
          'Entradas límbicas: hipocampo → accumbens (contexto), amígdala → mPFC (valor emocional).',
          'Núcleo subtalámico → GPi (el enlace excitatorio de la vía indirecta); puente → cerebelo y dentado → tálamo (el bucle cerebeloso).',
          'Largas vías cortico-corticales (por ejemplo, el fascículo arqueado: temporal superior → Broca) y el tracto corticoespinal (corteza motora → médula espinal). Solo se dibujan en 3D los ejemplos principales de estas vías.'
        ],
        functions: [
          'Transmisión excitatoria rápida: transportando información de la sensación al movimiento (receptores AMPA).',
          'Aprendizaje y memoria: el receptor NMDA detecta actividad coincidente; la potenciación a largo plazo (LTP) es el modelo celular de la memoria (Bliss y Collingridge, 1993). [B]',
          'La entrada corticostriatal lleva selección de acciones y hábitos; la dopamina ajusta el efecto de esta entrada.',
          'Demasiado es tóxico (excitotoxicidad): contribuye a la muerte de neuronas en accidentes cerebrovasculares, trauma y convulsiones prolongadas (Choi, 1988). [B]'
        ],
        development: [
          'Temprano en el desarrollo, la subunidad GluN2B domina los receptores NMDA; con la maduración, GluN2A aumenta y la sinapsis trabaja más rápido (rata; Monyer et al., 1994). [B]',
          'Poda sináptica: la densidad de espinas dendríticas en la corteza prefrontal es de dos a tres veces el valor adulto en la infancia, comienza a caer en la pubertad y la poda continúa durante los veinte años (Petanjek et al., 2011). [B]'
        ],
        clinical: [
          'Encefalitis anti-receptor NMDA: todos los 100 pacientes presentaron síntomas psiquiátricos o problemas de memoria (Dalmau et al., 2008); los niños constituyen el 40% de los casos, y en el 87.5% el primer signo es un cambio en comportamiento o personalidad (Florance et al., 2009). Considérelo cuando la psicosis de nuevo inicio viene acompañada de convulsiones, movimientos involuntarios o alteraciones en la conciencia. [B]',
          'Esquizofrenia, la hipótesis de hipofunción NMDA: en voluntarios sanos, la ketamina produjo un cuadro que se asemeja a los síntomas positivos y negativos de la esquizofrenia (Krystal et al., 1994). [B]',
          'TOC: en niños no tratados, los metabolitos glutamatérgicos del caudado (Glx) estaban altos y cayeron con 12 semanas de paroxetina; la caída siguió la mejora de los síntomas (11 niños; Rosenberg et al., 2000). [C]',
          'Depresión: en un metaanálisis de MRS, el glutamato + glutamina (Glx) es bajo en la corteza frontal medial (Moriguchi et al., 2019). [A]',
          'Síndrome del cromosoma X frágil: el mavoglurant, un antagonista mGluR5 basado en modelos animales, no se separó del placebo en el endpoint primario en ensayos en adolescentes y adultos (Berry-Kravis et al., 2016). [B]'
        ],
        treatment: [
          'Ketamina (antagonista NMDA): en la depresión resistente al tratamiento en adultos, una sola dosis funcionó en 2 horas y el efecto duró una semana (Zarate et al., 2006); el spray nasal de esketamina está aprobado por la FDA para la depresión resistente al tratamiento en adultos (2019). [A]',
          'En adolescentes: una sola dosis de ketamina superó a un placebo activo (midazolam) a las 24 horas (17 adolescentes; Dwyer et al., 2021); en adolescentes en riesgo inminente de suicidio, la esketamina fue mejor por un pequeño margen a las 24 horas, y la gravedad de suicidio disminuyó en todos los grupos (147 adolescentes; Kosik-Gonzalez et al., 2026). No aprobado para adolescentes. [C]',
          'Un posible mecanismo del efecto rápido: formación de nuevas sinapsis en la corteza prefrontal a través de la vía mTOR (rata; Li et al., 2010). [C]',
          'Tratamientos complementarios que apuntan al glutamato en TOC (memantina, N-acetilcisteína, riluzole) están en estudio; la evidencia es limitada (Pittenger et al., 2011). [C]',
          'Otros fármacos que actúan a través del glutamato: lamotrigina (reduce la liberación de glutamato), memantina (antagonista NMDA; enfermedad de Alzheimer), perampanel (antagonista AMPA; epilepsia).'
        ],
        links: [
          'AMPA: transporta la corriente excitatoria rápida; la fuerza sináptica se establece por el número de receptores AMPA.',
          'NMDA: un detector de coincidencia; necesita glutamato más glicina o D-serina, su bloqueo por magnesio se levanta solo cuando la célula está despolarizada y la entrada de calcio desencadena plasticidad. Ketamina, memantina y fenciclidina bloquean el canal.',
          'Receptores de kainato y metabotrópicos (mGluR1–8): efectos más lentos y moduladores.',
          'Transportadores: VGLUT1 vesicular (corteza, hipocampo) y VGLUT2 (tálamo, tronco encefálico). Los astrocitos (EAAT2) absorben la mayoría del glutamato liberado y lo devuelven a las neuronas como glutamina (Danbolt, 2001).'
        ]
      },
      gaba: {
        name: 'Vías GABAérgicas', short: 'GABA',
        summary: 'La principal señal de freno del cerebro: presente sobre todo en interneuronas locales; sus vías largas son las eferencias de los ganglios basales, cerebelo y amígdala; diana de benzodiacepinas y alcohol.',
        anatomy: [
          'La mayoría de las neuronas GABA son interneuronas locales: una minoría numérica en corteza e hipocampo pero muy diversas (células de parvalbúmina, somatostatina y VIP), regulan el momento en que disparan las neuronas excitatorias (Tremblay et al., 2016). Estos circuitos locales no se dibujan en 3D.',
          'Ganglios basales: las neuronas de proyección del cuerpo estriado (neuronas espinosas medianas) son GABAérgicas. La vía directa va del estriado al GPi y SNr, la vía indirecta al GPe y luego al núcleo subtalámico; el GPi y el SNr frenan el tálamo de forma continua (Albin et al., 1989).',
          'Bucle de recompensa: accumbens → pálido ventral → núcleo mediodorsal del tálamo.',
          'Cerebelo: las células de Purkinje son la única salida de la corteza cerebelosa y frenan los núcleos profundos (dentado).',
          'El núcleo central de la amígdala (eferencia GABAérgica) → hipotálamo, PAG y tronco del encéfalo. El núcleo preóptico ventrolateral (VLPO) del hipotálamo frena el LC, el rafe y el núcleo tuberomamilar durante el sueño. El núcleo reticular talámico y el VLPO no son estructuras separadas en el modelo.',
          'Fibras GABA que llegan a la corteza y al hipocampo: las neuronas GABA del tabique medial y del prosencéfalo basal se dirigen selectivamente a las interneuronas inhibidoras locales (inhibición de la inhibición, marcapasos de ritmos) (Freund and Antal, 1988; Freund and Meskenaite, 1992). [B]'
        ],
        functions: [
          'Mantiene el equilibrio entre excitación e inhibición; cuando la inhibición se queda corta, las redes se sobreexcitan y cae el umbral convulsivo.',
          'Temporización y ritmo: las interneuronas de parvalbúmina de disparo rápido generan oscilaciones gamma (Cardin et al., 2009). [B]',
          'Selección de acciones: la vía directa levanta el freno continuo de los ganglios basales sobre el tálamo (liberando el movimiento), la vía indirecta lo refuerza (Albin et al., 1989). [B]',
          'Sueño: las neuronas del VLPO se encienden durante el sueño y frenan los sistemas de vigilia (Sherin et al., 1996; Saper et al., 2005). [B]',
          'Inmovilidad (freezing): la vía inhibidora del núcleo central de la amígdala inicia la inmovilidad al liberar las salidas excitatorias del PAG del freno que las contenía (ratón; Tovote et al., 2016). [C]'
        ],
        development: [
          'En fases tempranas del desarrollo el GABA es excitador: el cloruro intracelular es alto; cuando aparece más tarde el exportador de cloruro (KCC2), el GABA se vuelve inhibidor (Ben-Ari, 2002). [B]',
          'Períodos críticos: la maduración de los circuitos inhibidores abre el período crítico sensorial; en ratones una benzodiacepina inició este período tempranamente (Fagiolini and Hensch, 2000; Hensch, 2005). [B]'
        ],
        clinical: [
          'Epilepsia: una inhibición insuficiente prepara el terreno para las convulsiones; muchos fármacos anticomiciales refuerzan el sistema GABA.',
          'Esquizofrenia: la síntesis de GABA está reducida en las interneuronas de parvalbúmina de la CPFDL; vinculada a déficits de memoria de trabajo y de ritmo gamma (Lewis et al., 2005). [B]',
          'Autismo: el desequilibrio excitación-inhibición es un modelo teórico (Rubenstein and Merzenich, 2003). La bumetanida (un bloqueador de NKCC1), dirigida a reforzar el efecto inhibidor del GABA, no se diferenció del placebo en dos ensayos de fase 3 en edades de 2 a 17 años (Fuentes et al., 2023). [A]',
          'Síndrome de Tourette: estudios post mortem hallaron menos interneuronas de parvalbúmina en caudado y putamen (Kalanithi et al., 2005; Kataoka et al., 2010). [C]',
          'Depresión: en un metaanálisis de espectroscopia por RM (MRS), el GABA es bajo, más claramente en el cíngulo anterior (Godfrey et al., 2018). [A]',
          'Benzodiacepinas y alcohol potencian el receptor GABA-A: juntos deprimen la respiración; el uso a largo plazo genera tolerancia y dependencia, y su retirada brusca entraña riesgo de convulsiones.'
        ],
        treatment: [
          'Estado epiléptico: en niños las benzodiacepinas son de primera línea; lorazepam y diazepam intravenosos (nivel A), o sin acceso IV diazepam rectal o midazolam intramuscular, intranasal o bucal (nivel B) (Glauser et al., 2016). [A]',
          'Para la ansiedad en niños y adolescentes la guía recomienda TCC e ISRS; las benzodiacepinas no figuran entre sus recomendaciones (Walter et al., 2020). [A]',
          'Vigabatrina (inhibe la enzima que degrada el GABA): aprobada por la FDA para espasmos infantiles (2009); dosis más altas funcionan mejor, y la respuesta es más rápida en esclerosis tuberosa (Elterman et al., 2001). Se requiere monitorización oftalmológica por riesgo de pérdida permanente de campo visual. [A]',
          'Neuroesteroides (GABA-A extrasináptico): brexanolona fue eficaz para depresión posparto en dos ensayos de fase 3 (Meltzer-Brody et al., 2018); brexanolona (2019) y zuranolona (2023) están aprobadas por la FDA en adultos. [A]',
          'A pesar de sus nombres, la gabapentina y la pregabalina no se unen a los receptores GABA; se unen a la subunidad α2δ de los canales de calcio dependientes de voltaje.'
        ],
        links: [
          'GABA-A: canal de cloruro, inhibición rápida. Las benzodiacepinas se unen entre las subunidades α y γ2; según la genética en ratones, α1 media sedación y amnesia, α2 y α3 alivio de la ansiedad (Rudolph and Knoflach, 2011). Alcohol, barbitúricos, neuroesteroides y anestésicos generales también potencian este receptor. [B]',
          'GABA-A extrasináptico (con subunidad δ): inhibición continua (tónica); diana de neuroesteroides.',
          'GABA-B: acoplado a proteínas G, inhibición lenta; diana del baclofeno.',
          'Síntesis y eliminación: el GABA se produce a partir de glutamato por la GAD (GAD65, GAD67); GAT-1 lo recapta (el tiagabina lo bloquea), la GABA transaminasa lo degrada (la vigabatrina la inhibe).',
          'Los transportadores de cloruro NKCC1 (hacia dentro) y KCC2 (hacia fuera) deciden si el GABA excita o inhibe; la bumetanida bloquea NKCC1.'
        ]
      }
    };
    FD.NT.forEach((n) => put(n, NT[n.id]));
  }

  /* ---------------------------------------------------------------- kitap katmanı: kısa alanlar */
  const DV = window.DIVAN;
  if (DV) {
    DV.book.chapter = 'Chapter 20 — Neuroanatomical Correlation';
    DV.chapters = {
      1: 'Phase 0 — Before Birth: Fetal Programming', 2: 'Phase 1 — Foundation (0–6 months): Damasio, Freud; OCD and autism',
      3: 'Phase 2 — Deepening (6–12 months): Winnicott, CARE and PANIC/GRIEF, Klein', 4: 'Mahler: Separation-Individuation',
      5: 'Phase 3 — Integration (1–2 years): Schore, polyvagal theory, Fonagy, Bowlby', 6: 'Phase 4 — Synthesis: Friston and Solms',
      7: 'Phase 5 — Advanced Integration: from Stern to Bion', 8: 'SEEKING and PLAY', 9: 'RAGE', 10: 'The FEAR System', 11: 'The LUST System',
      12: 'Oral, Anal and Phallic Stages', 13: 'The Latency Period', 14: 'Genital Stage I: Mature Love', 15: 'Genital Stage II: Identity and Body Schema',
      16: 'Erikson: Eight Stages', 17: 'Anna Freud: Defenses', 18: 'Trauma and PTSD in Children', 19: 'Case Formulation Template',
      20: 'Neuroanatomical Correlation', 21: 'Diagnosis-Based Analyses', 22: 'Research Proposals'
    };
    const SYS = {
      SEEKING: { feel: 'curiosity, anticipation, eager seeking',
        circuit: 'VTA → nucleus accumbens and mPFC; lateral hypothalamus (medial forebrain bundle)',
        chem: 'dopamine (+), glutamate (+), orexin, neurotensin; opioids (+/−)',
        clinic: 'anhedonia, depression, addiction, ADHD, aberrant salience in mania and psychosis' },
      RAGE: { feel: 'anger, frustration',
        circuit: 'medial amygdala → BNST → medial and perifornical hypothalamus → dorsal PAG',
        chem: 'substance P (+), glutamate (+), acetylcholine (+); GABA, serotonin (−)',
        clinic: 'irritability, DMDD, conduct problems, reactive aggression' },
      FEAR: { feel: 'fear, tension, being on guard',
        circuit: 'lateral and central amygdala → medial hypothalamus → dorsal PAG',
        chem: 'glutamate (+), CRF, CCK, NPY, α-MSH; GABA (−)',
        clinic: 'phobias, generalized anxiety, PTSD, behavioral inhibition' },
      LUST: { feel: 'sexual desire, erotic pleasure',
        circuit: 'corticomedial amygdala, BNST, preoptic area, ventromedial hypothalamus, lateral and ventral PAG',
        chem: 'gonadal steroids, vasopressin, oxytocin, LH-RH, CCK',
        clinic: 'sexual dysfunctions, hypersexuality, SSRI-related sexual side effects' },
      CARE: { feel: 'tenderness, the urge to nurture, warmth',
        circuit: 'ACC, BNST, preoptic area, VTA, PAG',
        chem: 'oxytocin (+), prolactin (+), dopamine (+), opioids (+/−)',
        clinic: 'parenting difficulties, postpartum depression, attachment problems' },
      'PANIC/GRIEF': { feel: 'separation distress, loneliness, grief',
        circuit: 'ACC, BNST and preoptic area, dorsomedial thalamus, dorsal PAG',
        chem: 'CRF (+), glutamate (+); μ-opioids, oxytocin, prolactin (−)',
        clinic: 'separation anxiety, panic, depression, complicated grief' },
      PLAY: { feel: 'joy, playfulness, laughter',
        circuit: 'dorsomedial diencephalon, parafascicular thalamus, ventral PAG',
        chem: 'opioids (+/−), endocannabinoids, glutamate (+), acetylcholine (+)',
        clinic: 'ADHD, social play in autism, traumatic play, depression' }
    };
    (DV.systems || []).forEach((s) => put(s, SYS[s.id]));
    DV.systemsNote = 'Source: simplified from the reviews of Panksepp (1998a) and Panksepp and Biven (2012). (+) marks neurochemicals that excite the system, (−) those that suppress it. In the model, the preoptic area and the dorsomedial diencephalon are shown within the hypothalamus/thalamus regions.';
    const PATH = {
      mezo: { name: 'Mesolimbic and mesocortical pathway', chain: 'VTA → NAcc → PFC' },
      vagal_aff: { name: 'Vagal afferent pathway', chain: 'Cranial nerve X → NTS → parabrachial → amygdala / hypothalamus / insula' },
      hpa: { name: 'HPA axis', chain: 'amygdala → hypothalamus (PVN) → CRF → pituitary → ACTH → adrenal cortex → cortisol' },
      pag_col: { name: 'The columns of the PAG', chain: 'dorsal, lateral, ventrolateral columns' },
      oxt: { name: 'Oxytocin/vasopressin pathways', chain: 'spreading from the paraventricular hypothalamus' },
      opioid: { name: 'Opioid and endocannabinoid systems', chain: 'not wanting (dopamine) but liking (hedonic tone)' },
      schore: { name: 'Right brain–right brain communication pathway (Schore)', chain: 'the orbitofrontal-limbic circuits of mother and infant' },
      vagal_hier: { name: 'Ventral–dorsal vagal hierarchy (Porges’s three systems)', chain: 'ventral vagal → sympathetic → dorsal vagal' },
      amy_hip: { name: 'Amygdala–hippocampus contextual learning circuit', chain: '“what” (amygdala) + “where/when” (hippocampus)' },
      frontolimbic: { name: 'Fronto-limbic maturation pathway', chain: 'vmPFC/OFC → amygdala and subcortical structures' }
    };
    (DV.pathways || []).forEach((p) => put(p, PATH[p.id]));
  }
})();
