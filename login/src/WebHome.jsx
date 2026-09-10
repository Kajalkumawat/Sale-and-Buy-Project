import React, { useState } from "react";
import "./WebHome.css";
import heroHouse from "./assets/hero-house.svg";
import cardVilla from "./assets/card-villa.svg";
import cardApartment from "./assets/card-apartment.svg";
import cardPlot from "./assets/card-plot.svg";
import cardShop from "./assets/card-shop.svg";

const properties = [
  {
    id: 1,
    title: "3 BHK लग्जरी विला",
    location: "जोधपुर, राजस्थान",
    price: "₹75,00,000",
    img: cardVilla,
    tag: "सेल",
    type: "sale",
  },
  {
    id: 2,
    title: "2 BHK अपार्टमेंट",
    location: "पुणे, महाराष्ट्र",
    price: "₹18,000/माह",
    img: cardApartment,
    tag: "रेन्ट",
    type: "rent",
  },
  {
    id: 3,
    title: "100 गज का प्लॉट",
    location: "आगरा, उत्तर प्रदेश",
    price: "₹25,00,000",
    img: cardPlot,
    tag: "सेल",
    type: "sale",
  },
  {
    id: 4,
    title: "कॉमर्शियल शॉप",
    location: "दिल्ली, नजदीक मेट्रो",
    price: "₹35,000/माह",
    img: cardShop,
    tag: "रेन्ट",
    type: "rent",
  },
];

const trustPoints = [
  "सत्यापित प्रॉपर्टी लिस्टिंग",
  "सुरक्षित लेन-देन",
  "हजारों संतुष्ट ग्राहक",
  "24/7 सपोर्ट टीम",
];

const features = [
  { icon: <IconShield />, title: "सत्यापित प्रॉपर्टी", desc: "हर लिस्टिंग जाँची-परखी" },
  { icon: <IconLock />, title: "सुरक्षित लेन-देन", desc: "100% सुरक्षित भुगतान" },
  { icon: <IconUsers />, title: "बड़ी पहुँच", desc: "हजारों खरीदार व विक्रेता" },
  { icon: <IconHeadset />, title: "24/7 सपोर्ट", desc: "हमेशा आपकी सेवा में" },
];

const steps = [
  { title: "प्रॉपर्टी खोजें", desc: "अपनी पसंद अनुसार प्रॉपर्टी खोजें" },
  { title: "पसंद करें", desc: "पसंदीदा प्रॉपर्टी शॉर्टलिस्ट करें" },
  { title: "मालिक से संपर्क करें", desc: "सीधे प्रॉपर्टी मालिक से बात करें" },
  { title: "डील फाइनल करें", desc: "आसानी से डील पूरी करें" },
];

const navItems = [
  { key: "home", label: "होम" },
  { key: "search", label: "प्रॉपर्टी खोजें" },
  { key: "seller", label: "सेलर पैनल" },
  { key: "buyer", label: "बायर पैनल" },
  { key: "contact", label: "संपर्क" },
];

const filters = [
  { key: "all", label: "सभी" },
  { key: "sale", label: "सेल" },
  { key: "rent", label: "रेन्ट" },
];

const heroTabs = ["Buy (खरीदें)", "Sell (बेचें)", "Rent (किराये पर)"];

