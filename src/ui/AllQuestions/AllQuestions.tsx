import { GradientText } from "./GradientText/GradientText";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import {
  Paragraph,
  SectionParagraphs,
} from "../SectionParagraphs/SectionParagraphs";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import allQuestionsStyles from "./allQuestionsStyles.module.scss";
import QuestionsList from "./QuestionsList/QuestionsList";
import { ButtonLink, Buttons } from "../Buttons/Buttons";
import { toMain } from "../../routes";
import buttonsStyles from "../Buttons/buttonsStyles.module.scss";
import { SpecialQuestionImage } from "./SpecialQuestionImage/SpecialQuestionImage";

export const AllQuestions = () => {
  return (
    <section className={allQuestionsStyles.allQuestions}>
      <header className={allQuestionsStyles.allQuestions__header}>
        <SectionTitle title="Our Expertise is Your Success" />
        <SectionHeading>
          We Create Creative Designs For Every Web Page
        </SectionHeading>
        <SectionParagraphs>
          <Paragraph>
            Staying on top of how your brand is being used is an important
            aspect to protect your identity and reputation.
          </Paragraph>
        </SectionParagraphs>
      </header>
      <article className={allQuestionsStyles.article}>
        <div className={allQuestionsStyles.article__content}>
          <GradientText />
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
