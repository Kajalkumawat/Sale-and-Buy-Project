import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const roles = [
  { key: "buyer", label: "बायर", to: "/buyer/dashboard" },
  { key: "seller", label: "सेलर/ओनर", to: "/seller/dashboard" },
  { key: "agent", label: "एजेंट/डीलर", to: "/agent/dashboard" },
  { key: "admin", label: "एडमिन", to: "/admin/dashboard" },
];

export default function Login() {
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
          <h2>लॉगिन करें</h2>
          <p className="muted">अपने अकाउंट टाइप के अनुसार लॉगिन करें</p>

          <div className="role-toggle">
            {roles.map((r) => (
              <button key={r.key} type="button" className={role === r.key ? "active" : ""} onClick={() => setRole(r.key)}>
                {r.label}
              </button>
            ))}
          </div>

          <div className="role-toggle">
            <button type="button" className={mode === "otp" ? "active" : ""} onClick={() => { setMode("otp"); setStep(1); }}>
              Mobile OTP
            </button>
            <button type="button" className={mode === "password" ? "active" : ""} onClick={() => { setMode("password"); setStep(1); }}>
              Email/Password
            </button>
          </div>

          <form onSubmit={handleContinue}>
            {mode === "otp" ? (
              step === 1 ? (
                <div className="form-field">
                  <label>मोबाइल नंबर</label>
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
                  <label>OTP दर्ज करें</label>
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
                    {identifier} पर OTP भेजा गया (डेमो — कोई भी 4 अंक दर्ज करें)
                  </p>
                </div>
              )
            ) : (
              <>
                <div className="form-field">
                  <label>ईमेल</label>
                  <input type="email" placeholder="you@example.com" value={identifier} onChange={(e) => setIdentifier(e.target.value)} required />
                </div>
                <div className="form-field">
                  <label>पासवर्ड</label>
                  <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              </>
            )}

            <button className="solid-btn full" type="submit">
              {mode === "otp" && step === 1 ? "OTP भेजें" : "लॉगिन करें"}
            </button>
          </form>

          <div className="form-foot">
            अकाउंट नहीं है? <Link to="/register">रजिस्टर करें</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
