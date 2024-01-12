import React from "react";
import CardSection from "../CardSection/CardSection";
import Wrapper from "../UI/Wrapper/Wrapper";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import classes from "./ListCardSection.module.css"

function ListCardSection({ cards }) {
  return (
    <Wrapper className="max-w-7xl">
      <SectionTitle className="ml-10">#Наши Секции</SectionTitle>
      <div className={classes.cards}>
        {cards.map((card) => (
          <CardSection
            key={card.url}
            url={card.url}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export default ListCardSection;
