import { React } from "../../imports/common-imports";
import { navItems } from "./nav-items";
import "../../stylesheets/Navbar/navbar.css";
import { CgMenu } from "../../imports/icons";
import { Link } from "react-scroll";
import ThemeSwitcher from "../../context/theme-switcher";
import { useContext } from "react";
import ThemeContext from "../../context/theme-context";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="nav-component">
      <div className={`theme-switch ${theme === "dark" ? "dark" : "light"}`}>
        <ThemeSwitcher />
      </div>
      <div className={`nav-bar ${theme === "dark" ? "dark" : "light"}`}>
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
    </div>
  );
};

export default Navbar;
