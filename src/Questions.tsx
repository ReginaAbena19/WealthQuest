import React, { useState } from 'react';

const Questions = () => {
  const questions = [
    {
      questionText: 'What does APR stand for?',
      answerOptions: [
        { answerText: 'Annual Percentage Rate', isCorrect: true },
        { answerText: 'Annual Payment Rate', isCorrect: false },
        { answerText: 'Accrued Payment Rate', isCorrect: false },
        { answerText: 'Annual Plan Rate', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is considered a good debt?',
      answerOptions: [
        { answerText: 'Credit card debt', isCorrect: false },
        { answerText: 'Mortgage', isCorrect: true },
        { answerText: 'Personal loan', isCorrect: false },
        { answerText: 'Payday loan', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the purpose of an emergency fund?',
      answerOptions: [
        { answerText: 'To save for a vacation', isCorrect: false },
        { answerText: 'To cover unexpected expenses', isCorrect: true },
        { answerText: 'To invest in stocks', isCorrect: false },
        { answerText: 'To buy luxury items', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is the most common type of retirement account?',
      answerOptions: [
        { answerText: 'Roth IRA', isCorrect: true },
        { answerText: '401(k)', isCorrect: true },
        { answerText: 'HSA', isCorrect: false },
        { answerText: 'FSA', isCorrect: false },
      ],
    },
    {
      questionText: 'What does the term "liquidity" refer to in finance?',
      answerOptions: [
        { answerText: 'The ease of converting assets into cash', isCorrect: true },
        { answerText: 'The amount of debt a person has', isCorrect: false },
        { answerText: 'The interest rate on loans', isCorrect: false },
        { answerText: 'The profitability of a company', isCorrect: false },
      ],
    },
    {
      questionText: 'What is a "bull market" in the stock market?',
      answerOptions: [
        { answerText: 'A market where prices are falling', isCorrect: false },
        { answerText: 'A market where prices are rising', isCorrect: true },
        { answerText: 'A market with high volatility', isCorrect: false },
        { answerText: 'A market with low investor confidence', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the primary benefit of diversification in investing?',
      answerOptions: [
        { answerText: 'To increase risk and uncertainty', isCorrect: false },
        { answerText: 'To reduce risk by spreading investments across various assets', isCorrect: true },
        { answerText: 'To concentrate all assets into one stock', isCorrect: false },
        { answerText: 'To guarantee high returns', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is a good way to improve your credit score?',
      answerOptions: [
        { answerText: 'Paying off debt on time', isCorrect: true },
        { answerText: 'Opening multiple credit accounts in a short period', isCorrect: false },
        { answerText: 'Missing a few payments', isCorrect: false },
        { answerText: 'Maxing out your credit cards', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={restartQuiz} className="restart-button">
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Questions;
