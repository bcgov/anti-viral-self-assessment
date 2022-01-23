import Link from 'next/link';
import { InfoBox } from '../components';

const ActionButton: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <div className='mt-2'>
      <Link href={href}>
        <a className='w-full px-20 md:w-auto flex items-center justify-center button rounded-md py-2 border text-white border-bcBluePrimary bg-bcBluePrimary font-bold'>
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
      <h2 className='text-2xl text-bcBluePrimary leading-relaxed'>
        Checklist for COVID-19 Therapies
      </h2>
      <p className='pt-4 leading-6'>
        Treatment is available for some people who have tested positive for COVID-19. These
        medications have been developed specifically for individuals who are at the highest risk of
        developing more severe illness. There are also other considerations, such as medication
        interactions that may limit their use for some people. Public health and a clinical care
        advisory team are working to identify where the treatments can be used most effectively and
        will update the information in the survey if there are any changes in eligibility criteria.
      </p>
      <p className='py-6 leading-6'>
        The following set of questions will walk you through the criteria and let you know right
        away if you might be a possible candidate for one of these treatments. If you are a possible
        candidate, you will be directed to call a nurse who will complete a more detailed
        assessment.
      </p>
      <InfoBox content='If for any reason you are unable to fill out the questionnaire online and would like tocomplete it over the phone with support, please call ServicesBC at xxxxxxxx and someone can assist you.' />
      <div className='pt-6 flex justify-center items-center w-full'>
        <ActionButton href='/form'>Start</ActionButton>
      </div>
    </div>
  );
}
