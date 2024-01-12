import React from "react";
import Wrapper from "../UI/Wrapper/Wrapper";
import classes from "./MySection.module.css";

function MySection({ image, title, description }) {
  return (
    <section
      className={classes.section}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
    >
      <Wrapper>
        <h1
          className={classes.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Wrapper>
    </section>
  );
}

export default MySection;
