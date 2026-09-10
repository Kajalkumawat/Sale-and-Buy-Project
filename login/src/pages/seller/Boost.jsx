import { boostPackages, properties } from "../../data/mockData";
import { IconBoost, IconCheck } from "../../components/Icons";

export default function Boost() {
  const mine = properties.filter((p) => p.ownerId === "own-1" && p.status === "active");

  const handleBoost = (pkg) => {
    alert(`"${pkg.name}" पैकेज चुना गया (डेमो) — पेमेंट के बाद आपकी लिस्टिंग बूस्ट हो जाएगी।`);
  };

  return (
    <div>
      <h1>
        <IconBoost /> बूस्ट लिस्टिंग
      </h1>
      <p className="page-lead">अपनी प्रॉपर्टी को ज्यादा बायर्स तक पहुंचाएं</p>

      <div className="boost-grid">
        {boostPackages.map((pkg) => (
          <div className={`plan-card ${pkg.highlight ? "highlight" : ""}`} key={pkg.id}>
            {pkg.highlight && <span className="plan-tag">बेस्ट वैल्यू</span>}
            <h3>{pkg.name}</h3>
            <div className="plan-price">
              <span className="amount">₹{pkg.price}</span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: 13.5, flex: 1 }}>{pkg.desc}</p>
            <button className="solid-btn full" type="button" onClick={() => handleBoost(pkg)}>
              चुनें
            </button>
          </div>
        ))}
      </div>

      <div className="section-head" style={{ marginTop: 28 }}>
        <h2>बूस्ट के लिए प्रॉपर्टी चुनें</h2>
      </div>
      <div className="panel">
        {mine.map((p) => (
          <div key={p.id} className="lead-item">
            <div className="lead-main">
              <h4>{p.title}</h4>
              <p className="lead-meta">{p.location}</p>
            </div>
            <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--success)", fontSize: 13 }}>
              <IconCheck /> बूस्ट के लिए तैयार
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
