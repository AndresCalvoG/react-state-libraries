import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Store from "../Store/Store";
import Cart from "../Cart/Cart";

function Routes(props) {
  useEffect(() => {
    console.log("Routes: re-render");
  });
  return (
    <Switch>
      <Route exact path="/" render={() => <Store />} />
      <Route exact parh="/cart" render={() => <Cart />} />
    </Switch>
  );
}

export default Routes;
