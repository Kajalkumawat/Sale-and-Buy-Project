import PlanCard from "../components/PlanCard";
import { buyerPlans, sellerPlans, agentPlans } from "../data/mockData";

export default function Pricing() {
  const handleSelect = (plan) => {
    alert(`"${plan.name}" प्लान चुना गया (डेमो) — Razorpay जैसे पेमेंट गेटवे से यहां पेमेंट किया जा सकेगा।`);
  };

  return (
    <>
      <div className="page-hero">
        <div className="wh-inner">
          <h1>प्राइसिंग / प्लान्स</h1>
          <p>Free Registration → Limited Access → Payment → Full Access</p>
        </div>
      </div>

      <section className="page-section">
        <div className="wh-inner">
          <div className="section-head">
            <h2>बायर प्लान्स</h2>
          </div>
          <div className="plan-grid">
            {buyerPlans.map((p) => (
              <PlanCard key={p.id} plan={p} onSelect={handleSelect} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="wh-inner">
          <div className="section-head">
            <h2>सेलर / ओनर प्लान्स</h2>
          </div>
          <div className="plan-grid">
            {sellerPlans.map((p) => (
              <PlanCard key={p.id} plan={p} onSelect={handleSelect} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="wh-inner">
          <div className="section-head">
            <h2>एजेंट / डीलर प्लान</h2>
          </div>
          <div className="plan-grid">
            {agentPlans.map((p) => (
              <PlanCard key={p.id} plan={p} onSelect={handleSelect} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="wh-inner">
          <div className="details-block">
            <h3>नोट</h3>
            <p style={{ margin: 0 }}>
              यह पेमेंट "platform access / subscription / listing service fee" के लिए है। प्रॉपर्टी की actual sale/rent पेमेंट अभी buyer
              और seller के बीच सीधे रहती है, जब तक प्लेटफॉर्म पर proper escrow/legal सेटअप नहीं हो जाता।
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
