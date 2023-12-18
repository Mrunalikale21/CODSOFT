import React, { useState } from 'react'
import './Quiz.css'


const QuizApp = () => {
  const questions = [
    {
      question: 'Question 1: Which device is required for the Internet Connection?',
      options: ['Modem', 'Router', 'LAN Cable', 'Pen Drive'],
      correctAnswer: 'Modem',
    },
    {
      question: 'Question 2: Which continent has the highest number of countries?',
      options: ['Asia', 'Europe', 'Brazil', 'Africa'],
      correctAnswer: 'Africa',
    },
    {
      question: 'Question 3: Junk e-mail is also called?',
      options: ['Spam', 'Fake', 'Archived', 'Bin'],
      correctAnswer: 'Spam',
    },
    {
      question: 'Question 4: A computer cannot BOOT if it does not have the?',
      options: ['Application Software', 'Internet', 'Operating system', 'Mouse'],
      correctAnswer: 'Operating System',
    },
    {
      question: 'Question 5: first page Website is termed as?',
      options: ['Index Page', 'Homepage', 'Sitemap', 'Pen Drive'],
      correctAnswer: 'Homepage',
    },
    
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [lock,setLock] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowResult(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    

  };

  const checkAns =(e,correctAnswer) => {
    if(question.selectedOption === correctAnswer){
        e.target.classList.add("correct");
        setLock(true);
    }
    else{
        e.target.classList.add("wrong");
        setLock(true);
    }
  }

  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr/>
      {showResult ? (
        <div className='class'>
          <h2>Quiz Result</h2>
          <p>You Scored {score} out of {questions.length}</p>
          <button onClick={handleReset}>Reset Quiz</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionSelect(option)}
                style={{
                  backgroundColor:
                    selectedOption === option
                      ? option === questions[currentQuestion].correctAnswer
                        ? 'green'
                         : 'red'
                      : 'white',
                      
                }}
              >
                {option}
              </li>
            ))}
          </ul>
          <p>
            {currentQuestion + 1} out of {questions.length}
          </p>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
