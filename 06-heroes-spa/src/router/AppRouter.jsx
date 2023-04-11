import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DCPage } from "../heroes/pages/DCPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesApp } from "../HeroesApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="marvel" />,
  },
  {
    path: "/",
    element: <HeroesApp />,
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DCPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
