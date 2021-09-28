import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  controls: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "7px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  editField: {
    backgroundColor: "#eee",
    margin: "30px",
    height: "51px",
    borderRadius: "15px",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

export default useStyles;
