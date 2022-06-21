import "./sections.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";

const Badges = () => {
  return (
    <section className="badges-container">
      <div className="badges-content content">
        <h2 className="section-title dark-blue-title">Our Kuli badges</h2>
        <p className="section-intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dicta ex, quam veniam tenetur optio cupiditate ipsa
          aliquid? Dolorem asperiores itaque nemo officia saepe facere.
          Voluptatum, cumque? Ducimus, possimus aliquam!
        </p>

        <div className="badges-container">
          <div className="badge-container">Employment and compensation</div>
          <div className="badge-container">
            Work life balance and career development
          </div>
          <div className="badge-container">
            Health, safety and freedom from violence
          </div>
          <div className="badge-container">Governance and leadership</div>
        </div>
        <Link to={"/kuli"}>
          <Button title="Explore Kuli" color="badges-button dark-pink" />
        </Link>
      </div>
    </section>
  );
};

export default Badges;
