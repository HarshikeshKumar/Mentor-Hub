import React from "react";
import useUserStore from "../store/user";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { children } = props;
  const { user } = useUserStore();

  if (!user) {
    // TODO: add redirect query
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
