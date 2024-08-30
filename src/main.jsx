import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DarkModeContextProvider from "./context/darkModeContext.jsx";
import "./style.css";
import HomePages from "./pages/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContextProvider>
      <RouterProvider router={router} />
    </DarkModeContextProvider>
  </StrictMode>
);
