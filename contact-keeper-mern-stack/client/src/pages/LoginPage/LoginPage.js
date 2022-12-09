import React, { useContext, useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import authContext from "../../contexts/AuthContext/authContext";
import { LOGIN } from "../../contexts/types";
import AuthServices from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
const LoginPage = () => {
  const { dispatch } = useContext(authContext);
  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onLoginSubmit = async (values) => {
    console.log("Submit form in Login Page", { values });

    try {
      setLoading(true);
      setLoginError(null);
      const loginResponse = await AuthServices.login(values);
      const action = {
        type: LOGIN,
        payload: loginResponse.data,
      };

      dispatch(action);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setLoginError(error?.response.data.msg);
    }
  };
  return (
    <div className="container">
      <div className="login-page-container">
        <LoginForm
          onSubmit={onLoginSubmit}
          loading={loading}
          loginError={loginError}
        />
      </div>
    </div>
  );
};

export default LoginPage;
