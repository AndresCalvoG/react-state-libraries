import React from "react";
import { useGlobalState } from "../../zustand";
import "./loader.css";

function Loader() {
  const { loading } = useGlobalState();

  let show = "";
  if (loading) {
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
