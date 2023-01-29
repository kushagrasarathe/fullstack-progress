import React from "react";

// react-router-dom 
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";

// layouts
import RootLayout from "../Layouts/RootLayout";
import HelpLayout from "../Layouts/HelpLayout";
import Faq from "../pages/Faq";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout/> }>
        <Route path="faq" element={<Faq/>} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Route>
  )
);

export default function Navbar( {children}) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
