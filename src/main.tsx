import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "effector-react";
import { scope } from "./stores/list.ts";

createRoot(document.getElementById("root")!).render(
  <Provider value={scope}>
    <App />
  </Provider>
);
