import { useEffect, useState } from 'react'

import Description from "./Description/Description"
import Feedback from "./Feedback/Feedback"
import Options from "./Options/Options"
import Notification from './Notification/Notification';

const createInitialStorage = () => {
    const fullLocalStorage = localStorage.getItem("valuesParse");

  return fullLocalStorage ? JSON.parse(fullLocalStorage) : { good: 0, neutral: 0, bad: 0, };
  }

function App() {
  
  const [values, setValues] = useState(createInitialStorage); 
  const totalFeedback = values.good + values.neutral + values.bad;
  const positive = totalFeedback ? (Math.round((values.good / totalFeedback) * 100)) : 0;
  
  useEffect(() => {
    const valuesParse = JSON.stringify(values);
    localStorage.setItem("valuesParse", valuesParse)
}, [values])

  const updateFeedback = (feedbackType) => {
    setValues((values) => ({
      ...values,
      [feedbackType]: values[feedbackType] + 1
    }));
  }

  const resetFeedback = () => { 
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  }
    return (
      <>
      <Description />
        {!totalFeedback ? <Options onFeedbackSelect={updateFeedback} /> :
          <Options totalFeedback={totalFeedback} onFeedbackSelect={updateFeedback} reset={resetFeedback} />}
        {!totalFeedback ? <Notification /> : <Feedback values={values} totalFeedback={totalFeedback} positive={ positive }/>}
    </>
  )
}

export default App
