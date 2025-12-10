import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <div className="text-red-700">Home. this</div>;
};

export default Home;
