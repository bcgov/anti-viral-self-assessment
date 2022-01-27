import React, { useState } from 'react';
import classnames from 'classnames';
import { QuestionProps } from './QuestionProps';

export const RadioQuestion: React.FC<QuestionProps> = ({
  description,
  options,
  questionKey,
  question,
  onAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  function onClick(value: string) {
    setSelectedOption(value);
    onAnswer(value);
  }

  return (
    <div className='p-4 mb-5 bg-white rounded'>
      <fieldset>
        <legend className='font-bold mb-2'>{question}</legend>
        <p className='mb-6 text-bcGray'>{description}</p>
        <div className='flex flex-col md:flex-row gap-2'>
          {options.map((option, index) => (
            <label
              key={index}
              className={classnames(
                `
                flex items-center justify-start px-5 md:px-10 py-1.5 border border-gray-300 rounded
                hover:bg-blue-200 transition-all
              `,
                {
                  'bg-blue-200': selectedOption === option.key,
                }
              )}
              htmlFor={`inlineRadio-${questionKey}-${index}`}
            >
              <input
                className='mr-2 rounded-full h-4 w-4 min-w-4'
                type='radio'
                name={`radioOptions-${questionKey}`}
                id={`inlineRadio-${questionKey}-${index}`}
                value={option.key}
                onClick={evt => onClick(evt.currentTarget.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
};
