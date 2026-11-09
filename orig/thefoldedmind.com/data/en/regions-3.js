/* İngilizce bölge metinleri 3/8 (regions-3.js: hipokampus, amigdala, bazal ganglionlar). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

hippocampus: {
  name: "Hippocampus", short: "HC",
  summary: "Encodes and consolidates new memories; maps space and context, and brakes the stress response.",
  anatomy: [
    "In the medial temporal lobe, on the floor of the temporal horn of the lateral ventricle; head (pes), body and tail.",
    "Subfields: dentate gyrus, CA1–CA4, subiculum. The main input gateway is the entorhinal cortex (perforant path).",
    "Output: fimbria–fornix → mammillary bodies → anterior nucleus of the thalamus → cingulate (Papez circuit).",
    "Blood supply: PCA (hippocampal arteries) and the anterior choroidal artery."
  ],
  functions: [
    "Encoding and consolidation of new declarative (episodic) memories.",
    "Spatial memory and navigation (place cells; entorhinal grid cells).",
    "Contextual memory: binding fear to context and letting context regulate the response.",
    "Pattern separation (dentate gyrus) and pattern completion (CA3).",
    "Negative feedback on the HPA axis (dense glucocorticoid receptors)."
  ],
  tests: [
    "Verbal list learning (RAVLT, CVLT-C)",
    "Story recall, Children’s Memory Scale (CMS)",
    "Rey figure delayed recall, virtual navigation"
  ],
  development: [
    "Infantile amnesia: early childhood memories do not last; hippocampal circuits (especially the dentate gyrus) mature in the preschool years.",
    "Volume increases through childhood and adolescence; anterior and posterior parts develop at different rates.",
    "Supportive parenting in early childhood has been linked to larger hippocampal volume (Luby et al., 2012).",
    "Chronic stress, poverty and abuse are associated with smaller hippocampal volume. Childhood maltreatment especially affects left CA2–CA3, CA4–dentate gyrus and the subiculum; the association is not explained by a history of depression or PTSD (Teicher et al., 2012; 193 young adults). These are the same sites where stress suppresses neurogenesis and prunes dendrites in animals. [B]"
  ],
  clinical: [
    "PTSD and chronic stress: smaller volume in adults; findings in children are less consistent.",
    "Depression: in ENIGMA (1,728 patients, 7,199 controls) the hippocampus is smaller (d = −0.14). The difference is marked in recurrent depression and absent at a first episode. It is larger when depression began at or before age 21 (d = −0.20) (Schmaal et al., 2016). Supports the importance of early onset and of preventing recurrence. [A]",
    "Temporal lobe epilepsy: mesial temporal sclerosis (may be linked to a history of prolonged febrile seizures).",
    "Early-onset schizophrenia, Down syndrome, prematurity: differences in hippocampal volume."
  ],
  treatment: [
    "ECT: hippocampal volume increases by about 0.28% per session (281 patients), but this increase does not explain clinical response; volume change is not a response marker (Oltedal et al., 2018). [A]",
    "In depression, early and adequate treatment and prevention of recurrence fit the ENIGMA findings on recurrence and early onset (Schmaal et al., 2016). [B]",
    "For memory problems, cognitive rehabilitation and external memory aids (planner, reminders) are used after epilepsy surgery and in temporal lobe epilepsy."
  ],
  lesion: [
    "Bilateral: anterograde amnesia (the case of H.M.); retrograde amnesia is temporally graded.",
    "Short-term memory and procedural memory are spared.",
    "Left lesions affect verbal memory more, right lesions visuospatial memory."
  ],
  links: [
    "Entorhinal cortex (perforant path)",
    "Fornix → mammillary body → anterior thalamus (Papez circuit)",
    "Amygdala",
    "mPFC and PCC",
    "Hypothalamus (HPA feedback)",
    "Cholinergic septal inputs, glutamate"
  ]
},

amygdala: {
  name: "Amygdala", short: "AMY",
  summary: "A detector of emotional salience: quickly answers “does this matter to me — is it dangerous, is it valuable?”, learns that association and prepares the body (autonomic, endocrine, behavioral) accordingly.",
  anatomy: [
    "An almond-shaped nuclear complex in the medial temporal lobe, in front of the hippocampal head, within the uncus.",
    "Three main groups and a division of labor: Basolateral complex (lateral, basal, accessory basal): the gateway for sensory input and the site of learning. Central nucleus: the main output. Medial and cortical nuclei: olfactory and social-reproductive signals. [B]",
    "Intercalated cells mediate inhibition via the vmPFC. The bed nucleus of the stria terminalis (BNST) is the “extended amygdala”.",
    "Blood supply: anterior choroidal artery, MCA branches.",
    "The outputs are a map of symptoms. Central nucleus → hypothalamus and BNST (HPA axis, cortisol), PAG (freezing), locus coeruleus (arousal), parabrachial and vagal nuclei (heart rate, breathing). The bodily symptoms of anxiety can be read from these outputs. [B]",
    "Two input routes: a fast, coarse route from the thalamus and a slow, detailed route from the cortex (LeDoux’s “low and high road”). The importance of the fast route in humans is debated; in teaching it should be presented as a model. [B]"
  ],
  functions: [
    "Threat detection and Pavlovian fear conditioning.",
    "Emotional salience: attention to negative and positive stimuli.",
    "Rapid processing of facial expressions (especially fear) and the eye region.",
    "Strengthening of emotional memories (modulation of the hippocampus).",
    "Initiation of the autonomic and endocrine stress response (hypothalamus–HPA).",
    "Social evaluation: trustworthiness, personal space.",
    "Reward value: learns and updates stimulus–value associations; the basolateral amygdala → nucleus accumbens pathway guides motivated behavior. The amygdala is not only a fear center (Baxter and Murray, 2002). [B]",
    "Feeling fear of external threats depends on the amygdala: S.M., with bilateral amygdala damage, felt no fear of snakes, spiders or a haunted house (Feinstein et al., 2011). [B]",
    "But the amygdala is not needed for internal threat: the same patients experienced fear and panic attacks after inhaling 35% CO₂ (Feinstein et al., 2013). An important finding showing the role of interoceptive pathways (brainstem, insula) in panic disorder. [B]",
    "Uncertainty and unpredictability: when it is unknown when a threat will come, the response shifts to the BNST. A distinction is made between phasic fear (amygdala) and sustained anxiety (BNST). [B]"
  ],
  tests: [
    "Fear conditioning and extinction paradigms",
    "Emotional face recognition (NEPSY-II Affect Recognition)",
    "Attention bias (dot-probe), startle reflex",
    "Reading the Mind in the Eyes Test (child version): the amygdala and temporal network in social cognition."
  ],
  development: [
    "Develops early; in infancy the caregiver’s presence buffers the amygdala response.",
    "In adolescence, amygdala reactivity to emotional faces increases while mPFC regulation is not yet mature.",
    "Institutional care: later adoption was associated with larger amygdala volume, weaker emotion regulation and more anxiety (Tottenham et al., 2010). In children who experienced deprivation, negative amygdala–mPFC connectivity appears early; this “accelerated maturation” is interpreted as a stress adaptation (Gee et al., 2013, PNAS). [B]",
    "The sign switch of amygdala–mPFC connectivity: positive (immature) before age 10, negative (regulatory) after age 10. Amygdala reactivity declines at the same time (Gee et al., 2013, J Neurosci; ages 4–22). [B]",
    "Parental buffering: a photo of the mother suppresses the amygdala response in children and brings connectivity closer to the mature pattern; the effect is absent in adolescents. Childhood may be a sensitive period for this circuit (Gee et al., 2014). [B]",
    "Subcortical gray matter volume reaches its lifetime peak at about age 14.4 (Bethlehem et al., 2022; 123,984 MRI scans). [A]"
  ],
  clinical: [
    "Anxiety disorders: a child and adolescent fMRI meta-analysis (48 studies, more than 2,000 participants) found bilateral amygdala hyperactivation in internalizing disorders, especially anxiety (Ashworth et al., 2021). [A] In adolescent GAD, the right amygdala response to unconscious (masked) angry faces is increased and relates to severity, without a compensatory increase in vlPFC (Monk et al., 2008). [B]",
    "Conduct disorder + CU traits: reduced amygdala response to fearful faces. In reactive aggression, by contrast, the response is increased.",
    "ASD: large amygdala in boys aged 7–12, with the difference disappearing in adolescence (Schumann et al., 2004). In a large lifespan sample (ENIGMA-ASD) the amygdala is slightly smaller on average (d ≈ 0.11–0.16) (van Rooij et al., 2018). The difference depends on age; the generalization “the amygdala is enlarged in ASD” should be avoided. [A/B]",
    "Depression and PTSD: amygdala hyperreactivity; impaired fear extinction in PTSD (together with the vmPFC). [B]",
    "ADHD: ENIGMA (1,713 patients, 1,529 controls) found smaller amygdala volume in ADHD; the difference is marked in children and disappears in adults (Hoogman et al., 2017). The effect is small and not diagnostic. [A]",
    "Conduct disorder: ENIGMA-Antisocial Behavior: smaller amygdala volume (d ≈ 0.13); differences are more widespread in those with high callous-unemotional (CU) traits (Gao et al., 2024). [A]",
    "Williams syndrome (7q11.23 microdeletion): reduced amygdala response to angry or fearful faces (social fearlessness) but increased response to nonsocial threat scenes (nonsocial anxiety). The same structure works in opposite directions depending on the type of stimulus (Meyer-Lindenberg et al., 2005). [B]"
  ],
  treatment: [
    "Pediatric GAD: those with a higher amygdala response before treatment responded better to fluoxetine or CBT; effective treatment reduces amygdala hyperactivity (McClure et al., 2007). [C]",
    "Benzodiazepines: act via the dense GABA-A receptors in the amygdala. Short-term and cautious use in children.",
    "Neurofeedback: 6 sessions of training with an fMRI-derived EEG signature (the “amygdala electrical fingerprint”) reduced alexithymia and improved stress coping in 180 healthy adults undergoing stressful military training (Keynan et al., 2019). Cheap and portable; adolescent studies are ongoing. [C]",
    "Deep brain stimulation: basolateral amygdala stimulation in refractory combat PTSD (Langevin et al., 2016). Adults only, experimental. [C]"
  ],
  lesion: [
    "Urbach-Wiethe disease (the case of S.M.): no fear of external threats, no sense of personal space; but panic with CO₂ (Feinstein 2011, 2013).",
    "Klüver-Bucy syndrome (bilateral anterior temporal): hyperorality, hypersexuality, fearlessness, visual agnosia.",
    "Mesial temporal lobe epilepsy: amygdala-origin aura (rising epigastric sensation, sudden fear). In children it can be confused with a panic attack."
  ],
  links: [
    "vmPFC / mPFC (regulation)",
    "Hypothalamus (HPA axis, CRH)",
    "PAG and brainstem (defense, autonomic)",
    "Hippocampus",
    "Nucleus accumbens",
    "Locus coeruleus (noradrenaline), serotonin, GABA–benzodiazepine receptors",
    "Salience network: together with the dorsal ACC and anterior insula",
    "Uncinate fasciculus: OFC and temporal pole",
    "Stria terminalis: BNST and hypothalamus; ventral amygdalofugal pathway: hypothalamus and mediodorsal thalamus",
    "CRF: drives the stress response in the central nucleus",
    "Oxytocin: reduces the amygdala response; a single dose of intranasal oxytocin lowered activation to fear stimuli (Kirsch et al., 2005, adult men) [C]",
    "Endocannabinoid (CB1): required for fear extinction (Marsicano et al., 2002, mice) [B]"
  ]
},

caudate: {
  name: "Caudate Nucleus", short: "CN",
  summary: "The striatal partner of the prefrontal cortex: supports goal-directed behavior, learning from feedback and cognitive flexibility.",
  anatomy: [
    "C-shaped; head (lateral wall of the frontal horn of the lateral ventricle), body and tail (roof of the temporal horn, reaching the amygdala).",
    "Together with the putamen it forms the dorsal striatum; separated by the internal capsule and joined by gray bridges (the striated appearance).",
    "Input: DLPFC, OFC, ACC; substantia nigra pars compacta (nigrostriatal dopamine).",
    "Blood supply: lenticulostriate arteries (MCA), recurrent artery of Heubner (ACA) — head."
  ],
  functions: [
    "Goal-directed behavior and action–outcome learning.",
    "Cognitive loop (DLPFC–caudate–thalamus): support for working memory and planning.",
    "Feedback-based learning and reward expectation.",
    "Cognitive flexibility and inhibition; oculomotor loop (eye movements)."
  ],
  tests: [
    "Probabilistic category learning",
    "Set-shifting tasks, TMT-B",
    "Feedback learning tasks"
  ],
  development: [
    "Striatal volume increases until middle childhood–early adolescence and then declines (an inverted-U curve similar to the cortex).",
    "Corticostriatal connections mature throughout adolescence."
  ],
  clinical: [
    "OCD: caudate hyperactivity in the CSTC circuit. The PANS/PANDAS hypothesis (controversial); caudate involvement in Sydenham chorea.",
    "Tourette syndrome: smaller caudate volume (Peterson et al., 2003); caudate volume in childhood predicts adult tic severity (Bloch et al., 2005).",
    "ADHD: smaller caudate volume (a difference that decreases with age).",
    "Juvenile Huntington disease (Westphal variant): caudate atrophy."
  ],
  treatment: [
    "OCD: exposure and response prevention (ERP) and SSRIs; effective treatment reduces hyperactivity in the caudate and OFC. [A]",
    "Huntington chorea: VMAT2 inhibitors (tetrabenazine, deutetrabenazine) ease chorea by reducing dopamine storage; monitoring for depression and suicidal thoughts is needed. [A]",
    "Sydenham chorea: treatment of the streptococcal infection and long-term penicillin prophylaxis; symptomatic treatment for chorea and behavioral symptoms. [B]",
    "Behavioral and drug treatment for tics is on the putamen card."
  ],
  lesion: [
    "Abulia/apathy, frontal-like executive dysfunction, disinhibition.",
    "Chorea (Huntington), OCD-like symptoms."
  ],
  links: [
    "DLPFC and OFC (corticostriatal input)",
    "Globus pallidus / SNr (output)",
    "Thalamus VA and mediodorsal",
    "Substantia nigra (dopamine — D1/D2 receptors)",
    "GABA (medium spiny neurons), acetylcholine (interneurons)"
  ]
},

putamen: {
  name: "Putamen", short: "PUT",
  summary: "The entry gate of the motor loop: initiation of movement, habits that become automatic and motor sequence learning.",
  anatomy: [
    "The lateral part of the lentiform nucleus (together with the globus pallidus).",
    "Separated from the claustrum by the external capsule and from the caudate and thalamus by the internal capsule.",
    "Input: primary motor and somatosensory cortex, SMA (motor loop); substantia nigra pars compacta.",
    "Blood supply: lenticulostriate arteries (MCA)."
  ],
  functions: [
    "Initiation and scaling of movement.",
    "Habits (stimulus–response learning) and automatic behaviors.",
    "Motor sequence learning and procedural memory.",
    "Rhythm and timing; speech articulation.",
    "Receiving dopaminergic reward prediction error signals."
  ],
  tests: [
    "Serial reaction time task (SRTT — implicit learning)",
    "Mirror drawing, rhythm synchronization (tapping)",
    "Rotary pursuit"
  ],
  development: [
    "Habit systems function early; motor automatization accelerates in childhood.",
    "Putamen volume increases in childhood."
  ],
  clinical: [
    "Tourette syndrome and tic disorders: motor loop dysfunction; tics are habit-like behaviors.",
    "ADHD: in the ENIGMA study, putamen, caudate, accumbens, amygdala and hippocampus volumes were smaller in children (Hoogman et al., 2017).",
    "ASD: relationship between repetitive motor behaviors and striatal size.",
    "Wilson disease: may begin with psychiatric symptoms in adolescence; copper deposition in the putamen.",
    "Antipsychotic-related extrapyramidal side effects (striatal D2 blockade)."
  ],
  treatment: [
    "First line for tics is behavior therapy (CBIT: noticing the urge before the tic and a competing movement incompatible with the tic): in 126 children aged 9–17, marked improvement in 52.5% vs 18.5% with supportive therapy (number needed to treat 3); the effect lasted 6 months in 87% of responders (Piacentini et al., 2010). [A]",
    "Tic medications: α2 agonists (guanfacine, clonidine; when ADHD co-occurs), D2 blockers (aripiprazole, haloperidol, pimozide). [A]",
    "Ecopipam (D1 antagonist, a new mechanism): in a phase III trial (167 children) relapse among responders was 41.9% vs 68.1% with placebo; no weight or movement disorder side effects. Not yet FDA-approved; the application was accepted for priority review in August 2026, with a decision expected in the first quarter of 2027. [B]",
    "Wilson disease: copper chelation (penicillamine, trientine) and zinc; with early diagnosis neurological and psychiatric symptoms can reverse. [B]",
    "Antipsychotic-induced tardive dyskinesia: VMAT2 inhibitors (valbenazine, deutetrabenazine) are approved in adults. [A]"
  ],
  lesion: [
    "Dystonia, parkinsonism (dopamine loss).",
    "Impaired procedural learning."
  ],
  links: [
    "Motor and somatosensory cortex, SMA",
    "Globus pallidus (direct/indirect pathway)",
    "Thalamus VL",
    "Substantia nigra pars compacta (nigrostriatal dopamine)"
  ]
},

gp: {
  name: "Globus Pallidus", short: "GPe / GPi",
  summary: "The output brake of the basal ganglia: tonically suppresses the thalamus, releases the wanted movement and stops the unwanted one.",
  anatomy: [
    "The medial part of the lentiform nucleus; divided by the medial medullary lamina into external (GPe) and internal (GPi) segments.",
    "Together with the substantia nigra pars reticulata, the GPi is the main output nucleus of the basal ganglia.",
    "Ventral pallidum: part of the reward and motivation circuit.",
    "Blood supply: anterior choroidal artery (GPi), lenticulostriate arteries."
  ],
  functions: [
    "Direct pathway (striatum → GPi): disinhibition of the thalamus → release of the wanted movement.",
    "Indirect pathway (striatum → GPe → STN → GPi): suppression of unwanted movements.",
    "Regulation of movement amplitude and speed.",
    "Ventral pallidum: hedonic “liking” and motivation."
  ],
  tests: [
    "Movement disorder scales: YGTSS (tics), AIMS (tardive dyskinesia), Simpson-Angus (EPS)",
    "Neurological examination: dystonia, chorea, bradykinesia"
  ],
  development: [
    "Kernicterus (neonatal hyperbilirubinemia) selectively affects the globus pallidus.",
    "Basal ganglia–thalamus pattern of injury in perinatal hypoxia-ischemia."
  ],
  clinical: [
    "Kernicterus → dyskinetic cerebral palsy (choreoathetosis).",
    "Dystonia: GPi DBS is effective in children (especially DYT1).",
    "Tourette syndrome: GPi as a DBS target in refractory cases (late adolescence and adults).",
    "PKAN (pantothenate kinase-associated neurodegeneration): the “eye of the tiger” sign on MRI.",
    "Carbon monoxide poisoning: bilateral pallidal necrosis."
  ],
  treatment: [
    "Primary generalized dystonia (especially DYT1): bilateral GPi deep brain stimulation markedly reduced movement disorder and disability in controlled trials (Vidailhet et al., 2005; Kupsch et al., 2006, sham-controlled). Earlier treatment in children is associated with better outcomes. [B]",
    "In Tourette syndrome, the anterior GPi is the most frequent deep brain stimulation target after the centromedian thalamus; details on the thalamus card (Martinez-Ramirez et al., 2018). [C]",
    "Preventing kernicterus: phototherapy guided by risk curves in neonatal jaundice and exchange transfusion if needed; pallidal damage is permanent. [A]"
  ],
  lesion: [
    "Bilateral pallidal lesions: apathy, abulia (“psychic akinesia”), parkinsonism or dystonia."
  ],
  links: [
    "Striatum (input)",
    "Subthalamic nucleus (indirect and hyperdirect pathways)",
    "Thalamus VA/VL (GABAergic output)",
    "Pedunculopontine nucleus",
    "GABA, enkephalin, substance P"
  ]
},

nacc: {
  name: "Nucleus Accumbens", short: "NAcc / VS",
  summary: "Where reward becomes motivation: “wanting”, approach behavior and reinforcement learning.",
  anatomy: [
    "At the ventral junction of the caudate head and putamen, lateral to the septum; the main component of the ventral striatum.",
    "Core and shell regions.",
    "Input: VTA (mesolimbic dopamine), vmPFC/OFC, amygdala, hippocampus. Output: ventral pallidum.",
    "Blood supply: lenticulostriate arteries, recurrent artery of Heubner."
  ],
  functions: [
    "Reward anticipation and motivation (“wanting”, incentive salience).",
    "Reinforcement learning through reward prediction error (the VTA dopamine signal).",
    "Translating limbic information into motor action (the “limbic–motor interface”).",
    "Hedonic pleasure (opioidergic “hot spots” in the shell), social reward, placebo response."
  ],
  tests: [
    "Monetary Incentive Delay task (MID, fMRI)",
    "Effort–reward task (EEfRT), delay discounting",
    "Balloon Analogue Risk Task (BART)"
  ],
  development: [
    "In adolescence the accumbens response to reward is higher than in children and adults, while the OFC is still at a child-like level. Maturation of the reward circuit ahead of the control circuit may explain novelty seeking and risk taking (Galván et al., 2006; ages 7–29). [B]",
    "In the presence of peers, adolescents’ risk taking and ventral striatal activity increase (Chein et al., 2011).",
    "Pubertal hormones affect reward sensitivity."
  ],
  clinical: [
    "Substance use disorders: adolescence is a particularly vulnerable period.",
    "ADHD: ventral striatal hypoactivation during reward anticipation (Plichta and Scheres, 2014), delay aversion. In adult ADHD, accumbens D2/3 levels relate to inattention and motivation (Volkow et al., 2009). [B]",
    "Depression and anhedonia: in 1,576 adolescents (IMAGEN), ventral striatal activity during reward anticipation was lower in depression. In healthy adolescents, low activity predicted transition to subthreshold or clinical depression within 2 years. The finding relates more to anhedonia than to low mood (Stringaris et al., 2015). A group-level marker, not an individual diagnostic tool. [A]",
    "Behavioral addictions (gaming disorder), conduct disorder."
  ],
  treatment: [
    "Behavioral activation: systematically increases rewarding activities in anhedonia; a psychotherapy that works through the reward circuit.",
    "Stimulants and addiction risk: oral methylphenidate at therapeutic doses produces a slow dopamine rise, unlike the rapid rise that drives addiction.",
    "Deep brain stimulation (accumbens): in refractory OCD, Y-BOCS fell by 46% at 8 months in 16 adults, with 9 responders; a 25% difference vs sham stimulation (Denys et al., 2010). Adults only, a late-line option. [C]"
  ],
  lesion: [
    "Anhedonia, apathy, loss of motivation.",
    "A DBS target in adult refractory OCD and depression."
  ],
  links: [
    "VTA (mesolimbic dopamine pathway)",
    "vmPFC and OFC",
    "Amygdala and hippocampus",
    "Ventral pallidum → mediodorsal thalamus",
    "Dopamine, endogenous opioids, glutamate"
  ]
}

});
