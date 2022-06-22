// import Logo from "../navigation/Logo";
import KuliLogoLight from "../../assets/kuli-logo-light.svg"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="footer-logo-container">
          <img className="kuli-logo-light" src={KuliLogoLight} alt="Kuli logo"></img>
        </div>
        <div className="footer-text-container">
          <p>copyright 2022 - all rights reserved - Kuli</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
