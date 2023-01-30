import React, { useEffect } from "react";
import { useHookstate } from "@hookstate/core";
import store from "../../hookstate/state";
import { useHistory } from "react-router-dom";

function Counter() {
  const history = useHistory();

  const { cartProducts, loading } = useHookstate(store);

  useEffect(() => {
    console.log("Counter: re-render");
  });
  return (
    <span
      className="header-cart"
      onClick={() => {
        loading.set(true);
        history.push("/cart");
      }}
    >
      Cart Items: {cartProducts.get().length}
    </span>
  );
}

export default Counter;
