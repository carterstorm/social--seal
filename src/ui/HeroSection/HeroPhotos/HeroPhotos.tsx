import HeroPhotoStyles from "./heroPhotoStyles.module.scss";
import { Card } from "./Card";

export function HeroPhotos() {
  return (
    <div className={HeroPhotoStyles.heroPhotosContainer}>
      <div className={HeroPhotoStyles.heroPhotos}>
        <Card className={HeroPhotoStyles.card__square1} />
        <Card className={HeroPhotoStyles.card__square2} />
        <Card className={HeroPhotoStyles.card__rectangle} />
      </div>
    </div>
  );
}
