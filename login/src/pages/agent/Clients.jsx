import Badge from "../../components/Badge";
import { IconUsers, IconPhone, IconChat } from "../../components/Icons";

const clients = [
  { id: "cl1", name: "Anil Verma", type: "बायर", interest: "4 BHK विला, गुड़गांव", status: "active", phone: "+91 90011 22334" },
  { id: "cl2", name: "Priya Nair", type: "बायर", interest: "2 BHK अपार्टमेंट, पुणे", status: "active", phone: "+91 90022 33445" },
  { id: "cl3", name: "Karan Malhotra", type: "सेलर", interest: "3 BHK अपार्टमेंट लिस्टिंग", status: "closed", phone: "+91 90033 44556" },
  { id: "cl4", name: "Simran Kaur", type: "बायर", interest: "कॉमर्शियल शॉप, दिल्ली", status: "active", phone: "+91 90044 55667" },
];

export default function Clients() {
  return (
    <div>
      <h1>
        <IconUsers /> क्लाइंट्स
      </h1>
      <p className="page-lead">आपके सभी बायर और सेलर क्लाइंट्स</p>

      <div className="panel">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>नाम</th>
                <th>टाइप</th>
                <th>रुचि</th>
                <th>स्टेटस</th>
                <th>एक्शन</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.type}</td>
                  <td>{c.interest}</td>
                  <td>
                    <Badge status={c.status}>{c.status === "active" ? "सक्रिय" : "बंद"}</Badge>
                  </td>
                  <td>
                    <div className="row-actions">
                      <button onClick={() => alert(`${c.name} को कॉल करें (डेमो)`)} type="button">
                        <IconPhone />
                      </button>
                      <button onClick={() => alert(`${c.name} को मैसेज करें (डेमो)`)} type="button">
                        <IconChat />
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
