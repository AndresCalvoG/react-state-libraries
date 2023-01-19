import React, { useEffect } from "react";
import "./main.css";

function Main({ children }) {
  useEffect(() => {
    console.log("Main: re-render");
  });

  return <main className="main-content">{children}</main>;
}

export default Main;
