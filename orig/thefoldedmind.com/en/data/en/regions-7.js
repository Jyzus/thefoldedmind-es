/* İngilizce bölge metinleri 7/8 (regions-7.js: CIT168 çekirdekleri ve alt yapıları). Boş alanlar (ör. alt yapıların
   tests) yazılmaz; Türkçe kartta da boştur. */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

sn: {
  name: "Substantia Nigra", short: "SN",
  summary: "The midbrain’s “black substance”: made of the compacta, which feeds movement and habit learning with dopamine, and the reticulata, which carries the output of the basal ganglia.",
  anatomy: [
    "On both sides of the midbrain floor, dorsal to the cerebral peduncle and lateral to the VTA; dark because its neurons contain neuromelanin.",
    "Two parts: the dorsal pars compacta (SNc; dopaminergic neurons) and the ventral pars reticulata (SNr; GABAergic output neurons).",
    "The SNc projects to the dorsal striatum (nigrostriatal pathway); the SNr to the thalamus (VA/VL and mediodorsal), superior colliculus and PPN.",
    "Blood supply: branches of the posterior cerebral artery."
  ],
  functions: [
    "SNc: supplies dopamine to the dorsal striatum, supporting initiation and speed of movement and motor learning.",
    "Habit and skill learning: the dopamine signal in the dorsal striatum helps actions become automatic.",
    "SNr: together with the GPi, the output nucleus of the basal ganglia; tonically brakes the thalamus and superior colliculus, and the brake is lifted for the wanted movement.",
    "Eye movements: the SNr → superior colliculus pathway gates voluntary saccades."
  ],
  tests: [
    "Neurological examination: bradykinesia, rigidity, tremor, posture (extrapyramidal signs)",
    "Movement disorder scales: Simpson-Angus (drug-induced parkinsonism), AIMS",
    "Dopamine transporter imaging (DaT-SPECT)",
    "Neuromelanin-sensitive MRI: the SN signal relates to striatal dopamine release capacity; in schizophrenia and in people at clinical high risk for psychosis, higher signal relates to symptom severity (Cassidy et al., 2019). A dopamine marker that needs no radiation or invasive procedure; still at the research stage. [C]"
  ],
  development: [
    "Dopaminergic neurons form in the floor of the midbrain in embryonic life; nigrostriatal connections are established before birth.",
    "Neuromelanin pigment accumulates with age; in children the substantia nigra does not look as dark as in adults.",
    "In human postmortem studies, striatal dopamine receptor density peaks in childhood and then declines."
  ],
  clinical: [
    "Extrapyramidal side effects of antipsychotics (acute dystonia, akathisia, parkinsonism): D2 blockade in the nigrostriatal pathway; children and adolescents have a higher risk of acute dystonia.",
    "Tourette syndrome and tic disorders: the dopaminergic hypersensitivity hypothesis; D2 antagonists and partial agonists (aripiprazole) reduce tics.",
    "ADHD: stimulants raise striatal dopamine; increased SN echogenicity on transcranial ultrasound has been reported in children with ADHD (Romanos et al., 2010).",
    "Dopa-responsive dystonia (Segawa disease): dystonia and gait disturbance in childhood that worsen during the day; marked response to low-dose levodopa.",
    "Neuroleptic malignant syndrome: a life-threatening picture linked to dopamine blockade (rigidity, hyperthermia, autonomic instability)."
  ],
  treatment: [
    "Antipsychotic-induced acute dystonia: an anticholinergic (biperiden) or diphenhydramine; the risk is higher in adolescents and young men. For parkinsonism, dose reduction or an anticholinergic; for akathisia, propranolol. [A]",
    "Neuroleptic malignant syndrome: an emergency; stop the antipsychotic at once and give intensive supportive care (fluids, cooling). Dantrolene or bromocriptine are used in severe cases; the evidence for these drugs comes from case series. [B]",
    "Dopa-responsive dystonia (Segawa): dramatic and lasting response to low-dose levodopa; a levodopa trial is recommended in unexplained childhood dystonia. [A]"
  ],
  lesion: [
    "Loss of SNc neurons: Parkinson’s disease (bradykinesia, rigidity, resting tremor); symptoms appear once most neurons are lost.",
    "MPTP toxicity: selective SNc damage and parkinsonism."
  ],
  links: [
    "SNc → dorsal striatum (nigrostriatal dopamine pathway)",
    "Striatum → SNr (direct pathway, GABA)",
    "SNr → thalamus VA/VL and mediodorsal, superior colliculus, PPN",
    "Subthalamic nucleus → SNr (glutamate)",
    "Dopamine (D1, D2 receptors), GABA"
  ]
},

