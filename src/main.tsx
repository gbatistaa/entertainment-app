import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { register } from "swiper/element/bundle";
import App from "./App.tsx";
import "./index.css";
register();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
