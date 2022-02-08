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
      2: true,
    }
  );

  const questions = getQuestions({ setToStep, setJourneyEnd });
  const stepStrings = Object.keys(questions);

  function setToStep(newStep: string) {
    const index = stepStrings.indexOf(newStep);
    if (index > -1) {
      const stepsTaken = stepStrings.slice(0, index + 1);
      // For the last 3 steps, we should only include matching branches
      let branch: string | null = null;
      if (newStep.includes('9') || newStep.includes('10') || newStep.includes('11')) {
        branch = newStep.slice(-1); // a, b, or c
      }
      const steps = stepsTaken.reduce(
        (acc, step) => ({
          ...acc,
          [step]: branch ? (step.length > 1 && step.slice(-1) !== branch ? false : true) : true,
        }),
        {}
      );
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
