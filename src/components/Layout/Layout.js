import Header from "../Header/Header";
import "./layout.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="content">{children}</main>
    </>
  );
}

export default Layout;
