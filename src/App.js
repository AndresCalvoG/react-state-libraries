import Main from "./components/Main/Main";
import Routes from "./components/Routes/Routes";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import "./app.css";

function App() {
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
