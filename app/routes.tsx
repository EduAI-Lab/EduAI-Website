import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/page";
import TeamPage from "./routes/team";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/services",
    element: <div>Services Page</div>, // Placeholder - you'll need to create this page
  },
  {
    path: "/about",
    element: <div>About Page</div>, // Placeholder - you'll need to create this page
  },
  {
    path: "/login",
    element: <div>Login Page</div>, // Placeholder - you'll need to create this page
  },
  {
    path: "/register",
    element: <div>Register Page</div>, // Placeholder - you'll need to create this page
  },
  {
    path: "/research",
    element: <div>Research Page</div>, // Placeholder - you'll need to create this page
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
]); 