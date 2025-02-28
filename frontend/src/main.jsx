import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../app/LandingPage/Layout/Layout.jsx";
import Home from "../app/LandingPage/pages/Home.jsx";
import ContactUs from "../app/LandingPage/pages/ContactUs.jsx";
import Login from "../app/Login/Login.jsx";
import LandingPage from "../app/LandingPage/pages/landingPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/#" element={<Login />} />
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/" element={<LandingPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
