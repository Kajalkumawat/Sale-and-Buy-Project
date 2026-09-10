import { Link } from "react-router-dom";
import Badge from "../../components/Badge";
import { siteVisits, properties, propertyImageFor } from "../../data/mockData";
import { IconCalendar } from "../../components/Icons";

export default function SiteVisits() {
  return (
    <div>
      <h1>साइट-विजिट रिक्वेस्ट</h1>
      <p className="page-lead">आपकी साइट-विजिट रिक्वेस्ट का स्टेटस</p>

      <div className="panel">
        {siteVisits.length ? (
          siteVisits.map((v) => {
            const p = properties.find((pp) => pp.id === v.propertyId);
            return (
              <div key={v.id} className="lead-item">
                <img src={propertyImageFor(p)} alt="" style={{ width: 64, height: 64, borderRadius: 10, objectFit: "cover" }} />
                <div className="lead-main">
                  <h4>{p?.title}</h4>
                  <p>{p?.location}</p>
                  <p className="lead-meta">
                    <IconCalendar /> {v.requestedDate} · {v.slot}
                  </p>
                </div>
                <Badge status={v.status}>{v.status === "confirmed" ? "कन्फर्म्ड" : "पेंडिंग"}</Badge>
              </div>
            );
          })
        ) : (
          <div className="empty-state">कोई साइट-विजिट रिक्वेस्ट नहीं है।</div>
        )}
      </div>

      <Link to="/buy" className="outline-btn" style={{ display: "inline-flex" }}>
        नई प्रॉपर्टी के लिए विजिट रिक्वेस्ट करें
      </Link>
    </div>
  );
}
