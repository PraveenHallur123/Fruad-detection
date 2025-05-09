import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AlertScreen from "./screens/AlertScreen";
import RecentScreen from "./screens/RecentScreen";
import { FaShieldAlt } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <FaShieldAlt className="logo-icon" />
          <span className="logo-text">Fraud Detection App</span>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/alerts">Alerts</Link>
            <Link to="/recent">Recent</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/alerts" element={<AlertScreen />} />
            <Route path="/recent" element={<RecentScreen />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <span> Fraud Detection App &copy; 2025 | 
  Developed by <a href="https://github.com/PraveenHallur123" target="_blank">Praveen Hallur</a> | 
  Company: <a href="https://miniprojectbytes.blogspot.com" target="_blank">Mini Project Bytes</a>
</span>

        </footer>
      </div>
    </Router>
  );
}

export default App;
