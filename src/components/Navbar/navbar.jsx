import { React } from "../../imports/common-imports";
import { navItems } from "./nav-items";
import "../../stylesheets/Navbar/navbar.css";
import { CgMenu } from "../../imports/icons";
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-menu">
        <CgMenu />
      </div>
      <div className="nav-items">
        {navItems.map((items) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={700}
            to={items.link}
            className="items"
            key={items.name}
          >
            {items.icon ? items.icon : items.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
