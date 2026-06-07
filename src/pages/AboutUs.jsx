import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import heroImg from "../assets/hero-research-operations.png";

export default function AboutUs() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    const titles = {
      es: "JRJ Research | Sobre nosotros",
      en: "JRJ Research | About Us",
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
          <p className="eyebrow">{t("about.hero.eyebrow")}</p>
          <h1>{t("about.hero.title")}</h1>
          <p className="hero-copy">{t("about.hero.copy")}</p>
          <div className="hero-actions">
            <a className="button primary" href="/#contact">{t("about.hero.cta")}</a>
            <Link className="button ghost" to="/services">{t("about.hero.secondary")}</Link>
          </div>
          <div className="proof-strip" aria-label="Credentials">
            <div>
              <strong>20+</strong>
              <span>{t("proof.years")}</span>
            </div>
            <div>
              <strong>ESOMAR</strong>
              <span>{t("proof.member")}</span>
            </div>
            <div>
              <strong>CRM</strong>
              <span>{t("proof.crm")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">{t("about.story.eyebrow")}</p>
          <h2>{t("about.story.title")}</h2>
        </div>
        <div className="rich-copy">
          <p>{t("about.story.copy1")}</p>
          <p>{t("about.story.copy2")}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">{t("about.why.eyebrow")}</p>
          <h2>{t("about.why.title")}</h2>
        </div>
        <div className="feature-grid">
          {[
            ["01", "about.why.local.title", "about.why.local.copy"],
            ["02", "about.why.respondents.title", "about.why.respondents.copy"],
            ["03", "about.why.execution.title", "about.why.execution.copy"],
            ["04", "about.why.oversight.title", "about.why.oversight.copy"],
          ].map(([num, titleKey, copyKey]) => (
            <article className="service-card compact-card" key={num}>
              <span className="card-icon">{num}</span>
              <h3>{t(titleKey)}</h3>
              <p>{t(copyKey)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="methods section">
        <div className="method-panel">
          <div>
            <p className="eyebrow">{t("about.tech.eyebrow")}</p>
            <h2>{t("about.tech.title")}</h2>
            <p className="panel-copy">{t("about.tech.copy")}</p>
          </div>
          <ul className="method-list">
            <li>{t("about.tech.item1")}</li>
            <li>{t("about.tech.item2")}</li>
            <li>{t("about.tech.item3")}</li>
          </ul>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">{t("about.standards.eyebrow")}</p>
          <h2>{t("about.standards.title")}</h2>
        </div>
        <div className="rich-copy callout-copy">
          <p>{t("about.standards.copy")}</p>
        </div>
      </section>

      <section className="section audience-section">
        <div className="section-heading">
          <p className="eyebrow">{t("about.audience.eyebrow")}</p>
          <h2>{t("about.audience.title")}</h2>
        </div>
        <div className="industry-list audience-list">
          <span>{t("about.audience.item1")}</span>
          <span>{t("about.audience.item2")}</span>
          <span>{t("about.audience.item3")}</span>
        </div>
      </section>

      <section className="quote-band">
        <div>
          <p className="eyebrow">{t("quote.eyebrow")}</p>
          <h2>{t("about.cta.title")}</h2>
        </div>
        <a className="button primary" href="/#contact">{t("about.cta.button")}</a>
      </section>
    </main>
  );
}
