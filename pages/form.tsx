import { getQuestions, Steps } from 'components/questions/structure';
import React, { useState } from 'react';
import { EndOfJourney, EndJourneyType, RadioQuestion } from '../components';

interface FormProps {
  initialSteps?: Steps;
}

const Form: React.FC<FormProps> = ({ initialSteps }) => {
  const [journeyEnd, setJourneyEnd] = useState<EndJourneyType | null>(null);
  const [step, setStep] = useState<Steps>(
    initialSteps || {
      1: true,
    },
  );

  const questions = getQuestions({ setToStep, setJourneyEnd });
  const stepStrings = Object.keys(questions);

  function setToStep(newStep: string) {
    const index = stepStrings.indexOf(newStep);
    if (index > -1) {
      const stepsTaken = stepStrings.slice(0, index + 1);
      // For the last 3 steps, we should only include matching branches
      let branch: string | null = null;
      let rootQuestion: number | null = null;
      if (newStep.includes('9') || newStep.includes('10') || newStep.includes('11')) {
        branch = newStep.slice(-1); // a, b, c or d
        if (newStep.length === 2) {
          rootQuestion = parseInt(newStep.slice(0, 1));
        } else {
          rootQuestion = parseInt(newStep.slice(0, 2));
        }
      }
      const steps = stepsTaken.reduce((acc, indexedStep, stepNumber) => {
        let result = true;
        if (branch && stepNumber >= 8) {
          const currentQuestion =
            indexedStep.length === 2
              ? parseInt(indexedStep.slice(0, 1))
              : parseInt(indexedStep.slice(0, 2));
          if (rootQuestion === currentQuestion) {
            result = indexedStep === newStep;
          } else {
            result = indexedStep === newStep || Boolean(step[indexedStep]);
          }
        }
        return {
          ...acc,
          [indexedStep]: result,
        };
      }, {});
      setStep(steps);
    } else {
      setStep({ 1: true });
    }
  }

  function processAction(step: string, value: string) {
    const action = questions[step].actions[value];
    if (action) {
      action();
    }
  }

  return (
    <div className='w-full'>
      {Object.keys(questions).map(questionKey => {
        if (!(questionKey in questions) || !step[questionKey]) {
          return null;
        }
        const question = questions[questionKey];
        return (
          <RadioQuestion
            key={questionKey}
            description={question.description}
            options={question.options}
            question={question.question}
            questionKey={question.questionKey}
            onAnswer={value => processAction(questionKey, value)}
          />
        );
      })}
      <EndOfJourney journeyEnd={journeyEnd} />
    </div>
  );
};

export default Form;