snc: {
  name: "Substantia Nigra Pars Compacta", short: "SNc",
  summary: "Source of the nigrostriatal dopamine pathway: supports movement and habit learning by feeding the dorsal striatum.",
  anatomy: [
    "The dorsal part of the SN; tightly packed, neuromelanin-containing dopaminergic neurons (cell group A9).",
    "Continuous medially with the VTA (A10)."
  ],
  functions: [
    "Dopamine to the dorsal striatum: initiation and scaling of movement.",
    "Reward prediction error signals and skill/habit learning."
  ],
  clinical: [
    "The dopamine cell group affected earliest and most in Parkinson’s disease.",
    "Nigrostriatal D2 blockade by antipsychotics underlies extrapyramidal side effects."
  ]
},

snr: {
  name: "Substantia Nigra Pars Reticulata", short: "SNr",
  summary: "One of the two output nuclei of the basal ganglia, together with the GPi: GABAergic neurons that brake the thalamus and superior colliculus.",
  anatomy: [
    "The ventral part of the SN; loosely arranged GABAergic neurons next to the cerebral peduncle.",
    "Receives input from the striatum (direct pathway) and the subthalamic nucleus."
  ],
  functions: [
    "Tonic inhibition of the thalamus (VA/VL, mediodorsal) and superior colliculus; the inhibition is lifted for the wanted movement or saccade.",
    "Described in animal models as a gate controlling the spread of seizures."
  ],
  clinical: [
    "Imbalance in basal ganglia output contributes to movement disorders such as dystonia and chorea."
  ]
},

gpe: {
  name: "Globus Pallidus, External Segment", short: "GPe",
  summary: "The relay station of the indirect pathway: tunes the suppression of unwanted movements by braking the subthalamic nucleus.",
  anatomy: [
    "The outer part of the lentiform nucleus next to the putamen; separated from the GPi by the medial medullary lamina.",
    "Receives GABAergic input from the striatum (indirect pathway, enkephalinergic neurons); reciprocally connected with the subthalamic nucleus."
  ],
  functions: [
    "Indirect pathway: striatum → GPe → subthalamic nucleus → GPi/SNr.",
    "The GPe–STN loop regulates basal ganglia rhythms (beta oscillations)."
  ],
  clinical: [
    "Excess beta rhythm in the GPe–STN loop is seen in Parkinson’s disease."
  ]
},

gpi: {
  name: "Globus Pallidus, Internal Segment", short: "GPi",
  summary: "The main output nucleus of the basal ganglia: brakes the thalamus; a deep brain stimulation target in dystonia and refractory Tourette syndrome.",
  anatomy: [
    "The most medial part of the lentiform nucleus; next to the posterior limb of the internal capsule.",
    "Receives input from the direct pathway (striatum) and from the subthalamic nucleus (indirect and hyperdirect pathways)."
  ],
  functions: [
    "Tonic GABAergic output to thalamus VA/VL; when inhibited by the direct pathway, the thalamus is released and the wanted movement begins.",
    "Its ventromedial (limbic) part takes part in motivation-related circuits."
  ],
  clinical: [
    "GPi deep brain stimulation in dystonia (especially DYT1) and refractory Tourette syndrome.",
    "Pallidal involvement in kernicterus, carbon monoxide poisoning and PKAN."
  ]
},

