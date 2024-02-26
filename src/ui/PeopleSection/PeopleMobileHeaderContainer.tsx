import peopleSectionStyles from "./peopleSectionStyles.module.scss";
import sectionHeadingStyles from "../SectionHeading/sectionHeadingStyles.module.scss";
import sectionParagraphsStyles from "../SectionParagraphs/sectionParagraphsStyles.module.scss";

import { SectionHeading } from "../SectionHeading/SectionHeading";
import {
  Paragraph,
  SectionParagraphs,
} from "../SectionParagraphs/SectionParagraphs";

export const PeopleMobileHeaderContainer = () => {
  return (
    <header className={peopleSectionStyles.peopleMobileHeader}>
      <SectionHeading className={sectionHeadingStyles["heading--peopleHeader"]}>
        Meet The Squad
      </SectionHeading>
      <SectionParagraphs
        className={sectionParagraphsStyles["container--peopleHeader"]}>
        <Paragraph
          className={
            sectionParagraphsStyles["container__paragraph--peopleHeader"]
          }>
          Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt
          arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh
          dolores
        </Paragraph>
      </SectionParagraphs>
    </header>
  );
};
