import css from "./ButtonComponent.module.css";

const ButtonComponent = ({ name, onFeedbackSelect }) => {
    return <button onClick={() => onFeedbackSelect(name)} className={css.component}>{name}</button>
}

export default ButtonComponent
