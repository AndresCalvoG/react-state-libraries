import React, { useEffect } from "react";
import Header from "../Header/Header";
import "./layout.css";

function Layout({ children }) {
  useEffect(() => {
    console.log("Layout: re-render");
  });

  return (
    <>
      <Header />
      <main className="content">{children}</main>
    </>
  );
}

export default Layout;
