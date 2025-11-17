import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return (
      <div className="text-4xl text-accent font-semibold flex justify-center items-center h-screen">
        <h2>Loading....</h2>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRoute;
