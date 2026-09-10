import { Link } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../data/mockData";
import { useAppState } from "../../context/AppState";
import { IconStar } from "../../components/Icons";

export default function Shortlist() {
  const { shortlist, toggleShortlist } = useAppState();
  const list = properties.filter((p) => shortlist.includes(p.id));

  return (
    <div>
      <h1>शॉर्टलिस्ट / फेवरेट्स</h1>
      <p className="page-lead">आपकी पसंदीदा प्रॉपर्टी यहां सेव होती हैं</p>

      {list.length ? (
        <div className="card-grid">
          {list.map((p) => (
            <PropertyCard key={p.id} property={p} liked onToggleLike={toggleShortlist} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <IconStar />
          <p>अभी तक कोई प्रॉपर्टी शॉर्टलिस्ट नहीं की गई।</p>
          <Link to="/buy" className="solid-btn" style={{ display: "inline-flex" }}>
            प्रॉपर्टी खोजें
          </Link>
        </div>
      )}
    </div>
  );
}
