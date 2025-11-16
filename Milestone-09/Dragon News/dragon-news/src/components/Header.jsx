import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-5">
      <img className="max-w-[470px]" src={logo} alt="" />
      <p className="text-accent my-2">Journalism Without Fear or Favour</p>

      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
