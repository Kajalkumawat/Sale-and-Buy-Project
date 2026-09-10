import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../../components/Badge";
import { properties as initialProperties, owners } from "../../data/mockData";
import { IconListing, IconCheck, IconTrash } from "../../components/Icons";

const statusLabel = { active: "सक्रिय", pending: "पेंडिंग", sold: "सोल्ड", rented: "रेंटेड" };

export default function PropertyManagement() {
  const [properties, setProperties] = useState(initialProperties);
  const [filter, setFilter] = useState("all");

  const approve = (id) => setProperties((prev) => prev.map((p) => (p.id === id ? { ...p, status: "active" } : p)));
  const remove = (id) => setProperties((prev) => prev.filter((p) => p.id !== id));

  const filtered = filter === "all" ? properties : properties.filter((p) => p.status === filter);

  return (
    <div>
      <h1>
        <IconListing /> प्रॉपर्टी मैनेजमेंट
      </h1>
      <p className="page-lead">सभी लिस्टिंग को अप्रूव, फीचर या रिमूव करें</p>

      <div className="pill-tabs">
        {["all", "active", "pending", "sold", "rented"].map((s) => (
          <button key={s} className={filter === s ? "active" : ""} onClick={() => setFilter(s)} type="button">
            {s === "all" ? "सभी" : statusLabel[s]}
          </button>
        ))}
      </div>

      <div className="panel">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>प्रॉपर्टी</th>
                <th>ओनर</th>
                <th>टाइप</th>
                <th>कीमत</th>
                <th>स्टेटस</th>
                <th>वेरिफाइड</th>
                <th>एक्शन</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => {
                const owner = owners.find((o) => o.id === p.ownerId);
                return (
                  <tr key={p.id}>
                    <td>
                      <Link to={`/property/${p.id}`}>{p.title}</Link>
                    </td>
                    <td>{owner?.name}</td>
                    <td>{p.type === "sale" ? "सेल" : "रेन्ट"}</td>
                    <td>{p.priceLabel}</td>
                    <td>
                      <Badge status={p.status}>{statusLabel[p.status]}</Badge>
                    </td>
                    <td>{p.verified ? <IconCheck /> : "—"}</td>
                    <td>
                      <div className="row-actions">
                        {p.status === "pending" && (
                          <button onClick={() => approve(p.id)} type="button" title="अप्रूव करें">
                            <IconCheck />
                          </button>
                        )}
                        <button className="danger" onClick={() => remove(p.id)} type="button" title="हटाएं">
                          <IconTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
