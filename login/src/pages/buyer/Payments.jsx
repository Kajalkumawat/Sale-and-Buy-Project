import Badge from "../../components/Badge";
import { paymentHistory } from "../../data/mockData";

export default function Payments() {
  return (
    <div>
      <h1>पेमेंट हिस्ट्री</h1>
      <p className="page-lead">आपकी सभी सब्सक्रिप्शन और सर्विस पेमेंट्स</p>

      <div className="panel">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>विवरण</th>
                <th>टाइप</th>
                <th>तारीख</th>
                <th>राशि</th>
                <th>स्टेटस</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((p) => (
                <tr key={p.id}>
                  <td>{p.label}</td>
                  <td>{p.type}</td>
                  <td>{p.date}</td>
                  <td>₹{p.amount}</td>
                  <td>
                    <Badge status={p.status}>पेड</Badge>
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
