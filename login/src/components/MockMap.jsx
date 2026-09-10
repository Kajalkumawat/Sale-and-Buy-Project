import { useState } from "react";
import { Link } from "react-router-dom";
import { IconPin } from "./Icons";

export default function MockMap({ properties }) {
  const [activeId, setActiveId] = useState(null);
  const active = properties.find((p) => p.id === activeId);

  return (
    <div className="mock-map">
      <div className="mock-map-grid" />
      {properties.map((p) => (
        <button
          key={p.id}
          type="button"
          className={`map-pin ${activeId === p.id ? "active" : ""}`}
          style={{ top: `${p.lat}%`, left: `${p.lng}%` }}
          onClick={() => setActiveId(activeId === p.id ? null : p.id)}
        >
          <IconPin />
          <span>{p.priceLabel}</span>
        </button>
      ))}

      {active && (
        <div className="map-popover" style={{ top: `${active.lat}%`, left: `${active.lng}%` }}>
          <strong>{active.title}</strong>
          <span>{active.location}</span>
          <span className="map-popover-price">{active.priceLabel}</span>
          <Link to={`/property/${active.id}`} className="outline-btn">
            विवरण देखें
          </Link>
        </div>
      )}
    </div>
  );
}
