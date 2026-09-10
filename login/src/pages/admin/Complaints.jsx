import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../../components/Badge";
import { complaints as initialComplaints, properties } from "../../data/mockData";
import { IconFlag, IconCheck } from "../../components/Icons";

export default function Complaints() {
  const [complaints, setComplaints] = useState(initialComplaints);

  const resolve = (id) => setComplaints((prev) => prev.map((c) => (c.id === id ? { ...c, status: "resolved" } : c)));

  return (
    <div>
      <h1>
        <IconFlag /> रिपोर्ट्स / कंप्लेंट्स
      </h1>
      <p className="page-lead">फेक/गलत लिस्टिंग की शिकायतें रिव्यू करें</p>

      <div className="panel">
        {complaints.map((c) => {
          const p = properties.find((pp) => pp.id === c.propertyId);
          return (
            <div key={c.id} className="lead-item">
              <div className="lead-main">
                <h4>
                  <Link to={`/property/${c.propertyId}`}>{p?.title}</Link>
                </h4>
                <p>{c.reason}</p>
                <p className="lead-meta">
                  रिपोर्ट किया: {c.reportedBy} · {c.date}
                </p>
              </div>
              {c.status === "open" ? (
                <button className="solid-btn" onClick={() => resolve(c.id)} type="button">
                  <IconCheck /> रिज़ॉल्व करें
                </button>
              ) : (
                <Badge status={c.status}>रिज़ॉल्व्ड</Badge>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
