import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    fontSize: "40px",
    fontWeight: "bolder",
    fontFamily: "serif",
    marginBottom: "10px",
  },
  container: {
    textAlign: "center",
    margin: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tour_Title: {
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "underline",
    textDecorationColor: "orange",
    fontFamily: "serif",
  },
  agency: {
    fontSize: "25px",
    fontWeight: "bold",
    fontFamily: "serif",
  },
  active_button: {
    backgroundColor: "blue",
  },
}));
