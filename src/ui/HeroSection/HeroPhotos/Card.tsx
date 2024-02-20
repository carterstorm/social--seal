import classNames from "classnames";
import HeroPhotoStyles from "./heroPhotoStyles.module.scss";

type CardProps = {
  className?: string;
};

export function Card({ className }: CardProps) {
  return <div className={classNames(HeroPhotoStyles.card, className)} />;
}
