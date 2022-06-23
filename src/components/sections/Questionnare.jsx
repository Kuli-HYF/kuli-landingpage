import "./sections.css";
import { url } from "../../url";

import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";

import questionnaire from "../../assets/kuli-questionnaires.png";

const Questionnaire = () => {
  return (
    <section id="questionnaires" className="questionnaire-container">
      <div className="questionnaire-content content">
        <div className="questionnaire-illustration-container">
          <img src={questionnaire} className="" alt="Kuli logo"></img>
        </div>
        <div className="questionnaire-text-content">
          <h2 className="section-title dark-blue-title">Kuli Questionnaires</h2>
          <p className="section-intro">
            Kuli provides a questionnaire that allows users to asses different
            aspects of a company's working environment, internal dynamics and
            more. Questionnaires are divided into four different categories that
            focus on different aspects: Employment and compensation, Work life
            balance and career development, Health, safety and freedom from
            violence, Governance and leadership.
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
