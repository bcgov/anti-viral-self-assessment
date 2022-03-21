import * as QuestionContent from 'content/Questions';
import { getQuestions, Question } from '../components/questions/structure';
import { EndJourneyType } from '../components/EndOfJourney';

const yesNoOptions = [
  { key: 'yes', label: 'Yes' },
  { key: 'no', label: 'No' },
];

let mockSetToStep: jest.Mock;
let mockSetJourneyEnd: jest.Mock;
let question: Question;

const setQuestion = (key: string) => {
  mockSetToStep = jest.fn();
  mockSetJourneyEnd = jest.fn();

  question = getQuestions({
    setToStep: mockSetToStep,
    setJourneyEnd: mockSetJourneyEnd,
  })[key];
};

describe("getQuestions['1']", () => {
  beforeEach(() => {
    setQuestion('1');
  });

  it('returns question 1', () => {
    expect(question.question).toBe(QuestionContent.Q1Question);
  });

  it('returns question 1 content', () => {
    expect(question.description).toBe(QuestionContent.Q1Description);
  });

  it('has the question key "1"', () => {
    expect(question.questionKey).toBe('1');
  });

  it('to have options for yes and no', () => {
    expect(question.options).toStrictEqual(yesNoOptions);
  });

  it('has an action "yes" that sets step to 2 with no end journey', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('2');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(null);
  });

  it('has an action "no" that sets step to 1 and journey end to "NoBenefitUnder12"', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('1');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.NoBenefitUnder12);
  });
});

describe("getQuestions['2']", () => {
  beforeEach(() => {
    setQuestion('2');
  });

  it('returns question 2', () => {
    expect(question.question).toBe(QuestionContent.Q2Question);
  });

  it('returns question 2 content', () => {
    expect(question.description).toBe(QuestionContent.Q2Description);
  });

  it('has the question key "2"', () => {
    expect(question.questionKey).toBe('2');
  });

  it('to have options for yes and no', () => {
    expect(question.options).toStrictEqual(yesNoOptions);
  });

  it('has an action "yes" that sets step to 3 with no end journey', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('3');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(null);
  });

  it('has an action "no" that sets step to 2 and journey end to "NoBenefitNoPositiveTest"', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('2');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.NoBenefitNoPositiveTest);
  });
});

describe("getQuestions['3']", () => {
  beforeEach(() => {
    setQuestion('3');
  });

  it('returns question 3', () => {
    expect(question.question).toBe(QuestionContent.Q3Question);
  });

  it('returns question 3 content', () => {
    expect(question.description).toBe(QuestionContent.Q3Content);
  });

  it('has the question key "3"', () => {
    expect(question.questionKey).toBe('3');
  });

  it('to have options for yes and no', () => {
    expect(question.options).toStrictEqual(yesNoOptions);
  });

  it('has an action "yes" that sets step to 3 and journey end to "UrgentCare"', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('3');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.UrgentCare);
  });

  it('has an action "no" that sets step to 4 with no end journey', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('4');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(null);
  });
});

describe("getQuestions['4']", () => {
  beforeEach(() => {
    setQuestion('4');
  });

  it('returns question 4', () => {
    expect(question.question).toBe(QuestionContent.Q4Question);
  });

  it('returns question 4 content', () => {
    expect(question.description).toBe(QuestionContent.Q4Content);
  });

  it('has the question key "4"', () => {
    expect(question.questionKey).toBe('4');
  });

  it('to have options for yes and no', () => {
    expect(question.options).toStrictEqual(yesNoOptions);
  });

  it('has an action "yes" that sets step to 5 with no end journey', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('5');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(null);
  });

  it('has an action "no" that sets journey end to "NoBenefitExtended"', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('4');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.NoBenefitExtended);
  });
});

describe("getQuestions['5']", () => {
  beforeEach(() => {
    setQuestion('5');
  });

  it('returns question 5', () => {
    expect(question.question).toBe(QuestionContent.Q5Question);
  });

  it('returns question 5 content', () => {
    expect(question.description).toBe(QuestionContent.Q5Content);
  });

  it('has the question key "5"', () => {
    expect(question.questionKey).toBe('5');
  });

  it('to have options for "less than 7 days" or "more than 7 days"', () => {
    expect(question.options).toStrictEqual([
      { key: 'less7', label: 'In the past week (0 to 7 days)' },
      { key: 'more7', label: 'I have had symptoms for more than 7 days' },
    ]);
  });

  it('has an action "less7" that sets step to 6 with no end journey', () => {
    question.actions.less7();

    expect(mockSetToStep).toHaveBeenCalledWith('6');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(null);
  });

  it('has an action "more7" that sets step to 5 and journey end to "TooManyDays"', () => {
    question.actions.more7();

    expect(mockSetToStep).toHaveBeenCalledWith('5');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.TooManyDays);
  });
});

