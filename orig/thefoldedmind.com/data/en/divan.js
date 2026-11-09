/* İngilizce içerik: kitap katmanı (Divandaki Yeşil Ceviz → The Green Walnut on the Couch), Bölüm 20 metinlerinin çevirisi.
   Kullanıcı 2026-10-10: "kitap ismi dahil İngilizce forma çevirebilirsin; kitaptan aldığın verileri de çevirebilirsin, hem atlas hem sitede".
   content.js'ten sonra yüklenir; Türkçe DIVAN verisinin üzerine yazar (bölge girdileri, yolakların uzun alanları, kapanış).
   Tanı merceklerindeki kitap alıntıları (data/en/tanilar.js → kitapta) buradaki İngilizce metinde aranır: metin değişirse onlar da güncellenir. */
(function () {
  'use strict';
  const DV = window.DIVAN;
  if (!DV) return;
  DV.book.title = 'The Green Walnut on the Couch';
  DV.book.subtitle = 'Affective Neuroscience and Psychoanalysis from Before Birth to Adolescence';
  DV.book.original = 'Divandaki Yeşil Ceviz';
  const put = (o, x) => { if (o && x) Object.assign(o, x); };

  const E = {
    pag: {
      title: 'PAG (periaqueductal gray)',
      clinic: 'PTSD and dissociation, selective mutism, exhaustion in depression, the EMDR hypothesis',
      role: 'A ring of gray matter in the midbrain surrounding the cerebral aqueduct (aqueduct of Sylvius), which connects the third and fourth ventricles. In Panksepp’s model, the shared alarm/action center of all the emotional systems — divided into columns (dorsomedial, dorsolateral, lateral, ventrolateral), each column running a different emotional-behavioral program.',
      links: 'Dorsal columns: RAGE (attack) and the active-defense end of FEAR. Lateral column: active escape, “fight/flight”. Ventrolateral column: freezing, the “playing dead” that overlaps with the dorsal vagal system. The separation call of PANIC/GRIEF and some components of LUST also pass through the PAG.',
      where: 'Solms’s thesis on consciousness and the PAG columns (Chapter 6, Figure 6.1), the EMDR hypothesis (Chapter 6), the division of the FEAR system into subregions, the escape–freeze distinction and the steps of defense (Chapter 10), the RAGE circuit (Chapter 9), the separation call of PANIC/GRIEF (Chapter 3), the freeze response in selective mutism (Chapter 10), learned helplessness and the dorsal raphe (Chapter 6).',
      note: 'The PAG is the single most frequently mentioned structure in the book — and this is no coincidence: it is concrete evidence for Panksepp’s thesis that “emotions are subcortical”. That different emotional systems are coded in the same region, in different columns, shows that they are not separated by sharp borders but are neighbors in a compact architecture — this is the anatomical ground for why, in the clinic, overactivation of one system also triggers its neighbor (for example, intense FEAR leaping into RAGE).'
    },
    amygdala: {
      title: 'Amygdala',
      clinic: 'Anxiety, behavioral inhibition, PTSD, callous-unemotional traits',
      role: 'An almond-shaped group of nuclei at the medial tip of the temporal lobe. The center of threat detection, assigning emotional significance and fear conditioning; it has basolateral, central and medial nuclear groups; the two most prominent in threat processing are the basolateral and central nuclei.',
      links: 'The basolateral amygdala receives and appraises sensory input (vision, hearing, smell); the central nucleus directs the output to the hypothalamus and PAG and starts the autonomic/behavioral response. Top-down projections from the PFC (especially the vmPFC) brake the amygdala.',
      where: 'The appraisal stage of the FEAR system before the PAG and the “low road” (Chapter 10), Kagan’s behavioral inhibition (Chapters 1 and 10), fetal programming (maternal cortisol affecting the development of the fetal amygdala; Chapter 1), post-traumatic hippocampus-amygdala imbalance (Chapter 18), atypical amygdala responses to social stimuli in autism (Chapter 7), affect labeling calming the amygdala (Chapter 7), reduced response in callous-unemotional traits (Chapter 9).',
      note: 'The amygdala is simplified as the “fear center”, but it is really a salience engine: it can mark even a neutral stimulus as dangerous on the basis of past experience. This explains why a lack of early CARE later turns into a generalized state of vigilance — the amygdala learns the “dangerous” label in a narrow context and spreads it to a broad one.'
    },
    bnst: {
      title: 'BNST (bed nucleus of the stria terminalis)',
      sysLabel: 'FEAR (sustained anxiety), PANIC/GRIEF, CARE, LUST, RAGE',
      clinic: 'Generalized anxiety, chronic stress',
      role: 'A group of nuclei extending between the amygdala and the hypothalamus, considered part of the “extended amygdala”. While the central nucleus of the amygdala gives a fast (phasic) fear response to near and clear threats, the BNST runs the sustained (lasting) anxiety response to distant, uncertain and unpredictable threats (Davis et al., 2010). The distinction is not absolute but a matter of emphasis; the two structures work together as the “extended amygdala”.',
      links: 'Amygdala, hypothalamus (PVN), PAG and the autonomic nuclei of the brainstem; an important regulator of the HPA axis.',
      where: 'A shared station of Panksepp’s RAGE, CARE, PANIC/GRIEF and LUST circuits (Introduction, Table; Chapters 3, 9, 11), the bridge between chronic stress and sexual motivation (Chapter 11).',
      note: 'The distinction between FEAR and “anxiety” also exists anatomically: fear of a concrete threat and vague, sustained anxiety of the “something is going to happen” kind rely mainly on different circuits. Generalized anxiety and the “feeling that something bad will happen” (the description of PANIC in Chapter 3) may be better explained by a BNST-dominant pattern.'
    },
    hypothalamus: {
      title: 'Hypothalamus',
      sysLabel: 'CARE, LUST, SEEKING (homeostatic)',
      clinic: 'Stress response, puberty, feeding problems',
      role: 'In the diencephalon, below the thalamus; the main command center of the autonomic nervous system and the endocrine system. Not a single structure but many functionally specialized nuclei.',
      links: 'Paraventricular nucleus: production of oxytocin/vasopressin (CARE, LUST, attachment) and the start of the HPA axis (CRF release). Lateral hypothalamus: homeostatic synchronization of SEEKING (hunger, thirst). Ventromedial hypothalamus: the female circuit of LUST. Medial preoptic area: the male circuit of LUST and part of CARE.',
      where: 'The distinction between the target axes of CARE and LUST (Chapter 11), the synchronization of SEEKING with hunger (Chapter 8), the HPA axis and the cortisol load of PANIC/GRIEF (Chapters 3, 5), prenatal tuning of the HPA axis in fetal programming (Chapter 1), GnRH suppression in latency and its awakening in puberty (Chapter 13).',
      note: 'The hypothalamus works as the common denominator of almost every system in the book — because every emotional system must have a bodily/hormonal counterpart, and the final station that produces it is mostly the hypothalamus. The closeness of its different nuclei is also part of why CARE and LUST can mix so easily (for example, in adolescence).'
    },
    vta_nacc: {
      title: 'VTA and nucleus accumbens',
      clinic: 'Depression (anhedonia), ADHD, addiction, mania',
      role: 'The ventral tegmental area (in the midbrain) is the source of dopaminergic cell bodies; the nucleus accumbens (in the basal forebrain) is the reward center these cells project to, where the “wanting” signal is produced.',
      links: 'The mesolimbic pathway (VTA → NAcc) carries the motivation/wanting signal; the mesocortical pathway (VTA → PFC) turns this wanting into a goal-directed plan. The shell and core subregions of the NAcc have different functions — hedonic hot spots in the shell, action selection in the core.',
      where: 'The neuroanatomical pathway of SEEKING (Chapter 8), the mechanism of action of methylphenidate (Chapter 8), the extinguishing of SEEKING and anhedonia in depression (Chapter 8), the chronic low tonic dopamine hypothesis in ADHD (Chapter 7), the reward component of PLAY (Chapter 8), the dopaminergic system that initiates dreaming (Chapter 6), activation of the reward system in romantic love (Chapters 14–15).',
      note: 'This circuit appears again and again in the book in different contexts, because SEEKING is, in Panksepp’s words, the engine on which most of the other six systems run — RAGE, FEAR, LUST and CARE all set SEEKING in motion to some degree, or are extinguished along with it.'
    },
    ofc_vmpfc: {
      title: 'OFC and vmPFC',
      sysLabel: 'Regulation of them all',
      clinic: 'OCD, borderline and narcissistic organization, decision making',
      role: 'The orbitofrontal cortex (just above the eyes) and the ventromedial prefrontal cortex; prefrontal regions that code emotional value, integrate information from different systems and take part in social/moral reasoning.',
      links: 'They combine the threat signal from the amygdala with contextual information from the hippocampus and bodily-state information from the insula to produce an integrated answer to the question “how much danger am I really in right now?”. They send inhibitory projections to the amygdala and the PAG.',
      where: 'Somatic markers and the Iowa Gambling Task (Chapter 2), the capacity for integration (the third way in the example of envy; Chapter 3), mistuning in OCD (Chapters 2 and 12), insufficient integration in narcissistic/antisocial structures (Chapters 3, 9), identity experiments without shades of gray in the phallic and latency periods (Chapters 12–13), the perception of controllability (Chapter 6), the shift from the vmPFC to the PAG as threat approaches (Chapter 10).',
      note: 'The OFC is the anatomical counterpart of the book’s theme of “maturation” — while the primitive systems (PAG, amygdala, hypothalamus) work ready-made from birth, the OFC is shaped by years of experience. Everything the book calls “integration instead of splitting” or “a regulated response instead of a raw one” corresponds, neurally, largely to how mature this region is.'
    },
    hippocampus: {
      title: 'Hippocampus',
      sysLabel: 'The context of FEAR',
      clinic: 'PTSD, generalized anxiety, childhood amnesia',
      role: 'In the temporal lobe, next to the amygdala; the structure for contextual and episodic memory, which also provides negative feedback on the HPA axis (braking cortisol).',
      links: 'Closely and reciprocally connected with the amygdala — while the amygdala says “this is dangerous”, the hippocampus balances it with “but not in this context”. Especially vulnerable to chronic cortisol (high glucocorticoid receptor density; chronic stress can lead to dendritic atrophy, reduced neurogenesis and volume loss).',
      where: 'Childhood amnesia and implicit memory (Chapter 2), chronic stress leading to a loss of contextualization (the “everywhere is dangerous” feeling in PTSD; Chapters 10 and 18), the context dependence of extinction and renewal (Chapter 10), the feedback loop with the HPA axis (Chapter 5), reduced hippocampal activity in conscious suppression (Chapter 17).',
      note: 'The hippocampus-amygdala balance is the anatomical ground for the book’s distinction between a “generalized response” and a “situation-specific response”. When this balance breaks down (under a chronic cortisol load), the system stops discriminating and begins to process every stimulus as a potential threat — one of the shared mechanisms of the anxiety disorders.'
    },
    insula: {
      title: 'Insula',
      sysLabel: 'Feeling them all',
      clinic: 'Alexithymia, somatization, interoception in autism',
      role: 'The “hidden” fifth lobe between the frontal, parietal and temporal lobes; the main station where the state of the body (heartbeat, stomach, breathing) is carried into conscious awareness (interoception).',
      links: 'One of the destinations of the vagal afferent pathway (cranial nerve X → NTS → parabrachial nucleus → thalamus). The anterior insula is linked especially to subjective emotional experience — “feeling what I feel.”',
      where: 'Damasio’s somatic marker theory (Chapter 2), alexithymia and the relation of the empathic insula response to alexithymia in autism (Chapter 2), differences in interoception in autism (Chapters 2, 7), the processing of vitality forms in the dorsal-central insula (Chapter 7), the reporting of bodily state to consciousness in polyvagal theory (Chapter 5), the body schema (Chapter 15).',
      note: 'The insula is the most concrete anatomical counterpart of the book’s theme of the “bridge between body and mind”. The thesis that in repression “the affect stays in the body but is not represented” has to do precisely with the insula not fulfilling this function well enough — the sensation is there, but the insula cannot turn it into a conscious, nameable emotion.'
    },
    acc: {
      title: 'ACC (anterior cingulate cortex)',
      clinic: 'Social pain, grief, error monitoring in OCD',
      role: 'A strip-shaped region on the inner surface of the frontal lobe, just above the corpus callosum; it plays a role in conflict monitoring, error detection, processing the pain of separation/social exclusion, and regulating attention.',
      links: 'The dorsal ACC is linked to cognitive conflict and error monitoring, the subgenual/ventral ACC to emotional regulation and separation pain. It works like a “traffic officer” between the PFC and limbic structures.',
      where: 'PANIC/GRIEF’s social separation pain sharing a circuit with physical pain, and the Cyberball experiment (Chapter 3), dorsal ACC activity in envy (Chapter 3), overactivity of the error-detection loop in OCD (Chapter 2), attention regulation and ADHD (Chapter 7).',
      note: 'That the ACC is used for both “physical pain” and “social separation pain” anatomically supports the central claim of the book’s PANIC/GRIEF discussion: the pain of loss is not metaphorical but, in a real sense, part of the pain system. How far the overlap goes is debated: later studies showed that the two kinds of pain use neighboring but distinct patterns in the ACC.'
    },
    tpj_sts: {
      title: 'TPJ and STS (temporoparietal junction and superior temporal sulcus)',
      sysLabel: 'The social face of CARE and PLAY',
      clinic: 'Autism, difficulties with mentalization',
      role: 'The TPJ is a critical region for representing another person’s perspective and beliefs (theory of mind) and for the spatial ownership of the body; the STS turns biological motion, gaze direction, facial expression and tone of voice into social meaning.',
      links: 'Together with the medial PFC, precuneus and temporal pole, it forms the “mentalizing network”; the STS carries social information from the visual and auditory cortex to the amygdala and prefrontal regions.',
      where: 'The neuroanatomy of mentalization (Chapter 5), heteronomous morality and the evaluation of intentions (Chapter 13), social signal processing in autism (Chapter 7), vitality affects (Chapter 7), the body schema and gender identity (Chapter 15).',
      note: 'These regions are the cortical counterpart of the capacity to “see another person’s mind”; but, in keeping with the book’s main thesis, this capacity too is first built in a relationship, through someone else mentalizing us.'
    },
    vagal: {
      title: 'Vagal nuclei (dorsal motor nucleus and nucleus ambiguus)',
      sysLabel: 'CARE (ventral), FEAR (freezing)',
      clinic: 'Dissociation, shutdown, sexual function',
      role: 'Two different parasympathetic outflows in the brainstem, in the medulla; the anatomical basis of Porges’s polyvagal theory.',
      links: 'Dorsal motor nucleus: unmyelinated and slow, it regulates the organs below the diaphragm (stomach, intestines); according to the theory, under extreme threat it produces freezing/collapse through massive discharge. Nucleus ambiguus: myelinated and fast, it regulates the organs above the diaphragm (heart, larynx, pharynx) and the social engagement system linked to the muscles of the face and throat.',
      where: 'The whole framework of polyvagal theory and its critiques (Chapter 5), neuroception, freezing in selective mutism (Chapter 10), the safety signals of the therapeutic setting, the middle-ear muscles selecting the therapist’s voice (Chapter 5), the inflammatory reflex (Chapter 5).',
      note: 'The existence of two different vagal outflows shows that the word “calm” does not describe a single state — one is the calm of real safety/connection (ventral), the other the calm of collapse/surrender (dorsal). In the clinic, a child “calming down” can mean very different things depending on which system is engaged; this distinction is a warning that recurs throughout the book.'
    },
    cerebellum: {
      title: 'Cerebellum',
      clinic: 'OCD, tics, defenses that have become habits',
      role: 'The cerebellum; although classically associated with motor coordination, it is now known to play a role in emotional regulation, timed learning and social-cognitive functions as well.',
      links: 'Connected with the brainstem and the basal ganglia; it supports the motor-coordination and rule-learning dimension of play behavior. It plays a role in storing automated, repetitive patterns of behavior (procedural learning).',
      where: 'Implicit memory (Chapter 2), the motor/rule-learning component of the PLAY system (Chapter 8), defense mechanisms becoming automatic over time (Chapter 17).',
      note: 'The cerebellum’s role in the book is limited but supports an important point: repeated experience (play, therapy, habit) is not merely “learned” but is, in a real sense, encoded in a motor/procedural circuit — another anatomical reason why treatment takes time.'
    },
    bg: {
      title: 'Basal ganglia',
      clinic: 'OCD, tics, defenses that have become habits',
      role: 'A group of nuclei made up of the striatum (caudate, putamen, nucleus accumbens), the globus pallidus and the substantia nigra; central to habit learning, automated behavior and action selection through the dopamine signal.',
      links: 'The nucleus accumbens is in fact part of the ventral striatum — dopamine from the VTA shapes action selection here. Cortico-striato-thalamo-cortical loops make behavior increasingly automatic.',
      where: 'Compulsions becoming automatic and the change in caudate metabolism with treatment (Chapter 2), tics and premonitory urges (Chapter 9), the encoding of shortcuts/reflexive responses at the level of the basal ganglia and defense mechanisms that have become habits (Chapter 17).',
      note: 'The basal ganglia are one of the answers to the book’s question “why is a pattern so stubborn?” — when a behavior (a compulsion, a defense, a relational pattern) is repeated often enough, it moves out of the conscious/flexible PFC circuit into the automatic, fast basal ganglia circuit; a mechanism that makes treatment harder, but also shows that a new, healthy habit can be built the same way.'
    },
    pfc_dev: {
      title: 'The developmental maturation timeline of the PFC',
      role: 'The prefrontal cortex is the latest-maturing region of the brain; its dorsolateral (“cold” cognition, planning) and ventromedial/orbitofrontal (“hot” cognition, emotional regulation) subregions develop at different rates, and maturation continues into the mid-twenties.',
      links: 'Its inhibitory connections with the amygdala and other subcortical structures strengthen over the years through myelination and synaptic pruning — which is why, in a young child, “regulation” largely has to be supplied from outside (by the parent’s PFC).',
      where: 'The good-enough mother’s external PFC function (Chapter 3), the PFC’s first “workout” in the anal stage (Chapter 12), delayed cortical maturation in ADHD (Chapter 7), the internalization of the superego in the latency period (Chapter 13), the neurodevelopmental basis of risk-taking in adolescence (Chapter 11), the role of the PFC in Erikson’s identity crisis (Chapter 15).',
      note: 'That the PFC matures so late anatomically justifies the book’s child and adolescent psychiatry axis: almost the whole developmental line described in this book is really the story of when, and how far, the PFC can regulate the primitive systems.'
    }
  };
  Object.keys(E).forEach((k) => put(DV.entries[k], E[k]));

  const P = {
    mezo: {
      carries: 'The main backbone of the SEEKING system. The dopaminergic cells of the VTA project along two branches: the mesolimbic branch descends to the nucleus accumbens and produces the “want” signal, the mesocortical branch rises to the PFC and turns this wanting into a concrete plan.',
      links: 'If the two branches do not work together, there is wanting without a plan (impulsive seeking) or a plan without wanting (unmotivated cognition). Glutamate excites the VTA, GABA brakes it.',
      where: 'The neuroanatomy of SEEKING, the mechanism of action of methylphenidate (blocking dopamine and noradrenaline reuptake through DAT/NET blockade), hypoactivation of this pathway in depression, ADHD hypotheses (Chapters 7–8).',
      note: 'This pathway is the neural counterpart of the book’s concept of “motivation” — and the indirect or direct target of most drugs used in psychiatry (stimulants, antipsychotics, even some antidepressants). That the two branches of the pathway can fail separately shows that the same complaint of “inattention” can come from very different underlying mechanisms.'
    },
    vagal_aff: {
      carries: 'The main line through which the body sends the brain a “status report”. About 80% of vagal fibers are afferent (toward the brain) — so the vagus, contrary to common belief, is mostly not a nerve that calms the brain but one that tells the brain how the body is.',
      links: 'The nucleus tractus solitarius (NTS) is the first station; from there, via the parabrachial nucleus, it spreads to the amygdala, the hypothalamus and (through the thalamus) the insula; the anterior insula carries this information into conscious awareness.',
      where: 'The anatomical carrier of Damasio’s somatic marker theory (Chapter 2), Porges’s concept of neuroception (Chapter 5), stomach/chest sensations turning into conscious awareness in the insula (Chapter 5).',
      note: 'This pathway is the backbone of the book’s thesis that “the body precedes the mind”. When a patient in the therapy room feels that “something is wrong”, it is usually a signal coming along this line before conscious thought — the body has already reported before words are found.'
    },
    hpa: {
      carries: 'The endocrine backbone of the stress response. When the amygdala detects a threat it stimulates, largely via the BNST, the paraventricular nucleus (PVN) of the hypothalamus; the PVN releases corticotropin-releasing factor (CRF), which drives the pituitary to release ACTH, which in turn drives the adrenal cortex to release cortisol.',
      links: 'The hippocampus and PFC brake this loop through negative feedback; chronic activation can weaken this braking mechanism.',
      where: 'Fetal programming and placental 11β-HSD2 (Chapter 1), chronic stress impairing hippocampal function (Chapter 5), the cortisol load in disorganized attachment (Chapter 3), the inflammatory reflex and allostatic load (Chapter 5).',
      note: 'The HPA axis is the most concrete, measurable evidence for the book’s thesis that “early experience is written into biology” — how sensitively/reactively this axis is set is largely determined by experience in the first months of life (even before birth) and shapes stress reactivity years later.'
    },
    pag_col: {
      carries: 'Several “highways” running in parallel within a single structure. Different columns of the same PAG run entirely different, mutually exclusive behavioral programs (attack, escape, freezing) depending on which emotional system is engaged.',
      links: 'The dorsal columns are linked with RAGE and active FEAR, the lateral column with active escape, the ventrolateral column with freezing/the dorsal vagal overlap. Which column activates is largely decided by the type of threat, its proximity and the perceived possibility of escape.',
      where: 'The subtypes of FEAR (flight/fight/freeze) and the steps of defense (Chapter 10), the counterpart of the freeze response in selective mutism (Chapter 10), the threshold of RAGE and the chain leading to Thanatos (Chapter 9), PAG connections in PTSD and the dissociative subtype (Chapter 6).',
      note: 'The switch between these columns is the anatomical ground for the phenomenon, described in the book, of “one emotion suddenly turning into a completely different one” (for example, FEAR leaping into RAGE, or active escape suddenly turning into freezing) — the switch between systems happens not between distant regions but between neighboring columns of the same structure.'
    },
    oxt: {
      carries: 'Produced in the paraventricular and supraoptic nuclei, these two peptides are released both as classic neurohormones into the bloodstream (from the posterior pituitary) and as neuromodulators directly within the brain (through projections to the amygdala, NAcc, PFC and brainstem) — a “dual” signaling system.',
      links: 'The main chemical carrier of the CARE system, the bonding component of LUST (in animal studies, oxytocin is more prominent in females and vasopressin in males), a facilitator of social pairing in PLAY, a signal of trust and familiarity.',
      where: 'The neuroanatomy of CARE (Chapter 3), the distinction and overlap of CARE and LUST, prairie vole studies (Chapter 11), the effects of oxytocin that vary with the person and the context (Chapter 11), studies of intranasal oxytocin in autism (Chapter 7).',
      note: 'That this pathway works in two ways, through the bloodstream and directly within the brain, matches exactly the book’s emphasis that “attachment is both a bodily and a mental phenomenon” — the same molecule plays a part both in uterine contraction and in feelings of trust and closeness. But its effect depends on the model that reads it: on insecure ground it can even reduce trust.'
    },
    opioid: {
      carries: 'The non-dopamine half of the classic “reward” story. Endogenous opioids (endorphins, enkephalins) and endocannabinoids code how much an experience is “liked” (hedonic tone) rather than how much it is “wanted” — dopamine carries wanting, opioids/cannabinoids carry satisfaction.',
      links: 'Concentrated in the hedonic hot spots of the nucleus accumbens; also connected with the PAG, the PANIC/GRIEF circuit (soothing separation pain) and the PLAY circuit.',
      where: 'The distinction between “wanting” (dopamine) and “liking” (opioids) in SEEKING (Chapter 8), opioids reducing separation calls (Chapter 3), the reward component of PLAY (Chapter 8), the neurochemistry of LUST after orgasm (Chapter 11), the warmth/contentment feeling of CARE.',
      note: 'That wanting and liking are separate systems is the key to the book’s themes of addiction and insatiability: a person can intensely want something (a substance, a relationship, a behavior) (dopamine high) yet no longer take any pleasure from it (opioids low) — this is the neural explanation of the clinical picture “I want it so much but I’m never satisfied”.'
    },
    schore: {
      carries: 'The central claim of Allan Schore’s theory: the right hemispheres of mother and infant “talk” directly to each other through a nonverbal, implicit channel (facial expression, tone of voice, touch, timing). This pathway works relatively independently of the verbal/analytic processing of the left hemisphere.',
      links: 'It forms a synchronized loop between the orbitofrontal-limbic circuits of mother and infant; the maturation of the infant’s right OFC depends largely on this reciprocal loop.',
      where: 'The top-down nature of CBT and the bottom-up nature of psychodynamic/relational therapy (Chapter 3), the “language door being closed” in unrepresented early trauma (Chapters 2–3), now moments and implicit relational knowing (Chapter 5), the need for the therapist to be “a good tracker” (Chapter 12).',
      note: 'This pathway is the crux of the book’s comparison of CBT and psychodynamic therapy: because some patterns are never represented at the left-brain, verbal-conscious level, they cannot be reached by verbal techniques alone — change has to pass through this pathway, through relational experience. The claim that the pathway is lateralized “right to right” is a model; the importance of nonverbal communication is well supported independently of it.'
    },
    vagal_hier: {
      carries: 'The phylogenetically layered organization of the autonomic nervous system — instead of a sympathetic and a single parasympathetic system, three separate circuits: ventral vagal (social engagement), sympathetic (fight/flight), dorsal vagal (freezing/collapse). As threat increases, the system engages this hierarchy in order, from the evolutionarily newest to the oldest.',
      links: 'The nucleus ambiguus (ventral) and the dorsal motor nucleus (dorsal) are different outflows; neuroception decides unconsciously which step of this hierarchy will activate.',
      where: 'The safety signals of the therapeutic setting (Chapter 5), freezing in selective mutism (Chapter 10), post-traumatic dissociation and the window of tolerance (Chapter 18), supervision and the need for therapists to regulate their own nervous system (Chapter 5), the autonomic basis of sexual function (Chapter 14).',
      note: 'This hierarchy is the direct source of the book’s warning that “calm is not one thing” — the same behavioral picture (stillness, silence) can hide two completely opposite physiological states (the safe, engaged ventral state or the collapsed, dissociative dorsal state); missing this distinction is a serious clinical error. This hierarchy is Porges’s model; its phylogenetic basis and the role of the dorsal vagus in freezing are debated (see Chapter 5); the clinical warning that “calm is not one thing” holds independently of it.'
    },
    amy_hip: {
      carries: 'The circuit of fear conditioning that codes the “what” (amygdala) and the “where/when” (hippocampus) separately and combines them. While the amygdala on its own learns “this is dangerous”, the hippocampus fixes this learning to a particular context — “dangerous only in that room, only with that person”.',
      links: 'A reciprocal, mutually regulating connection; when chronic cortisol impairs hippocampal function, contextualization is lost and the amygdala’s generalized “everywhere is dangerous” learning takes over.',
      where: 'Contextual generalization in PTSD (Chapter 18), the easy learning of evolutionarily “prepared” phobias (snakes, spiders) (Chapter 10), the context dependence of extinction and repeating exposure in different settings (Chapter 10), chronic stress paving the way for anxiety disorders.',
      note: 'The breakdown of this circuit is the common denominator of the book’s discussions of trauma and chronic anxiety: much of treatment is really an attempt to rebuild this capacity for contextualization, that is, to rein in the amygdala’s generalized alarm again with the hippocampus’s knowledge that “but not here”.'
    },
    frontolimbic: {
      carries: 'The process by which inhibitory projections descending from the PFC (especially the vmPFC/OFC) to the amygdala and other subcortical structures strengthen over the years after birth through myelination and synaptic reorganization. At birth this pathway is immature; its regulatory function becomes clear only toward adolescence — regulation is supplied from outside (by the caregiver).',
      links: 'The speed and degree of this pathway’s strengthening are directly linked to the quality of early CARE — the experience of safe, predictable regulation supports the maturation of this circuit.',
      where: 'The good-enough mother’s external PFC function (Chapter 3), the strengthening of the PFC-amygdala connection in the rupture–repair cycle (Chapter 7), the internalization of the superego in the latency period (Chapter 13), defense mechanisms becoming “mature” (Chapter 17), risk-taking in adolescence (Chapter 11).',
      note: 'This pathway is the direct anatomical counterpart of one of the book’s most fundamental theses — “regulation first comes from outside, then is internalized”. Almost every developmental transition in the book (a change of stage, the maturation of a defense mechanism, therapeutic change) means this pathway growing a little stronger.'
    }
  };
  (DV.pathways || []).forEach((p) => put(p, P[p.id]));

  DV.closing = 'Panksepp’s systems, Freud’s stages, Erikson’s crises and Mahler’s subphases, discussed one by one throughout the book, are in fact produced by different combinations of a shared, limited number of anatomical components (the PAG, amygdala, hypothalamus and a few cortical areas) and a handful of pathways that connect them.';
})();
