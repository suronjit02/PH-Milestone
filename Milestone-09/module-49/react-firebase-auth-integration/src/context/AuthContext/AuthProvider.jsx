import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    // set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user in auth state change", currentUser);

      setUser(currentUser);
    });

    // clear the observer on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // get current user info
  // onAuthStateChanged(auth, (currentUser) => {
  //     if(currentUser){
  //         console.log('inside observer if: ', currentUser);
  //     }
  //     else console.log("inside observer else: ", currentUser);
  // })

  const authInfo = {
    user,
    createUser,
    signInUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
