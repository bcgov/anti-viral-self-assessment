import { EndJourneyType } from '../EndOfJourney';
import * as QuestionContent from '../../content/Questions';

export interface Steps {
  [key: string]: boolean;
}

export interface Question {
  question: React.ReactNode | string;
  description: React.ReactNode | null;
  questionKey: string;
  options: { key: string; label: React.ReactNode | string }[];
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
        setJourneyEnd(EndJourneyType.NoBenefitUnder18);
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
        setJourneyEnd(EndJourneyType.NoBenefitNoPositiveTest);
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
        setJourneyEnd(EndJourneyType.NoBenefitExtended);
      },
    },
  },
  5: {
    question: QuestionContent.Q5Question,
    description: QuestionContent.Q5Content,
    questionKey: '5',
    options: [
      { key: 'less7', label: 'In the past week (0 to 7 days)' },
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
        setJourneyEnd(EndJourneyType.AntiviralBenefit);
      },
      no: () => {
        setJourneyEnd(EndJourneyType.NoBenefitExtended);
        setToStep('7');
      },
    },
  },
});
