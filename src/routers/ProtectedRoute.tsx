import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const role = sessionStorage.getItem("role");
  const auth = sessionStorage.getItem("token");

  // if (!auth || auth === "undefined") {
  //   return <Navigate to="/" />;
  // } else if (allowRoles.includes(role)) {
  //   return children;
  // } else {
  //   return <Navigate to="/" />;
  // }
};

export default ProtectedRoute;
