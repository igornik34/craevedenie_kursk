import React from 'react'
import classes from "./ResultTest.module.css"

function ResultTest({countCorrectAnswers, countQuestions}) {
    return (
      <div className={classes.result}>
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>Вы правильно ответили на: {countCorrectAnswers} из {countQuestions} вопросов</h2>
        <a href="/test">
            <button>Попробовать снова</button>
        </a>
      </div>
    );
  }

export default ResultTest