export default function WebHome() {
  const [activeNav, setActiveNav] = useState("home");
  const [activeHeroTab, setActiveHeroTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [liked, setLiked] = useState({});

  const visibleProperties =
    activeFilter === "all" ? properties : properties.filter((p) => p.type === activeFilter);

  const toggleLike = (id) => setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="wh-root">
      <header className="wh-header">
        <div className="wh-inner">
          <div className="logo">
            <IconHouseLogo />
            <span>PropertyConnect</span>
          </div>
          <nav className="nav">
            {navItems.map((item) => (
              <a
                key={item.key}
                className={activeNav === item.key ? "active" : ""}
                onClick={() => setActiveNav(item.key)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="actions">
            <button className="ghost">
              <IconLogin />
              <span>लॉगिन</span>
            </button>
            <button className="outline-btn">रजिस्टर</button>
          </div>
        </div>
      </header>

      <section className="wh-hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>अपना सपना, सही प्रॉपर्टी के साथ</h1>
            <p>घर, दुकान, प्लॉट या किराये की प्रॉपर्टी — सब कुछ एक ही प्लेटफार्म पर</p>

            <form className="search-large" onSubmit={(e) => e.preventDefault()}>
              <div className="tabs">
                {heroTabs.map((t, i) => (
                  <button
                    type="button"
                    key={t}
                    className={activeHeroTab === i ? "active" : ""}
                    onClick={() => setActiveHeroTab(i)}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="search-row">
                <input placeholder="शहर, इलाके या पिनकोड" />
                <select>
                  <option>सभी प्रकार</option>
                  <option>फ्लैट</option>
                  <option>विला</option>
                  <option>प्लॉट</option>
                </select>
                <button className="primary" type="submit">
                  <IconSearch />
                  <span>प्रॉपर्टी खोजें</span>
                </button>
              </div>
            </form>
          </div>

          <div className="hero-visual">
            <img src={heroHouse} alt="प्रॉपर्टी इलस्ट्रेशन" className="hero-house-img" />
            <div className="trust-card">
              {trustPoints.map((t) => (
                <div className="trust-item" key={t}>
                  <IconCheck />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wh-features">
        <div className="wh-inner">
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="wh-main">
        <div className="wh-inner">
          <div className="section-head">
            <div>
              <h2>चयनित प्रॉपर्टी</h2>
              <p className="muted">आपके लिए चुनी गई बेहतरीन प्रॉपर्टीज़</p>
            </div>
            <div className="filter-tabs">
              {filters.map((f) => (
                <button
                  key={f.key}
                  className={activeFilter === f.key ? "active" : ""}
                  onClick={() => setActiveFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="card-grid">
            {visibleProperties.map((c) => (
              <div key={c.id} className="prop-card">
                <div className="media">
                  <img src={c.img} alt={c.title} />
                  <span className={`tag ${c.type}`}>{c.tag}</span>
                  <button
                    className={`heart ${liked[c.id] ? "liked" : ""}`}
                    onClick={() => toggleLike(c.id)}
                    aria-label="पसंद करें"
                  >
                    <IconHeart filled={!!liked[c.id]} />
                  </button>
                </div>
                <div className="body">
                  <h3>{c.title}</h3>
                  <p className="loc">
                    <IconPin />
                    <span>{c.location}</span>
                  </p>
                  <div className="card-footer">
                    <strong className="price">{c.price}</strong>
                    <button className="outline-btn">विवरण देखें</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <section className="wh-steps">
        <div className="wh-inner">
          <div className="section-head center">
            <h2>कैसे काम करता है?</h2>
            <p className="muted">चार आसान चरणों में अपनी सही प्रॉपर्टी पाएं</p>
          </div>
          <div className="steps-row">
            {steps.map((s, i) => (
              <React.Fragment key={s.title}>
                <div className="step">
                  <div className="step-num">{i + 1}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
                {i < steps.length - 1 && <div className="step-arrow">→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <div className="wh-cta">
        <div className="wh-inner cta-inner">
          <div>
            <h3>आज ही PropertyConnect से जुड़ें</h3>
            <p>अपनी सही प्रॉपर्टी के लिए सही प्लेटफ़ॉर्म</p>
          </div>
          <div className="cta-actions">
            <button className="secondary">सेलर बनें</button>
            <button className="primary">बायर बनें</button>
          </div>
        </div>
      </div>

      <footer className="wh-footer">
        <div className="wh-inner">© 2026 PropertyConnect — सभी अधिकार सुरक्षित</div>
      </footer>
    </div>
  );
}

function IconHouseLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 11.5 12 4l9 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLogin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 17l5-5-5-5v3H3v4h7v3zM19 3v18h-2V3h2z" fill="currentColor" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="#22c55e" />
      <path d="M7 12.5l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.5 20c.2-2.4 1.8-4 3.6-4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconHeadset() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M19 19v1a3 3 0 0 1-3 3h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconHeart({ filled }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#ef4444" : "none"} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20s-7.5-4.6-9.9-9.2C.5 7.1 2.4 4 5.6 4c1.9 0 3.4 1 4.4 2.4C11 5 12.5 4 14.4 4c3.2 0 5.1 3.1 3.5 6.8C19.5 15.4 12 20 12 20z"
        stroke={filled ? "#ef4444" : "currentColor"}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
