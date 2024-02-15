import { useEffect, useState } from "react";

import "@scss/pages/HomePage.scss";
import Loading from "@common/components/Loading";
import Greeting from "@components/greeting/Greeting";
import Intro from "@components/intro/Intro";
import SubSection from "@components/subSection/SubSection";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="home-page-container">
      {isLoading && <Loading />}
      <Greeting />
      <Intro />
      <SubSection />
    </div>
  );
};

export default HomePage;
