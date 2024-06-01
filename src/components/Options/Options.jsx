import ButtonComponent from "../ButtonComponent/ButtonComponent"
import css from "./Options.module.css";

const Options = ({ totalFeedback, onFeedbackSelect, reset }) => {
    return <div className={css.container}>     
            <ButtonComponent type={() => onFeedbackSelect("good")} name={ "good" }/>
            <ButtonComponent type={() => onFeedbackSelect("neutral")} name={"neutral"}/>
            <ButtonComponent type={() => onFeedbackSelect("bad")} name={"bad"}/>
        {totalFeedback ? <button onClick={reset} className={css.reset}>Reset</button> : null}
    </div>
}

export default Options