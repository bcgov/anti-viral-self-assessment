import Link from 'next/link';

const serviceBCNumber = '250-111-1111';

export const ServiceBCLink: React.FC = () => {
  return (
    <Link href={`tel:${serviceBCNumber}`}>
      <a className='font-bold'>ServiceBC ({serviceBCNumber})</a>
    </Link>
  );
};
