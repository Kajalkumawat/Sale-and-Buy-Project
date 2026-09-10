import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import heroHouse from "../assets/hero-house.svg";
import PropertyCard from "../components/PropertyCard";
import { properties, featuredListingIds } from "../data/mockData";
import { useAppState } from "../context/AppState";
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

const trustPoints = ["सत्यापित प्रॉपर्टी लिस्टिंग", "सुरक्षित लेन-देन", "हजारों संतुष्ट ग्राहक", "24/7 सपोर्ट टीम"];

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

const panels = [
  { icon: <IconDashboard />, title: "बायर पैनल", desc: "सर्च, शॉर्टलिस्ट, कंपेयर और सीधे ओनर से बात करें", to: "/buyer/dashboard" },
  { icon: <IconListing />, title: "सेलर / ओनर पैनल", desc: "प्रॉपर्टी लिस्ट करें, लीड्स पाएं, लिस्टिंग बूस्ट करें", to: "/seller/dashboard" },
  { icon: <IconLeads />, title: "एजेंट / डीलर पैनल", desc: "मल्टीपल क्लाइंट्स और लिस्टिंग्स मैनेज करें", to: "/agent/dashboard" },
  { icon: <IconShield />, title: "एडमिन पैनल", desc: "यूजर्स, लिस्टिंग्स, KYC और पेमेंट्स कंट्रोल करें", to: "/admin/dashboard" },
];

const heroTabs = ["Buy (खरीदें)", "Sell (बेचें)", "Rent (किराये पर)"];

export default function Home() {
  const [activeHeroTab, setActiveHeroTab] = useState(0);
  const { shortlist, toggleShortlist } = useAppState();

  const featured = properties.filter((p) => featuredListingIds.includes(p.id));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="wh-hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>अपना सपना, सही प्रॉपर्टी के साथ</h1>
            <p>घर, दुकान, प्लॉट या किराये की प्रॉपर्टी — सब कुछ एक ही प्लेटफार्म पर</p>

            <form className="search-large" onSubmit={handleSubmit}>
              <div className="tabs">
                {heroTabs.map((t, i) => (
                  <button type="button" key={t} className={activeHeroTab === i ? "active" : ""} onClick={() => setActiveHeroTab(i)}>
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
            <Link to="/nearby" className="hero-nearby-link">
              <IconMap /> मेरे आसपास प्रॉपर्टी मैप पर देखें
            </Link>
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

      <section className="page-section">
        <div className="wh-inner">
          <div className="section-head">
            <div>
              <h2>चयनित प्रॉपर्टी</h2>
              <p className="muted">आपके लिए चुनी गई बेहतरीन प्रॉपर्टीज़</p>
            </div>
            <Link to="/buy" className="outline-btn">
              सभी देखें
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
            <h2>4 पैनल, एक प्लेटफॉर्म</h2>
            <p className="muted">Buyer, Seller/Owner, Agent/Dealer और Admin — सबके लिए अलग डैशबोर्ड</p>
          </div>
          <div className="panels-grid">
            {panels.map((p) => (
              <div className="panel-teaser" key={p.title}>
                <div className="panel-icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <Link to={p.to}>पैनल खोलें →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wh-steps">
        <div className="wh-inner">
          <div className="section-head center">
            <h2>कैसे काम करता है?</h2>
            <p className="muted">चार आसान चरणों में अपनी सही प्रॉपर्टी पाएं</p>
          </div>
          <div className="steps-row">
            {steps.map((s, i) => (
              <Fragment key={s.title}>
                <div className="step">
                  <div className="step-num">{i + 1}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
                {i < steps.length - 1 && <div className="step-arrow">→</div>}
              </Fragment>
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
            <Link to="/register" className="secondary">
              सेलर बनें
            </Link>
            <Link to="/register" className="primary">
              बायर बनें
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
