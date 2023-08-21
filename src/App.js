import "./App.css";
import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Home from "./Page/Home";
import Results from "./Page/Results";
import data from "./data";
import Questions from "./Page/Questions";
export const AppContext = createContext();

function App() {
  const [quizz, setQuizz] = useState(data);
  return (
    <div className="app">
      <AppContext.Provider
        value={{
          quizz,
          setQuizz,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/results" element={<Results />} />
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
