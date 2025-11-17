import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    // console.log('logout');
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="left-div">{user && user.email}</div>
      <div className="flex gap-5 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className=" flex gap-3">
        <img src={userIcon} alt="user" />

        {user ? (
          <Link onClick={handleLogout} className="btn btn-primary px-5">
            Logout
          </Link>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-5">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
