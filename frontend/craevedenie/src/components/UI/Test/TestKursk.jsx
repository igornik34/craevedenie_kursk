import React, { useState } from "react";
import "./test.css";
import Game from "./Game";
import ResultTest from "./ResultTest";

function TestKursk({ questions }) {
  const [step, setStep] = useState(0);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const question = questions[step];
  const [choosenIndex, setChoosenIndex] = useState(null)

  function onClickVariant(index) {
    if (choosenIndex !== null) return
    if (index === question.correct) {
      setCountCorrectAnswers(countCorrectAnswers + 1);
    }

    setChoosenIndex(index)
    setTimeout(() => {
      setChoosenIndex(null)
      setStep(step + 1);
    }, 500)
  }

  return (
    <div className="Test mx-auto">
      {step != questions.length ? (
        <Game
          percent={(step / questions.length) * 100}
          question={question}
          onClickVariant={onClickVariant}
          choosenIndex={choosenIndex}
        />
      ) : (
        <ResultTest
          countCorrectAnswers={countCorrectAnswers}
          countQuestions={questions.length}
        />
      )}
    </div>
  );
}

export default TestKursk;
