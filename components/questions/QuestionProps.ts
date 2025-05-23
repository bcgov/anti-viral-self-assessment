export interface QuestionProps {
  description: React.ReactNode | null;
  question: React.ReactNode | string;
  questionKey: string;
  options: {
    key: string;
    label: React.ReactNode | string;
  }[];
  inline?: boolean;
  onAnswer: (answer: string) => void;
}

export interface GeneralQuestionProps extends QuestionProps {
  type: QuestionType;
}

export enum QuestionType {
  Checkbox,
  Radio,
}
