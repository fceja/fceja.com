import { useEffect, useState } from "react";

import "@scss/pages/HomePage.scss";
import Footer from "@components/footer/Footer";
import Greeting from "@components/greeting/Greeting";
import Intro from "@components/intro/Intro";
import Loading from "@common/components/Loading";
import SubSection from "@components/subSection/SubSection";
import { SubSectionContent } from "@content/SubSectionContent";
import useAnimationIsDone from "@hooks/useAnimationIsDone"

const HomePage = () => {
  const isGreetAnimeDone = useAnimationIsDone()

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
