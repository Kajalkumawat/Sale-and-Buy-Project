import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Login() {
  const { language } = useLanguage();
  const isHi = language === "hi";
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/buyer/dashboard");
  };

  return (
    <div className="page-section">
      <div className="wh-inner">
        <div className="form-card">
          <h2>{isHi ? "लॉगिन करें" : "Log in"}</h2>
          <p className="muted">{isHi ? "जारी रखने के लिए अपना ईमेल दर्ज करें" : "Enter your email to continue"}</p>

          <form onSubmit={handleContinue}>
            <div className="form-field">
              <label>{isHi ? "ईमेल" : "Email"}</label>
              <input type="email" placeholder="you@example.com" value={identifier} onChange={(e) => setIdentifier(e.target.value)} required />
            </div>

            <button className="solid-btn full" type="submit">
              {isHi ? "जारी रखें" : "Continue"}
            </button>
          </form>

          <div className="form-foot">
            {isHi ? "अकाउंट नहीं है?" : "Don’t have an account?"} <Link to="/register">{isHi ? "रजिस्टर करें" : "Register"}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
