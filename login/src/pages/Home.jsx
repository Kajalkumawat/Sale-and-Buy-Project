import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroHouse from "../assets/hero-house.svg";
import PropertyCard from "../components/PropertyCard";
import { properties, featuredListingIds } from "../data/mockData";
import { useAppState } from "../context/AppState";
import { useLanguage } from "../context/LanguageContext";
import {
  IconSearch,
  IconCheck,
  IconShield,
  IconLock,
  IconUsers,
  IconHeadset,
  IconMap,
  IconDashboard,
  IconListing,
  IconLeads,
} from "../components/Icons";

const content = {
  hi: {
    trustPoints: ["सत्यापित प्रॉपर्टी लिस्टिंग", "सुरक्षित लेन-देन", "हजारों संतुष्ट ग्राहक", "24/7 सपोर्ट टीम"],
    features: [
      { icon: <IconShield />, title: "सत्यापित प्रॉपर्टी", desc: "हर लिस्टिंग जाँची-परखी" },
      { icon: <IconLock />, title: "सुरक्षित लेन-देन", desc: "100% सुरक्षित भुगतान" },
      { icon: <IconUsers />, title: "बड़ी पहुँच", desc: "हजारों खरीदार व विक्रेता" },
      { icon: <IconHeadset />, title: "24/7 सपोर्ट", desc: "हमेशा आपकी सेवा में" },
    ],
    steps: [
      { title: "प्रॉपर्टी खोजें", desc: "अपनी पसंद अनुसार प्रॉपर्टी खोजें" },
      { title: "पसंद करें", desc: "पसंदीदा प्रॉपर्टी शॉर्टलिस्ट करें" },
      { title: "मालिक से संपर्क करें", desc: "सीधे प्रॉपर्टी मालिक से बात करें" },
      { title: "डील फाइनल करें", desc: "आसानी से डील पूरी करें" },
    ],
    panels: [
      { icon: <IconDashboard />, title: "बायर पैनल", desc: "सर्च, शॉर्टलिस्ट, कंपेयर और सीधे ओनर से बात करें", to: "/buyer/dashboard" },
      { icon: <IconListing />, title: "सेलर / ओनर पैनल", desc: "प्रॉपर्टी लिस्ट करें, लीड्स पाएं, लिस्टिंग बूस्ट करें", to: "/seller/dashboard" },
      { icon: <IconLeads />, title: "एजेंट / डीलर पैनल", desc: "मल्टीपल क्लाइंट्स और लिस्टिंग्स मैनेज करें", to: "/agent/dashboard" },
      { icon: <IconShield />, title: "एडमिन पैनल", desc: "यूजर्स, लिस्टिंग्स, KYC और पेमेंट्स कंट्रोल करें", to: "/admin/dashboard" },
    ],
    heroTabs: ["Buy (खरीदें)", "Sell (बेचें)", "Rent (किराये पर)"],
    welcomeTitle: "PropertyConnect में आपका स्वागत है",
    welcomeText: "अपना अगला घर, प्लॉट या किराये की जगह आसानी से खोजें।",
    welcomeAction: "प्रॉपर्टी देखें",
    welcomeClose: "बंद करें",
    heroTitle: "अपना सपना, सही प्रॉपर्टी के साथ",
    heroSubtitle: "घर, दुकान, प्लॉट या किराये की प्रॉपर्टी — सब कुछ एक ही प्लेटफार्म पर",
    searchPlaceholder: "शहर, इलाके या पिनकोड (जैसे 302001)",
    allTypes: "सभी प्रकार",
    flat: "फ्लैट",
    villa: "विला",
    plot: "प्लॉट",
    searchBtn: "प्रॉपर्टी खोजें",
    hint: "पिनकोड डालकर खोजें और उस लोकेशन को मैप पर देखें — उदाहरण: 302001, 400001, 411001",
    nearby: "मेरे आसपास प्रॉपर्टी मैप पर देखें",
    selectedTitle: "चयनित प्रॉपर्टी",
    selectedSubtitle: "आपके लिए चुनी गई बेहतरीन प्रॉपर्टीज़",
    viewAll: "सभी देखें",
    platformTitle: "4 पैनल, एक प्लेटफॉर्म",
    platformSubtitle: "Buyer, Seller/Owner, Agent/Dealer और Admin — सबके लिए अलग डैशबोर्ड",
    openPanel: "पैनल खोलें →",
    stepsTitle: "कैसे काम करता है?",
    stepsSubtitle: "चार आसान चरणों में अपनी सही प्रॉपर्टी पाएं",
    ctaTitle: "आज ही PropertyConnect से जुड़ें",
    ctaText: "अपनी सही प्रॉपर्टी के लिए सही प्लेटफ़ॉर्म",
    sellerBtn: "सेलर बनें",
    buyerBtn: "बायर बनें",
    alt: "प्रॉपर्टी इलस्ट्रेशन",
  },
  en: {
    trustPoints: ["Verified property listings", "Secure transactions", "Thousands of happy clients", "24/7 support team"],
    features: [
      { icon: <IconShield />, title: "Verified property", desc: "Every listing is checked" },
      { icon: <IconLock />, title: "Secure transactions", desc: "100% safe payment flow" },
      { icon: <IconUsers />, title: "Wide reach", desc: "Thousands of buyers and sellers" },
      { icon: <IconHeadset />, title: "24/7 support", desc: "Always here to help" },
    ],
    steps: [
      { title: "Find a property", desc: "Search for properties matching your needs" },
      { title: "Shortlist", desc: "Save the best-fit options" },
      { title: "Contact owner", desc: "Speak directly with the property owner" },
      { title: "Finalize deal", desc: "Complete the transaction smoothly" },
    ],
    panels: [
      { icon: <IconDashboard />, title: "Buyer Panel", desc: "Search, shortlist, compare, and talk directly to owners", to: "/buyer/dashboard" },
      { icon: <IconListing />, title: "Seller / Owner Panel", desc: "List properties, generate leads, and boost listings", to: "/seller/dashboard" },
      { icon: <IconLeads />, title: "Agent / Dealer Panel", desc: "Manage multiple clients and listings in one place", to: "/agent/dashboard" },
      { icon: <IconShield />, title: "Admin Panel", desc: "Control users, listings, KYC, and payments", to: "/admin/dashboard" },
    ],
    heroTabs: ["Buy", "Sell", "Rent"],
    welcomeTitle: "Welcome to PropertyConnect",
    welcomeText: "Find your next home, plot, or rental with confidence.",
    welcomeAction: "Explore properties",
    welcomeClose: "Close welcome dialog",
    heroTitle: "Your dream property starts here",
    heroSubtitle: "Homes, shops, plots, and rentals — everything on one platform",
    searchPlaceholder: "City, locality or pincode (e.g. 302001)",
    allTypes: "All types",
    flat: "Flat",
    villa: "Villa",
    plot: "Plot",
    searchBtn: "Search property",
    hint: "Search by pincode and view the location on the map — example: 302001, 400001, 411001",
    nearby: "View nearby properties on the map",
    selectedTitle: "Featured properties",
    selectedSubtitle: "The best opportunities picked for you",
    viewAll: "View all",
    platformTitle: "4 panels, one platform",
    platformSubtitle: "Buyer, Seller/Owner, Agent/Dealer and Admin — separate dashboards for everyone",
    openPanel: "Open panel →",
    stepsTitle: "How it works",
    stepsSubtitle: "Find the right property in four simple steps",
    ctaTitle: "Join PropertyConnect today",
    ctaText: "The right platform for your next property move",
    sellerBtn: "Become a seller",
    buyerBtn: "Become a buyer",
    alt: "Property illustration",
  },
};

