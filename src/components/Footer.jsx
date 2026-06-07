import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div>
        <Link className="brand" to="/">
          <span className="brand-mark">JRJ</span>
          <span>Research</span>
        </Link>
        <p>{t("footer.copy")}</p>
      </div>
      <div className="footer-links">
        <Link to="/">{t("nav.home")}</Link>
        <Link to="/about-us">{t("nav.about")}</Link>
        <Link to="/services">{t("nav.services")}</Link>
        <a href="/#coverage">{t("nav.coverage")}</a>
        <a href="/#contact">{t("nav.contact")}</a>
      </div>
    </footer>
  );
}
