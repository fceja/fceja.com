import { CardImagePropsType } from "@appTypes/index";

const CardImage: React.FC<CardImagePropsType> = (cardImageProps) => {
  return (
    <a
      className=".img-link-container"
      href={cardImageProps.urlLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="img m-1"
        style={{
          backgroundImage: `url(${cardImageProps.imageUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </a>
  );
};

export default CardImage;
