import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const history = useHistory();

  const cartProducts = useSelector((state) => state.products.cartProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Counter: re-render");
  });
  return (
    <span
      className="header-cart"
      onClick={() => {
        dispatch({ type: "LOADING", payload: true });
        history.push("/cart");
      }}
    >
      Cart Items: {cartProducts?.length}
    </span>
  );
}

export default Counter;
