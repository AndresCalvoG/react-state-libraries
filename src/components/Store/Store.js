import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./store.css";

const URL = "https://fakestoreapi.com/products";

function Store() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const selectProduct = (product) => {
    dispatch({ type: "SELECT_PRODUCT", payload: product });
  };
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  async function fetchData(url) {
    dispatch({ type: "LOADING", payload: true });
    const result = await fetch(url);
    const data = await result.json();
    dispatch({ type: "ADD_PRODUCTS", payload: data });
    dispatch({ type: "SELECT_PRODUCT", payload: data[0] });
    dispatch({ type: "LOADING", payload: false });
  }

  useEffect(() => {
    fetchData(URL);
  }, []);

  useEffect(() => {
    console.log("store: re-render");
  });

  return (
    <section>
      {products.map((product) => {
        return (
          <article
            key={product.id}
            className="card"
            onClick={() => selectProduct(product)}
          >
            <h1>{product.title}</h1>
            <figure>
              <img src={product.image} alt="product" />
            </figure>
            <p>{product.category}</p>
            <span>Price: $ {product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </article>
        );
      })}
    </section>
  );
}

export default Store;
