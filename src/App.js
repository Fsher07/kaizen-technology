import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import PromotionDetail from "./pages/PromotionDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign/:seoname/:id" element={<PromotionDetail />} />
      </Routes>
    </div>
  );
}

export default App;
