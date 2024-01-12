import React from "react";
import classes from "./Game.module.css"

function Game({ percent, question, onClickVariant, choosenIndex }) {
  return (
    <div className={classes.game}>
      <div className={classes.progress}>
        <div style={{ width: `${percent}%` }}></div>
      </div>
      <h2>{question.title}</h2>
      <ul>
        {question.variants.map((v, index) => (
          <li onClick={() => onClickVariant(index)} key={v} style={{
            border: choosenIndex !== null && choosenIndex == index ? choosenIndex == question.correct ? '2px solid green' : '2px solid red' : ''
          }}>
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Game;
