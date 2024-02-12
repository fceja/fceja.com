import "@scss/components/Card.scss";
import CardDetails from "@components/cardDetails/CardDetails";
import CardImage from "@components/cardImage/CardImage";
import { CardArrayType } from "./CardsTypes";
import WebLinks from "@components/webLinks/WebLinks";

const Cards: React.FC<CardArrayType> = ({ cardArray }) => {
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
          </div>)
      })}
    </>
  );
};

export default Cards;
