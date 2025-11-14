import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext/AuthContext";
// import { auth } from '../Firebase/firebase.init';
// import { createUserWithEmailAndPassword } from 'firebase/auth/web-extension';

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleRegister = (event) => {
  //     event.preventDefault();

  //     const name = event.target.name.value;
  //     const email = event.target.email.value;
  //     const password = event.target.password.value;

  //     console.log(name, email, password);

  //     createUserWithEmailAndPassword(auth, email, password)
  //         .then(result => {
  //             const user = result.user;
  //             console.log(user)
  //         })
  //         .catch(error => {
  //             console.log(error.message);
  //     })
  // }

  return (
    <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Register now!</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* name field */}
            <label className="label">Full Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
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
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>
          Already have an account? Please{" "}
          <Link className="text-blue-400 hover:text-blue-500" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
