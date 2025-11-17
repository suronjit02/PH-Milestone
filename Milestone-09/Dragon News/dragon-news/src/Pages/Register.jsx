import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const [emailError, setEmailError] = useState();

    const form = e.target;
    // const name = form.name.value;
    // const photoUrl = form.photoUrl.value;

    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoUrl, email, password);

    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        alert(error.message);
      });
    // console.log(user);
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 py-6 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body py-5">
          <h2 className="text-xl text-primary font-semibold text-center">
            Register Your Account
          </h2>
          <hr className="my-4 text-base-300" />
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Your Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter your Name"
                required
              />

              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoUrl"
                className="input"
                placeholder="Photo URL"
              />

              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <label className="label">
                <input type="checkbox" required className="checkbox" />
                Accept Term & Conditions
              </label>

              <button type="submit" className="btn btn-primary mt-4">
                Register
              </button>
              <p className="font-semibold text-center mt-2">
                Already Have An Account ?{" "}
                <Link to="/auth/login" className="text-secondary">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
