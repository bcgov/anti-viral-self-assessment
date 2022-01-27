import { ServiceBCLink } from 'components/ServiceBCLink';
import Link from 'next/link';
import { InfoBox } from '../components';

const ActionButton: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <div className='mt-2'>
      <Link href={href}>
        <a className='w-full px-20 md:w-auto flex items-center justify-center button rounded-md py-2 border no-underline text-white border-bcBluePrimary bg-bcBluePrimary font-bold'>
          {children}
        </a>
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <div className='w-full'>
      <h1 className='text-4xl font-bold text-bcBluePrimary leading-relaxed'>Self Screening Tool</h1>

      <div className='flex flex-col gap-4 mb-4'>
        <p>
          Treatment is available for some people who have tested positive for COVID-19. These
          treatments have been approved for use in Canada to prevent worsening symptoms in
          vulnerable patients. . They have been shown to prevent COVID-19 from progressing in high
          risk patients with mild to moderate symptoms, if taken within 5 to 7 days of symptom
          onset. They are not used to prevent COVID-19, before or after an exposure. There are
          important considerations, such as medication interactions,that may limit their use for
          some people.
        </p>

        <p>
          Public health and a clinical care advisory team are working to identify where the
          treatments can be used most effectively and will update this information if there are any
          changes. These treatments are currently being recommended for individuals who are
          identified as being at increased risk for needing to go to the hospital for COVID-19.
        </p>

        <p>This includes:</p>

        <ul>
          <li>those who are immunocompromised</li>
          <li>
            those who are unvaccinated or partially vaccinated and over 60 with three or more
            chronic conditions or who are Indigenous
          </li>
          <li>
            <div className='flex-flex-col'>
              <p>
                those who are unvaccinated or partially vaccinated 70 years and overwith one or more
                chronic condition.
              </p>
              <p>
                Examples of chronic conditions: diabetes, COPD, chronic kidney disease, or heart
                disease.
              </p>
            </div>
          </li>
        </ul>

        <p className='text-bcBlueLink font-bold'>
          The following set of questions will help to determine if you might benefit from an
          anti-viral treatment.
        </p>

        <p>
          Please consider and answer each question carefully. Your responses will help to determine
          if it would be safe for you to receive an anti-viral treatment for COVID-19. If it looks
          like you might benefit from the treatment you will be directed to call ServicesBC so
          thatthey can startthe assessment process. They will take the time to review these
          questions in more detailwith you, and may support your connection to a healthcare team who
          can access your medication and health information, seek more information,and make
          decisions based on their clinical assessment.
        </p>
      </div>

      <InfoBox>
        If for any reason you are unable to fill out the questionnaire online and would like to
        complete it over the phone with support, please call ServicesBC at <ServiceBCLink /> and
        someone can assist you.
      </InfoBox>

      <div className='pt-6 flex justify-center items-center w-full'>
        <ActionButton href='/form'>Start</ActionButton>
      </div>
    </div>
  );
}
