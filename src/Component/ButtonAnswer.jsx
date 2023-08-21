import React from "react";
import "../Style/ButtonAnswer.scss";

function ButtonAnswer({ currentAnswer, item, setCurrentAnswer }) {
  const chooseAnswer = (e, answer) => {
    e.preventDefault();
    setCurrentAnswer(answer);
  };
  return (
    <button
      className={`button-answer${
        currentAnswer?.id === item.id ? " selected" : ""
      }`}
      onClick={(e) => chooseAnswer(e, item)}
    >
      {item.response}
    </button>
  );
}

export default ButtonAnswer;
