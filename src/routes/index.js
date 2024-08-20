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
import Vertical from "pages/Vertical";
import Quiz from "pages/Quiz";
import Config from "pages/Config";
import DomainSetting from "pages/DomainSetting";
import AddDomain from "pages/DomainSetting/AddDomain";
import User from "pages/User";
import Role from "pages/Role";
import AddUser from "pages/User/AddUser";
import AddVertical from "pages/Vertical/AddVertical";
import AddQuiz from "pages/Quiz/AddQuiz";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/site", component: <Site /> },
  { path: "/vertical", component: <Vertical /> },
  { path: "/vertical/add-vertical", component: <AddVertical /> },
  { path: "/quiz", component: <Quiz /> },
  { path: "/quiz/add-quiz", component: <AddQuiz /> },
  { path: "/config", component: <Config /> },
  { path: "/domain-setting", component: <DomainSetting /> },
  { path: "/domain-setting/add-domain", component: <AddDomain /> },
  { path: "/user", component: <User /> },
  { path: "/user/add-user", component: <AddUser /> },
  { path: "/role", component: <Role /> },
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
