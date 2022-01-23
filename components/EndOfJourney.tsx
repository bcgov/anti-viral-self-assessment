interface InfoBoxProps {
  content?: React.ReactElement;
  title?: string;
}

export const EndOfJourney: React.FC<InfoBoxProps> = ({ title, content }) => {
  return (
    <div className='w-full p-6 bg-bcLightBlueBackground'>
      {title && <p className='text-bcBlueLink font-bold'>{title}</p>}
      {content && <div className='pt-2'>{content}</div>}
    </div>
  );
};
