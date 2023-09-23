import Container from "react-bootstrap/Container";

import "styles/pages/IndexPage.scss";
import { CardData } from "ts/components/card/CardData";
import CardCarousel from "ts/components/cardCarousel/CardCarousel";

const IndexPage = () => {
  return (
    <Container fluid className="index-page p-0">
      <p className="intro p-2 m-0 w-100 text-center text-wrap d-flex justify-content-center align-items-center">
        Greetings, FC projects down below.
      </p>
      <CardCarousel cardData={CardData} />
    </Container>
  );
};

export default IndexPage;
