import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconUpload, IconCheck } from "../../components/Icons";

const categories = ["अपार्टमेंट", "विला", "प्लॉट", "कॉमर्शियल"];
const amenitiesList = ["पार्किंग", "गार्डन", "लिफ्ट", "पावर बैकअप", "स्विमिंग पूल", "सिक्योरिटी", "जिम", "क्लबहाउस"];

const listingPathByRole = { seller: "/seller/listings", agent: "/agent/listings" };

export default function AddPropertyPage({ role }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "अपार्टमेंट",
    listingType: "sale",
    price: "",
    area: "",
    bhk: "",
    location: "",
    description: "",
    amenities: [],
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const toggleAmenity = (a) =>
    setForm((f) => ({ ...f, amenities: f.amenities.includes(a) ? f.amenities.filter((x) => x !== a) : [...f.amenities, a] }));

  const stepState = (n) => (n === step ? "active" : n < step ? "done" : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="empty-state" style={{ padding: "60px 20px" }}>
        <IconCheck />
        <h2>लिस्टिंग सबमिट हो गई!</h2>
        <p>आपकी प्रॉपर्टी एडमिन अप्रूवल के लिए भेज दी गई है — अप्रूव होते ही यह लाइव हो जाएगी (स्टेटस: पेंडिंग)।</p>
        <button className="solid-btn" onClick={() => navigate(listingPathByRole[role])} type="button">
          मेरी लिस्टिंग देखें
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>नई प्रॉपर्टी जोड़ें</h1>
      <p className="page-lead">फोटो, प्राइस और लोकेशन के साथ अपनी लिस्टिंग बनाएं</p>

      <div className="stepper">
        {[
          [1, "बेसिक जानकारी"],
          [2, "लोकेशन & विवरण"],
          [3, "फोटो & सुविधाएं"],
          [4, "रिव्यू & सबमिट"],
        ].map(([n, label]) => (
          <div key={n} className={`step-pill ${stepState(n)}`}>
            <span className="num">{n}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="panel">
        {step === 1 && (
          <>
            <div className="form-field">
              <label>प्रॉपर्टी टाइटल</label>
              <input value={form.title} onChange={update("title")} placeholder="जैसे: 3 BHK लग्जरी विला" required />
            </div>
            <div className="form-field">
              <label>कैटेगरी</label>
              <div className="chip-select">
                {categories.map((c) => (
                  <button type="button" key={c} className={form.category === c ? "active" : ""} onClick={() => setForm((f) => ({ ...f, category: c }))}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-field">
              <label>लिस्टिंग टाइप</label>
              <div className="chip-select">
                <button type="button" className={form.listingType === "sale" ? "active" : ""} onClick={() => setForm((f) => ({ ...f, listingType: "sale" }))}>
                  सेल
                </button>
                <button type="button" className={form.listingType === "rent" ? "active" : ""} onClick={() => setForm((f) => ({ ...f, listingType: "rent" }))}>
                  रेन्ट
                </button>
              </div>
            </div>
            <div className="form-grid-2">
              <div className="form-field">
                <label>प्राइस (₹)</label>
                <input type="number" value={form.price} onChange={update("price")} placeholder="7500000" required />
              </div>
              <div className="form-field">
                <label>एरिया (sqft)</label>
                <input type="number" value={form.area} onChange={update("area")} placeholder="1200" required />
              </div>
            </div>
            <div className="form-field">
              <label>BHK (अगर लागू हो)</label>
              <input type="number" value={form.bhk} onChange={update("bhk")} placeholder="3" />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="form-field">
              <label>लोकेशन</label>
              <input value={form.location} onChange={update("location")} placeholder="शहर, राज्य" required />
            </div>
            <div className="form-field">
              <label>विवरण</label>
              <textarea value={form.description} onChange={update("description")} placeholder="प्रॉपर्टी के बारे में विस्तार से लिखें..." required />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="form-field">
              <label>फोटो / वीडियो / 360° अपलोड करें</label>
              <div className="upload-drop">
                <IconUpload />
                <span>फाइल यहां ड्रैग करें या क्लिक करके चुनें (डेमो)</span>
              </div>
            </div>
            <div className="form-field">
              <label>सुविधाएं / Amenities</label>
              <div className="chip-select">
                {amenitiesList.map((a) => (
                  <button type="button" key={a} className={form.amenities.includes(a) ? "active" : ""} onClick={() => toggleAmenity(a)}>
                    {a}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <div>
            <h3 style={{ marginTop: 0 }}>रिव्यू करें</h3>
            <div className="amenities-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <span>टाइटल: {form.title || "—"}</span>
              <span>कैटेगरी: {form.category}</span>
              <span>टाइप: {form.listingType === "sale" ? "सेल" : "रेन्ट"}</span>
              <span>प्राइस: ₹{form.price || "—"}</span>
              <span>एरिया: {form.area || "—"} sqft</span>
              <span>BHK: {form.bhk || "—"}</span>
              <span>लोकेशन: {form.location || "—"}</span>
              <span>सुविधाएं: {form.amenities.length || 0}</span>
            </div>
          </div>
        )}

        <div className="step-actions">
          <button
            type="button"
            className="outline-btn"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            style={{ visibility: step === 1 ? "hidden" : "visible" }}
          >
            पीछे जाएं
          </button>
          {step < 4 ? (
            <button type="button" className="solid-btn" onClick={() => setStep((s) => Math.min(4, s + 1))}>
              आगे बढ़ें
            </button>
          ) : (
            <button type="submit" className="solid-btn">
              सबमिट करें
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
