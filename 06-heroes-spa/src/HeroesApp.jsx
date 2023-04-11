import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./ui/components/Navbar";

export const HeroesApp = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};