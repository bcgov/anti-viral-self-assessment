import Link from 'next/link';

const serviceBCNumber = '1-888-268-4319';

export const ServiceBCLink: React.FC = () => {
  return (
    <Link href={`tel:${serviceBCNumber}`}>
      <a className='font-bold whitespace-nowrap'>{serviceBCNumber}</a>
    </Link>
  );
};
