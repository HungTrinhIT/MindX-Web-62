import { useEffect, useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const AuthState = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const fetchUserInformation = async () => {};

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
