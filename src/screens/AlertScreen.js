import React, { useState } from "react";
import { FaExclamationTriangle, FaPhone, FaSms, FaEnvelope, FaBan, FaCheckCircle } from "react-icons/fa";
import { detectFraud } from "../utils/fraudDetection";
import DummyAlerts from "../utils/dummyAlerts";

function AlertScreen() {
  const [alertIndex, setAlertIndex] = useState(0);
  const [action, setAction] = useState(null);

  const alert = DummyAlerts[alertIndex];
  const aiResult = detectFraud(alert);

  const handleNext = () => {
    setAlertIndex((prev) => (prev + 1) % DummyAlerts.length);
    setAction(null);
  };

  return (
    <div className="alert-screen">
      <h2>
        <FaExclamationTriangle style={{ color: "#f59e42", marginRight: 8 }} />
        Fraud Alert
      </h2>
      <div className="alert-card">
        <div className="alert-type">
          {alert.type === "call" && <FaPhone />}
          {alert.type === "sms" && <FaSms />}
          {alert.type === "email" && <FaEnvelope />}
          <span style={{ marginLeft: 8, textTransform: "capitalize" }}>{alert.type}</span>
        </div>
        <div className="alert-info">
          <strong>From:</strong> {alert.from}
        </div>
        <div className="alert-content">
          <strong>Message:</strong>
          <span dangerouslySetInnerHTML={{ __html: aiResult.highlighted }} />
        </div>
        <div className="ai-warning">
          <FaExclamationTriangle style={{ color: "#f87171", marginRight: 6 }} />
          <span>
            {aiResult.isFraud
              ? "⚠️ Suspicious language detected! Possible scam."
              : "No suspicious language detected."}
          </span>
        </div>
        <div className="alert-actions">
          <button
            className="block-btn"
            onClick={() => setAction("blocked")}
            disabled={action === "blocked"}
          >
            <FaBan /> Block
          </button>
          <button
            className="safe-btn"
            onClick={() => setAction("safe")}
            disabled={action === "safe"}
          >
            <FaCheckCircle /> Mark Safe
          </button>
          <button className="next-btn" onClick={handleNext}>
            Next Alert
          </button>
        </div>
        {action === "blocked" && (
          <div className="result-msg blocked">
            Number/Address Blocked!
          </div>
        )}
        {action === "safe" && (
          <div className="result-msg safe">
            Marked as Safe.
          </div>
        )}
      </div>
      <style>{`
        .alert-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(30,41,59,0.07);
          padding: 1.5rem;
          margin-top: 1rem;
        }
        .alert-type {
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          margin-bottom: 0.7rem;
          color: #2563eb;
        }
        .alert-info, .alert-content {
          margin-bottom: 0.6rem;
        }
        .alert-content span {
          display: block;
          margin-top: 0.3rem;
          background: #f1f5f9;
          padding: 0.5rem 0.7rem;
          border-radius: 6px;
          font-family: monospace;
        }
        .ai-warning {
          margin: 1rem 0;
          color: #f87171;
          font-weight: 500;
          display: flex;
          align-items: center;
        }
        .alert-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.7rem;
        }
        .block-btn, .safe-btn, .next-btn {
          padding: 0.5rem 1.2rem;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
        }
        .block-btn {
          background: #f87171;
          color: #fff;
        }
        .safe-btn {
          background: #38bdf8;
          color: #fff;
        }
        .next-btn {
          background: #f1f5f9;
          color: #222;
        }
        .block-btn:disabled, .safe-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .result-msg {
          margin-top: 0.8rem;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 500;
        }
        .result-msg.blocked {
          background: #fee2e2;
          color: #b91c1c;
        }
        .result-msg.safe {
          background: #d1fae5;
          color: #065f46;
        }
      `}</style>
    </div>
  );
}

export default AlertScreen;