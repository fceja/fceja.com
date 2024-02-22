import { useEffect, useState } from "react";

import "@scss/components/Intro.scss";
import { useIncreaseOpacity } from "@common/hooks/UseIncreaseOpacity.hook";
import { PAGE_PATHS } from "@common/Constants";
import SocialLinks from "@components/socialLinks/SocialLinks";

const Intro = () => {
  useIncreaseOpacity({
    htmlElemClassName: "intro-container",
  });

  return (
    <div className="intro-container shadow init-hidden init-zero-opac">
      <SocialLinks />
      <p className="intro-text">
        View some of my <a href={`${PAGE_PATHS.PROJECTS}`}>projects</a>.
      </p>
      <p className="intro-text">
        Tools and Technologies I've worked with... &darr;
      </p>
    </div>
  );
};

export default Intro;
