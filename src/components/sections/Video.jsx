import "./sections.css";
import {url} from "../../url"

import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";

// import questionnaire from "../../assets/kuli-questionnaire.png";

const Video = () => {
  return (
    <section id="intro" className="video-container">
      <div className="video-content content">
        <div className="video-illustration-container">
          <div className="video"></div>
          {/* <img src={video} className="" alt="Kuli logo"></img> */}
        </div>
        <div className="video-text-content">
          <h2 className="section-title dark-blue-title">Introducing Kuli</h2>
          <p className="section-intro">
            Gender Equality and Diversity are fundamental rights and are
            prerequisites for achieving sustainable development and growth.
            Evidence shows that promoting gender equality fosters social and
            economic development and contributes to improving the overall
            outcomes and sustainability of activities. The Kuli System provides
            a tool that allows users to share their experience while recognizing
            the effort of organizations for a more equal and sustainable
            society.
          </p>
          <Link to={url} target="_blank">
            <Button title="Explore Kuli" color="video-button dark-pink" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Video;
