import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IconCheck } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";

export default function Register() {
  const { language } = useLanguage();
  const isHi = language === "hi";
  const roles = [
    { key: "buyer", label: isHi ? "बायर" : "Buyer", to: "/buyer/dashboard" },
    { key: "seller", label: isHi ? "सेलर/ओनर" : "Seller/Owner", to: "/seller/dashboard" },
    { key: "agent", label: isHi ? "एजेंट/डीलर" : "Agent/Dealer", to: "/agent/dashboard" },
  ];

  const navigate = useNavigate();
  const [role, setRole] = useState("buyer");
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", mobile: "", email: "" });
  const [otp, setOtp] = useState("");

  const activeRole = roles.find((r) => r.key === role);
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    navigate(activeRole.to);
  };

  return (
    <div className="page-section">
      <div className="wh-inner">
        <div className="form-card">
          <h2>{isHi ? "रजिस्ट्रेशन करें" : "Register"}</h2>
          <p className="muted">{isHi ? "फ्री रजिस्ट्रेशन → लिमिटेड एक्सेस → पेमेंट → फुल एक्सेस" : "Free Registration → Limited Access → Payment → Full Access"}</p>

          <div className="role-toggle">
            {roles.map((r) => (
              <button key={r.key} type="button" className={role === r.key ? "active" : ""} onClick={() => setRole(r.key)}>
                {r.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <>
                <div className="form-field">
                  <label>{isHi ? "पूरा नाम" : "Full name"}</label>
                  <input value={form.name} onChange={update("name")} placeholder={isHi ? "आपका नाम" : "Your name"} required />
                </div>
                <div className="form-field">
                  <label>{isHi ? "मोबाइल नंबर" : "Mobile number"}</label>
                  <input type="tel" value={form.mobile} onChange={update("mobile")} placeholder="+91 98765 43210" required />
                </div>
                <div className="form-field">
                  <label>{isHi ? "ईमेल" : "Email"}</label>
                  <input type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" required />
                </div>
                {role !== "buyer" && (
                  <div className="details-block" style={{ background: "#f3f6fb", padding: 14 }}>
                    <strong style={{ fontSize: 13.5 }}>
                      <IconCheck /> {isHi ? "रजिस्ट्रेशन के बाद KYC वेरिफिकेशन जरूरी होगा" : "KYC verification will be required after registration"}
                    </strong>
                  </div>
                )}
                <button className="solid-btn full" type="submit" style={{ marginTop: 14 }}>
                  {isHi ? "OTP भेजें" : "Send OTP"}
                </button>
              </>
            ) : (
              <>
                <div className="form-field">
                  <label>{isHi ? "OTP दर्ज करें" : "Enter OTP"}</label>
                  <div className="otp-row">
                    {[0, 1, 2, 3].map((i) => (
                      <input
                        key={i}
                        maxLength={1}
                        value={otp[i] || ""}
                        onChange={(e) => {
                          const next = otp.split("");
                          next[i] = e.target.value.replace(/\D/g, "");
                          setOtp(next.join(""));
                        }}
                      />
                    ))}
                  </div>
                  <p className="muted" style={{ marginTop: 10, fontSize: 12.5 }}>
                    {isHi ? `${form.mobile} पर OTP भेजा गया (डेमो — कोई भी 4 अंक दर्ज करें)` : `OTP sent to ${form.mobile} (demo — enter any 4 digits)`}
                  </p>
                </div>
                <button className="solid-btn full" type="submit">
                  {isHi ? "वेरिफाई करें और आगे बढ़ें" : "Verify and continue"}
                </button>
              </>
            )}
          </form>

          <div className="form-foot">
            {isHi ? "पहले से अकाउंट है?" : "Already have an account?"} <Link to="/login">{isHi ? "लॉगिन करें" : "Log in"}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
