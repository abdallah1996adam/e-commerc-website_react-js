import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem.jsx";

import useStyles from "./styles.js";

const CartList = ({ cart }) => {
  const classes = useStyles();



  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shipping Cart,
      <Link to="/" className={classes.link}>please add some!</Link> 
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item}/>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h5">
          Subtotal: {cart.subtotal.formatted_with_symbol}{" "}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="small"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="small"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "Loading......";

  return (
    <React.Fragment>
      <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>
          Your Shopping Cart
        </Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
    </React.Fragment>
  );
};

export default CartList;
