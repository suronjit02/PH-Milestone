import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
// import { auth } from "../firebase/firebase.init";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    const name = event.target.name.value;
    const photo = event.target.photoURL.value;

    console.log(email, password, terms, name, photo);

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
      return;
    }

    // reset
    setError("");
    setSuccess(false);

    if (!terms) {
      setError("Please accept our terms and condition.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        setSuccess(true);

        //   profile update
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(result.user, profile)
          .then(() => {})
          .catch();

        //   send email verification
        sendEmailVerification(result.user).then(() => {
          alert("Email verification sent!");
        });

        event.target.reset();
      })
      .catch((error) => {
        console.log("Error Happened: ", error.message);

        setError(error.message);
      });
  };

  const handleShowPassword = (event) => {
    event.preventDefault();

    setPassword(!showPassword);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* Name here */}
                <label className="label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Full Name"
                />
                {/* email here */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                {/* photo url here */}
                <label className="label">Photo Url</label>
                <input
                  type="text"
                  name="photoURL"
                  className="input"
                  placeholder="Photo Url"
                />
                <label className="label">Password</label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    onClick={handleShowPassword}
                    className="btn btn-xs absolute top-2 right-6"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                  <div>
                    <label className="label mt-2">
                      <input
                        type="checkbox"
                        name="terms"
                        className="checkbox"
                      />
                      Accept Our Terms & Condition.
                    </label>
                  </div>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              {success && (
                <p className="text-green-500">Account Created Succesfuly</p>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </form>

            <p>
              Already have an account? Please{" "}
              <Link className="text-blue-400 underline" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
