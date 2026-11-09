/* İngilizce bölge metinleri 1/8 (regions-1.js: frontal lob ve anterior singulat). Türkçe kartın aynı alanları, madde madde
   aynı sırada; I18N.loadEn yükler, data/en/content.js kartlara işler. tools/check_data.sh madde sayılarını denetler. */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

dlpfc: {
  name: "Dorsolateral Prefrontal Cortex", short: "DLPFC",
  summary: "The hub of executive function: holds information in mind, works on it, plans and steers behavior toward goals; one of the latest-maturing cortical regions and among the most targeted by medication and TMS.",
  anatomy: [
    "Middle frontal gyrus and the lateral surface of the superior frontal gyrus; Brodmann areas (BA) 9 and 46, partly 8.",
    "Bounded posteriorly by premotor cortex (BA 6), inferiorly by the inferior frontal sulcus and inferior frontal gyrus, and anteriorly by frontopolar cortex (BA 10).",
    "Granular (prominent layer IV) association cortex; connected to parietal cortex by long-range white matter tracts (superior longitudinal fasciculus).",
    "Blood supply: superior branches of the middle cerebral artery (MCA); anterior cerebral artery (ACA) along the dorsomedial edge.",
    "Boundary in the model: HCP-MMP1.0 areas 46, 9-46 (d, a-v, p-v), 8Av, 8Ad, 8C, 8BL, 9a, 9p, i6-8, s6-8, SFL and the inferior frontal sulcus–junction areas (IFSa, IFSp, IFJa, IFJp). Those falling on the medial surface go to mPFC (Glasser et al., 2016). For students: “DLPFC” is not a single area but a family of areas."
  ],
  functions: [
    "Working memory: holding information briefly in mind and operating on it (manipulation).",
    "Planning, breaking tasks into sequential steps, problem solving and organization.",
    "Cognitive flexibility (switching rules or strategies) and abstract reasoning.",
    "Top-down control of attention and suppression of distractors.",
    "Cognitive reappraisal in emotion regulation.",
    "Verbal fluency and generativity (left-dominant); visuospatial working memory (right-dominant).",
    "Neurochemistry of working memory (key to understanding drug effects): Noradrenaline, α2A receptor: closes cAMP–HCN channels on dendritic spines, strengthening prefrontal network connectivity and resistance to distractors. This is how guanfacine works (Wang et al., 2007). [B] Dopamine, D1 receptor: an inverted-U relationship; too little and too much both impair working memory (Arnsten). Under stress, excess catecholamines take the DLPFC “offline”. [B]"
  ],
  tests: [
    "N-back and Digit Span Backward",
    "Wisconsin Card Sorting Test (WCST) — perseverative errors",
    "Tower of London / Tower of Hanoi — planning",
    "Trail Making Test B (TMT-B), Stroop (together with the ACC)",
    "Verbal fluency (letter fluency: F-A-S)"
  ],
  development: [
    "One of the latest-maturing regions of the brain; frontal gray matter volume peaks in late childhood, and cortical thinning through synaptic pruning begins in adolescence.",
    "Myelination and strengthening of frontoparietal connections continue into the mid-20s.",
    "Its late maturation relative to the reward system in adolescence (the “dual systems / imbalance model”) helps explain risk-taking.",
    "Sensorimotor → association axis: cortical maturation proceeds from sensory and motor areas toward association cortices. The DLPFC sits at the late end of this axis; prolonged plasticity brings both a learning opportunity and a risk for psychopathology (Sydnor et al., 2021). [B]",
    "Maturation of executive function: a shared curve across 10,766 people (ages 8–35). Rapid gains at 10–15, slowing at 15–17, adult levels at 18–20 (Tervo-Clemmens et al., 2023). Clinical implication: expectations of “adult-like” planning in adolescents should be adjusted for age. [A]"
  ],
  clinical: [
    "ADHD: hypoactivation of frontostriatal circuits; about a 3-year delay in reaching peak cortical thickness, most marked in prefrontal cortex (Shaw et al., 2007). [B] ENIGMA cortical analysis (2,246 patients, 1,934 controls): smaller surface area in children, mostly in frontal, cingulate and temporal regions; no difference in adolescents and adults (Hoogman et al., 2019). Consistent with the maturational delay model of Shaw 2007. [A] Effects are small; MRI cannot diagnose an individual patient.",
    "Early-onset schizophrenia: DLPFC dysfunction during working memory tasks (hypofrontality).",
    "Depression: left DLPFC hypoactivity; the rTMS target. FDA clearance (2024) as add-on treatment for major depression at ages 15–21.",
    "Links with school performance in specific learning disorders and executive function problems."
  ],
  treatment: [
    "Stimulants (methylphenidate, amphetamine) and atomoxetine raise prefrontal dopamine and noradrenaline. Guanfacine strengthens the prefrontal network directly via α2A (Wang et al., 2007). [B]",
    "rTMS in adolescents: NeuroStar received FDA clearance in March 2024 as add-on to antidepressants for major depression at ages 15–21. The first TMS treatment cleared for adolescents. [A] (regulatory decision)",
    "Target selection: sites in the left DLPFC that are anticorrelated with the sgACC work better; the best coordinates lie in BA 46 (Fox et al., 2012). [B]",
    "SAINT (accelerated, fMRI-guided iTBS over 5 days): in treatment-resistant depression, remission 78.6% vs 13.3% with sham (Cole et al., 2022; 14 vs 15 patients, adults). FDA clearance 2022. Still investigational in adolescents. [B]"
  ],
  lesion: [
    "Dysexecutive syndrome: impaired planning and organization, perseveration.",
    "Reduced working memory capacity, distractibility.",
    "Inability to generate strategies; behavior becomes driven by environmental cues."
  ],
  links: [
    "Caudate nucleus (cognitive/dorsolateral frontostriatal loop)",
    "Thalamus — mediodorsal nucleus",
    "Posterior parietal cortex (frontoparietal control network)",
    "Anterior cingulate cortex",
    "Cerebellum (Crus I/II) — cognitive cerebellar loop",
    "Mesocortical dopamine (VTA), noradrenaline (locus coeruleus)",
    "Subgenual cingulate (sgACC): anticorrelated (negative) connectivity; the success of the TMS target in depression relates to the strength of this anticorrelation (Fox et al., 2012)"
  ]
},

