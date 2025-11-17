import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { logIn } = use(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("Login clicked");

    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        // console.log(error.message);
        setError(error.code);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 py-6 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body py-5">
          <h2 className="text-xl text-primary font-semibold text-center">
            Login Your Account
          </h2>
          <hr className="my-4 text-base-300" />
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* password  */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <button type="submit" className="btn btn-primary mt-4">
                Login
              </button>
              <p className="font-semibold text-center mt-2">
                Don’t Have An Account ?{" "}
                <Link to="/auth/register" className="text-secondary">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
