import PlanCard from "../../components/PlanCard";

export default function SubscriptionPage({ plans, currentPlan }) {
  const handleSelect = (plan) => {
    alert(`"${plan.name}" प्लान चुना गया (डेमो) — असली प्लेटफॉर्म में यहां Razorpay पेमेंट फ्लो खुलेगा।`);
  };

  return (
    <div>
      <h1>सब्सक्रिप्शन / एक्सेस प्लान</h1>
      <p className="page-lead">
        वर्तमान प्लान: <strong>{currentPlan}</strong>
      </p>

      <div className="plan-grid">
        {plans.map((p) => (
          <PlanCard key={p.id} plan={p} onSelect={handleSelect} active={p.name === currentPlan} />
        ))}
      </div>
    </div>
  );
}
