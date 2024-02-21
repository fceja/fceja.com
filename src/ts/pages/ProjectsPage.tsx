import Container from "react-bootstrap/Container";

import "@scss/pages/ProjectsPage.scss";
import CardCarousel from "@components/cardCarousel/CardCarousel";
import SocialLinks from "@components/socialLinks/SocialLinks";
import { PAGE_PATHS } from "@common/Constants";

const ProjectsPage = () => {
  return (
    <Container fluid className="index-page">
      <p className="intro" id="projects-page-greeting-text">
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
      <a className="home-link" href={`${PAGE_PATHS.HOME}`}>
        Home
      </a>
    </Container>
  );
};

export default ProjectsPage;
