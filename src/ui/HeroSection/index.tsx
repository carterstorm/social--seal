import buttonsStyles from "../Buttons/ButtonsStyles.module.scss";
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
    <section>
      <article>
        <div>
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
              className={buttonsStyles["buttonLink--transparent"]}
            />
          </Buttons>
        </HeroDesktopContainer>
      </article>
      <HeroPhotos />
      <HeroTabletContainer>
        <SocialButtons />
        <ButtonLink title="View Our Plans" path={toMain()} />
      </HeroTabletContainer>
    </section>
  );
}
