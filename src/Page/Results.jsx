import React, { useContext } from "react";
import { AppContext } from "../App";
import "../Style/Results.scss";
import { Link } from "react-router-dom";
import ButtonEnd from "../Component/ButtonEnd";

function Results() {
  const { setQuizz, quizz } = useContext(AppContext);
  console.log(quizz);
  return (
    <div className="result">
      <h1> Résultats</h1>
      <div>
        {quizz.map((item) => (
          <div className="question" key={item.id}>
            <h2>{item.question}</h2>
            <ul>
              {item.option.map((ans) => (
                <li
                  className={`result-answer${
                    ans.selector === true
                      ? " green"
                      : item.answerCandidate?.id === ans.id
                      ? " red"
                      : ""
                  }`}
                  key={ans.id}
                >
                  {ans.response}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link to={`/`}>
        <ButtonEnd text={"Retour Acceuil"} />
      </Link>
    </div>
  );
}

export default Results;
