import React from "react";
import classes from "./Wrapper.module.css";

function Wrapper({ children, className }) {
  return <div className={`${classes.wrapper} ${className}`}>{children}</div>;
}

export default Wrapper;
