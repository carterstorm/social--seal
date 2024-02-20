import classNames from "classnames";
import HeroPhotoStyles from "./heroPhotoStyles.module.scss";
import { Card } from "./Card";

export function HeroPhotos() {
  return (
    <div className={classNames(HeroPhotoStyles.heroPhotosContainer)}>
      <div className={classNames(HeroPhotoStyles.heroPhotos)}>
        <Card className={classNames(HeroPhotoStyles.card__square1)} />
        <Card className={classNames(HeroPhotoStyles.card__square2)} />
        <Card className={classNames(HeroPhotoStyles.card__rectangle)} />
      </div>
    </div>
  );
}