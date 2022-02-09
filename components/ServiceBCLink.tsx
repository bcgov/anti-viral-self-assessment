import Link from 'next/link';

const serviceBCNumber = '1-888-268-4319';
const serviceBCLabel = '1-888-COVID19';

export const ServiceBCLink: React.FC = () => {
  return (
    <Link href={`tel:${serviceBCNumber}`}>
      <a className='font-bold'>{serviceBCLabel}</a>
    </Link>
  );
};
