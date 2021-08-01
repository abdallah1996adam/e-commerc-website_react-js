import React from "react";
import { Grid } from "@material-ui/core";

const products = [
  { id: 1, name: "book", description: "nie book" , price:"15€"},
  { id: 2, name: "phone", description: "nie looking phone", price:"20€" },
  { id: 3, name: "chose", description: "great chose for runnnig ", price:"23€"},
  { id: 4, name: "laptop", description: "lovely laptop but so expensive", price:"52€" },
];

const Product = () => {
  return (
    <>
      <main>
        <Grid container justify="center" spacing={4}>
            {products.map((p)=>(
                <Grid key={p.id} xs ={12} sm={6} md={4} lg={3}>
                    <Product product={products}/>
                </Grid>
            ))}
        </Grid>
      </main>
    </>
  );
};

export default Product;
