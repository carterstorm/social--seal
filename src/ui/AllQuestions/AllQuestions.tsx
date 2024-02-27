import { GradientText } from "../GradientText/GradientText";
import allQuestionsStyles from "./allQuestionsStyles.module.scss";
import QuestionsList from "./QuestionsList/QuestionsList";
import { ButtonLink, Buttons } from "../Buttons/Buttons";
import { toMain } from "../../routes";
import buttonsStyles from "../Buttons/ButtonsStyles.module.scss";
import { SpecialQuestionImage } from "./SpecialQuestionImage/SpecialQuestionImage";
import { SectionHeader } from "../SectionHeader/SectionHeader";

export const AllQuestions = () => {
  return (
    <section className={allQuestionsStyles.allQuestions}>
      <SectionHeader />
      <article className={allQuestionsStyles.article}>
        <div className={allQuestionsStyles.article__content}>
          <GradientText>All Your Questions Are Here</GradientText>
          <QuestionsList />
          <Buttons className={buttonsStyles["buttons--questions"]}>
            <ButtonLink title="Discover More" path={toMain()}></ButtonLink>
          </Buttons>
        </div>
        <SpecialQuestionImage />
      </article>
    </section>
  );
};
