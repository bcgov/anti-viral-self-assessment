export const Q1Question = '1.	Please confirm you are 12 years or older (born 2010 or earlier.)';
export const Q1Description = null;

export const Q2Question = (
  <>
    2. Have you recently tested positive for COVID-19? For more information on types of COVID-19
    tests,{' '}
    <a
      href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/testing/types-of-tests'
      target='_blank'
      rel='noreferrer'
    >
      review information from the BCCDC.
    </a>
  </>
);
export const Q2Description = null;

export const Q3Question = '3. Do you have any severe symptoms of COVID-19?';
export const Q3Content = (
  <ul>
    <li>Find it hard to breathe</li>
    <li>Have chest pain</li>
    <li>Can&apos;t drink anything</li>
    <li>Feel very sick</li>
    <li>Feel confused</li>
  </ul>
);

export const Q4Question =
  '4. COVID-19 symptoms can range from mild to moderate. Mild and moderate symptoms are symptoms that can be managed at home. Do you have any symptoms of COVID-19?';
export const Q4Content = (
  <>
    <p className='mb-2'>Symptoms of COVID-19 include:</p>
    <ul>
      <li>Fever or chills</li>
      <li>Cough</li>
      <li>Loss of sense of smell or taste</li>
      <li>Sore throat</li>
      <li>Loss of appetite</li>
      <li>Extreme fatigue or tiredness</li>
      <li>Headache</li>
      <li>Body aches</li>
      <li>Nausea or vomiting</li>
      <li>Diarrhea</li>
    </ul>
  </>
);

export const Q5Question = '5. When did your symptoms first start?';
export const Q5Content = null;

export const Q6Question =
  '6. Do you have a medical condition or are you taking medications that suppress or weaken your immune system?';
export const Q6Content = (
  <ul>
    <li>
      Have received a solid organ transplant and are taking immunosuppressive (anti-rejection)
      treatment
    </li>
    <li>Had a bone marrow or stem cell transplant</li>
    <li>Are currently being treated for cancer, including blood cancers</li>
    <li>Diagnosed with a moderate to severe primary immunodeficiency</li>
    <li>Diagnosed with HIV and are not currently taking medication for it</li>
    <li>Are on dialysis or have severe kidney disease</li>
    <li>
      You are taking immunosuppressive treatment, such as high dose of steroids, biologics (e.g.
      adalimumab, etanercept, infliximab, interferon products), anti-CD20 agents (e.g. rituximab,
      ocrelizumab, ofatumumab, obinutuzumab, ibritumomab, tositumomab), B-cell depleting agents
      (e.g. epratuzumab, belimumab, atacicept, anti-BR3, alemtuzamab), or immune-suppressing agents
      (e.g. cyclophosphamide, cisplatin, methotrexate)
    </li>
    <li>
      Have received a letter from Dr. Bonnie Henry stating that you are Clinically Extremely
      Vulnerable (CEV) because you are immunocompromised
    </li>
  </ul>
);

export const Q7Question = '7. Have you had 3 doses of the vaccine?';
export const Q7Content = null;

export const Q8Question = 'Please indicate which age group you belong to?';
export const Q8Content = null;

export const Q9Under60Question = 'Do you have any of the following conditions?';
export const Q9Under60Content = (
  <ul>
    <li>Cystic fibrosis</li>
    <li>Severe COPD or asthma requiring hospitalization in the last year</li>
    <li>Diabetes treated with Insulin</li>
    <li>
      You are taking biologics for asthma, severe lung disease and at least one of the following:
      long-term home oxygen; assessment for a lung transplant; severe pulmonary arterial
      hypertension; severe pulmonary fibrosis/interstitial lung disease
    </li>
    <li>
      Diagnosed with a rare blood disorder: urea cycle defects; methylmalonic aciduria; propionic
      aciduria; glutaric aciduria; maple syrup urine disease
    </li>
    <li>Have had a splenectomy (removal of your spleen) </li>
    <li>
      Significant developmental disabilities: Down Syndrome, or CerebralPalsy, or Intellectual
      Developmental Disability (IDD), or receiving supports from: Community Supports for Independent
      Living (CSIL) or Community Living British Columbia(CLBC)
    </li>
    <li>
      Pregnant and have a serious heart disease, congenital or acquired, that requires observation
      by a cardiac specialist throughout pregnancy
    </li>
    <li>
      Neurological or other conditions causing significant muscle weakness around lungs requiring
      the use of a ventilator of continuous Bi-level positive airway pressure (Bi-PAP)
    </li>
  </ul>
);

