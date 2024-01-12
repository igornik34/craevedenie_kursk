import React from "react";
import classes from "./Game.module.css";

function Game({ percent, question, onClickVariant, choosenIndex }) {
  console.log(question);
  return (
    <div className={classes.game}>
      <div className={classes.progress}>
        <div style={{ width: `${percent}%` }}></div>
      </div>
      <h2>{question.question_name}</h2>
      <ul>
        {question.variants.map((index) => (
          <li
            onClick={() => onClickVariant(index)}
            key={index.variant_name}
            style={{
              border:
                index !== null && index == choosenIndex
                  ? index.id == question.correct_variant
                    ? "2px solid green"
                    : "2px solid red"
                  : "",
            }}
          >
            {index.variant_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Game;
