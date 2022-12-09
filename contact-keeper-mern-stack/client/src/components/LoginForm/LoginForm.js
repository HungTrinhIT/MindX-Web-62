import React from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css";

const LoginForm = (props) => {
  const { onSubmit, loading, loginError } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="login-form-container">
      <p className="text-center display-5">Login</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            className="form-control"
            id="username"
            {...register("username", { required: true })}
          />
          {errors?.username && (
            <small className="text-danger">This field is required</small>
          )}
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
          {errors?.password && (
            <small className="text-danger">This field is required</small>
          )}
        </div>
        {loginError && <p className="text-danger">{loginError}</p>}
        <button type="submit" className="btn btn-primary w-100 mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
