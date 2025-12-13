import React from "react";
import { NavLink } from "react-router";
import { LayoutDashboard, PlusCircle, LogOut } from "lucide-react";

const Aside = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-8">Dashboard</h2>

      <nav className="space-y-3">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive ? "bg-gray-700" : "hover:bg-gray-800"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/add-request"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive ? "bg-gray-700" : "hover:bg-gray-800"
            }`
          }
        >
          <PlusCircle size={18} />
          Add Request
        </NavLink>

        <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 w-full text-left">
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Aside;
