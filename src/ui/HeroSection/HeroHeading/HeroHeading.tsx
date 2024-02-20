import classNames from "classnames";
import HeroHeadingStyles from "./HeroHeadingStyles.module.scss";

export function HeroHeading() {
  return (
    <h2 className={classNames(HeroHeadingStyles.heroTitle)}>
      <span className={classNames(HeroHeadingStyles.heroTitle__span)}>
        Save Time
      </span>
      <span className={classNames(HeroHeadingStyles.heroTitle__span)}>
        Build Connections
      </span>
      <span className={classNames(HeroHeadingStyles.heroTitle__span)}>
        Increase Profits
      </span>
    </h2>
  );
}