ofc: {
  name: "Orbitofrontal Cortex", short: "OFC",
  summary: "Computes the value of rewards and punishments; flexibly updates behavior according to expectations and monitors social appropriateness.",
  anatomy: [
    "Ventral surface of the frontal lobe above the orbit: gyrus rectus (medial), orbital gyri, olfactory sulcus.",
    "BA 11, 12/47 (lateral orbital), 13 and 14; the lateral part extends into the pars orbitalis of the inferior frontal gyrus.",
    "Secondary olfactory and gustatory cortex; where taste, smell, visual and interoceptive information converge.",
    "Blood supply: ACA (medial orbitofrontal branch) and MCA (lateral orbitofrontal artery)."
  ],
  functions: [
    "Coding the reward/punishment value of stimuli and comparing expected with actual outcomes.",
    "Reversal learning: updating behavior when the stimulus–reinforcer relationship changes.",
    "Emotional decision-making (somatic marker hypothesis, together with the vmPFC).",
    "Context-appropriate social behavior and inhibition of impulsive responses.",
    "Combining smell and taste information with hedonic value."
  ],
  tests: [
    "Iowa Gambling Task (IGT) — child versions available",
    "Probabilistic reversal learning",
    "Delay discounting",
    "Go/No-Go and social decision games (Ultimatum game)"
  ],
  development: [
    "Matures slowly; in adolescence reward sensitivity is high while the OFC’s regulatory contribution is not yet complete.",
    "Early-life adversity (neglect, abuse) has been linked to OFC volume and function.",
    "Self-control and the ability to delay reward develop markedly through the school years."
  ],
  clinical: [
    "OCD: OFC hyperactivity in the cortico-striato-thalamo-cortical (CSTC) circuit; it decreases with treatment response.",
    "Conduct disorder and callous-unemotional (CU) traits: OFC/vmPFC dysfunction in reward/punishment learning.",
    "Substance use: distorted reward value, compulsive use.",
    "ADHD: delay aversion, choosing a small immediate reward over a large delayed one.",
    "Eating disorders: differences in reward and taste processing.",
    "Large structural sample in OCD (ENIGMA-OCD; 1,905 patients, 1,760 controls): thinner inferior and superior parietal cortex in children; parietal thinning and reduced temporal surface area in adults; small effects (d −0.10 to −0.33). Frontal differences were more widespread in medicated patients. OFC hyperactivity is a functional finding; structurally, the most consistent difference is parietal (ENIGMA-OCD, 2018). [A]"
  ],
  treatment: [
    "First line in OCD: CBT with exposure and response prevention (ERP) and SSRIs; the two are often combined in moderate to severe childhood OCD. Effective treatment reduces OFC–caudate hyperactivity. [A]",
    "Deep TMS (H7 coil, mPFC and ACC): FDA-cleared for adult treatment-resistant OCD (2018); details on the mPFC card. [A]",
    "Interventions targeting delay discounting and impulsivity (contingency management, reward-delay training) draw on the OFC’s value computation in ADHD and substance use."
  ],
  lesion: [
    "“Pseudopsychopathic” picture: disinhibition, social inappropriateness, impulsivity; classic example: Phineas Gage.",
    "Moria / Witzelsucht (inappropriate joking), increased argumentativeness.",
    "Anosmia (proximity to the olfactory tracts)."
  ],
  links: [
    "Amygdala (emotional value)",
    "Nucleus accumbens / ventral striatum (limbic loop)",
    "Head of the caudate (OFC–striatal loop, OCD)",
    "Thalamus — mediodorsal nucleus",
    "Insula and hypothalamus",
    "Dopamine (VTA), serotonin (raphe)"
  ]
},

