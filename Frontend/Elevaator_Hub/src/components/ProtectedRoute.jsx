// import React, { Children } from "react";
// import { Navigate, useNavigate } from "react-router-dom";

// const ProtectedRoute = () => {
//   const isAuthenticated = localStorage.getItem("token");
//   return isAuthenticated ? Children : <Navigate to="/signin" />;
// };
// export default ProtectedRoute;
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useUserStore from "../store/user";

const ProtectedRoute = (props) => {
  const { children } = props;
  const { user } = useUserStore();
  const { location } = useLocation();
  if (!user) {
    return <Navigate to={`/signin?redirect=${location.pathname}`}></Navigate>;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
