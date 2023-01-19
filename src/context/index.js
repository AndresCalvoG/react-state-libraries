import React, { useState, useEffect } from "react";
const AppContext = React.createContext();

function AppProvider(props) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    console.log("Context: re-render");
  });

  async function fetchData(url) {
    const result = await fetch(url);
    const data = await result.json();
    //console.log(data);
    setProducts(data);
    setSelectedProduct(data[0]);
  }

  function selectProduct(id) {
    const product = products.find((e) => {
      return e.id === id;
    });
    //console.log(product);
    setSelectedProduct(product);
  }

  function addToCart(id) {
    const product = products.find((e) => {
      return e.id === id;
    });
    setCartProducts([...cartProducts, product]);
  }

  function deleteFromCart(index) {
    let newCartProducts = [...cartProducts];
    newCartProducts.splice(index, 1);
    //console.log(newCartProducts);
    setCartProducts(newCartProducts);
  }

  return (
    <AppContext.Provider
      value={{
        products,
        fetchData,
        selectProduct,
        selectedProduct,
        cartProducts,
        addToCart,
        deleteFromCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
