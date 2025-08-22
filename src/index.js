import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App";
import Blog from "./Pages/Blog/index.js";
import Nav from "./Nav";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>
);
