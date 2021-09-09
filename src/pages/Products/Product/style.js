import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    maxWidth: "80",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
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
