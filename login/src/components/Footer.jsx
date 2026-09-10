import { Link } from "react-router-dom";
import { IconHouseLogo } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wh-inner footer-grid">
        <div className="footer-col footer-brand">
          <div className="logo">
            <IconHouseLogo />
            <span>PropertyConnect</span>
          </div>
          <p>भारत का भरोसेमंद Buy • Sell • Rent मार्केटप्लेस — एक ही प्लेटफॉर्म पर।</p>
        </div>

        <div className="footer-col">
          <h4>प्लेटफॉर्म</h4>
          <Link to="/buy">प्रॉपर्टी खरीदें</Link>
          <Link to="/rent">प्रॉपर्टी किराये पर</Link>
          <Link to="/sell">प्रॉपर्टी बेचें</Link>
          <Link to="/pricing">प्राइसिंग / प्लान्स</Link>
        </div>

        <div className="footer-col">
          <h4>पैनल</h4>
          <Link to="/buyer/dashboard">बायर डैशबोर्ड</Link>
          <Link to="/seller/dashboard">सेलर डैशबोर्ड</Link>
          <Link to="/agent/dashboard">एजेंट/डीलर पैनल</Link>
          <Link to="/admin/dashboard">एडमिन पैनल</Link>
        </div>

        <div className="footer-col">
          <h4>सहायता</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/help">Help &amp; Support</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
      <div className="wh-inner footer-bottom">© 2026 PropertyConnect — सभी अधिकार सुरक्षित</div>
    </footer>
  );
}
