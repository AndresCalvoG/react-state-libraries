import React from "react";
import { useSelector } from "react-redux";
import "./loader.css";

function Loader() {
  const { loading } = useSelector((state) => state.products);

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
