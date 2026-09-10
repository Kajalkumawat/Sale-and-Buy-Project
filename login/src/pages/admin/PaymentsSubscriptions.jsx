import Badge from "../../components/Badge";
import StatCard from "../../components/StatCard";
import { paymentHistory, adminStats, formatINR } from "../../data/mockData";
import { IconCreditCard, IconTrendingUp } from "../../components/Icons";

const allPayments = [
  ...paymentHistory.map((p) => ({ ...p, user: "Meenu Kumar" })),
  { id: "adm-pay1", type: "Subscription", label: "Seller Premium — 3 listing", amount: 499, date: "2026-08-05", status: "paid", user: "Rajesh Sharma" },
  { id: "adm-pay2", type: "Subscription", label: "Agent/Dealer Plan — मासिक", amount: 1499, date: "2026-09-01", status: "paid", user: "Aditya Realty Group" },
  { id: "adm-pay3", type: "Boost", label: "15-दिन बूस्ट", amount: 249, date: "2026-08-20", status: "paid", user: "Sunita Bansal" },
];

export default function PaymentsSubscriptions() {
  return (
    <div>
      <h1>
        <IconCreditCard /> पेमेंट्स / सब्सक्रिप्शन
      </h1>
      <p className="page-lead">प्लेटफॉर्म की सभी सब्सक्रिप्शन और सर्विस पेमेंट्स</p>

      <div className="stat-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
        <StatCard icon={<IconTrendingUp />} label="कुल रेवेन्यू" value={formatINR(adminStats.revenue)} tone="green" />
        <StatCard icon={<IconCreditCard />} label="इस माह ट्रांजैक्शन" value={allPayments.length} />
        <StatCard icon={<IconCreditCard />} label="एक्टिव सब्सक्रिप्शन" value="612" tone="amber" />
      </div>

      <div className="panel">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>यूजर</th>
                <th>विवरण</th>
                <th>टाइप</th>
                <th>तारीख</th>
                <th>राशि</th>
                <th>स्टेटस</th>
              </tr>
            </thead>
            <tbody>
              {allPayments.map((p) => (
                <tr key={p.id}>
                  <td>{p.user}</td>
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
