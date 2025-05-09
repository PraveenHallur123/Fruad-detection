import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaBell, FaHistory } from "react-icons/fa";

function HomeScreen() {
  return (
    <div className="home-screen">
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <FaShieldAlt style={{ fontSize: 64, color: "#38bdf8" }} />
        <h1>Welcome to Fraud Detection App</h1>
        <p>
          Stay protected from scam calls, SMS, and emails.<br />
          Our AI-powered system alerts you in real-time!
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <Link to="/alerts" className="nav-card">
          <FaBell size={32} />
          <span>View Alerts</span>
        </Link>
        <Link to="/recent" className="nav-card">
          <FaHistory size={32} />
          <span>Recent Activity</span>
        </Link>
      </div>
      <style>{`
        .nav-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(30,41,59,0.07);
          padding: 1.5rem 2rem;
          text-decoration: none;
          color: #1e293b;
          font-weight: 500;
          transition: box-shadow 0.2s, background 0.2s;
        }
        .nav-card:hover {
          background: #e0f2fe;
          box-shadow: 0 4px 16px rgba(56,189,248,0.15);
        }
      `}</style>
    </div>
  );
}

export default HomeScreen;