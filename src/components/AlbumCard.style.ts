import { makeStyles } from "@material-ui/core/styles";

export const songStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "300px",
    height: "400px",
    borderRadius: 20,
    paddingBottom: 20,
    // height: "120px",
    border: "4px solid transparent",
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
  },
  details: {
    height: 170,
    textAlign: "center",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    height: 250,
    // float: "right",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  selected: {
    border: "4px solid #0361CF",
  },
}));
