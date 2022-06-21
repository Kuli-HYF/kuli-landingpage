import { navLinks } from "./NavData";
import NavLinkItem from "./NavLinkItem";
import { navLinksLogIn } from "./NavDataLogIn";

const NavLinks = () => {

  return (
    <>

        <ul className="nav-list">
          {navLinksLogIn.map(({ name, link }, i) => (
            <NavLinkItem name={name} link={link} key={i} />
          ))}
        </ul>
    </>
  );
};

export default NavLinks;
