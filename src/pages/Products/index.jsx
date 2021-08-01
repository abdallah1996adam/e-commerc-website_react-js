import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product";

const products = [
  { id: 1, name: "book", description: "nie book" , price:"15€", image:"https://www.mercator-ocean.fr/wp-content/uploads/2019/11/Mock-Up_BlueBookCopernicus_2.jpg"},
  { id: 2, name: "phone", description: "nie looking phone", price:"20€", image:"https://images.frandroid.com/wp-content/uploads/2021/07/freedom-phone.jpg" },
  { id: 3, name: "chose", description: "great chose for runnnig ", price:"23€",image:"https://static.cms.yp.ca/ecms/media/2/Comment-choisir-des-vetements-de-sport-confortables-et-solides-1430755125-600x360.jpeg"},
  { id: 4, name: "laptop", description: "lovely laptop but so expensive", price:"52€", image:"https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06539619_1_1.png" },
];

const Products = () => {
  return (
    <>
      <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
      </main>
    </>
  );
};

export default Products;
