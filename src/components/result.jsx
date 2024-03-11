import React from 'react'

const Result = ({questions, userAnswers, resetQuiz = () => {}}) => {
    const correctAnswer = userAnswers.filter((answer)=>answer).length
  return (
    <div className='results'>
        <h2>Results</h2>
        <p>You answered {correctAnswer} out of {questions.length} questions</p>
        <span onClick={resetQuiz}>Retry</span>
        <ul>
            {
                questions.map((question, index) => {
                    return (
                        <li key={index} data-correct={userAnswers[index]}>
                            Q{index+1}. {question.question}
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Result