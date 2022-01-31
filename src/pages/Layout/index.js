import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/UI/Header/index.js";
import Navbar from "../../components/UI/Navbar/index.js";
import { navbarListItems } from "../../components/UI/Navbar/consts/navbarListItems";

const Layout = () => {
  const [title, setTitle] = useState(null);
  const location = useLocation();

  const itemTitle = (arr, location) => {
    let result = {};
    if (location.pathname !== "/") {
      const title = location.pathname.replace(/\W/g, "");
      arr.forEach((element) => {
        if (title === element.route) {
          result = element.label;
        }
      });
    } else {
      result = "/";
    }
    return result;
  };

  useEffect(() => {
    setTitle(itemTitle(navbarListItems, location));
  }, [location]);

  return (
    <>
      <Navbar />
      <Header title={title} />
    </>
  );
};

export default Layout;