mpfc: {
  name: "Medial & Frontopolar Prefrontal Cortex", short: "mPFC",
  summary: "Represents the self and other minds; by regulating the amygdala it supports fear extinction and emotional balance.",
  anatomy: [
    "Medial surface of the superior frontal gyrus and the frontal pole; BA 10 and medial BA 9.",
    "The ventromedial part (vmPFC) covers subdivisions of BA 10–11–32; it borders the subgenual cingulate (BA 25) and the OFC.",
    "Dorsomedial PFC (dmPFC) stands out for mentalizing, vmPFC for value and emotion regulation.",
    "Blood supply: ACA (frontopolar and medial orbitofrontal branches)."
  ],
  functions: [
    "Self-referential thinking; the anterior hub of the default mode network (DMN).",
    "Theory of mind: inferring others’ intentions and beliefs (dmPFC).",
    "Inhibitory control over the amygdala; recall of fear extinction (vmPFC).",
    "Value-based decision-making, moral judgment.",
    "Frontopolar: multitasking, prospective memory, switching between subgoals."
  ],
  tests: [
    "False-belief tasks (Sally-Anne), Faux Pas test",
    "Reading the Mind in the Eyes Test (RMET — child version)",
    "Fear conditioning and extinction paradigms",
    "Six Elements Test (BADS-C) — multitasking"
  ],
  development: [
    "Amygdala–mPFC connectivity shifts from positive in early childhood to negative (regulatory) in adolescence (Gee et al., 2013).",
    "In adolescence, mPFC activity during social-cognitive tasks is higher than in adults and declines with age (development of the “social brain”).",
    "Sensitivity to peer evaluation peaks in adolescence."
  ],
  clinical: [
    "Autism spectrum disorder (ASD): differences in mPFC activation during mentalizing tasks.",
    "Anxiety and PTSD: insufficient regulation of the amygdala by the vmPFC, weak extinction memory. In healthy adults, those with a thicker vmPFC (medial OFC) recalled extinguished fear better the next day (Milad et al., 2005; 14 people). Small sample, pioneering finding. [C]",
    "Depression: a resting-state connectivity meta-analysis (556 patients, 518 controls) found reduced connectivity within the frontoparietal control network and with the attention network, and increased connectivity with the default mode network (including mPFC). Consistent with a shift toward inward thought (rumination) and withdrawal from the outside world (Kaiser et al., 2015). [A]",
    "Conduct disorder (CU traits): vmPFC differences in empathy and moral decision processes."
  ],
  treatment: [
    "Exposure therapy uses extinction learning, which depends on the vmPFC; new “safe” learning does not erase the old fear memory but competes with it. This is why fear can return after relapse or a change of context. [B]",
    "Augmenting exposure with D-cycloserine (partial NMDA agonist): in an individual-participant meta-analysis of 21 studies (1,047 people) the effect was small and only at end of treatment; not considered clinically meaningful (Mataix-Cols et al., 2017). [A]",
    "Deep TMS (H7 coil, mPFC and ACC): FDA-cleared as add-on treatment for adult OCD (August 2018); response at 6 weeks about 38% vs 11% with sham. Individualized symptom provocation precedes each session. [A]"
  ],
  lesion: [
    "vmPFC: impaired emotional decision-making (risky choices on the IGT), reduced social judgment and empathy.",
    "dmPFC / bilateral medial: apathy, abulia, reduced spontaneous behavior."
  ],
  links: [
    "Amygdala (top-down regulation)",
    "Hippocampus (contextual memory, extinction)",
    "Posterior cingulate / precuneus (DMN)",
    "Hypothalamus and PAG (autonomic response)",
    "Nucleus accumbens",
    "Serotonin (raphe), dopamine (VTA)"
  ]
},

