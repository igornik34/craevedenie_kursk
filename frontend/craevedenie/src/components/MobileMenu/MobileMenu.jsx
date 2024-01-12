import React, { useState } from "react";
import MyNavLink from "../MyNavLink/MyNavLink";
import { routes } from "../../router";
import HamburgerMenu from "../UI/HamburgerMenu/HamburgerMenu";
import classes from "./MobileMenu.module.css";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.wrapper}>
      <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />

      {isOpen && (
        <nav className={classes.menu}>
          <ul>
            {routes.map((route) => (
              <li key={route.path}>
                <MyNavLink route={route} onSetOpen={toggleMenu} />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default MobileMenu;
