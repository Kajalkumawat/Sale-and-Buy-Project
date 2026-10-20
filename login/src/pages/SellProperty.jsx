import React from "react";
import { Link } from "react-router-dom";
import { IconUpload, IconLeads, IconBoost, IconKyc, IconCheck } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";

const hiText = {
  sellSteps: [
    { icon: <IconKyc />, title: "रजिस्टर करें + KYC", desc: "ओनर/सेलर/एजेंट के रूप में रजिस्टर करें और डॉक्यूमेंट वेरिफाई कराएं" },
    { icon: <IconUpload />, title: "प्रॉपर्टी अपलोड करें", desc: "फोटो, वीडियो, प्राइस और लोकेशन के साथ लिस्टिंग बनाएं" },
    { icon: <IconLeads />, title: "लीड्स पाएं", desc: "वेरिफाइड बायर्स की एंक्वायरी सीधे डैशबोर्ड में पाएं" },
    { icon: <IconBoost />, title: "डील फाइनल करें", desc: "साइट-विजिट और चैट के जरिए डील पूरी करें" },
  ],
  benefits: [
    "हजारों वेरिफाइड बायर्स तक पहुंच",
    "लिस्टिंग एनालिटिक्स — व्यू, एंक्वायरी, सेव",
    "फीचर्ड / बूस्ट लिस्टिंग विकल्प",
    "सुरक्षित चैट और साइट-विजिट मैनेजमेंट",
  ],
  heading: "अपनी प्रॉपर्टी बेचें या किराये पर दें",
  subheading: "कुछ ही मिनटों में लिस्टिंग बनाएं और वेरिफाइड बायर्स से जुड़ें",
  listNow: "अभी प्रॉपर्टी लिस्ट करें",
  pricing: "प्राइसिंग देखें",
  stepsTitle: "कैसे काम करता है?",
  stepsSubtitle: "सेलर/ओनर के लिए 4 आसान स्टेप्स",
  benefitTitle: "सेलर/ओनर बनने के फायदे",
  whoTitle: "कौन लिस्ट कर सकता है?",
  whoText: "प्रॉपर्टी ओनर, सेलर या रजिस्टर्ड एजेंट/डीलर — कोई भी KYC वेरिफिकेशन के बाद प्रॉपर्टी लिस्ट कर सकता है।",
  registerSeller: "सेलर/एजेंट के रूप में रजिस्टर करें",
  ctaTitle: "अपनी पहली लिस्टिंग आज ही बनाएं",
  ctaText: "Seller Basic सिर्फ ₹199 में शुरू करें",
  addProperty: "प्रॉपर्टी जोड़ें",
};

const enText = {
  sellSteps: [
    { icon: <IconKyc />, title: "Register + KYC", desc: "Create your account as an owner, seller, or agent and complete verification" },
    { icon: <IconUpload />, title: "Upload property", desc: "Add photos, video, price, and location for your listing" },
    { icon: <IconLeads />, title: "Get leads", desc: "Receive qualified buyer inquiries directly in your dashboard" },
    { icon: <IconBoost />, title: "Finalize the deal", desc: "Close the deal through site visits and chat" },
  ],
  benefits: [
    "Reach thousands of verified buyers",
    "Listing analytics — views, inquiries, and saves",
    "Featured and boost listing options",
    "Secure chat and site-visit management",
  ],
  heading: "Sell or rent out your property",
  subheading: "List your property in minutes and connect with verified buyers",
  listNow: "List property now",
  pricing: "View pricing",
  stepsTitle: "How it works",
  stepsSubtitle: "4 easy steps for sellers and owners",
  benefitTitle: "Benefits of becoming a seller/owner",
  whoTitle: "Who can list?",
  whoText: "Property owners, sellers, or registered agents/dealers can list after KYC verification.",
  registerSeller: "Register as seller/agent",
  ctaTitle: "Create your first listing today",
  ctaText: "Start with Seller Basic for just ₹199",
  addProperty: "Add property",
};

export default function SellProperty() {
  const { language } = useLanguage();
  const text = language === "hi" ? hiText : enText;

  return (
    <>
      <div className="page-hero">
        <div className="wh-inner">
          <h1>{text.heading}</h1>
          <p>{text.subheading}</p>
          <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link to="/seller/add-property" className="solid-btn">
              {text.listNow}
            </Link>
            <Link to="/pricing" className="outline-btn">
              {text.pricing}
            </Link>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="wh-inner">
          <div className="section-head center">
            <h2>{text.stepsTitle}</h2>
            <p className="muted">{text.stepsSubtitle}</p>
          </div>
          <div className="steps-row">
            {text.sellSteps.map((s, i) => (
              <React.Fragment key={s.title}>
                <div className="step">
                  <div className="step-num">{i + 1}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
                {i < text.sellSteps.length - 1 && <div className="step-arrow">→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="wh-inner">
          <div className="two-col">
            <div className="details-block">
              <h3>{text.benefitTitle}</h3>
              <div className="amenities-grid" style={{ gridTemplateColumns: "1fr" }}>
                {text.benefits.map((b) => (
                  <span key={b}>
                    <IconCheck /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="details-block">
              <h3>{text.whoTitle}</h3>
              <p>{text.whoText}</p>
              <Link to="/register" className="outline-btn">
                {text.registerSeller}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="wh-cta">
        <div className="wh-inner cta-inner">
          <div>
            <h3>{text.ctaTitle}</h3>
            <p>{text.ctaText}</p>
          </div>
          <div className="cta-actions">
            <Link to="/seller/add-property" className="primary">
              {text.addProperty}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
