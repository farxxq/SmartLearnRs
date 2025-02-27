import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <div className="h-screen w-screen">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
