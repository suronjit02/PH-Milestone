import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    // console.log("button clicked.");

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);

        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // console.log("signout");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Login Page</h2>

      {/* <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}

      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      )}

      {user && (
        <div>
          <h2>{user.displayName}</h2>
          <h3>{user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}

      {/* <img src={user?.photoURL} alt="User" /> */}
    </div>
  );
};

export default Login;
