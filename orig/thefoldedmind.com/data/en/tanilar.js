/* İngilizce içerik: tanılar (data/tanilar.js ile aynı kimlikler). Ad, kısaltma, özet ve mercek metinleri (devre, bulgular, belirtiler,
   tedavi). content.js'ten önce yüklenir; Türkçe verinin üzerine yazar. Bulgu grupları ve maddeleri sırayla, belirti ve tedavi kartları
   kimlikle eşlenir. Kitap alıntıları (Kitapta) data/en/divan.js'teki çevirinin parçalarıdır (kullanıcı 2026-10-10). */
(function () {
  'use strict';
  const EN = {
    dehb: { name: 'Attention-Deficit/Hyperactivity Disorder', short: 'ADHD',
      kitapta: [{}, {}, { snippet: 'the chronic low tonic dopamine hypothesis in ADHD (Chapter 7)' }],  // kitap alıntıları: data/en/divan.js'teki çeviride aranır (sırayla eşlenir)
      summary: 'Attention, impulse control and reward circuits; frontostriatal and frontoparietal networks, dopamine and noradrenaline.',
      mercek: {
        devre: {
          title: 'Frontostriatal loop and catecholamines',
          text: 'The DLPFC and anterior cingulate steer attention and behavior through a loop that runs via the caudate and putamen to the thalamus and back to the cortex. Dopamine from the ventral tegmental area tunes the striatum and prefrontal cortex; noradrenaline from the locus coeruleus tunes the prefrontal cortex. ADHD medications strengthen both systems.',
          modes: {
            tipik: { name: 'Typical development', text: 'During a task, dopamine and noradrenaline signals reach prefrontal and striatal targets steadily; the loop sustains attention and holds back unneeded responses.' },
            dehb: { name: 'ADHD model', text: 'Dopamine and noradrenaline signals are weak and fluctuating, and the frontostriatal loop does not engage enough during tasks. In a meta-analysis of 55 fMRI studies, children with ADHD showed under-activation of executive (frontoparietal) and ventral attention systems and over-activation of the default mode network.' }
          },
          src: 'Loop: Alexander et al., 1986. Functional imaging: Cortese et al., 2012 (American Journal of Psychiatry, 55 studies). Dopamine: Volkow et al., 2009. The model is a theory.'
        },
        bulgular: {
          text: 'Color shows the direction and size of a finding: cool = smaller, thinner or less active; warm = larger or more active. Differences are group averages and small; imaging cannot diagnose ADHD in an individual child.',
          gruplar: [
            { name: 'Structure (ENIGMA)', text: 'ENIGMA-ADHD (1,713 with ADHD, 1,529 controls): accumbens, amygdala, caudate, hippocampus and putamen are smaller. Differences are clear under age 15 and not significant in adults; medication did not change the results.',
              items: [{ dtxt: 'd = −0.19', txt: 'Amygdala smaller (largest difference).' }, { dtxt: 'd = −0.15', txt: 'Nucleus accumbens smaller.' },
                { dtxt: 'd = −0.14', txt: 'Putamen smaller.' }, { dtxt: 'd = −0.11', txt: 'Caudate smaller.' }, { dtxt: 'd = −0.11', txt: 'Hippocampus smaller.' }],
              src: 'Hoogman et al., 2017 (Lancet Psychiatry).' },
            { name: 'Maturation', text: 'The cortex matures in the usual order (back to front) but on average about 3 years later, most of all in frontal regions; the motor cortex matures slightly earlier (446 children, 824 scans). Here color shows the direction of the delay, not an effect size. The finding supports seeing ADHD as a delay in maturation.',
              items: [{ dtxt: 'delayed', txt: 'Dorsolateral prefrontal cortex: peak thickness comes late.' }, { dtxt: 'delayed', txt: 'Medial prefrontal cortex: matures late.' },
                { dtxt: 'slightly early', txt: 'Motor cortex: matures slightly early.' }],
              src: 'Shaw et al., 2007 (PNAS).' },
            { name: 'Function (fMRI)', text: 'During tasks, children with ADHD under-activate the frontoparietal system that carries executive function and the ventral attention system, and over-activate the default mode network that carries self-directed thought.',
              items: [{ dtxt: 'under-active', txt: 'Front node of the frontoparietal system.' }, { dtxt: 'under-active', txt: 'Back node of the frontoparietal system.' },
                { dtxt: 'over-active', txt: 'Posterior node of the default mode network.' }],
              src: 'Cortese et al., 2012 (meta-analysis of 55 fMRI studies).' }
          ]
        },
        belirtiler: [
          { id: 'denetim', name: 'Attention and inhibition', sub: 'Distractibility, impulsivity, poor planning', devre: 'Dorsal frontostriatal pathway (cognitive control)',
            text: 'The DLPFC and inferior frontal gyrus sustain attention and stop an ongoing response via the dorsal caudate. In some children with ADHD the difficulty lies mainly in this pathway.' },
          { id: 'odul', name: 'Reward and waiting', sub: 'Wanting reward now, avoiding delay', devre: 'Ventral frontostriatal pathway (reward)',
            text: 'The OFC and nucleus accumbens value rewards, fed by dopamine. The value of a delayed reward drops quickly, so the child picks a small reward now over a larger one later.' },
          { id: 'zaman', name: 'Timing', sub: 'Estimating time, rhythm, sequencing', devre: 'Frontocerebellar pathway (timing)',
            text: 'The prefrontal cortex connects to the cerebellum through the pons, and the dentate nucleus connects back to the prefrontal cortex through the thalamus. Cerebellar output crosses to the opposite thalamus; the drawing is schematic.' },
          { id: 'dalgalanma', name: 'Attention lapses', sub: 'Mind-wandering, drifting off during tasks', devre: 'Default mode network (interference hypothesis)',
            text: 'The default mode network, which should quiet down during a task, is not suppressed enough and pulls attention away from the task. This is a hypothesis; over-activation of the DMN during tasks has been found.' }
        ],
        belirtilerSrc: 'Three pathways: Sonuga-Barke et al., 2010; de Zeeuw et al., 2012 (149 participants; 80% of those with ADHD who had a deficit had it in only one domain). Default mode interference: Sonuga-Barke and Castellanos, 2007 (hypothesis); Cortese et al., 2012.',
        tedavi: [
          { id: 'mph', name: 'Methylphenidate', sub: 'Blocks dopamine and noradrenaline transporters',
            text: 'First-choice medication in the short term for children and adolescents; amphetamines in adults (network meta-analysis of 133 double-blind trials). Blocking the transporters raises dopamine and noradrenaline in the striatum and prefrontal cortex; amphetamines also increase release. Long-term data are limited.', src: 'Cortese et al., 2018 (Lancet Psychiatry).' },
          { id: 'atx', name: 'Atomoxetine', sub: 'Selective noradrenaline reuptake inhibitor',
            text: 'A non-stimulant option. It raises noradrenaline and dopamine in the prefrontal cortex. The effect builds over a few weeks.', src: 'Cortese et al., 2018.' },
          { id: 'guanfasin', name: 'Guanfacine', sub: 'α2A adrenergic receptor agonist',
            text: 'By stimulating α2A receptors in the prefrontal cortex it strengthens signalling in working-memory networks. The extended-release form is used alone or added to stimulants.', src: 'Cortese et al., 2018.' },
          { id: 'davranis', name: 'Parent training and behavioral intervention', sub: 'First line in preschool children',
            text: 'First line under age five. Small-to-moderate effects on symptoms and on oppositional problems, largest when rated by those closest to treatment (21 studies, more than 2,200 children). In theory, consistent and immediate reinforcement aims to offset the difficulty in the reward pathway.', src: 'NICE NG87; Groenman et al., 2022 (JAACAP).' },
          { id: 'amfetamin', name: 'Amphetamines', sub: 'Stimulants; not used in Turkey',
            text: 'In a network meta-analysis of 133 double-blind trials, this group is the suggested first choice in adults, while methylphenidate is suggested in children and adolescents. Besides blocking transporters, it increases dopamine and noradrenaline release. Not used in Turkey; approved in the US.',
            src: 'Cortese et al., 2018 (Lancet Psychiatry).' }
        ]
      } },
    osb: { name: 'Autism Spectrum Disorder', short: 'ASD',
      kitapta: [{}, { snippet: 'studies of intranasal oxytocin in autism (Chapter 7)' }, { snippet: 'differences in interoception in autism (Chapters 2, 7)' }, { snippet: 'atypical amygdala responses to social stimuli in autism (Chapter 7)' }, { snippet: 'social signal processing in autism (Chapter 7)' }],  // kitap alıntıları: data/en/divan.js'teki çeviride aranır (sırayla eşlenir)
      summary: 'Social perception, theory of mind, sensory processing and interoception circuits; imaging differences are small and group-level.',
      mercek: {
        devre: {
          title: 'Social perception network',
          text: 'Face and eye information comes from the fusiform region of the inferior temporal cortex, biological motion and voice from the superior temporal sulcus; the amygdala weighs the importance of these social cues. The temporoparietal junction and medial PFC support understanding other minds (theory of mind); the insula carries bodily and emotional awareness.',
          modes: {
            tipik: { name: 'Typical development', text: 'From the first months the infant turns to faces and the eye region; social cues are processed in this network and over time become an understanding of others\' intentions.' },
            osb: { name: 'Autism model', text: 'Social cues reach the network more weakly and differently: in infants later diagnosed with autism, looking at the eye region starts to decline between 2 and 6 months; many studies find different fusiform and amygdala responses to faces. Findings vary greatly between individuals; this drawing is a possible scheme, not a single "broken circuit".' }
          },
          src: 'Looking at the eyes: Jones and Klin, 2013 (Nature). The model is schematic; autism is not a single circuit disorder.'
        },
        bulgular: {
          text: 'Color shows the direction of a finding: cool = smaller or thinner, warm = thicker. Differences are small and group-level; imaging cannot diagnose an individual.',
          gruplar: [
            { name: 'Structure (ENIGMA)', text: 'ENIGMA-ASD (1,571 autistic, 1,651 controls, ages 2–64): pallidum, putamen, amygdala and accumbens are smaller; frontal cortex is thicker and temporal cortex thinner. Cortical differences peak around adolescence. The study\'s ranges are given instead of region-by-region effect sizes; color intensity is approximate. In infants with an autistic sibling, cortical surface area also expands rapidly at 6–12 months (15 infants later diagnosed).',
              items: [{ dtxt: 'd ≈ −0.1 to −0.16', txt: 'Pallidum smaller.' }, { dtxt: 'd ≈ −0.1 to −0.16', txt: 'Putamen smaller.' }, { dtxt: 'd ≈ −0.1 to −0.16', txt: 'Amygdala smaller.' },
                { dtxt: 'd ≈ −0.1 to −0.16', txt: 'Accumbens smaller.' }, { dtxt: 'd ≈ 0.2', txt: 'Frontal cortex thicker.' }, { dtxt: 'd ≈ −0.2', txt: 'Temporal cortex thinner.' }],
              src: 'van Rooij et al., 2018 (American Journal of Psychiatry); Hazlett et al., 2017 (Nature).' }
          ]
        },
        belirtiler: [
          { id: 'sosyal', name: 'Social communication and theory of mind', sub: 'Reciprocity, understanding intentions and feelings', devre: 'Theory-of-mind network',
            text: 'The superior temporal sulcus, temporoparietal junction and medial PFC let us understand another person\'s perspective and intentions.' },
          { id: 'yuz', name: 'Faces and eye contact', sub: 'Looking at the eyes, reading facial expressions', devre: 'Face-processing pathway',
            text: 'The fusiform region processes faces and the amygdala the importance of an expression. In infants later diagnosed with autism, time spent looking at the eyes declines early.' },
          { id: 'yinelenen', name: 'Repetitive behaviors and insistence on sameness', sub: 'Restricted interests, attachment to routines', devre: 'Corticostriatal loops',
            text: 'Habit and flexibility circuits; ENIGMA found basal ganglia volume differences. The circuit basis of these symptoms is not yet clear.' },
          { id: 'duyusal', name: 'Sensory differences and inner body sense', sub: 'Over- or under-sensitivity, interoception', devre: 'Insula and sensory cortex',
            text: 'The sensory cortex carries information from the outside world and the insula from inside the body into emotional awareness. The book describes differences in interoception in autism.' },
          { id: 'dil', name: 'Language', sub: 'Delayed speech and differences in use', devre: 'Language network',
            text: 'The superior temporal gyrus perceives speech and the inferior frontal gyrus (Broca) produces it; the connection between them carries language. Language level in autism varies greatly between individuals.' }
        ],
        belirtilerSrc: 'Social perception: Allison et al., 2000; theory of mind: Saxe and Kanwisher, 2003. Faces and gaze: Dalton et al., 2005; Jones and Klin, 2013. Structure: van Rooij et al., 2018. Speech: Hickok and Poeppel, 2007. Symptom-to-circuit matching is a theoretical framework; findings in autism vary greatly between individuals.',
        tedavi: [
          { id: 'ndbi', name: 'Early developmental-behavioral intervention', sub: 'In natural settings, within play and daily routines',
            text: 'Naturalistic developmental behavioral interventions (NDBI) and developmental interventions have the strongest evidence for social communication (130 samples, ages 0–8). They target joint attention and social interest; early intensive behavioral intervention is promising but needs better studies.', src: 'Sandbank et al., 2020 (Psychological Bulletin).' },
          { id: 'antipsikotik', name: 'Risperidone and aripiprazole', sub: 'For co-occurring irritability and aggression',
            text: 'They target co-occurring irritability and aggression, not core symptoms; FDA-approved (risperidone from age 5, aripiprazole ages 6–17). They act on dopamine and serotonin receptors; weight gain and metabolic side effects are monitored. No medication is approved for core symptoms.', src: 'FDA approvals (2006, 2009).' },
          { id: 'oksitosin', name: 'Intranasal oxytocin (research)', sub: 'Social bonding hormone',
            text: 'In 290 children, 24 weeks of intranasal oxytocin did not improve social functioning compared with placebo. The book describes the oxytocin pathway and oxytocin studies in autism.', src: 'Sikich et al., 2021 (NEJM).' },
          { id: 'melatonin', name: 'Prolonged-release melatonin', sub: 'Insomnia',
            text: 'In 125 children with insomnia (most with autism, ages 2–17) whose sleep did not improve with behavioral intervention, total sleep rose about 57 minutes over 13 weeks (placebo 9), and sleep latency shortened. No brain pathway is drawn on this card.',
            src: 'Gringras et al., 2017 (JAACAP).' },
          { id: 'osbdehb', name: 'Co-occurring hyperactivity: methylphenidate', sub: 'Smaller response',
            text: 'In a crossover trial of 72 children aged 5–14 with hyperactivity, it reduced hyperactivity, but the response was smaller than in typically developing children with ADHD; 18% stopped because of side effects, and social withdrawal rose at the high dose.',
            src: 'RUPP Autism Network, 2005 (Archives of General Psychiatry).' }
        ]
      } },
    okb: { name: 'Obsessive-Compulsive Disorder', short: 'OCD',
      kitapta: [{ snippet: 'mistuning in OCD (Chapters 2 and 12)' }, { snippet: 'overactivity of the error-detection loop in OCD (Chapter 2)' }, { snippet: 'Compulsions becoming automatic and the change in caudate metabolism with treatment (Chapter 2)' }, { snippet: 'The basal ganglia are one of the answers to the book’s question “why is a pattern so stubborn?” — when a behavior (a compulsion, a defense, a relational pattern) is repeated often enough, it moves out of the conscious/flexible PFC circuit into the automatic, fast basal ganglia circuit; a mechanism that makes treatment harder, but also shows that a new, healthy habit can be built the same way.' }],  // kitap alıntıları: data/en/divan.js'teki çeviride aranır (sırayla eşlenir)
      summary: 'Loops through the orbitofrontal cortex, cingulate cortex, striatum and thalamus that "get stuck".',
      mercek: {
        devre: {
          title: 'Cortico-striato-thalamo-cortical loop',
          text: 'The orbitofrontal cortex (OFC) and anterior cingulate cortex (ACC) drive the caudate. Two pathways leave the caudate: the direct pathway releases the brake on the thalamus ("go on"), the indirect pathway tightens it via the GPe and subthalamic nucleus (STN) ("stop"). The thalamus re-excites the OFC and ACC and closes the loop.',
          modes: {
            saglikli: { name: 'Healthy', text: 'The two pathways are balanced: the "something is wrong" signal fades once the task is done or the danger has passed. The loop responds to a trigger, then settles.' },
            okb: { name: 'OCD model', text: 'The direct pathway dominates and the indirect one is weak: the brake on the thalamus loosens, the thalamus drives the cortex more and the loop feeds itself. The error signal does not fade; a compulsion brings brief relief and the loop starts again. Orange pulse: structures found to be more active at rest and on symptom provocation.' }
          },
          src: 'Loop: Alexander et al., 1986. OCD model: Saxena and Rauch, 2000. PET: Baxter et al., 1987 (14 patients; increased glucose use in the left orbital gyrus and both caudate nuclei). The model is a theory; not every patient fits it.'
        },
        bulgular: {
          text: 'Regions are colored by the direction and size of a finding: warm = larger, thicker or more active; cool = smaller or thinner. Differences are group averages and small (d below 0.2 counts as small); imaging cannot diagnose OCD in an individual.',
          gruplar: [
            { name: 'Children and adolescents', text: 'ENIGMA-OCD: findings in children and adolescents differ from adults, suggesting the disorder affects the developing brain at different stages.',
              items: [{ dtxt: '+0.38', txt: 'Thalamus larger (in unmedicated children and adolescents, by about 3%).' }, { dtxt: '−0.10 to −0.33', txt: 'Inferior parietal cortex thinner.' },
                { dtxt: '−0.10 to −0.33', txt: 'Superior parietal cortex thinner.' }],
              src: 'Subcortical: Boedhoe et al., 2017 (1,830 patients, 1,759 controls). Cortex: Boedhoe et al., 2018 (1,905 patients, 1,760 controls). For the parietal findings the range of all cortical effects in the study is given; color intensity is approximate.' },
            { name: 'Adults', text: 'In adults the pallidum and hippocampus stand out; differences are larger in medicated patients (pallidum +0.29, hippocampus −0.29). This does not show that medication causes them: medicated patients may have more severe illness.',
              items: [{ dtxt: '+0.16', txt: 'Pallidum larger (by about 3%).' }, { dtxt: '−0.13', txt: 'Hippocampus smaller (by about 3%).' }, { dtxt: '−0.10 to −0.33', txt: 'Inferior parietal cortex thinner.' }],
              src: 'Boedhoe et al., 2017; 2018 (ENIGMA-OCD). For the parietal finding the study\'s effect range is given.' },
            { name: 'Function (PET)', text: 'Function more than structure: resting glucose use is increased in the OFC and caudate. After successful treatment (SSRI or CBT) caudate and OFC activity decrease.',
              items: [{ dtxt: 'increased', txt: 'Orbitofrontal cortex: increased glucose use (left orbital gyrus in the first study).' }, { dtxt: 'increased', txt: 'Caudate: increased glucose use on both sides; decreases with treatment.' }],
              src: 'Baxter et al., 1987 (FDG-PET, 14 patients). Decrease with treatment: Baxter et al., 1992; van der Straten et al., 2017 (meta-analysis).' }
          ]
        },
        belirtiler: [
          { id: 'korku', name: 'Fear and anxiety', sub: 'Fear-based obsessions, fear that does not fade', devre: 'Fronto-limbic circuit',
            text: 'The ventromedial PFC regulates fear learning and extinction and brakes the amygdala. Fear extinction is weak in OCD; exposure therapy works through this circuit. Rings show inhibitory (braking) effects.' },
          { id: 'eksik', name: 'Incompleteness and habit', sub: '"Not just right" feeling, automatic compulsions', devre: 'Sensorimotor circuit',
            text: 'The supplementary motor area (SMA) and posterior putamen run cue-triggered habits and sensorimotor integration. Behavior repeated because of a "not just right" feeling settles into this automatic circuit over time.' },
          { id: 'dur', name: 'Difficulty stopping', sub: 'Not being able to halt an ongoing behavior', devre: 'Ventral cognitive circuit',
            text: 'The inferior frontal gyrus (ventrolateral PFC, especially on the right) and ventral caudate provide response inhibition. The "stop" command is also sent by a fast route from the IFG directly to the STN (hyperdirect pathway). Differences in this circuit have been reported in OCD during inhibition tasks.' },
          { id: 'esneklik', name: 'Planning and flexibility', sub: 'Mental flexibility, working memory', devre: 'Dorsal cognitive circuit',
            text: 'The dorsolateral PFC and dorsal caudate support planning, working memory and top-down regulation of emotion. Under-activity of this circuit is considered together with over-activity of the fronto-limbic circuit in fear-based obsessions.' },
          { id: 'odul', name: 'Reward and relief', sub: 'Brief relief from a compulsion, motivation', devre: 'Ventral affective circuit',
            text: 'The OFC and nucleus accumbens process reward and motivation, fed by dopamine from the ventral tegmental area. The relief a compulsion brings reinforces the behavior.' }
        ],
        belirtilerSrc: 'Five circuits: van den Heuvel et al., 2016; Shephard et al., 2021 (Molecular Psychiatry). Symptom-to-circuit matching is a theoretical framework; tasks usually engage several circuits at once.',
        tedavi: [
          { id: 'ssri', name: 'SSRIs and clomipramine', sub: 'Inhibit serotonin reuptake',
            text: 'First-line medication. OCD needs higher doses and longer trials (8–12 weeks) than depression. FDA-approved in children: sertraline (from age 6), fluoxetine (7), fluvoxamine (8), clomipramine (10). In the Turkish product information (KÜB), clomipramine is indicated at ages 10–17 only for OCD. After successful treatment caudate and OFC activity decrease.', src: 'POTS, 2004 (JAMA); van der Straten et al., 2017 (meta-analysis).' },
          { id: 'erp', name: 'Exposure and response prevention', sub: 'Cognitive behavioral therapy (CBT)',
            text: 'First line in children and adolescents; highest remission when combined with medication (POTS: combined 53.6%, CBT alone 39.3%, placebo 3.6%). It uses fear-extinction learning: the ventromedial PFC brakes the amygdala. In the atlas this regulation is drawn with the book\'s "fronto-limbic maturation pathway". Caudate metabolism decreases in responders.', src: 'POTS, 2004; Baxter et al., 1992.' },
          { id: 'dbs-vcvs', name: 'Deep brain stimulation: VC/VS', sub: 'Ventral capsule and ventral striatum',
            text: 'For severe treatment-resistant OCD in adults. The lead runs along the anterior limb of the internal capsule with its tip contacts in the ventral striatum (around the accumbens). FDA humanitarian device exemption 2009. In a meta-analysis covering all DBS targets (31 studies, 116 patients; mostly striatal targets) symptoms fell by 45% on average and 60% responded. Not used in children.', src: 'Alonso et al., 2015 (meta-analysis). The lead path is schematic.' },
          { id: 'dbs-stn', name: 'Deep brain stimulation: STN', sub: 'Anteromedial subthalamic nucleus',
            text: 'The emotional-cognitive part in front of and medial to the motor target used in Parkinson\'s disease. In a 16-patient double-blind crossover trial mean Y-BOCS was 19 with stimulation on and 28 with sham stimulation; serious adverse events also occurred. Not used in children.', src: 'Mallet et al., 2008 (NEJM). The lead path is schematic.' },
          { id: 'dtms', name: 'Deep TMS (H7 coil)', sub: 'Medial prefrontal cortex and anterior cingulate',
            text: 'Magnetic stimulation through the skull; the H7 coil reaches deeper, to the anterior cingulate. Symptoms are provoked before each session. In 99 adults the response rate was 38.1% at the end of treatment (sham 11.1%) and 45.2% a month later (sham 17.8%). FDA 2018. Not used in children.', src: 'Carmi et al., 2019 (American Journal of Psychiatry). Coil and field are schematic.' },
          { id: 'apgucl', name: 'Antipsychotic augmentation', sub: 'No response to SSRI and CBT',
            text: 'In an adult meta-analysis, aripiprazole was effective in the short term and risperidone had a small effect; quetiapine and olanzapine did not differ from placebo. The authors advise cautious use and review at 4 weeks. Long-term risks are kept in mind.',
            src: 'Veale et al., 2014 (BMC Psychiatry).' }
        ]
      } },
    depresyon: { name: 'Depression', short: 'Depression',
      kitapta: [{}, {}, {}, {}, { snippet: 'the extinguishing of SEEKING and anhedonia in depression (Chapter 8)' }, {}],  // kitap alıntıları: data/en/divan.js'teki çeviride aranır (sırayla eşlenir)
      summary: 'Reward, stress response and emotion regulation circuits; irritability and anhedonia can come first in adolescence.',
      mercek: {
        devre: {
          title: 'Balance of reward and emotion regulation',
          text: 'The dopamine pathway from the ventral tegmental area to the accumbens and medial prefrontal cortex carries reward and motivation. The anterior cingulate (especially its subgenual part) and amygdala carry negative emotion, which the DLPFC regulates from above. The lateral habenula brakes the dopamine nuclei with a "the expected reward did not come" signal; the amygdala drives the stress axis via the hypothalamus.',
          modes: {
            saglikli: { name: 'Healthy', text: 'The reward signal feeds motivation; when negative emotion arises the prefrontal cortex regulates it and the stress response fades.' },
            depresyon: { name: 'Depression model', text: 'The reward signal weakens (anhedonia); the anterior cingulate and amygdala are more active and the DLPFC\'s top-down regulation is weak (limbic-cortical dysregulation model). The habenula brakes the dopamine nuclei more, and the stress axis runs chronically.' }
          },
          src: 'Limbic-cortical model: Mayberg, 1997. Habenula: Hikosaka, 2010. The model is a theory; depression spans several circuit patterns.'
        },
        bulgular: {
          text: 'Color shows the direction and size of a finding: cool = smaller or thinner, warm = larger. Differences are group averages and small; imaging cannot diagnose an individual.',
          gruplar: [
            { name: 'Hippocampus', text: 'ENIGMA-MDD (1,728 patients, 7,199 controls): the hippocampus is smaller. The difference is clear in recurrent depression and in depression starting before age 21; first-episode patients do not differ from controls.',
              items: [{ dtxt: 'd = −0.14', txt: 'Hippocampus smaller (1.2%); −0.17 in recurrent, −0.20 in early-onset depression.' }],
              src: 'Schmaal et al., 2016 (Molecular Psychiatry).' },
            { name: 'Adults (cortex)', text: 'ENIGMA-MDD (2,148 patients, 7,957 controls): in adults the orbitofrontal, anterior and posterior cingulate, insular and temporal cortices are thinner; thinning is seen in adult-onset cases. Effect sizes are small; color intensity is approximate.',
              items: [{ dtxt: 'thinner', txt: 'Orbitofrontal cortex thinner.' }, { dtxt: 'thinner', txt: 'Anterior cingulate thinner.' }, { dtxt: 'thinner', txt: 'Posterior cingulate thinner.' },
                { dtxt: 'thinner', txt: 'Insula thinner.' }, { dtxt: 'thinner', txt: 'Temporal cortex thinner.' }],
              src: 'Schmaal et al., 2017 (Molecular Psychiatry).' },
            { name: 'Adolescents (cortex)', text: 'In adolescents there is no difference in cortical thickness; total surface area is smaller, most in frontal and sensorimotor regions and in adolescents with recurrent episodes. The effect in the developing brain differs from adults.',
              items: [{ dtxt: 'smaller surface area', txt: 'Frontal cortex surface area smaller.' }, { dtxt: 'smaller surface area', txt: 'Motor cortex surface area smaller.' },
                { dtxt: 'smaller surface area', txt: 'Sensory cortex surface area smaller.' }],
              src: 'Schmaal et al., 2017.' }
          ]
        },
        belirtiler: [
          { id: 'anhedoni', name: 'Loss of pleasure', sub: 'Loss of interest and drive', devre: 'Reward circuit',
            text: 'In the reward circuit formed by the VTA, nucleus accumbens and prefrontal cortex, responses to reward are reduced. The book describes this circuit as the SEEKING system.' },
          { id: 'ruminasyon', name: 'Rumination', sub: 'Repetitive, self-focused thinking', devre: 'Default mode network',
            text: 'The medial prefrontal cortex and posterior cingulate carry self-directed thought; in depression connectivity in this network is increased and negative thoughts keep circling.' },
          { id: 'olumsuz', name: 'Negative emotion and stress', sub: 'Low mood, threat sensitivity, sleep and appetite', devre: 'Negative affect circuit and stress axis',
            text: 'The amygdala and anterior cingulate respond more strongly to negative stimuli; the amygdala drives the stress axis (cortisol) through the hypothalamus.' },
          { id: 'denetim', name: 'Concentration and decision-making', sub: 'Difficulty focusing and concentrating', devre: 'Cognitive control circuit',
            text: 'The DLPFC and dorsal anterior cingulate run attention and decisions; under-activity of this circuit has been linked to poor concentration and, in some patients, to treatment response.' }
        ],
        belirtilerSrc: 'Circuits: Williams, 2016 (Lancet Psychiatry; a circuit taxonomy for depression and anxiety). Symptom-to-circuit matching is a theoretical framework.',
        tedavi: [
          { id: 'ssri', name: 'SSRIs (fluoxetine, escitalopram)', sub: 'Inhibit serotonin reuptake',
            text: 'Added to psychotherapy in moderate and severe depression. FDA-approved in children and adolescents: fluoxetine (from age 8), escitalopram (from 12). Under age 25 there is a suicidal-thinking warning and close monitoring is needed. Response at 12 weeks in adolescents: fluoxetine + CBT 71.0%, fluoxetine alone 60.6%, placebo 34.8%.', src: 'TADS, 2004 (JAMA).' },
          { id: 'bdt', name: 'Cognitive behavioral therapy', sub: 'Thought and behavior patterns',
            text: 'First line in mild depression and combined with medication in moderate to severe depression. It targets negative thoughts and behavioral withdrawal and is thought to work through prefrontal regulation pathways (drawn in the atlas with the book\'s fronto-limbic pathway). In adolescents CBT alone reached 43.2% at 12 weeks; by week 36 both CBT alone and fluoxetine alone reached 81%.', src: 'TADS, 2004.' },
          { id: 'rtms', name: 'Repetitive TMS (left DLPFC)', sub: 'Magnetic stimulation through the skull',
            text: 'Used in treatment-resistant adult depression. In 2024 it received FDA clearance for ages 15–21 as an add-on to antidepressants (based on the company\'s real-world data, not a randomized trial). The coil sits over the left DLPFC; the effect spreads to the connected anterior cingulate network.', src: 'FDA, 2024 (NeuroStar). The left DLPFC target is anticorrelated with the subgenual cingulate: Fox et al., 2012. Coil, field and pathway are schematic.' },
          { id: 'dbs', name: 'Deep brain stimulation (subgenual cingulate)', sub: 'Research stage',
            text: 'In the first study 4 of 6 patients improved markedly; a later multicenter randomized trial did not beat sham stimulation in its early phase. Research use only, in adults. Not used in children.', src: 'Mayberg et al., 2005 (Neuron); Holtzheimer et al., 2017 (Lancet Psychiatry). The lead path is schematic.' },
          { id: 'ekt', name: 'Electroconvulsive therapy (ECT)', sub: 'Severe or resistant depression',
            text: 'In a meta-analysis of adult studies it is superior to antidepressant drugs. In adolescents the evidence is a practice parameter based on case reports and small studies; symptom and cognitive assessment are recommended before and after, and preadolescent children are outside the parameter. In an MRI study of 281 patients, hippocampal volume rises about 0.28% per session, but this does not explain improvement. No brain pathway is drawn on this card.',
            src: 'UK ECT Review Group, 2003 (Lancet); Ghaziuddin et al., 2004 (JAACAP); Oltedal et al., 2018 (Biological Psychiatry).' },
          { id: 'ketamin', name: 'Ketamine and esketamine', sub: 'Fast-acting, resistant depression',
            text: 'In adult resistant depression, intranasal esketamine added to an oral antidepressant showed a rapid, dose-related effect (67 patients); the 2019 FDA approval is for adults and it is given at certified sites. In a crossover trial of 17 adolescents, a single intravenous dose of ketamine beat midazolam at 24 hours, with more blood pressure rise and dissociative symptoms; long-term safety data are lacking. It is thought to act through the glutamate system.',
            src: 'Daly et al., 2018 (JAMA Psychiatry); Dwyer et al., 2021 (American Journal of Psychiatry); FDA, 2019.' },
          { id: 'kat', name: 'Interpersonal psychotherapy', sub: 'Adolescent depression',
            text: 'In a school-based clinic trial of 63 adolescents, 12 sessions of interpersonal psychotherapy reduced symptoms more and improved functioning more than usual care. No brain pathway is drawn on this card.',
            src: 'Mufson et al., 2004 (Archives of General Psychiatry).' },
          { id: 'obur', name: 'Other antidepressants', sub: 'Bupropion, SNRIs, mirtazapine',
            text: 'In a network meta-analysis of 21 antidepressants across 522 trials in adults, all beat placebo. The picture differs in children and adolescents: in a network meta-analysis, fluoxetine was the only drug significantly better than placebo. The suicidal-thoughts warning applies under age 25.',
            src: 'Cipriani et al., 2018; Cipriani et al., 2016 (Lancet).' }
        ]
      } },
    yab: { name: 'Generalized Anxiety Disorder', short: 'GAD',
      kitapta: [{}, { snippet: 'Generalized anxiety and the “feeling that something bad will happen” (the description of PANIC in Chapter 3) may be better explained by a BNST-dominant pattern.' }, {}, {}, {}],  // kitap alıntıları: data/en/divan.js'teki çeviride aranır (sırayla eşlenir)
      summary: 'Threat perception (amygdala), sustained anxiety about uncertain threat (BNST), bodily sensation (insula) and prefrontal regulation.',
      mercek: {
        devre: {
          title: 'Threat and regulation loop',
          text: 'The amygdala responds to near and clear threat, the BNST to uncertain and distant threat; both prepare the body through the hypothalamus (stress axis) and the PAG (defense). The ventromedial and ventrolateral prefrontal cortex brake the amygdala; the insula carries bodily sensations of anxiety; the locus coeruleus raises arousal.',
          modes: {
            saglikli: { name: 'Healthy', text: 'The threat signal matches the real danger; the prefrontal cortex brakes the amygdala and the stress response fades once the danger has passed.' },
            yab: { name: 'GAD model', text: 'The threat signal is strong and the prefrontal brake weak: in children and adolescents with GAD the right amygdala responds more to angry faces and the ventrolateral PFC\'s counter-regulation is weak. The BNST carries sustained anxiety about uncertain threat; the loop feeds the sense that "something bad will happen".' }
          },
          src: 'Child and adolescent GAD: Monk et al., 2008. BNST and sustained anxiety: Davis et al., 2010; Grupe and Nitschke, 2013. The model is a theory.'
        },
        bulgular: {
          text: 'Color shows the direction of a finding: warm = over-active, cool = under-active or weak connection. Structural differences in GAD are small; findings lie more in function and connectivity.',
          gruplar: [
            { name: 'Function (children and adolescents)', text: 'Youth with GAD show a stronger right amygdala response to angry faces shown too briefly (17 ms) to be noticed, and this response tracks anxiety severity; the right ventrolateral PFC connection that balances the amygdala in healthy youth tends to be weaker in GAD.',
              items: [{ dtxt: 'over-active', txt: 'Right amygdala response larger.' }, { dtxt: 'weak regulation', txt: 'Ventrolateral PFC (inferior frontal gyrus) counter-regulation weak.' }],
              src: 'Monk et al., 2008 (Archives of General Psychiatry).' },
            { name: 'Structure (ENIGMA)', text: 'In ENIGMA-Anxiety\'s 28-site GAD study (ages 5–90) structural brain differences were small. GAD most likely rests on function and connectivity more than structure; the region appears gray.',
              items: [{ dtxt: 'no clear difference', txt: 'Structural differences are small.' }],
              src: 'Harrewijn et al., 2021 (Translational Psychiatry).' }
          ]
        },
        belirtiler: [
          { id: 'endise', name: 'Worry', sub: 'Uncontrollable, future-directed repetitive thought', devre: 'Default mode network',
            text: 'The medial prefrontal cortex and posterior cingulate carry self- and future-directed thought; in GAD this network underlies worry-related repetitive thinking.' },
          { id: 'tehdit', name: 'Threat sensitivity', sub: 'Perceiving the uncertain as dangerous', devre: 'Negative affect circuit',
            text: 'The amygdala and anterior cingulate respond strongly to threat cues; when prefrontal regulation stays weak, threat perception spreads.' },
          { id: 'belirsizlik', name: 'Intolerance of uncertainty', sub: 'The "what if something bad happens" feeling', devre: 'BNST and insula (sustained anxiety)',
            text: 'Uncertain and unpredictable threat engages the BNST and insula; the response lasts until the threat becomes clear. The book describes the BNST\'s link to the sense that "something bad will happen".' },
          { id: 'beden', name: 'Bodily tension and arousal', sub: 'Muscle tension, restlessness, poor sleep', devre: 'Arousal and stress axis',
            text: 'The locus coeruleus drives arousal with noradrenaline and the hypothalamus runs the stress axis (cortisol); both are strengthened by signals from the amygdala.' }
        ],
        belirtilerSrc: 'Circuits: Williams, 2016 (Lancet Psychiatry); uncertainty and sustained anxiety: Grupe and Nitschke, 2013. Symptom-to-circuit matching is a theoretical framework.',
        tedavi: [
          { id: 'bdt', name: 'CBT with exposure', sub: 'First line; with parent involvement',
            text: 'Breaks the anxiety loop that avoidance feeds; it uses fear extinction and prefrontal regulation (drawn in the atlas with the book\'s fronto-limbic pathway). Breaking the parent\'s cycle of reassurance and accommodating avoidance is part of treatment. In children and adolescents, marked improvement at 12 weeks with CBT alone was 59.7%.', src: 'CAMS: Walkup et al., 2008 (NEJM).' },
          { id: 'ssri', name: 'SSRIs and SNRIs', sub: 'Inhibit serotonin (and noradrenaline) reuptake',
            text: 'SSRIs (sertraline, fluoxetine, fluvoxamine) are effective; the FDA-approved medication for GAD in children and adolescents is duloxetine (ages 7–17, an SNRI). In 488 children aged 7–17, marked improvement at 12 weeks: sertraline + CBT 80.7%, sertraline alone 54.9%, placebo about 24%. The suicidal-thinking warning and close monitoring apply.', src: 'CAMS: Walkup et al., 2008.' }
        ]
      } },
    tssb: { name: 'Post-Traumatic Stress Disorder', short: 'PTSD',
      kitapta: [{}, {}, { snippet: 'chronic stress leading to a loss of contextualization (the “everywhere is dangerous” feeling in PTSD; Chapters 10 and 18)' }, { snippet: 'post-traumatic hippocampus-amygdala imbalance (Chapter 18)' }, { snippet: 'Contextual generalization in PTSD (Chapter 18)' }, { snippet: 'post-traumatic dissociation and the window of tolerance (Chapter 18)' }],  // kitap alıntıları: data/en/divan.js'teki çeviride aranır (sırayla eşlenir)
      summary: 'Fear learning and extinction circuit: an overactive amygdala, with weak ventromedial PFC braking and weak contextual input from the hippocampus.',
      mercek: {
        devre: {
          title: 'Fear learning and extinction circuit',
          text: 'The amygdala appraises threat and triggers the stress response and defense (flight, fight, freeze) through the hypothalamus and PAG; the locus coeruleus raises arousal. The hippocampus carries context ("is this place safe?"); the ventromedial PFC recalls learned extinction and brakes the amygdala.',
          modes: {
            saglikli: { name: 'Healthy', text: 'Once the danger has passed, the hippocampus recognizes the safe context and the ventromedial PFC brakes the amygdala; fear is extinguished and the body calms down.' },
            tssb: { name: 'PTSD model', text: 'The amygdala overreacts to threat cues; braking by the ventromedial PFC and contextual input from the hippocampus are weak. Even when extinction is learned it is not recalled, and fear generalizes to everything that recalls the trauma ("everywhere is dangerous"). Arousal and the stress axis stay switched on.' }
          },
          src: 'Fear learning and extinction is a classic neurocircuit model; hippocampus: Logue et al., 2018. The model is a theory.'
        },
        bulgular: {
          text: 'Color shows the direction and size of a finding: cool = smaller. Differences are group averages and small; imaging cannot diagnose an individual.',
          gruplar: [
            { name: 'Structure (ENIGMA-PGC)', text: 'ENIGMA-PGC (1,868 people, 794 with PTSD, 16 cohorts): in current PTSD the hippocampus is smaller than in trauma-exposed people without PTSD. The amygdala difference is not significant after correction for multiple comparisons.',
              items: [{ dtxt: 'd = −0.17', txt: 'Hippocampus smaller.' }, { dtxt: 'd = −0.11', txt: 'Amygdala smaller (not significant after correction).' }],
              src: 'Logue et al., 2018 (Biological Psychiatry).' }
          ]
        },
        belirtiler: [
          { id: 'yeniden', name: 'Re-experiencing', sub: 'Intrusive memories, nightmares, traumatic play', devre: 'Amygdala-hippocampus memory circuit',
            text: 'The trauma memory is stored together with its emotional charge; when the hippocampus cannot process its context and time well enough, the memory is relived as if it were "happening now". The book describes this pathway as "contextual generalization in PTSD".' },
          { id: 'uyarilma', name: 'Hyperarousal', sub: 'Startle, hypervigilance, poor sleep', devre: 'Arousal and stress axis',
            text: 'The locus coeruleus (noradrenaline) and the hypothalamus (stress axis, cortisol) keep the body constantly on alert; both are strengthened by signals from the amygdala.' },
          { id: 'kacinma', name: 'Avoidance and unextinguished fear', sub: 'Staying away from reminders', devre: 'Fronto-limbic extinction circuit',
            text: 'The ventromedial PFC brakes the amygdala by recalling learned extinction; in PTSD this brake is weak. Avoidance maintains fear because it leaves no chance for extinction learning.' },
          { id: 'dissosiyasyon', name: 'Dissociation and freezing', sub: 'Detachment, numbing, freezing', devre: 'PAG and vagal defense',
            text: 'When escape is impossible, the PAG triggers freezing and shutdown; the book explains dissociation through the PAG and the polyvagal hierarchy. In the dissociative subtype, the prefrontal cortex is proposed to over-suppress limbic responses.' }
        ],
        belirtilerSrc: 'Context: Liberzon and Abelson, 2016. Extinction: Milad et al., 2009 (16 patients). Stress response: Ulrich-Lai and Herman, 2009. Dissociative subtype: Lanius et al., 2010. Symptom-to-circuit matching is a theoretical framework.',
        tedavi: [
          { id: 'tobdt', name: 'Trauma-focused CBT', sub: 'First line in children and adolescents',
            text: 'Effective regardless of age, sex and trauma type (individual participant data meta-analysis). The trauma narrative and graded exposure use fear extinction (ventromedial PFC → amygdala) and rebuild a sense of safe context. The atlas draws the book\'s fronto-limbic pathway.',
            src: 'The Lancet Child & Adolescent Health, 2023 (individual participant data meta-analysis).' },
          { id: 'ssri', name: 'SSRIs', sub: 'Not first choice in children',
            text: 'In 131 children and adolescents, 10 weeks of sertraline did not beat placebo. SSRIs are effective in adults; in children they can be used for co-occurring depression and anxiety.',
            src: 'Robb et al., 2010.' },
          { id: 'emdr', name: 'EMDR', sub: 'Eye movement desensitization',
            text: 'In a network meta-analysis of 32 trials in children and young people it is effective, though less so than individual trauma-focused CBT; the evidence is of moderate to low quality. No brain pathway is drawn on this card.',
            src: 'Mavranezouli et al., 2020 (Journal of Child Psychology and Psychiatry).' },
          { id: 'pe', name: 'Prolonged exposure', sub: 'Adolescent version',
            text: 'In 61 girls aged 13–18 with PTSD related to sexual abuse it beat supportive counseling, and the difference lasted 12 months; community clinic counselors delivered it. It uses fear extinction (the book\'s fronto-limbic pathway in the atlas).',
            src: 'Foa et al., 2013 (JAMA).' }
        ]
      } },
    bipolar: { name: 'Bipolar Disorder', short: 'Bipolar',
      summary: 'Emotion regulation (amygdala, ventrolateral PFC) and reward circuits; swings between mania and depressive episodes.',
      mercek: {
        devre: {
          title: 'Emotion regulation and reward balance',
          text: 'The amygdala carries the intensity of an emotional stimulus; the ventrolateral PFC (inferior frontal gyrus) and OFC regulate it. The dopamine pathway from the VTA to the accumbens feeds reward and motivation. In bipolar disorder, the balance between these two systems shifts in both directions across episodes.',
          modes: {
            saglikli: { name: 'Balanced', text: 'The reward signal feeds motivation and the prefrontal cortex regulates emotional responses; mood rises and falls with events, then returns to balance.' },
            depresif: { name: 'Depressive episode', text: 'The reward pathway weakens (anhedonia, loss of energy) and negative emotion increases. In bipolar depression, antidepressants are not used alone.' },
            mani: { name: 'Mania model', text: 'The reward pathway overworks: motivation, energy and risk-taking rise and the need for sleep falls. The amygdala is more reactive and braking by the ventrolateral PFC and OFC is weak. Increased reward sensitivity in mania is a theory.' }
          },
          src: 'In ENIGMA, the largest cortical thinning is in the left pars opercularis (inferior frontal gyrus; Hibar et al., 2018). The reward sensitivity model is theoretical.'
        },
        bulgular: {
          text: 'Color shows the direction and size of a finding: cool = smaller or thinner. Differences are group averages and small; imaging cannot diagnose an individual.',
          gruplar: [
            { name: 'Subcortical (ENIGMA)', text: 'ENIGMA-BD (1,710 patients, 2,594 controls): hippocampus and thalamus smaller, lateral ventricles larger. Lithium users had larger thalamus (exploratory).',
              items: [{ dtxt: 'd = −0.23', txt: 'Hippocampus smaller.' }, { dtxt: 'd = −0.15', txt: 'Thalamus smaller.' }],
              src: 'Hibar et al., 2016 (Molecular Psychiatry).' },
            { name: 'Cortex (ENIGMA)', text: 'ENIGMA-BD (1,837 patients, 2,582 controls): frontal, temporal and parietal cortex thinner; thinning increases with illness duration. Lithium, antiepileptics and antipsychotics are associated with cortical measures.',
              items: [{ dtxt: 'd = −0.29', txt: 'Left pars opercularis (inferior frontal gyrus) thinner.' }, { dtxt: 'd = −0.29', txt: 'Left fusiform gyrus thinner.' },
                { dtxt: 'd = −0.28', txt: 'Left rostral middle frontal cortex thinner.' }],
              src: 'Hibar et al., 2018 (Molecular Psychiatry).' }
          ]
        },
        belirtiler: [
          { id: 'mani', name: 'Mania: increased energy and risk-taking', sub: 'Less need for sleep, speeding up, risky behavior', devre: 'Reward circuit',
            text: 'Reward anticipation and motivation rise; increased sensitivity of the reward circuit has been proposed. The book lists mania among the clinical correlates of the SEEKING system.' },
          { id: 'duygu', name: 'Mood swings and irritability', sub: 'Intense, rapidly changing emotion', devre: 'Emotion regulation circuit',
            text: 'The amygdala responds strongly to emotional stimuli; when braking by the ventrolateral PFC and OFC stays weak, emotion rises quickly.' },
          { id: 'depresif', name: 'Depressive episode', sub: 'Low mood, loss of energy', devre: 'Reward and negative-emotion circuits',
            text: 'In bipolar depression the reward response decreases and negative emotion increases. The first episode is often depressive, so family history matters in adolescent depression.' }
        ],
        belirtilerSrc: 'Emotion and reward circuits: Phillips and Swartz, 2014. Behavioral approach system: Urošević et al., 2008. Symptom-to-circuit matching is a theoretical framework.',
        tedavi: [
          { id: 'lityum', name: 'Lithium', sub: 'Mood stabilizer',
            text: 'FDA-approved in 2018 for acute mania and maintenance in ages 7–17 (including a placebo-controlled trial of 81 children). Blood levels, kidney and thyroid need monitoring. In ENIGMA, lithium users had larger thalamic volume (exploratory). The Turkish product information (KÜB) says it should not be used under age 12. Because the mechanism is not known for certain, no brain pathway or regional highlight is drawn on this card.',
            src: 'FDA, 2018; Hibar et al., 2016.' },
          { id: 'antipsikotik', name: 'Second-generation antipsychotics', sub: 'Acute mania',
            text: 'Approved for acute mania in adolescents (e.g., aripiprazole, risperidone, quetiapine); they block D2 receptors and dampen excess dopamine signaling in the reward pathway. Weight and metabolic side effects are monitored.',
            src: 'FDA approvals.' },
          { id: 'psikoegitim', name: 'Psychoeducation and family-focused therapy', sub: 'Preventing episodes',
            text: 'In a randomized trial of 58 adolescents, family-focused therapy brought faster recovery from depressive symptoms and fewer weeks in depressive episodes; time to recurrence and mania did not differ. No brain pathway is drawn on this card.',
            src: 'Miklowitz et al., 2008 (Archives of General Psychiatry).' },
          { id: 'lamotrijin', name: 'Lamotrigine', sub: 'Adjunctive maintenance',
            text: 'In a randomized withdrawal trial at ages 10–17 the primary analysis was not significant; a benefit appeared at ages 13–17 but not at 10–12. Skin reactions are monitored. No brain pathway is drawn on this card.',
            src: 'Findling et al., 2015 (JAACAP).' },
          { id: 'valproat', name: 'Valproate', sub: 'Weak evidence, high pregnancy risk',
            text: 'In 150 youths aged 10–17, extended-release divalproex did not reduce mania more than placebo over 4 weeks. Risk of malformations and developmental problems in pregnancy is high: in Europe it is contraindicated in girls and women able to have children unless a pregnancy prevention programme is followed, and it is not used in pregnancy for bipolar disorder. No brain pathway is drawn on this card.',
            src: 'Wagner et al., 2009 (JAACAP); EMA, 2018.' }
        ]
      } },
    sizofreni: { name: 'Schizophrenia', short: 'Schizophrenia',
      kitapta: [{}, { snippet: 'the indirect or direct target of most drugs used in psychiatry (stimulants, antipsychotics, even some antidepressants)' }],  // kitap alıntıları: data/en/divan.js'teki çeviride aranır (sırayla eşlenir)
      summary: 'Increased striatal dopamine, the hippocampus and prefrontal cortex; positive, negative and cognitive symptoms.',
      mercek: {
        devre: {
          title: 'Dopamine pathways and the hippocampus',
          text: 'Dopamine pathways run from the VTA to the accumbens and associative striatum (mesolimbic) and to the prefrontal cortex (mesocortical); the substantia nigra supplies the dorsal striatum. The hippocampus tunes the activity of VTA dopamine neurons through the accumbens and ventral pallidum.',
          modes: {
            saglikli: { name: 'Healthy', text: 'Dopamine signals salience only for important and unexpected events; the prefrontal cortex runs working memory and planning with enough dopamine.' },
            psikoz: { name: 'Psychosis model', text: 'Striatal dopamine synthesis and release are increased (meta-analysis of 44 studies, d = 0.79): neutral stimuli acquire excessive salience, and delusions and hallucinations grow from this experience. Hippocampal overactivity is proposed to drive dopamine neurons; dopamine reaching the prefrontal cortex is reduced (negative and cognitive symptoms).' }
          },
          src: 'Dopamine: Howes et al., 2012; aberrant salience: Kapur, 2003. The hippocampus-dopamine model is theoretical.'
        },
        bulgular: {
          text: 'Color shows the direction and size of a finding: warm = larger or more, cool = smaller. Differences are group averages; imaging cannot diagnose an individual.',
          gruplar: [
            { name: 'Subcortical (ENIGMA)', text: 'ENIGMA-SZ (2,028 patients, 2,540 controls): hippocampus, amygdala, thalamus and accumbens smaller; pallidum and lateral ventricles larger. The hippocampal difference is related to the proportion of unmedicated patients.',
              items: [{ dtxt: 'd = −0.46', txt: 'Hippocampus smaller (largest difference).' }, { dtxt: 'd = −0.31', txt: 'Amygdala smaller.' },
                { dtxt: 'd = −0.31', txt: 'Thalamus smaller.' }, { dtxt: 'd = −0.25', txt: 'Accumbens smaller.' }, { dtxt: 'd = +0.21', txt: 'Pallidum larger.' }],
              src: 'van Erp et al., 2016 (Molecular Psychiatry).' },
            { name: 'Dopamine (PET)', text: 'In a meta-analysis of 44 studies, presynaptic striatal dopamine function (synthesis and release) was clearly increased; the dopamine transporter was unchanged, and the small D2/3 receptor increase was not seen in unmedicated patients.',
              items: [{ dtxt: 'd = 0.79', txt: 'Presynaptic striatal dopamine function increased (most in the associative striatum).' }],
              src: 'Howes et al., 2012 (Archives of General Psychiatry).' }
          ]
        },
        belirtiler: [
          { id: 'olumlu', name: 'Hallucinations and delusions', sub: 'Positive symptoms', devre: 'Mesolimbic dopamine and aberrant salience',
            text: 'Dysregulated dopamine release lends salience to neutral stimuli; delusions are seen as an attempt to explain this experience. The superior temporal gyrus is also active in auditory hallucinations. For SEEKING, the book mentions "excessive attribution of meaning in psychosis".' },
          { id: 'olumsuz', name: 'Negative symptoms', sub: 'Reduced motivation and affect, social withdrawal', devre: 'Mesocortical pathway and reward',
            text: 'Reduced dopamine reaching the prefrontal cortex and changes in the reward circuit are linked to loss of motivation and affect; antipsychotics help little with these symptoms.' },
          { id: 'bilissel', name: 'Cognitive difficulties', sub: 'Working memory, attention, planning', devre: 'Dorsolateral prefrontal circuit',
            text: 'Working memory and planning rely on the DLPFC\'s loop with the striatum and thalamus; cognitive difficulties clearly limit everyday functioning.' }
        ],
        belirtilerSrc: 'Dopamine: Howes et al., 2012; Kapur, 2003; prefrontal dopamine: Slifstein et al., 2015 (20 patients). Hallucinations: Jardri et al., 2011. Cognition and functioning: Green, 1996. Symptom-to-circuit matching is a theoretical framework.',
        tedavi: [
          { id: 'antipsikotik', name: 'Antipsychotics', sub: 'D2 receptor blockade',
            text: 'Their common action is D2 receptor blockade; they reduce positive symptoms and have limited effect on negative and cognitive symptoms. Many second-generation antipsychotics are approved for adolescents; weight and metabolic side effects are monitored. The book describes the mesolimbic pathway as the target of antipsychotics.',
            src: 'Howes et al., 2012.' },
          { id: 'klozapin', name: 'Clozapine', sub: 'Treatment-resistant cases',
            text: 'The most effective option in treatment-resistant early-onset schizophrenia: in a double-blind trial of 39 adolescents, response was 66% with clozapine and 33% with olanzapine. Blood counts (neutropenia) and seizures are monitored. The Turkish product information (KÜB) says it should not be used under age 16.',
            src: 'Kumra et al., 2008 (Biological Psychiatry).' },
          { id: 'psikososyal', name: 'Family intervention and psychosocial support', sub: 'Reducing relapse',
            text: 'Family intervention reduces relapse in people with schizophrenia; in the 2024 update this short-term evidence has low certainty, and hospital admission showed little or no difference within a month. Most data come from adults. No brain pathway is drawn on this card.',
            src: 'Pharoah et al., 2010; Chien et al., 2024 (Cochrane).' },
          { id: 'lai', name: 'Long-acting injectable antipsychotics', sub: 'Relapse prevention',
            text: 'In a meta-analysis of 137 studies, the risk of hospitalization or relapse is lower than with oral antipsychotics (RR 0.88 in randomized trials). The quality of observational studies limits interpretation.',
            src: 'Kishimoto et al., 2021 (Lancet Psychiatry).' },
          { id: 'bdtp', name: 'CBT for psychosis', sub: 'Added support for symptoms',
            text: 'In a meta-analysis of 34 studies the effect is small (overall symptoms −0.33; positive −0.25; negative −0.13) and shrinks further when sources of bias, especially masking, are controlled for. No brain pathway is drawn on this card.',
            src: 'Jauhar et al., 2014 (British Journal of Psychiatry).' },
          { id: 'erken', name: 'Early intervention services', sub: 'First episode and early-phase psychosis',
            text: 'In 10 randomized trials (2,176 patients), early intervention reduces treatment discontinuation and hospitalization compared with usual care; the advantage appears up to 24 months, except for general and depressive symptom severity at 18–24 months. No brain pathway is drawn on this card.',
            src: 'Correll et al., 2018 (JAMA Psychiatry).' },
          { id: 'ksanomelin', name: 'Xanomeline-trospium', sub: 'Muscarinic M1 and M4 target',
            text: 'It targets M1 and M4 muscarinic receptors without blocking D2 receptors; the FDA approved it in 2024 for adults only. In a 5-week trial the PANSS score fell 8.4 points more than with placebo.',
            src: 'Kaul et al., 2024 (JAMA Psychiatry); FDA, 2024.' }
        ]
      } },
    borderline: { name: 'Borderline Personality Disorder', short: 'Borderline',
      summary: 'Emotion regulation circuit: an overactive amygdala and an underactive DLPFC in response to negative emotion; mentalizing and social pain.',
      mercek: {
        devre: {
          title: 'Emotion regulation circuit',
          text: 'The amygdala and insula carry the intensity of emotional stimuli and the anterior cingulate carries emotional pain; the DLPFC, OFC and medial PFC regulate this response from above. The temporoparietal junction and medial PFC support understanding one\'s own and others\' minds (mentalizing).',
          modes: {
            saglikli: { name: 'Healthy', text: 'When an emotional stimulus rises, the prefrontal cortex regulates it; the capacity to understand oneself and others holds up under stress.' },
            bpd: { name: 'Borderline model', text: 'In response to negative emotional stimuli, the left amygdala overreacts and the DLPFC underreacts (a strong accelerator and a weak brake on emotion); emotion rises quickly and fades slowly. Mentalizing collapses under intense emotion.' }
          },
          src: 'Schulze et al., 2016 (multimodal meta-analysis; findings inconsistent across studies). The mentalizing model is theoretical.'
        },
        bulgular: {
          text: 'Color shows the direction of a finding: warm = more active, cool = less active. Findings are inconsistent across studies; imaging cannot diagnose an individual.',
          gruplar: [
            { name: 'Function (meta-analysis)', text: '19 functional studies (281 patients, 293 controls): to negative emotional stimuli, the left amygdala and posterior cingulate are more active and the DLPFC on both sides is less active. Gray matter volume of the left amygdala is also smaller; amygdala hyperactivity is clearest in unmedicated samples.',
              items: [{ dtxt: 'more active', txt: 'Left amygdala overreacts; gray matter volume smaller.' }, { dtxt: 'more active', txt: 'Posterior cingulate more active.' },
                { dtxt: 'less active', txt: 'Dorsolateral PFC response blunted.' }],
              src: 'Schulze et al., 2016 (Biological Psychiatry).' }
          ]
        },
        belirtiler: [
          { id: 'duygu', name: 'Emotional instability', sub: 'Intense, rapidly changing emotion', devre: 'Emotion regulation circuit',
            text: 'The amygdala and insula carry intense emotion; when braking by the DLPFC stays weak, emotion rises quickly and fades slowly.' },
          { id: 'terk', name: 'Fear of abandonment and relationships', sub: 'Sensitivity to rejection', devre: 'Social pain circuit',
            text: 'Social exclusion activates the anterior cingulate and anterior insula in healthy volunteers; whether this is the same network as physical pain is debated. The book describes social pain and separation through the PANIC/GRIEF system.' },
          { id: 'durtu', name: 'Impulsivity and self-harm', sub: 'Sudden, risky behavior', devre: 'Orbitofrontal impulse control',
            text: 'The OFC weighs rewards and consequences and brakes impulses; when it stays weak, intense emotion turns into sudden action.' },
          { id: 'kimlik', name: 'Identity and mentalizing', sub: 'Understanding oneself and others', devre: 'Mentalizing network',
            text: 'The temporoparietal junction and medial PFC support understanding one\'s own and others\' mental states; mentalization-based treatment targets this capacity.' }
        ],
        belirtilerSrc: 'Emotion: Schulze et al., 2016. Social exclusion: Eisenberger et al., 2003; Cacioppo et al., 2013. Mentalizing: Fonagy and Luyten, 2009. Symptom-to-circuit matching is a theoretical framework.',
        tedavi: [
          { id: 'dbt', name: 'Dialectical behavior therapy (DBT-A)', sub: 'For adolescents',
            text: 'In 12–18-year-olds with repeated self-harm, a clear reduction in suicidal ideation and depression; the advantage in self-harm frequency lasted through 3-year follow-up. It teaches emotion regulation and distress tolerance skills and is thought to target prefrontal regulation pathways. Medication is not recommended for borderline disorder itself.',
            src: 'Mehlum et al., 2014; 2019. NICE CG78.' },
          { id: 'mbt', name: 'Mentalization-based treatment (MBT)', sub: 'Strengthening mentalizing',
            text: 'Strengthens understanding of one\'s own and others\' minds, especially under emotional intensity; after DBT it is the most studied treatment in adults, and studies in adolescents are ongoing.',
            src: 'Stoffers-Winterling et al., 2012; Storebø et al., 2020 (Cochrane).' },
          { id: 'ilacyeri', name: 'The place of medication', sub: 'No medication for the disorder itself',
            text: 'Cochrane 2022: no medication seems effective in specifically treating borderline pathology, and adverse event reporting is poor. Medication decisions for co-occurring conditions are assessed separately by the physician. No brain pathway is drawn on this card.',
            src: 'Stoffers-Winterling et al., 2022 (Cochrane).' },
          { id: 'sema', name: 'Schema therapy', sub: 'Adult trial',
            text: 'In a 3-year randomized trial of 88 patients, both treatments improved symptoms and quality of life; schema therapy outperformed transference-focused psychotherapy with less dropout. The trial is in adults. No brain pathway is drawn on this card.',
            src: 'Giesen-Bloo et al., 2006 (Archives of General Psychiatry).' }
        ]
      } },
    tik: { name: 'Tic Disorders and Tourette Syndrome', short: 'Tics',
      kitapta: [{ snippet: 'tics and premonitory urges (Chapter 9)' }, {}],  // kitap alıntıları: data/en/divan.js'teki çeviride aranır (sırayla eşlenir)
      summary: 'Sensorimotor cortico-striato-thalamo-cortical loop; the premonitory urge before tics is linked to the insula and supplementary motor area.',
      mercek: {
        devre: {
          title: 'Sensorimotor loop and premonitory urge',
          text: 'The supplementary motor area and motor cortex connect to the putamen, the putamen to the thalamus via the GPi, and the thalamus back to the cortex; this loop selects movement programs and runs habits. The substantia nigra tunes the loop with dopamine. The insula carries the uncomfortable urge that precedes a tic (premonitory urge); this pathway is drawn under Symptoms → Premonitory urge.',
          modes: {
            tipik: { name: 'Typical', text: 'The loop selects the intended movement and holds back the others; the urge signal is weak and movements are purposeful.' },
            tik: { name: 'Tic model', text: 'The loop\'s brakes are not selective enough: unwanted movement programs are released from time to time. The insula and anterior cingulate carry the premonitory urge (Symptoms); the tic briefly relieves the urge and reinforces the loop. That dopamine blockers reduce tics points to a role for dopamine.' }
          },
          src: 'Sensorimotor loop: Alexander et al., 1986. Premonitory urge: Bohlhalter et al., 2006 (10 adults). The model is a theory.'
        },
        bulgular: {
          text: 'Color shows the direction of a finding. Studies are small; imaging gives no diagnosis or prognosis for an individual.',
          gruplar: [
            { name: 'Structure', text: 'Children (under 14) with a smaller caudate on MRI had more severe tic and OCD symptoms about 7.5 years later (43 children). Caudate volume was not related to severity at the time of the scan.',
              items: [{ dtxt: 'inverse link', txt: 'Smaller caudate, more severe symptoms in early adulthood.' }],
              src: 'Bloch et al., 2005 (Neurology).' },
            { name: 'Function (before tics)', text: 'Just before a tic, the anterior cingulate, insula and supplementary motor area become active; during the tic, the sensorimotor cortex and cerebellum (10 adults, event-related fMRI).',
              items: [{ dtxt: 'before tic', txt: 'Insula: linked to the premonitory urge.' }, { dtxt: 'before tic', txt: 'Anterior cingulate: active before the tic.' },
                { dtxt: 'before tic', txt: 'Supplementary motor area: active before the tic.' }, { dtxt: 'during tic', txt: 'Motor cortex: active during the tic.' }],
              src: 'Bohlhalter et al., 2006 (Brain).' }
          ]
        },
        belirtiler: [
          { id: 'motor', name: 'Motor and vocal tics', sub: 'Blinking, head jerks, throat clearing', devre: 'Sensorimotor loop',
            text: 'The loop through the supplementary motor area, putamen, GPi and thalamus selects movement programs; when its brakes fall short, unwanted programs appear as tics.' },
          { id: 'durtu', name: 'Premonitory urge', sub: 'Uncomfortable sensation before a tic', devre: 'Insula and anterior cingulate',
            text: 'The insula and anterior cingulate carry a sensation of discomfort from inside the body; the tic relieves it for a short while. The book discusses "tics and premonitory urges" under the basal ganglia.' },
          { id: 'bastirma', name: 'Suppressing tics', sub: 'Holding them back for a while', devre: 'Prefrontal inhibition',
            text: 'Tics can be suppressed for a short time; activity in the basal ganglia and thalamus changes during suppression, and a pathway runs from the inferior frontal cortex to the subthalamic nucleus. CBIT uses this capacity with a competing response.' },
          { id: 'eslik', name: 'ADHD and OCD comorbidity', sub: 'Conditions that often co-occur', devre: 'Adjacent cortico-striatal loops',
            text: 'ADHD and OCD are common in tic disorders; these conditions share adjacent loops of the same cortico-striatal system.' }
        ],
        belirtilerSrc: 'Pre-tic network: Bohlhalter et al., 2006. Suppression: Peterson et al., 1998; inferior frontal-subthalamic pathway: Aron et al., 2007. Co-occurring conditions: Hirschtritt et al., 2015. Symptom-to-circuit matching is a theoretical framework.',
        tedavi: [
          { id: 'cbit', name: 'Comprehensive Behavioral Intervention for Tics (CBIT)', sub: 'First line',
            text: 'In 126 children (ages 9–17), clear improvement with CBIT was 52.5% versus about 18.5% with supportive therapy; the effect is similar to that in medication trials. Tic awareness and competing-response training, with parent involvement.',
            src: 'Piacentini et al., 2010 (JAMA).' },
          { id: 'aripiprazol', name: 'Aripiprazole and antipsychotics', sub: 'Modulate dopamine signaling',
            text: 'Aripiprazole is FDA-approved for Tourette syndrome in ages 6–18; it reduces tics by modulating dopamine signaling. Weight and metabolic side effects are monitored.',
            src: 'FDA label.' },
          { id: 'alfa2', name: 'Guanfacine and clonidine', sub: 'α2 agonists',
            text: 'In a meta-analysis of randomized trials the effect on tics was smaller than that of antipsychotics; it was medium to large in trials of people with both tics and ADHD, and small and non-significant in trials excluding ADHD.',
            src: 'Weisman et al., 2013 (Neuroscience and Biobehavioral Reviews).' },
          { id: 'dbs', name: 'Deep brain stimulation (thalamus)', sub: 'Severe, resistant adult cases',
            text: 'The centromedian-parafascicular complex of the thalamus or the GPi is targeted; in an international registry, tic severity fell at one year, while about a third of patients reported an adverse event; surgical technique and inclusion criteria varied. Not used in children.',
            src: 'Martinez-Ramirez et al., 2018 (JAMA Neurology). The electrode path is schematic.' }
        ]
      } }

  };
  // Türkçe veriye işle: düz alanlar yazılır; nesneler iç içe, diziler kimlikle (yoksa sırayla) eşlenir
  function merge(dst, src) {
    Object.keys(src).forEach((k) => {
      const v = src[k];
      if (Array.isArray(v) && Array.isArray(dst[k])) {
        v.forEach((x, i) => {
          const t = x && x.id ? dst[k].find((y) => y && y.id === x.id) : dst[k][i];
          if (t && typeof x === 'object') merge(t, x);
        });
      } else if (v && typeof v === 'object' && dst[k] && typeof dst[k] === 'object') merge(dst[k], v);
      else dst[k] = v;
    });
  }
  (window.TANILAR || []).forEach((d) => { if (EN[d.id]) merge(d, EN[d.id]); });
})();
