import React, { useEffect } from "react";
import Main from "./components/Main/Main";
import Routes from "./components/Routes/Routes";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import { Provider } from "react-redux";
import store from "./redux/index";
import "./app.css";

function App() {
  useEffect(() => {
    console.log("App: re-render");
  });
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Aside />
          <Main>
            <Routes />
          </Main>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
