import "@styles/components/Card.scss";
import { CardsPropsType } from "@appTypes/index";
import ContactSocial from "@components/contactSocial/ContactSocial";
import CardDetails from "@/ts/components/cardDetails/CardDetails";

const Card: React.FC<CardsPropsType> = ({ cardsData }) => {
  return (
    <>
      {/* iterate through each card */}
      {cardsData.map((card, index) => {
        return (
          <div
            key={index}
            id={`card-${index}`}
            data-testid="card"
            className="card"
          >
            <a
              className=".img-link-container"
              href={card.urlLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="img m-1"
                style={{
                  backgroundImage: `url(${card.imagePath})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </a>
            <CardDetails cardDetails={card.cardDetails} />
            <ContactSocial card={card} />
          </div>
        );
      })}
    </>
  );
};

export default Card;
