import React from "react"
import ReactDOM from "react-dom/client"

// Supports weights 100-900
import "@fontsource-variable/league-spartan"
import "./index.css"

import UnitConverter from "./pages/unit-converter"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UnitConverter />
  </React.StrictMode>
)
