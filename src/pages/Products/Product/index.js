import React from "react";
//icons
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconBotton,
} from "@material-ui/core";
import { AddShoppingCart, CallMissed } from "@material-ui/icons";

const Product = ({ product }) => {
  return (
    <>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image="" title={product.name} />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">{product.price}</Typography>
          </div>
          <Typography variant="h5" color='textSecondary'>{product.description}</Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>

        </CardActions>
      </Card>
    </>
  );
};

export default Product;
