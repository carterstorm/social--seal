import { toMain } from "../../routes";
import { ButtonLink, Buttons } from "../Buttons/Buttons";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import {
  SectionParagraphs,
  Paragraph,
} from "../SectionParagraphs/SectionParagraphs";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import whatWeDoStyles from "./whatWeDoStyles.module.scss";
import sectionHeadingStyles from "../SectionHeading/sectionHeadingStyles.module.scss";

export const WhatWeDo = () => {
  return (
    <section className={whatWeDoStyles.whatWeDo}>
      <article className={whatWeDoStyles.whatWeDo__article}>
        <div className={whatWeDoStyles.content}>
          <SectionTitle title="What We Do" />
          <SectionHeading
            className={sectionHeadingStyles["heading--brandOversight"]}>
            We design and develop web and mobile applications for our clients
            worldwide
          </SectionHeading>
          <SectionParagraphs>
            <Paragraph>
              Staying on top of how your brand is being used is an important
              aspect to protect your identity and reputation.
            </Paragraph>
          </SectionParagraphs>
        </div>
        <Buttons>
          <ButtonLink title="Protect Your Brand" path={toMain()} />
        </Buttons>
      </article>
    </section>
  );
};
