import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/slices/products/index";

function Counter() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { cartProducts } = useSelector((state) => state.products);

  useEffect(() => {
    console.log("Counter: re-render");
  });
  return (
    <span
      className="header-cart"
      onClick={() => {
        dispatch(setLoading());
        history.push("/cart");
      }}
    >
      Cart Items: {cartProducts.length}
    </span>
  );
}

export default Counter;
