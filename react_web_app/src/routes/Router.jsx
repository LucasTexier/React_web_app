import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Nopage from "../components/pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}
