import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  if (localStorage.getItem("TOKEN") === null) {
    return <Navigate to={"/login"} />;
  } else {
    return props.children;
  }
};

export default ProtectedRoute;
