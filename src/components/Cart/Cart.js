import React, { useEffect } from "react";
import { useHookstate } from "@hookstate/core";
import store from "../../hookstate/state";
import "./cart.css";

function Cart() {
  const { cartProducts, loading } = useHookstate(store);

  useEffect(() => {
    console.log("Cart: re-render");
    const timer = setTimeout(() => {
      console.log("Cargado");
      loading.set(false);
    }, 1000);

    return () => clearTimeout(timer);
  });

  function deleteFromCart(index) {
    loading.set(true);
    let newCartProducts = [...cartProducts.get()];
    newCartProducts.splice(index, 1);
    //console.log(newCartProducts);
    cartProducts.set(JSON.parse(JSON.stringify(newCartProducts)));
    const timer = setTimeout(() => {
      loading.set(false);
    }, 1000);
  }

  return (
    <section className="list">
      <article className="list-container">
        <h1>Product's Cart</h1>
        <ul>
          {cartProducts.get().map((e, index) => {
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