broca: {
  name: "Broca’s Area (Inferior Frontal Gyrus)", short: "Broca / IFG",
  summary: "Speech production, syntax and verbal working memory; its right-hemisphere homolog contributes to response inhibition.",
  anatomy: [
    "Pars opercularis (BA 44) and pars triangularis (BA 45) of the inferior frontal gyrus.",
    "Language is lateralized to the left hemisphere in about 95% of right-handers and ~70% of left-handers.",
    "Connected to Wernicke’s area by the arcuate fasciculus and superior longitudinal fasciculus.",
    "Blood supply: superior division of the MCA."
  ],
  functions: [
    "Motor planning of speech and articulatory sequencing.",
    "Syntax and processing of complex sentence structures.",
    "Verbal working memory (phonological loop — articulatory rehearsal).",
    "Semantic selection and word retrieval (BA 45).",
    "Imitation and action understanding (mirror neuron system, BA 44).",
    "Right IFG: response inhibition (the “stop” signal), emotional prosody."
  ],
  tests: [
    "Letter fluency, Boston Naming Test",
    "Sentence repetition, grammar comprehension tests",
    "Stop-Signal and Go/No-Go tasks (right IFG)"
  ],
  development: [
    "Myelination of the arcuate fasciculus is weak at birth and increases through childhood.",
    "Maturation of complex syntactic processing extends into the school years.",
    "After early left-hemisphere injury, language can shift to the right hemisphere (early plasticity)."
  ],
  clinical: [
    "Developmental language disorder (DLD): about 7.6% in a screening of 7,267 children at school entry (two children in every class of 30); language disorder associated with intellectual disability or a medical diagnosis adds another 2.3% (Norbury et al., 2016). Structural and functional differences in the left IFG. Common but under-recognized; may be mistaken for an attention or behavior problem. [A]",
    "Stuttering: differences in the left IFG and related white matter tracts, overactivation in the right hemisphere.",
    "ADHD: right IFG hypoactivation, difficulty with response inhibition.",
    "Tourette syndrome: the right IFG as part of the inhibitory control networks."
  ],
  treatment: [
    "In developmental language disorder: speech and language therapy; school support and classroom accommodations. Monitoring for reading difficulties and social-emotional problems.",
    "Preschool stuttering: the Lidcombe program (delivered by parents, praising fluent speech and gently correcting stuttering) in 54 children aged 3–6, the proportion of stuttered syllables at 9 months was 1.5% in the Lidcombe group and 3.9% in the control group (Jones et al., 2005). Supports early intervention. [B]",
    "Response inhibition in ADHD (right IFG): stimulants and atomoxetine increase right IFG activity; details on the STN and DLPFC cards. [B]"
  ],
  lesion: [
    "Broca’s aphasia: nonfluent, telegraphic speech, agrammatism; comprehension relatively spared, repetition impaired.",
    "Apraxia of speech, writing impairment."
  ],
  links: [
    "Wernicke’s area (arcuate fasciculus — dorsal language stream)",
    "Premotor cortex / SMA",
    "Basal ganglia (speech initiation)",
    "Right IFG → subthalamic nucleus (hyperdirect inhibitory pathway)"
  ]
},

