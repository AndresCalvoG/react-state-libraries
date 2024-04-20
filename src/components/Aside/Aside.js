import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./aside.css";

function Aside() {
  const { selectedProduct } = useSelector((state) => state.products);

  useEffect(() => {
    console.log("Aside: re-render");
  });

  return (
    <aside>
      <h1>{selectedProduct.title}</h1>
      <figure>
        <img src={selectedProduct.image} alt="product" />
      </figure>
      <p>
        <b> Description:</b>
        <br />
        {selectedProduct.description}
      </p>
      <span>Price: ${selectedProduct.price}</span>
    </aside>
  );
}

export default Aside;
