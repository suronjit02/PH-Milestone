import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/Layouts/RootLayout.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import AuthProvider from "./context/AuthContext/AuthProvider.jsx";
import Orders from "./Pages/Orders.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import Profile from "./Profile/Profile.jsx";
import Dashboard from "./components/DashBoard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/orders",
        element: <PrivateRoutes>
          <Orders></Orders>
        </PrivateRoutes>
      },
      {
        path: "/profile",
        element: <PrivateRoutes>
          <Profile></Profile>
        </PrivateRoutes>
      },
      {
        path: "/dashboard",
        element: <PrivateRoutes>
          <Dashboard></Dashboard>
        </PrivateRoutes>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} > </RouterProvider>
    </AuthProvider>
  </StrictMode>
);
