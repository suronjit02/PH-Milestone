import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { app } from "../firebase/firebase.init";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("");

  const createUser = (email, password, name, photoURL) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        return updateProfile(res.user, { displayName: name, photoURL }).then(
          () => {
            setUser({ ...res.user });
            return res;
          }
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() =>
      setLoading(false)
    );
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setLoading(false)
    );
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);

      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    axios.get(`http://localhost:5000/users/role/${user.email}`).then((res) => {
      // console.log(res.data.role);

      setRole(res.data.role);
    });
  }, [user]);

  // console.log(role);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        createUser,
        logIn,
        googleLogin,
        logOut,
        resetPassword,
        role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
