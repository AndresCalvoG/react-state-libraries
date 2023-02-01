import React from "react";
import { useAtom } from "jotai";
import { loadingState } from "../../jotai";
import "./loader.css";

function Loader() {
  const [loading] = useAtom(loadingState);

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
