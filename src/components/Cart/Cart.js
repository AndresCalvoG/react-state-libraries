import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { loadingState, cartProductsList } from "../../atoms/productsState";

import "./cart.css";

function Cart() {
  //const { cartProducts, deleteFromCart, setLoading }
  const setLoading = useSetRecoilState(loadingState);
  const [cartProducts, setCartProducts] = useRecoilState(cartProductsList);

  useEffect(() => {
    console.log("Cart: re-render");
    const timer = setTimeout(() => {
      //console.log("Cargado");
      setLoading((prev) => false);
    }, 1000);

    return () => clearTimeout(timer);
  });

  function deleteFromCart(index) {
    setLoading((prev) => true);
    let newCartProducts = [...cartProducts];
    newCartProducts.splice(index, 1);
    //console.log(newCartProducts);
    setCartProducts((prev) => newCartProducts);
    const timer = setTimeout(() => {
      setLoading((prev) => false);
    }, 1000);
  }

  return (
    <section className="list">
      <article className="list-container">
        <h1>Product's Cart</h1>
        <ul>
          {cartProducts.map((e, index) => {
            return (
              <li key={e.id * Math.random()} className="item">
                <h3>{e.title}</h3>
                <span onClick={() => deleteFromCart(index)}>Delete</span>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}

export default Cart;
