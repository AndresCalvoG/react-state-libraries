import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import {
  productsList,
  loadingState,
  selectedProductState,
  cartProductsList,
} from "../../atoms/productsState";

import "./store.css";

const URL = "https://fakestoreapi.com/products";

function Store() {
  //const { products, fetchData, selectProduct, addToCart }
  //const products = useRecoilValue(productsList);
  //const setProducts = useSetRecoilState(productsList);
  const [products, setProducts] = useRecoilState(productsList);
  const setLoading = useSetRecoilState(loadingState);
  const setSelectedProduct = useSetRecoilState(selectedProductState);
  const [cartProducts, setCartProducts] = useRecoilState(cartProductsList);
  //console.log(products);

  useEffect(() => {
    async function fetchData(url) {
      setLoading((prev) => true);
      const result = await fetch(url);
      const data = await result.json();
      //console.log(data);
      setProducts((prev) => [...data]);
      setSelectedProduct((prev) => data[0]);
      setLoading((prev) => false);
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
