import { ServiceBCLink } from './ServiceBCLink';

export enum EndJourneyType {
  NoBenefitUnder12,
  NoBenefitNoPositiveTest,
  NoBenefitNoSymptoms,
  NoBenefitExtended,
  UrgentCare,
  TooManyDays,
  AntiviralBenefit,
}

interface EndOfJourneyProps {
  journeyEnd: EndJourneyType | null;
}

export const EndOfJourney: React.FC<EndOfJourneyProps> = ({ journeyEnd }) => {
  switch (journeyEnd) {
    case EndJourneyType.NoBenefitUnder12:
      return <NoBenefitUnder12 />;
    case EndJourneyType.NoBenefitNoPositiveTest:
      return <NoBenefitNoPositiveTest />;
    case EndJourneyType.NoBenefitNoSymptoms:
      return <NoBenefitNoSymptoms />;
    case EndJourneyType.NoBenefitExtended:
      return <NoBenefitExtended />;
    case EndJourneyType.UrgentCare:
      return <UrgentCare />;
    case EndJourneyType.TooManyDays:
      return <TooManyDays />;
    case EndJourneyType.AntiviralBenefit:
      return <AntiviralBenefit />;
    default:
      return null;
  }
};

const EndOfJourneyContainer: React.FC = ({ children }) => {
  return <div className='w-full p-6 bg-bcLightBlueBackground rounded'>{children}</div>;
};

const EndOfJourneyTitle: React.FC = ({ children }) => {
  return <p className='text-bcBlueLink font-bold mb-2'>{children}</p>;
};

const NoBenefitNoPositiveTest: React.FC = () => (
  <EndOfJourneyContainer>
    <EndOfJourneyTitle>
      Based on your answer you would likely not benefit from the available treatments for COVID-19
      at this time. You need a positive test result.
    </EndOfJourneyTitle>
    <div className='flex flex-col gap-4'>
      <p>
        These treatments have been approved specifically for people experiencing mild to moderate
        COVID-19 symptoms, and require a positive test.
      </p>
      <p>
        If you are experiencing symptoms and are at risk of more severe disease due to personal risk
        factors, you are encouraged to get tested. Visit the{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/testing/when-to-get-a-covid-19-test'
        >
          BCCDC website for more information about COVID-19 testing.
        </a>
      </p>
    </div>
  </EndOfJourneyContainer>
);

const NoBenefitUnder12: React.FC = () => (
  <EndOfJourneyContainer>
    <EndOfJourneyTitle>
      Based on your answer you would likely not benefit from the available treatments for COVID-19
      at this time. These treatments have only been approved for ages 12 years and older.{' '}
    </EndOfJourneyTitle>
    <div className='flex flex-col gap-4'>
      <p>
        You should continue to seek medical care if you feel you need it. For more information,
        visit the{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/if-you-have-covid-19'
        >
          BCCDC website.
        </a>
      </p>
    </div>
  </EndOfJourneyContainer>
);

const NoBenefitNoSymptoms: React.FC = () => (
  <EndOfJourneyContainer>
    <EndOfJourneyTitle>
      Based on your answer you would likely not benefit from the available treatments for COVID-19
      at this time.
    </EndOfJourneyTitle>
    <div className='flex flex-col gap-4'>
      <p>
        These treatments have been approved specifically for people experiencing mild to moderate
        COVID-19 symptoms. As with most medications, there may be side effects to taking these
        treatments if you do not have COVID-19 symptoms.
      </p>

      <p>
        If you start to experience symptoms and are at risk of developing more severe disease due to
        personal risk factors, you should re-visit this screening tool.
      </p>
    </div>
  </EndOfJourneyContainer>
);

const NoBenefitExtended: React.FC = () => (
  <EndOfJourneyContainer>
    <EndOfJourneyTitle>
      Based on your answers you would likely not benefit from the available treatments for COVID-19
      at this time.
    </EndOfJourneyTitle>
    <p>
      These treatments are currently being recommended for individuals who are identified as being
      at increased risk of hospitalization for COVID-19.
    </p>
    <p>
      You should continue to seek medical care if you feel you need it. For more information, visit
      the{' '}
      <a
        target='_blank'
        rel='noreferrer'
        href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/if-you-have-covid-19'
      >
        BCCDC website.
      </a>
    </p>
  </EndOfJourneyContainer>
);

const UrgentCare: React.FC = () => (
  <EndOfJourneyContainer>
    <EndOfJourneyTitle>
      Please go to an urgent care clinic or emergency department as soon as possible.
    </EndOfJourneyTitle>
  </EndOfJourneyContainer>
);

const TooManyDays: React.FC = () => (
  <EndOfJourneyContainer>
    <p>
      To be effective, the COVID-19 treatments that are currently available must be taken within the
      first 5 to 7 days of symptoms starting.
    </p>
    <p className='mb-4'>
      Stay home and away from others until you feel well enough to return to your regular
      activities. You should continue to seek medical care if you feel you need it. For more
      information,{' '}
      <a
        className='font-bold'
        href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/testing/when-to-get-a-covid-19-test'
        target='_blank'
        rel='noreferrer'
      >
        visit the BCCDC website
      </a>
    </p>
    <p>
      For patients who are immunocompromised and have been identified as Clinically Extremely
      Vulnerable (you received a letter from Dr. Bonnie Henry notifying you of your CEV status),
      this timeframe may be extended up to 10 days. This is reviewed on a case-by-case basis.{' '}
      <strong>
        If you are Clinically Extremely Vulnerable, please call Service BC at <ServiceBCLink /> so
        they can start the assessment process.
      </strong>
    </p>
  </EndOfJourneyContainer>
);

const AntiviralBenefit: React.FC = () => (
  <EndOfJourneyContainer>
    <EndOfJourneyTitle>You may benefit from COVID-19 treatment.</EndOfJourneyTitle>
    <p>
      Please call Service BC at <ServiceBCLink /> immediately so they can continue the assessment
      process. Tell them you are calling about COVID-19 treatment options and that you have
      completed the online screener. There is a short window of time to deliver these medications,
      so please call right away.
    </p>
  </EndOfJourneyContainer>
);
