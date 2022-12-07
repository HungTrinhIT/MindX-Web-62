import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./LoginForm.css";
const LoginForm = (props) => {
  const { onSubmit, loginError } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div className="login-form-container">
      <div className="text-center">
        <p className="display-6 mt-4">Hello again!</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="username"
            className="form-control"
            id="username"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <small className="text-danger mt-2 mb-2">
              This field is required
            </small>
          )}
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <small className="text-danger mt-1 mb-2">
              This field is required
            </small>
          )}
        </div>
        {loginError && <p className="my-3 text-danger">{loginError}</p>}
        <button type="submit" className="btn btn-primary w-100 mt-3 py-2">
          Login
        </button>

        <p className="mt-5 text-center text-secondary">
          Don't have an account yet? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
