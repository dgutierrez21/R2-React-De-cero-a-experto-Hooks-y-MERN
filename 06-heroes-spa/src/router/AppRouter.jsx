import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { LoginPage } from "../auth/pages";
import { HeroesApp } from "../HeroesApp";
import { DCPage, MarvelPage } from "../heroes/pages";

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
