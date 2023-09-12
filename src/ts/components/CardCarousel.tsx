import Container from "react-bootstrap/Container";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Stack from "react-bootstrap/Stack";

import "styles/components/CardCarousel.scss";
import Card from "ts/components/Card";
import { CardCarouselPropsType } from "ts/types/index";
import { ScrollLeftOrRight } from "ts/scripts/ScrollLeftOrRight";

const CardCarousel: React.FC<CardCarouselPropsType> = ({ cardData }) => {
  return (
    <Stack className="card-carousel-container w-100" direction="horizontal">
      <MdChevronLeft
        className="icon-left"
        onClick={() => ScrollLeftOrRight("left", "cards-container")}
      />
      <Container id="cards-container" className="d-flex align-items-center">
        <Card cardData={cardData} />
      </Container>
      <MdChevronRight
        className="icon-right"
        onClick={() => ScrollLeftOrRight("right", "cards-container")}
      />
    </Stack>
  );
};

export default CardCarousel;
