import React from "react";
import "../styles/WelcomePage.css"; 

interface WelcomePageProps {
  onStart: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onStart }) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">WealthQuest</h1>
      <p className="welcome-description">
      Discover your financial literacy with our interactive quiz! Get a score at the end that highlights your strengths and areas to improve, helping you take control of your financial future.
      </p>
      <button className="welcome-button" onClick={onStart}>
        Start
      </button>
    </div>
  );
};

export default WelcomePage;
