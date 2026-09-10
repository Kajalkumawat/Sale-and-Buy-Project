import { IconCheck } from "./Icons";

export default function PlanCard({ plan, onSelect, ctaLabel = "प्लान चुनें", active }) {
  return (
    <div className={`plan-card ${plan.highlight ? "highlight" : ""} ${active ? "current" : ""}`}>
      {plan.highlight && <span className="plan-tag">सबसे लोकप्रिय</span>}
      <h3>{plan.name}</h3>
      <div className="plan-price">
        <span className="amount">₹{plan.price}</span>
        <span className="duration">/ {plan.duration}</span>
      </div>
      <ul className="plan-features">
        {plan.features.map((f) => (
          <li key={f}>
            <IconCheck />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className={active ? "outline-btn" : "solid-btn full"} onClick={() => onSelect && onSelect(plan)} type="button">
        {active ? "वर्तमान प्लान" : ctaLabel}
      </button>
    </div>
  );
}
