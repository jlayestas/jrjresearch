import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="brand brand--light" to="/">
            <span className="brand-mark">JRJ</span>
            <span>Research</span>
          </Link>
          <p className="footer-tagline">{t("footer.copy")}</p>
          <a className="footer-email" href="mailto:operations@jrjresearch.com">operations@jrjresearch.com</a>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <p className="footer-col-label">{t("footer.nav")}</p>
            <Link to="/">{t("nav.home")}</Link>
            <Link to="/about-us">{t("nav.about")}</Link>
            <Link to="/services">{t("nav.services")}</Link>
            <a href="/#coverage">{t("nav.coverage")}</a>
            <a href="/#contact">{t("nav.contact")}</a>
          </div>
          <div className="footer-col">
            <p className="footer-col-label">{t("footer.regions")}</p>
            <span>LATAM</span>
            <span>United States</span>
            <span>{t("footer.other")}</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} JRJ Research. {t("footer.rights")}</span>
      </div>
    </footer>
  );
}
