import HeroSubTitleStyles from "./heroSubTitleStyles.module.scss";

export function HeroSubTitle() {
  return (
    <h1 className={HeroSubTitleStyles.heroSubTitle}>
      Social Media Marketing{" "}
      <span className={HeroSubTitleStyles.heroSubTitle__span}>That Works!</span>
    </h1>
  );
}
