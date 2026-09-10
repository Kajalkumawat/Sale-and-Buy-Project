import { Link } from "react-router-dom";
import StatCard from "../../components/StatCard";
import { adminStats, revenueTrend, kycQueue, pendingListings, formatINR } from "../../data/mockData";
import { IconUsers, IconListing, IconTrendingUp, IconKyc, IconFlag, IconCreditCard } from "../../components/Icons";

const maxRevenue = Math.max(...revenueTrend.map((r) => r.value));

export default function AdminDashboard() {
  return (
    <div>
      <h1>एडमिन डैशबोर्ड</h1>
      <p className="page-lead">प्लेटफॉर्म का पूरा ओवरव्यू</p>

      <div className="stat-grid">
        <StatCard icon={<IconUsers />} label="कुल यूजर्स" value={adminStats.totalUsers.toLocaleString("en-IN")} />
        <StatCard icon={<IconListing />} label="सक्रिय लिस्टिंग" value={adminStats.activeListings} tone="green" />
        <StatCard icon={<IconCreditCard />} label="कुल रेवेन्यू" value={formatINR(adminStats.revenue)} tone="green" />
        <StatCard icon={<IconTrendingUp />} label="सोल्ड / रेंटेड" value={adminStats.soldRented} />
      </div>
      <div className="stat-grid">
        <StatCard icon={<IconUsers />} label="बायर्स" value={adminStats.buyers.toLocaleString("en-IN")} />
        <StatCard icon={<IconUsers />} label="सेलर्स" value={adminStats.sellers} />
        <StatCard icon={<IconUsers />} label="एजेंट्स" value={adminStats.agents} />
        <StatCard icon={<IconFlag />} label="ओपन कंप्लेंट्स" value={adminStats.complaints} tone="red" />
      </div>

      <div className="two-col">
        <div className="panel">
          <div className="panel-head">
            <h3>
              <IconTrendingUp /> रेवेन्यू ट्रेंड (मासिक)
            </h3>
          </div>
          <div className="bar-chart">
            {revenueTrend.map((r) => (
              <div className="bar-col" key={r.month}>
                <div className="bar" style={{ height: `${(r.value / maxRevenue) * 100}%` }} title={formatINR(r.value)} />
                <span className="bar-label">{r.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="panel">
            <div className="panel-head">
              <h3>
                <IconKyc /> पेंडिंग KYC ({adminStats.pendingKyc})
              </h3>
              <Link to="/admin/kyc" className="outline-btn">
                सभी देखें
              </Link>
            </div>
            {kycQueue.filter((k) => k.status === "pending").map((k) => (
              <div key={k.id} className="lead-item">
                <div className="lead-main">
                  <h4>{k.name}</h4>
                  <p className="lead-meta">{k.role} · {k.docType}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="panel">
            <div className="panel-head">
              <h3>पेंडिंग लिस्टिंग ({adminStats.pendingListings})</h3>
              <Link to="/admin/properties" className="outline-btn">
                सभी देखें
              </Link>
            </div>
            {pendingListings.map((p) => (
              <div key={p.id} className="lead-item">
                <div className="lead-main">
                  <h4>{p.title}</h4>
                  <p className="lead-meta">{p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
