import classNames from "classnames";
import whatWeDoCardStyles from "./whatWeDoCardStyles.module.scss";

type WhatWeDoCardProps = {
  card: string;
  numberValue: string;
  description: string;
};

export const WhatWeDoCard = ({
  card,
  numberValue,
  description,
}: WhatWeDoCardProps) => {
  return (
    <div
      className={classNames(
        whatWeDoCardStyles.card,
        whatWeDoCardStyles[`card--${card}`]
      )}>
      <div className={whatWeDoCardStyles.card__info}>
        <span
          className={classNames(
            whatWeDoCardStyles.card__number,
            whatWeDoCardStyles[`card__number--${card}`]
          )}>
          {numberValue}
        </span>
        <p
          className={classNames(
            whatWeDoCardStyles.card__description,
            whatWeDoCardStyles[`card__info--${card}`]
          )}>
          {description}
        </p>
      </div>
    </div>
  );
};
