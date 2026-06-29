import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../pages/Footer";

function MainLayout() {
  return (
    <>
      <Navigation />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
