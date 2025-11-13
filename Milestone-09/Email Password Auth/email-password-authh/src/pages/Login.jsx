import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.init";

const Login = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    //   console.log("click", email, password);

    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        if (!result.user.emailVerified) {
          alert("Please verified your email.");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleForgotPassword = () => {
    console.log("forgot password", emailRef.current.value);
    const email = emailRef.current.value;
      sendPasswordResetEmail(auth, email)
          .then(() => {
          alert('Please check yor email for reset password.')
          })
      
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <fieldset className="fieldset m-auto mt-20 bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input
            type="email"
            ref={emailRef}
            className="input"
            name="email"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
          />
          <div onClick={handleForgotPassword}>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <p className="text-center">
        You have account? Please{" "}
        <Link className="text-blue-400 underline" to={"/register"}>
          Register
        </Link>
      </p>
    </>
  );
};

export default Login;
