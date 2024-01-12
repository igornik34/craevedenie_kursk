import React, { useEffect, useState } from "react";
import Wrapper from "../UI/Wrapper/Wrapper";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import classes from "./Navbar.module.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
    setLoading(false);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (loading) {
    return null;
  }

  return (
    <header className={classes.header}>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <Wrapper>
          <DesktopMenu />
        </Wrapper>
      )}
    </header>
  );
}

export default Navbar;
