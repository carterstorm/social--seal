import classNames from "classnames";
import marketingCardsStyles from "./marketingCardsStyles.module.scss";
import { Counter } from "./Counter";

type CardProps = {
  card: {
    id: number;
    title: string;
    number: number;
  };
};

export function Card({ card }: CardProps) {
  return (
    <div
      key={card.id}
      className={classNames(
        marketingCardsStyles.card,
        marketingCardsStyles[`${card.title}`]
      )}>
      <div className={marketingCardsStyles.card__info}>
        <span
          className={classNames(
            marketingCardsStyles.card__number,
            marketingCardsStyles[`card__number--${card.title}Color`]
          )}>
          <Counter to={card.number} />
          {card.title === "customers"
            ? "K"
            : card.title === "projects"
            ? "+"
            : ""}
        </span>
        <span className={marketingCardsStyles.card__title}>{card.title}</span>
      </div>
      <div
        className={classNames(
          marketingCardsStyles.card__image,
          marketingCardsStyles[`card__image--${card.title}`]
        )}></div>
    </div>
  );
}
