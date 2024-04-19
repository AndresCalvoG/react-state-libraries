import React from "react";
import "./loader.css";
import { useSelector } from "react-redux";

function Loader() {
  const loading = useSelector((state) => state.products.loading);
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
