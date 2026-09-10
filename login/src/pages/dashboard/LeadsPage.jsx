import { useState } from "react";
import Badge from "../../components/Badge";
import { enquiries, properties } from "../../data/mockData";
import { IconLeads, IconPhone, IconChat } from "../../components/Icons";

const ownerIdByRole = { seller: "own-1", agent: "own-3" };

export default function LeadsPage({ role }) {
  const ownerId = ownerIdByRole[role];
  const myPropertyIds = properties.filter((p) => p.ownerId === ownerId).map((p) => p.id);
  const [items, setItems] = useState(enquiries.filter((e) => myPropertyIds.includes(e.propertyId)));

  const markReplied = (id) => setItems((prev) => prev.map((e) => (e.id === id ? { ...e, status: "replied" } : e)));

  return (
    <div>
      <h1>लीड्स / एंक्वायरी</h1>
      <p className="page-lead">आपकी प्रॉपर्टी पर आई हुई बायर एंक्वायरी</p>

      {items.length ? (
        items.map((e) => {
          const p = properties.find((pp) => pp.id === e.propertyId);
          return (
            <div key={e.id} className="lead-item">
              <div className="lead-main">
                <h4>{e.buyerName}</h4>
                <p>{e.message}</p>
                <p className="lead-meta">
                  {p?.title} · {e.date}
                </p>
              </div>
              <Badge status={e.status}>{{ new: "नई", replied: "रिप्लाई किया", closed: "बंद" }[e.status]}</Badge>
              <div className="lead-actions">
                <button className="outline-btn" type="button" onClick={() => alert(`${e.buyerName} को कॉल करें (डेमो)`)}>
                  <IconPhone />
                </button>
                <button className="outline-btn" type="button" onClick={() => markReplied(e.id)}>
                  <IconChat /> रिप्लाई
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="empty-state">
          <IconLeads />
          <p>अभी तक कोई एंक्वायरी नहीं आई।</p>
        </div>
      )}
    </div>
  );
}
