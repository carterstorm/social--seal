import classNames from "classnames";
import HeroSectionStyles from "./HeroSectionStyles.module.scss";
import ButtonsStyles from "../Buttons/ButtonsStyles.module.scss";
import { SocialButtons } from "../SocialButtons/SocialButtons";
import { HeroSubTitle } from "./HeroSubTitle/HeroSubTitle";
import { HeroHeading } from "./HeroHeading/HeroHeading";
import { ButtonLink, Buttons } from "../Buttons/Buttons";
import { toMain } from "../../routes";
import { HeroPhotos } from "./HeroPhotos/HeroPhotos";

export function HeroSection() {
  return (
    <section className={classNames(HeroSectionStyles.hero)}>
      <article className={classNames(HeroSectionStyles.hero__article)}>
        <div className={classNames(HeroSectionStyles.content)}>
          <HeroSubTitle />
          <HeroHeading />
          <SocialButtons />
        </div>
        <Buttons>
          <ButtonLink title="View Our Plans" path={toMain()} />
          <ButtonLink
            title="What We Offer"
            path={toMain()}
            className={classNames(ButtonsStyles["buttonLink--transparent"])}
          />
        </Buttons>
      </article>
      <HeroPhotos />
    </section>
  );
}
