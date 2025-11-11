import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const Login = () => {

  const handleGoogleSignIn = () => {
      // console.log("button clicked.");
      
      signInWithPopup(auth, googleProvider)
      .then(result => {
          
          console.log(result.user);
          
      })
          .catch(error => {
              console.log(error);
      })

    };
    

  return (
    <div>
      <h2>Please Login</h2>

      <button onClick={handleGoogleSignIn}>Sign In With Google</button>
    </div>
  );
};

export default Login;
