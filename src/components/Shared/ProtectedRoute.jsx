import React from "react";
import { Navigate } from "react-router-dom";
import { decodeToken } from "../../helpers/decodeToken";
import NotFoundPage from "./NotFoundPage";

const ProtectedAdminRoute = (props) => {
  if (localStorage.getItem("TOKEN") === null) {
    return <Navigate to={"/login"} />;
  }
  if (decodeToken().role === "ADMIN") {
    return props.children;
  } else {
    return <NotFoundPage navigateTo="/login" />;
  }
};

export { ProtectedAdminRoute };
