import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { NavaBar, Products } from "./pages";
import { CartList } from "./components";

import { commerce } from "./libs/commerce";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState({});

  async function fetchData() {
    const { data } = await commerce.products.list();
    setProductsList(data);
  }

  async function fetchCart() {
    setCart(await commerce.cart.retrieve());
  }

  async function handleAddToCart(productId, quantity) {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  async function handleUpdateCart(productId, quantity) {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  }

  async function handleRemoveCart(productId) {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  }

  async function handleEmptyCart() {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  }

  useEffect(() => {
    fetchData();
    fetchCart();
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavaBar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products
              productsList={productsList}
              onAddToCart={handleAddToCart}
            />
          </Route>
          <Route exact path="/cart">
            <CartList cart={cart} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
