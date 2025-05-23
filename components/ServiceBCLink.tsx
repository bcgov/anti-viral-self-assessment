const serviceBCNumber = '1-833-838-2323';

export const ServiceBCLink: React.FC = () => {
  return (
    <a href={`tel:${serviceBCNumber}`} className='font-bold whitespace-nowrap'>
      {serviceBCNumber}
    </a>
  );
};
