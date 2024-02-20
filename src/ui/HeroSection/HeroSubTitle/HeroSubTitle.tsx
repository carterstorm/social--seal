import classNames from "classnames";
import HeroSubTitleStyles from "./heroSubTitleStyles.module.scss";

export function HeroSubTitle() {
  return (
    <h1 className={classNames(HeroSubTitleStyles.heroSubTitle)}>
      Social Media Marketing{" "}
      <span className={classNames(HeroSubTitleStyles.heroSubTitle__span)}>
        That Works!
      </span>
    </h1>
  );
}
