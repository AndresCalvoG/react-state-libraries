import React, { useEffect } from "react";
import { useGlobalState } from "../../zustand";
import "./store.css";

const URL = "https://fakestoreapi.com/products";

function Store() {
  const {
    products,
    cartProducts,
    setLoading,
    setSelectedProduct,
    setProducts,
    setCartProducts,
  } = useGlobalState((state) => state);

  useEffect(() => {
    async function fetchData(url) {
      setLoading(true);
      const result = await fetch(url);
      const data = await result.json();
      //console.log(data);
      setProducts(data);
      setSelectedProduct(data[0]);
      setLoading(false);
    }
    fetchData(URL);
  }, []);

  useEffect(() => {
    console.log("store: re-render");
  });

  function selectProduct(id) {
    const product = products.find((e) => {
      return e.id === id;
    });
    //console.log(product);
    setSelectedProduct(product);
  }

  function addToCart(id) {
    const product = products.find((e) => {
      return e.id === id;
    });
    setCartProducts([...cartProducts, product]);
  }

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
