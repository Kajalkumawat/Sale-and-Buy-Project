
const base = { fill: "none", xmlns: "http://www.w3.org/2000/svg" };

export function IconHouseLogo(props) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 11.5 12 4l9 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLogin(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M10 17l5-5-5-5v3H3v4h7v3zM19 3v18h-2V3h2z" fill="currentColor" />
    </svg>
  );
}

export function IconSearch(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="11" fill="#22c55e" />
      <path d="M7 12.5l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconShield(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLock(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} {...props}>
      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconUsers(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.5 20c.2-2.4 1.8-4 3.6-4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconHeadset(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M19 19v1a3 3 0 0 1-3 3h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconPin(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconHeart({ filled, ...props }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#ef4444" : "none"} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 20s-7.5-4.6-9.9-9.2C.5 7.1 2.4 4 5.6 4c1.9 0 3.4 1 4.4 2.4C11 5 12.5 4 14.4 4c3.2 0 5.1 3.1 3.5 6.8C19.5 15.4 12 20 12 20z"
        stroke={filled ? "#ef4444" : "currentColor"}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconDashboard(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="3" width="8" height="5" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="12" width="8" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="14" width="8" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconListing(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 9h10M7 13h10M7 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlus(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconLeads(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 4h12l4 4v12H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconChat(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 5h16v11H9l-4 4V5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconBoost(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCompare(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M8 3v18M16 3v18" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 8h4M16 8h4M4 16h4M16 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconCalendar(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconCreditCard(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2.5 10h19" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconStar(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3l2.7 5.9 6.3.7-4.7 4.4 1.3 6.3L12 17.2 6.4 20.3l1.3-6.3-4.7-4.4 6.3-.7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconKyc(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="9" cy="10" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 16c0-1.7 1.3-3 3-3s3 1.3 3 3M14 9h4M14 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconCoupon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 0 0 3V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5a1.5 1.5 0 0 0 0-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 7v10" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 2" />
    </svg>
  );
}

export function IconBanner(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="6" width="18" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 19l4-4 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFlag(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 21V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 4h13l-3 4 3 4H5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCms(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 3h9l4 4v14H6z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 12h7M9 16h7M9 8h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconBell(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 10a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 14 6 10z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function IconLogout(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMenu(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconEye(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconArea(props) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9h3V4M20 15h-3v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconBed(props) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 21v-3M21 21v-3M3 13V7M11 10h4a2 2 0 0 1 2 2v1H9v-1a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconShare(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.2 10.7 15.8 6.3M8.2 13.3l7.6 4.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconPhone(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6a2 2 0 0 1 1-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMail(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMap(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 4v14M15 6v14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconGrid(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconUpload(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 16V4M7 9l5-5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconTrash(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 7h16M9 7V4h6v3M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconEdit(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTrendingUp(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
