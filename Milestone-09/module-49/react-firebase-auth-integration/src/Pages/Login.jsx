import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
      <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Login now!</h1>
          <form>
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              {/* password field */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p>
            You have no account? Please <Link className="text-blue-400 hover:text-blue-500" to={"/register"}>
               Register
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;