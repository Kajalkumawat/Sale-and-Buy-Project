import { Link } from "react-router-dom";
import { propertyImageFor } from "../data/mockData";
import { IconHeart, IconPin, IconArea, IconBed, IconCheck } from "./Icons";

const statusLabel = {
  active: "सक्रिय",
  pending: "पेंडिंग",
  sold: "सोल्ड",
  rented: "रेंटेड",
};

export default function PropertyCard({ property, liked, onToggleLike, showStatus, compareMode, onToggleCompare, comparedIn }) {
  const p = property;
  return (
    <div className="prop-card">
      <div className="media">
        <Link to={`/property/${p.id}`}>
          <img src={propertyImageFor(p)} alt={p.title} />
        </Link>
        {showStatus ? (
          <span className={`tag status-${p.status}`}>{statusLabel[p.status]}</span>
        ) : (
          <span className={`tag ${p.type}`}>{p.type === "sale" ? "सेल" : "रेन्ट"}</span>
        )}
        {onToggleLike && (
          <button
            className={`heart ${liked ? "liked" : ""}`}
            onClick={() => onToggleLike(p.id)}
            aria-label="पसंद करें"
            type="button"
          >
            <IconHeart filled={!!liked} />
          </button>
        )}
        {p.verified && (
          <span className="verified-badge">
            <IconCheck /> वेरिफाइड
          </span>
        )}
      </div>
      <div className="body">
        <Link to={`/property/${p.id}`} className="title-link">
          <h3>{p.title}</h3>
        </Link>
        <p className="loc">
          <IconPin />
          <span>{p.location}</span>
        </p>
        <div className="meta-row">
          <span>
            <IconArea /> {p.area} sqft
          </span>
          {p.bhk && (
            <span>
              <IconBed /> {p.bhk} BHK
            </span>
          )}
        </div>
        <div className="card-footer">
          <strong className="price">{p.priceLabel}</strong>
          {compareMode ? (
            <button className={`outline-btn ${comparedIn ? "active" : ""}`} onClick={() => onToggleCompare(p.id)} type="button">
              {comparedIn ? "हटाएं" : "तुलना करें"}
            </button>
          ) : (
            <Link to={`/property/${p.id}`} className="outline-btn">
              विवरण देखें
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
