import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { EventSourceProvider } from "./components/eventSourceContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <EventSourceProvider>
        <App />
      </EventSourceProvider>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
