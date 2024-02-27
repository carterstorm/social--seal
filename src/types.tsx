export type PersonType = {
  id: string;
  name: string;
  jobTitle: string;
  personImage: string;
};

export type QuestionData = {
  id: number;
  questionText: string;
  answerText: string;
};

export type QuestionProps = QuestionData & {
  isOpen: boolean;
  onQuestionClick: (questionId: number) => void;
};
