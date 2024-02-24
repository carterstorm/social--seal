import { toMain } from "../../routes";
import { Buttons, ButtonLink } from "../Buttons/Buttons";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import {
  SectionParagraphs,
  Paragraph,
  Emphasis,
} from "../SectionParagraphs/SectionParagraphs";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { MonitoringList } from "./MonitoringList/MonitoringList";
import monitoringSectionStyles from "./monitoringSectionStyles.module.scss";
import buttonsStyles from "../Buttons/ButtonsStyles.module.scss";
import sectionHeadingStyles from "../SectionHeading/sectionHeadingStyles.module.scss";
import sectionParagraphsStyles from "../SectionParagraphs/sectionParagraphsStyles.module.scss";
import { MonitoringImage } from "./MonitoringImage/MonitoringImage";
import classNames from "classnames";

export const MonitoringSection = () => {
  return (
    <section className={monitoringSectionStyles.monitoring}>
      <article className={monitoringSectionStyles.monitoring__article}>
        <div className={monitoringSectionStyles.content}>
          <SectionTitle title="Our Expertise is Your Success" />
          <SectionHeading
            className={sectionHeadingStyles["heading--monitoring"]}>
            Social Gossiping Slowing You Down?
          </SectionHeading>
          <SectionParagraphs
            className={sectionParagraphsStyles["container--monitoring"]}>
            <Paragraph>
              Staying on top of how your brand is being used is an important
              aspect to{" "}
              <Emphasis
                className={
                  sectionParagraphsStyles["container__emphasis--monitoring"]
                }>
                protect your identity and reputation.
              </Emphasis>
            </Paragraph>
            <Paragraph>
              Our sophisticated{" "}
              <Emphasis
                className={
                  sectionParagraphsStyles["container__emphasis--monitoring"]
                }>
                threat monitoring
              </Emphasis>{" "}
              system enables us to{" "}
              <Emphasis
                className={
                  sectionParagraphsStyles["container__emphasis--monitoring"]
                }>
                quickly identify threats
              </Emphasis>{" "}
              towards your brand and deal with them to{" "}
              <Emphasis
                className={
                  sectionParagraphsStyles["container__emphasis--monitoring"]
                }>
                prevent damage
              </Emphasis>{" "}
              to your reputation.
            </Paragraph>
            <Paragraph>The most common threats we encounter:</Paragraph>
          </SectionParagraphs>
          <MonitoringList />
        </div>
        <Buttons className={buttonsStyles["buttons--monitoring"]}>
          <ButtonLink title="Protect Your Brand" path={toMain()} />
          <ButtonLink
            title="Find Out more"
            path={toMain()}
            className={classNames(
              buttonsStyles["buttonLink--transparent"],
              buttonsStyles["buttonLink--monitoring"]
            )}
          />
        </Buttons>
      </article>
      <MonitoringImage />
    </section>
  );
};
