import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="d-flex gap-3">
      <Link to={"/"}>Home</Link>
      <Link to={"about"}>About</Link>
      <Link to={"login"}>Login</Link>
    </div>
  );
};
