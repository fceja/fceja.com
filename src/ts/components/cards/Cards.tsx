import "@scss/components/Card.scss";
import CardDetails, {
  CardDetailsType,
} from "@components/cardDetails/CardDetails";
import CardImage from "@components/cardImage/CardImage";
import WebLinks, { WebLinksType } from "@components/webLinks/WebLinks";

type CardTypeArray = {
  cardArray: readonly CardType[];
};

export type CardType = {
  cardDetails: CardDetailsType;
  index: number | null;
  webLinks: WebLinksType;
};

const Cards: React.FC<CardTypeArray> = ({ cardArray }) => {
  return (
    <>
      {cardArray.map((card: any, index: any) => {
        return (
          <div
            key={`card-${index}`}
            id={`card-${index}`}
            data-testid="card"
            className="card ms-2 me-3"
          >
            <CardImage {...card.webLinks} />
            <CardDetails {...card.cardDetails} />
            <WebLinks {...card.webLinks} />
          </div>
        );
      })}
    </>
  );
};

export default Cards;
