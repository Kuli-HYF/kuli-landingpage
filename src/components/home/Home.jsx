import Navigation from "../../components/navigation/Navigation";
import Badges from "../sections/Badges";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div className="header-container">
        <Navigation />
        <Header />
        <Badges/>
      </div>
    </>
  );
};

export default Home;
