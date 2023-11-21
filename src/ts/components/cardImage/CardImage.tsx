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

  return !cardImageProps.imageUrl ? (
    // imageUrl is null, return empty div with formatting
    <div className="pt-3"></div>
  ) : (
    // imageUrl exists
    <div className="img-link-container">
      {cardImageProps.urlLink ? (
        // urlLink exists
        <a
          className="link-container"
          href={cardImageProps.urlLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {backgroundImageDiv}
        </a>
      ) : (
        // urlLink dne, return background image only
        backgroundImageDiv
      )}
    </div>
  );
};

export default CardImage;
