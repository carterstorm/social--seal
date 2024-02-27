import classNames from "classnames";
import { QuestionProps } from "../../../types";
import questionsStyles from "./questionsStyles.module.scss";
import { Plus } from "lucide-react";

export const Question = ({
  id,
  isOpen,
  onQuestionClick,
  questionText,
  answerText,
}: QuestionProps) => {
  const handleClick = () => {
    onQuestionClick(id);
  };

  return (
    <div className={questionsStyles.questionContainer}>
      <div className={questionsStyles.question}>
        <button
          className={questionsStyles.questionButton}
          onClick={handleClick}>
          <div className={questionsStyles.questionButton__image}>
            <Plus width={24} height={24} />
          </div>

          <span className={questionsStyles.questionButton__text}>
            {questionText}
          </span>
        </button>
      </div>
      <div
        className={classNames(questionsStyles.answer, {
          [questionsStyles["answer--active"]]: isOpen,
        })}>
        <p className={questionsStyles.answer__text}>{answerText}</p>
      </div>
    </div>
  );
};
