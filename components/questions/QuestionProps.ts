export interface QuestionProps {
  description: string;
  question: string;
  options: {
    key: string;
    label: string;
  }[];
  onAnswer: (answer: string | string[]) => void;
}

export interface GeneralQuestionProps extends QuestionProps {
  type: QuestionType;
}

export enum QuestionType {
  Checkbox,
  Radio,
}
