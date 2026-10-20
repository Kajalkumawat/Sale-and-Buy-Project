import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { IconHouseLogo, IconLogin, IconMenu, IconClose } from "./Icons";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const navItems =
    language === "hi"
      ? [
          { to: "/", label: "होम", end: true },
          { to: "/buy", label: "खरीदें" },
          { to: "/rent", label: "किराये पर" },
          { to: "/seller/dashboard", label: "सेलर पैनल" },
          { to: "/buyer/dashboard", label: "बायर पैनल" },
          { to: "/contact", label: "संपर्क" },
        ]
      : [
          { to: "/", label: "Home", end: true },
          { to: "/buy", label: "Buy" },
          { to: "/rent", label: "Rent" },
          { to: "/seller/dashboard", label: "Seller Panel" },
          { to: "/buyer/dashboard", label: "Buyer Panel" },
          { to: "/contact", label: "Contact" },
        ];

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
          <button type="button" className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
            {language === "hi" ? "English" : "हिंदी"}
          </button>
          <Link to="/login" className="ghost-btn">
            <IconLogin />
            <span>{language === "hi" ? "लॉगिन" : "Login"}</span>
          </Link>
          <Link to="/register" className="solid-btn">
            {language === "hi" ? "रजिस्टर" : "Register"}
          </Link>
          <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label={language === "hi" ? "मेनू" : "Menu"}>
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
