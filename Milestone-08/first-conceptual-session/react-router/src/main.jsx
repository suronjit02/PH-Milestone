import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Home from './Pages/Home.jsx';
import RootLayout from './Layouts/RootLayout.jsx';
import PlantDetails from './Pages/PlantDetails.jsx';
import Loading from './Components/Loading.jsx';

const router = createBrowserRouter([

  {
    path: '/',
    Component: RootLayout,
    hydrateFallbackElement: <Loading/>,
    children: [

      {
        path: '/',
        Component: Home,
        loader: () => fetch('https://openapi.programming-hero.com/api/plants'),
      },
      {
        path: "/home",
        Component: Home
      },

      {
        path: '/about',
        Component: About,

      },

      {
        path: '/contact',
        Component: Contact
      },
      {
        path: '/plant-details/:id',
        Component: PlantDetails,
      },

    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
