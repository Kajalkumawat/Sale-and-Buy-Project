import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Login() {
  const { language } = useLanguage();
  const isHi = language === "hi";
  const roles = [
    { key: "buyer", label: isHi ? "बायर" : "Buyer", to: "/buyer/dashboard" },
    { key: "seller", label: isHi ? "सेलर/ओनर" : "Seller/Owner", to: "/seller/dashboard" },
    { key: "agent", label: isHi ? "एजेंट/डीलर" : "Agent/Dealer", to: "/agent/dashboard" },
    { key: "admin", label: isHi ? "एडमिन" : "Admin", to: "/admin/dashboard" },
  ];

  const navigate = useNavigate();
  const [role, setRole] = useState("buyer");
  const [mode, setMode] = useState("otp");
  const [step, setStep] = useState(1);
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const activeRole = roles.find((r) => r.key === role);

  const handleContinue = (e) => {
    e.preventDefault();
    if (mode === "otp" && step === 1) {
      setStep(2);
      return;
    }
    navigate(activeRole.to);
  };

  return (
    <div className="page-section">
      <div className="wh-inner">
        <div className="form-card">
          <h2>{isHi ? "लॉगिन करें" : "Log in"}</h2>
          <p className="muted">{isHi ? "अपने अकाउंट टाइप के अनुसार लॉगिन करें" : "Log in according to your account type"}</p>

          <div className="role-toggle">
            {roles.map((r) => (
              <button key={r.key} type="button" className={role === r.key ? "active" : ""} onClick={() => setRole(r.key)}>
                {r.label}
              </button>
            ))}
          </div>

          <div className="role-toggle">
            <button type="button" className={mode === "otp" ? "active" : ""} onClick={() => { setMode("otp"); setStep(1); }}>
              {isHi ? "मोबाइल OTP" : "Mobile OTP"}
            </button>
            <button type="button" className={mode === "password" ? "active" : ""} onClick={() => { setMode("password"); setStep(1); }}>
              {isHi ? "ईमेल / पासवर्ड" : "Email / Password"}
            </button>
          </div>

          <form onSubmit={handleContinue}>
            {mode === "otp" ? (
              step === 1 ? (
                <div className="form-field">
                  <label>{isHi ? "मोबाइल नंबर" : "Mobile number"}</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                  />
                </div>
              ) : (
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
                    {isHi ? `${identifier} पर OTP भेजा गया (डेमो — कोई भी 4 अंक दर्ज करें)` : `OTP sent to ${identifier} (demo — enter any 4 digits)`}
                  </p>
                </div>
              )
            ) : (
              <>
                <div className="form-field">
                  <label>{isHi ? "ईमेल" : "Email"}</label>
                  <input type="email" placeholder="you@example.com" value={identifier} onChange={(e) => setIdentifier(e.target.value)} required />
                </div>
                <div className="form-field">
                  <label>{isHi ? "पासवर्ड" : "Password"}</label>
                  <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              </>
            )}

            <button className="solid-btn full" type="submit">
              {mode === "otp" && step === 1 ? (isHi ? "OTP भेजें" : "Send OTP") : isHi ? "लॉगिन करें" : "Log in"}
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
