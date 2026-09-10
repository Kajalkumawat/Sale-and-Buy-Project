import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { properties, owners, propertyImageFor } from "../data/mockData";
import { useAppState } from "../context/AppState";
import PropertyCard from "../components/PropertyCard";
import Badge from "../components/Badge";
import {
  IconHeart,
  IconShare,
  IconFlag,
  IconCheck,
  IconArea,
  IconBed,
  IconPin,
  IconCalendar,
  IconPhone,
  IconMail,
  IconChat,
} from "../components/Icons";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const { shortlist, toggleShortlist } = useAppState();
  const [visitRequested, setVisitRequested] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);
  const [message, setMessage] = useState("");

  if (!property) {
    return (
      <div className="page-section wh-inner">
        <div className="empty-state">प्रॉपर्टी नहीं मिली। <Link to="/buy">सभी प्रॉपर्टी देखें</Link></div>
      </div>
    );
  }

  const owner = owners.find((o) => o.id === property.ownerId);
  const liked = shortlist.includes(property.id);
  const similar = properties.filter((p) => p.id !== property.id && p.category === property.category).slice(0, 4);

  const handleEnquiry = (e) => {
    e.preventDefault();
    setEnquirySent(true);
  };

  return (
    <div className="page-section">
      <div className="wh-inner">
        <div className="details-grid">
          <div>
            <div className="details-gallery">
              <img src={propertyImageFor(property)} alt={property.title} />
              <div className="details-badges">
                <Badge status={property.type === "sale" ? "blue" : "amber"} tone={property.type === "sale" ? "blue" : "amber"}>
                  {property.type === "sale" ? "सेल" : "रेन्ट"}
                </Badge>
                {property.verified && <Badge tone="green"><IconCheck /> वेरिफाइड ओनर</Badge>}
              </div>
            </div>

            <div className="details-title-row">
              <h1>{property.title}</h1>
              <div className="details-actions">
                <button className="outline-btn" onClick={() => toggleShortlist(property.id)} type="button">
                  <IconHeart filled={liked} /> {liked ? "शॉर्टलिस्टेड" : "शॉर्टलिस्ट करें"}
                </button>
                <button className="outline-btn" type="button" onClick={() => alert("लिंक कॉपी हो गया (डेमो)")}>
                  <IconShare /> शेयर करें
                </button>
                <button className="outline-btn" type="button" onClick={() => alert("रिपोर्ट सबमिट हो गई (डेमो)")}>
                  <IconFlag /> रिपोर्ट करें
                </button>
              </div>
            </div>
            <div className="details-price">{property.priceLabel}</div>
            <div className="details-meta">
              <span>
                <IconPin /> {property.location}
              </span>
              <span>
                <IconArea /> {property.area} sqft
              </span>
              {property.bhk && (
                <span>
                  <IconBed /> {property.bhk} BHK
                </span>
              )}
              <span>
                <IconCalendar /> पोस्टेड: {property.postedOn}
              </span>
            </div>

            <div className="details-block">
              <h3>विवरण</h3>
              <p>{property.description}</p>
            </div>

            <div className="details-block">
              <h3>सुविधाएं / Amenities</h3>
              <div className="amenities-grid">
                {property.amenities.map((a) => (
                  <span key={a}>
                    <IconCheck /> {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="details-block">
              <h3>360° / फोटो / वीडियो गैलरी</h3>
              <p className="muted" style={{ margin: 0 }}>
                यह डेमो प्लेटफॉर्म है — सेलर पैनल से अपलोड की गई असली फोटो, वीडियो और 360° टूर यहां दिखाई देंगे।
              </p>
            </div>
          </div>

          <div>
            <div className="owner-card">
              <div className="owner-head">
                <div className="owner-avatar" style={{ background: owner?.avatarColor }}>
                  {owner?.name?.[0]}
                </div>
                <div>
                  <strong>{owner?.name}</strong>
                  <div style={{ fontSize: 12.5, color: "var(--muted)" }}>
                    {owner?.role === "agent" ? "एजेंट/डीलर" : "प्रॉपर्टी ओनर"} {owner?.verified && "· वेरिफाइड"}
                  </div>
                </div>
              </div>
              <div className="owner-contact-row">
                <div>
                  <IconPhone /> {owner?.phone}
                </div>
                <div>
                  <IconMail /> {owner?.email}
                </div>
              </div>

              <button
                className="solid-btn full"
                type="button"
                onClick={() => setVisitRequested(true)}
                disabled={visitRequested}
              >
                <IconCalendar /> {visitRequested ? "साइट-विजिट रिक्वेस्ट भेजी गई" : "साइट-विजिट रिक्वेस्ट करें"}
              </button>

              <div className="enquiry-mini" style={{ marginTop: 14 }}>
                <strong style={{ fontSize: 13.5 }}>
                  <IconChat /> क्विक एंक्वायरी
                </strong>
                {enquirySent ? (
                  <p style={{ fontSize: 13, color: "var(--success)", marginTop: 8 }}>आपकी एंक्वायरी भेज दी गई है, ओनर जल्द संपर्क करेंगे।</p>
                ) : (
                  <form onSubmit={handleEnquiry}>
                    <textarea
                      placeholder="अपना सवाल यहां लिखें..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                    <button className="solid-btn full" type="submit" style={{ marginTop: 8 }}>
                      एंक्वायरी भेजें
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {similar.length > 0 && (
          <div style={{ marginTop: 36 }}>
            <div className="section-head">
              <h2>मिलती-जुलती प्रॉपर्टी</h2>
            </div>
            <div className="card-grid">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} liked={shortlist.includes(p.id)} onToggleLike={toggleShortlist} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
