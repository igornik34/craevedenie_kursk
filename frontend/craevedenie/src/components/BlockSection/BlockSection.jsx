import React from "react";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import classes from "./BlockSection.module.css";

function BlockSection({ block }) {
  return (
    <div className={classes["block-section"]}>
      <SectionTitle className="mb-6">
        {block.link_image ? (
          <a href={block.link_image}>{block.title}</a>
        ) : (
          block.title
        )}
      </SectionTitle>
      <div className={classes.img}>
        {block.image && (
          <div className="md:w-1/3">
            <img src={block.image} alt="" />
          </div>
        )}
        <p
          className="text-2xl mb-5"
          dangerouslySetInnerHTML={{ __html: block.description }}
        />
        {block.dates_life && (
          <p className={classes.dates}>{block.dates_life}</p>
        )}
      </div>
    </div>
  );
}

export default BlockSection;
