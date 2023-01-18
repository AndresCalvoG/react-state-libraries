import Main from "./components/Main/Main";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Main />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
