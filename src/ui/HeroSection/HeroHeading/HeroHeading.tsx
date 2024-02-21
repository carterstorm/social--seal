import HeroHeadingStyles from "./heroHeadingStyles.module.scss";

export function HeroHeading() {
  return (
    <h2 className={HeroHeadingStyles.heroTitle}>
      <span className={HeroHeadingStyles.heroTitle__span}>Save Time</span>
      <span className={HeroHeadingStyles.heroTitle__span}>
        Build Connections
      </span>
      <span className={HeroHeadingStyles.heroTitle__span}>
        Increase Profits
      </span>
    </h2>
  );
}
