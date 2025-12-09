import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch(() => {});
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-2 sm:px-20 sticky top-0 z-99">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {user ? (
              <>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/all-vehicles"}>All Vehicles</NavLink>
                </li>
                <li>
                  <NavLink to={"/add-vehicle"}>Add Vehicle</NavLink>
                </li>
                <li>
                  <NavLink to={"/my-vehicles"}>My Vehicles</NavLink>
                </li>
                <li>
                  <NavLink to={"/my-bookings"}>My Bookings</NavLink>
                </li>
                <li>
                  <Link
                    to={"/"}
                    onClick={handleLogOut}
                    className="sm:flex items-center justify-center font-bold "
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/signin"}>Sign In</NavLink>
                </li>
                <li>
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        <Link
          to={"/"}
          className="font-extrabold text-2xl text-sky-900 cursor-pointer hidden sm:inline-block"
        >
          TravelEase
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 text-sm">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/all-vehicles"}>All Vehicles</NavLink>
          </li>
          <li>
            <NavLink to={"/add-vehicle"}>Add Vehicle</NavLink>
          </li>
          <li>
            <NavLink to={"/my-vehicles"}>My Vehicles</NavLink>
          </li>
          <li>
            <NavLink to={"/my-bookings"}>My Bookings</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5 font-semibold">
        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="m-1">
                    {user?.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="profile"
                        className="w-10 h-10 rounded-full object-cover cursor-pointer"
                      />
                    ) : (
                      <HiOutlineUserCircle className="text-3xl text-gray-700 cursor-pointer" />
                    )}
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content  bg-base-100 rounded-md z-1 min-w-55 p-2 shadow-sm"
                  >
                    <div className="text-sm mt-4">
                      <li>Name: {user.displayName}</li>
                      <li>Email: {user.email}</li>
                    </div>
                    <hr className="my-3" />
                    <li>
                      <Link
                        to={"/"}
                        onClick={handleLogOut}
                        className="sm:flex items-center justify-center font-bold "
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <Link to={"/login"} className="hidden sm:inline-block">
              Login
            </Link>
            <Link to={"/register"} className="hidden sm:inline-block">
              Register
            </Link>

            <h3 className="font-extrabold text-2xl text-sky-900 cursor-pointer inline-block sm:hidden">
              TravelEase
            </h3>
          </div>
        )}

        <label className="toggle text-base-content">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark"}
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
