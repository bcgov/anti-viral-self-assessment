export interface QuestionProps {
  description: React.ReactElement;
  question: string;
  questionKey: string;
  options: {
    key: string;
    label: string;
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
