import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IconCheck } from "../components/Icons";

const roles = [
  { key: "buyer", label: "बायर", to: "/buyer/dashboard" },
  { key: "seller", label: "सेलर/ओनर", to: "/seller/dashboard" },
  { key: "agent", label: "एजेंट/डीलर", to: "/agent/dashboard" },
];

export default function Register() {
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
          <h2>रजिस्ट्रेशन करें</h2>
          <p className="muted">Free Registration → Limited Access → Payment → Full Access</p>

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
                  <label>पूरा नाम</label>
                  <input value={form.name} onChange={update("name")} placeholder="आपका नाम" required />
                </div>
                <div className="form-field">
                  <label>मोबाइल नंबर</label>
                  <input type="tel" value={form.mobile} onChange={update("mobile")} placeholder="+91 98765 43210" required />
                </div>
                <div className="form-field">
                  <label>ईमेल</label>
                  <input type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" required />
                </div>
                {role !== "buyer" && (
                  <div className="details-block" style={{ background: "#f3f6fb", padding: 14 }}>
                    <strong style={{ fontSize: 13.5 }}>
                      <IconCheck /> रजिस्ट्रेशन के बाद KYC वेरिफिकेशन जरूरी होगा
                    </strong>
                  </div>
                )}
                <button className="solid-btn full" type="submit" style={{ marginTop: 14 }}>
                  OTP भेजें
                </button>
              </>
            ) : (
              <>
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
                    {form.mobile} पर OTP भेजा गया (डेमो — कोई भी 4 अंक दर्ज करें)
                  </p>
                </div>
                <button className="solid-btn full" type="submit">
                  वेरिफाई करें और आगे बढ़ें
                </button>
              </>
            )}
          </form>

          <div className="form-foot">
            पहले से अकाउंट है? <Link to="/login">लॉगिन करें</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
