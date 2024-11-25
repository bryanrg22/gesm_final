import React, { useState, useEffect } from 'react'

const QuizComponent = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, set
ShowScore] = useState(false)

  useEffect(() => {
    fetch('/api/quiz')
      .then(response => response.json())
      .then(data => setQuestions(data))
  }, [])

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  if (questions.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl">You scored {score} out of {questions.length}</p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1}</h2>
          <p className="text-xl mb-4">{questions[currentQuestion].questionText}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option.isCorrect)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default QuizComponent

