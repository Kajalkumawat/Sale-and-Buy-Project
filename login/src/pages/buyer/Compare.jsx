import { properties, propertyImageFor } from "../../data/mockData";
import { useAppState } from "../../context/AppState";
import PropertyCard from "../../components/PropertyCard";
import { IconCompare, IconCheck } from "../../components/Icons";

const rows = [
  { key: "priceLabel", label: "कीमत" },
  { key: "location", label: "लोकेशन" },
  { key: "category", label: "प्रकार" },
  { key: "area", label: "एरिया (sqft)" },
  { key: "bhk", label: "BHK" },
  { key: "status", label: "स्टेटस" },
];

export default function Compare() {
  const { compareList, toggleCompare } = useAppState();
  const selected = properties.filter((p) => compareList.includes(p.id));
  const rest = properties.filter((p) => !compareList.includes(p.id));

  return (
    <div>
      <h1>प्रॉपर्टी कंपेयर करें</h1>
      <p className="page-lead">एक साथ 3 प्रॉपर्टी तक तुलना करें</p>

      {selected.length > 0 ? (
        <div className="panel">
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>प्रॉपर्टी</th>
                  {selected.map((p) => (
                    <th key={p.id}>
                      <img src={propertyImageFor(p)} alt="" style={{ width: 90, height: 60, objectFit: "cover", borderRadius: 8, display: "block", marginBottom: 6 }} />
                      {p.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.key}>
                    <td style={{ fontWeight: 600 }}>{r.label}</td>
                    {selected.map((p) => (
                      <td key={p.id}>{r.key === "bhk" ? p.bhk || "—" : String(p[r.key])}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td style={{ fontWeight: 600 }}>वेरिफाइड</td>
                  {selected.map((p) => (
                    <td key={p.id}>{p.verified ? <IconCheck /> : "—"}</td>
                  ))}
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>एक्शन</td>
                  {selected.map((p) => (
                    <td key={p.id}>
                      <button className="outline-btn" onClick={() => toggleCompare(p.id)} type="button">
                        हटाएं
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="empty-state">
          <IconCompare />
          <p>तुलना करने के लिए नीचे से प्रॉपर्टी चुनें (अधिकतम 3)</p>
        </div>
      )}

      <div className="section-head" style={{ marginTop: 24 }}>
        <h2>प्रॉपर्टी चुनें</h2>
      </div>
      <div className="card-grid">
        {rest.map((p) => (
          <PropertyCard key={p.id} property={p} compareMode onToggleCompare={toggleCompare} comparedIn={compareList.includes(p.id)} />
        ))}
      </div>
    </div>
  );
}
