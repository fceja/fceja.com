import { Link } from "react-router-dom";

import "@scss/components/Intro.scss";
import { useIncreaseOpacity } from "@common/hooks/UseIncreaseOpacity";
import SocialLinks from "@components/socialLinks/SocialLinks";

const Intro = () => {
  useIncreaseOpacity({
    htmlElemClassName: "intro-container",
  });

  return (
    <div className="intro-container shadow init-hidden init-zero-opac">
      <SocialLinks />
      <p className="intro-text">
        View some of my <Link to="/projects">projects</Link>.
      </p>
      <p className="intro-text-sub">
        Tools and Technologies I've worked with... &darr;
      </p>
    </div>
  );
};

export default Intro;
