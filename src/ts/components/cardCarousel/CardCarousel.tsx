import Container from "react-bootstrap/Container";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Stack from "react-bootstrap/Stack";

import "styles/components/CardCarousel.scss";
import Card from "ts/components/card/Card";
import { CardCarouselCardData } from "ts/components/cardCarousel/CardCarouselCardData";
import { ScrollLeftOrRight } from "ts/utils/pageActions/ScrollLeftOrRight";

const CardCarousel: React.FC = () => {
  return (
    <Stack
      className="card-carousel-container w-100"
      direction="horizontal"
      data-id="card-carousel"
    >
      <MdChevronLeft
        className="icon-left"
        onClick={() => ScrollLeftOrRight("left", "cards-container")}
      />
      <Container id="cards-container" className="d-flex align-items-center">
        <Card cardData={CardCarouselCardData} />
      </Container>
      <MdChevronRight
        className="icon-right"
        onClick={() => ScrollLeftOrRight("right", "cards-container")}
      />
    </Stack>
  );
};

export default CardCarousel;
