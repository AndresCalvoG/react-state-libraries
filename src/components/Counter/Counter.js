import React, { useEffect } from "react";
import { useGlobalState } from "../../zustand";
import { useHistory } from "react-router-dom";

function Counter() {
  const history = useHistory();
  const { cartProducts, setLoading } = useGlobalState((state) => state);

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
