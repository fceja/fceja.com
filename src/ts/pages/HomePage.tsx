import Container from "react-bootstrap/Container";

import "styles/pages/HomePage.scss";
import { CardData } from "ts/data/CardData";
import CardCarousel from "ts/components/CardCarousel";

const HomePage = () => {
  return (
    <Container fluid className="home-page p-0">
      <p className="intro p-2 m-0 w-100 text-center text-wrap d-flex justify-content-center align-items-center">
        Greetings, FC projects down below.
      </p>
      <CardCarousel cardData={CardData} />
    </Container>
  );
};

export default HomePage;
