import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Stack from "react-bootstrap/Stack";

import "@scss/components/CardCarousel.scss";
import { CardsData } from "@data/CardData";
import Cards from "@components/cards/Cards";
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
        <Cards cardArray={CardsData}></Cards>
      </div>
      <MdChevronRight
        className="icon-right"
        onClick={() => ScrollLeftOrRight("right", "cards-container")}
      />
    </Stack>
  );
};

export default CardCarousel;