stn: {
  name: "Subthalamic Nucleus", short: "STN",
  summary: "The “stop” button of the basal ganglia: receives fast signals from the cortex through the hyperdirect pathway and briefly brakes movements and decisions.",
  anatomy: [
    "A small lens-shaped nucleus in the ventral diencephalon, below the thalamus and medial to the internal capsule; the substantia nigra lies just beneath it.",
    "The only glutamatergic (excitatory) nucleus of the basal ganglia.",
    "Input: cortex (hyperdirect pathway: right IFG, pre-SMA, motor cortex) and GPe; output: GPi, SNr and GPe.",
    "Motor, associative and limbic subregions from dorsolateral to ventromedial."
  ],
  functions: [
    "Response inhibition: fast transmission of the “stop” signal (right IFG → STN).",
    "Braking during decision conflict: raises the decision threshold when choices become difficult (Frank, 2006).",
    "Suppresses unwanted movements by exciting the GPi/SNr through the indirect and hyperdirect pathways."
  ],
  tests: [
    "Stop-Signal task (stop-signal reaction time)",
    "Go/No-Go task",
    "Movement disorder examination (ballism, chorea)"
  ],
  development: [
    "Response inhibition (stop-signal reaction time) develops markedly from childhood to adolescence; linked to maturation of the fronto-subthalamic network."
  ],
  clinical: [
    "ADHD: difficulty with response inhibition; differences in the right IFG–STN network have been reported.",
    "OCD: STN deep brain stimulation has been studied in adult refractory OCD (Mallet et al., 2008).",
    "In Parkinson’s disease, STN deep brain stimulation improves motor symptoms; impulsivity and hypomania appear as side effects in some patients."
  ],
  treatment: [
    "In Parkinson’s disease, STN deep brain stimulation reduces motor symptoms and medication needs; impulsivity and hypomania can develop in some patients, showing the role of the STN’s “stop” function in decision-making. [A]",
    "In refractory OCD, STN stimulation reduced symptoms in a sham-controlled crossover trial (Mallet et al., 2008); adults, a late-line option. [B]",
    "In ADHD, methylphenidate increases right IFG activation during response inhibition tasks (fMRI meta-analyses); human evidence for a corresponding effect at the level of the STN is limited. [C]"
  ],
  lesion: [
    "Contralateral hemiballismus: sudden, flinging, involuntary arm and leg movements (classically from an STN infarct)."
  ],
  links: [
    "Cortex (right IFG, pre-SMA, motor cortex) → STN (hyperdirect pathway, glutamate)",
    "GPe ↔ STN (indirect pathway, beta rhythm)",
    "STN → GPi and SNr (excitatory output)",
    "Glutamate (output), GABA (input)"
  ]
},

rn: {
  name: "Red Nucleus", short: "RN",
  summary: "A midbrain station between the cerebellum and the motor system: contributes to movement coordination and motor learning.",
  anatomy: [
    "In the midbrain tegmentum, at the level of the superior colliculus, dorsomedial to the substantia nigra; appears dark on T2-weighted MRI because of its iron content.",
    "Magnocellular (rubrospinal tract) and parvocellular (rubro-olivary tract) parts; in humans the parvocellular part predominates.",
    "Input: from the contralateral dentate nucleus via the superior cerebellar peduncle, and from motor and premotor cortex.",
    "Oculomotor nerve fibers pass through the nucleus."
  ],
  functions: [
    "Relaying cerebellar output to the motor system.",
    "Contribution to motor learning and error correction through the rubro-olivary loop.",
    "Rubrospinal tract: small in humans, contributes to arm and hand movements."
  ],
  tests: [
    "Cerebellar examination: finger–nose, intention tremor",
    "Eye movements (oculomotor nerve)",
    "Iron-sensitive MRI (SWI): imaging of the red nucleus and substantia nigra"
  ],
  development: [
    "Brain iron increases with age; iron in the red nucleus and substantia nigra rises quickly in childhood and adolescence."
  ],
  clinical: [
    "Holmes (rubral) tremor: a slow, coarse tremor at rest, with posture and with movement, after midbrain lesions.",
    "Findings related to low ferritin and brain iron are being studied in restless legs syndrome and ADHD.",
    "The “face of the giant panda” MRI sign in the midbrain in Wilson disease (around the red nucleus and substantia nigra)."
  ],
  lesion: [
    "Benedikt syndrome: ipsilateral oculomotor nerve palsy, contralateral tremor and ataxia.",
    "Claude syndrome: ipsilateral oculomotor nerve palsy, contralateral cerebellar ataxia."
  ],
  links: [
    "Dentate nucleus (contralateral) → red nucleus (superior cerebellar peduncle)",
    "Red nucleus → inferior olive (rubro-olivary tract) → cerebellum",
    "Red nucleus → spinal cord (rubrospinal tract)",
    "Motor and premotor cortex → red nucleus"
  ]
},

