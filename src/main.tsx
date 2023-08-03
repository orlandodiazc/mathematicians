import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Supports weights 100-900
import "@fontsource-variable/league-spartan"
import "./index.css"

import Calculator from "./pages/calculator"
import Root from "./pages/root"
import UnitConverter from "./pages/unit-converter"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Calculator />,
      },
      {
        path: "/converter",
        element: <UnitConverter />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
