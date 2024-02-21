import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import "@scss/components/CardCarousel.scss";
import { CardsContent } from "@content/CardContent";
import Cards from "@components/cards/Cards";
import { ScrollLeftOrRight } from "@utils/pageActions/ScrollLeftOrRight";

const CardCarousel = () => {
  return (
    <div className="carousel-container" id="carousel-container">
      <div className="left-container">
        <MdChevronLeft
          className="icon-left"
          onClick={() => ScrollLeftOrRight("left", "cards-carousel-container")}
        />
      </div>
      <div className="cards-container" id="cards-container">
        <Cards cardArray={CardsContent}></Cards>
      </div>
      <div className="right-container">
        <MdChevronRight
          className="icon-right"
          onClick={() => ScrollLeftOrRight("right", "cards-carousel-container")}
        />
      </div>
    </div>
  );
};

export default CardCarousel;
