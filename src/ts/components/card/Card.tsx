import "styles/components/Card.scss";

import { CardPropsType } from "ts/types/index";

const Card: React.FC<CardPropsType> = ({ cardData }) => {
  return (
    <>
      {cardData.map((card, index) => {
        return (
          <div id={`card-${index}`} key={index} className="card">
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
            <p className="title text-center text-wrap">{card.title}</p>
            <p className="description m-3 text-wrap">{card.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
