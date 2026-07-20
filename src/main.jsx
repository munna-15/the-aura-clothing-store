import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import ProductContextProvider from "./context/ProductContextProvider.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";


createRoot(document.getElementById("root")).render(

  <StrictMode>

    <BrowserRouter>

      <AuthContextProvider>

        <ProductContextProvider>

          <App />

        </ProductContextProvider>

      </AuthContextProvider>

    </BrowserRouter>

  </StrictMode>

);