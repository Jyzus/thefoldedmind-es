/* İngilizce bölge metinleri 2/8 (regions-2.js: parietal, temporal, oksipital, insula, posterior singulat). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

somato: {
  name: "Primary Somatosensory Cortex", short: "S1",
  summary: "Makes the body felt by mapping touch, pressure, pain, temperature and body position.",
  anatomy: [
    "Postcentral gyrus and the posterior paracentral lobule; BA 3a, 3b, 1 and 2.",
    "Somatotopic organization (sensory homunculus): hand, lips and tongue have large representations.",
    "Receives input from the thalamic VPL (trunk and limbs) and VPM (face) nuclei. S2 lies in the parietal operculum.",
    "Blood supply: MCA (lateral), ACA (medial — leg)."
  ],
  functions: [
    "Touch, pressure, vibration; localization of pain and temperature.",
    "Proprioception: joint and muscle position (BA 3a).",
    "Discrimination of texture and shape: stereognosis, two-point discrimination, graphesthesia (BA 1, 2).",
    "Fine-tuning movement with sensory feedback; contribution to the body schema."
  ],
  tests: [
    "Two-point discrimination, stereognosis, graphesthesia",
    "Position and vibration sense examination",
    "Sensory Profile (Dunn) — sensory processing patterns"
  ],
  development: [
    "Touch is among the earliest sensory systems to develop prenatally.",
    "Somatosensory maps are shaped by experience; early tactile experience matters.",
    "Affective touch in infancy (C-tactile fibers, with the insula) is linked to attachment and emotion regulation."
  ],
  clinical: [
    "ASD: sensory over- or under-responsivity (a DSM-5 criterion), tactile defensiveness.",
    "ADHD and sensory modulation difficulties.",
    "Tourette syndrome: S1/S2 and insula involvement in sensory phenomena and premonitory urges.",
    "Differences in pain processing in self-harm."
  ],
  treatment: [
    "Sensory integration therapies: the American Academy of Pediatrics (2012) advises against using “sensory processing disorder” as a separate diagnosis and recommends assessing for underlying ASD, ADHD, motor or anxiety disorders. Evidence for these therapies is limited and inconsistent; if used, functional goals should be set and progress measured. [B]",
    "Sensory over-responsivity in ASD: environmental adaptations (noise-cancelling headphones, predictable routines) and graded exposure; CBT if anxiety co-occurs. [C]",
    "Differences in pain threshold in self-harm are a marker, not a treatment target; dialectical behavior therapy (DBT) reduced suicide attempts and self-harm more than supportive therapy in 173 adolescents at high suicide risk (McCauley et al., 2018); the first well-established treatment in this area. [A]"
  ],
  lesion: [
    "Contralateral sensory loss, astereognosis, loss of graphesthesia.",
    "Sensory ataxia from impaired proprioception; focal sensory seizures."
  ],
  links: [
    "Thalamus VPL/VPM (dorsal column–medial lemniscus and spinothalamic pathways)",
    "Primary motor cortex",
    "Posterior parietal cortex",
    "Insula (S2 and interoception)"
  ]
},

spl: {
  name: "Superior Parietal Lobule", short: "SPL / IPS",
  summary: "Joins vision with movement: computes where an object is, guides reaching and grasping, and contributes to number sense.",
  anatomy: [
    "Behind the postcentral sulcus, above the intraparietal sulcus (IPS); BA 5 and 7.",
    "Continues medially as the precuneus; the parieto-occipital sulcus lies posteriorly.",
    "The parietal station of the dorsal visual stream (“where / how”).",
    "Blood supply: watershed zone between MCA and ACA branches."
  ],
  functions: [
    "Visuomotor integration: reaching, grasping, eye–hand coordination.",
    "Spatial attention (dorsal attention network — together with the FEF).",
    "Body schema and tracking of limb position.",
    "Mental rotation and visuospatial working memory.",
    "Representation of numerical magnitude (IPS — number sense)."
  ],
  tests: [
    "Mental rotation tasks",
    "Rey-Osterrieth Complex Figure (copy), WISC Block Design",
    "Corsi blocks, number line estimation"
  ],
  development: [
    "The IPS specializes for numerical processing through childhood.",
    "Visuospatial working memory keeps developing into adolescence."
  ],
  clinical: [
    "Dyscalculia: structural and functional differences in the IPS.",
    "Williams syndrome: dorsal stream and visuospatial difficulties.",
    "Turner syndrome: visuospatial and arithmetic difficulties (parietal).",
    "DCD and ADHD: visuomotor integration and attention networks.",
    "Large structural sample in OCD (ENIGMA-OCD): thinner inferior and superior parietal cortex in children (small effect); extends the view of OCD as a “frontal” disorder to the parietal cortex (ENIGMA-OCD, 2018). [A]"
  ],
  treatment: [
    "For visuospatial and visuomotor difficulties (Williams syndrome, Turner syndrome, DCD): occupational therapy, compensation with verbal strategies and school accommodations (e.g. a verbal step list for geometry and map tasks). [C]",
    "Number sense training for dyscalculia; details on the IPL card."
  ],
  lesion: [
    "Optic ataxia: impaired reaching toward visual targets.",
    "Bálint syndrome (bilateral): simultanagnosia, optic ataxia, oculomotor apraxia.",
    "Contralateral neglect with right-sided lesions."
  ],
  links: [
    "Occipital cortex (dorsal stream)",
    "Frontal eye field and premotor cortex",
    "DLPFC (frontoparietal network)",
    "Pulvinar (thalamus)",
    "Cerebellum"
  ]
},

ipl: {
  name: "Inferior Parietal Lobule", short: "IPL",
  summary: "The region of reading, calculation and praxis (left), and of reorienting attention and taking another’s perspective (right).",
  anatomy: [
    "Supramarginal gyrus (BA 40) and angular gyrus (BA 39); below the IPS.",
    "Temporoparietal junction (TPJ): where the angular/supramarginal gyri meet the posterior superior temporal gyrus.",
    "Marked lateralization: left — language and number, right — attention and social cognition.",
    "Blood supply: inferior division of the MCA (angular artery)."
  ],
  functions: [
    "Left: reading and writing (grapheme–phoneme–meaning mapping), retrieval of arithmetic facts.",
    "Left supramarginal: phonological store, praxis (movement programs).",
    "Right: reorienting attention to unexpected stimuli (ventral attention network), spatial awareness.",
    "Right TPJ: representing others’ beliefs (theory of mind), self–other distinction, perspective taking.",
    "Multisensory integration and the sense of body ownership."
  ],
  tests: [
    "Reading, spelling and phonological awareness tests",
    "Verbal arithmetic, finger gnosis",
    "Pantomime/praxis assessment",
    "False-belief tasks (rTPJ); line bisection and cancellation tests (neglect)"
  ],
  development: [
    "Learning to read reshapes left temporoparietal circuits.",
    "False-belief understanding emerges around age 4; rTPJ specialization increases through childhood."
  ],
  clinical: [
    "Dyslexia: left temporoparietal hypoactivation (phonological processing). In 20 children aged 8–12, eight weeks of language and auditory processing training improved reading; left temporoparietal and left IFG activity moved toward that of typical readers, and the left temporoparietal increase related to language gains (Temple et al., 2003). The brain can change with intervention. [B]",
    "ASD: activation differences in the rTPJ related to mentalizing.",
    "Dyscalculia and ADHD (ventral attention network)."
  ],
  treatment: [
    "Dyslexia: structured, explicit phonics-based reading instruction; intensive intervention started early is most effective. Accommodations such as extra exam time and audiobooks. [A]",
    "Dyscalculia: number sense and number line training, step-by-step teaching with concrete materials. [C]",
    "In neglect (right parietal): prism adaptation and visual scanning training (adult rehabilitation). [B]"
  ],
  lesion: [
    "Gerstmann syndrome (left angular): agraphia, acalculia, finger agnosia, left–right confusion.",
    "Conduction aphasia (supramarginal/arcuate fasciculus), ideomotor apraxia (left).",
    "Right lesion: hemispatial neglect, anosognosia."
  ],
  links: [
    "Broca’s and Wernicke’s areas (arcuate fasciculus)",
    "Right IFG (ventral attention network)",
    "mPFC and precuneus (mentalizing network)",
    "Fusiform visual word form area"
  ]
},

tpj: {
  name: "Temporoparietal Junction", short: "TPJ",
  summary: "The region for telling self from other, representing another’s beliefs and turning attention to unexpected stimuli; the right TPJ is one of the cortical hubs of theory of mind.",
  anatomy: [
    "Where the posterior end of the superior temporal sulcus, the lower angular gyrus and the posterior supramarginal gyrus meet.",
    "HCP-MMP1.0 areas in the model: TPOJ1–3, STV, PSL and PGi (Glasser et al., 2016).",
    "Marked lateralization: the right TPJ stands out for social cognition and attention, the left TPJ for language and semantic processing.",
    "Blood supply: inferior division of the MCA (posterior temporal and angular branches)."
  ],
  functions: [
    "Theory of mind: representing another person’s false belief (right TPJ; Saxe and Kanwisher, 2003).",
    "Self–other distinction, perspective taking and control of imitation.",
    "Reorienting attention to unexpected but important stimuli (ventral attention network; Corbetta and Shulman, 2002).",
    "Multisensory integration and body ownership; out-of-body experiences have been reported with stimulation of this region (Blanke et al., 2002)."
  ],
  tests: [
    "False-belief tasks (Sally-Anne, second-order belief)",
    "Visual perspective-taking tasks",
    "Posner cueing task (reorienting after an invalid cue)"
  ],
  development: [
    "False-belief understanding emerges around age 4; the right TPJ’s selectivity for mental states increases through childhood (Gweon et al., 2012).",
    "Reorganization of social-cognitive networks (mPFC, TPJ) continues in adolescence."
  ],
  clinical: [
    "ASD: differences in right TPJ activity and connectivity during mentalizing tasks.",
    "Schizophrenia: linked to disturbed self–other distinction and experiences of passivity (being controlled).",
    "Dissociative and out-of-body experiences; right TPJ involvement in neglect."
  ],
  treatment: [
    "Social skills training in ASD: PEERS (a parent-assisted group program) improved friendship skills, social responsiveness and peer interaction in adolescents; gains held at 14-week follow-up (Laugeson et al., 2012), with independent randomized replications (Schohl et al., 2013). [B]",
    "Mentalization-based therapy (MBT-A): targets the ability to understand one’s own and others’ minds in adolescent self-harm and borderline personality traits. [B]",
    "Self–other disturbance and passivity experiences in schizophrenia: antipsychotic treatment and CBT for psychosis. [A]"
  ],
  lesion: [
    "Right TPJ damage: spatial neglect and impaired reorienting of attention.",
    "Left TPJ damage: comprehension difficulty because of its proximity to Wernicke’s area, reading and writing impairments."
  ],
  links: [
    "mPFC and precuneus (mentalizing network)",
    "Right IFG and anterior insula (ventral attention network)",
    "Posterior superior temporal sulcus (social perception)",
    "Arcuate and middle longitudinal fasciculi"
  ]
},

stg: {
  name: "Superior Temporal Gyrus & Wernicke", short: "STG / STS",
  summary: "Processes what we hear and makes sense of it; sounds, speech, prosody and the perception of social motion come together here.",
  anatomy: [
    "Heschl’s gyrus (transverse temporal gyrus, BA 41–42): primary auditory cortex, deep in the Sylvian fissure.",
    "Wernicke’s area: posterior STG (BA 22), planum temporale (usually larger on the left).",
    "Superior temporal sulcus (STS): a social perception region.",
    "Blood supply: inferior division of the MCA."
  ],
  functions: [
    "Auditory perception (tonotopic map), sound recognition.",
    "Decoding speech sounds (phonemes) and grasping word meaning (Wernicke).",
    "Right: inferring emotion from music, tone of voice and prosody.",
    "STS: perception of biological motion, gaze direction and facial expression dynamics; voice–face integration."
  ],
  tests: [
    "Dichotic listening, auditory processing tests",
    "Token Test (verbal comprehension), phonological discrimination",
    "Prosody recognition; biological motion (point-light) paradigms"
  ],
  development: [
    "Specialization for the sounds of the native language within the first year (6–12 months, perceptual narrowing).",
    "Myelination of auditory pathways is completed in early childhood; the STS social perception network develops in childhood."
  ],
  clinical: [
    "ASD: reduced STS response to the human voice (Gervais et al., 2004), differences in biological motion processing.",
    "Early-onset schizophrenia: STG activation during auditory hallucinations, reduced STG volume.",
    "Developmental language disorder, auditory processing disorder, dyslexia (phonological).",
    "Landau-Kleffner syndrome: acquired aphasia due to temporal epileptiform activity."
  ],
  treatment: [
    "Landau-Kleffner syndrome: corticosteroids and antiepileptic drugs to suppress epileptiform activity; early treatment matters for language recovery. Speech and language therapy, sign language if needed. [C]",
    "Auditory hallucinations in early-onset schizophrenia: antipsychotic treatment; clozapine in resistant cases (including adolescents). CBT for voices and relating-to-the-voice (avatar) therapies are promising in adults. [A]",
    "Speech and language therapy for auditory processing and language difficulties; an FM system and noise reduction in the classroom. [C]"
  ],
  lesion: [
    "Wernicke’s aphasia: fluent but meaningless speech (paraphasias, neologisms), impaired comprehension and repetition.",
    "Bilateral Heschl damage: cortical deafness or pure word deafness.",
    "Right: amusia, aprosodia."
  ],
  links: [
    "Thalamus — medial geniculate body (auditory input)",
    "Broca’s area (arcuate fasciculus)",
    "Amygdala (emotional value of sound)",
    "Fusiform face area (social perception with the STS)"
  ]
},

itg: {
  name: "Inferior Temporal & Fusiform Cortex", short: "ITG / FG",
  summary: "Tells us “what” we see: recognition of faces, objects and written words; a store of conceptual knowledge.",
  anatomy: [
    "Middle and inferior temporal gyri (BA 21, 20), fusiform gyrus (BA 37), temporal pole (BA 38).",
    "Fusiform face area (FFA — right-dominant) and visual word form area (VWFA — left fusiform).",
    "Medially, the parahippocampal gyrus and entorhinal cortex (BA 28, 35–36) form the gateway to the hippocampus.",
    "Blood supply: PCA (inferior temporal branches) and MCA (lateral surface)."
  ],
  functions: [
    "Ventral visual stream (“what?”): object and shape recognition.",
    "Face recognition and identity discrimination (FFA).",
    "Reading: rapid recognition of written word forms (VWFA).",
    "Semantic memory: knowledge of concepts and word meanings (temporal pole, ITG).",
    "Scene and place processing (parahippocampal place area), color processing."
  ],
  tests: [
    "Benton Facial Recognition, Cambridge Face Memory Test (child version)",
    "Object naming, category fluency (animal names)",
    "Reading speed and fluency"
  ],
  development: [
    "Face-selective regions grow and specialize through childhood and adolescence.",
    "The VWFA emerges with learning to read (ages 5–7) and strengthens with reading experience.",
    "The visual word form area (VWFA) forms through learning to read: comparing adults who were illiterate, learned to read in adulthood or learned in childhood, literacy increased the left fusiform response to script and started a small competition with face processing at the same site; most changes were also seen in those who learned as adults (Dehaene et al., 2010). A cultural invention (reading) “recycles” an old visual area. [B]"
  ],
  clinical: [
    "ASD: reduced fusiform response to faces; related to the pattern of looking at the eye region.",
    "Dyslexia: VWFA hypoactivation.",
    "Developmental prosopagnosia.",
    "Temporal lobe epilepsy: behavioral and emotional symptoms, memory problems."
  ],
  treatment: [
    "Dyslexia intervention increases VWFA and left temporoparietal activity; details on the IPL card. [B]",
    "In developmental prosopagnosia: compensatory strategies (voice, hair, gait and clothing cues) and awareness at school. [C]"
  ],
  lesion: [
    "Prosopagnosia (right/bilateral fusiform), visual object agnosia.",
    "Pure alexia (left VWFA), achromatopsia.",
    "Temporal pole: loss of semantic memory, anomia. Bilateral anterior temporal: Klüver-Bucy syndrome."
  ],
  links: [
    "Occipital cortex (ventral stream)",
    "Hippocampus and amygdala",
    "OFC (uncinate fasciculus)",
    "Inferior longitudinal fasciculus"
  ]
},

occipital: {
  name: "Occipital Lobe — Visual Cortex", short: "V1–V5",
  summary: "Where visual information is first processed: it analyzes edges, orientation, color, motion and depth and distributes them to the dorsal and ventral streams.",
  anatomy: [
    "V1 (BA 17, striate cortex): on both banks of the calcarine sulcus; the stria of Gennari.",
    "V2–V3 (BA 18) and association areas (BA 19); V4 (color) ventrally, V5/MT (motion) at the temporo-occipital junction.",
    "The cuneus (above the calcarine) represents the lower visual field, the lingual gyrus (below the calcarine) the upper visual field.",
    "Input from the lateral geniculate body via the optic radiation. Blood supply: PCA (calcarine artery); the occipital pole is an MCA–PCA border zone."
  ],
  functions: [
    "Retinotopic visual map; analysis of edges, orientation, contrast and spatial frequency.",
    "Color (V4), motion (V5/MT), binocular depth (stereopsis).",
    "Feeds the dorsal (parietal — “where/how”) and ventral (temporal — “what”) streams."
  ],
  tests: [
    "Visual field examination (confrontation, perimetry)",
    "Visual perception tests (Beery VMI visual perception subtest)",
    "Visual evoked potentials (VEP), motion perception thresholds"
  ],
  development: [
    "The critical period for binocular vision and visual acuity is the first years; amblyopia needs early treatment.",
    "Synaptic density in V1 peaks in infancy (around 8 months) and is then pruned (Huttenlocher).",
    "Visual cortex is among the earliest-maturing cortical areas."
  ],
  clinical: [
    "Cortical/cerebral visual impairment (CVI): the most common cause of childhood visual impairment in developed countries (24% in a US registry of ages 0–3; up to 48% of severe visual loss in the UK). The most common cause is hypoxic-ischemic injury, especially periventricular leukomalacia in preterm infants. The eye examination can be normal; it may be mistaken for a behavior or learning problem. [A]",
    "ASD: detail-focused (local) visual processing.",
    "Childhood occipital epilepsies: Panayiotopoulos syndrome (autonomic), Gastaut type (visual hallucinations).",
    "Migraine aura (cortical spreading depression)."
  ],
  treatment: [
    "Preventive drugs for childhood migraine: in the CHAMP trial (ages 8–17, 361 patients) amitriptyline and topiramate were not superior to placebo (at least 50% reduction in attack frequency: 52%, 55%, placebo 61%) and had more side effects (Powers et al., 2017). Lifestyle measures and CBT are the basis of prevention. [A]",
    "In CVI: adapting the visual environment (high contrast, plain background, moving and colorful objects) and early visual rehabilitation. [C]",
    "Most occipital epilepsies (e.g. Panayiotopoulos syndrome) are benign; antiepileptic drugs for frequent seizures."
  ],
  lesion: [
    "Contralateral homonymous hemianopia (the macula may be spared).",
    "Bilateral: cortical blindness, Anton syndrome (denial of blindness).",
    "Akinetopsia (V5), achromatopsia (V4), visual hallucinations and illusions."
  ],
  links: [
    "Thalamus — lateral geniculate body and pulvinar",
    "Parietal cortex (dorsal stream)",
    "Inferior temporal/fusiform cortex (ventral stream)",
    "Frontal eye field",
    "Superior colliculus"
  ]
},

insula: {
  latin: 'Lobus insularis (island of Reil)',
  name: "Insula", short: "Insula",
  summary: "Feels the inside of the body: turns heartbeat, hunger, disgust and pain into subjective feeling, and turns attention to what is salient.",
  anatomy: [
    "Deep in the lateral sulcus, covered by the frontal, parietal and temporal opercula; surrounded by the circular sulcus.",
    "Short (anterior) and long (posterior) insular gyri.",
    "The anterior insula contains von Economo neurons.",
    "Blood supply: M2 segments of the MCA."
  ],
  functions: [
    "Interoception: sensing internal body states such as heartbeat, breathing, hunger and bladder fullness.",
    "Subjective emotional experience and body awareness.",
    "Disgust processing; primary gustatory cortex (anterior insula/frontal operculum).",
    "Pain and temperature (posterior insula), autonomic regulation.",
    "Salience network (with the ACC): switching between the DMN and the executive network.",
    "Empathy, evaluation of uncertainty and risk, craving."
  ],
  tests: [
    "Heartbeat detection/counting tasks",
    "Interoceptive awareness scales",
    "Recognition of disgusted facial expressions, empathy paradigms"
  ],
  development: [
    "Interoceptive awareness develops in adolescence.",
    "Connections of the anterior insula–ACC salience network strengthen in adolescence.",
    "Adolescents show a marked insula response to social exclusion (Cyberball)."
  ],
  clinical: [
    "Anxiety disorders: anterior insula hyperactivity, intolerance of uncertainty.",
    "Anorexia nervosa: disturbed interoceptive processing and body perception.",
    "ASD: differences in interoception, alexithymia, salience network differences.",
    "Substance use: smokers with insula damage quit easily and without urges (the “craving” disappears) (Naqvi et al., 2007). The insula turns the bodily feeling of craving into a conscious urge. [B]",
    "Tourette syndrome: insula activation during the premonitory urge.",
    "A shared transdiagnostic finding: the most consistent sites of gray matter loss across psychiatric disorders are the bilateral anterior insula and the dorsal ACC (193 studies; Goodkind et al., 2015). Weakening of the salience network relates to executive difficulties regardless of diagnosis. [A]"
  ],
  treatment: [
    "Deep TMS (H4 coil): FDA-cleared in adults as a short-term aid to smoking cessation (August 2020; sham-controlled trial of 262 people, 18 sessions over 6 weeks). The first TMS clearance in addiction. [A]",
    "Interoception-focused approaches (body awareness, breath and heartbeat awareness) are being studied in anxiety, eating disorders and ASD; the insula is their theoretical target. [C]"
  ],
  lesion: [
    "Taste disturbance, autonomic dysregulation (right insula — arrhythmia).",
    "Impaired recognition of disgust, anosognosia (right posterior).",
    "Left anterior insula: apraxia of speech."
  ],
  links: [
    "ACC (salience network)",
    "Amygdala",
    "OFC and vmPFC",
    "Thalamus VMpo/VMb (interoceptive input)",
    "Hypothalamus and brainstem autonomic centers"
  ]
},

pcc: {
  name: "Posterior Cingulate & Precuneus", short: "PCC / Precuneus",
  summary: "The hub of the default mode network: inward-directed thought, autobiographical memory and the experience of self converge here.",
  anatomy: [
    "Posterior cingulate cortex (BA 23, 31), retrosplenial cortex (BA 29–30), precuneus (medial BA 7).",
    "Around and above the splenium of the corpus callosum; the parieto-occipital sulcus lies posteriorly.",
    "One of the most metabolically active and most highly connected regions of the brain.",
    "Blood supply: ACA (pericallosal), PCA (parieto-occipital branches)."
  ],
  functions: [
    "Hub of the default mode network (DMN): highest activity at rest, inward-directed thought.",
    "Retrieval of autobiographical memory, self-related processing.",
    "Imagining the future (episodic simulation), mind-wandering.",
    "Retrosplenial: spatial navigation, transforming between viewpoints.",
    "Precuneus: visual imagery, episodic memory, awareness."
  ],
  tests: [
    "Resting-state fMRI (DMN connectivity)",
    "Autobiographical memory interview",
    "Virtual navigation and imagery tasks"
  ],
  development: [
    "The DMN is fragmented in infancy; long-range connections strengthen in childhood and adolescence (Fair et al., 2008).",
    "The anticorrelation between the DMN and task-positive networks becomes clearer with age."
  ],
  clinical: [
    "ADHD: insufficient suppression of the default mode network (DMN) during tasks, and attentional lapses (Sonuga-Barke and Castellanos, 2007). In youth with ADHD whose DMN suppression was weak off medication, a stimulant brought suppression to healthy levels and normalized the influence of the ventral ACC on lateral PFC (Peterson et al., 2009; 16 patients). [B]",
    "ASD: differences in DMN connectivity.",
    "Depression: increased DMN activity linked to rumination.",
    "Trauma: dissociation and changes in self-perception."
  ],
  treatment: [
    "Stimulants normalize DMN suppression during tasks; regulating the network linked to “mind-wandering” may be one mechanism of action (Peterson et al., 2009). [B]",
    "In depression, rumination-focused CBT and behavioral activation target the DMN’s excessive inward focus; related network findings are on the mPFC card (Kaiser et al., 2015). [B]",
    "In trauma and dissociation, trauma-focused CBT (TF-CBT) is first line in children and adolescents. [A]"
  ],
  lesion: [
    "Topographic disorientation (retrosplenial — getting lost).",
    "Episodic memory impairment, changes in awareness."
  ],
  links: [
    "mPFC (anterior hub of the DMN)",
    "Hippocampus and parahippocampal cortex",
    "Angular gyrus",
    "Thalamus — anterior nucleus",
    "Cingulum bundle"
  ]
}

});
