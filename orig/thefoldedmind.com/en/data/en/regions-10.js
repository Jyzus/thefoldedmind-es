/* İngilizce bölge metinleri (regions-10.js: korteks alt alanları ve hipofiz). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

vmpfc: {
  name: "Ventromedial Prefrontal Cortex", short: "vmPFC",
  summary: "Tracks the subjective value of options; calms the amygdala through the recall of extinguished fear.",
  anatomy: [
    "The base of the medial surface, below the frontal pole: HCP-MMP areas 10r and 10v (Glasser et al., 2016). Medial OFC lies below it, subgenual and pregenual cingulate behind it.",
    "Connected with the amygdala and temporal pole through the uncinate fasciculus, and with the ventral striatum and hypothalamus."
  ],
  functions: [
    "Subjective value: in a meta-analysis of 206 fMRI studies, vmPFC and ventral striatum track subjective value regardless of reward type (Bartra et al., 2013). [A]",
    "Fear extinction: in rats, infralimbic neurons signal extinction recall on the following day (Milad and Quirk, 2002); in humans vmPFC is active during extinction recall (Phelps et al., 2004) and its thickness correlates with extinction memory (Milad et al., 2005). [B]"
  ],
  development: [
    "In task fMRI across ages 4–22, amygdala–prefrontal connectivity is positive in childhood and turns negative during the transition to adolescence (Gee et al., 2013). [B]"
  ],
  clinical: [
    "Anxiety and PTSD models emphasize insufficient regulation of the amygdala by vmPFC and weak extinction memory; these are group findings and do not diagnose an individual."
  ],
  treatment: [
    "Exposure therapy uses extinction learning: new \"safe\" learning does not erase the old fear memory but competes with it."
  ],
  lesion: [
    "After ventromedial prefrontal damage, insensitivity to long-term consequences on the gambling task (Bechara et al., 1994). [B]"
  ],
  links: [
    "Amygdala (uncinate fasciculus)",
    "Accumbens and ventral striatum",
    "VTA (mesolimbic dopamine)",
    "Hypothalamus"
  ]
},

dmpfc: {
  name: "Dorsomedial Prefrontal Cortex", short: "dmPFC",
  summary: "Supports thinking about the mental states of others and of oneself; the anterior medial node of the default mode network.",
  anatomy: [
    "The medial surface of the superior frontal gyrus: HCP-MMP areas 9m, 8BM, 10d and neighbouring dorsal areas (Glasser et al., 2016)."
  ],
  functions: [
    "Theory of mind: the medial frontal cortex is consistently engaged when inferring the intentions and beliefs of others (Amodio and Frith, 2006; meta-analysis: Schurz et al., 2014). [A]",
    "Appraisal and expression of negative emotion: dorsal medial regions are linked to this role, ventral regions to regulation (Etkin et al., 2011). [B]"
  ],
  clinical: [
    "A resting-state meta-analysis in depression reports increased connectivity within the default mode network (Kaiser et al., 2015). [A]"
  ],
  links: [
    "Default mode network",
    "Posterior cingulate and precuneus"
  ]
},

fpc: {
  name: "Frontal Pole", short: "FPC",
  summary: "Lets one goal be held pending while switching to another task; regarded as the top level of the executive system.",
  anatomy: [
    "The most anterior tip of the frontal lobe: HCP-MMP areas 10pp, a10p and p10p (Glasser et al., 2016)."
  ],
  functions: [
    "Switching to another task while keeping an unfinished plan in mind (Koechlin and Hyafil, 2007). [B]",
    "Directing attention from external stimuli to internal thought and back: the \"gateway\" hypothesis (Burgess et al., 2007). [B]"
  ],
  development: [
    "Rostral prefrontal development is protracted: declines in grey matter and synaptic density continue into adolescence (Dumontheil et al., 2008). [B]"
  ],
  clinical: [
    "The same review discusses rostral prefrontal findings in ADHD and autism; they have no diagnostic value (Dumontheil et al., 2008). [C]"
  ],
  links: [
    "DLPFC",
    "Frontoparietal control network"
  ]
},

sgacc: {
  name: "Subgenual Anterior Cingulate", short: "sgACC",
  summary: "The cingulate below the genu of the corpus callosum: a node for emotional and autonomic regulation and a main target of depression research.",
  anatomy: [
    "Below the genu, behind vmPFC: HCP-MMP areas 25 and s32 (Glasser et al., 2016).",
    "In the four-region model of the cingulate it is the lower part of the anterior cingulate (Vogt, 2005)."
  ],
  functions: [
    "Linked to emotional and autonomic responses (Vogt, 2005; Drevets et al., 1997). [B]"
  ],
  clinical: [
    "In familial bipolar and unipolar depression, reduced activity on PET and grey matter loss on MRI in subgenual prefrontal cortex (Drevets et al., 1997). In young women with adolescent-onset depression, left subgenual volume is on average 19% smaller, with a similar difference in middle-aged women (Botteron et al., 2002). [B]",
    "The direction of activity differs across studies: metabolic overactivity has been reported in treatment-resistant depression (Mayberg et al., 2005). This is a model and does not diagnose an individual. [B]"
  ],
  treatment: [
    "Deep brain stimulation: an open study of 6 patients with treatment-resistant depression reported sustained improvement in 4 (Mayberg et al., 2005), but a sham-controlled trial showed no efficacy (Holtzheimer et al., 2017). It is experimental and studied only in adults. [B]",
    "TMS: targeting the left DLPFC site most strongly anticorrelated with sgACC relates to efficacy (Fox et al., 2012). [B]"
  ],
  links: [
    "Amygdala",
    "Hypothalamus",
    "DLPFC (anticorrelation)"
  ]
},

pgacc: {
  name: "Pregenual Anterior Cingulate", short: "pgACC",
  summary: "The cingulate in front of the genu: regulates the amygdala from above while resolving emotional conflict.",
  anatomy: [
    "In front of the genu of the corpus callosum: HCP-MMP areas a24, p32 and d32 (Glasser et al., 2016). Often called rostral ACC in the literature."
  ],
  functions: [
    "In resolving emotional conflict, the rostral cingulate reduces amygdala activity from above (Etkin et al., 2006). [B]",
    "Ventral medial regions are linked to the regulation of negative emotion (Etkin et al., 2011). [B]"
  ],
  clinical: [
    "Depression: higher resting rostral ACC activity predicts treatment response in a meta-analysis (Pizzagalli, 2011); this is a group-level finding and is not used to choose treatment for an individual. [A]"
  ],
  links: [
    "Amygdala",
    "Default mode network"
  ]
},

dacc: {
  name: "Dorsal Anterior and Anterior Midcingulate Cortex", short: "dACC",
  summary: "Where negative affect, pain and cognitive control converge; the medial node of the salience network.",
  anatomy: [
    "Above and behind the genu: HCP-MMP areas p24, a24pr, p24pr, a32pr, p32pr, 33pr. In the model the cingulate motor areas (24dd, 24dv) are also in this part (Glasser et al., 2016)."
  ],
  functions: [
    "Negative affect, pain and cognitive control overlap in the anterior midcingulate (meta-analysis: Shackman et al., 2011); differentiation of subregions is also argued (Vogt, 2005). [A]",
    "Forms the salience network together with the anterior insula (Seeley et al., 2007). [B]"
  ],
  clinical: [
    "In pediatric OCD the error-related brain response (ERN) is large and stays large after treatment (Hajcak et al., 2008). [B]",
    "Transdiagnostic grey matter loss: a meta-analysis of 193 studies highlights the dorsal anterior cingulate and anterior insula (Goodkind et al., 2015). [A]"
  ],
  links: [
    "Anterior insula (salience network)",
    "Caudate (OCD loop)",
    "Thalamus"
  ]
},

mofc: {
  name: "Medial Orbitofrontal Cortex", short: "mOFC",
  summary: "Tracks the value of rewards; guides choice by representing the expected outcome.",
  anatomy: [
    "The medial part of the orbital surface: HCP-MMP areas OFC and pOFC (Glasser et al., 2016)."
  ],
  functions: [
    "Medial orbitofrontal activity relates to reward value (Kringelbach and Rolls, 2004); monetary gain engages medial regions (O'Doherty et al., 2001). [B]",
    "Prediction and evaluation of specific outcomes (Rudebeck and Murray, 2014). [B]"
  ],
  links: [
    "vmPFC",
    "Accumbens",
    "Amygdala"
  ]
},

lofc: {
  name: "Lateral Orbitofrontal Cortex", short: "lOFC",
  summary: "Evaluates punishment and negative outcomes; signals that behaviour needs to change.",
  anatomy: [
    "The lateral part of the orbital surface: HCP-MMP areas 11l, 13l, 47m and, in the model, the other parts of area 47 (Glasser et al., 2016)."
  ],
  functions: [
    "Lateral orbitofrontal activity relates to evaluating punishers and to subsequent behavioural change (Kringelbach and Rolls, 2004; O'Doherty et al., 2001). [B]"
  ],
  clinical: [
    "OCD: beyond the classic cortico-striatal model, lateral and medial OFC, dorsal anterior cingulate and amygdala circuits are discussed; extinction learning is also impaired (Milad and Rauch, 2012). [B]"
  ],
  links: [
    "Caudate (OCD loop)",
    "Amygdala"
  ]
},

aic: {
  name: "Anterior Insula", short: "aINS",
  summary: "Turns bodily signals into feeling and awareness; marks what matters and initiates switching between networks.",
  anatomy: [
    "The anterior part of the insula: HCP-MMP areas AVI, AAIC, MI, FOP5 and the neighbouring piriform part (Glasser et al., 2016)."
  ],
  functions: [
    "Subjective awareness of bodily state (Craig, 2009). [B]",
    "Forms the salience network with the dorsal anterior cingulate (Seeley et al., 2007); marks salient events and initiates switching between external-attention and internal-thought networks (Menon and Uddin, 2010). [B]"
  ],
  clinical: [
    "Anxiety: anterior insula overactivity is proposed (Paulus and Stein, 2006); reduced activity is reported in autism (Menon and Uddin, 2010). [B]",
    "The anterior insula stands out in transdiagnostic grey matter loss (Goodkind et al., 2015). [A]"
  ],
  lesion: [
    "Most patients who quit smoking after insula damage did so immediately, easily and without relapse. This is a small retrospective study of the whole insula and does not separate anterior from posterior (Naqvi et al., 2007). [C]"
  ],
  links: [
    "Dorsal anterior cingulate (salience network)",
    "Amygdala",
    "Posterior insula"
  ]
},

pic: {
  name: "Posterior Insula", short: "pINS",
  summary: "The primary map of the body's internal state: temperature, pain and visceral sensation arrive here.",
  anatomy: [
    "The posterior part of the insula: HCP-MMP areas PoI1, PoI2, Ig, PI and, in the model, neighbouring opercular areas (Glasser et al., 2016)."
  ],
  functions: [
    "The first cortical representation of bodily sensation, becoming emotional awareness toward the anterior insula (Craig, 2009). [B]",
    "Pain: blood flow in the dorsal posterior insula tracks reported pain intensity (Segerdahl et al., 2015); whether it is specific to pain is disputed (Davis et al., 2015). [B]"
  ],
  links: [
    "Thalamus (VMb)",
    "Anterior insula"
  ]
},

sma: {
  name: "Supplementary Motor Area and Pre-SMA", short: "SMA / pre-SMA",
  summary: "Links cognition to action; stimulation can evoke an urge to move.",
  anatomy: [
    "The cluster of SMA, supplementary eye field and pre-SMA in dorsomedial frontal cortex (Nachev et al., 2008). The model shows HCP-MMP areas 6mp, 6ma and SCEF (Glasser et al., 2016) as one substructure."
  ],
  functions: [
    "Links cognition to action; more sensitive than primary motor areas to tasks where possible actions are not fully set by the environment (Nachev et al., 2008). [B]",
    "Electrical stimulation often evokes complex movements across several joints and, in some cases, an \"urge\" to move (Fried et al., 1991). [C]"
  ],
  clinical: [
    "Tourette syndrome: in 10 adults, a paralimbic network including the SMA is active in the 2 seconds before a tic (Bohlhalter et al., 2006); the sample is small. [C]",
    "ADHD: in a meta-analysis of inhibition tasks, SMA activation is reduced, and this reduction appears in pediatric samples (Hart et al., 2013); a group finding that does not diagnose an individual. [A]"
  ],
  lesion: [
    "After resections involving the SMA, a three-stage course beginning with global akinesia and arrested speech (Laplane et al., 1977; 3 patients). [C]"
  ],
  links: [
    "Anterior cingulate and insula (active together before tics)"
  ]
},

lpm: {
  name: "Lateral Premotor Cortex", short: "Lateral PMC",
  summary: "Plans and selects movement; includes dorsal and ventral premotor areas and the frontal eye field.",
  anatomy: [
    "The lateral part of area 6 and its neighbours: HCP-MMP areas 6a, 6d, 6v, 6r, 55b, FEF, PEF (Glasser et al., 2016)."
  ],
  functions: [
    "Dorsal and ventral premotor areas take part in different aspects of motor planning and decision making through distinct cortical networks (Hoshi and Tanji, 2007; largely monkey data). [B]"
  ]
},

ifg44: {
  name: "Pars Opercularis (Area 44)", short: "IFG 44",
  summary: "The posterior part of Broca's region on the left; its right counterpart is a main target of response-inhibition research.",
  anatomy: [
    "The posterior part of the inferior frontal gyrus: HCP-MMP area 44 (Glasser et al., 2016). In a cytoarchitectonic study, area 44 was left-right asymmetric in every brain, and its volume varied up to about tenfold between people (Amunts et al., 1999)."
  ],
  functions: [
    "Right IFG and inhibition: patients with right frontal damage have longer stop-signal reaction times (Aron et al., 2003). The interpretation is debated: a newer lesion study argues that damage impairs the initiation of inhibition rather than its implementation (Choo et al., 2022). [B]",
    "The asymmetry of area 44 has been proposed as a possible anatomical correlate of the left lateralization of speech production (Amunts et al., 1999). [C]"
  ],
  clinical: [
    "ADHD: in a meta-analysis of inhibition tasks, right inferior frontal activation is reduced; split by age, this reduction appears in adults (Hart et al., 2013); a group finding that does not diagnose an individual. [A]",
    "Bipolar disorder: in ENIGMA, thinning of the left pars opercularis is among the strongest regional effects (d ≈ −0.29; Hibar et al., 2018). The effect is small; a group finding that does not diagnose an individual. [A]"
  ],
  lesion: [
    "New MRI of the brains of Broca's two historic patients shows lesions extending well into medial regions, so Broca's aphasia should not be explained by this area alone (Dronkers et al., 2007). [B]"
  ],
  links: [
    "Pars triangularis (Area 45)",
    "Superior temporal gyrus (dorsal stream)"
  ]
},

ifg45: {
  name: "Pars Triangularis (Area 45)", short: "IFG 45",
  summary: "Helps select the right item among options retrieved from memory; the anterior part of Broca's region on the left.",
  anatomy: [
    "The triangular part of the inferior frontal gyrus: HCP-MMP area 45 (Glasser et al., 2016). Cytoarchitectonic borders do not follow sulcal lines, so its location cannot be read reliably from sulci alone (Amunts et al., 1999)."
  ],
  functions: [
    "Left mid-ventrolateral prefrontal cortex (approximately BA 45) resolves competition among retrieved representations (Badre and Wagner, 2007). [B]",
    "Cognitive reappraisal: in a meta-analysis of 48 studies it activates cognitive control regions and lateral temporal cortex and modulates the amygdala on both sides (Buhle et al., 2014). [A]"
  ],
  clinical: [
    "Auditory verbal hallucinations: in a meta-analysis of 68 patients, Broca's area and nearby speech-production regions are active during hallucinations (Jardri et al., 2011); a group finding that does not diagnose an individual. [B]"
  ],
  links: [
    "Pars opercularis (Area 44)",
    "Middle and inferior temporal gyri (reappraisal)",
    "Amygdala (functional modulation in reappraisal)"
  ]
},

fop: {
  name: "Frontal Operculum", short: "FOP",
  summary: "The frontal wall covering the insula; associated with task control and taste processing.",
  anatomy: [
    "The frontal wall of the Sylvian fissure: the parts of HCP-MMP areas FOP1, FOP3, FOP4, FOP5, AVI and MI that fall within the IFG region (Glasser et al., 2016). The parts of these areas in the insula region belong to the anterior and posterior insula substructures. It is hidden from the side; its surroundings turn transparent when it is selected."
  ],
  functions: [
    "Task control: in a combined fMRI and TMS study, the frontal operculum adjusts occipitotemporal activity according to the attended category, and TMS weakens this adjustment (Higo et al., 2011). [B]",
    "The anterior insula and frontal operculum belong to the cingulo-opercular network, associated with stable set-maintenance across a task (Dosenbach et al., 2007). [B]",
    "Taste: in a neuroimaging review, gustatory peaks are spread across the insula and the frontal and parietal opercula (Small et al., 1999). [B]"
  ],
  links: [
    "Anterior insula",
    "Dorsal ACC (cingulo-opercular network)",
    "Occipitotemporal areas (attentional adjustment)"
  ]
},

audstg: {
  name: "Superior Temporal Gyrus and Auditory Cortex", short: "STG / A1",
  summary: "Where sound and speech are first processed in the cortex: primary auditory cortex on Heschl's gyrus and its surroundings.",
  anatomy: [
    "The transverse (Heschl's) gyrus and superior temporal gyrus: HCP-MMP areas A1, MBelt, LBelt, PBelt, RI, 52, A4, A5, TA2, STGa (Glasser et al., 2016). On the left, a small part of the parietal operculum stays in this substructure by the nearest-area rule.",
    "At 7 Tesla fMRI, the two mirror tonotopic maps of primary auditory cortex follow the shape of Heschl's gyrus (Da Costa et al., 2011)."
  ],
  functions: [
    "Speech: early analysis starts bilaterally in the superior temporal gyrus, then divides into a ventral stream for comprehension and a dorsal stream toward articulation (Hickok and Poeppel, 2007). [B]"
  ],
  development: [
    "Superior temporal cortex was the last region to mature in 13 healthy children followed between ages 4 and 21 (Gogtay et al., 2004). [B]"
  ],
  clinical: [
    "Auditory verbal hallucinations: in a meta-analysis, auditory association cortices are active along with speech-production regions (Jardri et al., 2011); a group finding that does not diagnose an individual. [B]"
  ],
  links: [
    "Superior temporal sulcus",
    "Frontal articulatory network (dorsal stream)"
  ]
},

sts: {
  name: "Superior Temporal Sulcus", short: "STS",
  summary: "The sulcus where social cues such as gaze, facial movement, voice and body movement converge.",
  anatomy: [
    "The sulcus between the superior and middle temporal gyri: HCP-MMP areas STSda, STSdp, STSva, STSvp (Glasser et al., 2016). Most of it lies inside the sulcus. In the model its two banks fall into the superior and inferior temporal regions; this substructure joins them and appears in both families."
  ],
  functions: [
    "Social perception: in monkeys and humans it responds to movements of the eyes, mouth, hands and body, and is proposed as an early stage of reading others' intentions (Allison et al., 2000). [B]",
    "Voice: voice-selective areas lie along the upper bank on both sides (Belin et al., 2000). [B]",
    "Subregions arranged from posterior to anterior are selective for different social inputs; responses to language and theory of mind, and to faces and voices, partly overlap (Deen et al., 2015). [B]"
  ],
  development: [
    "Unlike the face and place areas, STS volume stays stable across ages 7–11, 12–16 and adulthood (Golarai et al., 2007). [B]"
  ],
  clinical: [
    "Autism: a first study of 5 adults found no voice-selective STS response (Gervais et al., 2004); a later study of 16 adults found typical responses during passive listening, with right posterior STS/STG dysfunction appearing during voice identity recognition (Schelinski et al., 2016). Small samples; a group finding that does not diagnose an individual. [C]"
  ],
  links: [
    "Superior temporal gyrus",
    "Fusiform gyrus (face area)"
  ]
},

tpole: {
  name: "Temporal Pole", short: "TP",
  summary: "The front end of the temporal lobe; thought to bind processed perception to emotional response and conceptual knowledge.",
  anatomy: [
    "The front end of the temporal lobe: HCP-MMP areas TGd, TGv (Glasser et al., 2016). In the model its upper face falls in the superior temporal region and its lower face in the inferior temporal region; this substructure joins them and appears in both families.",
    "The uncinate fasciculus connects it with orbitofrontal cortex; this tract is proposed to tune temporal memory representations according to reward and punishment history (Von Der Heide et al., 2013)."
  ],
  functions: [
    "Social and emotional processing: contributes to face recognition and theory of mind, and is proposed to bind processed perceptual input to visceral emotional response (Olson et al., 2007). [B]",
    "Meaning: the anterior temporal lobe is the hub in the hub-and-spoke model of conceptual knowledge, based largely on data from semantic dementia (Patterson et al., 2007). [B]"
  ],
  clinical: [
    "Schizophrenia: in ENIGMA, age-related thinning of the temporal pole on both sides is stronger than in controls (van Erp et al., 2018); a group finding that does not diagnose an individual. [A]"
  ],
  lesion: [
    "Semantic dementia: with marked focal temporal atrophy, word finding and single-word comprehension break down, while phonology, grammar and autobiographical memory are relatively spared (Hodges et al., 1992; 5 patients). [C]"
  ],
  links: [
    "Orbitofrontal cortex (uncinate fasciculus)"
  ]
},

fusiform: {
  name: "Fusiform Gyrus", short: "FG",
  summary: "Takes part in recognizing faces and object forms; home of the face area.",
  anatomy: [
    "The underside of the temporal lobe: HCP-MMP areas FFC, VVC, V8, VMV1–3 (Glasser et al., 2016). The neighbouring area PIT falls in the occipital region in the model and is not part of this substructure."
  ],
  functions: [
    "Faces: in 12 of 15 people, a region of the fusiform gyrus responded more strongly to faces than to objects (Kanwisher et al., 1997). [B]",
    "Reading: the visual word form area lies next door in the left lateral occipitotemporal sulcus; reading recycles cortex evolved for object and face recognition (Dehaene and Cohen, 2011). [B]"
  ],
  development: [
    "The face area grows from ages 7–11 into adulthood, and this growth tracks improving recognition memory for faces (Golarai et al., 2007). [B]"
  ],
  clinical: [
    "Autism: fusiform activation correlates strongly with time spent fixating the eyes, so part of the reported low response may reflect reduced gaze (Dalton et al., 2005); a group finding that does not diagnose an individual. [B]",
    "Bipolar disorder: in ENIGMA, thinning of the left fusiform is among the strongest regional effects (d ≈ −0.29; Hibar et al., 2018). The effect is small; a group finding that does not diagnose an individual. [A]"
  ],
  lesion: [
    "Acquired prosopagnosia: patients with right fusiform lesions are impaired at detecting changes in the arrangement of facial features (Barton et al., 2002). [C]"
  ],
  links: [
    "Superior temporal sulcus",
    "Parahippocampal cortex"
  ]
},

ento: {
  name: "Entorhinal and Perirhinal Cortex", short: "EC / PRC",
  summary: "Passes input from parahippocampal cortex to the hippocampus; carries position and familiarity information, and is an early site of Alzheimer pathology.",
  anatomy: [
    "The front of the parahippocampal gyrus: HCP-MMP areas EC (entorhinal) and PeEc (perirhinal, ectorhinal) (Glasser et al., 2016).",
    "It receives major input from parahippocampal cortex and feeds directly into the hippocampus (Aminoff et al., 2013)."
  ],
  functions: [
    "Position: grid cells in rat medial entorhinal cortex map the environment with a lattice of equilateral triangles (Hafting et al., 2005). [B]",
    "In a human fMRI study of 42 people, a six-fold directional signal, strongest in right entorhinal cortex, points to a grid-like representation but does not show the cells directly (Doeller et al., 2010). [B]"
  ],
  clinical: [
    "Alzheimer's disease: in a staging study of 83 brains, neurofibrillary changes appear first in the transentorhinal region and then in entorhinal cortex (Braak and Braak, 1991); this is an adult disease. [B]"
  ],
  lesion: [
    "In a single case after surgery that removed much of perirhinal cortex but spared the hippocampus, familiarity weakened while recollection was preserved (Bowles et al., 2007). [C]"
  ],
  links: [
    "Hippocampus",
    "Parahippocampal cortex"
  ]
},

phg: {
  name: "Parahippocampal Cortex", short: "PHC",
  summary: "Links scene and context information to memory; includes the parahippocampal place area.",
  anatomy: [
    "HCP-MMP areas TF, PHA1–3, PreS, H (Glasser et al., 2016). It sits at the junction of memory regions such as the hippocampus and high-level visual regions such as the fusiform (Aminoff et al., 2013)."
  ],
  functions: [
    "Place: responds selectively to scenes; the key factor is information about spatial layout, and empty rooms evoke an equally strong response (Epstein and Kanwisher, 1998). [B]",
    "Context: its roles in visuospatial processing and episodic memory are unified by its place in a network that processes contextual associations (Aminoff et al., 2013). [B]"
  ],
  development: [
    "The place area grows from ages 7–11 into adulthood, and this growth tracks recognition memory for places (Golarai et al., 2007). [B]"
  ],
  lesion: [
    "Topographical disorientation is not uniform: its varieties follow damage to different areas, and one is an inability to learn new environments (Aguirre and D'Esposito, 1999). [C]"
  ],
  links: [
    "Hippocampus",
    "Entorhinal cortex",
    "Retrosplenial cortex",
    "Amygdala"
  ]
},

mitg: {
  name: "Middle and Inferior Temporal Gyri", short: "MTG / ITG",
  summary: "The temporal node of the distributed network for concepts and word meaning.",
  anatomy: [
    "The lateral and inferior temporal surface: HCP-MMP areas TE1a, TE1m, TE1p, TE2a, TE2p, PHT, PH and the part of A5 in this region (Glasser et al., 2016)."
  ],
  functions: [
    "Meaning: in a meta-analysis of 120 imaging studies, it is one of the nodes of a left-lateralized semantic network (Binder et al., 2009). [A]",
    "Reappraisal: cognitive control may reduce amygdala activity by changing semantic representations in lateral temporal cortex (Buhle et al., 2014). [A]"
  ],
  clinical: [
    "Schizophrenia: in ENIGMA, across 4474 patients, the cortex is thinner overall (d ≈ −0.53), with regional differences beyond this (van Erp et al., 2018); a group finding that does not diagnose an individual. [A]"
  ],
  links: [
    "Fusiform gyrus",
    "Pars triangularis (Area 45)",
    "Temporal pole"
  ]
},

pcing: {
  name: "Posterior Cingulate Cortex", short: "PCC",
  summary: "The posterior node of the default mode network; densely connected and metabolically active, with a debated cognitive role.",
  anatomy: [
    "The posterior cingulate gyrus and retrosplenial cortex: HCP-MMP areas RSC, 23c, 23d, d23ab, v23ab, 31pv, 31pd, 31a (Glasser et al., 2016). Because of the parent region's borders, posterior mid-cingulate areas (p24pr, 24dd, 24dv, 33pr) and 5m and 5mv are also in this substructure."
  ],
  functions: [
    "Densely connected and metabolically active, with no consensus on its role. One proposal is that its dorsal part tunes attentional focus (Leech and Sharp, 2014). [B]"
  ],
  development: [
    "Default network regions are sparsely connected at ages 7–9 and integrate into a cohesive network over development (Fair et al., 2008). [B]"
  ],
  clinical: [
    "Abnormalities are reported in Alzheimer's disease, schizophrenia, autism, depression and ADHD, so they are not specific to a diagnosis (Leech and Sharp, 2014). [B]",
    "ADHD: in 20 adults, resting connectivity between the anterior cingulate and the posterior cingulate and precuneus is reduced (Castellanos et al., 2008); a group finding that does not diagnose an individual. [C]"
  ],
  lesion: [
    "Damage involving the retrosplenial region and cingulum bundle has been reported to cause retrograde and anterograde amnesia (Valenstein et al., 1987; single case). The region is well protected against stroke, so focal lesion data are sparse (Leech and Sharp, 2014). [C]"
  ],
  links: [
    "Hippocampus and anterior thalamus (retrosplenial route)",
    "Anterior cingulate",
    "Precuneus"
  ]
},

prek: {
  name: "Precuneus", short: "Precuneus",
  summary: "On the medial parietal surface; involved in visuospatial imagery, memory retrieval and self-related processing.",
  anatomy: [
    "The medial parietal surface: HCP-MMP areas 7m, PCV, POS1, POS2, 7Am, 7Pm, 7PL, DVT, 5L (Glasser et al., 2016). In the model it belongs only to this parent; small parts of 7Am and 7PL that spill onto the superior parietal surface stay in the superior parietal region.",
    "Resting connectivity separates three divisions in humans and monkeys: anterior sensorimotor, central cognitive and posterior visual (Margulies et al., 2009)."
  ],
  functions: [
    "Associated with visuospatial imagery, episodic memory retrieval, self-processing and consciousness (Cavanna and Trimble, 2006). [B]",
    "Network shifts: in 188 people, its connectivity increases with the default mode network at rest and with the left frontoparietal network during tasks (Utevsky et al., 2014). [B]"
  ],
  clinical: [
    "ADHD: in 20 adults, connectivity between the precuneus and other default network components is reduced (Castellanos et al., 2008); a group finding that does not diagnose an individual. [C]"
  ],
  links: [
    "Posterior cingulate cortex",
    "Superior parietal and motor cortex (anterior division)",
    "Default mode network and left frontoparietal network"
  ]
},

pit: {
  name: "Pituitary Gland", short: "Pituitary",
  summary: "The gland that turns hypothalamic commands into blood signals: ACTH, prolactin, growth hormone and, from the posterior lobe, oxytocin and vasopressin.",
  anatomy: [
    "Sits in the sella turcica, joined to the hypothalamus by the stalk. The anterior lobe is controlled through portal vessels, the posterior lobe by hypothalamic axons."
  ],
  functions: [
    "Stress axis: CRH from the paraventricular nucleus, ACTH from the pituitary, cortisol from the adrenal cortex; cortisol shuts the axis down through feedback (Herman et al., 2016).",
    "Prolactin: dopamine from the arcuate nucleus restrains it through pituitary D2 receptors (Fitzgerald and Dinan, 2008)."
  ],
  development: [
    "The response of the stress axis changes with development and is shaped by the early caregiving environment (Gunnar and Quevedo, 2007). [B]"
  ],
  clinical: [
    "Antipsychotic hyperprolactinemia relates to D2 effects: most frequent with amisulpride, risperidone and paliperidone, least with aripiprazole and quetiapine (Peuskens et al., 2014). [B]"
  ],
  links: [
    "Hypothalamus (arcuate, paraventricular, supraoptic)",
    "Adrenal cortex (via blood)"
  ]
}

});
