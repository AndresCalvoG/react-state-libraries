import React, { useEffect } from "react";

import { AppContext } from "../../context";
import { useHistory } from "react-router-dom";

function Counter() {
  const history = useHistory();

  const { cartProducts } = React.useContext(AppContext);

  useEffect(() => {
    console.log("Counter: re-render");
  });
  return (
    <span className="header-cart" onClick={() => history.push("/cart")}>
      Cart Items: {cartProducts.length}
    </span>
  );
}

export default Counter;
