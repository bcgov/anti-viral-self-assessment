export interface EndJourneyType {
  title?: string;
  content?: React.ReactElement;
}

export const EndOfJourney: React.FC<EndJourneyType> = ({ title, content }) => {
  return (
    <div className='w-full p-6 bg-bcLightBlueBackground'>
      {title && <p className='text-bcBlueLink font-bold'>{title}</p>}
      {content && <div className='pt-2'>{content}</div>}
    </div>
  );
};
