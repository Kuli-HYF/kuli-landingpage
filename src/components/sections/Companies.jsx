import "./sections.css";
// import questionnaire from "../../assets/kuli-questionnaire.png";

const Companies = () => {
  return (
    <section className="companiescontainer">
      <div className="companiescontent content">
        <div className="companiesillustration-container">
          <img src={""} className="" alt="Kuli logo"></img>
        </div>
        <div className="companiestext-content">
          <h2 className="section-title dark-blue-title">Kuli companies</h2>
          <p className="section-intro">
            Kuli provides a Companies that allows users to asses different
            aspects of a company's working environment, internal dynamics and
            more. Companiess are divided into 4 different categories that
            focus on different aspects:
          </p>
        </div>
      </div>
    </section>
  );
};

export default Companies;
