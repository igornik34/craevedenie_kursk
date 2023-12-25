import React from 'react'

function ResultTest({countCorrectAnswers, countQuestions}) {
    return (
      <div className="result flex flex-col gap-3">
        <img className='mx-auto' src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2 className='text-xl'>Вы правильно ответили на: {countCorrectAnswers} из {countQuestions} вопросов</h2>
        <a href="/test">
            <button>Попробовать снова</button>
        </a>
      </div>
    );
  }

export default ResultTest