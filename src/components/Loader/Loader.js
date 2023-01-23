import React from "react";
import { useRecoilValue } from "recoil";
import { loadingState } from "../../atoms/productsState";
import "./loader.css";

function Loader() {
  const loading = useRecoilValue(loadingState);

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
