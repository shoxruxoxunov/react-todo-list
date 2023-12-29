import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <Navbar />
      <main className=" container grow">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default RootLayout;
