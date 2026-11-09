/* Contenido en español: medicamentos (traducción de data/ilaclar.js). */
(function () {
  'use strict';
  const G_SSRI = "Antidepresivos (ISRS)", G_AP = "Antipsicóticos", G_ADHD = "Fármacos para el TDAH", SGA = "Antipsicótico de segunda generación";
  const SSRI = {
    text: "Con el transportador de serotonina (SERT) bloqueado, la serotonina permanece más tiempo en la sinapsis: la serotonina aumenta en las dianas de las vías que salen del rafe. El SERT es más denso en el rafe, el tálamo, el hipotálamo, el estriado y la amígdala (Beliveau et al., 2017). El procesamiento emocional cambia en la primera semana: la respuesta de amenaza de la amígdala disminuye antes de que mejore el estado de ánimo (Godlewska et al., 2012); la respuesta clínica llega a lo largo de semanas. [B]",
    hotTxt: "donde el SERT es denso y la serotonina aumenta más"
  };
  const AP_COLD = "donde se bloquean los receptores D2 (estriado) y 5-HT2A (corteza)";
  const EPS = (text) => ({ id: 'eps', name: "Efectos adversos motores", sub: "Vía nigroestriada: SNc → putamen y caudado", text });
  const PRL = (text, ek) => Object.assign({ id: 'prl', name: "Prolactina", sub: "Vía tuberoinfundibular: hipotálamo → hipófisis", text }, ek || {});
  const H1 = (text) => ({ id: 'h1', name: "Somnolencia, apetito y peso", sub: "Histamina (H1) y 5-HT2C: hipotálamo", text,
    coldTxt: "el centro de la vigilia y del apetito donde se bloquean los receptores H1" });

  const EN = {
  "fluoksetin": {
    "name": "Fluoxetina",
    "grup": "Antidepressants (SSRIs)",
    "sinif": "SSRI",
    "ozet": "El único antidepresivo significativamente mejor que el placebo en un metaanálisis en red de la depresión en niños y adolescentes (2016); su semivida muy larga y su potente inhibición del CYP2D6 exigen precaución con las interacciones.",
    "hedef": "Bloqueo del SERT; con la dosis eficaz más baja se ocupa el 76–85% del SERT (Meyer et al., 2004). [B]",
    "etki": {
      "text": "With the serotonin transporter (SERT) blocked, serotonin stays longer in the synapse: serotonin rises at the targets along the pathways leaving the raphe. SERT is densest in the raphe, thalamus, hypothalamus, striatum and amygdala (Beliveau et al., 2017). Emotional processing changes in the first week: the amygdala’s threat response falls before mood improves (Godlewska et al., 2012); the clinical response comes over weeks. [B]",
      "hotTxt": "where SERT is dense and serotonin rises most"
    },
    "cocuk": [
      "FDA: depresión de 8 a 18 años, TOC de 7 a 17. EMA: a partir de los 8 años, para la depresión moderada o grave que no ha respondido a la psicoterapia, junto con psicoterapia.",
      "Turquía: no recomendado en niños y adolescentes menores de 18 años en la información del producto turca (KÜB) de los productos genéricos verificados en octubre de 2026 (el más reciente, de 2021); puede variar según el producto.",
      "El único fármaco significativamente mejor que el placebo para la depresión en niños y adolescentes en un metaanálisis en red (Cipriani et al., 2016); en un metaanálisis en red posterior de Cochrane el beneficio fue pequeño (Hetrick et al., 2021). [A]",
      "TADS: en la depresión adolescente, la respuesta en la semana 12 fue del 71% con fluoxetina + TCC y del 35% con placebo. [A]",
      "Advertencia de recuadro de los antidepresivos: ideación suicida en menores de 25 años; vigilancia estrecha al inicio. [A]"
    ],
    "etkilesim": [
      "Inhibidor potente del CYP2D6: eleva los niveles de atomoxetina, aripiprazol y risperidona; sus etiquetas indican un ajuste de dosis. [A]",
      "La inhibición persiste 3 semanas o más tras suspenderlo; esperar al menos 5 semanas antes de cambiar a un IMAO. [A]",
      "Síndrome serotoninérgico: junto con otros fármacos serotoninérgicos."
    ],
    "kaynak": "Meyer et al., 2004; Beliveau et al., 2017; Godlewska et al., 2012; Cipriani et al., 2016; TADS, 2004; etiqueta de la FDA."
  },
  "sertralin": {
    "name": "Sertralina",
    "grup": "Antidepressants (SSRIs)",
    "sinif": "SSRI",
    "ozet": "Un ISRS con ensayos amplios en el TOC pediátrico (POTS, 2004) y en la ansiedad (CAMS, 2008); en estos ensayos los mejores resultados se obtuvieron al combinarlo con TCC.",
    "hedef": "Bloqueo del SERT; ocupación del 76–85% con la dosis eficaz más baja (Meyer et al., 2004). En una comparación in vitro, el antidepresivo con mayor unión al DAT (Tatsumi et al., 1997; significado clínico incierto). [C]",
    "etki": {
      "text": "With the serotonin transporter (SERT) blocked, serotonin stays longer in the synapse: serotonin rises at the targets along the pathways leaving the raphe. SERT is densest in the raphe, thalamus, hypothalamus, striatum and amygdala (Beliveau et al., 2017). Emotional processing changes in the first week: the amygdala’s threat response falls before mood improves (Godlewska et al., 2012); the clinical response comes over weeks. [B]",
      "hotTxt": "where SERT is dense and serotonin rises most"
    },
    "cocuk": [
      "FDA y EMA: TOC de 6 a 17 años. Turquía: en la información del producto (KÜB) verificada en octubre de 2026, TOC en niños mayores de 6 años.",
      "POTS (TOC): remisión del 53.6% con el tratamiento combinado, 39.3% con TCC sola, 21.4% con sertralina sola y 3.6% con placebo. [A]",
      "CAMS (ansiedad): mejoría importante en el 80.7% con sertralina + TCC, frente al 23.7% con placebo. [A]"
    ],
    "etkilesim": [
      "Inhibición moderada y dependiente de la dosis del CYP2D6: pueden elevarse los niveles de atomoxetina, aripiprazol y risperidona. [A]",
      "Se metaboliza por CYP2C19 y CYP2B6; el CPIC recomienda dosis iniciales guiadas por el genotipo. [A]"
    ],
    "kaynak": "Meyer et al., 2004; Tatsumi et al., 1997; POTS, 2004; Walkup et al., 2008; Bousman et al., 2023; etiqueta de la FDA."
  },
  "essitalopram": {
    "name": "Escitalopram",
    "grup": "Antidepressants (SSRIs)",
    "sinif": "SSRI",
    "ozet": "El enantiómero activo del citalopram; aprobado en EE. UU. para la depresión en adolescentes y para la ansiedad generalizada en niños y adolescentes; no recomendado en menores de 18 años en la información del producto de la UE ni en la información del producto turca (KÜB) verificada (octubre de 2026).",
    "hedef": "Bloqueo del SERT; una dosis única ocupa el 59–69% del SERT (Lundberg et al., 2007); con uso continuado, el 76–85%, como en el resto de la clase. [B]",
    "etki": {
      "text": "With the serotonin transporter (SERT) blocked, serotonin stays longer in the synapse: serotonin rises at the targets along the pathways leaving the raphe. SERT is densest in the raphe, thalamus, hypothalamus, striatum and amygdala (Beliveau et al., 2017). Emotional processing changes in the first week: the amygdala’s threat response falls before mood improves (Godlewska et al., 2012); the clinical response comes over weeks. [B]",
      "hotTxt": "where SERT is dense and serotonin rises most"
    },
    "cocuk": [
      "FDA: depresión de 12 a 17 años (2009), ansiedad generalizada a partir de los 7 años (2023).",
      "Información del producto de la UE y cuatro documentos de información del producto turca (KÜB) verificados en octubre de 2026: no debe usarse en menores de 18 años.",
      "Ansiedad generalizada en adolescentes: reducción de PARS de −8.65 frente a −3.52; los niveles plasmáticos disminuyeron a medida que se aceleraba el metabolismo por CYP2C19 (Strawn et al., 2020). [B]"
    ],
    "etkilesim": [
      "Puede inhibir moderadamente el CYP2D6: la exposición a la desipramina se duplicó (etiqueta de la FDA). [A]",
      "El genotipo de CYP2C19 modifica los niveles plasmáticos; el CPIC recomienda dosis guiadas por el genotipo. [A]",
      "Prolongación del QT dependiente de la dosis: precaución con otros fármacos que prolongan el QT (p. ej., quetiapina) (Castro et al., 2013). [B]"
    ],
    "kaynak": "Lundberg et al., 2007; Emslie et al., 2009; Strawn et al., 2020; Castro et al., 2013; Bousman et al., 2023; etiqueta de la FDA."
  },
  "klomipramin": {
    "name": "Clomipramina",
    "grup": "Antidepressants (tricyclic)",
    "sinif": "Tricyclic antidepressant",
    "ozet": "Un antidepresivo tricíclico que inhibe con fuerza la recaptación de serotonina; la recaptación de noradrenalina es inhibida por el fármaco y por su metabolito activo, la desmetilclomipramina. En Turquía está indicado en niños y adolescentes solo para el TOC (10–17 años); sus efectos anticolinérgicos, cardíacos y sobre el umbral convulsivo exigen monitorización.",
    "hedef": "Bloqueo del SERT y del NET; según la información del producto turca (KÜB), la inhibición de la recaptación de serotonina es la más importante. En PET, incluso una dosis baja ocupaba alrededor del 80% del SERT talámico, y la ocupación con dosis clínicas fue también de alrededor del 80% (Suhara et al., 2003). [B]",
    "etki": {
      "text": "With the serotonin transporter (SERT) blocked, serotonin stays longer in the synapse: serotonin rises at the targets along the pathways leaving the raphe. SERT is densest in the raphe, thalamus, hypothalamus, striatum and amygdala (Beliveau et al., 2017). Noradrenaline reuptake is also inhibited: in monkeys, clomipramine and desmethylclomipramine occupied the noradrenaline transporter (NET) (Takano et al., 2011); in humans, NET is densest in the medial thalamus and around the locus coeruleus (Takano et al., 2008), so the noradrenaline pathway is drawn only from the locus coeruleus to the thalamus. The evidence for the noradrenaline part is weaker (level C: occupancy has not been measured in humans). [B]",
      "hotTxt": "where SERT is dense and serotonin rises most"
    },
    "yanetki": [
      {
        "id": "ach",
        "name": "Efectos anticolinérgicos",
        "sub": "No se dibuja ninguna vía cerebral: no se ha medido la ocupación muscarínica en el cerebro",
        "text": "La sequedad de boca, el estreñimiento, la visión borrosa y los trastornos de la micción son muy frecuentes; no se utiliza en el glaucoma de ángulo estrecho ni en la retención urinaria (KÜB). [A]"
      },
      {
        "id": "h1",
        "name": "Somnolencia, apetito y peso",
        "sub": "No se dibuja ninguna vía cerebral: no se ha medido la ocupación H1 en el cerebro",
        "text": "La somnolencia, el aumento del apetito y la ganancia de peso son muy frecuentes; la KÜB describe su efecto antihistamínico. [A]"
      },
      {
        "id": "kalp",
        "name": "Ritmo cardíaco y presión arterial",
        "sub": "No se dibuja ninguna vía cerebral",
        "text": "La taquicardia, las palpitaciones y la caída de la presión arterial al ponerse de pie son frecuentes; los trastornos de la conducción y la prolongación del QT son muy raros, con torsades de pointes en la hipopotasemia. No se utiliza tras un infarto reciente, en el bloqueo cardíaco ni en las arritmias (KÜB). [A]"
      },
      {
        "id": "nobet",
        "name": "Umbral convulsivo",
        "sub": "No se dibuja ninguna vía cerebral",
        "text": "Disminuye el umbral convulsivo y el riesgo depende de la dosis; se utiliza con gran precaución en la epilepsia y en presencia de factores predisponentes (KÜB). [A]"
      },
      {
        "id": "asim",
        "name": "Sobredosis",
        "sub": "No se dibuja ninguna vía cerebral",
        "text": "En la sobredosis, las complicaciones cardíacas y del sistema nervioso son el peligro principal; en niños, la ingestión accidental de cualquier cantidad es grave y potencialmente mortal (KÜB). [A]"
      }
    ],
    "cocuk": [
      "Turquía (información del producto, KÜB, verificada en noviembre de 2026): indicado para los síndromes obsesivo-compulsivos entre los 10 y los 17 años; no hay experiencia en menores de 10 años. No recomendado en niños y adolescentes para estados depresivos, fobias, crisis de pánico, cataplejía ni dolor crónico por evidencia insuficiente.",
      "FDA: TOC a partir de los 10 años.",
      "En un ensayo multicéntrico doble ciego de 8 semanas en el TOC infantil y adolescente, las puntuaciones CY-BOCS disminuyeron un 37% con clomipramina y un 8% con placebo (DeVeaugh-Geiss et al., 1992). [A]",
      "En un metaanálisis de 12 ensayos de medicación en el TOC pediátrico (1,044 participantes), el efecto del fármaco fue moderado (SMD 0.46); controlando otros factores, la clomipramina fue superior a cada ISRS (Geller et al., 2003). [A]",
      "Guía de la American Academy of Child and Adolescent Psychiatry (AACAP, 2012): los ISRS son los fármacos de primera línea en el TOC pediátrico; antes de la clomipramina, el niño se somete a una evaluación cardíaca y a un ECG; con respuesta parcial, añadir clomipramina a un ISRS puede ayudar. [B]",
      "Advertencia de los antidepresivos: en jóvenes de hasta 24 años pueden aumentar la ideación y la conducta suicidas; vigilancia estrecha al inicio y con los cambios de dosis (KÜB). [A]"
    ],
    "etkilesim": [
      "No se administra junto con inhibidores de la MAO ni en las 3 semanas anteriores o posteriores a ellos; también está contraindicado con inhibidores reversibles de la MAO-A como la moclobemida (KÜB). [A]",
      "El síndrome serotoninérgico puede aparecer con ISRS, IRSN, otros tricíclicos y litio; se aconseja un periodo de lavado de 2–3 semanas antes o después de la fluoxetina (KÜB). [A]",
      "Se metaboliza por CYP2D6: la fluoxetina, la paroxetina y la sertralina elevan sus niveles; la fluvoxamina eleva los niveles de clomipramina unas 4 veces y los de desmetilclomipramina 2 veces (KÜB). [A]",
      "No debe combinarse con fármacos que prolongan el intervalo QT (algunos antiarrítmicos, fenotiazinas, pimozida, litio); la hipopotasemia causada por diuréticos aumenta el riesgo (KÜB). [A]",
      "El metilfenidato puede elevar los niveles de los tricíclicos; con antipsicóticos los niveles pueden aumentar y el umbral convulsivo puede descender; reduce el efecto hipotensor de la clonidina (KÜB). [A]"
    ],
    "kaynak": "Suhara et al., 2003; Takano et al., 2011 y 2008; Beliveau et al., 2017; DeVeaugh-Geiss et al., 1992; Geller et al., 2003; AACAP, 2012; etiqueta de la FDA; información del producto turca (KÜB)."
  },
  "risperidon": {
    "name": "Risperidona",
    "grup": "Antipsychotics",
    "sinif": "Second-generation antipsychotic",
    "ozet": "El primer gran ensayo multicéntrico para la irritabilidad en el autismo (RUPP, 2002) utilizó este fármaco; bloqueo fuerte de D2 y muy fuerte de 5-HT2A; entre los aumentos de prolactina más claros en estudios pediátricos.",
    "hedef": "Antagonista de D2 y 5-HT2A (también α1, α2, H1); ocupación de D2 63–89% con uso continuado (Kapur et al., 1999). [B]",
    "etki": {
      "text": "Con el receptor D2 bloqueado, la señal de dopamina se corta en el estriado; en la corteza, el bloqueo de 5-HT2A es aún más fuerte. La respuesta clínica se hace evidente una vez que la ocupación de D2 estriatal supera el 65% (estudio PET con haloperidol; Kapur et al., 2000). [B]",
      "coldTxt": "where D2 (striatum) and 5-HT2A (cortex) receptors are blocked"
    },
    "yanetki": [
      {
        "id": "eps",
        "name": "Efectos adversos motores",
        "sub": "Vía nigroestriada: SNc → putamen y caudado",
        "text": "Por encima del 78% de ocupación de D2, la probabilidad de parkinsonismo, distonía y acatisia aumenta notablemente (estudio PET con haloperidol; Kapur et al., 2000). [B]"
      },
      {
        "id": "prl",
        "name": "Prolactina",
        "sub": "Vía tuberoinfundibular: hipotálamo → hipófisis",
        "text": "Con los receptores D2 pituitarios bloqueados, la prolactina se libera de su freno. En estudios pediátricos, la prolactina fue elevada en el 82-87% frente al 3-7% en placebo (etiqueta de la FDA); en un metaanálisis de red en niños y adolescentes, el mayor aumento entre los medicamentos comparados (+26.4 ng/mL; Rogdaki et al., 2024). [A]",
        "coldTxt": "los receptores D2 pituitarios de la vía tuberoinfundibular están bloqueados"
      },
      {
        "id": "h1",
        "name": "Somnolencia, apetito y peso",
        "sub": "Histamina (H1) y 5-HT2C: hipotálamo",
        "text": "+5.3 kg en ~11 semanas (Correll et al., 2009); somnolencia, aumento del apetito. [B]",
        "coldTxt": "el centro de la vigilia y del apetito donde se bloquean los receptores H1"
      }
    ],
    "cocuk": [
      "FDA: irritabilidad en autismo de 5 a 16 años, esquizofrenia de 13 a 17, manía bipolar I de 10 a 17.",
      "EMA: tratamiento a corto plazo de la agresión persistente en trastornos de conducta en niños mayores de 5 con discapacidad intelectual.",
      "Turquía: la información del producto del originador (KÜB, 2011) enumera, en niños y adolescentes, trastornos de comportamiento disruptivo y otros en los que el comportamiento agresivo o disruptivo es prominente (experiencia limitada bajo los 5), irritabilidad asociada con el trastorno autista (agresión, autolesiones, rabietas), manía bipolar (experiencia limitada bajo los 10) y esquizofrenia en adolescentes (experiencia limitada bajo los 13); los productos genéricos pueden diferir.",
      "RUPP (autismo, 101 niños): respuesta del 69% frente al 12%; peso +2.7 frente a +0.8 kg. [A]"
    ],
    "etkilesim": [
      "Descompuesto por CYP2D6: la fluoxetina y la paroxetina aumentan sus niveles, la carbamazepina los disminuye; la etiqueta llama a un ajuste de dosis. [A]",
      "Junto con el metilfenidato, un cambio de dosis de alguno de los medicamentos puede aumentar el riesgo de síntomas extrapiramidales (etiqueta de la FDA). [A]",
      "El bloqueo α1 se suma al efecto ortostático de otros medicamentos que reducen la presión arterial (p. ej., guanfacina)."
    ],
    "kaynak": "Kapur et al., 1999 y 2000; McCracken et al., 2002; Correll et al., 2009; Rogdaki et al., 2024; etiqueta de la FDA."
  },
  "aripiprazol": {
    "name": "Aripiprazol",
    "grup": "Antipsychotics",
    "sinif": "D2 partial agonist",
    "ozet": "Ocupa casi todos los receptores D2 sin bloquearlos por completo: por lo general no eleva la prolactina y presenta una de las cargas metabólicas más bajas de su clase; conviene tener presente la acatisia.",
    "hedef": "Agonista parcial de D2 y 5-HT1A, antagonista de 5-HT2A; ocupación de D2 del 87% en el putamen, 93% en el caudado y 91% en el estriado ventral (Mamo et al., 2007). [B]",
    "etki": {
      "text": "A partial agonist occupies the receptor but only half-activates it: it turns the signal down when dopamine is high and does not cut it off when dopamine is low. So even at very high occupancy not everyone has extrapyramidal effects: in a 12-patient PET study they were seen in 2 of 4 patients with occupancy above 90% (Mamo et al., 2007). In the cortex, 5-HT2A is blocked. [B]",
      "coldTxt": "where cortical 5-HT2A receptors are blocked (in the striatum the signal is turned down, not cut)"
    },
    "yanetki": [
      {
        "id": "eps",
        "name": "Efectos adversos motores",
        "sub": "Vía nigroestriada: SNc → putamen y caudado",
        "text": "Pueden aparecer acatisia y otras molestias extrapiramidales; en un pequeño estudio PET se observaron en 2 de 4 pacientes con ocupación de D2 superior al 90% (Mamo et al., 2007). [B]"
      },
      {
        "id": "prl",
        "name": "Prolactina",
        "sub": "Vía tuberoinfundibular: hipotálamo → hipófisis",
        "text": "La prolactina no aumenta y puede descender: −2.8 ng/mL frente a placebo en niños (Rogdaki et al., 2024). Agonismo parcial en la hipófisis. [A]"
      },
      {
        "id": "h1",
        "name": "Somnolencia, apetito y peso",
        "sub": "Histamina (H1) y 5-HT2C: hipotálamo",
        "text": "Carga de peso y metabólica entre las más bajas de los antipsicóticos de segunda generación comparados: +0.9 kg en ensayos a corto plazo (Cohen et al., 2012), +4.4 kg en ~11 semanas sin cambios metabólicos significativos (Correll et al., 2009). [A]",
        "coldTxt": "el centro de la vigilia y del apetito donde se bloquean los receptores H1"
      }
    ],
    "cocuk": [
      "FDA: esquizofrenia de 13 a 17 años, bipolar I de 10 a 17, irritabilidad en el autismo de 6 a 17, Tourette de 6 a 18.",
      "EMA: esquizofrenia a partir de los 15 años; manía bipolar I a partir de los 13 años, hasta 12 semanas. Turquía: la información del producto (KÜB) del producto genérico verificado solo recoge esquizofrenia en adultos y adolescentes (13–17); no recomendado en menores de 13; puede variar según el producto.",
      "Tourette (133 pacientes): diferencia en la puntuación de tics de −9.9 con la dosis alta y de −6.3 con la dosis baja (Sallee et al., 2017). [B]"
    ],
    "etkilesim": [
      "Se metaboliza por CYP2D6 y CYP3A4: reducir la dosis a la mitad con un inhibidor potente de 2D6 (fluoxetina, paroxetina) o de 3A4 y en metabolizadores lentos de CYP2D6; aumentarla con inductores de 3A4 (etiqueta de la FDA). [A]"
    ],
    "kaynak": "Mamo et al., 2007; Findling et al., 2008 y 2009; Sallee et al., 2017; Cohen et al., 2012; Correll et al., 2009; Rogdaki et al., 2024; etiqueta de la FDA."
  },
  "klozapin": {
    "name": "Clozapina",
    "grup": "Antipsychotics",
    "sinif": "Second-generation antipsychotic",
    "ozet": "Se usa en la esquizofrenia resistente al tratamiento; baja ocupación de D2 y alta ocupación de 5-HT2. Los riesgos de agranulocitosis y miocarditis exigen una monitorización estrecha.",
    "hedef": "En PET, ocupación de D2 del 20–67%, de 5-HT2 del 84–94% y de D1 del 36–59%; esta combinación difiere de la de los antipsicóticos clásicos (Nordström et al., 1995). [B]",
    "etki": {
      "text": "Weakly blocks D2 (striatum) and strongly blocks 5-HT2 (cortex) receptors; its anticholinergic, antihistaminic and anti-alpha-adrenergic effects are also strong (Turkish product information, KÜB). [B]",
      "coldTxt": "where D2 (striatum) and 5-HT2 (cortex) receptors are blocked"
    },
    "yanetki": [
      {
        "id": "kan",
        "name": "Agranulocitosis",
        "sub": "Monitorización del hemograma; no se dibuja ninguna vía cerebral",
        "text": "Puede causar agranulocitosis; la frecuencia y la mortalidad disminuyen con la monitorización de los leucocitos y de los neutrófilos absolutos (KÜB). [A]"
      },
      {
        "id": "kalp",
        "name": "Miocarditis y miocardiopatía",
        "sub": "No se dibuja ninguna vía cerebral",
        "text": "Se han notificado miocarditis, a veces mortales; el riesgo es máximo en los 2 primeros meses. Si se sospecha, se suspende el fármaco sin demora (KÜB). [A]"
      },
      {
        "id": "h1",
        "name": "Somnolencia, apetito y peso",
        "sub": "Histamina (H1) y 5-HT2C: hipotálamo",
        "text": "Se notifican sedación, ganancia de peso, hiperglucemia y dislipidemia; rara vez aparece una hiperglucemia grave que progresa a cetoacidosis (KÜB). [A]",
        "coldTxt": "el centro de la vigilia y del apetito donde se bloquean los receptores H1"
      },
      {
        "id": "ach",
        "name": "Efectos anticolinérgicos",
        "sub": "Receptores muscarínicos: corteza y tálamo",
        "text": "La SPECT ha demostrado que bloquea los receptores muscarínicos del cerebro: la disponibilidad de receptores disminuyó en los ganglios basales, la corteza y el puente, y sobre todo en el tálamo (8 pacientes; Raedler et al., 2003). Los problemas intestinales, desde el estreñimiento hasta la obstrucción y el íleo paralítico, proceden de receptores del organismo, probablemente por sus propiedades anticolinérgicas (KÜB). [B]",
        "coldTxt": "sitios medidos donde se bloquean los receptores muscarínicos (corteza y tálamo)"
      }
    ],
    "cocuk": [
      "Turquía (información del producto, KÜB, verificada en noviembre de 2026): no debe usarse en menores de 16 años porque no se han establecido la seguridad ni la eficacia.",
      "En la esquizofrenia de inicio temprano refractaria, un ensayo doble ciego de 39 adolescentes halló una respuesta a las 12 semanas del 66%, frente al 33% con olanzapina a dosis alta; la muestra es pequeña y el hallazgo preliminar (Kumra et al., 2008). [B]"
    ],
    "etkilesim": [
      "No debe combinarse con fármacos que se sabe que causan agranulocitosis (KÜB). [A]",
      "Con benzodiacepinas u otros psicótropos, especialmente durante la titulación rápida, se han notificado colapso y parada respiratoria (KÜB). [A]",
      "Los inhibidores del CYP1A2 elevan los niveles: precaución con la fluvoxamina; la cafeína también eleva los niveles plasmáticos (KÜB). [A]"
    ],
    "kaynak": "Nordström et al., 1995; Kumra et al., 2008; Raedler et al., 2003; información del producto turca (KÜB)."
  },
  "lityum": {
    "name": "Litio",
    "grup": "Mood stabilizers",
    "sinif": "Lithium salt",
    "ozet": "Se usa en el trastorno bipolar; superior al placebo para la manía entre los 7 y los 17 años. Su estrecho margen de seguridad exige monitorizar los niveles plasmáticos.",
    "hedef": "Altera el transporte de sodio en las células nerviosas y musculares y afecta a la recaptación de serotonina y noradrenalina; su mecanismo sobre el estado de ánimo no se conoce con certeza (KÜB). [B]",
    "etki": {
      "text": "No pathway or regional highlight is drawn because the mechanism is not known for certain. In ENIGMA, lithium users had a larger thalamus; this is an exploratory association and does not show causation (Hibar et al., 2016). [B]"
    },
    "yanetki": [
      {
        "id": "izlem",
        "name": "Margen de seguridad estrecho",
        "sub": "Nivel plasmático, riñón, tiroides; no se dibuja ninguna vía cerebral",
        "text": "La toxicidad está estrechamente ligada al nivel plasmático y puede aparecer con dosis terapéuticas. Se monitorizan de forma regular el nivel plasmático y las funciones renal, tiroidea y cardíaca; está contraindicado en la insuficiencia renal grave (KÜB). [A]"
      },
      {
        "id": "gebelik",
        "name": "Embarazo",
        "sub": "No se dibuja ninguna vía cerebral",
        "text": "Atraviesa la placenta; se han notificado anomalías cardíacas, en especial la anomalía de Ebstein. Se aconseja una anticoncepción eficaz en mujeres con capacidad de gestación (KÜB). [A]"
      }
    ],
    "cocuk": [
      "Turquía (información del producto, KÜB, verificada en noviembre de 2026): no debe usarse en menores de 12 años porque se desconocen la eficacia y la seguridad.",
      "FDA 2018: manía aguda y mantenimiento entre los 7 y los 17 años.",
      "En un ensayo controlado con placebo de 8 semanas con 81 niños de 7 a 17 años, las puntuaciones de manía disminuyeron más (Findling et al., 2015). [A]"
    ],
    "etkilesim": [
      "Los AINE, los IECA, los antagonistas de los receptores de angiotensina, los diuréticos y algunos antibióticos (metronidazol, tetraciclinas, cotrimoxazol, trimetoprim) pueden elevar los niveles de litio (KÜB). [A]",
      "El síndrome serotoninérgico puede aparecer con ISRS (KÜB). [A]",
      "Puede desarrollarse neurotoxicidad con fármacos activos sobre el SNC incluso con niveles plasmáticos normales; la KÜB aconseja evitar su uso con antipsicóticos. [A]"
    ],
    "kaynak": "Findling et al., 2015 (Pediatrics); Hibar et al., 2016; FDA, 2018; información del producto turca (KÜB)."
  },
  "olanzapin": {
    "name": "Olanzapina",
    "grup": "Antipsychotics",
    "sinif": "Second-generation antipsychotic",
    "ozet": "Eficaz en la esquizofrenia y en la manía bipolar en adolescentes; una de las cargas de peso y metabólicas más altas en las comparaciones pediátricas, y la etiqueta de la FDA señala que en adolescentes pueden considerarse primero otros fármacos. Perfil amplio de receptores (5-HT2A, D2, H1, muscarínicos, 5-HT2C).",
    "hedef": "Antagonista de 5-HT2A y D2; bloqueo fuerte de H1 y muscarínico; ocupación de D2 del 43–89% con uso continuado (Kapur et al., 1999). [B]",
    "etki": {
      "text": "Blocks D2 (striatum) and 5-HT2A (cortex) receptors; because it also strongly blocks histamine H1 and muscarinic receptors, sleepiness, appetite and anticholinergic effects are prominent. [B]",
      "coldTxt": "where D2 (striatum) and 5-HT2A (cortex) receptors are blocked"
    },
    "yanetki": [
      {
        "id": "h1",
        "name": "Somnolencia, apetito y peso",
        "sub": "Histamina (H1) y 5-HT2C: hipotálamo",
        "text": "La mayor ganancia de peso en los estudios que comparan antipsicóticos de segunda generación en niños y adolescentes: +8.5 kg en ~11 semanas, con aumentos de colesterol, triglicéridos e insulina (Correll et al., 2009; Sikich et al., 2008). En un análisis que comparó antipsicóticos, la afinidad por H1 fue la afinidad de receptor más fuertemente ligada a la ganancia de peso (Kroeze et al., 2003). [B]",
        "coldTxt": "el centro de la vigilia y del apetito donde se bloquean los receptores H1"
      },
      {
        "id": "ach",
        "name": "Efectos anticolinérgicos",
        "sub": "Receptores muscarínicos: corteza y tálamo",
        "text": "La SPECT ha demostrado que bloquea los receptores muscarínicos del cerebro: ocupación en la corteza, el tálamo y el puente (7 pacientes; Raedler et al., 2000). La carga cognitiva se suma con otros fármacos anticolinérgicos (véase la tarjeta de la acetilcolina). La sequedad de boca y el estreñimiento proceden de receptores del organismo. [B]",
        "coldTxt": "sitios medidos donde se bloquean los receptores muscarínicos (corteza y tálamo)"
      },
      {
        "id": "eps",
        "name": "Efectos adversos motores",
        "sub": "Vía nigroestriada: SNc → putamen y caudado",
        "text": "Los efectos extrapiramidales aumentan con la dosis; la probabilidad se hace evidente cuando la ocupación de D2 supera el 78% (estudio PET con haloperidol; Kapur et al., 2000). [B]"
      }
    ],
    "cocuk": [
      "FDA: esquizofrenia y bipolar I de 13 a 17 años; la etiqueta señala que en adolescentes pueden considerarse primero otros fármacos por las ganancias de peso y de lípidos.",
      "Combinación de olanzapina + fluoxetina: depresión bipolar I de 10 a 17 años (FDA).",
      "EMA: no recomendado en menores de 18 años. Turquía (información del producto, KÜB, verificada en octubre de 2026): indicado para la esquizofrenia de 13 a 17 años, con una advertencia sobre el peso y los lípidos.",
      "En la esquizofrenia de inicio temprano (TEOSS) no fue superior a la molindona y presentó la carga metabólica más alta (Sikich et al., 2008). [B]"
    ],
    "etkilesim": [
      "Se metaboliza por CYP1A2: fumar reduce sus niveles y la fluvoxamina los eleva; la carbamazepina aumenta su aclaramiento en torno al 50% (etiqueta de la FDA). [A]",
      "Los efectos se suman con otros fármacos sedantes y anticolinérgicos."
    ],
    "kaynak": "Kapur et al., 1999 y 2000; Kroeze et al., 2003; Raedler et al., 2000; Correll et al., 2009; Sikich et al., 2008; Tohen et al., 2007; etiqueta de la FDA."
  },
  "ketiapin": {
    "name": "Quetiapina",
    "grup": "Antipsychotics",
    "sinif": "Second-generation antipsychotic",
    "ozet": "Se piensa que se une a D2 de forma laxa y lo libera con rapidez (hipótesis de disociación rápida): pocos efectos extrapiramidales y escaso aumento de la prolactina; el fuerte bloqueo de H1 y α1 pone en primer plano la somnolencia y los efectos sobre la frecuencia cardíaca y la presión arterial.",
    "hedef": "Antagonista fuerte de H1 y α1, con un efecto débil y transitorio sobre D2 (58–64% a las 2–3 horas de una dosis y 0–27% a las 12 horas; Kapur et al., 2000). [B]",
    "etki": {
      "text": "Its strongest effect is histamine H1 blockade (sleepiness); D2 fills briefly and empties quickly, so extrapyramidal effects and prolactin rise are small. A metabolite also inhibits noradrenaline reuptake (Jensen et al., 2008). [B]",
      "coldTxt": "the wakefulness center where H1 receptors are blocked"
    },
    "yanetki": [
      {
        "id": "h1",
        "name": "Somnolencia, apetito y peso",
        "sub": "Histamina (H1) y 5-HT2C: hipotálamo",
        "text": "La somnolencia es el efecto adverso más frecuente; en un metaanálisis en red que comparó 13 antipsicóticos en niños y adolescentes, los mayores aumentos de la frecuencia cardíaca (+12.4/min), de la presión arterial sistólica (+10 mmHg), del IMC (+2.0) y de la glucosa en ayunas (Rogdaki et al., 2024); +6.1 kg en ~11 semanas (Correll et al., 2009). [A]",
        "coldTxt": "el centro de la vigilia y del apetito donde se bloquean los receptores H1"
      }
    ],
    "cocuk": [
      "FDA: esquizofrenia de 13 a 17 años, manía bipolar I de 10 a 17; no aprobado en menores de 10. EMA: no recomendado en menores de 18. Turquía: la información del producto del originador (KÜB, 2022) no lo recomienda en menores de 18 porque los datos en este grupo de edad son insuficientes.",
      "En la depresión bipolar pediátrica, la quetiapina de liberación prolongada no se diferenció del placebo (Findling et al., 2014). [B]"
    ],
    "etkilesim": [
      "Se metaboliza por CYP3A4: reducir la dosis a una sexta parte con inhibidores potentes y aumentarla hasta cinco veces con inductores (etiqueta de la FDA). [A]",
      "Precaución con otros fármacos que prolongan el QT; el bloqueo α1 se suma a los fármacos hipotensores como la guanfacina."
    ],
    "kaynak": "Kapur et al., 2000; Jensen et al., 2008; Pathak et al., 2013; Findling et al., 2014; Rogdaki et al., 2024; etiqueta de la FDA."
  },
  "metilfenidat": {
    "name": "Metilfenidato",
    "grup": "ADHD medications",
    "sinif": "Stimulant",
    "ozet": "Bloquea los transportadores de dopamina y noradrenalina; fármaco de primera elección preferente para niños y adolescentes con TDAH en un metaanálisis en red (2018). Su efecto comienza en pocas horas.",
    "hedef": "Bloqueo del DAT y del NET; con dosis terapéuticas se ocupa más de la mitad del DAT (Volkow et al., 1998), y el NET también se ocupa de forma clara (Hannestad et al., 2010). [B]",
    "etki": {
      "text": "With the transporters blocked, dopamine rises in the striatum and prefrontal cortex, and noradrenaline in the prefrontal cortex (Volkow et al., 2001). Stimulants increase activity in the right inferior frontal cortex and insula (Rubia et al., 2014) and bring the suppression of the default mode network during tasks toward normal (Peterson et al., 2009). [B]",
      "hotTxt": "where dopamine and noradrenaline rise (striatum and prefrontal cortex)"
    },
    "cocuk": [
      "FDA y EMA: TDAH a partir de 6 años; también a partir de 6 años en la información del producto turca (KÜB) verificada en octubre de 2026.",
      "Primera elección preferente para niños y adolescentes en un metaanálisis en red; SMD −0.78 en las valoraciones clínicas (Cortese et al., 2018). [A]",
      "En ensayos aleatorizados, el riesgo de tics nuevos o de empeoramiento de los tics con estimulantes no difirió del de placebo (razón de riesgos 0.99; Cohen et al., 2015). [A]",
      "El uso prolongado de estimulantes se asoció con una talla adulta unos 2.5 cm menor (seguimiento MTA, observacional; Swanson et al., 2017). [B]"
    ],
    "etkilesim": [
      "Contraindicado con un IMAO o en los 14 días siguientes a su suspensión (crisis hipertensiva). [A]",
      "Junto con la risperidona, riesgo de síntomas extrapiramidales cuando cambian las dosis (etiqueta de la FDA). [A]",
      "ISRS: no hay un apartado específico en la sección de interacciones de la etiqueta, pero los informes de poscomercialización recogen síndrome serotoninérgico en combinación con fármacos serotoninérgicos (etiqueta de la FDA). Se metaboliza por carboxilesterasa, no por enzimas CYP."
    ],
    "kaynak": "Volkow et al., 1998 y 2001; Hannestad et al., 2010; Rubia et al., 2014; Peterson et al., 2009; Cortese et al., 2018; Cohen et al., 2015; etiqueta de la FDA."
  },
  "atomoksetin": {
    "name": "Atomoxetina",
    "grup": "ADHD medications",
    "sinif": "Inhibidor selectivo de la recaptación de noradrenalina",
    "ozet": "Bloquea solo el NET: aumenta la noradrenalina y la dopamina en la corteza prefrontal y deja la dopamina sin cambios en el estriado y el accumbens (datos animales); se considera que tiene bajo potencial de abuso, y su efecto se incrementa gradualmente durante semanas.",
    "hedef": "Bloqueo del NET (Ki in vitro: NET 5, SERT 77, DAT 1451 nM; Bymaster et al., 2002). [B]",
    "etki": {
      "text": "Dado que el NET también limpia la dopamina en la corteza prefrontal, bloquear el NET triplica tanto la noradrenalina como la dopamina ahí; la dopamina no cambia en el estriado y el accumbens (rata; Bymaster et al., 2002). La diferencia con el metilfenidato: las vías hacia el estriado permanecen en silencio. [B]",
      "hotTxt": "aumento de noradrenalina y dopamina solo en la corteza prefrontal"
    },
    "cocuk": [
      "FDA y EMA: TDAH a partir de 6 años; también a partir de 6 años en la información del producto turco (KÜB) verificada en octubre de 2026.",
      "SMD −0.56 en las valoraciones clínicas; inferior a los estimulantes (Cortese et al., 2018). [A]",
      "Advertencia de recuadro: ideación suicida en los ensayos a corto plazo, 0.37% frente a 0% (Bangs et al., 2008). [A]"
    ],
    "etkilesim": [
      "Se metaboliza por CYP2D6: los inhibidores potentes de 2D6 (fluoxetina, paroxetina) aumentan la exposición; la etiqueta aconseja un intervalo mayor entre los aumentos de dosis y puede considerarse el estudio del genotipo. [A]"
    ],
    "kaynak": "Bymaster et al., 2002; Ding et al., 2014; Cortese et al., 2018; Bangs et al., 2008; Brown et al., 2019; etiqueta de la FDA."
  },
  "guanfasin": {
    "name": "Guanfacina",
    "grup": "ADHD medications",
    "sinif": "Agonista α2A (liberación prolongada)",
    "ozet": "Actúa sobre un receptor, no sobre un transportador: al estimular los receptores α2A en las espinas dendríticas de las neuronas piramidales prefrontales, se cree que fortalece la red de memoria de trabajo (estudios en monos).",
    "hedef": "Agonista α2A selectivo; cae el cAMP, los canales HCN en las espinas se cierran y la conectividad de la red prefrontal se fortalece (Wang et al., 2007). [B]",
    "etki": {
      "text": "No es el flujo sino la señal en el objetivo que se fortalece: cuando se estimula el receptor α2A en la corteza prefrontal, la conectividad en la red de memoria de trabajo se fortalece (Wang et al., 2007). También se utiliza como complemento a un estimulante. [B]",
      "hotTxt": "la red prefrontal donde se estimulan los receptores α2A"
    },
    "cocuk": [
      "FDA: edades 6–17, solo (2009) y como complemento a un estimulante (2011). EMA: edades 6–17, cuando los estimulantes no son adecuados.",
      "Turquía: la guanfacina de liberación prolongada ha sido aprobada desde 2023; según la información del producto (KÜB) verificada, se indica para TDAH en edades de 6 a 17 años cuando los estimulantes no son adecuados, no tolerados o ineficaces, como parte de un programa de tratamiento integral que incluye medidas psicológicas, educativas y sociales.",
      "Agonistas α2: SMD −0.59 solos y −0.36 como complemento a un estimulante; la somnolencia es común (Hirota et al., 2014). [A]"
    ],
    "etkilesim": [
      "Degradada por CYP3A4: reducir la dosis al 50% con inhibidores fuertes y moderados y hasta el doble con inductores (ficha técnica FDA). [A]",
      "La somnolencia se suma a la de los sedantes y la hipotensión arterial con otros fármacos hipotensores; no se suspende de forma brusca (hipertensión de rebote)."
    ],
    "kaynak": "Wang et al., 2007; Biederman et al., 2008; Wilens et al., 2012; Hirota et al., 2014; ficha técnica FDA."
  }
};

  // Inyección de veriedades y fusión
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
