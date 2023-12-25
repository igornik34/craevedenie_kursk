import React from "react";
import { routes } from "../router";
import MyNavLink from './UI/MyNavLink/MyNavLink'

function DesktopMenu() {
  return (
    <nav className="text-center">
      <ul className="inline-flex shadow-2xl mx-auto text-2xl rounded-full py-3 px-8 items-center justify-center gap-x-20 flex-wrap bg-indigo-700">
        {routes.map((route) => (
          <li key={route.path} className="max-md:mb-5">
            <MyNavLink route={route}/>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopMenu;
