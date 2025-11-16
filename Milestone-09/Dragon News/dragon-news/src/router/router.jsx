import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <h1>authentication layout</h1>,
  },
  {
    path: "/news",
    element: <h1>news layout</h1>,
  },
  {
    path: "/*",
    element: <h1>error layout</h1>,
  },
]);

export default router;
