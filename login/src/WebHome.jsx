import React from "react";
import "./WebHome.css";

const cards = [
  {
    id: 1,
    title: "3 BHK लग्जरी विला",
    location: "जोधपुर, राजस्थान",
    price: "₹75,00,000",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    tag: "सेल",
  },
  {
    id: 2,
    title: "2 BHK अपार्टमेंट",
    location: "पुणे, महाराष्ट्र",
    price: "₹18,000/माह",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9b1b9a9?w=1200&q=80",
    tag: "रेन्ट",
  },
  {
    id: 3,
    title: "100 गज का प्लॉट",
    location: "आगरा, उत्तर प्रदेश",
    price: "₹25,00,000",
    img: "https://images.unsplash.com/photo-1505691723518-36a0f56f68a8?w=1200&q=80",
    tag: "सेल",
  },
  {
    id: 4,
    title: "कॉमर्शियल शॉप",
    location: "दिल्ली, नजदीक मेट्रो",
    price: "₹35,000/माह",
    img: "https://images.unsplash.com/photo-1560185127-6a3a4d7c3e5f?w=1200&q=80",
    tag: "रेन्ट",
  },
];

export default function WebHome() {
  return (
    <div className="wh-root">
      <header className="wh-header">
        <div className="wh-inner">
          <div className="logo">PropertyConnect</div>
          <nav className="nav">
            <a>होम</a>
            <a>प्रॉपर्टी खोजें</a>
            <a>सेलर पैनल</a>
            <a>बाययर पैनल</a>
            <a>संपर्क</a>
          </nav>
          <div className="actions">
            <button className="ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10 17l5-5-5-5v3H3v4h7v3zM19 3v18h-2V3h2z" />
              </svg>
              <span>लॉगिन</span>
            </button>
            <button className="outline">रजिस्टर</button>
          </div>
        </div>
      </header>

      <section className="wh-hero">
        <div className="hero-overlay">
          <div className="hero-inner">
            <h1>अपना सपना, सही प्रॉपर्टी के साथ</h1>
            <p>घर, दुकान, प्लॉट या किराये की प्रॉपर्टी — सब कुछ एक ही प्लेटफार्म पर</p>

            <form className="search-large" onSubmit={(e)=>e.preventDefault()}>
              <div className="tabs">
                <button className="active">Buy (खरीदें)</button>
                <button>Sell (बेचें)</button>
                <button>Rent (किराये पर)</button>
              </div>

              <div className="search-row">
                <input placeholder="शहर, इलाके या पिनकोड" />
                <select>
                  <option>सभी प्रकार</option>
                  <option>फ्लैट</option>
                  <option>विला</option>
                  <option>प्लॉट</option>
                </select>
                <button className="primary">प्रॉपर्टी खोजें</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="wh-features">
        <div className="wh-inner">
          <div className="features-grid">
            <div className="feature">सत्यापित प्रॉपर्टी</div>
            <div className="feature">सुरक्षित लेन-देन</div>
            <div className="feature">बड़ी पहुँच</div>
            <div className="feature">24/7 सपोर्ट</div>
          </div>
        </div>
      </section>

      <main className="wh-main">
        <div className="wh-inner">
          <h2>चयनित प्रॉपर्टी</h2>
          <div className="card-grid">
            {cards.map((c) => (
              <div key={c.id} className="prop-card">
                <div className="media">
                  <img src={c.img} alt={c.title} />
                  <span className="tag">{c.tag}</span>
                </div>
                <div className="body">
                  <h3>{c.title}</h3>
                  <p className="loc">{c.location}</p>
                  <div className="card-footer">
                    <strong className="price">{c.price}</strong>
                    <button className="outline">विवरण देखें</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="wh-cta">
        <div className="wh-inner cta-inner">
          <div>
            <h3>आज ही PropertyConnect से जुड़ें</h3>
            <p>अपनी सही प्रॉपर्टी के लिए हमें चुनें</p>
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
