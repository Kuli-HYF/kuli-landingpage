import "./sections.css";

const Badges = () => {
  return (
    <section className="badges-container">
      <div className="badges-content content">
        <h2 className="section-title dark-blue-title">
          About our Kuli badges system
        </h2>
        <p className="section-intro">
          Gender Equality and Diversity are fundamental rights and are
          prerequisites for achieving sustainable development and growth.
          Evidence shows that promoting gender equality fosters social and
          economic development and contributes to improving the overall outcomes
          and sustainability of activities. The Kuli System provides a tool that
          allows users to share their experience while recognizing the effort of
          organizations for a more equal and sustainable society.
        </p>

        <div className="badges-container">
          <div className="badge-container">Employment and compensation</div>
          <div className="badge-container">Work life balance and career development</div>
          <div className="badge-container">Health, safety and freedom from violence</div>
          <div className="badge-container">Governance and leadership</div>
        </div>
      </div>
    </section>
  );
};

export default Badges;
