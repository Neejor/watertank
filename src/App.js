import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Threshold from "./thresholdchange";
import LoginPage from "./loginpage";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/thresholdchange" element={<Threshold />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
