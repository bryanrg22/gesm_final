import React, { useState } from 'react';
import { quizQuestions } from '../data/quizData';

function Quiz() {
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const handleQuizSelect = (quizType) => {
    let selectedQuestions = [];
    if (quizType === 'all') {
      Object.values(quizQuestions).forEach(workQuestions => {
        selectedQuestions = [...selectedQuestions, ...workQuestions];
      });
      selectedQuestions = selectedQuestions.sort(() => Math.random() - 0.5).slice(0, 4);
    } else {
      selectedQuestions = quizQuestions[quizType];
    }
    setQuestions(selectedQuestions);
    setSelectedQuiz(quizType);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setAnswerSelected(false);
    setSelectedAnswerIndex(null);
  };

  const handleAnswerClick = (isCorrect, index) => {
    if (!answerSelected) {
      setAnswerSelected(true);
      setSelectedAnswerIndex(index);
      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswerSelected(false);
      setSelectedAnswerIndex(null);
    } else {
      setShowScore(true);
    }
  };

  const renderQuizSelector = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Select a Quiz</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Books</h3>
          {Object.keys(quizQuestions).filter(title => !['Bantu Mama', 'Choco'].includes(title)).map((book) => (
            <button
              key={book}
              onClick={() => handleQuizSelect(book)}
              className="block w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2"
            >
              {book}
            </button>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Films</h3>
          {['Bantu Mama', 'Choco'].map((film) => (
            <button
              key={film}
              onClick={() => handleQuizSelect(film)}
              className="block w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mb-2"
            >
              {film}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => handleQuizSelect('all')}
        className="block w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Mixed Quiz (4 Random Questions)
      </button>
    </div>
  );

  const renderQuiz = () => (
    <div>
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl">You scored {score} out of {questions.length}</p>
          <button
            onClick={() => setSelectedQuiz('')}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back to Quiz Selection
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1} of {questions.length}</h2>
          <p className="text-xl mb-4">{questions[currentQuestion].questionText}</p>
          <div className="grid grid-cols-1 gap-4">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option.isCorrect, index)}
                disabled={answerSelected}
                className={`px-4 py-2 rounded text-left ${
                  answerSelected
                    ? option.isCorrect
                      ? 'bg-green-500 text-white'
                      : index === selectedAnswerIndex
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-300 text-gray-700'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {option.answerText}
              </button>
            ))}
          </div>
          {answerSelected && (
            <button
              onClick={handleNextQuestion}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next Question
            </button>
          )}
        </>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Afro-Latin Literature and Film Quiz</h1>
      <div className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6"> {/* Updated container background */}
        {selectedQuiz ? renderQuiz() : renderQuizSelector()}
      </div>
    </div>
  );
}

export default Quiz;

