import "@scss/components/Card.scss";
import CardDetails, {
  CardDetailsProps,
} from "@components/cardDetails/CardDetails";
import CardImage from "@components/cardImage/CardImage";
import WebLinks, { WebLinksProps } from "@components/webLinks/WebLinks";

type CardsProps = {
  cardArray: readonly CardType[];
};

export type CardType = {
  cardDetails: CardDetailsProps;
  index: number | null;
  webLinks: WebLinksProps;
};

const Cards = (props: CardsProps) => {
  return (
    <>
      {props.cardArray.map((card: any, index: any) => {
        {
        }
        return (
          <div
            key={`card-${index}`}
            id={`card-${index}`}
            data-testid="card"
            className="card ms-2 me-3 shadow"
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
