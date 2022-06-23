import "./sections.css";
import { url } from "../../url";

import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";

import companies from "../../assets/kuli-companies.png";

const Companies = () => {
  return (
    <section id="companies" className="companies-container">
      <div className="companies-content content">
        <div className="companies-text-content">
          <h2 className="section-title dark-blue-title">Kuli companies</h2>
          <p className="section-intro">
            Studies have demonstrated a link between an organization’s
            performance and the level of diversity of its governing body.
            Organizations need to expand this process and ensure that both women
            and men are represented at key positions throughout the
            administration. Having a gender balanced senior management also
            sends a strong message to employees, that the organization’s
            commitment to diversity is not just a marketing ploy, but an actual
            strategic corporate value.
          </p>
          <Link to={url} target="_blank">
            <Button title="Explore Kuli" color="companies-button dark-pink" />
          </Link>
        </div>
        <div className="companies-illustration-container">
          <img src={companies} className="" alt="Kuli logo"></img>
        </div>
      </div>
    </section>
  );
};

export default Companies;
