import React, { useEffect } from "react";
import { AppContext } from "../../context";
import "./cart.css";

function Cart() {
  const { cartProducts, deleteFromCart } = React.useContext(AppContext);

  useEffect(() => {
    console.log("Cart: re-render");
  });

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
