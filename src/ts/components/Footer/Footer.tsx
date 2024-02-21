import "@scss/components/Footer.scss";
import Headlines from "@components/headlines/Headlines";
import { useIncreaseOpacity } from "@common/hooks/UseIncreaseOpacity.hook";

const Footer = () => {
  const divClassName = "footer";
  const isGreetAnimeDone = useIncreaseOpacity({
    htmlElemClassName: divClassName,
  });
  return (
    <footer className="footer init-zero-opac">
      <Headlines />
    </footer>
  );
};

export default Footer;