hb: {
  name: "Habenula", short: "Hb",
  summary: "The signal of disappointment and avoidance: activates when an expected reward does not come and brakes dopamine and serotonin neurons; thought to be overactive in depression.",
  anatomy: [
    "A small paired nucleus in the epithalamus, dorsomedial to the thalamus, at the posterior-superior edge of the third ventricle, in front of the pineal gland.",
    "Medial and lateral habenula; the lateral habenula (LHb) is a key part of the reward and punishment circuit.",
    "Input via the stria medullaris from the basal forebrain, lateral hypothalamus and pallidal border region; output via the fasciculus retroflexus to the interpeduncular nucleus, RMTg, VTA and raphe."
  ],
  functions: [
    "Negative reward prediction error: activates when an expected reward does not come or punishment arrives (Matsumoto and Hikosaka, 2007).",
    "Inhibits VTA dopamine neurons via the RMTg, as well as raphe serotonin neurons; supports avoidance and giving up.",
    "Contribution to sleep and circadian rhythm regulation."
  ],
  tests: [
    "Probabilistic reward and punishment learning tasks (negative prediction error)",
    "High-resolution MRI and fMRI (research; its small size makes measurement difficult)"
  ],
  development: [
    "An evolutionarily conserved, early-developing structure; developmental data in humans are limited.",
    "Animal models report that early-life stress increases lateral habenula activity."
  ],
  clinical: [
    "Depression: lateral habenula hyperactivity has been shown in animal models; ketamine’s rapid antidepressant effect has been partly attributed to blocking burst firing in the LHb (Yang et al., 2018).",
    "Habenular deep brain stimulation has been tried at the case level in adult treatment-resistant depression.",
    "Substance use and the negative affect of withdrawal: part of the avoidance circuit."
  ],
  treatment: [
    "Esketamine (nasal spray, NMDA antagonist): FDA-approved for adult treatment-resistant depression (2019); in animal studies its rapid effect has been attributed to blocking burst firing in the lateral habenula (Yang et al., 2018). No routine use in adolescents. [B]",
    "Habenular deep brain stimulation: case-level only in treatment-resistant depression, experimental. [C]"
  ],
  lesion: [
    "In animals, lateral habenula lesions reduce learned-helplessness-like behavior."
  ],
  links: [
    "Basal forebrain, lateral hypothalamus and pallidal border region → habenula (stria medullaris)",
    "Lateral habenula → RMTg → VTA and substantia nigra (inhibition of dopamine)",
    "Lateral habenula → raphe nuclei (serotonin)",
    "Medial habenula → interpeduncular nucleus (nicotine, anxiety)"
  ]
},

vp: {
  name: "Ventral Pallidum", short: "VP",
  summary: "The output for reward “liking” and motivation: relays signals from the nucleus accumbens to the thalamus and brainstem; contains hedonic hot spots.",
  anatomy: [
    "In the basal forebrain, below the anterior commissure, ventral to the globus pallidus and behind the nucleus accumbens.",
    "Receives the GABAergic output of the ventral striatum (accumbens); its output goes to the mediodorsal thalamus, lateral habenula, VTA and lateral hypothalamus.",
    "Intermingled with the cholinergic neurons of the basal forebrain (nucleus basalis of Meynert)."
  ],
  functions: [
    "Hedonic “liking”: an opioid hot spot enhances the liking response to sweet tastes (Berridge and Kringelbach, 2015).",
    "Turning motivation into action: part of the limbic loop (accumbens → VP → mediodorsal thalamus → PFC).",
    "Social bonding: in prairie voles, vasopressin V1a receptors in the ventral pallidum take part in pair-bond formation (Lim et al., 2004); oxytocin acts mainly through the nucleus accumbens."
  ],
  tests: [
    "Hedonic taste reactions (research)",
    "fMRI tasks separating the anticipation and consumption phases of reward"
  ],
  development: [
    "As part of the reward circuit it is thought to contribute to the rise in reward sensitivity in adolescence; direct developmental data are limited."
  ],
  clinical: [
    "Anhedonia and depression: reduced function in hedonic circuits.",
    "Substance use disorders: the VP plays a role in reinstatement of drug seeking (relapse) (animal studies)."
  ],
  lesion: [
    "In animals, VP lesions can turn the liking response to sweetness into disgust."
  ],
  links: [
    "Nucleus accumbens → ventral pallidum (GABA, enkephalin)",
    "Ventral pallidum → mediodorsal thalamus → PFC (limbic loop)",
    "Ventral pallidum ↔ VTA, lateral habenula, lateral hypothalamus",
    "μ-opioid, GABA and vasopressin (V1a) receptors"
  ]
}

});
