import React from "react";
import { Outlet } from "react-router";

import Footer from "../../sharedComponents/footer/Footer";
import Navbar from "../../sharedComponents/navbar/Navbar";
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
