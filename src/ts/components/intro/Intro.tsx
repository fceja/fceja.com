import { useEffect, useState } from "react";

import "@scss/components/Intro.scss";
import SocialLinks from "@components/socialLinks/SocialLinks";

const Intro = () => {
  const [isGreetAnimeDone, setIsGreetAnimeDone] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const animationElems = document.getElementsByClassName("h1-greeting");

      if (animationElems.length === 0) {
        clearInterval(intervalId);
        setIsGreetAnimeDone(true);
      }
    }, 500);
  }, []);

  useEffect(() => {
    const divElems = document.getElementsByClassName("intro-container");

    const divElem = divElems[0] as HTMLElement;

    if (!divElem) return;
    if (!isGreetAnimeDone) return;

    divElem.style.display = "block"; // make visible

    let cur_opacity = 0.0;
    const intervalId = setInterval(() => {
      if (cur_opacity > 1.0) clearInterval(intervalId);

      divElem.style.opacity = `${cur_opacity}`;
      cur_opacity += 0.05;
    }, 80);
  }, [isGreetAnimeDone]);

  return !isGreetAnimeDone ? null : (
    <>
      <div className="intro-container shadow init-hidden init-zero-opac">
        <SocialLinks />
        <p className="intro-text">
          You can view some of my projects:
          <br />
          <a href="https://fceja.com/projects">here</a>
        </p>
        <p className="intro-text">
          Tools and Technologies I've worked with... ↓
        </p>
      </div>
    </>
  );
};

export default Intro;
