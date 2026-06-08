import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import logo from "../assets/jrj-research-logo-transparent.png";

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const cls = ["site-header", scrolled && "scrolled", open && "open"]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={cls}>
      <Link className="brand" to="/" aria-label="JRJ Research home">
        <img src={logo} alt="JRJ Research" className="brand-logo" />
      </Link>

      <button
        className="nav-toggle"
        type="button"
        aria-label="Open menu"
        aria-expanded={String(open)}
        onClick={() => setOpen((o) => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="site-nav">
        <Link to="/">{t("nav.home")}</Link>
        <Link to="/about-us">{t("nav.about")}</Link>
        <Link to="/services">{t("nav.services")}</Link>
        <a href="/#coverage">{t("nav.coverage")}</a>
        <a href="/#industries">{t("nav.industries")}</a>
        <a href="/#contact">{t("nav.contact")}</a>
        <button className="lang-switch" type="button" onClick={toggleLang}>
          {lang === "es" ? "EN" : "ES"}
        </button>
      </nav>
    </header>
  );
}
