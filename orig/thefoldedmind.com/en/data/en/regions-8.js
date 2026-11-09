/* İngilizce bölge metinleri 8/8 (regions-8.js: talamus çekirdekleri ve serebellum alt yapıları). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

th_ant: {
  name: "Anterior Nuclear Group", short: "AN",
  summary: "The thalamic station of the Papez circuit: relays information from the mammillary body to the cingulate cortex, supporting episodic memory and navigation.",
  anatomy: [
    "At the front end of the thalamus, between the two limbs of the internal medullary lamina.",
    "Input: mammillary body (mammillothalamic tract) and hippocampal formation (fornix); output: cingulate and retrosplenial cortex."
  ],
  functions: [
    "Consolidation of episodic memory (Papez circuit).",
    "Spatial navigation; head-direction signals."
  ],
  clinical: [
    "Memory impairment in thalamic amnesia and Wernicke-Korsakoff syndrome (mammillary body–anterior thalamus).",
    "Anterior thalamic nucleus deep brain stimulation in refractory focal epilepsy (adults)."
  ],
  treatment: [
    "Anterior thalamic nucleus deep brain stimulation in refractory focal epilepsy (SANTE; 110 patients): median reduction in seizure frequency 40.4% vs 14.5% with placebo in the blinded phase; 75% at 7 years in open follow-up. FDA approval 2018, age 18 and over (Fisher et al., 2010). [A]",
    "Emergency thiamine in Wernicke encephalopathy; it can also occur in adolescents with anorexia nervosa and after bariatric surgery. [A]"
  ]
},

th_md: {
  name: "Mediodorsal Nucleus", short: "MD",
  summary: "The thalamic partner of the prefrontal cortex: carries out working memory, decision-making and reward learning together with prefrontal circuits.",
  anatomy: [
    "In the medial thalamus, next to the third ventricle, medial to the internal medullary lamina.",
    "Reciprocally connected with the DLPFC, OFC and ACC; input: amygdala, ventral pallidum, SNr."
  ],
  functions: [
    "Working memory and cognitive flexibility: sustaining prefrontal activity.",
    "Relaying reward and value information to the prefrontal cortex (limbic loop)."
  ],
  clinical: [
    "Schizophrenia: reduced mediodorsal nucleus volume and differences in prefrontal–thalamic connectivity.",
    "Contributes to memory impairment in Korsakoff syndrome."
  ]
},

th_va: {
  name: "Ventral Anterior Nucleus", short: "VA",
  summary: "A motor planning station that relays basal ganglia output to premotor and prefrontal cortex.",
  anatomy: [
    "In the ventral anterior part of the thalamus.",
    "Input: GPi and SNr (GABAergic); output: premotor cortex, SMA and prefrontal cortex."
  ],
  functions: [
    "Planning and initiation of movement (basal ganglia–thalamus–cortex loop)."
  ],
  clinical: [
    "Disorders of basal ganglia output (parkinsonism, dystonia, tics) reach the cortex through this thalamic link."
  ]
},

th_vld: {
  name: "Ventral Lateral Group (Dorsal Part)", short: "VLd",
  summary: "The dorsal part of the ventral lateral region: the area holding the relay nuclei that pass cerebellar and basal ganglia input to motor cortex.",
  anatomy: [
    "The atlas defines this group by clustering diffusion MRI orientation information; it is named after the classic nuclei, but its borders do not match histological nuclei one to one.",
    "The ventral lateral nucleus receives input from the cerebellum (dentate) and the globus pallidus and relays it to motor cortex."
  ],
  functions: [
    "Relay of cerebellar and basal ganglia input to motor cortex; coordination of movement."
  ],
  clinical: [
    "The VIM nucleus in the ventral lateral region is the target of deep brain stimulation and focused ultrasound in essential tremor (adults)."
  ],
  treatment: [
    "MRI-guided focused ultrasound thalamotomy targeting the ventral thalamus (VIM) in essential tremor: in 76 patients, hand tremor fell markedly at 3 months compared with a sham procedure (Elias et al., 2016); incisionless and unilateral. An alternative to deep brain stimulation. Adults. [A]"
  ]
},

th_vlv: {
  name: "Ventral Lateral Group (Ventral Part)", short: "VLv",
  summary: "The ventral part of the ventral lateral region: an area next to the motor and sensory relay nuclei, reciprocally connected with the cortex.",
  anatomy: [
    "The atlas defines this group by clustering diffusion MRI orientation information; its borders do not match histological nuclei one to one.",
    "In the ventral and lateral thalamus, next to the ventral posterior (sensory relay) nuclei."
  ],
  functions: [
    "Reciprocal transfer of motor and sensory information with the cortex."
  ]
},

th_cl: {
  name: "Central Lateral – Lateral Posterior – Medial Pulvinar", short: "CL-LP-MPu",
  summary: "A group containing the arousal-related intralaminar central lateral nucleus and the lateral posterior and medial pulvinar nuclei linked to association cortices.",
  anatomy: [
    "The atlas groups these nuclei together because of shared cortical connectivity patterns.",
    "The central lateral nucleus belongs to the intralaminar group; the lateral posterior and medial pulvinar are connected with parietal and limbic cortices."
  ],
  functions: [
    "Maintaining wakefulness and the level of consciousness (intralaminar nuclei; the arousal network).",
    "Attention and multisensory integration (lateral posterior, medial pulvinar)."
  ],
  clinical: [
    "Stimulation of the central thalamus has been studied in disorders of consciousness after severe traumatic brain injury (Schiff et al., 2007)."
  ]
},

th_pul: {
  name: "Pulvinar", short: "Pul",
  summary: "The largest thalamic nucleus: regulates visual attention, salience and communication between cortical areas.",
  anatomy: [
    "At the posterior end of the thalamus, above the lateral geniculate body.",
    "Reciprocally connected with visual and association cortices (parietal, temporal, prefrontal); receives input from the superior colliculus."
  ],
  functions: [
    "Orienting visual attention and filtering out distractors.",
    "Regulating synchrony between cortical areas.",
    "Superior colliculus–pulvinar–amygdala route: fast, nonconscious processing of threat stimuli."
  ],
  clinical: [
    "Contralateral attentional neglect with pulvinar lesions.",
    "Differences in pulvinar structure and connectivity have been reported in ASD and schizophrenia."
  ]
},

cb_ant: {
  name: "Anterior Lobe (Lobules I–V)", short: "I–V",
  summary: "The sensorimotor anterior lobe of the cerebellum: the first somatotopic map of the trunk and limbs; regulates gait and posture.",
  anatomy: [
    "In front of the primary fissure; lobules I–V of the vermis and hemispheres.",
    "Receives input from the spinal cord (spinocerebellar tracts) and from motor cortex (via the pontine nuclei)."
  ],
  functions: [
    "Gait, posture and limb coordination.",
    "The first sensorimotor body map (continuous with lobules V–VI)."
  ],
  clinical: [
    "Truncal and gait ataxia with damage to the anterior lobe (especially the vermis)."
  ]
},

cb_vi: {
  name: "Lobule VI", short: "VI",
  summary: "A transitional lobule between sensorimotor and cognitive regions: active in movement, language and attention tasks.",
  anatomy: [
    "Just behind the primary fissure; the first lobule of the posterior lobe (hemispheric part; vermis VI is in the posterior vermis)."
  ],
  functions: [
    "Continuation of the sensorimotor map (hand, face).",
    "Contribution to verbal working memory and language processing."
  ]
},

cb_crus1: {
  name: "Crus I", short: "Crus I",
  summary: "The cognitive core of the cerebellum: forms loops with prefrontal and parietal cortex and supports executive function and language.",
  anatomy: [
    "The upper part of lobule VII (ansiform lobule); the largest lobule of the hemispheres.",
    "Connected with contralateral prefrontal and parietal cortex via the pontine nuclei and dentate–thalamus."
  ],
  functions: [
    "The cerebellar representation of the executive control and default mode networks (Buckner et al., 2011).",
    "Language and verbal working memory (especially right Crus I)."
  ],
  tests: [
    "Cerebellar Cognitive Affective Syndrome Scale (CCAS scale): a bedside screen with items such as category switching, backward digit span, letter fluency and verbal registration. Possible, probable and definite syndrome by the number of failed items (Hoche et al., 2018). Useful at the group level, limited specificity for individual diagnosis; no child version. [B]"
  ],
  clinical: [
    "ASD: differences in connectivity between right Crus I and the prefrontal cortex; stimulating this circuit in mice rescued social behavior (Stoodley et al., 2017)."
  ]
},

cb_crus2: {
  name: "Crus II", short: "Crus II",
  summary: "A posterior lobe region involved in social and cognitive processing: connected with mentalizing and executive networks.",
  anatomy: [
    "The lower part of lobule VII; separated from Crus I by the horizontal fissure."
  ],
  functions: [
    "Active during mentalizing (understanding others’ intentions and beliefs) (Van Overwalle et al., 2014).",
    "Participation in the executive control and default mode networks."
  ],
  clinical: [
    "Posterior cerebellar involvement in ASD and social-cognitive difficulties is being studied."
  ]
},

cb_viib: {
  name: "Lobule VIIb", short: "VIIb",
  summary: "A posterior lobe lobule between Crus II and lobule VIII, connected with attention and working memory networks.",
  anatomy: [
    "The lowest part of lobule VII; separated from lobule VIII by the prepyramidal fissure."
  ],
  functions: [
    "Activation in dorsal attention network and working memory tasks."
  ]
},

cb_viii: {
  name: "Lobule VIII (VIIIa–VIIIb)", short: "VIII",
  summary: "The lobule carrying the second sensorimotor body map; also connected with attention networks.",
  anatomy: [
    "Biventral lobule; subdivisions VIIIa and VIIIb (hemispheric part; vermis VIII is in the posterior vermis)."
  ],
  functions: [
    "The second somatotopic sensorimotor map (Grodd et al., 2001).",
    "Participation in the dorsal attention network (VIIIa)."
  ]
},

cb_ix: {
  name: "Lobule IX (Tonsil)", short: "IX",
  summary: "A posterior lobe region connected with the default mode network; its hemispheric part is the cerebellar tonsil.",
  anatomy: [
    "Its hemispheric part is the tonsil and its vermal part the uvula (the uvula is in the posterior vermis in the model); just above the foramen magnum."
  ],
  functions: [
    "The cerebellar representation of the default mode network (Buckner et al., 2011)."
  ],
  clinical: [
    "Chiari malformation type I: the tonsils extend below the foramen magnum; headache, sleep apnea, difficulty swallowing."
  ]
},

cb_x: {
  name: "Flocculonodular Lobe (Lobule X)", short: "X",
  summary: "The vestibulocerebellum: regulates balance, eye–head coordination and holding gaze steady.",
  anatomy: [
    "Flocculus (hemispheres) and nodulus (vermis); separated by the posterolateral fissure.",
    "Directly connected with the vestibular nuclei."
  ],
  functions: [
    "Balance and truncal posture.",
    "Calibration of the vestibulo-ocular reflex and holding gaze steady."
  ],
  clinical: [
    "Damage causes truncal ataxia, a wide-based gait and nystagmus.",
    "Medulloblastoma (the most common malignant brain tumor of childhood) often arises in the midline, around the vermis and fourth ventricle."
  ]
},

cb_vermis: {
  name: "Posterior Vermis (Lobules VI–IX)", short: "Vermis",
  summary: "The midline “limbic cerebellum”: linked to emotion regulation, eye movements and autonomic responses.",
  anatomy: [
    "The midline strip between the hemispheres: declive (VI), folium and tuber (VII), pyramis (VIII), uvula (IX).",
    "Sends output to the vestibular nuclei and reticular formation via the fastigial nucleus."
  ],
  functions: [
    "Emotion regulation and affect (Schmahmann’s concept of the “limbic cerebellum”).",
    "Calibration of saccadic and smooth pursuit eye movements (oculomotor vermis VI–VII)."
  ],
  clinical: [
    "ASD: hypoplasia of vermis VI–VII has been reported (Courchesne et al., 1988).",
    "ADHD: reduced posterior-inferior vermis volume.",
    "Posterior fossa syndrome (cerebellar mutism): in children after surgery for a vermis tumor."
  ]
},

cb_dentate: {
  name: "Dentate Nucleus", short: "DN",
  summary: "The largest deep cerebellar nucleus: carries the output of the lateral hemispheres via the thalamus to motor and prefrontal cortex.",
  anatomy: [
    "In the hemispheric white matter, shaped like a crumpled bag; its hilum faces medially and forward.",
    "Output: superior cerebellar peduncle → contralateral red nucleus and thalamus (VL) → cortex."
  ],
  functions: [
    "Motor planning and timing (dorsal part).",
    "Cognitive functions: its ventral part forms a loop with the prefrontal cortex (Dum and Strick, 2003)."
  ],
  clinical: [
    "Dentate nucleus atrophy in Friedreich ataxia.",
    "Disorders of the dentato-thalamo-cortical pathway cause tremor and ataxia."
  ]
},

cb_interposed: {
  name: "Interposed Nucleus (Emboliform and Globose)", short: "IP",
  summary: "The output of the paravermal region: corrects limb movements on the fly; plays a role in conditioned eyeblink learning.",
  anatomy: [
    "Between the dentate and fastigial nuclei; made of the emboliform and globose nuclei.",
    "Output: contralateral red nucleus and thalamus."
  ],
  functions: [
    "Correction of limb errors during movement.",
    "Learning of the conditioned eyeblink reflex (animal studies)."
  ],
  clinical: [
    "Damage causes ipsilateral intention tremor and dysmetria."
  ]
}

});
