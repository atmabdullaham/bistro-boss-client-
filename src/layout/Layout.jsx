import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Navbar */}
      <Navbar></Navbar>
      <Outlet> {/* Pages */}</Outlet>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
