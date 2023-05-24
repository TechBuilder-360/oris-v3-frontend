import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = () => {
  const role = sessionStorage.getItem("role");
  const auth = sessionStorage.getItem("token");
  // if (!auth || auth === "undefined") {
  //   return children;
  // }

  if (role === "admin") {
    return <Navigate to="/dashboard/admin" />;
  }

  if (role === "user") {
    return <Navigate to="/dashboard/user" />;
  }

  if (role === "visitor") {
    return <Navigate to="/dashboard/visitor" />;
  }
};

export default PublicRoute;
