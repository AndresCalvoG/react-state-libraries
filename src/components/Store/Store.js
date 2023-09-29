import React, { useEffect } from "react";
import { useHookstate } from "@hookstate/core";
import store from "../../hookstate/state";
import "./store.css";

const URL = "https://fakestoreapi.com/products";

function Store() {
  const { products, loading, selectedProduct, cartProducts } =
    useHookstate(store);

  useEffect(() => {
    async function fetchData(url) {
      loading.set(true);
      const result = await fetch(url);
      const data = await result.json();
      //console.log(data);
      products.set(data);
      selectedProduct.set(data[0]);
      loading.set(false);
    }
    fetchData(URL);
  }, []);

  useEffect(() => {
    console.log("store: re-render");
  });

  function selectProduct(id) {
    const product = products.get().find((e) => {
      return e.id === id;
    });
    //console.log(product.id);
    selectedProduct.set(JSON.parse(JSON.stringify(product)));
  }

  function addToCart(id) {
    const product = products.get().find((e) => {
      return e.id === id;
    });
    cartProducts.set(
      JSON.parse(JSON.stringify([...cartProducts.get(), product]))
    );
  }

  return (
    <section>
      {products.get().map((element) => {
        return (
          <article key={element.id} className="card">
            <h1>{element.title}</h1>
            <figure onClick={() => selectProduct(element.id)}>
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
