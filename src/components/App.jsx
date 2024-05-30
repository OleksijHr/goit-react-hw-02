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
  
  useEffect(() => {
    // тут умова для заливу на локалку
    const valuesParse = JSON.stringify(values);
    localStorage.setItem("valuesParse", valuesParse)
}, [values])

  const totalFeedback = values.good + values.neutral + values.bad;
  const positive = Math.round((values.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      good: (feedbackType === "good") ? (values.good + 1) : values.good,
      neutral: (feedbackType === "neutral") ? (values.neutral + 1) : values.neutral,
      bad: (feedbackType === "bad") ? (values.bad + 1) : values.bad,
       })
  }

  const resetFeedback = () => { 
    setValues({
      ...values,
      good: 0,
      neutral: 0,
      bad: 0,
    })
  }
    return (
      <>
      <Description />
        {!totalFeedback ? <Options type={updateFeedback}/> : <Options totalFeedback={totalFeedback} type={updateFeedback} reset={ resetFeedback } />}
        {!totalFeedback ? <Notification /> : <Feedback values={values} totalFeedback={totalFeedback} positive={ positive }/>}
    </>
  )
}

export default App
