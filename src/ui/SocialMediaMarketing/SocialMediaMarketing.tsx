import { SectionTitle } from "../SectionTitle/SectionTitle";
import socialMediaMarketingStyles from "./socialMediaMarketingStyles.module.scss";
import sectionTitleStyles from "../SectionTitle/sectionTitleStyles.module.scss";
import sectionHeadingStyles from "../SectionHeading/sectionHeadingStyles.module.scss";
import sectionParagraphsStyles from "../SectionParagraphs/sectionParagraphsStyles.module.scss";
import buttonsStyles from "../Buttons/buttonsStyles.module.scss";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import {
  Emphasis,
  Paragraph,
  SectionParagraphs,
} from "../SectionParagraphs/SectionParagraphs";
import { ButtonLink, Buttons } from "../Buttons/Buttons";
import { toMain } from "../../routes";
import { MarketingCards } from "./MarketingCards";
import classNames from "classnames";

export const SocialMediaMarketing = () => {
  return (
    <div className={socialMediaMarketingStyles.sectionWrapper}>
      <section className={socialMediaMarketingStyles.social}>
        <article className={socialMediaMarketingStyles.social__article}>
          <div className={socialMediaMarketingStyles.content}>
            <SectionTitle
              title="Social Media Management is"
              className={sectionTitleStyles["title--socialMarketing"]}
            />
            <SectionHeading
              className={sectionHeadingStyles["heading--socialMarketing"]}>
              Building Brands <br /> Creating Connections <br /> Driving Sales
            </SectionHeading>
            <SectionParagraphs
              className={sectionParagraphsStyles["container--socialMarketing"]}>
              <Paragraph>
                Social Media is more than just posting and showing off how many
                followers you have. It's a valuable addition to your marketing
                strategy that <Emphasis>builds trust</Emphasis> and{" "}
                <Emphasis> creates connections</Emphasis> with potential
                customers to <Emphasis>drive sales</Emphasis> and{" "}
                <Emphasis>increase your revenue</Emphasis>.
              </Paragraph>
              <Paragraph>
                Save your time and money by partnering with us and start seeing
                results that give you the{" "}
                <Emphasis>highest return on investment</Emphasis>.
              </Paragraph>
              <Paragraph>After all; when you grow, we grow together.</Paragraph>
            </SectionParagraphs>
          </div>
          <Buttons className={buttonsStyles["buttons--socialMarketing"]}>
            <ButtonLink
              title="Contact us"
              path={toMain()}
              className={buttonsStyles["buttonLink--socialMarketing"]}
            />
            <ButtonLink
              title="How Can We Help"
              path={toMain()}
              className={classNames(
                buttonsStyles["buttonLink--transparent"],
                buttonsStyles["buttonLink--socialMarketing"]
              )}
            />
          </Buttons>
        </article>
        <MarketingCards />
      </section>
    </div>
  );
};
