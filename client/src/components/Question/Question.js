import React, { useState } from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions
}) => {

  const [selected, setSelected] = useState()
  const [error, setError] = useState(false)

  return (
    <div>
      <h1>Question : {currQues + 1}</h1>
      <div className='singleQuestion'>
        <h2>{questions[currQues].question}</h2>
        <div className='options'>
          {error && <ErrorMessage>{error}</ErrorMessage> }

          {
            options && options.map(i => (
              <button
              onClick={() => {}}
              
              >
                {i}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Question