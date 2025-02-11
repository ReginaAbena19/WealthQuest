import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"; 
import "../styles/quiz.css";

const questions = [
  {
    category: "Credit & Loans",
    questionText: "What does APR stand for?",
    answerOptions: [
      { answerText: "Annual Percentage Rate", isCorrect: true },
      { answerText: "Annual Payment Rate", isCorrect: false },
      { answerText: "Accrued Payment Rate", isCorrect: false },
      { answerText: "Annual Plan Rate", isCorrect: false },
    ],
  },
  {
    category: "Debt Management",
    questionText: "Which of the following is considered a good debt?",
    answerOptions: [
      { answerText: "Credit card debt", isCorrect: false },
      { answerText: "Mortgage", isCorrect: true },
      { answerText: "Personal loan", isCorrect: false },
      { answerText: "Payday loan", isCorrect: false },
    ],
  },
  {
    category: "Savings & Budgeting",
    questionText: "What is the purpose of an emergency fund?",
    answerOptions: [
      { answerText: "To save for a vacation", isCorrect: false },
      { answerText: "To cover unexpected expenses", isCorrect: true },
      { answerText: "To invest in stocks", isCorrect: false },
      { answerText: "To buy luxury items", isCorrect: false },
    ],
  },
  {
    category: "Retirement Planning",
    questionText: "Which of the following is the most common type of retirement account?",
    answerOptions: [
      { answerText: "Roth IRA", isCorrect: true },
      { answerText: "401(k)", isCorrect: true },
      { answerText: "HSA", isCorrect: false },
      { answerText: "FSA", isCorrect: false },
    ],
  },
  {
    category: "Investing",
    questionText: "What does the term 'liquidity' refer to in finance?",
    answerOptions: [
      { answerText: "The ease of converting assets into cash", isCorrect: true },
      { answerText: "The amount of debt a person has", isCorrect: false },
      { answerText: "The interest rate on loans", isCorrect: false },
      { answerText: "The profitability of a company", isCorrect: false },
    ],
  },
];

const Questions: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [categoryScores, setCategoryScores] = useState<{ [key: string]: number }>({});

  const handleAnswerButtonClick = (isCorrect: boolean, category: string) => {
    if (isCorrect) {
      setScore(score + 1);
      setCategoryScores((prevScores) => ({
        ...prevScores,
        [category]: (prevScores[category] || 0) + 1,
      }));
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
    setScore(0);
    setCategoryScores({});
    setShowScore(false);
  };

  
  const totalQuestions = questions.length;
  const incorrectAnswers = totalQuestions - score;

  const pieData = [
    { name: "Correct Answers", value: score, color: "#2f922f" },
    { name: "Incorrect Answers", value: incorrectAnswers, color: "#ff3333" },
  ];

  const categoryData = Object.keys(categoryScores).map((category) => ({
    name: category,
    value: categoryScores[category],
  }));

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} / {totalQuestions}</h2>
          <div className="chart-container">
            <h3>Financial Health Score</h3>
            <PieChart width={300} height={300}>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>

            <h3>Category Breakdown</h3>
            <PieChart width={300} height={300}>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
          <button onClick={restartQuiz} className="restart-button">Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="category-label">{questions[currentQuestion].category}</div>
          <div className="question-count">
            Question {currentQuestion + 1}/{totalQuestions}
          </div>
          <div className="question-text">{questions[currentQuestion].questionText}</div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect, questions[currentQuestion].category)}>
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
