import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import MockMap from "../components/MockMap";
import { properties } from "../data/mockData";
import { useAppState } from "../context/AppState";
import { useLanguage } from "../context/LanguageContext";
import { IconGrid, IconMap } from "../components/Icons";

const categoriesHi = [
  { key: "all", label: "सभी प्रकार" },
  { key: "apartment", label: "अपार्टमेंट" },
  { key: "villa", label: "विला" },
  { key: "plot", label: "प्लॉट" },
  { key: "commercial", label: "कॉमर्शियल" },
];

const categoriesEn = [
  { key: "all", label: "All types" },
  { key: "apartment", label: "Apartment" },
  { key: "villa", label: "Villa" },
  { key: "plot", label: "Plot" },
  { key: "commercial", label: "Commercial" },
];

export default function PropertyListing({ type, title, subtitle }) {
  const { language } = useLanguage();
  const { shortlist, toggleShortlist } = useAppState();
  const isHi = language === "hi";
  const categories = isHi ? categoriesHi : categoriesEn;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [bhk, setBhk] = useState("all");
  const [sort, setSort] = useState("newest");
  const [view, setView] = useState("grid");

  const filtered = useMemo(() => {
    let list = properties.filter((p) => p.type === type && p.status !== "sold" && p.status !== "rented");
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q));
    }
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (bhk !== "all") list = list.filter((p) => String(p.bhk) === bhk);

    list = [...list];
    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    else list.sort((a, b) => new Date(b.postedOn) - new Date(a.postedOn));

    return list;
  }, [type, search, category, bhk, sort]);

  return (
    <>
      <div className="page-hero">
        <div className="wh-inner">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="filter-tabs" style={{ marginTop: 16, width: "fit-content" }}>
            <Link to="/buy" className={type === "sale" ? "active" : ""}>
              {isHi ? "खरीदें" : "Buy"}
            </Link>
            <Link to="/rent" className={type === "rent" ? "active" : ""}>
              {isHi ? "किराये पर" : "Rent"}
            </Link>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="wh-inner">
          <div className="filter-bar">
            <input
              placeholder={isHi ? "शहर, इलाके या प्रॉपर्टी नाम खोजें" : "Search city, locality or property name"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => (
                <option key={c.key} value={c.key}>
                  {c.label}
                </option>
              ))}
            </select>
            <select value={bhk} onChange={(e) => setBhk(e.target.value)}>
              <option value="all">{isHi ? "सभी BHK" : "All BHK"}</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="newest">{isHi ? "नवीनतम पहले" : "Newest first"}</option>
              <option value="price-low">{isHi ? "कीमत: कम से ज्यादा" : "Price: low to high"}</option>
              <option value="price-high">{isHi ? "कीमत: ज्यादा से कम" : "Price: high to low"}</option>
            </select>
            <div className="view-toggle">
              <button type="button" className={view === "grid" ? "active" : ""} onClick={() => setView("grid")} aria-label={isHi ? "ग्रिड व्यू" : "Grid view"}>
                <IconGrid />
              </button>
              <button type="button" className={view === "map" ? "active" : ""} onClick={() => setView("map")} aria-label={isHi ? "मैप व्यू" : "Map view"}>
                <IconMap />
              </button>
            </div>
          </div>

          <p className="results-count">
            {filtered.length} {isHi ? "प्रॉपर्टी मिलीं" : "properties found"}
          </p>

          {view === "grid" ? (
            filtered.length ? (
              <div className="card-grid">
                {filtered.map((p) => (
                  <PropertyCard key={p.id} property={p} liked={shortlist.includes(p.id)} onToggleLike={toggleShortlist} />
                ))}
              </div>
            ) : (
              <div className="empty-state">{isHi ? "कोई प्रॉपर्टी नहीं मिली। फ़िल्टर बदलकर पुनः प्रयास करें।" : "No properties found. Please try changing the filters."}</div>
            )
          ) : (
            <MockMap properties={filtered} />
          )}
        </div>
      </section>
    </>
  );
}
