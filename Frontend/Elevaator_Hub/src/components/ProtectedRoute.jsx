import React, { Children } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? Children : <Navigate to="/login" />;
};
export default ProtectedRoute;
