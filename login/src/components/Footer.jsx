import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { IconHouseLogo } from "./Icons";

export default function Footer() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  return (
    <footer className="site-footer">
      <div className="wh-inner footer-grid">
        <div className="footer-col footer-brand">
          <div className="logo">
            <IconHouseLogo />
            <span>PropertyConnect</span>
          </div>
          <p>{isHi ? "भारत का भरोसेमंद Buy • Sell • Rent मार्केटप्लेस — एक ही प्लेटफॉर्म पर।" : "India’s trusted Buy • Sell • Rent marketplace — everything in one place."}</p>
        </div>

        <div className="footer-col">
          <h4>{isHi ? "प्लेटफॉर्म" : "Platform"}</h4>
          <Link to="/buy">{isHi ? "प्रॉपर्टी खरीदें" : "Buy property"}</Link>
          <Link to="/rent">{isHi ? "प्रॉपर्टी किराये पर" : "Rent property"}</Link>
          <Link to="/sell">{isHi ? "प्रॉपर्टी बेचें" : "Sell property"}</Link>
          <Link to="/pricing">{isHi ? "प्राइसिंग / प्लान्स" : "Pricing / plans"}</Link>
        </div>

        <div className="footer-col">
          <h4>{isHi ? "पैनल" : "Panels"}</h4>
          <Link to="/buyer/dashboard">{isHi ? "बायर डैशबोर्ड" : "Buyer dashboard"}</Link>
          <Link to="/seller/dashboard">{isHi ? "सेलर डैशबोर्ड" : "Seller dashboard"}</Link>
          <Link to="/agent/dashboard">{isHi ? "एजेंट/डीलर पैनल" : "Agent/dealer panel"}</Link>
          <Link to="/admin/dashboard">{isHi ? "एडमिन पैनल" : "Admin panel"}</Link>
        </div>

        <div className="footer-col">
          <h4>{isHi ? "सहायता" : "Help"}</h4>
          <Link to="/about">{isHi ? "हमारे बारे में" : "About us"}</Link>
          <Link to="/contact">{isHi ? "संपर्क करें" : "Contact us"}</Link>
          <Link to="/help">{isHi ? "सहायता और सपोर्ट" : "Help & support"}</Link>
          <Link to="/terms">{isHi ? "शर्तें" : "Terms"}</Link>
          <Link to="/privacy">{isHi ? "गोपनीयता नीति" : "Privacy policy"}</Link>
        </div>
      </div>
      <div className="wh-inner footer-bottom">© 2026 PropertyConnect — {isHi ? "सभी अधिकार सुरक्षित" : "All rights reserved"}</div>
    </footer>
  );
}
