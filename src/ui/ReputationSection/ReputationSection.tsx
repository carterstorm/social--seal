import { toMain } from "../../routes";
import { ButtonLink } from "../Buttons/Buttons";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { SectionImage } from "../SectionImage/SectionImage";
import {
  Paragraph,
  SectionParagraphs,
} from "../SectionParagraphs/SectionParagraphs";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import reputationSectionStyles from "./reputationSectionStyles.module.scss";
import sectionHeadingStyles from "../SectionHeading/sectionHeadingStyles.module.scss";
import animatedShapeStyles from "../AnimatedShape/animatedShapeStyles.module.scss";
import { AnimatedShape } from "../AnimatedShape/AnimatedShape";
import classNames from "classnames";

export const ReputationSection = () => {
  return (
    <section className={reputationSectionStyles.reputation}>
      <SectionImage source="/reputation.png" alt="Reputation section image" />
      <article className={reputationSectionStyles.reputation__article}>
        <div className={reputationSectionStyles.content}>
          <SectionTitle title="Worry-Free" />
          <SectionHeading
            className={sectionHeadingStyles["heading--reputation"]}>
            Risking Your Reputation and Losing Sales?
          </SectionHeading>
          <SectionParagraphs>
            <Paragraph>
              Our 24/7 Inbox Management is your answer to keep up with messages
              and not miss out on potential leads.
            </Paragraph>
            <Paragraph>
              By offering quick replies to your audience you will elevate your
              brands image and help you get the sale.
            </Paragraph>
          </SectionParagraphs>
        </div>
        <ButtonLink title="Start Replying Faster" path={toMain()} />
        <AnimatedShape
          source="/shape_3.png"
          className={classNames(
            animatedShapeStyles.rotatedShape,
            animatedShapeStyles["rotatedShape--reputation"]
          )}
        />
        <AnimatedShape
          source="/shape_4.png"
          className={classNames(
            animatedShapeStyles.floatingShape,
            animatedShapeStyles["floatingShape--reputation"]
          )}
        />
      </article>
    </section>
  );
};
