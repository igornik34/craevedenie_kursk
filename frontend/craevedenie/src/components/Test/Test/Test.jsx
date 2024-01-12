import React, { useState } from "react";
import Game from "../Game/Game";
import ResultTest from "../Result/ResultTest";
import classes from "./Test.module.css";
import Loader from "../../Loader/Loader";

function TestKursk({ questions }) {
  const [step, setStep] = useState(0);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const question = questions[step];
  const [choosenIndex, setChoosenIndex] = useState(null);

  function onClickVariant(index) {
    if (choosenIndex !== null) return;
    if (index.id === question.correct_variant) {
      setCountCorrectAnswers(countCorrectAnswers + 1);
    }

    setChoosenIndex(index);
    setTimeout(() => {
      setChoosenIndex(null);
      setStep(step + 1);
    }, 500);
  }

  if (!questions.length) {
    return <Loader />;
  }

  return (
    <div className={classes.test}>
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
