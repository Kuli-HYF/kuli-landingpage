import "./sections.css";
import {url} from "../../url"

import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";

import kuliBadgePurple from "../../assets/kuli-badge-purple.svg";
import kuliBadgeGreen from "../../assets/kuli-badge-green.svg";
import kuliBadgeRed from "../../assets/kuli-badge-red.svg";
import kuliBadgeBlue from "../../assets/kuli-badge-blue.svg";

import { ReactComponent as KuliBadge } from "../../assets/kuli-badge-full-black-fill.svg";

const Badges = () => {
  return (
    <section id="badges" className="badges-content-container">
      <div className="badges-content content">
        <div className="badges-text-content">
          <h2 className="section-title dark-blue-title">Our Kuli badges</h2>
          <p className="section-intro badges-intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus dicta ex, quam veniam tenetur optio cupiditate ipsa
            aliquid? Dolorem asperiores itaque nemo officia saepe facere.
            Voluptatum, cumque? Ducimus, possimus aliquam!
          </p>
        </div>

        <div className="badges-container">
          <div className="badge-container">
            {/* <img src={kuliBadgePurple} className="kuli-badge" alt="Kuli badge"></img> */}
            <KuliBadge className="kuli-badge" fill="#8e336e" />

            <h3 className="badge-title purple">Employment and compensation </h3>
          </div>
          <div className="badge-container">
            {/* <img src={kuliBadgeGreen} className="kuli-badge" alt="Kuli badge"></img> */}
            <KuliBadge className="kuli-badge" fill="#71b134" />
            <h3 className="badge-title green">
              Work life balance and career development
            </h3>
          </div>
          <div className="badge-container">
            {/* <img src={kuliBadgeRed} className="kuli-badge" alt="Kuli badge"></img> */}
            <KuliBadge className="kuli-badge" fill="#e53922" />
            <h3 className="badge-title red">
              Health, safety and freedom from violence
            </h3>
          </div>
          <div className="badge-container">
            {/* <img src={kuliBadgeBlue} className="kuli-badge" alt="Kuli badge"></img> */}
            <KuliBadge className="kuli-badge" fill="#0e8993" />
            <h3 className="badge-title blue">Governance and leadership </h3>
          </div>
        </div>
        <Link to={url} target="_blank">
          <Button title="Explore Kuli" color="badges-button dark-pink" />
        </Link>
      </div>
    </section>
  );
};

export default Badges;
