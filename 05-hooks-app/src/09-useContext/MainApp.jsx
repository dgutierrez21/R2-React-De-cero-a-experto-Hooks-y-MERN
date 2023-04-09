import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export const MainApp = () => {
  return (
    <>
      <h1>MaiApp</h1>
      <NavBar />
      <hr />

      <Outlet />
    </>
  );
};