describe("getQuestions['6']", () => {
  const questionKey = '6';
  beforeEach(() => {
    setQuestion(questionKey);
  });

  it('returns question 6', () => {
    expect(question.question).toBe(QuestionContent.Q6Question);
  });

  it('returns question 6 content', () => {
    expect(question.description).toBe(QuestionContent.Q6Content);
  });

  it('has the question key "6"', () => {
    expect(question.questionKey).toBe('6');
  });

  it('to have options for yes and no', () => {
    expect(question.options).toStrictEqual(yesNoOptions);
  });

  it('has an action "yes" that sets journey end to "AntiviralBenefit"', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('6');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.AntiviralBenefit);
  });

  it('has an action "no" that sets step to 6 with no end journey', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('7');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(null);
  });
});

describe("getQuestions['7']", () => {
  const questionKey = '7';
  beforeEach(() => {
    setQuestion(questionKey);
  });

  it('returns question 7', () => {
    expect(question.question).toBe(QuestionContent.Q7Question);
  });

  it('returns question 7 content', () => {
    expect(question.description).toBe(QuestionContent.Q7Content);
  });

  it('has the question key "7"', () => {
    expect(question.questionKey).toBe('7');
  });

  it('to have options for yes and no', () => {
    expect(question.options).toStrictEqual(yesNoOptions);
  });

  it('has an action "yes" that sets step to 7 with no end journey', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('7');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.AntiviralBenefit);
  });

  it('has an action "no" that sets step to 8 with no end journey', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('8');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(null);
  });
});

describe("getQuestions['8']", () => {
  const questionKey = '8';
  beforeEach(() => {
    setQuestion(questionKey);
  });

  it('returns question 8', () => {
    expect(question.question).toBe(QuestionContent.Q8Question);
  });

  it('returns question 8 content', () => {
    expect(question.description).toBe(QuestionContent.Q8Content);
  });

  it('has the question key "8"', () => {
    expect(question.questionKey).toBe('8');
  });

  it('to have options under 60, under 70, and over 70', () => {
    expect(question.options[0].key).toBe('under50');
    expect(question.options[1].key).toBe('under70');
    expect(question.options[2].key).toBe('over70');
  });

  it('has an action "under50" that sets step to 9a with no end journey', () => {
    question.actions.under50();

    expect(mockSetToStep).toHaveBeenCalledWith('9a');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(null);
  });

  it('has an action "under70" that sets step to 9b with no end journey', () => {
    question.actions.under70();

    expect(mockSetToStep).toHaveBeenCalledWith('9b');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(null);
  });

  it('has an action "over70" that sets step to 9c with no end journey', () => {
    question.actions.over70();

    expect(mockSetToStep).toHaveBeenCalledWith('9c');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(null);
  });
});

describe("getQuestions['9a']", () => {
  const questionKey = '9a';
  beforeEach(() => {
    setQuestion(questionKey);
  });

  it('returns question 9 under 60', () => {
    expect(question.question).toBe(QuestionContent.ThreeDosesQuestion);
  });

  it('returns question 9 under 60 content', () => {
    expect(question.description).toBe(QuestionContent.ThreeDosesQuestionContent);
  });

  it('has the question key "9a"', () => {
    expect(question.questionKey).toBe('9a');
  });

  it('to have options for yes and no', () => {
    expect(question.options).toStrictEqual(yesNoOptions);
  });

  it('has an action "yes" that sets journey end to "AntiviralBenefit"', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('9a');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.NoBenefitExtended);
  });

  it('has an action "no" that sets journey end to "NoBenefitExtended"', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('10a');
  });
});

describe("getQuestions['9b']", () => {
  const questionKey = '9b';
  beforeEach(() => {
    setQuestion(questionKey);
  });

  it('asks indigenous identification question', () => {
    expect(question.question).toBe(QuestionContent.ThreeDosesQuestion);
  });

  it('has indigenous identification content', () => {
    expect(question.description).toBe(QuestionContent.ThreeDosesQuestionContent);
  });

  it('has the question key "9b"', () => {
    expect(question.questionKey).toBe('9b');
  });

  it('to have options for yes and no', () => {
    expect(question.options).toStrictEqual(yesNoOptions);
  });

  it('has an action "yes" that sets journey end to "AntiviralBenefit"', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('9b');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.NoBenefitExtended);
  });

  it('has an action "no" that sets step to 9b with no end journey', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('9b');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.AntiviralBenefit);
  });
});

