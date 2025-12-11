import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  Home,
  Users,
  Folder,
  Settings,
  LogOut,
  BarChart2,
  Search,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Aside({ onLogout, counts = {} }) {
  const [collapsed, setCollapsed] = useState(false);
  const [q, setQ] = useState("");
  const location = useLocation();

  const nav = [
    { to: "/admin", label: "Dashboard", icon: <Home size={16} /> },
    {
      to: "/admin/users",
      label: "Users",
      icon: <Users size={16} />,
      badge: counts.users,
    },
    {
      to: "/admin/reports",
      label: "Reports",
      icon: <BarChart2 size={16} />,
      badge: counts.reports,
    },
    {
      to: "/admin/content",
      label: "Content",
      icon: <Folder size={16} />,
      badge: counts.content,
    },
    { to: "/admin/settings", label: "Settings", icon: <Settings size={16} /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`bg-white/60 backdrop-blur-md border-r border-gray-200 h-screen transition-all duration-200 flex flex-col 
        ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* top */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCollapsed((s) => !s)}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle sidebar"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
          {!collapsed && (
            <div>
              <h3 className="text-lg font-semibold">Manager</h3>
              <p className="text-xs text-gray-500">Control panel</p>
            </div>
          )}
        </div>
        {!collapsed && (
          <button
            onClick={onLogout}
            className="text-sm px-3 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 hidden sm:inline-flex"
          >
            <LogOut size={14} className="mr-2" /> Logout
          </button>
        )}
      </div>

      {/* search */}
      <div className={`px-3 ${collapsed ? "hidden" : ""}`}>
        <div className="relative">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-sky-300"
          />
          <Search className="absolute left-2 top-2 text-gray-400" size={16} />
        </div>
      </div>

      {/* nav */}
      <nav className="flex-1 overflow-auto mt-4 px-1">
        <ul className="flex flex-col gap-1">
          {nav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2 rounded-md mx-2 hover:bg-sky-50 transition-colors 
                  ${
                    isActive(item.to)
                      ? "bg-sky-100 text-sky-700 font-medium"
                      : "text-gray-700"
                  }`}
              >
                <span className="flex-none">{item.icon}</span>
                {!collapsed && <span className="flex-1">{item.label}</span>}
                {!collapsed && item.badge ? (
                  <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>  
      </nav>

      {/* bottom */}
      <div className="px-3 py-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 flex items-center justify-center text-white font-bold">
            A
          </div>
          {!collapsed && (
            <div className="flex-1">
              <div className="text-sm font-semibold">Manager Name</div>
              <div className="text-xs text-gray-500">admin@example.com</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
