export interface QuestionProps {
  description: React.ReactElement | null;
  question: React.ReactElement | string;
  questionKey: string;
  options: {
    key: string;
    label: React.ReactElement | string;
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
