import React from "react";
import { routes } from "../../router";
import MyNavLink from "../MyNavLink/MyNavLink";
import classes from "./DesktopMenu.module.css"

function DesktopMenu() {
  return (
    <nav className={classes.menu}>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <MyNavLink route={route} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopMenu;
