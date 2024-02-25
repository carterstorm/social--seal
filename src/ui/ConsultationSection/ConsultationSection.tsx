import { SectionHeading } from "../SectionHeading/SectionHeading";
import {
  Paragraph,
  SectionParagraphs,
} from "../SectionParagraphs/SectionParagraphs";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import consultationSectionStyles from "./consultationSectionStyles.module.scss";
import sectionHeadingStyles from "../SectionHeading/sectionHeadingStyles.module.scss";
import sectionTitleStyles from "../SectionTitle/sectionTitleStyles.module.scss";
import { ConsultationForm } from "./ConsultationForm/ConsultationForm";

export const ConsultationSection = () => {
  return (
    <section className={consultationSectionStyles.consultation}>
      <article className={consultationSectionStyles.consultation__article}>
        <div className={consultationSectionStyles.content}>
          <SectionTitle
            title="95% Accuracy"
            className={sectionTitleStyles["title--consultation"]}
          />
          <SectionHeading
            className={sectionHeadingStyles["heading--consultation"]}>
            Worldwide Best Digital Marketing Agency
          </SectionHeading>
          <SectionParagraphs>
            <Paragraph>
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since The 1500s, When An Unknown Printer Took A Galley Of
              Type And
            </Paragraph>
          </SectionParagraphs>
        </div>
      </article>
      <ConsultationForm />
    </section>
  );
};
