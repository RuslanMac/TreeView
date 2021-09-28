import useStyles from "./styles";

const Button = (props) => {
    const c = useStyles(props);
    return (
    <button className={c.button} onClick={props.onClick}>{props.name} </button>
    )
}

export default Button;