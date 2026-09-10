import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IconHouseLogo, IconLogin, IconMenu, IconClose } from "./Icons";

const navItems = [
  { to: "/", label: "होम", end: true },
  { to: "/buy", label: "खरीदें" },
  { to: "/rent", label: "किराये पर" },
  { to: "/seller/dashboard", label: "सेलर पैनल" },
  { to: "/buyer/dashboard", label: "बायर पैनल" },
  { to: "/contact", label: "संपर्क" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wh-inner site-header-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <IconHouseLogo />
          <span>PropertyConnect</span>
        </Link>

        <nav className={`nav ${open ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="actions">
          <Link to="/login" className="ghost-btn">
            <IconLogin />
            <span>लॉगिन</span>
          </Link>
          <Link to="/register" className="solid-btn">
            रजिस्टर
          </Link>
          <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="मेनू">
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
