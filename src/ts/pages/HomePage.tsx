import { useEffect, useState } from "react";

import "@scss/pages/HomePage.scss";
import Footer from "@components/footer/Footer";
import Greeting from "@components/greeting/Greeting";
import Intro from "@components/intro/Intro";
import Loading from "@common/components/Loading";
import SubSection from "@components/subSection/SubSection";
import { SubSectionContent } from "@content/SubSectionContent";

const HomePage = () => {
  const [isGreetAnimeDone, setIsGreetAnimeDone] = useState<boolean>(false);

  /* monitors animation until it's complete */
  useEffect(() => {
    const intervalId = setInterval(() => {
      const animationElems = document.getElementsByClassName("h1-greeting");

      if (animationElems.length === 0) {
        clearInterval(intervalId);
        setIsGreetAnimeDone(true);
      }
    }, 300);
  }, []);

  return (
    <div className="home-page-container">
      {!isGreetAnimeDone &&
        <>
          <Loading />
          <Greeting />
        </>
      }
      {isGreetAnimeDone &&
        <>
          <Intro />
          {SubSectionContent.map((elem, index) => {
            return <SubSection key={index} {...elem} />;
          })}
          <Footer />
        </>
      }
    </div>
  );
};

export default HomePage;
