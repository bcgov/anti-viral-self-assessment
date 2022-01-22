import { GeneralQuestionProps, QuestionType } from './QuestionProps';
import { RadioQuestion } from './RadioQuestion';
import { MultiQuestion } from './MultiQuestion';

export const Question: React.FC<GeneralQuestionProps> = ({ type, ...props }) => {
  switch (type) {
    case QuestionType.Radio:
      return <RadioQuestion {...props} />;
    case QuestionType.Checkbox:
      return <MultiQuestion {...props} />;
  }
};
