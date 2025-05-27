import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  const location = useLocation();
  console.log("Current location:", location.pathname);
  const noHeaderFooter = location.pathname.includes("/login");
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Navbar */}
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet> {/* Pages */}</Outlet>
      {/* Footer */}
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Layout;
