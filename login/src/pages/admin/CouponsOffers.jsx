import { useState } from "react";
import Badge from "../../components/Badge";
import { coupons as initialCoupons } from "../../data/mockData";
import { IconCoupon, IconTrash, IconPlus } from "../../components/Icons";

export default function CouponsOffers() {
  const [coupons, setCoupons] = useState(initialCoupons);
  const [code, setCode] = useState("");
  const [desc, setDesc] = useState("");

  const addCoupon = (e) => {
    e.preventDefault();
    if (!code.trim()) return;
    setCoupons((prev) => [
      { id: `cp-${Date.now()}`, code: code.toUpperCase(), desc, validTill: "2026-12-31", status: "active" },
      ...prev,
    ]);
    setCode("");
    setDesc("");
  };

  const remove = (id) => setCoupons((prev) => prev.filter((c) => c.id !== id));

  return (
    <div>
      <h1>
        <IconCoupon /> कूपन & ऑफर्स
      </h1>
      <p className="page-lead">सब्सक्रिप्शन/लिस्टिंग के लिए डिस्काउंट कोड बनाएं</p>

      <form className="panel" onSubmit={addCoupon}>
        <div className="form-grid-2">
          <div className="form-field">
            <label>कूपन कोड</label>
            <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="जैसे: NEWYEAR30" required />
          </div>
          <div className="form-field">
            <label>विवरण</label>
            <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="ऑफर का विवरण" required />
          </div>
        </div>
        <button className="solid-btn" type="submit">
          <IconPlus /> कूपन बनाएं
        </button>
      </form>

      <div className="panel">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>कोड</th>
                <th>विवरण</th>
                <th>वैलिड तक</th>
                <th>स्टेटस</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((c) => (
                <tr key={c.id}>
                  <td style={{ fontWeight: 700 }}>{c.code}</td>
                  <td>{c.desc}</td>
                  <td>{c.validTill}</td>
                  <td>
                    <Badge status={c.status}>{c.status === "active" ? "सक्रिय" : "एक्सपायर्ड"}</Badge>
                  </td>
                  <td>
                    <div className="row-actions">
                      <button className="danger" onClick={() => remove(c.id)} type="button">
                        <IconTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
