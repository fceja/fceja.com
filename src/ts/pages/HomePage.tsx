import { useEffect, useState } from "react";

import "@scss/pages/HomePage.scss";
import Loading from "@common/components/Loading";
import Greeting from "@components/greeting/Greeting";
import Intro from "@components/intro/Intro";
import SubSection from "@components/subSection/SubSection";
import { SubSectionContent } from "@content/SubSectionContent";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const subSectionElems = SubSectionContent.map((elem, index) => {
    return <SubSection key={index} {...elem} />;
  });

  return (
    <div className="home-page-container">
      {isLoading && <Loading />}
      <Greeting />
      <Intro />
      {subSectionElems}
    </div>
  );
};

export default HomePage;
