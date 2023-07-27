import React from "react"
import ReactDOM from "react-dom/client"

// Supports weights 100-900
import "@fontsource-variable/league-spartan"
import "./index.css"

import Calculator from "./pages/calculator"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
)
