import React, { useEffect, useState } from "react";
import Test from "../../components/Test/Test/Test";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import classes from "./TestPage.module.css"
import axios from "axios";

function TestPage() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const {data} = await axios.get("http://127.0.0.1:8000/api/test/?name_test=Курск")
        console.log(data[0].questions);
        setQuestions(data[0].questions)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }, [])

  return (
    <Wrapper className={classes.wrapper}>
      <h1 className={classes.title}>
        Узнайте, насколько хорошо Вы знаете свой город :)
      </h1>
      <Test questions={questions} />
    </Wrapper>
  );
}

export default TestPage;
