import TextComponent from "../TextComponent/TextComponent"

const Feedback = ({values, totalFeedback, positive}) => {
    // const total = values.good + values.neutral + values.bad;
    // const positive = (values.good * 100)/total;
    return <>
        <TextComponent name={`Good: ${ values.good }`}/>
        <TextComponent name={`Neutral: ${values.neutral}`} />
        <TextComponent name={`Bad: ${values.bad}`} />
        <TextComponent name={`Total: ${totalFeedback}`} />
        <TextComponent name={`Positive: ${positive}%`} />
    </>
}

export default Feedback