import React from "react";

function Game({ percent, question, onClickVariant, choosenIndex }) {
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h2 className="text-xl mb-4">{question.title}</h2>
      <ul>
        {question.variants.map((v, index) => (
          <li onClick={() => onClickVariant(index)} key={v} style={{
            border: choosenIndex !== null && choosenIndex == index ? choosenIndex == question.correct ? '2px solid green' : '2px solid red' : ''
          }}>
            {v}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
