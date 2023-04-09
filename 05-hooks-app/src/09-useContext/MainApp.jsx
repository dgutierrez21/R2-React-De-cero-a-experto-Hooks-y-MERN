import { Outlet } from "react-router-dom";

export const MainApp = () => {
  return (
    <>
      <h1>MaiApp</h1>
      <hr />

      <Outlet />
    </>
  );
};
