import React, { useEffect } from "react";
import { reducer, initialState, actionsTypes } from "../UseReducer/index";
const AppContext = React.createContext();

function AppProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { products, selectedProduct, cartProducts, loading } = state;

  //ACTION CREATORS
  const onLoading = () => dispatch({ type: actionsTypes.loading });
  const onSuccess = (data) =>
    dispatch({ type: actionsTypes.success, payload: data });
  const onSelectProduct = (data) =>
    dispatch({ type: actionsTypes.select, payload: data });
  const onChangeToCart = (data) =>
    dispatch({ type: actionsTypes.change, payload: data });
  const offLoading = () => dispatch({ type: actionsTypes.finish });

  //Variables
  let timer = 0;

  useEffect(() => {
    console.log("Context: re-render");
    return () => clearTimeout(timer);
  });

  async function fetchData(url) {
    onLoading();
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    onSuccess(data);
    onSelectProduct(data[0]);
  }

  function selectProduct(id) {
    const product = products.find((e) => {
      return e.id === id;
    });
    //console.log(product);
    onSelectProduct(product);
  }

  function addToCart(id) {
    const product = products.find((e) => {
      return e.id === id;
    });
    onChangeToCart([...cartProducts, product]);
  }

  function deleteFromCart(index) {
    onLoading();
    let newCartProducts = [...cartProducts];
    newCartProducts.splice(index, 1);
    //console.log(newCartProducts);
    onChangeToCart(newCartProducts);
    timer = setTimeout(() => {
      offLoading();
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
