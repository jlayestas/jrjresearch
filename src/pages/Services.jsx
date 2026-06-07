import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import heroImg from "../assets/hero-research-operations.png";

export default function Services() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    const titles = {
      es: "JRJ Research | Servicios",
      en: "JRJ Research | Services",
    };
    document.title = titles[lang];
  }, [lang]);

  return (
    <main id="top">
      <section className="hero page-hero">
        <div className="hero-media" aria-hidden="true">
          <img src={heroImg} alt="" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="eyebrow">{t("servicesPage.hero.eyebrow")}</p>
          <h1>{t("servicesPage.hero.title")}</h1>
          <p className="hero-copy">{t("servicesPage.hero.copy")}</p>
          <div className="hero-actions">
            <a className="button primary" href="/#contact">{t("servicesPage.hero.cta")}</a>
            <a className="button ghost" href="#methodologies">{t("servicesPage.hero.secondary")}</a>
          </div>
          <div className="proof-strip" aria-label="Credentials">
            <div>
              <strong>LATAM</strong>
              <span>Mexico + Colombia</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>{t("proof.years")}</span>
            </div>
            <div>
              <strong>CRM</strong>
              <span>{t("proof.crm")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">{t("servicesPage.core.eyebrow")}</p>
          <h2>{t("servicesPage.core.title")}</h2>
        </div>
        <div className="feature-grid">
          {[
            ["01", "servicesPage.core.recruit.title", "servicesPage.core.recruit.copy"],
            ["02", "servicesPage.core.screen.title", "servicesPage.core.screen.copy"],
            ["03", "servicesPage.core.crm.title", "servicesPage.core.crm.copy"],
            ["04", "servicesPage.core.formats.title", "servicesPage.core.formats.copy"],
          ].map(([num, titleKey, copyKey]) => (
            <article className="service-card compact-card" key={num}>
              <span className="card-icon">{num}</span>
              <h3>{t(titleKey)}</h3>
              <p>{t(copyKey)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section service-detail-section" id="methodologies">
        <div className="section-heading">
          <p className="eyebrow">{t("servicesPage.methods.eyebrow")}</p>
          <h2>{t("servicesPage.methods.title")}</h2>
        </div>
        <div className="detail-grid">
          {[
            ["servicesPage.methods.focus.title", "servicesPage.methods.focus.copy"],
            ["servicesPage.methods.idi.title", "servicesPage.methods.idi.copy"],
            ["servicesPage.methods.expert.title", "servicesPage.methods.expert.copy"],
            ["servicesPage.methods.ethno.title", "servicesPage.methods.ethno.copy"],
            ["servicesPage.methods.usability.title", "servicesPage.methods.usability.copy"],
          ].map(([titleKey, copyKey]) => (
            <article className="detail-item" key={titleKey}>
              <h3>{t(titleKey)}</h3>
              <p>{t(copyKey)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="methods section">
        <div className="method-panel">
          <div>
            <p className="eyebrow">{t("servicesPage.logistics.eyebrow")}</p>
            <h2>{t("servicesPage.logistics.title")}</h2>
          </div>
          <ul className="method-list">
            {["item1","item2","item3","item4","item5"].map((k) => (
              <li key={k}>{t(`servicesPage.logistics.${k}`)}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">{t("servicesPage.coverage.eyebrow")}</p>
          <h2>{t("servicesPage.coverage.title")}</h2>
        </div>
        <div className="rich-copy callout-copy">
          <p>{t("servicesPage.coverage.copy")}</p>
        </div>
      </section>

      <section className="quote-band">
        <div>
          <p className="eyebrow">{t("quote.eyebrow")}</p>
          <h2>{t("servicesPage.cta.title")}</h2>
        </div>
        <a className="button primary" href="/#contact">{t("servicesPage.cta.button")}</a>
      </section>
    </main>
  );
}
