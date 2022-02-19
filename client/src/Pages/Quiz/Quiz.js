import React, { useEffect, useState } from "react";
import {CircularProgress} from '@material-ui/core'
const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);

  const handleShuffle = (optionss) => {
   return optionss.sort(() => Math.random() - 0.5);
  }
  useEffect(() => {
    console.log("questions", questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers
        ])
    );
  }, [questions]);

  return <div>
    <span className="subtitle">
      Welcome, {name}
    </span>

  </div>;
};

export default Quiz;
