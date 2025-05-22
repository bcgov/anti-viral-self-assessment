export interface QuestionProps {
  description: React.ReactElement<any> | null;
  question: React.ReactElement<any> | string;
  questionKey: string;
  options: {
    key: string;
    label: React.ReactElement<any> | string;
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
