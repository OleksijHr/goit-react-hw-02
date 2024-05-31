import ButtonComponent from "../ButtonComponent/ButtonComponent"
import css from "./Options.module.css";

const Options = ({ totalFeedback, type, reset }) => {
    return <div className={css.container}>     
            <ButtonComponent onFeedbackSelect={type} name={ "good" }/>
            <ButtonComponent onFeedbackSelect={type} name={"neutral"}/>
            <ButtonComponent onFeedbackSelect={type} name={"bad"}/>
        {totalFeedback ? <button onClick={reset} className={css.reset}>Reset</button> : null}
    </div>
}

export default Options