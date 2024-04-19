import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Counter() {
  const history = useHistory();

  const cartProducts = [];
  const setLoading = false;

  useEffect(() => {
    console.log("Counter: re-render");
  });
  return (
    <span
      className="header-cart"
      onClick={() => {
        setLoading(true);
        history.push("/cart");
      }}
    >
      Cart Items: {cartProducts.length}
    </span>
  );
}

export default Counter;
