import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div>
      <nav className="h-[64px]">
        <Navbar></Navbar>
      </nav>
      <div className="container mx-auto min-h-[calc(100vh-285px)] pt-4">
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
