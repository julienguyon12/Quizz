import React, { useState } from "react";
import data from "../data";
import "../Style/Question.scss";
import { Link } from "react-router-dom";

import ButtonAnswer from "../Component/ButtonAnswer";
import ButtonNext from "../Component/ButtonNext";
import ButtonEnd from "../Component/ButtonEnd";

function Questions() {
  const [idQuestion, setIdQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState();
  const [score, setScore] = useState(0);

  return idQuestion < 10 ? (
    <div className="questions-container">
      <div className="question">
        <h2>{data[idQuestion].question} </h2>
        <div className="container-answers">
          {data[idQuestion].option.map((item) => (
            <ButtonAnswer
              key={item.id}
              currentAnswer={currentAnswer}
              item={item}
              setCurrentAnswer={setCurrentAnswer}
            />
          ))}
        </div>
        <div className="container-validate">
          <ButtonNext
            idQuestion={idQuestion}
            setIdQuestion={setIdQuestion}
            currentAnswer={currentAnswer}
            setCurrentAnswer={setCurrentAnswer}
            setScore={setScore}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="questions-container">
      <div className="question">
        <h2>Quizz terminé voir vos réponses </h2>
        <p>Score : {score} / 10</p>
        <div className="container-validate">
          <Link to={`/results`}>
            <ButtonEnd text={"voir résultats"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Questions;
