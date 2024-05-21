import "@scss/pages/HomePage.scss";
import Footer from "@components/footer/Footer";
import Greeting from "@components/greeting/Greeting";
import Intro from "@components/intro/Intro";
import Loading from "@common/components/Loading";
import SubSections from "@components/subSections/SubSections";
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
          <SubSections sectionContent={SubSectionContent} />
          <Footer />
        </>
      }
    </div>
  );
};

export default HomePage;
