import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 py-6 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body py-5">
          <h2 className="text-xl text-primary font-semibold text-center">
            Login Your Account
          </h2>
          <hr className="my-4 text-base-300" />
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary mt-4">Login</button>
            <p className="font-semibold text-center mt-2">
              Dont’t Have An Account ? <Link to="/auth/register" className="text-secondary">Register</Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
