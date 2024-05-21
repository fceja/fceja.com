import "@scss/pages/ProjectsPage.scss";
import CardCarousel from "@components/cardCarousel/CardCarousel";
import { PAGE_PATHS } from "@common/Constants";
import SocialLinks from "@components/socialLinks/SocialLinks";

const ProjectsPage = () => {
  return (
    <>
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
    </>
  );
};

export default ProjectsPage;
