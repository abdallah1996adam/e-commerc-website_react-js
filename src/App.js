import React, { useState, useEffect } from "react";
import { NavaBar, Products } from "./pages";

import {commerce} from "./libs/commerce";

function App() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await commerce.products.list();
      setProductsList(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <NavaBar />
      <Products productsList={productsList}/>
    </>
  );
}

export default App;
