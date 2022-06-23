import "./sections.css";
import {url} from "../../url"

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
            Kuli provides a Companies that allows users to asses different
            aspects of a company's working environment, internal dynamics and
            more. Companiess are divided into 4 different categories that focus
            on different aspects:
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
