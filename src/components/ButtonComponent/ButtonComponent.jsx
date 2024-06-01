import css from "./ButtonComponent.module.css";

const ButtonComponent = ({ name, type }) => {
    return <button onClick={() => type(name)} className={css.component}>{name}</button>
}

export default ButtonComponent
