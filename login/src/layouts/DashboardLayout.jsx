import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import {
  IconHouseLogo,
  IconDashboard,
  IconListing,
  IconPlus,
  IconLeads,
  IconChat,
  IconBoost,
  IconCompare,
  IconCalendar,
  IconCreditCard,
  IconStar,
  IconKyc,
  IconUsers,
  IconCoupon,
  IconBanner,
  IconFlag,
  IconCms,
  IconMenu,
  IconClose,
  IconLogout,
  IconBell,
} from "../components/Icons";

const menus = {
  buyer: [
    { to: "/buyer/dashboard", label: "ओवरव्यू", icon: <IconDashboard /> },
    { to: "/buyer/shortlist", label: "शॉर्टलिस्ट", icon: <IconStar /> },
    { to: "/buyer/compare", label: "कंपेयर प्रॉपर्टी", icon: <IconCompare /> },
    { to: "/buyer/enquiries", label: "एंक्वायरी / चैट", icon: <IconChat /> },
    { to: "/buyer/site-visits", label: "साइट विजिट", icon: <IconCalendar /> },
    { to: "/buyer/payments", label: "पेमेंट हिस्ट्री", icon: <IconCreditCard /> },
    { to: "/buyer/subscription", label: "सब्सक्रिप्शन", icon: <IconBoost /> },
  ],
  seller: [
    { to: "/seller/dashboard", label: "ओवरव्यू", icon: <IconDashboard /> },
    { to: "/seller/listings", label: "मेरी लिस्टिंग", icon: <IconListing /> },
    { to: "/seller/add-property", label: "प्रॉपर्टी जोड़ें", icon: <IconPlus /> },
    { to: "/seller/leads", label: "लीड्स / एंक्वायरी", icon: <IconLeads /> },
    { to: "/seller/chat", label: "चैट", icon: <IconChat /> },
    { to: "/seller/boost", label: "बूस्ट लिस्टिंग", icon: <IconBoost /> },
    { to: "/seller/subscription", label: "सब्सक्रिप्शन", icon: <IconCreditCard /> },
  ],
  agent: [
    { to: "/agent/dashboard", label: "ओवरव्यू", icon: <IconDashboard /> },
    { to: "/agent/listings", label: "लिस्टिंग्स", icon: <IconListing /> },
    { to: "/agent/add-property", label: "प्रॉपर्टी जोड़ें", icon: <IconPlus /> },
    { to: "/agent/clients", label: "क्लाइंट्स", icon: <IconUsers /> },
    { to: "/agent/leads", label: "लीड्स", icon: <IconLeads /> },
    { to: "/agent/subscription", label: "सब्सक्रिप्शन", icon: <IconCreditCard /> },
  ],
  admin: [
    { to: "/admin/dashboard", label: "डैशबोर्ड", icon: <IconDashboard /> },
    { to: "/admin/users", label: "यूजर मैनेजमेंट", icon: <IconUsers /> },
    { to: "/admin/properties", label: "प्रॉपर्टी मैनेजमेंट", icon: <IconListing /> },
    { to: "/admin/kyc", label: "KYC वेरिफिकेशन", icon: <IconKyc /> },
    { to: "/admin/payments", label: "पेमेंट्स / सब्सक्रिप्शन", icon: <IconCreditCard /> },
    { to: "/admin/coupons", label: "कूपन & ऑफर्स", icon: <IconCoupon /> },
    { to: "/admin/featured", label: "फीचर्ड लिस्टिंग / बैनर", icon: <IconBanner /> },
    { to: "/admin/complaints", label: "रिपोर्ट्स / कंप्लेंट्स", icon: <IconFlag /> },
    { to: "/admin/cms", label: "CMS / पेजेस", icon: <IconCms /> },
  ],
};

const roleLabel = {
  buyer: "बायर पैनल",
  seller: "सेलर / ओनर पैनल",
  agent: "एजेंट / डीलर पैनल",
  admin: "एडमिन पैनल",
};

export default function DashboardLayout({ role, userName }) {
  const [open, setOpen] = useState(false);
  const items = menus[role] || [];

  return (
    <div className="dash-root">
      <aside className={`dash-sidebar ${open ? "open" : ""}`}>
        <div className="dash-brand">
          <Link to="/" className="logo">
            <IconHouseLogo />
            <span>PropertyConnect</span>
          </Link>
          <button className="dash-sidebar-close" onClick={() => setOpen(false)} aria-label="बंद करें">
            <IconClose />
          </button>
        </div>
        <div className="dash-role-tag">{roleLabel[role]}</div>
        <nav className="dash-nav">
          {items.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setOpen(false)}>
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <Link to="/" className="dash-nav-exit">
          <IconLogout />
          <span>वेबसाइट पर वापस जाएं</span>
        </Link>
      </aside>

      {open && <div className="dash-overlay" onClick={() => setOpen(false)} />}

      <div className="dash-main">
        <div className="dash-topbar">
          <button className="dash-menu-btn" onClick={() => setOpen(true)} aria-label="मेनू">
            <IconMenu />
          </button>
          <div className="dash-topbar-title">{roleLabel[role]}</div>
          <div className="dash-topbar-actions">
            <button className="icon-btn" aria-label="सूचनाएं">
              <IconBell />
            </button>
            <div className="dash-user-chip">
              <span className="avatar-dot">{userName?.[0] || "U"}</span>
              <span>{userName}</span>
            </div>
          </div>
        </div>
        <div className="dash-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
