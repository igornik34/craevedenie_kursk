import React from "react";
import Card from "../UI/Card/Card";
import { Link } from "react-router-dom";
import classes from "./CardSection.module.css"

function CardSection({ image, title, description, url }) {
  return (
    <Card >
      <Link to={url} className={classes.card}>
        <div className={classes.img}>
          <img
            src={image}
            alt=""
          />
        </div>
        <div className={classes["card-content"]}>
          <p className={classes.title}>{title}</p>
          <p className={classes.description}>{description}</p>
        </div>
      </Link>
    </Card>
  );
}

export default CardSection;
