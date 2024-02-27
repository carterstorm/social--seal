import { GradientText } from "../GradientText/GradientText";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import faqSectionStyles from "./faqSectionStyles.module.scss";
import gradientTextStyles from "../GradientText/gradientTextStyles.module.scss";
import sectionParagraphsStyles from "../SectionParagraphs/sectionParagraphsStyles.module.scss";
import sectionHeadingStyles from "../SectionHeading/sectionHeadingStyles.module.scss";
import {
  Paragraph,
  SectionParagraphs,
} from "../SectionParagraphs/SectionParagraphs";
import { Questions } from "./Questions/Questions";

export const FaqSection = () => {
  return (
    <section className={faqSectionStyles.moreQuestions}>
      <article className={faqSectionStyles.moreQuestions__article}>
        <div className={faqSectionStyles.content}>
          <img src="/faq_image.png" alt="FAQ Image" style={{ width: "100%" }} />
          <SectionHeading className={sectionHeadingStyles["heading--faq"]}>
            All Your Questions Are Here
          </SectionHeading>
          <GradientText className={gradientTextStyles["heading--faq"]}>
            & Knock Me Directly to Know More
          </GradientText>
          <SectionParagraphs
            className={sectionParagraphsStyles["container--faq"]}>
            <Paragraph
              className={sectionParagraphsStyles["container__paragraph--faq"]}>
              Lorem ipsum dolor sit amet, sed nulla ante amet, elementum
              tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac
              scelerisque nibh.
            </Paragraph>
          </SectionParagraphs>
        </div>
      </article>
      <Questions />
    </section>
  );
};
