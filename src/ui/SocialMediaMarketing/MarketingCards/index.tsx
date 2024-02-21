import marketingCardsStyles from "./marketingCardsStyles.module.scss";
import { marketingCardsData } from "../../../constants";
import { Card } from "./Card";

export function MarketingCards() {
  return (
    <div className={marketingCardsStyles.cardContainer}>
      {marketingCardsData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
