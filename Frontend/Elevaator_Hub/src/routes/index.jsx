import React from "react";
import Home from "../page";
import Signin from "../page/signin";
import Signup from "../page/signup";
const routes = [
  { path: "/", element: <Home />, isProtected: false },
  { path: "/login", element: <Signin />, isProtected: false },
  { path: "/signup/:role", element: <Signup />, isProtected: false },
];
export default routes;
