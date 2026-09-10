import { cmsPages } from "../../data/mockData";
import { IconCms, IconEdit } from "../../components/Icons";

export default function Cms() {
  return (
    <div>
      <h1>
        <IconCms /> CMS / पेजेस
      </h1>
      <p className="page-lead">वेबसाइट के स्टैटिक पेजेस मैनेज करें</p>

      <div className="panel">
        {cmsPages.map((p) => (
          <div key={p.id} className="lead-item">
            <div className="lead-main">
              <h4>{p.title}</h4>
              <p className="lead-meta">आखिरी अपडेट: {p.updatedOn}</p>
            </div>
            <button className="outline-btn" onClick={() => alert(`"${p.title}" पेज एडिटर खुलेगा (डेमो)`)} type="button">
              <IconEdit /> एडिट करें
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
