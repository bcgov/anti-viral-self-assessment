import { EndJourneyType } from '../EndOfJourney';
import * as QuestionContent from '../../content/Questions';

export interface Steps {
  [key: string]: boolean;
}

export interface Question {
  question: string;
  description: React.ReactElement | null;
  questionKey: string;
  options: { key: string; label: string }[];
  actions: {
    [key: string]: () => void;
  };
}

export type Questions = Record<string, Question>;

export const getQuestions: ({
  setToStep,
  setJourneyEnd,
}: {
  setToStep: (step: string) => void;
  setJourneyEnd: (journeyEnd: EndJourneyType | null) => void;
}) => Questions = ({ setToStep, setJourneyEnd }) => ({
  1: {
    question: QuestionContent.Q1Question,
    description: QuestionContent.Q1Description,
    questionKey: '1',
    options: [
      { key: 'yes', label: 'Yes' },
      { key: 'no', label: 'No' },
    ],
    actions: {
      yes: () => {
        setJourneyEnd(null);
        setToStep('2');
      },
      no: () => {
        setToStep('1');
        setJourneyEnd(EndJourneyType.NoBenefitUnder12);
      },
    },
  },
  2: {
    question: QuestionContent.Q2Question,
    description: QuestionContent.Q2Description,
    questionKey: '2',
    options: [
      { key: 'yes', label: 'Yes' },
      { key: 'no', label: 'No' },
    ],
    actions: {
      yes: () => {
        setJourneyEnd(null);
        setToStep('3');
      },
      no: () => {
        setToStep('2');
        setJourneyEnd(EndJourneyType.NoBenefit);
      },
    },
  },
  3: {
    question: QuestionContent.Q3Question,
    description: QuestionContent.Q3Content,
    questionKey: '3',
    options: [
      { key: 'yes', label: 'Yes' },
      { key: 'no', label: 'No' },
    ],
    actions: {
      yes: () => {
        setToStep('3');
        setJourneyEnd(EndJourneyType.UrgentCare);
      },
      no: () => {
        setJourneyEnd(null);
        setToStep('4');
      },
    },
  },
  4: {
    question: QuestionContent.Q4Question,
    description: QuestionContent.Q4Content,
    questionKey: '4',
    options: [
      { key: 'yes', label: 'Yes' },
      { key: 'no', label: 'No' },
    ],
    actions: {
      yes: () => {
        setJourneyEnd(null);
        setToStep('5');
      },
      no: () => {
        setToStep('4');
        setJourneyEnd(EndJourneyType.NoBenefit);
      },
    },
  },
  5: {
    question: QuestionContent.Q5Question,
    description: QuestionContent.Q5Content,
    questionKey: '5',
    options: [
      { key: 'less7', label: 'In the past week 0-7 days' },
      { key: 'more7', label: 'I have had symptoms for more than 7 days' },
    ],
    actions: {
      less7: () => {
        setJourneyEnd(null);
        setToStep('6');
      },
      more7: () => {
        setToStep('5');
        setJourneyEnd(EndJourneyType.TooManyDays);
      },
    },
  },
  6: {
    question: QuestionContent.Q6Question,
    description: QuestionContent.Q6Content,
    questionKey: '6',
    options: [
      { key: 'yes', label: 'Yes' },
      { key: 'no', label: 'No' },
    ],
    actions: {
      yes: () => {
        setToStep('6');
        setJourneyEnd(EndJourneyType.AntiviralBenefit);
      },
      no: () => {
        setJourneyEnd(null);
        setToStep('7');
      },
    },
  },
  7: {
    question: QuestionContent.Q7Question,
    description: QuestionContent.Q7Content,
    questionKey: '7',
    options: [
      { key: 'yes', label: 'Yes' },
      { key: 'no', label: 'No' },
    ],
    actions: {
      yes: () => {
        setToStep('7');
        setJourneyEnd(EndJourneyType.NoBenefitExtended);
      },
      no: () => {
        setJourneyEnd(null);
        setToStep('8');
      },
    },
  },
  8: {
    question: QuestionContent.Q8Question,
    description: QuestionContent.Q8Content,
    questionKey: '8',
    options: [
      { key: 'under60', label: 'Less than 60 years' },
      { key: 'under70', label: '60-70 years' },
      { key: 'over70', label: 'Aged 70 or over' },
    ],
    actions: {
      under60: () => {
        setJourneyEnd(null);
        setToStep('9a');
      },
      under70: () => {
        setJourneyEnd(null);
        setToStep('9b');
      },
      over70: () => {
        setJourneyEnd(null);
        setToStep('9c');
      },
    },
  },
  '9a': {
    question: QuestionContent.Q9Under60Question,
    description: QuestionContent.Q9Under60Content,
    questionKey: '9a',
    options: [
      { key: 'yes', label: 'Yes' },
      { key: 'no', label: 'No' },
    ],
    actions: {
      yes: () => {
        setJourneyEnd(EndJourneyType.AntiviralBenefit);
      },
      no: () => {
        setJourneyEnd(EndJourneyType.NoBenefitExtended);
      },
    },
  },
  '9b': {
    question: QuestionContent.Q9Under70Question,
    description: QuestionContent.Q9Under70Content,
    questionKey: '9b',
    options: [
      { key: 'yes', label: 'Yes' },
      { key: 'no', label: 'No' },
    ],
    actions: {
      yes: () => {
        setToStep('9b');
        setJourneyEnd(EndJourneyType.AntiviralBenefit);
      },
      no: () => {
        setJourneyEnd(null);
        setToStep('10b');
      },
    },
  },
  '9c': {
    question: QuestionContent.Q9SeventyPlusQuestion,
    description: QuestionContent.Q9SeventyPlusContent,
    questionKey: '9c',
    options: [
      { key: 'yes', label: 'Yes' },
      { key: 'no', label: 'No' },
    ],
    actions: {
      yes: () => {
        setToStep('9c');
        setJourneyEnd(EndJourneyType.AntiviralBenefit);
      },
      no: () => {
        setJourneyEnd(null);
        setToStep('10c');
      },
    },
  },
  '10b': {
    question: QuestionContent.Q10Question,
    description: QuestionContent.Q10Content,
    questionKey: '10b',
    options: [
      { key: 'yes', label: 'Yes' },
      { key: 'no', label: 'No' },
    ],
    actions: {
      yes: () => {
        setToStep('10b');
        setJourneyEnd(EndJourneyType.AntiviralBenefit);
      },
      no: () => {
        setJourneyEnd(null);
        setToStep('11b');
      },
    },
  },
  '10c': {
    question: QuestionContent.Q10Question,
    description: QuestionContent.Q10Content,
    questionKey: '10c',
    options: [
      { key: 'yes', label: 'Yes' },
      { key: 'no', label: 'No' },
    ],
    actions: {
      yes: () => {
        setToStep('10c');
        setJourneyEnd(EndJourneyType.AntiviralBenefit);
      },
      no: () => {
        setToStep('10c');
        setJourneyEnd(EndJourneyType.NoBenefitExtended);
      },
    },
  },
  '11b': {
    question: QuestionContent.Q9Under60Question,
    description: QuestionContent.Q11Content,
    questionKey: '11b',
    options: [
      { key: 'yes', label: 'Yes' },
      { key: 'no', label: 'No' },
    ],
    actions: {
      yes: () => {
        setToStep('11b');
        setJourneyEnd(EndJourneyType.AntiviralBenefit);
      },
      no: () => {
        setToStep('11b');
        setJourneyEnd(EndJourneyType.NoBenefitExtended);
      },
    },
  },
});
