import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Threshold from "./thresholdchange";
import LoginPage from "./loginpage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/thresholdchange" element={<Threshold />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
