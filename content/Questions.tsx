export const Q1Question = '1.	Please confirm you are 12 years or older? born 2010 or earlier';
export const Q1Description = null;

export const Q2Question = '2. Have you recently tested positive for COVID-19?';
export const Q2Description = (
  <p>
    For more information on types of COVID-19 tests,{' '}
    <a
      className='underline'
      href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/testing/types-of-tests'
    >
      go to this link
    </a>
    .
  </p>
);

export const Q3Question = '3. Do you have any severe symptoms of COVID-19?';
// TODO: UL needs to be fixed
export const Q3Content = (
  <ul>
    <li>Find it hard to breath</li>
    <li>Have chest pain</li>
    <li>Can&apos;t drink anything</li>
    <li>Feel very sick</li>
    <li>Feel confused</li>
  </ul>
);

export const Q4Question =
  '4. COVID-19 symptoms can range from mild to moderate. Mild and moderate symptoms are symptoms that can be managed at home. Do you have any symptoms of COVID-19?';
export const Q4Content = (
  <p>
    Symptoms of COVID-19 include: Fever or chills, Cough, Loss of sense of smell or taste,
    Difficulty breathing, Sore throat, Loss of appetite, Extreme fatigue or tiredness, Headache,
    Body aches, Nausea or vomiting, Diarrhea.
  </p>
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
      Have received a letter from Dr. Bonnie Henry stating that you are clinically extremely
      vulnerable (CEV) because you are immunocompromised
    </li>
  </ul>
);

export const Q7Question = '7. Have you had 3 doses of the vaccine?';
export const Q7Content = null;

export const Q8Question = 'Please indiciate which age group you belong to?';
export const Q8Content = null;

export const Q9Under60Question =
  'Have you been diagnosed by a health care provider with a chronic condition?';
export const Q9Under60Content = (
  <ul>
    <li>Cystic fibrosis</li>
    <li>Severe COPD or asthma requiring hospitalization in the last year</li>
    <li>
      You are taking biologics for asthma, severe lung disease and at least one of thefollowing:
      long-term home oxygen; assessment for a lung transplant; severe pulmonary arterial
      hypertension; severe pulmonary fibrosis/interstitial lungdisease
    </li>
    <li>
      Diagnosed with a rare blood disorder:: urea cycle defects; methylmalonic aciduria; propionic
      aciduria; glutaric aciduria; maple syrup urine disease
    </li>
    <li>Have had a splenectomy (removal of your spleen) </li>
    <li>Diabetes treated with Insulin</li>
    <li>
      Significant developmental disabilities: Down Syndrome, or CerebralPalsy, or Intellectual
      Developmental Disability (IDD), or receiving supports from: Community Supports for Independent
      Living (CSIL) or Community Living British Columbia(CLBC)
    </li>
    <li>
      Pregnant and have a serious heart disease, congenital or acquired, that requiresobservation by
      a cardiac specialist throughout pregnancy
    </li>
    <li>
      Neurological or other conditions causing significant muscle weakness around lungs requiring
      the use of a ventilator of continuous Bi-level positive airway pressure (Bi-PAP)
    </li>
  </ul>
);

export const Q9Under70Question = 'Do you have three or more chronic conditions?';
export const Q9Under70Content = (
  <p>
    e.g. obesity, diabetes, heart failure, chronic respiratory condition, kidney disease, previous
    stroke
  </p>
);

export const Q9SeventyPlusQuestion = 'Do you have one or more chronic conditions?';
export const Q9SeventyPlusContent = (
  <div>
    <p>
      e.g. obesity, diabetes, heart failure, chronic respiratory condition, kidney disease, previous
      stroke
    </p>
    <p>Other examples include:</p>
    <ul>
      <li>Cystic fibrosis</li>
      <li>Severe COPD or asthma requiring hospitalization in the last year</li>
      <li>
        You are taking biologics for asthma, severe lung disease and at least one of thefollowing:
        long-term home oxygen; assessment for a lung transplant; severe pulmonary arterial
        hypertension; severe pulmonary fibrosis/interstitial lungdisease
      </li>
      <li>
        Diagnosed with a rare blood disorder:: urea cycle defects; methylmalonic aciduria; propionic
        aciduria; glutaric aciduria; maple syrup urine disease
      </li>
      <li>Have had a splenectomy (removal of your spleen) </li>
      <li>Diabetes treated with Insulin</li>
      <li>
        Significant developmental disabilities: Down Syndrome, or CerebralPalsy, or Intellectual
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

export const Q10Question = 'Do you identify as Indigenous?';
export const Q10Content = null;

export const Q11Content = (
  <ul>
    <li>Cystic fibrosis</li>
    <li>Severe COPD or asthma requiring hospitalization in the last year</li>
    <li>
      You are taking biologics for asthma, severe lung disease and at least one of thefollowing:
      long-term home oxygen; assessment for a lung transplant; severe pulmonary arterial
      hypertension; severe pulmonary fibrosis/interstitial lungdisease
    </li>
    <li>
      Diagnosed with a rare blood disorder:: urea cycle defects; methylmalonic aciduria; propionic
      aciduria; glutaric aciduria; maple syrup urine disease
    </li>
    <li>Have had a splenectomy (removal of your spleen) </li>
    <li>Diabetes treated with Insulin</li>
    <li>
      Significant developmental disabilities: Down Syndrome, or CerebralPalsy, or Intellectual
      Developmental Disability (IDD), or receiving supports from: Community Supports for Independent
      Living (CSIL) or Community Living British Columbia(CLBC)
    </li>
    <li>
      Neurological or other conditions causing significant muscle weakness around lungs requiring
      the use of a ventilator of continuous Bi-level positive airway pressure (Bi-PAP)
    </li>
  </ul>
);