premotor: {
  name: "Premotor Cortex & SMA", short: "PMC / SMA",
  summary: "Plans and sequences movement; manages internally initiated actions, bimanual coordination and eye movements.",
  anatomy: [
    "BA 6: premotor cortex (PMC) laterally, supplementary motor area (SMA) on the medial surface, and pre-SMA in front of it.",
    "The frontal eye field (FEF) lies within BA 8, in front of the premotor cortex.",
    "Immediately anterior to the primary motor cortex; also sends fibers to the corticospinal tract.",
    "Blood supply: lateral part MCA, medial SMA ACA."
  ],
  functions: [
    "Planning and preparing movement; movement guided by external cues (lateral PMC).",
    "Internally initiated and sequential movements (SMA).",
    "Bimanual coordination and motor learning.",
    "Action understanding and imitation (ventral PMC — mirror neuron system).",
    "Pre-SMA: response selection and inhibition.",
    "FEF: voluntary saccades and orienting of visual attention."
  ],
  tests: [
    "Luria motor sequence (fist–edge–palm)",
    "Sequential finger tapping, Purdue Pegboard",
    "Antisaccade task (FEF)",
    "Praxis assessment, neurological soft signs (PANESS)"
  ],
  development: [
    "Fine motor skills and sequence learning develop rapidly in the school years.",
    "Mirror movements normally decrease markedly by about age 10; linked to maturation of the corpus callosum."
  ],
  clinical: [
    "Tourette syndrome and chronic tic disorders: SMA hyperactivity, part of the premonitory urge network.",
    "Developmental coordination disorder (DCD): difficulty with motor planning.",
    "ADHD: increased mirror movements, differences in motor inhibition.",
    "ASD: differences in imitation and motor planning (dyspraxia)."
  ],
  treatment: [
    "Developmental coordination disorder: task-oriented approaches (practicing directly the skill the child struggles with in daily life; e.g. CO-OP, neuromotor task training) and motor-based interventions; the mean effect in meta-analysis is large (d ≈ 1.06) but study quality is limited (Smits-Engelsman et al., 2018). [B]",
    "Premonitory urge (SMA and insula): CBIT teaches awareness of the urge and a competing response; details on the putamen card. [A]",
    "ADHD and DCD often co-occur; motor difficulties affect handwriting and participation in sports, calling for occupational therapy and school accommodations."
  ],
  lesion: [
    "SMA syndrome: reduced initiation of voluntary movement and speech (transient akinesia).",
    "Alien hand syndrome (medial frontal), ideomotor apraxia.",
    "FEF lesion: contralateral saccade impairment, gaze deviation toward the side of the lesion."
  ],
  links: [
    "Primary motor cortex",
    "Putamen (motor loop)",
    "Thalamus — VA/VL nuclei",
    "Cerebellum (dentate → thalamus → cortex)",
    "Posterior parietal cortex (visuomotor transformation)"
  ]
},

motor: {
  name: "Primary Motor Cortex", short: "M1",
  summary: "Executor of voluntary movement: the main source of the corticospinal tract, controlling the opposite half of the body.",
  anatomy: [
    "Precentral gyrus and the anterior paracentral lobule; BA 4. Separated from somatosensory cortex by the central sulcus.",
    "Somatotopic organization (motor homunculus): leg and foot medially, then trunk, arm, hand (a large area), with face and tongue lowest laterally.",
    "Giant pyramidal cells (Betz cells) in layer V.",
    "Blood supply: face–arm region MCA, leg region (medial) ACA."
  ],
  functions: [
    "Execution of voluntary movement; corticospinal and corticobulbar tracts.",
    "Coding of force, direction and speed; fine finger movements.",
    "Reorganization of the somatotopic map with motor learning (plasticity)."
  ],
  tests: [
    "Finger tapping speed, Grooved Pegboard",
    "Muscle strength and reflex examination",
    "Motor evoked potentials and cortical inhibition with TMS (research)"
  ],
  development: [
    "Corticospinal myelination is rapid from birth to about age 2; fine motor control develops into adolescence.",
    "Disappearance of primitive reflexes reflects maturation of cortical inhibition.",
    "Ipsilateral projections present early on are pruned in infancy."
  ],
  clinical: [
    "Cerebral palsy: spasticity and motor delay from perinatal injury. Diagnosis can now be made before 6 months (corrected age): before 5 months, General Movements Assessment (GMA) plus MRI is more than 95% accurate; afterwards, HINE plus MRI more than 90% (Novak et al., 2017). Early diagnosis allows intervention while brain plasticity is at its highest. [A]",
    "Tourette syndrome and ADHD: reduced short-interval intracortical inhibition (SICI) in TMS studies.",
    "Functional (conversion) motor disorders: common in adolescence; positive examination signs in the absence of organic findings."
  ],
  treatment: [
    "Early, diagnosis-specific intervention in cerebral palsy: constraint-induced movement therapy and intensive bimanual training in unilateral (hemiplegic) involvement; botulinum toxin for spasticity; selective dorsal rhizotomy in selected cases. [A]",
    "Functional (conversion) motor disorder: diagnosed by positive signs (e.g. Hoover’s sign); a clear and confident explanation of the diagnosis, physiotherapy and psychotherapy together. [B]",
    "TMS measures of cortical excitability (SICI) are research tools in Tourette syndrome and ADHD, not treatments. [C]"
  ],
  lesion: [
    "Contralateral upper motor neuron signs: weakness (especially distal fine movements), spasticity, hyperreflexia, Babinski sign.",
    "Focal motor seizures and the “Jacksonian march”; postictal Todd’s paralysis."
  ],
  links: [
    "Corticospinal tract (internal capsule → brainstem → spinal cord)",
    "Premotor cortex / SMA",
    "Somatosensory cortex",
    "Thalamus VL (cerebellar and basal ganglia inputs)",
    "Putamen"
  ]
},

