import logo from "../../logo.svg";
import "./header.css";

function App() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <h1 className="header-title"> My Store</h1>
      <span className="header-cart">Cart Items:</span>
    </header>
  );
}

export default App;
