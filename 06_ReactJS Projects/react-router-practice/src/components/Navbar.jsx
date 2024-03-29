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
import Careers, { carrersLoader } from "../pages/Careers";
import CareerDetails, { carrerDetailsLoader } from "../pages/CareerDetails";
import CareersError from "./CareersError";

// layouts
import RootLayout from "../Layouts/RootLayout";
import HelpLayout from "../Layouts/HelpLayout";
import Faq from "../pages/Faq";
import ContactUs from "../pages/ContactUs";
import Error404 from "./Error404";
import Home from "../pages/Home";
import CareersLayout from "../Layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error404 />}>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError/>} >
        <Route index element={<Careers />}  loader={carrersLoader}  />
        <Route path=":id" element={<CareerDetails />} loader={carrerDetailsLoader}  />
      </Route>

      {/* <Route path="*" element={<Error404 />} /> */}
    </Route>
  )
);

export default function Navbar({ children }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
