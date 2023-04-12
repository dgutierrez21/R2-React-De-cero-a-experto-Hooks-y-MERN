import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { LoginPage } from "../auth/pages";
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../heroes/pages";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="marvel" />,
  },
  {
    path: "/",
    element: <HeroesRoutes />,
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
        path: "hero/:heroId",
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
