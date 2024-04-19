import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";

function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.products.cartProducts);
  const deleteFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  };

  useEffect(() => {
    console.log("Cart: re-render");
    const timer = setTimeout(() => {
      console.log("Cargado");
      dispatch({ type: "LOADING", payload: false });
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="list">
      <article className="list-container">
        <h1>Product's Cart</h1>
        <ul>
          {cartProducts.map((product, index) => {
            return (
              <li key={product.id * Math.random()} className="item">
                <h3>{product.title}</h3>
                <span onClick={() => deleteFromCart(product)}>Delete</span>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}

export default Cart;
