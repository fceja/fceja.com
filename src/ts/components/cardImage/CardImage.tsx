import "@scss/components/CardImage.scss";
import { WebLinksType } from "@components/webLinks/WebLinks";

type CardImageType = WebLinksType;

const CardImage: React.FC<CardImageType> = (props) => {
  const backgroundImageDiv = (
    <div
      className="img-div"
      style={{
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );

  return !props.imageUrl ? (
    // imageUrl is null, return empty div with formatting
    <div className="pt-3"></div>
  ) : (
    // imageUrl exists
    <div className="img-link-container">
      {props.urlLink ? (
        // urlLink exists
        <a
          className="link-container"
          href={props.urlLink}
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
