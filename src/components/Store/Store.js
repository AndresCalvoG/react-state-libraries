import React, { useEffect } from "react";
import { AppContext } from "../../context";
import "./store.css";

const URL = "https://fakestoreapi.com/products";

function Store() {
  const { products, fetchData, selectProduct, addToCart } =
    React.useContext(AppContext);

  useEffect(() => {
    fetchData(URL);
  }, []);

  useEffect(() => {
    console.log("store: re-render");
  });

  return (
    <section>
      {products.map((element) => {
        return (
          <article
            key={element.id}
            className="card"
            onClick={() => selectProduct(element.id)}
          >
            <h1>{element.title}</h1>
            <figure>
              <img src={element.image} alt="product" />
            </figure>
            <p>{element.category}</p>
            <span>Price: $ {element.price}</span>
            <button onClick={() => addToCart(element.id)}>Add to Cart</button>
          </article>
        );
      })}
    </section>
  );
}

export default Store;
