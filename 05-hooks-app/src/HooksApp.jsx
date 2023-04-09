import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHooks } from "./01-useState/CounterWithCustomHooks";
import { FormWithCustomHooks } from "./02-useEffect/FormWithCustomHooks";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { CallbackHooks } from "./06-memos/CallbackHooks";
import { MemoHook } from "./06-memos/MemoHook";
import { Memorize } from "./06-memos/Memorize";
import { Layout } from "./05-useLayoutEffect/Layout";
import { Padre } from "./07-tarea-memo/Padre";

import "./08-useReducer/intro-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";
import { Ejemplo2useReducer } from "./08-useReducer/ejemplo2/Ejemplo2useReducer";

import { MainApp } from "./09-useContext/mainApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
  },
]);

export const HooksApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
