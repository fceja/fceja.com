import Container from "react-bootstrap/Container";

import "@styles/pages/ProjectsPage.scss";
import CardCarousel from "@components/cardCarousel/CardCarousel";
import SocialLinks from "@components/socialLinks/SocialLinks";

const IndexPage = () => {
  return (
    <Container fluid className="index-page">
      <p
        className="intro d-flex align-items-center justify-content-center m-0"
        id="greeting-text"
      >
        <span>
          Greetings,
          <em>
            <strong> fceja </strong>
          </em>
          projects down below.
        </span>
      </p>
      <SocialLinks />
      <CardCarousel />
    </Container>
  );
};

export default IndexPage;
