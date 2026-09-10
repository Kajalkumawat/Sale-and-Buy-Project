
const toneByStatus = {
  active: "green",
  pending: "amber",
  sold: "blue",
  rented: "blue",
  verified: "green",
  "not-submitted": "gray",
  rejected: "red",
  suspended: "red",
  open: "amber",
  resolved: "green",
  paid: "green",
  new: "blue",
  replied: "amber",
  closed: "gray",
  confirmed: "green",
  expired: "gray",
};

export default function Badge({ children, status, tone }) {
  const t = tone || toneByStatus[status] || "gray";
  return <span className={`badge badge-${t}`}>{children}</span>;
}
