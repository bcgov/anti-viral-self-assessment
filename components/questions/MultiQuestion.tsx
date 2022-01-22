import React from 'react';
import { QuestionProps } from './QuestionProps';

export const MultiQuestion: React.FC<QuestionProps> = ({
  description,
  question,
  options,
  onAnswer,
}) => {
  const [selected, setSelected] = React.useState<string[]>([]);

  function onCheck(value: string, checked: boolean) {
    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(s => s !== value));
    }
  }

  React.useEffect(() => {
    onAnswer(selected);
  }, [selected]);

  return (
    <div className='p-4 bg-white'>
      <p className='font-bold'>{question}</p>
      <p>{description}</p>
      <div className='min-w-fit'>
        {options.map((option, index) => (
          <div key={index} className='px-6 py-1 border border-bcLightGray my-2'>
            <input
              className='appearance-none h-4 w-4 border border-bcBlack border-1 rounded-sm bg-white checked:bg-bcBluePrimary checked:border-bcBluePrimary focus:outline-none transition duration-200 mt-1 align-top mr-2 cursor-pointer'
              type='checkbox'
              value={option.key}
              id={`check-${option.key}`}
              onClick={evt => onCheck(evt.currentTarget.value, evt.currentTarget.checked)}
            />
            <label className='inline-block text-gray-800' htmlFor={`check-${option.key}`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
