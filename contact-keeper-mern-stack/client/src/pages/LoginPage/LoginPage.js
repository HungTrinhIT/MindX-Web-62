import React, { useState } from "react";
import LoginForm from "components/LoginForm/LoginForm";
import PageContainer from "components/PageContainer/PageContainer";
import AuthServices from "services/authServices";

import "./LoginPage.css";

const LoginPage = (props) => {
  const [loginError, setLoginError] = useState(null);
  const onSubmitLogin = async (values) => {
    try {
      const response = await AuthServices.login(values);
      console.log({ response });
      const data = response.data;
      
    } catch (error) {
      setLoginError(error.response.data.msg);
    }
  };

  return (
    <PageContainer title="Login page">
      <div className="login-page-container">
        <LoginForm onSubmit={onSubmitLogin} loginError={loginError} />
      </div>
    </PageContainer>
  );
};

export default LoginPage;
