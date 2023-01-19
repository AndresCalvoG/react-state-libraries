import React, { useEffect } from "react";
import Main from "./components/Main/Main";
import Routes from "./components/Routes/Routes";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import { AppProvider } from "./context/index";
import "./app.css";

function App() {
  useEffect(() => {
    console.log("App: re-render");
  });
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout>
          <Aside />
          <Main>
            <Routes />
          </Main>
        </Layout>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
