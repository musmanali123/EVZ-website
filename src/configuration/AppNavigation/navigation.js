import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScreenOne from "../../Screens/ScreenOne";
import ScreenThree from "../../Screens/ScreenThree";
import ScreenTwo from "../../Screens/ScreenTwo";

export default function AppNavigation() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Three" element={<ScreenOne />} />

          <Route path="/Two" element={<ScreenTwo />} />

          <Route path="/" element={<ScreenThree />} />
        </Routes>
      </div>
    </Router>
  );
}
