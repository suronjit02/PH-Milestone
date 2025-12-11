import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const role = event.target.role.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photoUrl = event.target.photoUrl;
    const file = photoUrl.files[0];

    console.log(role);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters"
      );
      return;
    }

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?expiration=600&key=96c9ca8c8f54ca0770ab6f539a3b5d5a`,
      { image: file },

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const mainPhotoUrl = res.data.data.display_url;

    const formData = {
      name,
      email,
      password,
      mainPhotoUrl,
      role,
    };

    if (res.data.success == true) {
      createUser(email, password, name, mainPhotoUrl)
        .then(() => {
          axios
            .post("http://localhost:5000/users", formData)
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });

          navigate(`${location.state ? location.state.from : "/"}`);
        })
        .catch((error) => {
          setError(error.code);
        });
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(`${location.state ? location.state.from : "/"}`);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div
      data-aos="fade-down-left"
      className="w-full min-h-screen py-10 flex items-center justify-center px-4"
    >
      <form
        onSubmit={handleSignUp}
        className="w-full sm:max-w-md bg-white/30 backdrop-blur-md border border-white/30 rounded-md shadow-md p-6 sm:p-8"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-sky-900 mb-6">
          Please Sign Up
        </h2>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Name</label>
            <input
              //   required
              type="text"
              name="name"
              placeholder="Write your name here"
              className="input input-bordered focus:outline-none w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Photo Url</label>
            <input
              type="file"
              name="photoUrl"
              placeholder="Photo Url"
              className="input input-bordered focus:outline-none w-full font-semibold cursor-pointer"
            />
          </div>

          <label className="font-semibold">Your Role</label>
          <select
            required
            name="role"
            defaultValue="Chose Role"
            className="select w-full"
          >
            <option disabled={true}>Chose Role</option>
            <option value="manager">Manager</option>
            <option value="buyer">Buyer</option>
          </select>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input
              //   required
              type="email"
              name="email"
              placeholder="Email here"
              className="input input-bordered focus:outline-none w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Password</label>
            <div className="relative">
              <input
                // required
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password here"
                className="input input-bordered focus:outline-none w-full pr-10"
                onChange={() => setError("")}
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 z-50"
              >
                {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
          </div>
        </div>

        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

        <button className="btn border-none mt-6 w-full bg-sky-600 hover:bg-sky-700 text-white transition">
          Sign Up
        </button>

        <p className="my-1 text-center text-sm">or</p>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn w-full bg-white text-black border-[#e5e5e5] py-2 flex items-center justify-center gap-2"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="mt-6 sm:mt-10 text-center text-sm">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="hover:underline text-sky-900 font-bold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
