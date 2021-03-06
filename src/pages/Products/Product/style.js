import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    maxWidth: "100",
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
