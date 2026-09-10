import { useState } from "react";
import MockMap from "../components/MockMap";
import { properties } from "../data/mockData";

const filters = [
  { key: "all", label: "सभी" },
  { key: "sale", label: "🏠 सेल" },
  { key: "rent", label: "🏢 रेन्ट" },
  { key: "plot", label: "🌳 प्लॉट" },
  { key: "commercial", label: "🏬 कॉमर्शियल" },
];

export default function NearbyMap() {
  const [active, setActive] = useState("all");

  const list = properties.filter((p) => {
    if (active === "all") return true;
    if (active === "sale") return p.type === "sale";
    if (active === "rent") return p.type === "rent";
    return p.category === active;
  });

  return (
    <div className="page-section">
      <div className="wh-inner">
        <div className="section-head">
          <div>
            <h2>मेरे आसपास प्रॉपर्टी</h2>
            <p className="muted">मैप पर प्रॉपर्टी और उनकी कीमत देखें</p>
          </div>
          <div className="filter-tabs">
            {filters.map((f) => (
              <button key={f.key} className={active === f.key ? "active" : ""} onClick={() => setActive(f.key)} type="button">
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <MockMap properties={list} />

        <div className="map-legend">
          <span>
            <span className="dot" /> {list.length} प्रॉपर्टी दिखाई जा रही हैं
          </span>
          <span>पिन पर क्लिक करके कीमत और विवरण देखें</span>
        </div>
      </div>
    </div>
  );
}
