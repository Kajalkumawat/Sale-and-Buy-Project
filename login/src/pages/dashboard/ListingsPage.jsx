import { useState } from "react";
import { Link } from "react-router-dom";
import { properties, propertyImageFor } from "../../data/mockData";
import { IconEye, IconLeads, IconStar, IconEdit, IconBoost, IconTrash, IconPlus } from "../../components/Icons";

const ownerIdByRole = { seller: "own-1", agent: "own-3" };
const addPropertyPathByRole = { seller: "/seller/add-property", agent: "/agent/add-property" };
const boostPathByRole = { seller: "/seller/boost", agent: "/agent/leads" };

const statuses = [
  { key: "all", label: "सभी" },
  { key: "active", label: "सक्रिय" },
  { key: "pending", label: "पेंडिंग" },
  { key: "sold", label: "सोल्ड" },
  { key: "rented", label: "रेंटेड" },
];

export default function ListingsPage({ role }) {
  const [status, setStatus] = useState("all");
  const ownerId = ownerIdByRole[role];
  const mine = properties.filter((p) => p.ownerId === ownerId);
  const filtered = status === "all" ? mine : mine.filter((p) => p.status === status);

  return (
    <div>
      <div className="section-head">
        <div>
          <h1>मेरी लिस्टिंग</h1>
          <p className="page-lead">आपकी सभी प्रॉपर्टी लिस्टिंग और उनका स्टेटस</p>
        </div>
        <Link to={addPropertyPathByRole[role]} className="solid-btn">
          <IconPlus /> नई प्रॉपर्टी जोड़ें
        </Link>
      </div>

      <div className="pill-tabs">
        {statuses.map((s) => (
          <button key={s.key} className={status === s.key ? "active" : ""} onClick={() => setStatus(s.key)} type="button">
            {s.label} {s.key !== "all" && `(${mine.filter((p) => p.status === s.key).length})`}
          </button>
        ))}
      </div>

      {filtered.length ? (
        <div className="listing-grid">
          {filtered.map((p) => (
            <div className="prop-card" key={p.id}>
              <div className="media">
                <img src={propertyImageFor(p)} alt={p.title} />
                <span className={`tag status-${p.status}`}>
                  {{ active: "सक्रिय", pending: "पेंडिंग", sold: "सोल्ड", rented: "रेंटेड" }[p.status]}
                </span>
              </div>
              <div className="body">
                <h3>{p.title}</h3>
                <p className="loc">{p.location}</p>
                <strong className="price">{p.priceLabel}</strong>
              </div>
              <div className="listing-stats-row">
                <span>
                  <IconEye /> {p.views}
                </span>
                <span>
                  <IconLeads /> {p.enquiries}
                </span>
                <span>
                  <IconStar /> {p.saves}
                </span>
              </div>
              <div className="listing-actions">
                <button className="outline-btn" type="button" onClick={() => alert("एडिट फॉर्म खुलेगा (डेमो)")}>
                  <IconEdit /> एडिट
                </button>
                <Link to={boostPathByRole[role]} className="outline-btn">
                  <IconBoost /> बूस्ट
                </Link>
                <button className="outline-btn" type="button" onClick={() => alert("लिस्टिंग हटाई गई (डेमो)")}>
                  <IconTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">इस स्टेटस में कोई लिस्टिंग नहीं मिली।</div>
      )}
    </div>
  );
}
