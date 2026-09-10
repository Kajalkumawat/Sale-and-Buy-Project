import React from "react";
import { Link } from "react-router-dom";
import { IconUpload, IconLeads, IconBoost, IconKyc, IconCheck } from "../components/Icons";

const sellSteps = [
  { icon: <IconKyc />, title: "रजिस्टर करें + KYC", desc: "ओनर/सेलर/एजेंट के रूप में रजिस्टर करें और डॉक्यूमेंट वेरिफाई कराएं" },
  { icon: <IconUpload />, title: "प्रॉपर्टी अपलोड करें", desc: "फोटो, वीडियो, प्राइस और लोकेशन के साथ लिस्टिंग बनाएं" },
  { icon: <IconLeads />, title: "लीड्स पाएं", desc: "वेरिफाइड बायर्स की एंक्वायरी सीधे डैशबोर्ड में पाएं" },
  { icon: <IconBoost />, title: "डील फाइनल करें", desc: "साइट-विजिट और चैट के जरिए डील पूरी करें" },
];

const benefits = [
  "हजारों वेरिफाइड बायर्स तक पहुंच",
  "लिस्टिंग एनालिटिक्स — व्यू, एंक्वायरी, सेव",
  "फीचर्ड / बूस्ट लिस्टिंग विकल्प",
  "सुरक्षित चैट और साइट-विजिट मैनेजमेंट",
];

export default function SellProperty() {
  return (
    <>
      <div className="page-hero">
        <div className="wh-inner">
          <h1>अपनी प्रॉपर्टी बेचें या किराये पर दें</h1>
          <p>कुछ ही मिनटों में लिस्टिंग बनाएं और वेरिफाइड बायर्स से जुड़ें</p>
          <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link to="/seller/add-property" className="solid-btn">
              अभी प्रॉपर्टी लिस्ट करें
            </Link>
            <Link to="/pricing" className="outline-btn">
              प्राइसिंग देखें
            </Link>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="wh-inner">
          <div className="section-head center">
            <h2>कैसे काम करता है?</h2>
            <p className="muted">सेलर/ओनर के लिए 4 आसान स्टेप्स</p>
          </div>
          <div className="steps-row">
            {sellSteps.map((s, i) => (
              <React.Fragment key={s.title}>
                <div className="step">
                  <div className="step-num">{i + 1}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
                {i < sellSteps.length - 1 && <div className="step-arrow">→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="wh-inner">
          <div className="two-col">
            <div className="details-block">
              <h3>सेलर/ओनर बनने के फायदे</h3>
              <div className="amenities-grid" style={{ gridTemplateColumns: "1fr" }}>
                {benefits.map((b) => (
                  <span key={b}>
                    <IconCheck /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="details-block">
              <h3>कौन लिस्ट कर सकता है?</h3>
              <p>प्रॉपर्टी ओनर, सेलर या रजिस्टर्ड एजेंट/डीलर — कोई भी KYC वेरिफिकेशन के बाद प्रॉपर्टी लिस्ट कर सकता है।</p>
              <Link to="/register" className="outline-btn">
                सेलर/एजेंट के रूप में रजिस्टर करें
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="wh-cta">
        <div className="wh-inner cta-inner">
          <div>
            <h3>अपनी पहली लिस्टिंग आज ही बनाएं</h3>
            <p>Seller Basic सिर्फ ₹199 में शुरू करें</p>
          </div>
          <div className="cta-actions">
            <Link to="/seller/add-property" className="primary">
              प्रॉपर्टी जोड़ें
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
