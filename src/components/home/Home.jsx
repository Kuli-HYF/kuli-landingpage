import Navigation from "../../components/navigation/Navigation";
import Video from "../sections/Video";
import Badges from "../sections/Badges";
import Companies from "../sections/Companies";
import Questionnaire from "../sections/Questionnare";
import Header from "./Header";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <>
      <div className="header-container">
        <Navigation />
        <Header />
        <Video/>
        <Badges />
        <Questionnaire />
        <Companies />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