describe("getQuestions['9c']", () => {
  const questionKey = '9c';
  beforeEach(() => {
    setQuestion(questionKey);
  });

  it('returns question 9 70 plus', () => {
    expect(question.question).toBe(QuestionContent.IndigenousQuestion);
  });

  it('returns question 9c content', () => {
    expect(question.description).toBe(QuestionContent.IndigenousQuestionContent);
  });

  it('has the question key "9c"', () => {
    expect(question.questionKey).toBe('9c');
  });

  it('to have options for yes and no', () => {
    expect(question.options).toStrictEqual(yesNoOptions);
  });

  it('has an action "yes" that sets step to 9c and journey end to "AntiviralBenefit"', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('9c');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.AntiviralBenefit);
  });

  it('has an action "no" that sets step to 9c with no end journey', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('10c');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(null);
  });
});

describe("getQuestions['10a']", () => {
  const questionKey = '10a';
  beforeEach(() => {
    setQuestion(questionKey);
  });

  it('asks three or more conditions question', () => {
    expect(question.question).toBe(QuestionContent.ThreeOrMoreConditionsQuestion);
  });

  it('has three or more conditions content', () => {
    expect(question.description).toBe(QuestionContent.ThreeOrMoreConditionsQuestionContent);
  });

  it('has the question key "10a"', () => {
    expect(question.questionKey).toBe('10a');
  });

  it('to have options for yes and no', () => {
    expect(question.options).toStrictEqual(yesNoOptions);
  });

  it('has an action "yes" that sets step to 10a with no end journey', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('10a');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.AntiviralBenefit);
  });

  it('has an action "no" that sets step to 10a with no end journey', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('11a');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(null);
  });
});

describe("getQuestions['10c']", () => {
  const questionKey = '10c';
  beforeEach(() => {
    setQuestion(questionKey);
  });

  it('returns question 10', () => {
    expect(question.question).toBe(QuestionContent.ThreeDosesQuestion);
  });

  it('returns question 10 content', () => {
    expect(question.description).toBe(QuestionContent.ThreeDosesQuestionContent);
  });

  it('has the question key "10c"', () => {
    expect(question.questionKey).toBe('10c');
  });

  it('to have options for yes and no', () => {
    expect(question.options).toStrictEqual(yesNoOptions);
  });

  it('has an action "yes" that sets step to 10c with no end journey', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('11c');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(null);
  });

  it('has an action "no" that sets step to 10c with no end journey', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('10c');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.AntiviralBenefit);
  });
});

describe("getQuestions['11a']", () => {
  const questionKey = '11a';
  beforeEach(() => {
    setQuestion(questionKey);
  });

  it('returns indigenous question', () => {
    expect(question.question).toBe(QuestionContent.IndigenousQuestion);
  });

  it('returns indigenous question content', () => {
    expect(question.description).toBe(QuestionContent.IndigenousQuestionContent);
  });

  it('has the question key "11a"', () => {
    expect(question.questionKey).toBe('11a');
  });

  it('to have options for yes and no', () => {
    expect(question.options).toStrictEqual(yesNoOptions);
  });

  it('has an action "yes" that sets step to 11a with no end journey', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('11a');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.AntiviralBenefit);
  });

  it('has an action "no" that sets step to 11a with no end journey', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('11a');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.NoBenefitExtended);
  });
});

describe("getQuestions['11c']", () => {
  const questionKey = '11c';
  beforeEach(() => {
    setQuestion(questionKey);
  });

  it('returns indigenous question', () => {
    expect(question.question).toBe(QuestionContent.ThreeOrMoreConditionsQuestion);
  });

  it('returns indigenous question content', () => {
    expect(question.description).toBe(QuestionContent.ThreeOrMoreConditionsQuestionContent);
  });

  it('has the question key "11c"', () => {
    expect(question.questionKey).toBe('11c');
  });

  it('to have options for yes and no', () => {
    expect(question.options).toStrictEqual(yesNoOptions);
  });

  it('has an action "yes" that sets step to 11c with no end journey', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('11c');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.AntiviralBenefit);
  });

  it('has an action "no" that sets step to 11c with no end journey', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('11c');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.NoBenefitExtended);
  });
});
