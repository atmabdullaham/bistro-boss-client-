import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import AuthProver from "./providers/AuthProver";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProver>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProver>
  </StrictMode>
);
