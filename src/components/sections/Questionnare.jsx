import "./sections.css";
import {url} from "../../url"

import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";

import questionnaire from "../../assets/kuli-questionnaire.png";

const Questionnaire = () => {
  return (
    <section id="section-one" className="questionnaire-container">
      <div className="questionnaire-content content">
        <div className="questionnaire-illustration-container">
          <img src={questionnaire} className="" alt="Kuli logo"></img>
        </div>
        <div className="questionnaire-text-content">
          <h2 className="section-title dark-blue-title">Kuli Questionnaires</h2>
          <p className="section-intro">
            Kuli provides a questionnaire that allows users to asses different
            aspects of a company's working environment, internal dynamics and
            more. Questionnaires are divided into 4 different categories that
            focus on different aspects:
          </p>
          <Link to={url} target="_blank">
            <Button
              title="Explore Kuli"
              color="questionnaire-button dark-pink"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;
