import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Mmaindashboard from "../pages/dashboard/maindashboard/Mmaindashboard";
import AddRequest from "../pages/dashboard/add-request/AddRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Mmaindashboard />,
      },
      {
        path: "/dashboard/add-request",
        element: <AddRequest />,
      },
    ],
  },
]);

export default router;
