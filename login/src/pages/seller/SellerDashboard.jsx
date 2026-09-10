import { Link } from "react-router-dom";
import StatCard from "../../components/StatCard";
import { properties, currentUser, enquiries } from "../../data/mockData";
import { IconListing, IconEye, IconLeads, IconBoost, IconTrendingUp, IconPlus, IconKyc } from "../../components/Icons";
import Badge from "../../components/Badge";

const viewsTrend = [
  { label: "सोम", value: 120 },
  { label: "मंगल", value: 180 },
  { label: "बुध", value: 90 },
  { label: "गुरु", value: 210 },
  { label: "शुक्र", value: 260 },
  { label: "शनि", value: 300 },
  { label: "रवि", value: 340 },
];
const maxVal = Math.max(...viewsTrend.map((v) => v.value));

export default function SellerDashboard() {
  const mine = properties.filter((p) => p.ownerId === "own-1");
  const totalViews = mine.reduce((s, p) => s + p.views, 0);
  const totalEnquiries = mine.reduce((s, p) => s + p.enquiries, 0);

  return (
    <div>
      <h1>नमस्ते, {currentUser.seller.name} 👋</h1>
      <p className="page-lead">आपका सेलर/ओनर डैशबोर्ड ओवरव्यू</p>

      {currentUser.seller.kyc !== "verified" && (
        <div className="panel" style={{ borderColor: "var(--warning)", background: "#fff9ee", display: "flex", alignItems: "center", gap: 12 }}>
          <IconKyc /> आपकी KYC वेरिफिकेशन पेंडिंग है — पूरी विज़िबिलिटी के लिए इसे पूरा करें।
        </div>
      )}

      <div className="stat-grid">
        <StatCard icon={<IconListing />} label="कुल लिस्टिंग" value={mine.length} />
        <StatCard icon={<IconEye />} label="कुल व्यूज़" value={totalViews.toLocaleString("en-IN")} tone="green" />
        <StatCard icon={<IconLeads />} label="कुल एंक्वायरी" value={totalEnquiries} tone="amber" />
        <StatCard icon={<IconBoost />} label="वर्तमान प्लान" value={currentUser.seller.plan} />
      </div>

      <div className="two-col">
        <div className="panel">
          <div className="panel-head">
            <h3>
              <IconTrendingUp /> साप्ताहिक व्यूज़ ट्रेंड
            </h3>
          </div>
          <div className="bar-chart">
            {viewsTrend.map((v) => (
              <div className="bar-col" key={v.label}>
                <div className="bar" style={{ height: `${(v.value / maxVal) * 100}%` }} title={String(v.value)} />
                <span className="bar-label">{v.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="panel">
            <div className="panel-head">
              <h3>हाल की एंक्वायरी</h3>
              <Link to="/seller/leads" className="outline-btn">
                सभी देखें
              </Link>
            </div>
            {enquiries.slice(0, 3).map((e) => (
              <div key={e.id} className="lead-item">
                <div className="lead-main">
                  <h4>{e.buyerName}</h4>
                  <p className="lead-meta">{e.date}</p>
                </div>
                <Badge status={e.status}>{{ new: "नई", replied: "रिप्लाई", closed: "बंद" }[e.status]}</Badge>
              </div>
            ))}
          </div>

          <Link to="/seller/add-property" className="panel" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <IconPlus /> नई प्रॉपर्टी जोड़ें
          </Link>
        </div>
      </div>
    </div>
  );
}
