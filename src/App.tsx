import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    const existingWidth = localStorage.getItem("sideBarWidth");
    if (!existingWidth) {
      localStorage.setItem("sideBarWidth", "270");
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Layout route with sidebar + navbar */}
        <Route path="/" element={<Home />} />
        {/* Experience pages render inside the same layout */}
        <Route path="/experiences/:slug" element={<Home />} />
        {/* Projects pages render inside the same layout */}
        <Route path="/projects/:slug" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
