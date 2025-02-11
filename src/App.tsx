import React, { useState } from "react";
import "./styles/quiz.css";
import "./styles/index.css";
import WelcomePage from "./components/WelcomePage";
import Questions from "./components/Questions"; 

const App: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false); 

  return (
    <div className="container">
      {quizStarted ? (
        <Questions />
      ) : (
        <WelcomePage onStart={() => setQuizStarted(true)} />
      )}
    </div>
  );
};

export default App;
