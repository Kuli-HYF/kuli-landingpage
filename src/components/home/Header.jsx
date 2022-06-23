import "./home.css";
import {url} from "../../url"

import kuliOne from "../../assets/Kuli-1.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../assets/logo.png";

import { Button } from "../../components/button/Button";

const Header = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="header-content-container">
      <motion.div
        className="header-content"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div className="header-logo-container" variants={item}>
          <motion.img src={logo} className="logo" alt="logo"></motion.img>
        </motion.div>
        <motion.div className="header-title-container" variants={item}>
          <h1 className="header-title">
            Kuli is a place for finding opportunities and sharing insights about
            local companies committed to gender equality.
          </h1>
        </motion.div>
        <motion.div className="header-paragraph-container" variants={item}>
          <p className="header-paragraph">
            Our mission is to support diverse talent and provide opportunities
            to expand their network, and help local companies build diverse
            teams where everyone can feel engaged and included.
          </p>
        </motion.div>

        <motion.div className="header-buttons-container" variants={item}>
          <Link to={url} target="_blank">
            <Button title="Explore Kuli" color="home-button dark-pink" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;

// import "./home.css";
// import kuliOne from "../../assets/Kuli-1.png";

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// // import logo from "../../assets/logo.png";

// import { Button } from "../../components/button/Button";

// const Header = () => {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         ease: "easeIn",
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1 },
//   };

//   return (
//     <>
//       <motion.div
//         className="header-content"
//         initial="hidden"
//         animate="show"
//         variants={container}
//       >
//         {" "}
//         <div className="header-left">
//           {/* <motion.div className="header-logo-container" variants={item}>
//             <motion.img src={logo} className="logo" alt="logo"></motion.img>
//           </motion.div> */}
//           <motion.div className="header-title-container" variants={item}>
//             <h1 className="header-title">
//               Kuli is a place for finding opportunities and sharing insights
//               about local companies committed to gender equality.
//             </h1>
//           </motion.div>
//           <motion.div className="header-paragraph-container" variants={item}>
//             <p className="header-paragraph">
//               Our mission is to support diverse talent and provide opportunities
//               to expand their network, and help local companies build diverse
//               teams where everyone can feel engaged and included.
//             </p>
//           </motion.div>

//           <motion.div className="header-buttons-container" variants={item}>
//             <Link to={"/questionnaire"}>
//               <Button title="Explore Kuli" color="header-button dark-pink" />
//             </Link>
//           </motion.div>
//         </div>
//         <div className="header-illustration-container">
//           <img src={kuliOne} className="" alt="Kuli logo"></img>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default Header;
