import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHooks } from "./01-useState/CounterWithCustomHooks";
import { FormWithCustomHooks } from "./02-useEffect/FormWithCustomHooks";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { CallbackHooks } from "./05-useLayoutEffect/06-memos/CallbackHooks";
import { MemoHook } from "./05-useLayoutEffect/06-memos/MemoHook";
import { Memorize } from "./05-useLayoutEffect/06-memos/Memorize";
import { Layout } from "./05-useLayoutEffect/Layout";

export const HooksApp = () => {
  return (
    <>
      <CallbackHooks />
    </>
  );
};
