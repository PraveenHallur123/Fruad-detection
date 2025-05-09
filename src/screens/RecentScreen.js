import React from "react";
import { FaPhone, FaSms, FaEnvelope, FaDownload } from "react-icons/fa";
import DummyAlerts from "../utils/dummyAlerts";
import { detectFraud } from "../utils/fraudDetection";

function RecentScreen() {
  const handleDownload = () => {
    const csvRows = [
      "Type,From,Message,AI Warning",
      ...DummyAlerts.map((item) => {
        const ai = detectFraud(item);
        return [
          item.type,
          item.from,
          `"${item.content.replace(/"/g, '""')}"`,
          ai.isFraud ? "Suspicious" : "Safe"
        ].join(",");
      })
    ];
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "recent_activity.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h2>Recent Activity</h2>
      <button className="download-btn" onClick={handleDownload}>
        <FaDownload /> Download CSV
      </button>
      <div className="recent-list">
        {DummyAlerts.map((item, idx) => {
          const ai = detectFraud(item);
          return (
            <div className={`recent-card ${ai.isFraud ? "fraud" : ""}`} key={idx}>
              <div className="recent-type">
                {item.type === "call" && <FaPhone />}
                {item.type === "sms" && <FaSms />}
                {item.type === "email" && <FaEnvelope />}
                <span style={{ marginLeft: 8, textTransform: "capitalize" }}>{item.type}</span>
              </div>
              <div className="recent-from">
                <strong>From:</strong> {item.from}
              </div>
              <div className="recent-content" dangerouslySetInnerHTML={{ __html: ai.highlighted }} />
              <div className="recent-ai">
                {ai.isFraud ? (
                  <span className="fraud-label">⚠️ Suspicious</span>
                ) : (
                  <span className="safe-label">Safe</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        .download-btn {
          background: #38bdf8;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 0.5rem 1.2rem;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .recent-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .recent-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 4px rgba(30,41,59,0.06);
          padding: 1rem;
        }
        .recent-card.fraud {
          border-left: 5px solid #f87171;
        }
        .recent-type {
          font-size: 1rem;
          display: flex;
          align-items: center;
          color: #2563eb;
          margin-bottom: 0.5rem;
        }
        .recent-from {
          margin-bottom: 0.4rem;
        }
        .recent-content {
          background: #f1f5f9;
          padding: 0.4rem 0.7rem;
          border-radius: 5px;
          font-family: monospace;
          margin-bottom: 0.5rem;
        }
        .recent-ai {
          font-size: 0.98rem;
          font-weight: 500;
        }
        .fraud-label {
          color: #f87171;
        }
        .safe-label {
          color: #22c55e;
        }
      `}</style>
    </div>
  );
}

export default RecentScreen;