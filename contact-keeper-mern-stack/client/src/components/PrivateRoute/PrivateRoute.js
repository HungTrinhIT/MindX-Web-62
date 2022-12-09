import { useContext } from "react";
import { Navigate } from "react-router-dom";
import authContext from "../../contexts/AuthContext/authContext";

const PrivateRoute = (props) => {
  const { component: Component } = props;
  const { state } = useContext(authContext);
  const { isAuthenticated } = state;
  console.log("isAuthenticated:", isAuthenticated);
  if (isAuthenticated) {
    return <Component />;
  }

  return <Navigate to="/login" />;
};
export default PrivateRoute;
