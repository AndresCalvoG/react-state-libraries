import React from "react";
import "./loader.css";

function Loader() {
  let show = "";
  let loading = false;
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