acc: {
  name: "Anterior Cingulate Cortex", short: "ACC",
  summary: "Detects errors and conflict and adjusts effort; bridges emotion, pain and attention.",
  anatomy: [
    "Anterior part of the cingulate gyrus wrapping around the front of the corpus callosum; BA 24, 32, 33 and subgenual BA 25.",
    "Subdivisions: dorsal ACC (cognitive control), pregenual/rostral ACC (affective), subgenual ACC (sgACC — mood and autonomic regulation).",
    "Contains von Economo neurons, together with the anterior insula.",
    "Blood supply: ACA (pericallosal and callosomarginal arteries)."
  ],
  functions: [
    "Error detection and conflict monitoring; source of the error-related negativity (ERN) on EEG.",
    "Adjusting cognitive control, effort and cost–benefit computation.",
    "The affective (unpleasant) dimension of pain; response to social exclusion.",
    "Motivation and initiation of behavior.",
    "Emotion regulation (rostral ACC); regulation of mood and the HPA axis (sgACC).",
    "Core of the salience network together with the insula."
  ],
  tests: [
    "Stroop, Flanker (Eriksen), Simon task",
    "Go/No-Go; ERN and post-error slowing (EEG)",
    "Emotional Stroop"
  ],
  development: [
    "ERN amplitude increases from childhood to adolescence; error monitoring matures.",
    "ACC–prefrontal connections strengthen in adolescence; cognitive control becomes more efficient."
  ],
  clinical: [
    "OCD: dACC hyperactivity and an enhanced ERN (an “excessive error signal”). In pediatric OCD the ERN is large and stays large even when symptoms improve with CBT; it behaves like a trait (endophenotype) marker rather than a state marker (Hajcak et al., 2008). [B]",
    "Anxiety disorders: children with a larger ERN at age 6 were more likely to develop a new anxiety disorder by age 9, even after accounting for baseline symptoms and maternal anxiety (236 children; Meyer et al., 2015). A candidate marker for early screening and prevention. [B]",
    "ADHD: dACC hypoactivation (Bush et al., 1999), differences in error monitoring.",
    "Depression: sgACC hyperactivity. In adult treatment-resistant depression, deep brain stimulation of the sgACC (subcallosal) looked promising in open studies (Mayberg et al., 2005), but in a multicenter sham-controlled trial it was not superior to placebo at 6 months (Holtzheimer et al., 2017). [B]",
    "A shared transdiagnostic finding: a meta-analysis of 193 VBM studies (about 15,900 people) found gray matter loss in schizophrenia, bipolar disorder, depression, addiction, OCD and anxiety converging on the same three regions: dorsal ACC and the bilateral insula. Reduction in this network relates to weaker executive function (Goodkind et al., 2015). [A]"
  ],
  treatment: [
    "TMS: the left DLPFC site most strongly anticorrelated with the sgACC is targeted; the ACC is modulated indirectly (Fox et al., 2012; SAINT). [B]",
    "Deep brain stimulation (subcallosal cingulate): experimental in treatment-resistant depression; efficacy was not shown in a sham-controlled trial (Holtzheimer et al., 2017). Adults only. [B]",
    "Cingulotomy: last-resort surgery for refractory OCD and cancer pain; not performed in children and adolescents. [C]",
    "Because the ERN does not change with treatment in OCD, it is used for risk identification rather than for tracking treatment response (Hajcak et al., 2008)."
  ],
  lesion: [
    "Akinetic mutism with bilateral lesions; apathy and abulia with unilateral lesions.",
    "Impaired error correction and attentional control, indifference to pain (cingulotomy)."
  ],
  links: [
    "DLPFC (cognitive control)",
    "Anterior insula (salience network)",
    "Amygdala and hypothalamus",
    "Caudate and ventral striatum",
    "Thalamus — anterior/mediodorsal",
    "Dopamine, serotonin and noradrenaline inputs"
  ]
}

});
