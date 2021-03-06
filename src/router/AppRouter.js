import { Grid } from "@mui/material";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import About from "../pages/About";
import Feedback from "../pages/Feedback";
import HowItWorks from "../pages/HowItWorks";
import Layout from "../pages/Layout";
import NewsArticle from "../pages/NewsArticle";
import PersonalArea from "../pages/PersonalArea";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import SignUpCarrier from "../pages/SignUpCarrier";
import SignUpCustomer from "../pages/SignUpCustomer";

const routeItems = [
  { id: 0, path: "about", element: <About /> },
  { id: 1, path: "howitworks", element: <HowItWorks /> },
  { id: 2, path: "newsarticle", element: <NewsArticle /> },
  { id: 3, path: "personalarea", element: <PersonalArea /> },
  { id: 4, path: "feedback", element: <Feedback /> },
  { id: 5, path: "signin", element: <SignIn /> },
  { id: 6, path: "signup", element: <SignUp /> },
  { id: 7, path: "signup/customer", element: <SignUpCustomer /> },
  { id: 8, path: "signup/carrier", element: <SignUpCarrier /> },
];

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Layout />
            <Grid container>
              <Outlet />
            </Grid>
          </>
        }
      >
        {routeItems.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
