import "@styles/components/Card.scss";
import { CardPropsType } from "@appTypes/index";
import WebLinks from "@/ts/components/webLinks/WebLinks";
import CardDetails from "@/ts/components/cardDetails/CardDetails";

const Card: React.FC<CardPropsType> = (cardProps) => {
  return (
    <div id={`card-${cardProps.index}`} data-testid="card" className="card">
      <a
        className=".img-link-container"
        href={cardProps.webLinks.urlLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="img m-1"
          style={{
            backgroundImage: `url(${cardProps.imagePath})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </a>
      <CardDetails {...cardProps.cardDetails} />
      <WebLinks {...cardProps.webLinks} />
    </div>
  );
};

export default Card;