export const ThreeOrMoreConditionsQuestion = 'Do you have three or more chronic conditions?';
export const ThreeOrMoreConditionsQuestionContent = (
  <div>
    <p>Examples of chronic conditions include:</p>
    <ul>
      <li>Obesity</li>
      <li>Diabetes</li>
      <li>Heart failure</li>
      <li>Chronic respiratory condition</li>
      <li>Kidney disease</li>
      <li>Previous stroke</li>
    </ul>
  </div>
);

export const OneOrMoreConditionsQuestion = 'Do you have one or more chronic conditions?';
export const OneOrMoreConditionsQuestionContent = (
  <div>
    <p>Examples of chronic conditions include:</p>

    <ul>
      <li>Obesity</li>
      <li>Diabetes</li>
      <li>Chronic respiratory condition</li>
      <li>Kidney disease</li>
      <li>Previous stroke</li>
      <li>Cystic fibrosis</li>
      <li>Severe COPD or asthma requiring hospitalization in the last year</li>
      <li>
        You are taking biologics for asthma, severe lung disease and at least one of the following:
        long-term home oxygen; assessment for a lung transplant; severe pulmonary arterial
        hypertension; severe pulmonary fibrosis/interstitial lung disease
      </li>
      <li>
        Diagnosed with a rare blood disorder: urea cycle defects; methylmalonic aciduria; propionic
        aciduria; glutaric aciduria; maple syrup urine disease
      </li>
      <li>Have had a splenectomy (removal of your spleen) </li>
      <li>
        Significant developmental disabilities: Down Syndrome, or Cerebral Palsy, or Intellectual
        Developmental Disability (IDD), or receiving supports from: Community Supports for
        Independent Living (CSIL) or Community Living British Columbia(CLBC)
      </li>
      <li>
        Neurological or other conditions causing significant muscle weakness around lungs requiring
        the use of a ventilator of continuous Bi-level positive airway pressure (Bi-PAP)
      </li>
    </ul>
  </div>
);

export const IndigenousQuestion = 'Do you self-identify as Indigenous?';
export const IndigenousQuestionContent = null;

export const Q11Content = (
  <ul>
    <li>Cystic fibrosis</li>
    <li>Severe COPD or asthma requiring hospitalization in the last year</li>
    <li>
      You are taking biologics for asthma, severe lung disease and at least one of the following:
      long-term home oxygen; assessment for a lung transplant; severe pulmonary arterial
      hypertension; severe pulmonary fibrosis/interstitial lung disease
    </li>
    <li>
      Diagnosed with a rare blood disorder: urea cycle defects; methylmalonic aciduria; propionic
      aciduria; glutaric aciduria; maple syrup urine disease
    </li>
    <li>Have had a splenectomy (removal of your spleen) </li>
    <li>Diabetes treated with Insulin</li>
    <li>
      Significant developmental disabilities: Down Syndrome, or Cerebral Palsy, or Intellectual
      Developmental Disability (IDD), or receiving supports from: Community Supports for Independent
      Living (CSIL) or Community Living British Columbia(CLBC)
    </li>
    <li>
      Neurological or other conditions causing significant muscle weakness around lungs requiring
      the use of a ventilator of continuous Bi-level positive airway pressure (Bi-PAP)
    </li>
  </ul>
);
