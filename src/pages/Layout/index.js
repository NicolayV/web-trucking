import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/UI/Header/index.js";
import Navbar from "../../components/UI/Navbar/index.js";

const Layout = () => {
  const [title, setTitle] = useState(null);
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      <Header title={title} />
      <Navbar />
    </>
  );
};

export default Layout;
