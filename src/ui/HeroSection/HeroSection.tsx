import classNames from "classnames";
import HeroSectionStyles from "./heroSectionStyles.module.scss";
import ButtonsStyles from "../Buttons/buttonsStyles.module.scss";
import { SocialButtons } from "../SocialButtons/SocialButtons";
import { HeroSubTitle } from "./HeroSubTitle/HeroSubTitle";
import { HeroHeading } from "./HeroHeading/HeroHeading";
import { ButtonLink, Buttons } from "../Buttons/Buttons";
import { toMain } from "../../routes";
import { HeroPhotos } from "./HeroPhotos/HeroPhotos";
import { HeroDesktopContainer } from "./HeroDesktopContainer/HeroDesktopContainer";
import { HeroTabletContainer } from "./HeroTabletContainer/HeroTabletContainer";

export function HeroSection() {
  return (
    <section className={classNames(HeroSectionStyles.hero)}>
      <article className={classNames(HeroSectionStyles.hero__article)}>
        <div className={classNames(HeroSectionStyles.content)}>
          <HeroSubTitle />
          <HeroHeading />
          <HeroDesktopContainer>
            <SocialButtons />
          </HeroDesktopContainer>
        </div>
        <HeroDesktopContainer>
          <Buttons>
            <ButtonLink title="View Our Plans" path={toMain()} />
            <ButtonLink
              title="What We Offer"
              path={toMain()}
              className={classNames(ButtonsStyles["buttonLink--transparent"])}
            />
          </Buttons>
        </HeroDesktopContainer>
      </article>
      <HeroPhotos />
      <HeroTabletContainer>
        <SocialButtons />
        <Buttons>
          <ButtonLink title="View Our Plans" path={toMain()} />
        </Buttons>
      </HeroTabletContainer>
    </section>
  );
}
