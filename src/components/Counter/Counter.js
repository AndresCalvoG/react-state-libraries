import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAtom } from "jotai";
import { cartProductsState, loadingState } from "../../jotai";

function Counter() {
  const history = useHistory();
  const [cartProducts] = useAtom(cartProductsState);
  const [loading, setLoading] = useAtom(loadingState);

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
