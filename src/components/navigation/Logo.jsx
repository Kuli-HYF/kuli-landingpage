// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="nav-logo-container">
      {/* <Link to={"/"}>
        <img src={logo} className="nav-logo" alt="Kuli logo"></img>
      </Link> */}

      <Link
        // activeClass="underline"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <img src={logo} className="nav-logo" alt="Kuli logo"></img>
      </Link>
    </div>
  );
};

export default Logo;
