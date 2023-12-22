import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout/AppLayout";
import MainPage from "./pages/MainPage/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.scss";

const Router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <MainPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppLayout>
    <RouterProvider router={Router} />
  </AppLayout>
);
