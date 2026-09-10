import { useState } from "react";
import { kycQueue as initialQueue } from "../../data/mockData";
import { IconKyc } from "../../components/Icons";
import Badge from "../../components/Badge";

export default function KycVerification() {
  const [queue, setQueue] = useState(initialQueue);

  const decide = (id, status) => setQueue((prev) => prev.map((k) => (k.id === id ? { ...k, status } : k)));

  return (
    <div>
      <h1>
        <IconKyc /> KYC वेरिफिकेशन
      </h1>
      <p className="page-lead">सेलर/एजेंट डॉक्यूमेंट वेरिफिकेशन अप्रूव या रिजेक्ट करें</p>

      <div className="panel">
        {queue.map((k) => (
          <div key={k.id} className="kyc-card">
            <div className="kyc-main">
              <strong>{k.name}</strong>
              <span>
                {k.role} · {k.docType} · सबमिटेड: {k.submittedOn}
              </span>
            </div>
            {k.status === "pending" ? (
              <div className="kyc-actions">
                <button className="approve" onClick={() => decide(k.id, "verified")} type="button">
                  अप्रूव करें
                </button>
                <button className="reject" onClick={() => decide(k.id, "rejected")} type="button">
                  रिजेक्ट करें
                </button>
              </div>
            ) : (
              <Badge status={k.status}>{k.status === "verified" ? "वेरिफाइड" : "रिजेक्टेड"}</Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
