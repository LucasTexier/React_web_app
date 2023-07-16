import React from 'react';
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';
import Home from "../pages/Home";
import Nopage from "../pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/*" element={<Nopage/>}/>
      </Routes>
    </BrowserRouter>
  );
}