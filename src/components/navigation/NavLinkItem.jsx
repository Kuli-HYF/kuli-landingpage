import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { Link } from "react-scroll";

const NavLinkItem = ({ link, name }) => {
  // const { pathname } = useLocation();

  return (
    <>
      <motion.div
        className="menu-item"
        whileHover={{
          opacity: 1,
        }}
      >
        <Link
          activeClass="underline"
          to={`${link}`}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          {name}
          {/* {pathname === link && ( */}
          {/* <motion.span
              className="underline"
              layoutId="underline"
            ></motion.span> */}
          {/* )} */}
        </Link>
      </motion.div>
    </>
  );
};

export default NavLinkItem;
