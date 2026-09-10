import { Link } from "react-router-dom";
import StatCard from "../../components/StatCard";
import { properties, currentUser, enquiries } from "../../data/mockData";
import { IconListing, IconUsers, IconLeads, IconCreditCard, IconPlus, IconKyc } from "../../components/Icons";
import Badge from "../../components/Badge";

export default function AgentDashboard() {
  const mine = properties.filter((p) => p.ownerId === "own-3");
  const totalEnquiries = mine.reduce((s, p) => s + p.enquiries, 0);

  return (
    <div>
      <h1>नमस्ते, {currentUser.agent.name} 👋</h1>
      <p className="page-lead">आपका एजेंट/डीलर डैशबोर्ड ओवरव्यू</p>

      {currentUser.agent.kyc !== "verified" && (
        <div className="panel" style={{ borderColor: "var(--warning)", background: "#fff9ee", display: "flex", alignItems: "center", gap: 12 }}>
          <IconKyc /> आपकी GST/PAN KYC वेरिफिकेशन एडमिन रिव्यू में है।
        </div>
      )}

      <div className="stat-grid">
        <StatCard icon={<IconListing />} label="कुल लिस्टिंग" value={mine.length} />
        <StatCard icon={<IconUsers />} label="क्लाइंट्स" value={12} tone="green" />
        <StatCard icon={<IconLeads />} label="कुल लीड्स" value={totalEnquiries} tone="amber" />
        <StatCard icon={<IconCreditCard />} label="प्लान" value={currentUser.agent.plan} />
      </div>

      <div className="two-col">
        <div className="panel">
          <div className="panel-head">
            <h3>मेरी लिस्टिंग्स</h3>
            <Link to="/agent/listings" className="outline-btn">
              सभी देखें
            </Link>
          </div>
          {mine.map((p) => (
            <div key={p.id} className="lead-item">
              <div className="lead-main">
                <h4>{p.title}</h4>
                <p className="lead-meta">{p.location}</p>
              </div>
              <strong className="price">{p.priceLabel}</strong>
            </div>
          ))}
        </div>

        <div>
          <div className="panel">
            <div className="panel-head">
              <h3>हाल की लीड्स</h3>
              <Link to="/agent/leads" className="outline-btn">
                सभी देखें
              </Link>
            </div>
            {enquiries.slice(0, 2).map((e) => (
              <div key={e.id} className="lead-item">
                <div className="lead-main">
                  <h4>{e.buyerName}</h4>
                  <p className="lead-meta">{e.date}</p>
                </div>
                <Badge status={e.status}>{{ new: "नई", replied: "रिप्लाई", closed: "बंद" }[e.status]}</Badge>
              </div>
            ))}
          </div>

          <Link to="/agent/add-property" className="panel" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <IconPlus /> नई प्रॉपर्टी जोड़ें
          </Link>
        </div>
      </div>
    </div>
  );
}
