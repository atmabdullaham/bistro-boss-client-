import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProver";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const { pathname } = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={pathname}></Navigate>;
};

export default PrivateRoute;
