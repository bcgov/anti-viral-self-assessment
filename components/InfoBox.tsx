interface InfoBoxProps {
  content: string;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ content }) => {
  return <div className='w-full p-6 bg-white border-l-8 border-l-bcBluePrimary'>{content}</div>;
};
