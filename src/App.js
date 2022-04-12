import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Threshold from "./thresholdchange";
import LoginPage from "./loginpage";
import { AnimatePresence } from "framer-motion";

const MyRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/thresholdchange" element={<Threshold />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
