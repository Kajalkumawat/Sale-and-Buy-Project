import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import MockMap from "../components/MockMap";
import PropertyCard from "../components/PropertyCard";
import { properties, findLocation, pincodes } from "../data/mockData";
import { useAppState } from "../context/AppState";
import { IconSearch, IconPin } from "../components/Icons";

const filters = [
  { key: "all", label: "सभी" },
  { key: "sale", label: "🏠 सेल" },
  { key: "rent", label: "🏢 रेन्ट" },
  { key: "plot", label: "🌳 प्लॉट" },
  { key: "commercial", label: "🏬 कॉमर्शियल" },
];

export default function NearbyMap() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("pincode") || "";
  const { shortlist, toggleShortlist } = useAppState();
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState(initialQuery);
  const [searched, setSearched] = useState(() => findLocation(initialQuery));
  const [notFound, setNotFound] = useState(() => !findLocation(initialQuery) && initialQuery.trim().length > 0);

  const runSearch = (raw) => {
    const match = findLocation(raw);
    setSearched(match);
    setNotFound(!match && raw.trim().length > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runSearch(query);
    setSearchParams(query.trim() ? { pincode: query.trim() } : {});
  };

  const clearSearch = () => {
    setQuery("");
    setSearched(null);
    setNotFound(false);
    setSearchParams({});
  };

  const list = useMemo(() => {
    let base = properties.filter((p) => {
      if (active === "all") return true;
      if (active === "sale") return p.type === "sale";
      if (active === "rent") return p.type === "rent";
      return p.category === active;
    });
    if (searched) base = base.filter((p) => p.location.includes(searched.city));
    return base;
  }, [active, searched]);

  return (
    <div className="page-section">
      <div className="wh-inner">
        <div className="section-head">
          <div>
            <h2>मेरे आसपास प्रॉपर्टी</h2>
            <p className="muted">पिनकोड या शहर डालें, उस लोकेशन की प्रॉपर्टी पूरी डिटेल और फोटो के साथ देखें</p>
          </div>
          <div className="filter-tabs">
            {filters.map((f) => (
              <button key={f.key} className={active === f.key ? "active" : ""} onClick={() => setActive(f.key)} type="button">
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <form className="pincode-search" onSubmit={handleSubmit}>
          <IconPin />
          <input placeholder="पिनकोड या शहर डालें, जैसे 302001 या जयपुर" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button className="solid-btn" type="submit">
            <IconSearch /> लोकेशन खोजें
          </button>
          {searched && (
            <button type="button" className="outline-btn" onClick={clearSearch}>
              क्लियर करें
            </button>
          )}
        </form>

        {searched && (
          <div className="location-found">
            📍 <strong>{searched.city}, {searched.state}</strong> ({searched.code}) मिला — नीचे इस लोकेशन की प्रॉपर्टी देखें
          </div>
        )}
        {notFound && (
          <div className="location-not-found">
            "{query}" के लिए कोई लोकेशन नहीं मिली। डेमो के लिए ट्राई करें: {pincodes.map((p) => p.code).join(", ")}
          </div>
        )}

        <MockMap properties={list} searchedPin={searched} autoOpenId={searched && list.length ? list[0].id : undefined} />

        {searched && list.length === 0 && (
          <div className="empty-state">इस लोकेशन में चुने गए फ़िल्टर से कोई प्रॉपर्टी नहीं मिली — "सभी" फ़िल्टर आज़माएं।</div>
        )}

        <div className="map-legend">
          <span>
            <span className="dot" /> {list.length} प्रॉपर्टी दिखाई जा रही हैं
          </span>
          <span>पिन पर क्लिक करके कीमत और विवरण देखें</span>
        </div>

        {searched && list.length > 0 && (
          <div className="location-results">
            <div className="section-head" style={{ marginTop: 28 }}>
              <div>
                <h2>
                  {searched.city} में {list.length} प्रॉपर्टी मिलीं
                </h2>
                <p className="muted">फोटो, कीमत और पूरी जानकारी के लिए "विवरण देखें" पर क्लिक करें</p>
              </div>
              <Link to={`/buy?q=${encodeURIComponent(searched.city)}`} className="outline-btn">
                और प्रॉपर्टी खोजें
              </Link>
            </div>
            <div className="card-grid">
              {list.map((p) => (
                <PropertyCard key={p.id} property={p} liked={shortlist.includes(p.id)} onToggleLike={toggleShortlist} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
