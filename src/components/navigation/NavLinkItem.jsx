import { motion } from "framer-motion";

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
        </Link>
      </motion.div>
    </>
  );
};

export default NavLinkItem;
