import React, { useEffect } from "react";
import { selectProduct, addToCart } from "../../redux/slices/products";
import { productSlice } from "../../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { useProductListQuery } from "../../redux/api/api";
import "./store.css";

function Store() {
  const { setLoading, setProducts, setSelectedProduct } = productSlice.actions;
  const { products, cartProducts } = useSelector((state) => state.products);
  const { data, isLoading } = useProductListQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading());
    }
    if (data) {
      dispatch(setProducts(data));
      dispatch(setSelectedProduct(data[0]));
    }
  }, [data]);

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
