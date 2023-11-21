import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Stack from "react-bootstrap/Stack";

import "@styles/components/CardCarousel.scss";
import Cards from "@components/cards/Cards";
import { CardsData } from "@data/CardData";
import { ScrollLeftOrRight } from "@utils/pageActions/ScrollLeftOrRight";

const CardCarousel: React.FC = () => {
  return (
    <Stack
      className="card-carousel-container"
      direction="horizontal"
      id="card-carousel"
    >
      <MdChevronLeft
        className="icon-left"
        onClick={() => ScrollLeftOrRight("left", "cards-container")}
      />
      <div
        className="cards-container"
        id="cards-container"
      >
        <Cards cardsData={CardsData}></Cards>
      </div>
      <MdChevronRight
        className="icon-right"
        onClick={() => ScrollLeftOrRight("right", "cards-container")}
      />
    </Stack>
  );
};

export default CardCarousel;
