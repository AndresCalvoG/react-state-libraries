import React from "react";
import { AppContext } from "../../context";
import "./loader.css";

function Loader() {
  const { loading } = React.useContext(AppContext);
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
