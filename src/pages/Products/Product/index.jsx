import React from "react";
//icons
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart, CallMissed } from "@material-ui/icons";

import  makeStyles  from "./style.js";

const Product = ({ product }) => {

  const classes = makeStyles()

  return (
    <>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image} title={product.name} />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">{product.price}</Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton disableSpacing aria-label="Add to cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
