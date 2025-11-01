import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Home from './Pages/Home.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    Component: Home
  },

  {
    path: '/about',
    Component: About
  },

  {
    path: '/contact',
    Component: Contact
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
