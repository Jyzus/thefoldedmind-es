/* İngilizce bölge metinleri 6/8 (regions-6.js: Harvard AAN beyin sapı çekirdekleri). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

lc: {
  name: "Locus Coeruleus", short: "LC",
  summary: "The brain’s main source of noradrenaline: tunes wakefulness, attention and the stress response; a small nucleus that reaches almost the whole brain.",
  anatomy: [
    "A thin column of cells about 15 mm long in the dorsolateral pontine tegmentum, near the floor of the fourth ventricle; named for the bluish color given by neuromelanin pigment.",
    "Only a few tens of thousands of noradrenergic neurons on each side; yet their axons branch into almost every region of the brain.",
    "Output: cortex, hippocampus, amygdala, thalamus and hypothalamus (dorsal noradrenergic bundle); cerebellum and spinal cord. Little contribution to the striatum.",
    "Input: nucleus paragigantocellularis and prepositus hypoglossi in the medulla, prefrontal cortex (ACC, OFC), central nucleus of the amygdala (CRF), lateral hypothalamus (orexin)."
  ],
  functions: [
    "Level of wakefulness and arousal: active when awake, slows in NREM sleep and falls nearly silent in REM sleep.",
    "Attention: phasic responses support focusing on a task, high tonic activity supports distractibility and exploration (adaptive gain theory; Aston-Jones and Cohen, 2005).",
    "Prefrontal cortex: moderate noradrenaline strengthens working memory via α2A receptors; the high levels of stress impair it via α1 and β receptors (an inverted-U relationship).",
    "Stress response: activated by CRF from the amygdala, it increases vigilance and sympathetic arousal.",
    "Strengthens the consolidation of emotionally important events (noradrenaline in the amygdala and hippocampus).",
    "Descending pain inhibition: noradrenergic fibers to the spinal cord suppress pain transmission."
  ],
  tests: [
    "Pupillometry: pupil diameter and phasic pupil responses are indirect indices of LC activity (research)",
    "Oddball paradigm and the P3 component: linked to the phasic LC response (Nieuwenhuis et al., 2005)",
    "Continuous performance tests and reaction time variability: regulation of arousal and attention",
    "LC signal intensity with neuromelanin-sensitive MRI (research)"
  ],
  development: [
    "LC neurons form early in embryonic life; noradrenaline also acts as a signal that influences neuronal migration and synapse formation during cortical development (animal studies).",
    "In animal models, early-life stress can permanently increase the LC’s sensitivity to CRF and its stress reactivity.",
    "LC neuron dysfunction has been shown in mouse models of Rett syndrome."
  ],
  clinical: [
    "ADHD: atomoxetine (a noradrenaline reuptake inhibitor), guanfacine and clonidine (α2A agonists) support prefrontal function; stimulants also raise noradrenaline.",
    "Anxiety and panic: increased noradrenergic reactivity; the α2 antagonist yohimbine can trigger panic-like symptoms in people with panic disorder.",
    "PTSD: hyperarousal, exaggerated startle, nightmares. The α1 antagonist prazosin has been used for nightmares but was not superior to placebo in a large trial (Raskind et al., 2018).",
    "Depression: antidepressants with noradrenergic action (SNRIs, bupropion).",
    "Opioid withdrawal: LC hyperactivity contributes to autonomic withdrawal symptoms; clonidine and lofexidine ease them."
  ],
  treatment: [
    "Atomoxetine: a noradrenaline reuptake inhibitor; raises prefrontal noradrenaline and dopamine (in the prefrontal cortex, dopamine is also cleared by the noradrenaline transporter). A non-stimulant option in ADHD. [A]",
    "Clonidine and guanfacine (α2A agonists): clonidine reduces LC firing; guanfacine acts mainly by closing HCN channels on prefrontal spines, strengthening the working memory network (Wang et al., 2007). Effective in ADHD. [A] Evidence for tics is weaker: clonidine has positive trials, while extended-release guanfacine did not outperform placebo in a small paediatric trial (Murphy et al., 2017). [B]",
    "Lofexidine and clonidine: reduce autonomic symptoms from LC hyperactivity in opioid withdrawal; lofexidine is FDA-approved in adults (2018). [A]",
    "Prazosin (α1 antagonist): widely used for PTSD nightmares, but not superior to placebo in a large multicenter trial (Raskind et al., 2018). [B]",
    "Propranolol (β antagonist): used for the bodily symptoms of performance anxiety; its use to block reconsolidation of traumatic memories is experimental. [C]"
  ],
  lesion: [
    "Isolated LC lesions are rare in humans; in animals, wakefulness, reorienting of attention and the stress response are impaired.",
    "Dopamine β-hydroxylase deficiency (noradrenaline cannot be made): severe congenital orthostatic hypotension, ptosis, nasal congestion.",
    "In Parkinson’s and Alzheimer’s disease, LC neurons are lost early in the disease (adults)."
  ],
  links: [
    "LC → cortex, hippocampus, amygdala, thalamus (dorsal noradrenergic bundle)",
    "LC → cerebellum and spinal cord (descending pain inhibition)",
    "Central nucleus of the amygdala → LC (CRF; stress)",
    "Prefrontal cortex (ACC, OFC) → LC (top-down control)",
    "Lateral hypothalamus → LC (orexin; wakefulness)",
    "Noradrenaline: α1, α2A and β receptors"
  ]
},

raphe: {
  name: "Raphe Nuclei (Dorsal and Median)", short: "DR / MnR",
  summary: "The main source of serotonin to the forebrain: regulates mood, impulse control, sleep and coping with stress; the hub of the system SSRIs act on.",
  anatomy: [
    "The upper (rostral) cluster of serotonergic nuclei lined up along the brainstem midline (raphe: seam); the lower cluster (raphe magnus, obscurus, pallidus) lies in the medulla and projects to the spinal cord.",
    "Dorsal raphe (DR): in the midbrain and upper pons, ventral to the aqueduct and PAG; the source of most serotonergic fibers in the forebrain.",
    "Median raphe (MnR, superior central nucleus): in the midline of the upper pons, ventral to the DR; projects especially to the hippocampus and septum.",
    "Some neurons are not serotonergic: GABA, glutamate and dopamine neurons are also present."
  ],
  functions: [
    "Regulation of mood and of emotional reactivity to negative stimuli.",
    "Impulse control: being able to wait for a delayed reward and to stop behavior in the face of punishment.",
    "Sleep–wake: most active when awake, reduced in NREM sleep and silent in REM sleep; contributes to appetite and circadian rhythm.",
    "Coping with stress: uncontrollable stress overactivates the DR; perceived controllability brakes this via the mPFC (the learned helplessness model; Maier and Seligman, 2016).",
    "MnR: regulation of hippocampal rhythm and contextual memory."
  ],
  tests: [
    "Emotional processing and negative bias tasks (emotional face recognition, dot-probe)",
    "Delay discounting and waiting tasks: impulsivity",
    "Acute tryptophan depletion paradigm (research)",
    "Imaging of the serotonin transporter (SERT) and 5-HT1A receptor with PET (research)"
  ],
  development: [
    "Serotonergic neurons form in the early weeks of embryonic life; serotonin also acts as a trophic signal that influences neuronal migration and circuit formation.",
    "In mice, blocking the serotonin transporter early in life increases anxiety-like behavior in adulthood (Ansorge et al., 2004); the long-term effects of SSRI exposure in human pregnancy are debated.",
    "A different developmental course of brain serotonin synthesis capacity has been found in children with ASD (Chugani et al., 1999)."
  ],
  clinical: [
    "Depression, anxiety and OCD: the target of SSRIs is the serotonin transporter. Sertraline, fluoxetine and fluvoxamine are FDA-approved for pediatric OCD; fluoxetine and escitalopram for adolescent depression.",
    "Antidepressants carry a boxed warning on the risk of suicidal thoughts and behavior under age 25; close monitoring is needed in the first weeks of treatment.",
    "Serotonin syndrome: agitation, hyperthermia and clonus with combinations of serotonergic drugs.",
    "Findings of low serotonergic function have been reported in impulsive aggression and self-harm.",
    "ASD: some children have elevated blood serotonin (hyperserotonemia)."
  ],
  treatment: [
    "Adolescent depression (TADS; ages 12–17, 439 patients, 12 weeks): response 71% with fluoxetine + CBT, 61% with fluoxetine alone, 43% with CBT alone and 35% with placebo. The largest reduction in suicidal thinking was with combined treatment (TADS, 2004). By week 36 all three active arms reached 81–86%. [A]",
    "Childhood anxiety (CAMS; ages 7–17, 488 patients): much improved with sertraline + CBT 80.7%, CBT 59.7%, sertraline 54.9%, placebo 23.7%; combined treatment was superior to both (Walkup et al., 2008). [A]",
    "Starting an SSRI: begin with a low dose and monitor closely in the first weeks for suicidal thoughts and activation (restlessness, insomnia); continue treatment for at least 6–12 months. [A]",
    "To prevent serotonin syndrome, combinations of serotonergic drugs (e.g. an SSRI with tramadol, linezolid or triptans) are reviewed. [B]"
  ],
  lesion: [
    "Isolated raphe lesions are rare in humans; in animals, serotonin depletion leads to impulsivity, aggression and sleep disturbance.",
    "In animal studies, high-dose MDMA (ecstasy) damages serotonergic axons."
  ],
  links: [
    "DR → prefrontal cortex, striatum, amygdala, thalamus, hypothalamus",
    "MnR → hippocampus and septum",
    "mPFC → DR (controllability; braking stress)",
    "Lateral habenula → DR and VTA (inhibition)",
    "Serotonin: 5-HT1A (autoreceptor), 5-HT2A, 5-HT2C, 5-HT3 receptors; SERT (the SSRI target)"
  ]
},

pbc: {
  name: "Parabrachial Complex", short: "PBN",
  summary: "The crossroads for danger signals from the body: relays visceral, taste, pain, temperature and breathlessness information to the amygdala, hypothalamus and insula.",
  anatomy: [
    "In the dorsolateral upper pons, around the superior cerebellar peduncle (brachium conjunctivum); named for lying on both sides of this peduncle.",
    "Medial and lateral subnuclei; the neighboring Kölliker-Fuse nucleus takes part in breathing rhythm.",
    "Input: nucleus tractus solitarius (visceral sensation, taste, baroreflex) and the dorsal horn of the spinal cord (spinoparabrachial pathway: pain, temperature).",
    "Output: central nucleus of the amygdala, BNST, hypothalamus and preoptic area, thalamus (and from there the insula), PAG."
  ],
  functions: [
    "The main station relaying interoceptive information from the internal organs (stomach, heart, breathing) to the limbic forebrain.",
    "General alarm: reports bodily dangers such as pain, excessive heat, nausea and breathlessness to the amygdala (Palmiter, 2018).",
    "Appetite and satiety: lateral parabrachial CGRP neurons suppress eating with nausea and satiety signals (Carter et al., 2013).",
    "Breathing: with the Kölliker-Fuse nucleus it tunes breathing rhythm; it triggers the arousal response when blood CO₂ rises (Kaur et al., 2013).",
    "Thermoregulation: relays warm and cold information from the skin to the preoptic area."
  ],
  tests: [
    "CO₂ inhalation test: increased sensitivity has been reported in panic disorder and childhood anxiety disorders (Pine et al., 2000)",
    "Interoceptive awareness tasks (heartbeat detection): indirect assessment",
    "Pain thresholds (quantitative sensory testing), taste thresholds"
  ],
  development: [
    "In the newborn, respiratory control and the arousal response to rising CO₂ are still maturing; failure of this response features in models trying to explain sudden infant death syndrome.",
    "Learning to avoid a food paired with nausea (conditioned taste aversion) depends on parabrachial circuits (animal studies)."
  ],
  clinical: [
    "Panic disorder: the “false suffocation alarm” theory, hypersensitivity to CO₂ (Klein, 1993); the parabrachial–amygdala pathway is one of the candidate circuits.",
    "Chronic pain and somatic symptom disorders: the spinoparabrachial–amygdala pathway carries the emotional load of pain.",
    "Eating problems and drug-related nausea: parabrachial CGRP neurons play a role in appetite suppression (animal studies).",
    "Opioid-related respiratory depression: μ-opioid receptors in the parabrachial and Kölliker-Fuse region contribute."
  ],
  treatment: [
    "In panic disorder, interoceptive exposure (e.g. deliberate overbreathing, spinning, breath holding) is part of CBT; it aims at habituation to bodily alarm signals (the parabrachial–amygdala pathway). [B]",
    "Opioid-induced respiratory depression is reversed with naloxone; μ-opioid receptors in the parabrachial and Kölliker-Fuse region are among the main sites of this side effect. [B]",
    "Antiemetics for chemotherapy- and drug-related nausea; conditioned taste aversion (disgust toward a food paired with nausea) can disrupt children’s eating during treatment, and keeping new foods away from treatment days is advised. [C]"
  ],
  lesion: [
    "In animals, lateral parabrachial damage reduces emotional responses to pain and conditioned taste aversion, and abolishes the arousal response to rising CO₂.",
    "Lesions of the dorsolateral upper pons (pneumotaxic center) can disturb breathing rhythm."
  ],
  links: [
    "NTS → PBN (visceral sensation, taste): the book’s vagal afferent pathway",
    "Dorsal horn of the spinal cord → PBN (pain, temperature)",
    "PBN → central nucleus of the amygdala and BNST (alarm, the emotional side of pain)",
    "PBN → hypothalamus and preoptic area (temperature, appetite)",
    "PBN → thalamus → insula (interoception)",
    "Glutamate, CGRP; μ-opioid receptors"
  ]
},

ppn: {
  name: "Pedunculopontine and Laterodorsal Tegmental Nuclei", short: "PPN / LDT",
  summary: "The brainstem’s source of acetylcholine: switches on wakefulness and REM sleep, supports attention and orientation to reward; the PPN also contributes to gait and posture.",
  anatomy: [
    "At the midbrain–pons junction: the PPN around and lateral to the superior cerebellar peduncle; the LDT more medially, at the caudal end of the PAG, near the floor of the fourth ventricle.",
    "Cholinergic neurons form groups Ch5 (PPN) and Ch6 (LDT); glutamatergic and GABAergic neurons are interspersed.",
    "In the Harvard AAN atlas the PPN appears as the “pedunculotegmental nucleus (PTg)”.",
    "Connections: thalamus, basal ganglia (GPi, subthalamic nucleus, substantia nigra), VTA, reticular formation, spinal cord."
  ],
  functions: [
    "Wakefulness and REM sleep: cholinergic fibers to the thalamus switch on thalamocortical activity; they take part in initiating REM sleep.",
    "Attention and sensory gating: contribution to inhibition of the startle reflex by a prepulse (prepulse inhibition).",
    "Reward and motivation: the LDT and PPN excite dopamine neurons in the VTA and substantia nigra, supporting phasic dopamine release.",
    "Movement: the PPN is part of the mesencephalic locomotor region; initiation of gait and postural control."
  ],
  tests: [
    "Polysomnography: REM sleep latency and duration",
    "Prepulse inhibition (PPI) and the startle reflex",
    "Gait and balance analysis (in movement disorders)"
  ],
  development: [
    "About half of the newborn’s sleep is REM sleep; it has been proposed that REM activity stimulates the developing brain from within (Roffwarg et al., 1966).",
    "The proportion of REM sleep decreases through childhood, and sleep–wake transitions consolidate."
  ],
  clinical: [
    "Narcolepsy type 1: with orexin loss, brainstem circuits that regulate REM sleep go unchecked; cataplexy, sleep paralysis, hypnagogic hallucinations.",
    "Nightmare disorder and post-traumatic sleep disturbances: changes in REM sleep regulation.",
    "Schizophrenia: disturbed sensory gating (PPI); postmortem studies have reported more cholinergic neurons in the PPN/LDT.",
    "Anticholinergic drugs (e.g. diphenhydramine, some antipsychotics, tricyclics) can disrupt sleep architecture, memory and attention, and cause delirium.",
    "Freezing of gait in Parkinson’s disease: the PPN is being studied as a deep brain stimulation target (adults)."
  ],
  treatment: [
    "Anticholinergic burden: combining several anticholinergic drugs (diphenhydramine, hydroxyzine, tricyclics, some antipsychotics) impairs attention, memory and sleep architecture; the risk of delirium is higher in children and in those with developmental disabilities. A medication review is recommended. [B]",
    "REM-related symptoms of narcolepsy (cataplexy, sleep paralysis) are reduced by sodium oxybate and pitolisant; details on the hypothalamus card. [A]",
    "PPN deep brain stimulation: experimental in adults for freezing of gait in Parkinson’s disease. [C]"
  ],
  lesion: [
    "Bilateral PPN damage: reduced wakefulness and gait disturbance; reduced REM sleep in animal studies.",
    "Lesions of the pontomesencephalic tegmentum can impair consciousness (the arousal network)."
  ],
  links: [
    "PPN/LDT → thalamus (wakefulness, thalamocortical activity)",
    "LDT → VTA, PPN → substantia nigra (excitation of dopamine neurons)",
    "PPN ↔ basal ganglia (GPi, subthalamic nucleus): movement",
    "PPN → reticular formation and spinal cord (posture, gait)",
    "Acetylcholine (nicotinic and muscarinic receptors), glutamate, GABA"
  ]
},

rf: {
  name: "Reticular Formation (Mesencephalic and Pontine)", short: "mRt / PnO",
  summary: "The net-like core of the brainstem: carries the ascending wakefulness signal to the cortex (ARAS), and sets the level of consciousness and muscle tone.",
  anatomy: [
    "An area in the center of the brainstem tegmentum without sharp borders, where neurons are scattered among fiber bundles (reticular: net-like).",
    "Two parts in the model: the mesencephalic reticular formation (mRt; midbrain) and the nucleus pontis oralis (PnO; upper pons).",
    "Ascending reticular activating system (ARAS): reaches the cortex via the intralaminar nuclei of the thalamus (dorsal route) and via the hypothalamus and basal forebrain (ventral route).",
    "The Harvard AAN atlas mapped the nodes of this arousal network in the postmortem human brainstem with histology and MRI (Edlow et al., 2012; atlas version 2.0, 2023)."
  ],
  functions: [
    "Maintaining wakefulness and the level of consciousness.",
    "Sleep–wake transitions; the PnO takes part in generating REM sleep.",
    "Muscle tone and posture (reticulospinal tracts); contribution to the muscle atonia of REM sleep.",
    "Orienting and arousal responses to new and unexpected stimuli.",
    "Integration with breathing and circulatory regulation together with the reticular areas of the lower brainstem."
  ],
  tests: [
    "Level of consciousness: Glasgow Coma Scale (pediatric version)",
    "EEG: waking rhythms and sleep stages",
    "Brainstem auditory evoked potentials (ABR): brainstem integrity"
  ],
  development: [
    "In the newborn, sleep and wakefulness are scattered across the day; daytime wakefulness and night sleep consolidate in the first months.",
    "Brainstem maturation can be followed with ABR in preterm infants."
  ],
  clinical: [
    "Disorders of consciousness (coma, minimally conscious state): damage to the brainstem arousal network; the main causes in children are traumatic brain injury and hypoxic-ischemic injury.",
    "ADHD: theories of low arousal and arousal regulation highlight brainstem and thalamic arousal systems; the evidence is indirect.",
    "Childhood brainstem tumors (e.g. diffuse midline glioma) and Chiari malformation can affect consciousness, sleep and autonomic functions."
  ],
  treatment: [
    "Amantadine: in 184 adults (aged 16–65; in a vegetative or minimally conscious state after traumatic brain injury weeks 4–16), 4 weeks of treatment accelerated functional recovery; 2 weeks after stopping the drug the difference between groups disappeared (Giacino et al., 2012). Whether the effect is lasting or only an acceleration is unclear. Evidence in children is limited to case series. [B]",
    "In disorders of consciousness, structured assessment (e.g. the Coma Recovery Scale-Revised) reduces misdiagnosis; versions adapted for children are being studied. [C]",
    "Drugs that act on the arousal system (sedating antihistamines, benzodiazepines, antipsychotics) can show up in children as daytime sleepiness and attention problems."
  ],
  lesion: [
    "Damage to the pontomesencephalic tegmentum, especially when bilateral, causes coma (Parvizi and Damasio, 2003).",
    "With damage limited to the ventral pons, consciousness is preserved (locked-in syndrome); whether the tegmentum is involved is decisive."
  ],
  links: [
    "mRt/PnO → intralaminar nuclei of the thalamus → cortex (dorsal ARAS route)",
    "Reticular formation → hypothalamus and basal forebrain (ventral ARAS route)",
    "Arousal network together with the PPN/LDT (acetylcholine), locus coeruleus (noradrenaline) and raphe (serotonin)",
    "Reticulospinal tracts → spinal cord (muscle tone, posture)",
    "Glutamate, acetylcholine, GABA"
  ]
}

});
