import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Screens from "../Screens/Screens";
import Store from "../Store/Store";
import Cart from "../Cart/Cart";

function Routes(props) {
  useEffect(() => {
    console.log("Routes: re-render");
  });
  return (
    <Switch>
      <Route exact path="/" render={() => <Store />} />
      <Route
        exact
        path="/segmenter"
        render={() => <Screens {...props} view="segmenter" />}
      />
      <Route
        exact
        path="/accounting/home"
        render={() => <Screens {...props} view="accounting" />}
      />
      <Route exact parh="/cart" render={() => <Cart />} />
    </Switch>
  );
}

export default Routes;
