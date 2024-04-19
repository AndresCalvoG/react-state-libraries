import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./aside.css";

function Aside() {
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  useEffect(() => {
    console.log("Aside: re-render");
  });

  return (
    <aside>
      <h1>{selectedProduct.title || "Select a product"}</h1>
      <figure>
        <img src={selectedProduct.image} alt="product" />
      </figure>
      <p>
        <b> Description:</b>
        <br />
        {selectedProduct.description}
      </p>
      <span>Price: ${selectedProduct.price || 0}</span>
    </aside>
  );
}

export default Aside;
