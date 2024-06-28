import "@scss/pages/HomePage.scss";
import Greeting from "@components/greeting/Greeting";
import Intro from "@components/intro/Intro";
import Loading from "@common/components/Loading";
import SubSections from "@components/subSections/SubSections";
import useAnimationIsDone from "@hooks/UseAnimationIsDone"

const HomePage = () => {
  const isGreetAnimeDone = useAnimationIsDone()

  return (
    <div className="home-page-container">
      {!isGreetAnimeDone ?
        <>
          <Loading />
          <Greeting />
        </>
        :
        <>
          <Intro />
          <SubSections />
        </>
      }
    </div>
  );
};

export default HomePage;
