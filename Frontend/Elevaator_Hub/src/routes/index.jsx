import React from "react";
import Home from "../page";
import Signin from "../page/signin";
const routes = [
  { path: "/", element: <Home />, isProtected: false },
  { path: "/login", element: <Signin />, isProtected: false },
];
export default routes;
