import logo from "./images/logo.svg";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo-wrapper">
        <img src={logo} alt=""></img>
      </div>
      <Navigation place={"footer"} className="footer-nav"></Navigation>
    </footer>
  );
};

export default Footer;
