import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartProductsList, loadingState } from "../../atoms/productsState";
import { useHistory } from "react-router-dom";

function Counter() {
  const history = useHistory();
  const cartProducts = useRecoilValue(cartProductsList);
  const setLoading = useSetRecoilState(loadingState);

  useEffect(() => {
    console.log("Counter: re-render");
  });
  return (
    <span
      className="header-cart"
      onClick={() => {
        setLoading((prev) => true);
        history.push("/cart");
      }}
    >
      Cart Items: {cartProducts.length}
    </span>
  );
}

export default Counter;
