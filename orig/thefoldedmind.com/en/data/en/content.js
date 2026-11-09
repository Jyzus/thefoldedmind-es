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
    pons: 'Middle part of the CerebrA brainstem label (about z −21 to −47 mm; set by the anterior bulge).',
    medulla: 'Lower part of the CerebrA brainstem label (z < −47 mm). The template’s field of view cuts off the lower end of the medulla.',
    cerebellum: 'CerebrA cerebellar gray and white matter and vermis labels. Folia are not distinct in the average template. When selected, the surface is colored by SUIT lobules (Diedrichsen et al., 2009); the dentate and interposed nuclei lie inside. The fastigial nucleus is not shown because it is only a few voxels in the atlas’s most-probable label map.',
    cb_vermis: CB + ' Because vermis I–V is not labeled separately in SUIT, it is included in the anterior lobe, and vermis X (nodulus) in the flocculonodular lobe.',
    cb_dentate: 'SUIT deep nuclei atlas (Diedrichsen et al., 2011), most-probable label map; a smoothed, volume-preserving surface.',
    cb_interposed: 'SUIT deep nuclei atlas (Diedrichsen et al., 2011), most-probable label map; a smoothed, volume-preserving surface.'
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
      name: 'Default Mode Network', short: 'DMN',
      summary: 'The network that switches on when we withdraw from the outside world: thinking about oneself, memories, imagining the future and understanding other minds.',
      anatomy: [
        'Main nodes: medial prefrontal cortex, posterior cingulate and precuneus, angular gyrus (inferior parietal), lateral temporal cortex, hippocampal formation.',
        'The connection between the anterior (mPFC: self and value) and posterior (PCC/precuneus: memory and scene construction) hubs is the backbone of the network.',
        'In the model, the “Default” network of the Yeo 2011 seven-network atlas; the largest network of the cortex.'
      ],
      functions: [
        'Active at rest and suppressed during tasks that demand outward attention; its deactivation during tasks was first shown in PET studies (Shulman et al., 1997); Raichle et al. (2001) named it the “default mode”. [B]',
        'Autobiographical memory, imagining the future, self-referential thinking and mind-wandering.',
        'Theory of mind: inferring others’ beliefs and intentions (together with the dmPFC and TPJ).',
        'During tasks it works opposite (anticorrelated) to the attention networks; the salience network sets this balance (the triple network model; Menon, 2011). [B]'
      ],
      development: [
        'At ages 7–9, connections among the network’s regions are sparse; over development the network becomes a single integrated system (Fair et al., 2008). [B]',
        'As part of association cortex it is among the latest-maturing networks; unlike sensorimotor networks, it carries a long window of plasticity (Sydnor et al., 2021). [B]'
      ],
      clinical: [
        'ADHD: the normally opposite relationship between the dorsal ACC and the DMN is weakened (Castellanos et al., 2008); the DMN is not suppressed enough during tasks and attention fluctuates (“default mode interference”; Sonuga-Barke and Castellanos, 2007). [B]',
        'Depression: increased connectivity within the DMN and between the DMN and the frontoparietal system; a shift toward inward thought (rumination) (Kaiser et al., 2015; 556 patients). [A]',
        'Schizophrenia: the DMN is overactive and overconnected; weak mPFC suppression during tasks. The same finding appears in unaffected first-degree relatives (Whitfield-Gabrieli et al., 2009; small sample). [C]',
        'ASD: differences in DMN connectivity have been reported, with inconsistent direction across studies.'
      ],
      treatment: [
        'Stimulants bring DMN suppression during tasks to healthy levels in youth with ADHD (Peterson et al., 2009). [B]',
        'Long-term meditators show lower activity in DMN hubs (mPFC, PCC) and stronger connectivity of the PCC with control regions (Brewer et al., 2011). A group comparison; not cause and effect. [C]',
        'Rumination-focused CBT and behavioral activation target the DMN’s inward-turned activity in depression.'
      ],
      tests: [
        'Resting-state fMRI connectivity (research)',
        'DMN suppression during tasks (e.g. working memory tasks)',
        'Mind-wandering sampling methods; theory of mind tasks'
      ],
      links: ['Salience network (switching between networks)', 'Frontoparietal control network (working together on hard tasks)', 'Hippocampus (memory subsystem)', 'Thalamus mediodorsal nucleus, cerebellum Crus I–II']
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
      name: 'Multiple-Demand (MD) Core', short: 'MD',
      summary: 'A “general-purpose” core that activates together in almost any difficult task: the infrastructure of fluid intelligence and problem solving.',
      anatomy: [
        '10 HCP-MMP1.0 areas in each hemisphere: i6-8, p9-46v, a9-46v, 8C, IFJp (lateral prefrontal), 8BM/SCEF (medial frontal), AVI (anterior insula), IP1, IP2 (intraparietal sulcus), PFm (inferior parietal) (Assem et al., 2020). A penumbra of 17 areas surrounds it. [B]',
        'Outside the cortex the strongest activity is in the caudate and cerebellum (Assem et al., 2020). [B]',
        'It lies mostly within the frontoparietal control network but spills into three other resting-state networks; in the model it is painted as a separate layer, independent of the Yeo networks.'
      ],
      functions: [
        'Difficulty regardless of task type: activates together as difficulty rises across very different tasks such as working memory, reasoning and task switching. [B]',
        'Fluid intelligence: in 80 patients with focal lesions, loss of fluid intelligence was linked only to damage in these frontoparietal areas (Woolgar et al., 2010). Damage to language areas does not affect fluid intelligence. [B]'
      ],
      development: [
        'The maturation curve of executive functions (rapid at 10–15, adult level at 18–20) reflects the development of this system (Tervo-Clemmens et al., 2023). [A]'
      ],
      clinical: [
        'Loss of “general intelligence” after prefrontal or parietal damage is linked to lesions falling on this core (Woolgar et al., 2010). [B]',
        'In neuropsychological assessment, a drop on fluid reasoning tests suggests a “core” impairment separate from language or sensory problems.'
      ],
      tests: ['Fluid reasoning: Raven’s Matrices, WISC-V Fluid Reasoning subtests', 'Working memory and task-switching tasks'],
      links: ['Frontoparietal control network (largely overlapping)', 'Salience network (anterior insula AVI)', 'Caudate and cerebellum']
    },
    sal: {
      name: 'Salience and Ventral Attention Network', short: 'SN / VAN',
      summary: 'The network that notices what matters and turns attention to it: initiates switching between the other networks according to salient signals from the body and the environment.',
      anatomy: [
        'Main nodes: anterior insula and frontal operculum, dorsal anterior cingulate, right temporoparietal junction, ventral frontal cortex.',
        'Definition of the salience network: a network with dorsal ACC and orbital frontoinsular hubs, strongly connected with subcortical and limbic structures; it separates from the executive control network (Seeley et al., 2007). [B]',
        'In the Yeo 2011 atlas the salience and ventral attention networks emerge as a single network (“Salience/Ventral Attention”).'
      ],
      functions: [
        'Switching between networks: the right frontoinsular cortex initiates activation of the central executive network and deactivation of the DMN (Sridharan et al., 2008). [B]',
        'Reorienting attention to unexpected but important stimuli (ventral attention; Corbetta and Shulman, 2002). [B]',
        'Interoception and emotional salience: turning bodily state into conscious feeling (insula), conflict and error monitoring (ACC).'
      ],
      development: [
        'Anterior insula–ACC connections strengthen in adolescence (insula card); sensitivity to emotional salience is high in adolescence.'
      ],
      clinical: [
        'A shared transdiagnostic finding: the most consistent sites of gray matter loss across psychiatric disorders are the dorsal ACC and bilateral anterior insula; weakening of this network relates to executive difficulties (Goodkind et al., 2015; 193 studies). [A]',
        'Anxiety: connectivity of the dorsal ACC salience node relates to anxiety level (Seeley et al., 2007). [C]',
        'Triple network model: imbalance among the salience, executive and default mode networks is proposed as a shared mechanism in depression, schizophrenia, ADHD and ASD (Menon, 2011). [B]',
        'Aberrant salience in psychosis: with dopamine excess, neutral stimuli become salient (VTA card).'
      ],
      treatment: [
        'CBT techniques targeting attention and interpretation biases, and interoceptive exposure, address the function of this network. [C]',
        'Deep TMS (H7 coil, mPFC and ACC) is FDA-cleared for adult OCD (mPFC card). [A]'
      ],
      tests: ['Oddball paradigm', 'Posner cueing task (invalid cue: reorienting)', 'Heartbeat detection (interoception)'],
      links: ['Amygdala, ventral striatum, hypothalamus (subcortical salience)', 'Frontoparietal control network', 'Default mode network', 'Dorsal attention network']
    },
    dan: {
      name: 'Dorsal Attention Network', short: 'DAN',
      summary: 'The network that directs goal-driven attention: selects top-down what and where to look, and guides eye movements.',
      anatomy: [
        'Main nodes: frontal eye field (FEF), intraparietal sulcus and superior parietal lobule, MT+ (motion area).',
        'Symmetric in the two hemispheres, whereas the ventral attention network is right-dominant.'
      ],
      functions: [
        'Goal-driven (top-down) attentional selection: superior parietal lobule, intraparietal sulcus and FEF; orienting to unexpected stimuli is handled by the ventral system (Corbetta and Shulman, 2002). [B]',
        'Spatial attention, visual search and saccade planning; visuospatial working memory.'
      ],
      development: [
        'Visual attention and saccade control (e.g. antisaccades) develop through childhood and approach adult levels in adolescence.'
      ],
      clinical: [
        'Neglect syndrome: right ventral lesions also disrupt activity in structurally intact dorsal parietal areas; recovery parallels the restoration of balance between the two hemispheres (Corbetta et al., 2005; 11 patients). [C]',
        'Depression: reduced connectivity between the frontoparietal network and the dorsal attention network (Kaiser et al., 2015). [A]',
        'Difficulties with visuospatial attention and visuomotor integration in ADHD and developmental coordination disorder.'
      ],
      tests: ['Posner spatial cueing task', 'Visual search, antisaccades', 'Line bisection and cancellation tests (neglect)'],
      links: ['Ventral attention and salience network', 'Frontoparietal control network', 'Visual network (dorsal stream)', 'Superior colliculus and pulvinar']
    },
    smn: {
      name: 'Somatomotor Network', short: 'SMN',
      summary: 'The network that moves and feels the body; in the Yeo atlas it also includes auditory cortex. One of the most mature networks at birth.',
      anatomy: [
        'Main nodes: precentral and postcentral gyri (M1, S1), SMA, secondary somatosensory cortex and posterior insula, auditory cortex in the superior temporal gyrus.',
        'The “Somatomotor” network of the Yeo 2011 atlas.'
      ],
      functions: [
        'Execution of movement and body sensation; homologous areas in the two hemispheres fluctuate together at rest. Resting connectivity was first shown in hand motor cortex (Biswal et al., 1995). [B]',
        'Auditory processing (superior temporal gyrus) and the motor side of speech with mouth and face movements.'
      ],
      development: [
        'Primary sensorimotor networks are adult-like at birth (Gao et al., 2015). [B]',
        'Cortical maturation proceeds from sensorimotor areas toward association cortices; this network sits at the early end of the axis (Sydnor et al., 2021). [B]'
      ],
      clinical: [
        'Cerebral palsy, developmental coordination disorder and tic disorders involve the nodes of this network (motor, premotor and putamen cards).',
        'Sensory over- or under-responsivity in ASD; functional motor disorders.'
      ],
      tests: ['Finger tapping, Purdue Pegboard', 'Neurological soft signs (PANESS)', 'Sensory profile scales'],
      links: ['Putamen and thalamus ventral lateral (motor loop)', 'Cerebellar anterior lobe', 'Dorsal attention network']
    },
    vis: {
      name: 'Visual Network', short: 'VIS',
      summary: 'The visual areas of the occipital lobe: the first steps from analyzing the image to perceiving objects and motion.',
      anatomy: [
        'Main nodes: primary visual cortex (V1, calcarine sulcus), the surrounding visual areas (V2–V4) and the posterior ventral occipitotemporal cortex.',
        'The “Visual” network of the Yeo 2011 atlas; the dorsal stream borders the dorsal attention network, and the front of the ventral stream borders the default mode and limbic networks.'
      ],
      functions: [
        'Analysis of visual features (edges, color, motion) and the first steps of object recognition.',
        'Learning to read changes the responses of visual cortex, down to V1 (Dehaene et al., 2010). [B]'
      ],
      development: [
        'The primary visual network is adult-like at birth (Gao et al., 2015). [B]',
        'Critical periods of visual development: untreated strabismus or cataract in early childhood leads to permanent amblyopia.'
      ],
      clinical: [
        'Cerebral (cortical) visual impairment: the most common cause of childhood visual impairment in developed countries (occipital lobe card). [A]',
        'Migraine aura, occipital epilepsies; detail-focused visual processing in ASD.'
      ],
      tests: ['Visual acuity and visual fields', 'Visual perception tests (e.g. Beery VMI visual perception subtest)'],
      links: ['Dorsal attention network (dorsal stream)', 'Thalamus lateral geniculate and pulvinar', 'Inferior temporal and fusiform cortex']
    },
    lim: {
      name: 'Limbic Network (Yeo)', short: 'LIM',
      summary: 'In the Yeo atlas, a network made of the orbitofrontal cortex and temporal pole; despite its name, it does not include the amygdala or hippocampus.',
      anatomy: [
        'Main nodes: orbitofrontal cortex and temporal pole (anterior and inferior temporal lobe).',
        'An important caveat: these regions border air–tissue interfaces (sinuses), so the signal is weak in standard fMRI and the network’s definition is uncertain. High signal-quality multi-echo fMRI suggests that this “limbic network” is in fact part of an extended default mode network (Girn et al., 2024). [C]',
        'The classic limbic system (amygdala, hippocampus, hypothalamus) lies outside the cortex and is not in this network atlas.'
      ],
      functions: [
        'Orbitofrontal cortex: the value of reward and punishment, reversal learning (OFC card).',
        'Temporal pole: semantic and socio-emotional knowledge about people and objects.'
      ],
      clinical: [
        'Orbitofrontal value computation in OCD, substance use and conduct disorder (OFC card).',
        'Socio-emotional behavior changes in temporal lobe epilepsy and temporal pole damage.'
      ],
      tests: ['Iowa Gambling Task, reversal learning', 'Face and person recognition, semantic knowledge tests'],
      links: ['Amygdala and hypothalamus', 'Default mode network', 'Ventral striatum']
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
          'Stimulants (methylphenidate, amphetamine): block dopamine and noradrenaline reuptake; first line in ADHD. [A]',
          'Antipsychotics: D2 receptor blockade. Xanomeline-trospium is the first antipsychotic that does not block D2 (an M1/M4 agonist; adults, 2024). [A]',
          'Levodopa: a dopamine precursor in dopa-responsive dystonia and Parkinson’s disease. [A]',
          'Bupropion: a dopamine and noradrenaline reuptake inhibitor (depression, smoking cessation).'
        ],
        links: [
          'D1 family (D1, D5): excitatory; prefrontal cortex and the direct pathway of the striatum.',
          'D2 family (D2, D3, D4): inhibitory; indirect pathway and autoreceptor; the target of antipsychotics.',
          'Dopamine transporter (DAT): the target of methylphenidate and amphetamine.'
        ]
      },
      '5ht': {
        name: 'Serotonin Pathways', short: '5-HT',
        summary: 'A modulator spreading from the raphe nuclei to the whole brain: mood, impulse control, sleep and pain; the target of SSRIs.',
        anatomy: [
          'Sources: the dorsal and median raphe nuclei (midbrain and pons) ascend to the forebrain; the caudal raphe nuclei descend to the spinal cord.',
          'Targets: prefrontal and cingulate cortex, hippocampus, amygdala, striatum, thalamus, hypothalamus, cerebellum and spinal cord.'
        ],
        functions: [
          'Mood and impulse control; regulating the response to negative events.',
          'Sleep–wake and circadian rhythm; appetite (5-HT2C in the hypothalamus).',
          'Descending pain control (raphe → spinal cord).'
        ],
        clinical: [
          'Depression, anxiety and OCD: the target of SSRIs is the serotonin transporter.',
          'Serotonin syndrome: agitation, hyperthermia and clonus with combinations of serotonergic drugs.',
          'Findings of low serotonergic function in impulsive aggression and self-harm (raphe card).'
        ],
        treatment: [
          'Adolescent depression (TADS): response 71% with fluoxetine + CBT vs 35% with placebo (TADS, 2004). [A]',
          'Childhood anxiety (CAMS): much improved with sertraline + CBT 80.7% vs placebo 23.7% (Walkup et al., 2008). [A]',
          'Atypical antipsychotics also block 5-HT2A receptors; buspirone is a 5-HT1A partial agonist.',
          'The warning about suicidal thinking under age 25 with antidepressants: close monitoring at the start.'
        ],
        links: [
          '5-HT1A: inhibitory; autoreceptor in the raphe, hippocampus and cortex.',
          '5-HT2A: excitatory; cortex; blocked by atypical antipsychotics, activated by psychedelics.',
          '5-HT2C: appetite and dopamine release; linked to antipsychotic-related weight gain.',
          '5-HT3: ionotropic; nausea (area postrema); the target of ondansetron.',
          'Serotonin transporter (SERT): the target of SSRIs.'
        ]
      },
      ne: {
        name: 'Noradrenaline Pathways', short: 'NE',
        summary: 'A wakefulness and attention signal spreading from the locus coeruleus; it launches the stress response and has an inverted-U relationship with prefrontal function.',
        anatomy: [
          'Source: locus coeruleus (pons); a small nucleus that branches to almost the whole brain. The lateral tegmental group (medulla) projects to the hypothalamus and amygdala.',
          'Targets: the whole cortex, hippocampus, amygdala, thalamus, hypothalamus, cerebellum and spinal cord; little contribution to the striatum.'
        ],
        functions: [
          'Wakefulness and arousal; focusing attention on a task or opening it to exploration (adaptive gain).',
          'In the prefrontal cortex, α2A receptors strengthen the working memory network; the high levels of stress impair it via α1 and β (Wang et al., 2007). [B]',
          'Consolidation of emotional events into memory (β-receptors in the amygdala and hippocampus).',
          'Descending pain inhibition (LC → spinal cord).'
        ],
        clinical: [
          'ADHD: the target of noradrenergic treatments.',
          'Anxiety, panic and PTSD: increased noradrenergic reactivity, hyperarousal.',
          'Opioid withdrawal: LC hyperactivity causes autonomic withdrawal symptoms.'
        ],
        treatment: [
          'Atomoxetine (a noradrenaline reuptake inhibitor); guanfacine (a selective α2A agonist) and clonidine (an α2 agonist). [A]',
          'SNRIs and bupropion; propranolol (a β blocker) for the bodily symptoms of performance anxiety.',
          'Prazosin was not superior to placebo for PTSD nightmares in a large trial (Raskind et al., 2018). [B]',
          'Lofexidine and clonidine in opioid withdrawal; lofexidine is FDA-approved in adults (2018). [A]'
        ],
        links: [
          'α1: excitatory; impairs prefrontal function under stress; blocked by prazosin.',
          'α2A: inhibitory autoreceptor and on prefrontal spines; the target of guanfacine and clonidine.',
          'β1 and β2: memory consolidation and the heart; blocked by propranolol.',
          'Noradrenaline transporter (NET): the target of atomoxetine; also clears dopamine in the prefrontal cortex.'
        ]
      },
      ach: {
        name: 'Acetylcholine Pathways', short: 'ACh',
        summary: 'The cholinergic signal of attention, learning and wakefulness: from the basal forebrain to the cortex, from the septum to the hippocampus, from the brainstem to the thalamus.',
        anatomy: [
          'Basal forebrain (nucleus basalis of Meynert) → the whole cortex; medial septum and diagonal band → hippocampus (fornix). The nucleus basalis and the diagonal band are separate structures in the model (Neudorfer et al., 2020); because the medial septum is not in open atlases, the pathway to the hippocampus starts from the diagonal band.',
          'Pedunculopontine and laterodorsal tegmental nuclei (PPN/LDT) → thalamus, VTA, SN: wakefulness and REM sleep.',
          'In the striatum, local cholinergic interneurons are balanced with dopamine.'
        ],
        functions: [
          'Attention and signal detection; opening the cortex to sensory input.',
          'Encoding new memories in the hippocampus.',
          'Wakefulness and REM sleep (PPN/LDT).'
        ],
        clinical: [
          'Anticholinergic burden: several anticholinergic drugs together impair attention and memory and raise the risk of delirium (PPN card).',
          'For the extrapyramidal side effects of antipsychotics, anticholinergics are used in acute dystonia and parkinsonism; their effect on akathisia is limited and they can worsen tardive dyskinesia (the striatal dopamine–acetylcholine balance).',
          'In Alzheimer’s disease, basal forebrain cholinergic neurons are lost early (adults).'
        ],
        treatment: [
          'Xanomeline-trospium: an M1/M4 muscarinic agonist; the first antipsychotic effective without blocking dopamine (adults, 2024). [A]',
          'Biperiden: for antipsychotic-induced acute dystonia. [B]',
          'Cholinesterase inhibitors: in Alzheimer’s disease (adults).'
        ],
        links: [
          'Nicotinic receptors (ionotropic; α4β2, α7): attention; tobacco addiction.',
          'Muscarinic M1 (cortex, hippocampus: memory) and M4 (striatum: dopamine balance).'
        ]
      },
      his: {
        name: 'Histamine Pathways', short: 'HA',
        summary: 'One of the chemical switches of wakefulness: from the tuberomammillary nucleus of the posterior hypothalamus to the whole brain; the cause of the sedation and weight side effects of many psychotropic drugs.',
        anatomy: [
          'Source: tuberomammillary nucleus (posterior hypothalamus; a separate structure inside the hypothalamus in the model).',
          'Targets: the whole cortex, thalamus, hippocampus, amygdala, basal forebrain.'
        ],
        functions: [
          'Maintaining wakefulness (H1 receptor); silent during sleep.',
          'Regulation of appetite and attention.'
        ],
        clinical: [
          'H1 blockade: sedating antihistamines, many antipsychotics and mirtazapine cause drowsiness and weight gain (hypothalamus card).',
          'In narcolepsy, with orexin loss the histamine system is also less stimulated; yet post-mortem studies found an increased number of histamine neurons (Valko et al., 2013).'
        ],
        treatment: [
          'Pitolisant (an H3 inverse agonist): increases histamine release; FDA-approved from age 6 for daytime sleepiness in narcolepsy (2024). [A]',
          'Sedating antihistamines (e.g., hydroxyzine) are used for short-term anxiety; guidelines do not recommend them for insomnia, tolerance develops and they carry an anticholinergic burden (Sateia et al., 2017).'
        ],
        links: [
          'H1: wakefulness; the target of sedating drugs.',
          'H3: inhibitory autoreceptor; pitolisant acts on it in the opposite direction.'
        ]
      },
      orx: {
        name: 'Orexin (Hypocretin) Pathways', short: 'OX',
        summary: 'The wakefulness stabilizer of the lateral hypothalamus: keeps the other wakefulness nuclei on together; its loss causes narcolepsy.',
        anatomy: [
          'Source: a small number of neurons in the lateral and perifornical hypothalamus.',
          'Targets: locus coeruleus, raphe, tuberomammillary nucleus, VTA, PPN/LDT and cortex.'
        ],
        functions: [
          'Stabilizes the sleep–wake switch: keeps us awake when awake and asleep when asleep.',
          'Motivation linked to feeding and reward (projection to the VTA; the SEEKING system).'
        ],
        clinical: [
          'Narcolepsy type 1: 85–95% of orexin neurons are lost (Thannickal et al., 2000); onset is often in childhood and adolescence. [B]',
          'Insomnia: orexin receptor antagonists are used in adults.'
        ],
        treatment: [
          'In narcolepsy, sodium oxybate (from age 7, 2018) and pitolisant (from age 6, 2024) are FDA-approved. [A]',
          'Dual orexin receptor antagonists (e.g. suvorexant): for adult insomnia.'
        ],
        links: ['Orexin 1 and 2 receptors: mainly OX1 in the locus coeruleus, OX2 in the tuberomammillary nucleus; both in the raphe and VTA.']
      },
      glu: {
        name: 'Glutamate Pathways', short: 'Glu',
        summary: 'The brain’s main excitatory signal: used by the projection neurons of the cortex, thalamus and hippocampus; the carrier of learning and memory, and the target of ketamine.',
        anatomy: [
          'Cortical pyramidal neurons, thalamic relay neurons, the hippocampus, the basolateral amygdala, the subthalamic nucleus and cerebellar granule cells use glutamate. Only 19% of the brain’s 86 billion neurons are in the cerebral cortex; most are cerebellar granule cells (Azevedo et al., 2009).',
          'Corticostriatal pathway: prefrontal and motor cortex → caudate, putamen and accumbens; the input to the basal ganglia loops.',
          'Thalamocortical pathway: thalamus (MD, VA, VL) → prefrontal and motor cortex; the cortex projects back to the thalamus.',
          'Limbic inputs: hippocampus → accumbens (context), amygdala → mPFC (emotional value).',
          'Subthalamic nucleus → GPi (the excitatory link of the indirect pathway); pons → cerebellum and dentate → thalamus (the cerebellar loop).',
          'Long cortico-cortical pathways (e.g. the arcuate fasciculus: superior temporal → Broca) and the corticospinal tract (motor cortex → spinal cord). Only the main examples of these pathways are drawn in 3D.'
        ],
        functions: [
          'Fast excitatory transmission: carrying information from sensation to movement (AMPA receptors).',
          'Learning and memory: the NMDA receptor detects coincident activity; long-term potentiation (LTP) is the cellular model of memory (Bliss and Collingridge, 1993). [B]',
          'Corticostriatal input carries action selection and habit; dopamine tunes the effect of this input.',
          'Too much is toxic (excitotoxicity): it contributes to neuron death in stroke, trauma and prolonged seizures (Choi, 1988). [B]'
        ],
        development: [
          'Early in development the GluN2B subunit dominates NMDA receptors; with maturation GluN2A increases and the synapse works faster (rat; Monyer et al., 1994). [B]',
          'Synaptic pruning: dendritic spine density in the prefrontal cortex is two to three times the adult value in childhood, starts to fall at puberty, and pruning continues throughout the twenties (Petanjek et al., 2011). [B]'
        ],
        clinical: [
          'Anti-NMDA receptor encephalitis: all of 100 patients presented with psychiatric symptoms or memory problems (Dalmau et al., 2008); children make up 40% of cases, and in 87.5% the first sign is a change in behavior or personality (Florance et al., 2009). Consider it when new-onset psychosis comes with seizures, involuntary movements or altered consciousness. [B]',
          'Schizophrenia, the NMDA hypofunction hypothesis: in healthy volunteers ketamine produced a picture resembling the positive and negative symptoms of schizophrenia (Krystal et al., 1994). [B]',
          'OCD: in treatment-naive children caudate glutamatergic metabolites (Glx) were high and fell with 12 weeks of paroxetine; the fall tracked symptom improvement (11 children; Rosenberg et al., 2000). [C]',
          'Depression: in an MRS meta-analysis glutamate + glutamine (Glx) is low in the medial frontal cortex (Moriguchi et al., 2019). [A]',
          'Fragile X syndrome: mavoglurant, an mGluR5 antagonist based on animal models, did not separate from placebo on the primary endpoint in adolescent and adult trials (Berry-Kravis et al., 2016). [B]'
        ],
        treatment: [
          'Ketamine (NMDA antagonist): in treatment-resistant adult depression a single dose worked within 2 hours and the effect lasted a week (Zarate et al., 2006); esketamine nasal spray is FDA-approved for treatment-resistant adult depression (2019). [A]',
          'In adolescents: a single ketamine dose beat an active placebo (midazolam) at 24 hours (17 adolescents; Dwyer et al., 2021); in adolescents at imminent suicide risk esketamine was better by a small margin at 24 hours, and suicidality severity fell in all groups (147 adolescents; Kosik-Gonzalez et al., 2026). Not approved for adolescents. [C]',
          'A possible mechanism of the rapid effect: new synapse formation in the prefrontal cortex via the mTOR pathway (rat; Li et al., 2010). [C]',
          'Add-on treatments targeting glutamate in OCD (memantine, N-acetylcysteine, riluzole) are under study; evidence is limited (Pittenger et al., 2011). [C]',
          'Other drugs acting through glutamate: lamotrigine (reduces glutamate release), memantine (NMDA antagonist; Alzheimer’s disease), perampanel (AMPA antagonist; epilepsy).'
        ],
        links: [
          'AMPA: carries the fast excitatory current; synaptic strength is set by the number of AMPA receptors.',
          'NMDA: a coincidence detector; it needs glutamate plus glycine or D-serine, its magnesium block lifts only when the cell is depolarized, and calcium entry triggers plasticity. Ketamine, memantine and phencyclidine block the channel.',
          'Kainate and metabotropic receptors (mGluR1–8): slower, modulatory effects.',
          'Transporters: vesicular VGLUT1 (cortex, hippocampus) and VGLUT2 (thalamus, brainstem). Astrocytes (EAAT2) take up most released glutamate and return it to neurons as glutamine (Danbolt, 2001).'
        ]
      },
      gaba: {
        name: 'GABA Pathways', short: 'GABA',
        summary: 'The brain’s main braking signal: mostly in local interneurons; its long pathways are the outputs of the basal ganglia, cerebellum and amygdala; the target of benzodiazepines and alcohol.',
        anatomy: [
          'Most GABA neurons are local interneurons: a numerical minority in the cortex and hippocampus but very diverse (parvalbumin, somatostatin and VIP cells), they set when excitatory neurons fire (Tremblay et al., 2016). These local circuits are not drawn in 3D.',
          'Basal ganglia: the projection neurons of the striatum (medium spiny neurons) are GABAergic. The direct pathway runs from the striatum to the GPi and SNr, the indirect pathway to the GPe and then to the subthalamic nucleus; the GPi and SNr brake the thalamus continuously (Albin et al., 1989).',
          'Reward loop: accumbens → ventral pallidum → mediodorsal nucleus of the thalamus.',
          'Cerebellum: Purkinje cells are the only output of the cerebellar cortex and brake the deep nuclei (dentate).',
          'The central nucleus of the amygdala (GABAergic output) → hypothalamus, PAG and brainstem. The ventrolateral preoptic nucleus (VLPO) of the hypothalamus brakes the LC, raphe and tuberomammillary nucleus during sleep. The thalamic reticular nucleus and the VLPO are not separate structures in the model.',
          'GABA fibers reaching the cortex and hippocampus: GABA neurons of the medial septum and basal forebrain selectively target the inhibitory interneurons there (inhibition of inhibition, pacing of rhythms) (Freund and Antal, 1988; Freund and Meskenaite, 1992). [B]'
        ],
        functions: [
          'Keeps excitation and inhibition in balance; when inhibition falls short, networks become overexcited and the seizure threshold drops.',
          'Timing and rhythm: fast-spiking parvalbumin interneurons generate gamma oscillations (Cardin et al., 2009). [B]',
          'Action selection: the direct pathway lifts the basal ganglia’s continuous brake on the thalamus (releasing movement), the indirect pathway strengthens it (Albin et al., 1989). [B]',
          'Sleep: VLPO neurons switch on during sleep and brake the wakefulness systems (Sherin et al., 1996; Saper et al., 2005). [B]',
          'Freezing: the inhibitory pathway from the central amygdala starts freezing by releasing the PAG’s excitatory outputs from the brake on them (mouse; Tovote et al., 2016). [C]'
        ],
        development: [
          'Early in development GABA is excitatory: chloride inside the neuron is high; when the chloride exporter (KCC2) appears later, GABA turns inhibitory (Ben-Ari, 2002). [B]',
          'Critical periods: maturation of inhibitory circuits opens the sensory critical period; in mice a benzodiazepine started this period early (Fagiolini and Hensch, 2000; Hensch, 2005). [B]'
        ],
        clinical: [
          'Epilepsy: insufficient inhibition sets the stage for seizures; many antiseizure drugs strengthen the GABA system.',
          'Schizophrenia: GABA synthesis is reduced in the parvalbumin interneurons of the DLPFC; linked to working-memory and gamma-rhythm deficits (Lewis et al., 2005). [B]',
          'Autism: the excitation–inhibition imbalance is a theoretical model (Rubenstein and Merzenich, 2003). Bumetanide (an NKCC1 blocker), aimed at strengthening GABA’s inhibitory effect, did not separate from placebo in two phase 3 trials at ages 2–17 (Fuentes et al., 2023). [A]',
          'Tourette syndrome: post-mortem studies found fewer parvalbumin interneurons in the caudate and putamen (Kalanithi et al., 2005; Kataoka et al., 2010). [C]',
          'Depression: in an MRS meta-analysis GABA is low, most clearly in the anterior cingulate (Godfrey et al., 2018). [A]',
          'Benzodiazepines and alcohol enhance the GABA-A receptor: together they suppress breathing; long-term use brings tolerance and dependence, and abrupt stopping carries a seizure risk.'
        ],
        treatment: [
          'Status epilepticus: in children benzodiazepines are first line; intravenous lorazepam and diazepam (level A), or without IV access rectal diazepam or intramuscular, intranasal or buccal midazolam (level B) (Glauser et al., 2016). [A]',
          'For anxiety in children and adolescents the guideline recommends CBT and SSRIs; benzodiazepines are not among its recommendations (Walter et al., 2020). [A]',
          'Vigabatrin (inhibits the enzyme that breaks down GABA): FDA-approved for infantile spasms (2009); higher doses work better, and response is faster in tuberous sclerosis (Elterman et al., 2001). Eye monitoring is needed because of the risk of permanent visual field loss. [A]',
          'Neurosteroids (extrasynaptic GABA-A): brexanolone was effective for postpartum depression in two phase 3 trials (Meltzer-Brody et al., 2018); brexanolone (2019) and zuranolone (2023) are FDA-approved in adults. [A]',
          'Despite their names, gabapentin and pregabalin do not bind GABA receptors; they bind the α2δ subunit of voltage-gated calcium channels.'
        ],
        links: [
          'GABA-A: a chloride channel, fast inhibition. Benzodiazepines bind between the α and γ2 subunits; according to mouse genetics, α1 mediates sedation and amnesia, α2 and α3 anxiety relief (Rudolph and Knoflach, 2011). Alcohol, barbiturates, neurosteroids and general anesthetics also enhance this receptor. [B]',
          'Extrasynaptic GABA-A (δ-containing): continuous (tonic) inhibition; the target of neurosteroids.',
          'GABA-B: G-protein-coupled, slow inhibition; the target of baclofen.',
          'Synthesis and clearance: GABA is made from glutamate by GAD (GAD65, GAD67); GAT-1 takes it back up (tiagabine blocks it), GABA transaminase breaks it down (vigabatrin inhibits it).',
          'The chloride transporters NKCC1 (inward) and KCC2 (outward) decide whether GABA excites or inhibits; bumetanide blocks NKCC1.'
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
