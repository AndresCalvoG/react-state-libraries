import React, { useEffect } from "react";
import { selectProduct, addToCart } from "../../redux/slices/products";
import { productSlice } from "../../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import "./store.css";

const URL = "https://fakestoreapi.com/products";

function Store() {
  const { setLoading, setProducts, setSelectedProduct } = productSlice.actions;
  const { products, cartProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const fetchData = async (url) => {
    dispatch(setLoading());
    const result = await fetch(url);
    const data = await result.json();
    //console.log(data);
    dispatch(setProducts(data));
    dispatch(setSelectedProduct(data[0]));
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  useEffect(() => {
    console.log("store: re-render");
  });

  return (
    <>
      <section>
        {products.map((element, index, array) => {
          return (
            <article
              key={element.id}
              className="card"
              onClick={() => dispatch(selectProduct(element.id, array))}
            >
              <h1>{element.title}</h1>
              <figure>
                <img src={element.image} alt="product" />
              </figure>
              <p>{element.category}</p>
              <span>Price: $ {element.price}</span>
              <button
                onClick={() =>
                  dispatch(addToCart(element.id, array, cartProducts))
                }
              >
                Add to Cart
              </button>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Store;
