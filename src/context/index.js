import React, { useState, useEffect } from "react";
const AppContext = React.createContext();

function AppProvider(props) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let timer = 0;

  useEffect(() => {
    console.log("Context: re-render");
    return () => clearTimeout(timer);
  });

  async function fetchData(url) {
    setLoading(true);
    const result = await fetch(url);
    const data = await result.json();
    //console.log(data);
    setProducts(data);
    setSelectedProduct(data[0]);
    setLoading(false);
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
    setLoading(true);
    let newCartProducts = [...cartProducts];
    newCartProducts.splice(index, 1);
    //console.log(newCartProducts);
    setCartProducts(newCartProducts);
    timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
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
        loading,
        setLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
