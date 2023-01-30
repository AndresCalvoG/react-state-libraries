import React from "react";
import { useHookstate } from "@hookstate/core";
import store from "../../hookstate/state";
import "./loader.css";

function Loader() {
  const { loading } = useHookstate(store);
  let show = "";
  if (loading.get()) {
    show = "container";
  } else {
    show = "hide";
  }

  return (
    <div className={show}>
      <div className="loader"> </div>
    </div>
  );
}

export default Loader;
