import React from 'react';
import { QuestionProps } from './QuestionProps';

export const RadioQuestion: React.FC<QuestionProps> = ({
  description,
  key,
  question,
  options,
  onAnswer,
}) => {
  function onClick(value: string) {
    onAnswer(value);
  }

  return (
    <div className='p-4 bg-white'>
      <p className='font-bold'>{question}</p>
      <p>{description}</p>
      <div className='flex'>
        {options.map((option, index) => (
          <div key={index} className='px-8 py-1 border border-bcLightGray mr-4'>
            <input
              className='appearance-none rounded-full h-4 w-4 border border-bcBlack border-1  checked:bg-bcBluePrimary checked:border-bcBluePrimary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
              type='radio'
              name='radioOptions'
              id={`inlineRadio-${key}-${index}`}
              value={option.key}
              onClick={evt => onClick(evt.currentTarget.value)}
            />
            <label className='inline-block text-bcBlack' htmlFor={`inlineRadio-${key}-${index}`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
