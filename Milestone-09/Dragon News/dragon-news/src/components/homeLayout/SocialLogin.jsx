import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold">Login With</h2>
      <div className="mt-3 space-y-2">
        <button className="btn btn-outline btn-secondary w-full">
          <FcGoogle size={20} />
          Login With Google
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <FaGithub size={20} />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
