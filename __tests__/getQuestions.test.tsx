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

  it('has an action "no" that sets step to 1 and journey end to "NoBenefitUnder18"', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('1');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.NoBenefitUnder18);
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

  it('has an action "yes" that sets step to 7 with end journey', () => {
    question.actions.yes();

    expect(mockSetToStep).toHaveBeenCalledWith('7');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.AntiviralBenefit);
  });

  it('has an action "no" that sets step to 7 with end journey', () => {
    question.actions.no();

    expect(mockSetToStep).toHaveBeenCalledWith('7');
    expect(mockSetJourneyEnd).toHaveBeenCalledWith(EndJourneyType.NoBenefitExtended);
  });
});
