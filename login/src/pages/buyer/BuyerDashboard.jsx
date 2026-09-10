import { Link } from "react-router-dom";
import StatCard from "../../components/StatCard";
import PropertyCard from "../../components/PropertyCard";
import { properties, currentUser, siteVisits, paymentHistory } from "../../data/mockData";
import { useAppState } from "../../context/AppState";
import { IconStar, IconCompare, IconCalendar, IconBoost, IconChat } from "../../components/Icons";

export default function BuyerDashboard() {
  const { shortlist, toggleShortlist, compareList } = useAppState();
  const shortlisted = properties.filter((p) => shortlist.includes(p.id));

  return (
    <div>
      <h1>नमस्ते, {currentUser.buyer.name} 👋</h1>
      <p className="page-lead">आपका बायर डैशबोर्ड ओवरव्यू</p>

      <div className="stat-grid">
        <StatCard icon={<IconStar />} label="शॉर्टलिस्टेड प्रॉपर्टी" value={shortlist.length} />
        <StatCard icon={<IconCompare />} label="कंपेयर में" value={compareList.length} />
        <StatCard icon={<IconCalendar />} label="साइट-विजिट" value={siteVisits.length} tone="amber" />
        <StatCard icon={<IconBoost />} label="वर्तमान प्लान" value={currentUser.buyer.plan} tone="green" />
      </div>

      <div className="two-col">
        <div className="panel">
          <div className="panel-head">
            <h3>शॉर्टलिस्ट की गई प्रॉपर्टी</h3>
            <Link to="/buyer/shortlist" className="outline-btn">
              सभी देखें
            </Link>
          </div>
          {shortlisted.length ? (
            <div className="card-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
              {shortlisted.slice(0, 4).map((p) => (
                <PropertyCard key={p.id} property={p} liked onToggleLike={toggleShortlist} />
              ))}
            </div>
          ) : (
            <div className="empty-state">अभी तक कोई प्रॉपर्टी शॉर्टलिस्ट नहीं की गई।</div>
          )}
        </div>

        <div>
          <div className="panel">
            <div className="panel-head">
              <h3>आगामी साइट-विजिट</h3>
              <Link to="/buyer/site-visits" className="outline-btn">
                <IconCalendar />
              </Link>
            </div>
            {siteVisits.map((v) => {
              const p = properties.find((pp) => pp.id === v.propertyId);
              return (
                <div key={v.id} className="lead-item">
                  <div className="lead-main">
                    <h4>{p?.title}</h4>
                    <p>{v.requestedDate} · {v.slot}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="panel">
            <div className="panel-head">
              <h3>हाल की पेमेंट</h3>
              <Link to="/buyer/payments" className="outline-btn">
                सभी देखें
              </Link>
            </div>
            {paymentHistory.slice(0, 2).map((p) => (
              <div key={p.id} className="lead-item">
                <div className="lead-main">
                  <h4>{p.label}</h4>
                  <p className="lead-meta">{p.date}</p>
                </div>
                <strong>₹{p.amount}</strong>
              </div>
            ))}
          </div>

          <Link to="/buyer/enquiries" className="panel" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <IconChat /> अपनी एंक्वायरी / चैट देखें
          </Link>
        </div>
      </div>
    </div>
  );
}
