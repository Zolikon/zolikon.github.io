import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import "./styles.css";
import GitAlias from "./gitalias/GitAlias.jsx";
import Home from "./Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="gitalias" element={<GitAlias />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
