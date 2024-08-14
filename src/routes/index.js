import React from "react";
import { Navigate } from "react-router-dom";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import Site from "pages/Site";
import Domain from "pages/Domain";
import Quiz from "pages/Quiz";
import Config from "pages/Config";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/site", component: <Site /> },
  { path: "/domain", component: <Domain /> },
  { path: "/quiz", component: <Quiz /> },
  { path: "/config", component: <Config /> },
  // //profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/Site" />,
  },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
