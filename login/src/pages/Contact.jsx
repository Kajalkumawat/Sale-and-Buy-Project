import { useState } from "react";
import { IconPhone, IconMail, IconPin, IconHeadset } from "../components/Icons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <div className="page-hero">
        <div className="wh-inner">
          <h1>Contact Us</h1>
          <p>कोई सवाल है? हमें बताएं, हम मदद के लिए यहां हैं</p>
        </div>
      </div>

      <section className="page-section">
        <div className="wh-inner contact-grid">
          <div className="contact-info">
            <div className="contact-info-item">
              <IconPhone />
              <div>
                <strong>फोन</strong>
                <p style={{ margin: "4px 0 0" }}>+91 1800-123-4567 (टोल फ्री)</p>
              </div>
            </div>
            <div className="contact-info-item">
              <IconMail />
              <div>
                <strong>ईमेल</strong>
                <p style={{ margin: "4px 0 0" }}>support@propertyconnect.in</p>
              </div>
            </div>
            <div className="contact-info-item">
              <IconPin />
              <div>
                <strong>ऑफिस</strong>
                <p style={{ margin: "4px 0 0" }}>PropertyConnect HQ, जयपुर, राजस्थान</p>
              </div>
            </div>
            <div className="contact-info-item">
              <IconHeadset />
              <div>
                <strong>सपोर्ट समय</strong>
                <p style={{ margin: "4px 0 0" }}>24/7 उपलब्ध</p>
              </div>
            </div>
          </div>

          <div className="form-card" style={{ margin: 0 }}>
            {sent ? (
              <div className="empty-state" style={{ padding: "20px 0" }}>
                धन्यवाद! आपका मैसेज मिल गया है, हमारी टीम जल्द संपर्क करेगी।
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <label>नाम</label>
                  <input placeholder="आपका नाम" required />
                </div>
                <div className="form-field">
                  <label>ईमेल</label>
                  <input type="email" placeholder="you@example.com" required />
                </div>
                <div className="form-field">
                  <label>मैसेज</label>
                  <textarea placeholder="अपना सवाल लिखें..." required />
                </div>
                <button className="solid-btn full" type="submit">
                  मैसेज भेजें
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
