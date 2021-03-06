import "./sections.css";
import { url } from "../../url";

import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";

import { ReactComponent as KuliBadge } from "../../assets/kuli-badge-full-black-fill.svg";

const Badges = () => {
  return (
    <section id="badges" className="badges-content-container">
      <div className="badges-content content">
        <div className="badges-text-content">
          <h2 className="section-title dark-blue-title">Our Kuli badges</h2>
          <p className="section-intro badges-intro">
            Our badges represent the final stage of our system in action but
            more importantly they represent the experiences of our users and
            their will to help others.
          </p>
        </div>

        <div className="badges-container">
          <div className="badge-container">
            <KuliBadge className="kuli-badge" fill="#8e336e" />

            <h3 className="badge-title purple">Employment and compensation </h3>
          </div>
          <div className="badge-container">
            <KuliBadge className="kuli-badge" fill="#71b134" />
            <h3 className="badge-title green">
              Work life balance and career development
            </h3>
          </div>
          <div className="badge-container">
            <KuliBadge className="kuli-badge" fill="#e52f22" />
            <h3 className="badge-title red">
              Health, safety and freedom from violence
            </h3>
          </div>
          <div className="badge-container">
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
