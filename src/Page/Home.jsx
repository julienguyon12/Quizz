import React from "react";
import "../Style/Home.scss";
import { Link } from "react-router-dom";
import ButtonEnd from "../Component/ButtonEnd";

function Home() {
  return (
    <div className="home">
      <h1>Mon Quizz HTML/CSS</h1>
      <Link to={`/questions`}>
        <ButtonEnd text={"Commencer le Quizz"} />
      </Link>
    </div>
  );
}

export default Home;
