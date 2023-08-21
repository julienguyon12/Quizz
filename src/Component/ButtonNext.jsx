import React, { useState, useContext } from "react";
import data from "../data";
import "../Style/ButtonQuizz.scss";
import { AppContext } from "../App";

function ButtonNext({
  idQuestion,
  setIdQuestion,
  currentAnswer,
  setCurrentAnswer,
  setScore,
}) {
  const { setQuizz } = useContext(AppContext);
  const [currentQuizz, setCurrentQuizz] = useState(data);
  const validateQuestion = (e) => {
    e.preventDefault();
    const updatedQuizz = currentQuizz.map((question) => {
      if (question.id === idQuestion + 1) {
        return {
          ...question,
          answerCandidate: currentAnswer,
          point: currentAnswer?.selector === true ? 1 : 0,
        };
      }
      return question;
    });
    setScore(
      currentAnswer?.selector === true ? (prev) => prev + 1 : (prev) => prev
    );
    setCurrentQuizz(updatedQuizz);
    setCurrentAnswer(0);
    setIdQuestion((prev) => prev + 1);
    if (idQuestion >= 9) {
      setQuizz(updatedQuizz);
    }
  };
  return (
    <button onClick={(e) => validateQuestion(e)} className="button-quizz">
      Suivant
    </button>
  );
}

export default ButtonNext;
