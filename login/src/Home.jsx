import React from "react";
import "./Home.css";
import prop1 from "./assets/prop1.svg";
import prop2 from "./assets/prop2.svg";
import prop3 from "./assets/prop3.svg";
import prop4 from "./assets/prop4.svg";

const properties = [
  {
    id: 1,
    title: "3 BHK आलीशान फ्लैट",
    location: "गांधीनगर, अहमदाबाद",
    price: "₹75,00,000",
    img: prop1,
  },
  {
    id: 2,
    title: "2 BHK अपार्टमेंट",
    location: "पाटलिपुत्र, पटना",
    price: "₹18,00,000",
    img: prop2,
  },
  {
    id: 3,
    title: "खुला प्लॉट",
    location: "आगरा - आसपास",
    price: "₹25,00,000",
    img: prop3,
  },
  {
    id: 4,
    title: "लक्सरी vila",
    location: "देहरादून",
    price: "₹35,00,000",
    img: prop4,
  },
];

export default function Home() {
  return (
    <div className="pc-root">
      <header className="pc-header">
        <div className="pc-logo">PropertyConnect</div>
        <nav className="pc-nav">
          <a href="#">खरीदें</a>
          <a href="#">बिक्री</a>
          <a href="#">किराये पर</a>
          <a href="#">बिल्डर</a>
        </nav>
        <div className="pc-actions">
          <button className="primary">लॉगिन</button>
          <button>रजिस्टर</button>
        </div>
      </header>

      <section className="pc-hero">
        <div className="hero-inner">
          <h1>अपना सपना, सही प्रॉपर्टी के साथ</h1>
          <p>घर, दुकान, प्लॉट — सही विकल्प ढूँढें</p>

          <form className="search-row" onSubmit={(e)=>e.preventDefault()}>
            <input placeholder="शहर, इलाके या पिनकोड" />
            <select>
              <option>Buy (खरीदें)</option>
              <option>Rent (किराये)</option>
            </select>
            <button className="primary">खोजें</button>
          </form>
        </div>
      </section>

      <main className="pc-content">
        <h2>चयनित प्रॉपर्टी</h2>
        <div className="cards">
          {properties.map((p) => (
            <article key={p.id} className="card">
              <img src={p.img} alt={p.title} />
              <div className="card-body">
                <h3>{p.title}</h3>
                <p className="loc">{p.location}</p>
                <div className="price-row">
                  <strong>{p.price}</strong>
                  <button>विवरण</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="pc-footer">
        <div className="cta">
          <h3>आज ही PropertyConnect से जुड़ें</h3>
          <div>
            <button className="primary">लिस्ट करें</button>
            <button>और देखें</button>
          </div>
        </div>
        <p className="small">© 2026 PropertyConnect — सभी अधिकार सुरक्षित</p>
      </footer>
    </div>
  );
}
