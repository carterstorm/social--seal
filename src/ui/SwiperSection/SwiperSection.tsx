import { SectionHeading } from "../SectionHeading/SectionHeading";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import swiperStyles from "./swiperStyles.module.scss";
import sectionHeadingStyles from "../SectionHeading/sectionHeadingStyles.module.scss";
import sectionParagraphsStyles from "../SectionParagraphs/sectionParagraphsStyles.module.scss";
import {
  Emphasis,
  Paragraph,
  SectionParagraphs,
} from "../SectionParagraphs/SectionParagraphs";
import { ButtonLink } from "../Buttons/Buttons";
import { toMain } from "../../routes";
import { SwiperComponent } from "./SwiperComponent/SwiperComponent";

export const SwiperSection = () => {
  return (
    <section className={swiperStyles.swiperSection}>
      <article className={swiperStyles.swiperSection__article}>
        <div className={swiperStyles.content}>
          <SectionTitle title="Our Expertise is Your Success" />
          <SectionHeading className={sectionHeadingStyles["heading--swiper"]}>
            Struggling to Make Engaging Content?
          </SectionHeading>
          <SectionParagraphs
            className={sectionParagraphsStyles["container--swiper"]}>
            <Paragraph>
              From the research and planning to creating striking images and
              videos for your posts, our service focuses on creating a{" "}
              <Emphasis
                className={
                  sectionParagraphsStyles["container__emphasis--swiper"]
                }>
                unique voice
              </Emphasis>{" "}
              for your brand that will{" "}
              <Emphasis
                className={
                  sectionParagraphsStyles["container__emphasis--swiper"]
                }>
                engage your audience
              </Emphasis>{" "}
              and keep them coming back for more!
            </Paragraph>
          </SectionParagraphs>
          <div className={swiperStyles.mobileSwiperContainer}>
            <SwiperComponent />
          </div>
        </div>
        <ButtonLink title="View More" path={toMain()} />
      </article>
      <div className={swiperStyles.desktopSwiperContainer}>
        <SwiperComponent />
      </div>
    </section>
  );
};
