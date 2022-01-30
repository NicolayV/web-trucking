import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import About from "../pages/About";
import Feedback from "../pages/Feedback";
import HowItWorks from "../pages/HowItWorks";
import Layout from "../pages/Layout";
import NewsArticle from "../pages/NewsArticle";
import PersonalArea from "../pages/PersonalArea";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Layout />
            <Outlet />
          </>
        }
      >
        <Route path="about" element={<About />} />
        <Route path="howitworks" element={<HowItWorks />} />
        <Route path="newsarticle" element={<NewsArticle />} />
        <Route path="personalarea" element={<PersonalArea />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
