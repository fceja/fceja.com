import Container from "react-bootstrap/Container";

import "@styles/pages/ProjectsPage.scss";
import CardCarousel from "@components/cardCarousel/CardCarousel";

const IndexPage = () => {
  return (
    <Container fluid className="index-page p-0">
      <p
        className="intro p-2 m-0 w-100 text-center text-wrap d-flex justify-content-center align-items-center"
        id="greeting-text"
      >
        <span>
          Greetings,{" "}
          <em>
            <strong>fceja</strong>
          </em>{" "}
          projects down below.
        </span>
      </p>
      <CardCarousel />
    </Container>
  );
};

export default IndexPage;
