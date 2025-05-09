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
          <span>Hackathon Demo &copy; 2024</span>
        </footer>
      </div>
    </Router>
  );
}

export default App;