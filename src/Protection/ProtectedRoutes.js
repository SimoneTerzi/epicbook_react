import React from "react";
import { Outlet } from "react-router-dom";
import Loginpage from "../Page/Loginpage";

const isAuthorized = () => {
  const session = JSON.parse(localStorage.getItem("auth"));
  return session?.token;
};

const ProtectedRoutes = () => {
  const isAuth = isAuthorized();
  return isAuth ? <Outlet /> : <Loginpage />;
};

export default ProtectedRoutes;