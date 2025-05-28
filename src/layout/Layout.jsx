import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  const location = useLocation();
  console.log("Current location:", location.pathname);
  const login = location.pathname.includes("/login");
  const signup = location.pathname.includes("/signup");

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Navbar */}
      {login || signup || <Navbar></Navbar>}
      <Outlet> {/* Pages */}</Outlet>
      {/* Footer */}
      {login || signup || <Footer></Footer>}
    </div>
  );
};

export default Layout;
