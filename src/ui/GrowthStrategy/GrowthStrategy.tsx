import { toMain } from "../../routes";
import { ButtonLink } from "../Buttons/Buttons";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { SectionImage } from "../SectionImage/SectionImage";
import {
  SectionParagraphs,
  Paragraph,
} from "../SectionParagraphs/SectionParagraphs";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import growthStrategyStyles from "./growthStrategyStyles.module.scss";
import sectionHeadingStyles from "../SectionHeading/sectionHeadingStyles.module.scss";
import animatedShapeStyles from "../AnimatedShape/animatedShapeStyles.module.scss";
import { AnimatedShape } from "../AnimatedShape/AnimatedShape";
import classNames from "classnames";

export const GrowthStrategy = () => {
  return (
    <section className={growthStrategyStyles.growthStrategy}>
      <article className={growthStrategyStyles.growthStrategy__article}>
        <div className={growthStrategyStyles.content}>
          <SectionTitle title='Thinking "Outside The Box"' />
          <SectionHeading
            className={sectionHeadingStyles["heading--growthStrategy"]}>
            Troubles Growing Your Audience?
          </SectionHeading>
          <SectionParagraphs>
            <Paragraph>
              Attract new followers that are relevant to your objectives by
              reaching outside your social media bubble, and you'll start to see
              a quicker return on your investment.
            </Paragraph>
            <Paragraph>
              Along with captivating visuals, our teams perform countless hours
              of research and planning to deliver optimized marketing campaigns
              that target your ideal audience who are most likely to convert
              into leads.
            </Paragraph>
            <Paragraph>
              By thoroughly planning your paid Social Media Advertising
              campaign, we are able to ensure that every penny of your marketing
              budget is well spent.
            </Paragraph>
          </SectionParagraphs>
        </div>
        <ButtonLink title="Start Driving Sales" path={toMain()} />
        <AnimatedShape
          source="/shape_5.png"
          className={classNames(
            animatedShapeStyles.rotatedShape,
            animatedShapeStyles["rotatedShape--growthStrategy"]
          )}
        />
        <AnimatedShape
          source="/shape_4.png"
          className={classNames(
            animatedShapeStyles.floatingShape,
            animatedShapeStyles["floatingShape--growthStrategy"]
          )}
        />
      </article>
      <SectionImage source="/growth_strategy.png" alt="Growth Strategy Image" />
    </section>
  );
};
