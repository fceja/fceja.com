import "@styles/components/CardImage.scss";
import { CardImagePropsType } from "@appTypes/index";

const CardImage: React.FC<CardImagePropsType> = (cardImageProps) => {
  const backgroundImageDiv = (
    <div
      className="img-div"
      style={{
        backgroundImage: `url(${cardImageProps.imageUrl})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );

  return (
    <div className="img-link-container">
      {cardImageProps.urlLink ? (
        <a
          className="link-container"
          href={cardImageProps.urlLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {backgroundImageDiv}
        </a>
      ) : (
        backgroundImageDiv
      )}
    </div>
  );
};

export default CardImage;
