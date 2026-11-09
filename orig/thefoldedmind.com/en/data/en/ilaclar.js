/* İngilizce içerik: ilaçlar (data/ilaclar.js ile aynı kimlikler; kullanıcı 2026-10-16: "İngilizcelerini de çevir"). Ad, grup, sınıf,
   özet, hedef, etki ve yan etki metinleri, çocuk-ergen ve etkileşim maddeleri, kaynak. Türkçe verinin üzerine yazar: nesneler iç içe,
   yan etkiler kimlikle eşlenir; madde dizileri (cocuk, etkilesim) bütünüyle değişir, sayıları ve kanıt rozetleri Türkçeyle aynı olmalı
   (tools/check_data.js denetler). Türkçe metin değişince bu dosya da güncellenir. Ticari ad ve doz yazılmaz. */
(function () {
  'use strict';
  const G_SSRI = 'Antidepressants (SSRIs)', G_AP = 'Antipsychotics', G_ADHD = 'ADHD medications', SGA = 'Second-generation antipsychotic';
  const SSRI = {
    text: 'With the serotonin transporter (SERT) blocked, serotonin stays longer in the synapse: serotonin rises at the targets along the pathways leaving the raphe. SERT is densest in the raphe, thalamus, hypothalamus, striatum and amygdala (Beliveau et al., 2017). Emotional processing changes in the first week: the amygdala’s threat response falls before mood improves (Godlewska et al., 2012); the clinical response comes over weeks. [B]',
    hotTxt: 'where SERT is dense and serotonin rises most'
  };
  const AP_COLD = 'where D2 (striatum) and 5-HT2A (cortex) receptors are blocked';
  const EPS = (text) => ({ id: 'eps', name: 'Movement side effects', sub: 'Nigrostriatal pathway: SNc → putamen and caudate', text });
  const PRL = (text, ek) => Object.assign({ id: 'prl', name: 'Prolactin', sub: 'Tuberoinfundibular pathway: hypothalamus → pituitary', text }, ek || {});
  const H1 = (text) => ({ id: 'h1', name: 'Sleepiness, appetite and weight', sub: 'Histamine (H1) and 5-HT2C: hypothalamus', text,
    coldTxt: 'the wakefulness and appetite center where H1 receptors are blocked' });
  const EN = {
    fluoksetin: { name: 'Fluoxetine', grup: G_SSRI, sinif: 'SSRI',
      ozet: 'The only antidepressant significantly better than placebo in a network meta-analysis of child and adolescent depression (2016); its very long half-life and strong CYP2D6 inhibition call for care with interactions.',
      hedef: 'SERT blockade; at the lowest effective dose 76–85% of SERT is occupied (Meyer et al., 2004). [B]',
      etki: SSRI,
      cocuk: ['FDA: depression ages 8–18, OCD ages 7–17. EMA: from age 8, for moderate to severe depression that has not responded to psychotherapy, together with psychotherapy.',
        'Turkey: not recommended for children and adolescents under 18 in the Turkish product information (KÜB) of the generic products checked in October 2026 (the most recent from 2021); may differ by product.',
        'The only drug significantly better than placebo for child and adolescent depression in a network meta-analysis (Cipriani et al., 2016); in a later Cochrane network meta-analysis the benefit was small (Hetrick et al., 2021). [A]',
        'TADS: in adolescent depression, response at week 12 was 71% with fluoxetine + CBT and 35% with placebo. [A]',
        'Antidepressant boxed warning: suicidal thinking under age 25; close monitoring at the start. [A]'],
      etkilesim: ['Strong CYP2D6 inhibitor: raises the levels of atomoxetine, aripiprazole and risperidone; their labels call for dose adjustment. [A]',
        'Inhibition lasts 3 weeks or longer after stopping; wait at least 5 weeks before switching to an MAOI. [A]',
        'Serotonin syndrome: together with other serotonergic drugs.'],
      kaynak: 'Meyer et al., 2004; Beliveau et al., 2017; Godlewska et al., 2012; Cipriani et al., 2016; TADS, 2004; FDA label.' },

    sertralin: { name: 'Sertraline', grup: G_SSRI, sinif: 'SSRI',
      ozet: 'An SSRI with large trials in pediatric OCD (POTS, 2004) and anxiety (CAMS, 2008); in these trials the best results came from combining it with CBT.',
      hedef: 'SERT blockade; occupancy 76–85% at the lowest effective dose (Meyer et al., 2004). In an in vitro comparison, the antidepressant with the strongest DAT binding (Tatsumi et al., 1997; clinical significance unclear). [C]',
      etki: SSRI,
      cocuk: ['FDA and EMA: OCD ages 6–17. Turkey: in the product information (KÜB) checked in October 2026, OCD in children older than 6.',
        'POTS (OCD): remission 53.6% with combined treatment, 39.3% with CBT alone, 21.4% with sertraline alone, 3.6% with placebo. [A]',
        'CAMS (anxiety): much improved 80.7% with sertraline + CBT, 23.7% with placebo. [A]'],
      etkilesim: ['Moderate, dose-dependent CYP2D6 inhibition: the levels of atomoxetine, aripiprazole and risperidone may rise. [A]',
        'Itself broken down by CYP2C19 and CYP2B6; CPIC recommends genotype-guided starting doses. [A]'],
      kaynak: 'Meyer et al., 2004; Tatsumi et al., 1997; POTS, 2004; Walkup et al., 2008; Bousman et al., 2023; FDA label.' },

    essitalopram: { name: 'Escitalopram', grup: G_SSRI, sinif: 'SSRI',
      ozet: 'The active enantiomer of citalopram; approved in the US for adolescent depression and for generalized anxiety in children and adolescents; not recommended under 18 in the EU product information and the Turkish product information (KÜB) checked (October 2026).',
      hedef: 'SERT blockade; a single dose occupies 59–69% of SERT (Lundberg et al., 2007); with continued use 76–85%, as for the class. [B]',
      etki: SSRI,
      cocuk: ['FDA: depression ages 12–17 (2009), generalized anxiety age 7 and over (2023).',
        'EU product information and four Turkish product information documents (KÜB) checked in October 2026: should not be used under 18.',
        'Adolescent generalized anxiety: PARS reduction −8.65 vs −3.52; blood levels fell as CYP2C19 metabolism got faster (Strawn et al., 2020). [B]'],
      etkilesim: ['May moderately inhibit CYP2D6: desipramine exposure doubled (FDA label). [A]',
        'CYP2C19 genotype changes blood levels; CPIC recommends genotype-guided dosing. [A]',
        'Dose-dependent QT prolongation: caution with other QT-prolonging drugs (e.g. quetiapine) (Castro et al., 2013). [B]'],
      kaynak: 'Lundberg et al., 2007; Emslie et al., 2009; Strawn et al., 2020; Castro et al., 2013; Bousman et al., 2023; FDA label.' },

    klomipramin: { name: 'Clomipramine', grup: 'Antidepressants (tricyclic)', sinif: 'Tricyclic antidepressant',
      ozet: 'A tricyclic antidepressant that strongly inhibits serotonin reuptake; noradrenaline reuptake is inhibited by the drug and its active metabolite desmethylclomipramine. In Turkey it is indicated in children and adolescents only for OCD (ages 10–17); its anticholinergic, cardiac and seizure side effects call for monitoring.',
      hedef: 'SERT and NET blockade; according to the Turkish product information (KÜB), inhibition of serotonin reuptake is the more important. On PET, even a low dose occupied about 80% of thalamic SERT, and occupancy at clinical doses was also about 80% (Suhara et al., 2003). [B]',
      etki: { text: 'With the serotonin transporter (SERT) blocked, serotonin stays longer in the synapse: serotonin rises at the targets along the pathways leaving the raphe. SERT is densest in the raphe, thalamus, hypothalamus, striatum and amygdala (Beliveau et al., 2017). Noradrenaline reuptake is also inhibited: in monkeys, clomipramine and desmethylclomipramine occupied the noradrenaline transporter (NET) (Takano et al., 2011); in humans, NET is densest in the medial thalamus and around the locus coeruleus (Takano et al., 2008), so the noradrenaline pathway is drawn only from the locus coeruleus to the thalamus. The evidence for the noradrenaline part is weaker (level C: occupancy has not been measured in humans). [B]',
        hotTxt: 'where SERT is dense and serotonin rises most' },
      yanetki: [
        { id: 'ach', name: 'Anticholinergic effects', sub: 'No brain pathway drawn: no muscarinic occupancy measured in the brain',
          text: 'Dry mouth, constipation, blurred vision and micturition disorders are very common; it is not used in narrow-angle glaucoma or urinary retention (KÜB). [A]' },
        { id: 'h1', name: 'Sleepiness, appetite and weight', sub: 'No brain pathway drawn: no H1 occupancy measured in the brain',
          text: 'Sleepiness, increased appetite and weight gain are very common; the KÜB describes its antihistaminic effect. [A]' },
        { id: 'kalp', name: 'Heart rhythm and blood pressure', sub: 'No brain pathway drawn', text: 'Fast heart rate, palpitations and a drop in blood pressure on standing are common; conduction disorders and QT prolongation are very rare, with torsades de pointes in hypokalemia. Not used after a recent heart attack, in heart block or in arrhythmias (KÜB). [A]' },
        { id: 'nobet', name: 'Seizure threshold', sub: 'No brain pathway drawn', text: 'It lowers the seizure threshold, and the risk is dose-related; it is used with great caution in epilepsy and with predisposing factors (KÜB). [A]' },
        { id: 'asim', name: 'Overdose', sub: 'No brain pathway drawn', text: 'In overdose, cardiac and nervous system complications are the main danger; in children, accidental ingestion of any amount is serious and possibly fatal (KÜB). [A]' }],
      cocuk: ['Turkey (product information, KÜB, checked in November 2026): indicated for obsessive-compulsive syndromes at ages 10–17; there is no experience under age 10. Not recommended in children and adolescents for depressive states, phobias, panic attacks, cataplexy or chronic pain because evidence is insufficient.',
        'FDA: OCD from age 10.',
        'In an 8-week multicenter double-blind trial in child and adolescent OCD, CY-BOCS scores fell by 37% with clomipramine and by 8% with placebo (DeVeaugh-Geiss et al., 1992). [A]',
        'In a meta-analysis of 12 medication trials in pediatric OCD (1,044 participants), the drug effect was moderate (SMD 0.46); with other factors controlled, clomipramine was superior to each SSRI (Geller et al., 2003). [A]',
        'American Academy of Child and Adolescent Psychiatry guideline (AACAP, 2012): SSRIs are the first-line medications for pediatric OCD; before clomipramine, a child has a cardiac evaluation and ECG; with a partial response, adding clomipramine to an SSRI may help. [B]',
        'Antidepressant warning: in young people up to age 24, suicidal thinking and behavior may increase; close monitoring at the start and with dose changes (KÜB). [A]'],
      etkilesim: ['Not given together with MAO inhibitors or within 3 weeks before or after them; also contraindicated with reversible MAO-A inhibitors such as moclobemide (KÜB). [A]',
        'Serotonin syndrome can occur with SSRIs, SNRIs, other tricyclics and lithium; a 2–3 week washout is advised before or after fluoxetine (KÜB). [A]',
        'Broken down by CYP2D6: fluoxetine, paroxetine and sertraline raise its level; fluvoxamine raises clomipramine levels about 4-fold and desmethylclomipramine levels 2-fold (KÜB). [A]',
        'Should not be combined with drugs that prolong the QT interval (some antiarrhythmics, phenothiazines, pimozide, lithium); hypokalemia caused by diuretics raises the risk (KÜB). [A]',
        'Methylphenidate can raise tricyclic levels; with antipsychotics levels can rise and the seizure threshold can fall; it reduces the blood-pressure-lowering effect of clonidine (KÜB). [A]'],
      kaynak: 'Suhara et al., 2003; Takano et al., 2011 and 2008; Beliveau et al., 2017; DeVeaugh-Geiss et al., 1992; Geller et al., 2003; AACAP, 2012; FDA label; Turkish product information (KÜB).' },

    risperidon: { name: 'Risperidone', grup: G_AP, sinif: SGA,
      ozet: 'The first large multicenter trial for irritability in autism (RUPP, 2002) used this drug; strong D2 and very strong 5-HT2A blockade; among the clearest prolactin rises in pediatric studies.',
      hedef: 'D2 and 5-HT2A antagonist (also α1, α2, H1); D2 occupancy 63–89% with continued use (Kapur et al., 1999). [B]',
      etki: { text: 'With the D2 receptor blocked, the dopamine signal is cut in the striatum; in the cortex, 5-HT2A blockade is even stronger. The clinical response becomes clear once striatal D2 occupancy exceeds 65% (PET study with haloperidol; Kapur et al., 2000). [B]',
        coldTxt: AP_COLD },
      yanetki: [
        EPS('Above 78% D2 occupancy, the likelihood of parkinsonism, dystonia and akathisia rises markedly (PET study with haloperidol; Kapur et al., 2000). [B]'),
        PRL('With pituitary D2 receptors blocked, prolactin is released from its brake. In pediatric studies prolactin was elevated in 82–87% vs 3–7% on placebo (FDA label); in a network meta-analysis in children and adolescents, the largest rise among the drugs compared (+26.4 ng/mL; Rogdaki et al., 2024). [A]',
          { coldTxt: 'the pituitary D2 receptors of the tuberoinfundibular pathway are blocked' }),
        H1('+5.3 kg in ~11 weeks (Correll et al., 2009); sleepiness, increased appetite. [B]')],
      cocuk: ['FDA: irritability in autism ages 5–16, schizophrenia 13–17, bipolar I mania 10–17.',
        'EMA: short-term treatment of persistent aggression in conduct disorder in children over 5 with intellectual disability.',
        'Turkey: the originator’s product information (KÜB, 2011) lists, in children and adolescents, conduct and other disruptive behavior disorders in which aggressive or disruptive behavior is prominent (limited experience under 5), irritability associated with autistic disorder (aggression, self-injury, temper tantrums), bipolar mania (limited experience under 10) and schizophrenia in adolescents (limited experience under 13); generic products may differ.',
        'RUPP (autism, 101 children): response 69% vs 12%; weight +2.7 vs +0.8 kg. [A]'],
      etkilesim: ['Broken down by CYP2D6: fluoxetine and paroxetine raise its levels, carbamazepine lowers them; the label calls for dose adjustment. [A]',
        'Together with methylphenidate, a dose change of either drug may raise the risk of extrapyramidal symptoms (FDA label). [A]',
        'α1 blockade adds to the orthostatic effect of other blood-pressure-lowering drugs (e.g. guanfacine).'],
      kaynak: 'Kapur et al., 1999 and 2000; McCracken et al., 2002; Correll et al., 2009; Rogdaki et al., 2024; FDA label.' },

    aripiprazol: { name: 'Aripiprazole', grup: G_AP, sinif: 'D2 partial agonist',
      ozet: 'Occupies nearly all D2 receptors without fully blocking them: usually does not raise prolactin, among the lower metabolic burdens in its class; keep akathisia in mind.',
      hedef: 'D2 and 5-HT1A partial agonist, 5-HT2A antagonist; D2 occupancy 87% in the putamen, 93% in the caudate, 91% in the ventral striatum (Mamo et al., 2007). [B]',
      etki: { text: 'A partial agonist occupies the receptor but only half-activates it: it turns the signal down when dopamine is high and does not cut it off when dopamine is low. So even at very high occupancy not everyone has extrapyramidal effects: in a 12-patient PET study they were seen in 2 of 4 patients with occupancy above 90% (Mamo et al., 2007). In the cortex, 5-HT2A is blocked. [B]',
        coldTxt: 'where cortical 5-HT2A receptors are blocked (in the striatum the signal is turned down, not cut)' },
      yanetki: [
        EPS('Akathisia and other extrapyramidal complaints can occur; in a small PET study they were seen in 2 of 4 patients with D2 occupancy above 90% (Mamo et al., 2007). [B]'),
        PRL('Prolactin does not rise and may fall: −2.8 ng/mL vs placebo in children (Rogdaki et al., 2024). Partial agonism at the pituitary. [A]'),
        H1('Weight and metabolic burden among the lowest of the second-generation antipsychotics compared: +0.9 kg in short-term trials (Cohen et al., 2012), +4.4 kg in ~11 weeks with no significant metabolic change (Correll et al., 2009). [A]')],
      cocuk: ['FDA: schizophrenia 13–17, bipolar I 10–17, irritability in autism 6–17, Tourette’s 6–18.',
        'EMA: schizophrenia age 15 and over; bipolar I mania age 13 and over for up to 12 weeks. Turkey: the product information (KÜB) of the generic product checked lists only schizophrenia in adults and adolescents (13–17); not recommended under 13; may differ by product.',
        'Tourette’s (133 patients): difference in tic score −9.9 at the higher dose and −6.3 at the lower dose (Sallee et al., 2017). [B]'],
      etkilesim: ['Broken down by CYP2D6 and CYP3A4: halve the dose with a strong 2D6 (fluoxetine, paroxetine) or 3A4 inhibitor and in CYP2D6 poor metabolizers; increase it with 3A4 inducers (FDA label). [A]'],
      kaynak: 'Mamo et al., 2007; Findling et al., 2008 and 2009; Sallee et al., 2017; Cohen et al., 2012; Correll et al., 2009; Rogdaki et al., 2024; FDA label.' },

    klozapin: { name: 'Clozapine', grup: G_AP, sinif: SGA,
      ozet: 'Used in treatment-resistant schizophrenia; low D2 occupancy and high 5-HT2 occupancy. The risks of agranulocytosis and myocarditis call for close monitoring.',
      hedef: 'On PET, D2 occupancy 20–67%, 5-HT2 occupancy 84–94%, D1 occupancy 36–59%; this combination differs from classical antipsychotics (Nordström et al., 1995). [B]',
      etki: { text: 'Weakly blocks D2 (striatum) and strongly blocks 5-HT2 (cortex) receptors; its anticholinergic, antihistaminic and anti-alpha-adrenergic effects are also strong (Turkish product information, KÜB). [B]',
        coldTxt: 'where D2 (striatum) and 5-HT2 (cortex) receptors are blocked' },
      yanetki: [
        { id: 'kan', name: 'Agranulocytosis', sub: 'Blood count monitoring; no brain pathway drawn', text: 'It can cause agranulocytosis; frequency and fatality fall with white cell and absolute neutrophil monitoring (KÜB). [A]' },
        { id: 'kalp', name: 'Myocarditis and cardiomyopathy', sub: 'No brain pathway drawn', text: 'Myocarditis, sometimes fatal, has been reported; risk is highest in the first 2 months. If suspected, the drug is stopped without delay (KÜB). [A]' },
        H1('Sedation, weight gain, hyperglycemia and dyslipidemia are reported; severe hyperglycemia progressing to ketoacidosis occurs rarely (KÜB). [A]'),
        { id: 'ach', name: 'Anticholinergic effects', sub: 'Muscarinic receptors: cortex and thalamus',
          text: 'SPECT has shown that it blocks muscarinic receptors in the brain: receptor availability fell in the basal ganglia, cortex and pons, and most in the thalamus (8 patients; Raedler et al., 2003). Bowel problems ranging from constipation to obstruction and paralytic ileus come from receptors in the body, probably through its anticholinergic properties (KÜB). [B]',
          coldTxt: 'measured sites where muscarinic receptors are blocked (cortex and thalamus)' }],
      cocuk: ['Turkey (product information, KÜB, checked in November 2026): should not be used under age 16 because safety and efficacy are not established.',
        'In refractory early-onset schizophrenia, a double-blind trial of 39 adolescents found response at 12 weeks of 66%, versus 33% with high-dose olanzapine; the sample is small and the finding preliminary (Kumra et al., 2008). [B]'],
      etkilesim: ['Should not be combined with drugs known to cause agranulocytosis (KÜB). [A]',
        'With benzodiazepines or other psychotropics, especially during rapid titration, collapse and respiratory arrest have been reported (KÜB). [A]',
        'CYP1A2 inhibitors raise levels: caution with fluvoxamine; caffeine also raises plasma levels (KÜB). [A]'],
      kaynak: 'Nordström et al., 1995; Kumra et al., 2008; Raedler et al., 2003; Turkish product information (KÜB).' },

    lityum: { name: 'Lithium', grup: 'Mood stabilizers', sinif: 'Lithium salt',
      ozet: 'Used in bipolar disorder; found superior to placebo for mania at ages 7–17. Its narrow safety margin calls for blood level monitoring.',
      hedef: 'Alters sodium transport in nerve and muscle cells and affects serotonin and noradrenaline reuptake; its mechanism in mood is not known for certain (KÜB). [B]',
      etki: { text: 'No pathway or regional highlight is drawn because the mechanism is not known for certain. In ENIGMA, lithium users had a larger thalamus; this is an exploratory association and does not show causation (Hibar et al., 2016). [B]' },
      yanetki: [
        { id: 'izlem', name: 'Narrow safety margin', sub: 'Blood level, kidney, thyroid; no brain pathway drawn', text: 'Toxicity is closely tied to blood level and can occur at treatment doses. Blood level, kidney, thyroid and cardiac function are monitored regularly; it is contraindicated in severe renal failure (KÜB). [A]' },
        { id: 'gebelik', name: 'Pregnancy', sub: 'No brain pathway drawn', text: 'It crosses the placenta; cardiac anomalies, especially Ebstein anomaly, are reported. Effective contraception is advised for women able to have children (KÜB). [A]' }],
      cocuk: ['Turkey (product information, KÜB, checked in November 2026): should not be used under age 12 because efficacy and safety are unknown.',
        'FDA 2018: acute mania and maintenance at ages 7–17.',
        'In an 8-week placebo-controlled trial of 81 children aged 7–17, mania scores fell more (Findling et al., 2015). [A]'],
      etkilesim: ['NSAIDs, ACE inhibitors, angiotensin receptor antagonists, diuretics and some antibiotics (metronidazole, tetracyclines, co-trimoxazole, trimethoprim) can raise lithium levels (KÜB). [A]',
        'Serotonin syndrome can occur with SSRIs (KÜB). [A]',
        'Neurotoxicity can develop with CNS-active drugs even at normal blood levels; the KÜB advises avoiding use with antipsychotics. [A]'],
      kaynak: 'Findling et al., 2015 (Pediatrics); Hibar et al., 2016; FDA, 2018; Turkish product information (KÜB).' },

    olanzapin: { name: 'Olanzapine', grup: G_AP, sinif: SGA,
      ozet: 'Found effective in adolescent schizophrenia and bipolar mania; among the highest weight and metabolic burdens in pediatric comparisons, and the FDA label says other drugs may be considered first in adolescents. Broad receptor profile (5-HT2A, D2, H1, muscarinic, 5-HT2C).',
      hedef: '5-HT2A and D2 antagonist; strong H1 and muscarinic blockade; D2 occupancy 43–89% with continued use (Kapur et al., 1999). [B]',
      etki: { text: 'Blocks D2 (striatum) and 5-HT2A (cortex) receptors; because it also strongly blocks histamine H1 and muscarinic receptors, sleepiness, appetite and anticholinergic effects are prominent. [B]',
        coldTxt: AP_COLD },
      yanetki: [
        H1('The highest weight gain in studies comparing second-generation antipsychotics in children and adolescents: +8.5 kg in ~11 weeks, with rises in cholesterol, triglycerides and insulin (Correll et al., 2009; Sikich et al., 2008). In an analysis comparing antipsychotics, H1 affinity was the receptor affinity most strongly linked to weight gain (Kroeze et al., 2003). [B]'),
        { id: 'ach', name: 'Anticholinergic effects', sub: 'Muscarinic receptors: cortex and thalamus',
          text: 'SPECT has shown that it blocks muscarinic receptors in the brain: occupancy in the cortex, thalamus and pons (7 patients; Raedler et al., 2000). The cognitive load adds up with other anticholinergic drugs (see the acetylcholine card). Dry mouth and constipation come from receptors in the body. [B]',
          coldTxt: 'measured sites where muscarinic receptors are blocked (cortex and thalamus)' },
        EPS('Extrapyramidal effects rise with dose; the likelihood becomes clear once D2 occupancy exceeds 78% (PET study with haloperidol; Kapur et al., 2000). [B]')],
      cocuk: ['FDA: schizophrenia and bipolar I ages 13–17; the label says other drugs may be considered first in adolescents because of weight and lipid gains.',
        'Olanzapine + fluoxetine combination: bipolar I depression ages 10–17 (FDA).',
        'EMA: not recommended under 18. Turkey (product information, KÜB, checked in October 2026): indicated for schizophrenia ages 13–17, with a weight and lipid warning.',
        'In early-onset schizophrenia (TEOSS) not superior to molindone, with the heaviest metabolic burden (Sikich et al., 2008). [B]'],
      etkilesim: ['Broken down by CYP1A2: smoking lowers its levels and fluvoxamine raises them; carbamazepine increases its clearance by about 50% (FDA label). [A]',
        'Effects add up with other sedative and anticholinergic drugs.'],
      kaynak: 'Kapur et al., 1999 and 2000; Kroeze et al., 2003; Raedler et al., 2000; Correll et al., 2009; Sikich et al., 2008; Tohen et al., 2007; FDA label.' },

    ketiapin: { name: 'Quetiapine', grup: G_AP, sinif: SGA,
      ozet: 'Thought to bind D2 loosely and let go quickly (fast-dissociation hypothesis): few extrapyramidal effects and little prolactin rise; strong H1 and α1 blockade put sleepiness, heart rate and blood pressure effects in the foreground.',
      hedef: 'Strong H1 and α1 antagonist, weak and transient D2 (58–64% 2–3 hours after a dose, 0–27% at 12 hours; Kapur et al., 2000). [B]',
      etki: { text: 'Its strongest effect is histamine H1 blockade (sleepiness); D2 fills briefly and empties quickly, so extrapyramidal effects and prolactin rise are small. A metabolite also inhibits noradrenaline reuptake (Jensen et al., 2008). [B]',
        coldTxt: 'the wakefulness center where H1 receptors are blocked' },
      yanetki: [
        H1('Sleepiness is the most common side effect; in a network meta-analysis comparing 13 antipsychotics in children and adolescents, the largest increases in heart rate (+12.4/min), systolic blood pressure (+10 mmHg), BMI (+2.0) and fasting glucose (Rogdaki et al., 2024); +6.1 kg in ~11 weeks (Correll et al., 2009). [A]')],
      cocuk: ['FDA: schizophrenia 13–17, bipolar I mania 10–17; not approved under 10. EMA: not recommended under 18. Turkey: the originator’s product information (KÜB, 2022) does not recommend it under 18 because data in this age group are insufficient.',
        'In pediatric bipolar depression, extended-release quetiapine did not separate from placebo (Findling et al., 2014). [B]'],
      etkilesim: ['Broken down by CYP3A4: dose down to one sixth with strong inhibitors and up to five times with inducers (FDA label). [A]',
        'Caution with other QT-prolonging drugs; α1 blockade adds to blood-pressure-lowering drugs such as guanfacine.'],
      kaynak: 'Kapur et al., 2000; Jensen et al., 2008; Pathak et al., 2013; Findling et al., 2014; Rogdaki et al., 2024; FDA label.' },

    metilfenidat: { name: 'Methylphenidate', grup: G_ADHD, sinif: 'Stimulant',
      ozet: 'Blocks the dopamine and noradrenaline transporters; the preferred first-choice medication for children and adolescents with ADHD in a network meta-analysis (2018). Its effect starts within hours.',
      hedef: 'DAT and NET blockade; at therapeutic doses more than half of DAT is occupied (Volkow et al., 1998), and NET is also clearly occupied (Hannestad et al., 2010). [B]',
      etki: { text: 'With the transporters blocked, dopamine rises in the striatum and prefrontal cortex, and noradrenaline in the prefrontal cortex (Volkow et al., 2001). Stimulants increase activity in the right inferior frontal cortex and insula (Rubia et al., 2014) and bring the suppression of the default mode network during tasks toward normal (Peterson et al., 2009). [B]',
        hotTxt: 'where dopamine and noradrenaline rise (striatum and prefrontal cortex)' },
      cocuk: ['FDA and EMA: ADHD age 6 and over; also age 6 and over in the Turkish product information (KÜB) checked in October 2026.',
        'The preferred first choice for children and adolescents in a network meta-analysis; SMD −0.78 on clinician ratings (Cortese et al., 2018). [A]',
        'In randomized trials, the risk of new or worsening tics with stimulants did not differ from placebo (risk ratio 0.99; Cohen et al., 2015). [A]',
        'Long-term stimulant use was associated with ~2.5 cm lower adult height (MTA follow-up, observational; Swanson et al., 2017). [B]'],
      etkilesim: ['Contraindicated with an MAOI or within 14 days of stopping one (hypertensive crisis). [A]',
        'Together with risperidone, a risk of extrapyramidal symptoms when doses change (FDA label). [A]',
        'SSRIs: no separate item in the label’s interactions section, but postmarketing reports list serotonin syndrome in combination with serotonergic drugs (FDA label). Broken down by carboxylesterase, not by CYP enzymes.'],
      kaynak: 'Volkow et al., 1998 and 2001; Hannestad et al., 2010; Rubia et al., 2014; Peterson et al., 2009; Cortese et al., 2018; Cohen et al., 2015; FDA label.' },

    atomoksetin: { name: 'Atomoxetine', grup: G_ADHD, sinif: 'Selective noradrenaline reuptake inhibitor',
      ozet: 'Blocks only NET: raises noradrenaline and dopamine in the prefrontal cortex and leaves dopamine unchanged in the striatum and accumbens (animal data); considered to have low abuse potential, and its effect builds over weeks.',
      hedef: 'NET blockade (in vitro Ki: NET 5, SERT 77, DAT 1451 nM; Bymaster et al., 2002). [B]',
      etki: { text: 'Because NET also clears dopamine in the prefrontal cortex, blocking NET triples both noradrenaline and dopamine there; dopamine does not change in the striatum and accumbens (rat; Bymaster et al., 2002). The difference from methylphenidate: the pathways to the striatum stay quiet. [B]',
        hotTxt: 'noradrenaline and dopamine rising only in the prefrontal cortex' },
      cocuk: ['FDA and EMA: ADHD age 6 and over; also age 6 and over in the Turkish product information (KÜB) checked in October 2026.',
        'SMD −0.56 on clinician ratings; lower than stimulants (Cortese et al., 2018). [A]',
        'Boxed warning: suicidal thinking in short-term trials 0.37% vs 0% (Bangs et al., 2008). [A]'],
      etkilesim: ['Broken down by CYP2D6: strong 2D6 inhibitors (fluoxetine, paroxetine) increase exposure; the label advises a longer interval between dose increases, and genotype testing may be considered. [A]'],
      kaynak: 'Bymaster et al., 2002; Ding et al., 2014; Cortese et al., 2018; Bangs et al., 2008; Brown et al., 2019; FDA label.' },

    guanfasin: { name: 'Guanfacine', grup: G_ADHD, sinif: 'α2A agonist (extended release)',
      ozet: 'Acts on a receptor, not a transporter: by stimulating α2A receptors on the dendritic spines of prefrontal pyramidal neurons, it is thought to strengthen the working-memory network (monkey studies).',
      hedef: 'Selective α2A agonist; cAMP falls, HCN channels on the spines close and prefrontal network connectivity strengthens (Wang et al., 2007). [B]',
      etki: { text: 'Not the flow but the signal at the target is strengthened: when the α2A receptor in the prefrontal cortex is stimulated, connectivity in the working-memory network strengthens (Wang et al., 2007). Also used as an add-on to a stimulant. [B]',
        hotTxt: 'the prefrontal network where α2A receptors are stimulated' },
      cocuk: ['FDA: ages 6–17, alone (2009) and as an add-on to a stimulant (2011). EMA: ages 6–17, when stimulants are not suitable.',
        'Turkey: extended-release guanfacine has been licensed since 2023; according to the product information (KÜB) checked, it is indicated for ADHD at ages 6–17 when stimulants are not suitable, not tolerated or ineffective, as part of a comprehensive treatment program including psychological, educational and social measures.',
        'α2 agonists: SMD −0.59 alone and −0.36 as an add-on to a stimulant; sleepiness is common (Hirota et al., 2014). [A]'],
      etkilesim: ['Broken down by CYP3A4: dose down to 50% with strong and moderate inhibitors and up to double with inducers (FDA label). [A]',
        'Sleepiness adds up with sedatives and low blood pressure with other blood-pressure-lowering drugs; it is not stopped abruptly (rebound hypertension).'],
      kaynak: 'Wang et al., 2007; Biederman et al., 2008; Wilens et al., 2012; Hirota et al., 2014; FDA label.' }
  };
  // Türkçe veriye işle: düz alanlar ve metin dizileri yazılır; nesneler iç içe, nesne dizileri (yan etkiler) kimlikle eşlenir
  function merge(dst, src) {
    Object.keys(src).forEach((k) => {
      const v = src[k];
      if (Array.isArray(v) && Array.isArray(dst[k]) && v.some((x) => x && typeof x === 'object')) {
        v.forEach((x, i) => { const t = x.id ? dst[k].find((y) => y && y.id === x.id) : dst[k][i]; if (t) merge(t, x); });
      } else if (v && typeof v === 'object' && !Array.isArray(v) && dst[k] && typeof dst[k] === 'object') merge(dst[k], v);
      else dst[k] = Array.isArray(v) ? v.slice() : v;
    });
  }
  (window.ILACLAR || []).forEach((d) => { if (EN[d.id]) merge(d, EN[d.id]); });
})();
