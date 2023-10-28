import "@styles/components/Card.scss";
import CardDetails from "@components/cardDetails/CardDetails";
import CardImage from "@components/cardImage/CardImage";
import { CardPropsType } from "@appTypes/index";
import WebLinks from "@components/webLinks/WebLinks";

const Card: React.FC<CardPropsType> = (cardProps) => {
  return (
    <div id={`card-${cardProps.index}`} data-testid="card" className="card">
      <CardImage {...cardProps.webLinks} />
      <CardDetails {...cardProps.cardDetails} />
      <WebLinks {...cardProps.webLinks} />
    </div>
  );
};

export default Card;
