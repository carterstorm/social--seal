import questionsStyles from "./questionsStyles.module.scss";
import { useState } from "react";
import { Question } from "./Question";
import { questions } from "../../../constants";

export const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleQuestionClick = (questionId: number) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <div className={questionsStyles.container}>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            id={question.id}
            questionText={question.questionText}
            answerText={question.answerText}
            isOpen={openQuestion === question.id}
            onQuestionClick={handleQuestionClick}
          />
        );
      })}
    </div>
  );
};
