import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    button: {
        backgroundColor: "white",
        height: "35px",
        width: "80px",
        color: props => props.color,
        borderRadius: "5px", 
        border: "1px solid grey"
    }
})

export default useStyles;