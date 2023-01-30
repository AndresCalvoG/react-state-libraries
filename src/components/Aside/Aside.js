import React, { useEffect } from "react";
import { useHookstate } from "@hookstate/core";
import store from "../../hookstate/state";
import "./aside.css";

function Aside() {
  const { selectedProduct } = useHookstate(store);

  useEffect(() => {
    console.log("Aside: re-render");
  });

  return (
    <aside>
      <h1>{selectedProduct.get().title}</h1>
      <figure>
        <img src={selectedProduct.get().image} alt="product" />
      </figure>
      <p>
        <b> Description:</b>
        <br />
        {selectedProduct.get().description}
      </p>
      <span>Price: ${selectedProduct.get().price}</span>
    </aside>
  );
}

export default Aside;
