import { useState } from "react";
import Badge from "../../components/Badge";
import { properties, featuredListingIds, banners as initialBanners, propertyImageFor } from "../../data/mockData";
import { IconBanner, IconStar, IconTrash } from "../../components/Icons";

export default function FeaturedListings() {
  const [featured, setFeatured] = useState(featuredListingIds);
  const [banners, setBanners] = useState(initialBanners);

  const toggleFeatured = (id) => setFeatured((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const removeBanner = (id) => setBanners((prev) => prev.filter((b) => b.id !== id));

  return (
    <div>
      <h1>
        <IconBanner /> फीचर्ड लिस्टिंग / बैनर
      </h1>
      <p className="page-lead">होमपेज पर दिखने वाली फीचर्ड प्रॉपर्टी और बैनर मैनेज करें</p>

      <div className="section-head">
        <h2>
          <IconStar /> फीचर्ड प्रॉपर्टी
        </h2>
      </div>
      <div className="listing-grid">
        {properties.map((p) => (
          <div className="prop-card" key={p.id}>
            <div className="media">
              <img src={propertyImageFor(p)} alt={p.title} />
              {featured.includes(p.id) && <span className="tag sale">फीचर्ड</span>}
            </div>
            <div className="body">
              <h3>{p.title}</h3>
              <p className="loc">{p.location}</p>
            </div>
            <div className="listing-actions">
              <button className={`outline-btn ${featured.includes(p.id) ? "active" : ""}`} onClick={() => toggleFeatured(p.id)} type="button">
                {featured.includes(p.id) ? "फीचर हटाएं" : "फीचर करें"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="section-head" style={{ marginTop: 30 }}>
        <h2>बैनर</h2>
      </div>
      <div className="panel">
        {banners.map((b) => (
          <div key={b.id} className="lead-item">
            <div className="lead-main">
              <h4>{b.title}</h4>
              <p className="lead-meta">{b.position}</p>
            </div>
            <Badge status={b.status}>सक्रिय</Badge>
            <button className="outline-btn" onClick={() => removeBanner(b.id)} type="button">
              <IconTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
