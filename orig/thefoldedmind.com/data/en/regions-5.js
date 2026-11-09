/* İngilizce bölge metinleri 5/8 (regions-5.js: PAG, VTA, BNST, vagal çekirdekler). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

pag: {
  name: "Periaqueductal Gray", short: "PAG",
  summary: "Gray matter surrounding the aqueduct in the midbrain: the shared output station for defense (fight, flight, freeze), pain suppression and emotional vocalization.",
  anatomy: [
    "Gray matter encircling the cerebral aqueduct (of Sylvius) in the mesencephalon; extends rostrally to the third ventricle and caudally to the fourth ventricle.",
    "Four longitudinal columns: dorsomedial, dorsolateral, lateral and ventrolateral.",
    "Input: central nucleus of the amygdala, hypothalamus, mPFC/ACC, insula. Output: rostral ventromedial medulla (RVM), brainstem autonomic nuclei, thalamus.",
    "Blood supply: branches of the posterior cerebral and superior cerebellar arteries.",
    "The columns can be imaged in humans: at 7 T fMRI (0.75 mm), emotional images activated lateral and dorsomedial regions in rostral PAG and ventrolateral regions in caudal PAG; lateral and ventrolateral regions grouped with different emotions (anger, sadness) (Satpute et al., 2013). The column model from animals appears to hold in humans. [B]"
  ],
  functions: [
    "Active defense (dorsolateral/lateral column): fight-or-flight, tachycardia, raised blood pressure.",
    "Passive defense (ventrolateral column): freezing, immobility, bradycardia, hypotension.",
    "Endogenous pain control: opioid-mediated descending inhibition (PAG → RVM → dorsal horn of the spinal cord); stress analgesia. Placebo analgesia uses the same route: naloxone reduced the placebo effect and abolished rostral ACC–PAG coupling (Eippert et al., 2009). The biological counterpart of expectation and safety reducing pain. [B]",
    "Emotional vocalization: crying, separation calls.",
    "Tuning breathing and autonomic responses to the emotional state."
  ],
  tests: [
    "Threat proximity paradigms (fMRI): as threat approaches, activity shifts from the vmPFC to the PAG (Mobbs et al., 2007)",
    "Conditioned pain modulation",
    "Measuring freezing responses with heart rate, skin conductance and startle"
  ],
  development: [
    "A phylogenetically old structure that is functional at birth; the infant’s separation cry and basic defensive reflexes are organized at this level.",
    "Top-down regulation from the vmPFC/ACC matures over years; in young children regulation relies largely on the caregiver."
  ],
  clinical: [
    "Panic disorder: dorsal PAG stimulation produces panic-like symptoms (a smothering sensation, the urge to flee).",
    "PTSD and dissociation: the dorsolateral PAG drives active defense (fight-or-flight), the ventrolateral PAG passive defense (freezing, autonomic blunting). In PTSD and its dissociative subtype, PAG resting connectivity with regions of emotional reactivity and defense is widely increased; the dissociative subtype shifts toward passive defense (Harricharan et al., 2016). [B]",
    "Chronic and functional pain: weakened descending pain inhibition.",
    "Selective mutism: a defensive stage linked to the freezing response (a theoretical model)."
  ],
  treatment: [
    "Opioid analgesics act partly through μ-opioid receptors in the PAG and RVM; the same circuit carries placebo and expectation effects (Eippert et al., 2009). [B]",
    "The psychotherapeutic counterpart: safety signals and expectation can change pain and the defensive response (rostral ACC → PAG). A biological rationale for cognitive-behavioral approaches in children with chronic pain.",
    "Deep brain stimulation (periventricular/periaqueductal gray): in an adult series about two thirds of patients with refractory neuropathic pain benefited (Boccard et al.). Adults only, experimental. [C]"
  ],
  lesion: [
    "In animal studies, loss of emotional vocalization and defensive behaviors.",
    "Dorsal midbrain lesions may come with Parinaud syndrome and hydrocephalus from aqueductal stenosis."
  ],
  links: [
    "Central nucleus of the amygdala → PAG (defensive output)",
    "Hypothalamus ↔ PAG",
    "vmPFC/ACC → PAG (top-down regulation)",
    "PAG → RVM → spinal cord (descending pain control)",
    "Endogenous opioids, GABA, glutamate, endocannabinoids"
  ]
},

vta: {
  name: "Ventral Tegmental Area", short: "VTA",
  summary: "Source of mesolimbic and mesocortical dopamine: produces the signal for motivation, reward expectation and learning.",
  anatomy: [
    "In the floor of the midbrain, dorsal to the interpeduncular fossa and medial to the substantia nigra; lies on both sides of the midline.",
    "Most cells (~60%) are dopaminergic; the rest are GABAergic, with a few glutamatergic neurons.",
    "Projections: nucleus accumbens, amygdala, hippocampus (mesolimbic); PFC and ACC (mesocortical).",
    "Input: lateral hypothalamus (medial forebrain bundle), PFC glutamate, laterodorsal tegmentum; inhibition via the lateral habenula."
  ],
  functions: [
    "Reward prediction error: a phasic dopamine burst when an outcome is better than expected, a dip when it is worse (Schultz).",
    "Incentive salience (“wanting”): assigning motivational value to stimuli.",
    "Approach behavior, exploration and curiosity (Panksepp’s SEEKING system).",
    "Mesocortical branch: dopamine support for working memory and goal-directed planning."
  ],
  tests: [
    "Monetary Incentive Delay (MID) task",
    "Probabilistic reward learning and reward prediction error models",
    "Dopamine release with PET (research)"
  ],
  development: [
    "The density of dopaminergic fibers reaching the PFC increases until adolescence.",
    "The rise in reward sensitivity in adolescence is linked to the mesolimbic system maturing earlier than prefrontal control."
  ],
  clinical: [
    "ADHD: in 53 untreated adults, dopamine transporter and D2/3 receptor levels were lower along the reward pathway (accumbens, midbrain, left caudate); levels in the accumbens and midbrain related to inattention (Volkow et al., 2009). Stimulants raise synaptic dopamine by blocking the dopamine transporter (methylphenidate also the noradrenaline transporter). [B]",
    "Depression and anhedonia: hypoactivity of the mesolimbic system.",
    "Substance use: addictive substances raise mesolimbic dopamine directly or indirectly.",
    "Psychosis: the dopamine excess is mainly presynaptic. A meta-analysis of 44 PET/SPECT studies (618 patients, 606 controls) found clearly increased striatal dopamine synthesis and release (d ≈ 0.79), very little change in D2/3 receptors and no change in the dopamine transporter (Howes et al., 2012). Clinical counterpart: aberrant salience. [A]"
  ],
  treatment: [
    "Stimulants (methylphenidate, amphetamine): block dopamine and noradrenaline reuptake; amphetamine also increases release. First line in ADHD. [A]",
    "Antipsychotics: D2 receptor blockade; efficacy and side effects (EPS, prolactin) come from the same receptor. [A]",
    "Xanomeline-trospium: the first antipsychotic that does not block D2 (an M1/M4 muscarinic agonist; trospium prevents peripheral side effects). It regulates dopamine release indirectly. FDA-approved for adult schizophrenia (September 2024); not yet approved in children and adolescents. [A]",
    "Addiction: all addictive substances raise mesolimbic dopamine; treatment approaches that recalibrate reward (contingency management, motivational interviewing) target this system. [B]"
  ],
  lesion: [
    "Apathy and loss of motivation; in animals, a marked reduction in exploratory behavior."
  ],
  links: [
    "VTA → nucleus accumbens (mesolimbic)",
    "VTA → PFC and ACC (mesocortical)",
    "Lateral hypothalamus → VTA (medial forebrain bundle)",
    "Glutamate (+), GABA (−), orexin, opioids"
  ]
},

bnst: {
  name: "Bed Nucleus of the Stria Terminalis", short: "BNST",
  summary: "Part of the extended amygdala: drives sustained anxiety in the face of uncertain and distant threats, and tunes the stress axis.",
  anatomy: [
    "A group of nuclei around the anterior commissure, ventral to the lateral ventricle and lateral to the septum.",
    "Connected to the amygdala by the stria terminalis: this thin fiber bundle follows the C-shape of the caudate nucleus over the thalamus to reach the amygdala (a thin arc in the model).",
    "Together with the central amygdala and the accumbens shell it is called the “extended amygdala”.",
    "It has sexually dimorphic subnuclei."
  ],
  functions: [
    "Sustained anxiety in response to uncertain, distant or unpredictable threats; the counterpart of the amygdala’s phasic fear response (Davis et al., 2010). In humans the BNST continuously tracks changes in threat level; in highly anxious individuals this tracking takes the form of hypervigilance (Somerville et al., 2010; 50 adults). [B]",
    "Regulation of the HPA axis (projection to the paraventricular nucleus).",
    "Maintenance of autonomic responses.",
    "Social, sexual and maternal behaviors; a bridge between the stress and reward systems."
  ],
  tests: [
    "NPU threat task (neutral, predictable, unpredictable threat — Grillon)",
    "fMRI during threat anticipation",
    "Startle reflex in sustained fear"
  ],
  development: [
    "Anxious temperament is partly heritable: in 592 young rhesus monkeys, the heritable risk was carried not by brain structure but by the metabolism of a prefrontal–limbic–midbrain circuit (Fox et al., 2015). A later study linked the metabolism of the central extended amygdala (central nucleus and BNST) to temperament. A model for the biology of behaviorally inhibited children. [B]",
    "In animal models, early-life stress has lasting effects on the CRF system in the BNST; pediatric human data are limited."
  ],
  clinical: [
    "Generalized anxiety disorder: intolerance of uncertainty and sustained anticipatory anxiety.",
    "PTSD: constant hypervigilance, sustained threat response.",
    "In substance use, withdrawal and stress-triggered relapse (CRF)."
  ],
  treatment: [
    "SSRIs and CBT are first line in generalized anxiety disorder; benzodiazepines short term.",
    "CRF1 receptor antagonists reduced BNST-mediated anxiety in animal models but failed in humans: pexacerfont did not separate from placebo in generalized anxiety disorder (Coric et al., 2010), and no CRF1 antagonist has completed phase III. An example of the limits of translation from animals to humans. [B]",
    "CBT components targeting intolerance of uncertainty correspond to the BNST’s function (monitoring uncertain threat)."
  ],
  lesion: [
    "In animal studies, BNST lesions reduce the sustained anxiety response without impairing phasic fear."
  ],
  links: [
    "Amygdala (stria terminalis)",
    "Hypothalamus PVN (HPA axis)",
    "PAG and brainstem autonomic nuclei",
    "Nucleus accumbens shell",
    "CRF, NPY, noradrenaline, oxytocin/vasopressin"
  ]
},

vagal: {
  name: "Vagal Nuclei", short: "DMV / NA",
  summary: "The two parasympathetic outputs in the medulla: the nucleus ambiguus, which regulates the heart and the muscles of the face and throat, and the dorsal motor nucleus, which regulates the internal organs.",
  anatomy: [
    "Dorsal motor nucleus of the vagus (DMV): in the floor of the fourth ventricle, lateral to the hypoglossal nucleus (vagal trigone).",
    "Nucleus ambiguus (NA): in the ventrolateral medulla, within the reticular formation; motor fibers of nerves IX, X and XI.",
    "The neighboring nucleus tractus solitarius (NTS): the first stop of vagal afferents.",
    "The vagus nerve leaves the lateral medulla between the olive and the inferior cerebellar peduncle (the nerve root in the model)."
  ],
  functions: [
    "NA: fast, breath-linked braking of heart rate (respiratory sinus arrhythmia); muscles of the larynx and pharynx (voice, swallowing).",
    "DMV: organs below the diaphragm (stomach, intestine); digestion, motility, secretion.",
    "Vagal afferents (about 80% of the fibers) report the state of the body to the brain via the NTS.",
    "Inflammatory reflex: the cholinergic anti-inflammatory pathway.",
    "A note on polyvagal theory: the Porges model, also used in the book, ties the ventral vagal (nucleus ambiguus) system to social engagement and the dorsal vagal (DMV) system to freezing and shutdown. The theory’s core premises (separate cardiac roles for the two nuclei, RSA reflecting overall vagal tone, RSA being unique to mammals) have been seriously criticized in the physiology literature (Grossman, 2023). It is a useful explanatory model in the clinic, but should be taught as a theory, not as anatomical fact. [B]"
  ],
  tests: [
    "Heart rate variability / RSA (an index of vagal tone)",
    "Orthostatic test, Valsalva maneuver",
    "Swallowing and phonation assessment"
  ],
  development: [
    "Myelination of vagal fibers increases in the last trimester and after birth.",
    "Vagal tone (RSA) increases from infancy and has been linked to emotion regulation and social engagement."
  ],
  clinical: [
    "Anxiety and trauma: reduced resting heart rate variability (RSA); shown by meta-analysis in anxiety disorders (Chalmers et al., 2014). Its link with long-term cardiovascular risk is also discussed. [A]",
    "Anorexia nervosa: bradycardia from vagal dominance.",
    "Blood-injection-injury phobia and vasovagal syncope (common in adolescents): a biphasic response.",
    "Vagus nerve stimulation: used in refractory epilepsy (also in children) and in adult treatment-resistant depression."
  ],
  treatment: [
    "Vagus nerve stimulation (implanted): FDA-approved from age 4 for drug-resistant epilepsy (2017; previously from age 12). Also approved for adult treatment-resistant depression. [A]",
    "Paired VNS for stroke rehabilitation: vagus stimulation delivered with movement exercises improved upper-limb function in chronic ischemic stroke (108 patients); FDA approval 2021. It relies on the vagus nerve’s “learning-enhancing” (plasticity) effect. [A]",
    "Heart rate variability biofeedback and slow-breathing exercises are low-risk approaches that target vagal regulation in anxiety. [C]"
  ],
  lesion: [
    "Hoarseness, dysphagia, uvular deviation (NA); autonomic dysregulation."
  ],
  links: [
    "NTS → parabrachial → amygdala, hypothalamus, insula (afferent limb)",
    "NA → heart (SA node), larynx, pharynx",
    "DMV → stomach, intestine",
    "Acetylcholine (efferent), glutamate (afferent)"
  ]
}

});
