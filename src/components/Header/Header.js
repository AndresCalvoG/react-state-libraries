import React, { useEffect } from "react";
import logo from "../../logo.svg";
import Counter from "../Counter/Counter";
import "./header.css";

function App() {
  useEffect(() => {
    console.log("Header: re-render");
  });

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <h1 className="header-title"> My Store with Context</h1>
      <Counter />
    </header>
  );
}

export default App;
