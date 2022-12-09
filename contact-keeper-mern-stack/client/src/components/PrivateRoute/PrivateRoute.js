import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthState/AuthContext";

const PrivateRoute = ({ component: Component }) => {
  const { state } = useContext(AuthContext);
  const { isAuthenticated } = state;

  if (isAuthenticated) {
    return <Component />;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
