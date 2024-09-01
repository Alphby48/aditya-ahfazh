import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DarkModeContextProvider from "./context/darkModeContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./style.css";
import HomePages from "./pages/home.jsx";
import WebDevSkillPage from "./pages/webdevskill.jsx";
import NotFoundPage from "./pages/notFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "/skills/web-developer",
    element: <WebDevSkillPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </DarkModeContextProvider>
  </StrictMode>
);