export default function Home() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeHeroTab, setActiveHeroTab] = useState(0);
  const [locationQuery, setLocationQuery] = useState("");
  const [welcomeOpen, setWelcomeOpen] = useState(() => sessionStorage.getItem("propertyconnect-welcome-dismissed") !== "true");
  const { shortlist, toggleShortlist } = useAppState();

  const t = content[language];
  const featured = properties.filter((p) => featuredListingIds.includes(p.id));

  useEffect(() => {
    if (!welcomeOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        sessionStorage.setItem("propertyconnect-welcome-dismissed", "true");
        setWelcomeOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [welcomeOpen]);

  const dismissWelcome = () => {
    sessionStorage.setItem("propertyconnect-welcome-dismissed", "true");
    setWelcomeOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = locationQuery.trim();
    navigate(q ? `/nearby?pincode=${encodeURIComponent(q)}` : "/nearby");
  };

  return (
    <>
      {welcomeOpen && (
        <div className="welcome-backdrop" onMouseDown={(event) => event.target === event.currentTarget && dismissWelcome()}>
          <section className="welcome-dialog" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
            <button className="welcome-close" type="button" onClick={dismissWelcome} aria-label={t.welcomeClose} autoFocus>
              ×
            </button>
            <div className="welcome-art">
              <img src={heroHouse} alt="" />
            </div>
            <div className="welcome-copy">
              <span className="welcome-eyebrow">PROPERTYCONNECT</span>
              <h2 id="welcome-title">{t.welcomeTitle}</h2>
              <p>{t.welcomeText}</p>
              <Link to="/buy" className="solid-btn" onClick={dismissWelcome}>{t.welcomeAction}</Link>
            </div>
          </section>
        </div>
      )}
      <section className="wh-hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>{t.heroTitle}</h1>
            <p>{t.heroSubtitle}</p>

            <form className="search-large" onSubmit={handleSubmit}>
              <div className="tabs">
                {t.heroTabs.map((tab, i) => (
                  <button type="button" key={tab} className={activeHeroTab === i ? "active" : ""} onClick={() => setActiveHeroTab(i)}>
                    {tab}
                  </button>
                ))}
              </div>

              <div className="search-row">
                <input
                  placeholder={t.searchPlaceholder}
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                />
                <select>
                  <option>{t.allTypes}</option>
                  <option>{t.flat}</option>
                  <option>{t.villa}</option>
                  <option>{t.plot}</option>
                </select>
                <button className="primary" type="submit">
                  <IconSearch />
                  <span>{t.searchBtn}</span>
                </button>
              </div>
            </form>
            <p className="hero-hint">{t.hint}</p>
            <Link to="/nearby" className="hero-nearby-link">
              <IconMap /> {t.nearby}
            </Link>
          </div>

          <div className="hero-visual">
            <img src={heroHouse} alt={t.alt} className="hero-house-img" />
            <div className="trust-card">
              {t.trustPoints.map((point) => (
                <div className="trust-item" key={point}>
                  <IconCheck />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wh-features">
        <div className="wh-inner">
          <div className="features-grid">
            {t.features.map((feature, index) => (
              <div className="feature" key={`${feature.title}-${index}`}>
                <div className="feature-icon">{feature.icon}</div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="wh-inner">
          <div className="section-head">
            <div>
              <h2>{t.selectedTitle}</h2>
              <p className="muted">{t.selectedSubtitle}</p>
            </div>
            <Link to="/buy" className="outline-btn">
              {t.viewAll}
            </Link>
          </div>

          <div className="card-grid">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} liked={shortlist.includes(p.id)} onToggleLike={toggleShortlist} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="wh-inner">
          <div className="section-head center">
            <h2>{t.platformTitle}</h2>
            <p className="muted">{t.platformSubtitle}</p>
          </div>
          <div className="panels-grid">
            {t.panels.map((panel) => (
              <div className="panel-teaser" key={panel.title}>
                <div className="panel-icon">{panel.icon}</div>
                <h4>{panel.title}</h4>
                <p>{panel.desc}</p>
                <Link to={panel.to}>{t.openPanel}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wh-steps">
        <div className="wh-inner">
          <div className="section-head center">
            <h2>{t.stepsTitle}</h2>
            <p className="muted">{t.stepsSubtitle}</p>
          </div>
          <div className="steps-row">
            {t.steps.map((step, i) => (
              <Fragment key={`${step.title}-${i}`}>
                <div className="step">
                  <div className="step-num">{i + 1}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                {i < t.steps.length - 1 && <div className="step-arrow">→</div>}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <div className="wh-cta">
        <div className="wh-inner cta-inner">
          <div>
            <h3>{t.ctaTitle}</h3>
            <p>{t.ctaText}</p>
          </div>
          <div className="cta-actions">
            <Link to="/register" className="secondary">
              {t.sellerBtn}
            </Link>
            <Link to="/register" className="primary">
              {t.buyerBtn}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
