import { useEffect, useReducer } from "react";
import AuthServices from "../../services/authServices";
import axiosInstance from "../../services/axiosInstance";
import { USER_UPDATED } from "../types";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

const initialState = {
  accessToken: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token") && true,
  user: null,
};

const AuthState = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const fetchUserInformation = async () => {
    const token = localStorage.getItem("token");
    console.log({ token });
    if (token) {
      try {
        axiosInstance.defaults.headers.common["x-auth-token"] = token;
        const res = await AuthServices.fetchUserInfor();
        dispatch({
          type: USER_UPDATED,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
        delete axiosInstance.defaults.headers.common["x-auth-token"];
      }
    } else {
      delete axiosInstance.defaults.headers.common["x-auth-token"];
    }
  };

  useEffect(() => {
    if (!state.user) {
      fetchUserInformation();
    }
  }, [state]);

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
