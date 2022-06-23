import { useState } from "react";
import { motion } from "framer-motion";

import { Link } from "react-scroll";

import { navLinks } from "./NavData";

import Hamburger from "./Hamburger";

const NavLinksMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 20,
      transition: {
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.04,
        bounce: 0,
      },
    },
    closed: {
      top: "-80vh",
    },
  };

  return (
    <>
      <Hamburger isOpen={isOpen} toggle={() => setOpen(!isOpen)} />

      <motion.ul
        className="nav-list-mobile"
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
        {navLinks.map(({ name, link }, i) => (
          <motion.li key={i} variants={linkVariants}>
            <Link
              to={`${link}`}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="underline"
            >
              {name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default NavLinksMobile;
