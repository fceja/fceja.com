import "@styles/components/Card.scss";
import { CardDataArrayProps } from "@appTypes/index";
import Card from "@components/card/Card";

const Cards: React.FC<CardDataArrayProps> = ({ cardsData }) => {
  return (
    <>
      {cardsData.map((card, index) => {
        card.index = index;

        return <Card {...card} key={index}></Card>;
      })}
    </>
  );
};

export default Cards;
