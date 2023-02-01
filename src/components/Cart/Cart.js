import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { cartProductsState, loadingState } from "../../jotai";
import "./cart.css";

function Cart() {
  const [loading, setLoading] = useAtom(loadingState);
  const [cartProducts, setCartProducts] = useAtom(cartProductsState);

  useEffect(() => {
    console.log("Cart: re-render");
    const timer = setTimeout(() => {
      console.log("Cargado");
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  });

  function deleteFromCart(index) {
    setLoading(true);
    let newCartProducts = [...cartProducts];
    newCartProducts.splice(index, 1);
    //console.log(newCartProducts);
    setCartProducts(newCartProducts);
    setTimeout(() => {
      setLoading(false);
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
