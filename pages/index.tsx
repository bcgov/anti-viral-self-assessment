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
      <h1 className='text-4xl font-bold text-bcBluePrimary leading-relaxed'>
        COVID-19 Treatment Self-Assessment
      </h1>

      <div className='flex flex-col gap-4 mb-4'>
        <p>This guidance is based on known evidence as of May 29, 2023.</p>

        <div>
          <p>
            COVID-19 treatments are currently available in B.C. and may benefit some people who have
            recently tested positive for COVID-19.
          </p>
          <p>
            They have been shown to prevent COVID-19 from getting worse in high-risk patients if
            taken within 7 days of symptoms starting.
          </p>
        </div>

        <div>
          <p>
            These treatments do not prevent COVID-19. Important safety considerations, like how they
            interact with other medications, may limit their use for some people.
          </p>
        </div>

        <p>
          <span className='font-bold'>Who can access treatments</span>
        </p>
        <p>
          Currently, these treatments are recommended for people who are identified as having an
          increased risk for needing to go to the hospital for COVID-19.
        </p>
        <p>
          Treatments like Paxlovid or Remdesivir may be beneficial for people in{' '}
          <span className='font-bold'>any</span> of the following situations:
        </p>
        <ul>
          <li>Immunocompromised</li>
          <li>Clinically Extremely Vulnerable</li>
          <li>
            <div>
              60 years or older <span className='font-bold'>and</span> self-identify as Indigenous
            </div>
          </li>
          <li>
            <div>
              Any two of the following:
              <ul>
                <li>
                  <div>70 years or older</div>
                </li>
                <li>
                  Unvaccinated, or have not receivd two vaccine doses plus a booster in the past
                  year
                </li>
                <li>Have three or more serious chronic medical conditions</li>
              </ul>
            </div>
          </li>
        </ul>

        <p className='text-bcBlueAccent font-bold text-lg'>
          Find out if you might benefit from treatment
        </p>

        <p>
          Answer each question carefully. Your responses will help to determine if it would be safe
          for you to receive treatment for COVID-19.
        </p>
        <p>
          If it looks like you might benefit from the treatment, you will be directed to call
          Service BC for further assessment. They will review these questions in more detail with
          you, and may connect you to a healthcare team who can access your medication and health
          information. The healthcare team will seek more information and make decisions based on
          their clinical assessment.
        </p>
        <InfoBox>
          If you are unable to fill out the questionnaire online and need help to complete it over
          the phone, please call Service BC at <ServiceBCLink />.
        </InfoBox>
      </div>

      <div className='pt-6 flex justify-center items-center w-full'>
        <ActionButton href='/form'>Start</ActionButton>
      </div>
    </div>
  );
}
