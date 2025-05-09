/**
 * Simulate AI fraud detection using keyword analysis.
 * Returns { isFraud: boolean, highlighted: string }
 */
const FRAUD_KEYWORDS = [
  "otp", "bank", "urgent", "password", "account", "verify", "click", "link",
  "payment", "suspend", "blocked", "security", "refund", "transfer", "prize"
];

export function detectFraud(alert) {
  let isFraud = false;
  let highlighted = alert.content;

  FRAUD_KEYWORDS.forEach((kw) => {
    const regex = new RegExp(`\\b(${kw})\\b`, "gi");
    if (regex.test(alert.content)) {
      isFraud = true;
      highlighted = highlighted.replace(
        regex,
        '<span style="background:#fee2e2;color:#b91c1c;font-weight:bold;">$1</span>'
      );
    }
  });

  return { isFraud, highlighted };
}