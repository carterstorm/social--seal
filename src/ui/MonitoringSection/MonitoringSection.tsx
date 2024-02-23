import { toMain } from "../../routes";
import { Buttons, ButtonLink } from "../Buttons/Buttons";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import {
  SectionParagraphs,
  Paragraph,
} from "../SectionParagraphs/SectionParagraphs";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { MonitoringList } from "./MonitoringList/MonitoringList";
import monitoringSectionStyles from "./monitoringSectionStyles.module.scss";
import buttonsStyles from "../Buttons/buttonsStyles.module.scss";
import sectionHeadingStyles from "../SectionHeading/sectionHeadingStyles.module.scss";
import sectionParagraphsStyles from "../SectionParagraphs/sectionParagraphsStyles.module.scss";
import { MonitoringImage } from "./MonitoringImage/MonitoringImage";

export const MonitoringSection = () => {
  return (
    <section className={monitoringSectionStyles.monitoring}>
      <article className={monitoringSectionStyles.monitoring__article}>
        <div className={monitoringSectionStyles.content}>
          <SectionTitle title="Our Expertise is Your Success" />
          <SectionHeading
            className={sectionHeadingStyles["heading--monitoring"]}>
            Troubles Growing Your Audience?
          </SectionHeading>
          <SectionParagraphs
            className={sectionParagraphsStyles["container--monitoring"]}>
            <Paragraph>
              Staying on top of how your brand is being used is an important
              aspect to protect your identity and reputation.
            </Paragraph>
            <Paragraph>
              Our sophisticated threat monitoring system enables us to quickly
              identify threats towards your brand and deal with them to prevent
              damage to your reputation.
            </Paragraph>
            <Paragraph>The most common threats we encounter:</Paragraph>
          </SectionParagraphs>
          <MonitoringList />
        </div>
        <Buttons>
          <ButtonLink title="Protect Your Brand" path={toMain()} />
          <ButtonLink
            title="Find Out more"
            path={toMain()}
            className={buttonsStyles["buttonLink--transparent"]}
          />
        </Buttons>
      </article>
      <MonitoringImage />
    </section>
  );
};
