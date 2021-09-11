import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { NavaBar, Products } from "./pages";
import { CartList, Checkout } from "./components";

import { commerce } from "./libs/commerce";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder]= useState({});
  const [errorMsg, setErrorMsg] = useState('')

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

  async function handleRefresh(){
    const newCart = await commerce.cart.refresh();
    setCart(newCart)
  }

  async function handleCheckout(checkoutTokenId, newOrder){
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
      setOrder(incomingOrder)
      handleRefresh();
    } catch (error) {
      setErrorMsg(error.data.error.message)
    }
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
            <CartList
              cart={cart}
              handleUpdateCart={handleUpdateCart}
              handleRemoveCart={handleRemoveCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout 
            cart={cart}
            order={order}
            handleCheckout={handleCheckout}
            error={errorMsg}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
