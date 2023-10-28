import { CardImagePropsType } from "@appTypes/index";

const CardImage: React.FC<CardImagePropsType> = (cardImageProps) => {
  const backgroundImageDiv = (
    <div
      className="img m-1"
      style={{
        backgroundImage: `url(${cardImageProps.imageUrl})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );

  return (
    <>
      {cardImageProps.urlLink ? (
        <a
          className=".img-link-container"
          href={cardImageProps.urlLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {backgroundImageDiv}
        </a>
      ) : (
        backgroundImageDiv
      )}
    </>
  );
};

export default CardImage;
