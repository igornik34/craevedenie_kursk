import React from "react";
import classes from "./HamburgerMenu.module.css";

function HamburgerMenu({ toggleMenu, isOpen }) {
  return (
    <div
      className={`${classes["hamburger-menu"]} ${isOpen ? classes.open : ""}`}
      onClick={toggleMenu}
    >
      <div className={classes.line}></div>
    </div>
  );
}

export default HamburgerMenu;
