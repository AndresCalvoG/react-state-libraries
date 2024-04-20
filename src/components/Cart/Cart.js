import React, { useEffect } from "react";
import { deleteFromCart, setFinish } from "../../redux/slices/products/index";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";

function Cart() {
  const { cartProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Cart: re-render");
    const timer = setTimeout(() => {
      //console.log("Cargado");
      dispatch(setFinish());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="list">
      <article className="list-container">
        <h1>Product's Cart</h1>
        <ul>
          {cartProducts.map((e, index, array) => {
            return (
              <li key={e.id * Math.random()} className="item">
                <h3>{e.title}</h3>
                <span onClick={() => dispatch(deleteFromCart(index, array))}>
                  Delete
                </span>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}

export default Cart;
