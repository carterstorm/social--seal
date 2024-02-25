import { SectionHeading } from "../SectionHeading/SectionHeading";
import {
  SectionParagraphs,
  Paragraph,
} from "../SectionParagraphs/SectionParagraphs";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import sectionHeaderStyles from "./sectionHeaderStyles.module.scss";

export const SectionHeader = () => {
  return (
    <header className={sectionHeaderStyles.sectionHeader}>
      <SectionTitle title="Our Expertise is Your Success" />
      <SectionHeading className={sectionHeaderStyles.sectionHeader__heading}>
        We Create Creative Designs For Every Web Page
      </SectionHeading>
      <SectionParagraphs>
        <Paragraph>
          Staying on top of how your brand is being used is an important aspect
          to protect your identity and reputation.
        </Paragraph>
      </SectionParagraphs>
    </header>
  );
};
