import Container from "react-bootstrap/Container";
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
      data-id="card-carousel"
    >
      <div className="card-carousel-container">
        <MdChevronLeft
          className="icon-left"
          onClick={() => ScrollLeftOrRight("left", "cards-container")}
        />
        <Container
          id="cards-container"
          className="d-flex align-items-center pt-4 pb-4"
        >
          <Cards cardsData={CardsData}></Cards>
        </Container>
        <MdChevronRight
          className="icon-right"
          onClick={() => ScrollLeftOrRight("right", "cards-container")}
        />
      </div>
    </Stack>
  );
};

export default CardCarousel;
