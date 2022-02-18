import React, { useEffect } from 'react'

const Quiz = ({name, score, questions, setQuestions, setScore}) => {
  
  const [options, setOptions] = useState()
  const [currQues, setCurrQues] = useState(0)
  useEffect(() => {
    console.log(questions)

    setOptions(questions && handleShuffle([questions[currQues]?.correct_answer,
      ...questions[currQues]?.incorrect_answer])
    )
  },[questions])
    return (
    <div>

    </div>
  )
}

export default Quiz