import React, { useEffect } from "react";
import Main from "./components/Main/Main";
import Routes from "./components/Routes/Routes";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import "./app.css";

function App() {
  useEffect(() => {
    console.log("App: re-render");
  });
  return (
    <BrowserRouter>
      <Layout>
        <Aside />
        <Main>
          <Routes />
        </Main>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
