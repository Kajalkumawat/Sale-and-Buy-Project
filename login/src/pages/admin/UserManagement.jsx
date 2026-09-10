import { useState } from "react";
import Badge from "../../components/Badge";
import { adminUsers } from "../../data/mockData";
import { IconEdit, IconTrash, IconUsers } from "../../components/Icons";

export default function UserManagement() {
  const [users, setUsers] = useState(adminUsers);
  const [roleFilter, setRoleFilter] = useState("all");

  const toggleSuspend = (id) =>
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, status: u.status === "active" ? "suspended" : "active" } : u)));

  const filtered = roleFilter === "all" ? users : users.filter((u) => u.role === roleFilter);

  return (
    <div>
      <h1>
        <IconUsers /> यूजर मैनेजमेंट
      </h1>
      <p className="page-lead">सभी बायर, सेलर और एजेंट अकाउंट्स</p>

      <div className="pill-tabs">
        {["all", "Buyer", "Seller", "Agent"].map((r) => (
          <button key={r} className={roleFilter === r ? "active" : ""} onClick={() => setRoleFilter(r)} type="button">
            {r === "all" ? "सभी" : r}
          </button>
        ))}
      </div>

      <div className="panel">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>नाम</th>
                <th>रोल</th>
                <th>ईमेल</th>
                <th>जॉइन तारीख</th>
                <th>स्टेटस</th>
                <th>एक्शन</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.role}</td>
                  <td>{u.email}</td>
                  <td>{u.joined}</td>
                  <td>
                    <Badge status={u.status}>{u.status === "active" ? "सक्रिय" : "सस्पेंडेड"}</Badge>
                  </td>
                  <td>
                    <div className="row-actions">
                      <button onClick={() => alert(`${u.name} की प्रोफाइल एडिट करें (डेमो)`)} type="button">
                        <IconEdit />
                      </button>
                      <button className="danger" onClick={() => toggleSuspend(u.id)} type="button">
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
