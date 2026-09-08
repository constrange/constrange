import { StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "@/AppRoutes"

const root = document.getElementById("root")
if (root) {
  hydrateRoot(
    root,
    <StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </StrictMode>,
  )
}
