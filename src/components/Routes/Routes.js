import React from "react";
import { Switch, Route } from "react-router-dom";
import Screens from "../Screens/Screens";
import Store from "../Store/Store";

function Routes(props) {
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
    </Switch>
  );
}

export default Routes;
