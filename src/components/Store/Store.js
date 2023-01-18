import React, { useState, useEffect } from "react";
import "./store.css";

const URL = "https://fakestoreapi.com/products";
function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData(url) {
      const result = await fetch(url);
      const data = await result.json();
      //console.log(data);
      setProducts(data);
    }
    fetchData(URL);
  }, []);

  return (
    <section>
      {products.map((element) => {
        return (
          <article key={element.id} className="card">
            <h1>{element.title}</h1>
            <figure>
              <img src={element.image} alt="product" />
            </figure>
            <p>{element.category}</p>
            <span>Price: $ {element.price}</span>
            <button>Add to Cart</button>
          </article>
        );
      })}
    </section>
  );
}

export default Store;
