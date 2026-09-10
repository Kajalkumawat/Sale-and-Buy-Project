import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page-section">
      <div className="wh-inner">
        <div className="empty-state" style={{ padding: "80px 20px" }}>
          <h2 style={{ marginTop: 0 }}>404 — पेज नहीं मिला</h2>
          <p>जिस पेज को आप खोज रहे हैं वह मौजूद नहीं है।</p>
          <Link to="/" className="solid-btn" style={{ display: "inline-flex", marginTop: 12 }}>
            होम पर जाएं
          </Link>
        </div>
      </div>
    </div>
  );
}
