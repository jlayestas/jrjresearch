import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import ContactForm from "../components/ContactForm";
import heroImg from "../assets/hero-research-operations.png";

export default function Home() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    const titles = {
      es: "JRJ Research | Reclutamiento y logistica de investigacion en LATAM",
      en: "JRJ Research | Market research recruitment and logistics in LATAM",
    };
    document.title = titles[lang];
  }, [lang]);

  return (
    <main id="top">
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src={heroImg} alt="" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="eyebrow">{t("hero.eyebrow")}</p>
          <h1>{t("hero.title")}</h1>
          <p className="hero-copy">{t("hero.copy")}</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">{t("hero.cta")}</a>
            <a className="button ghost" href="#services">{t("hero.secondary")}</a>
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

      <section className="intro section">
        <div className="section-heading">
          <p className="eyebrow">{t("intro.eyebrow")}</p>
          <h2>{t("intro.title")}</h2>
        </div>
        <div className="intro-copy">
          <p>{t("intro.copy")}</p>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="eyebrow">{t("services.eyebrow")}</p>
          <h2>{t("services.title")}</h2>
        </div>
        <div className="service-grid">
          <article className="service-card">
            <span className="card-icon">01</span>
            <h3>{t("services.recruit.title")}</h3>
            <p>{t("services.recruit.copy")}</p>
          </article>
          <article className="service-card">
            <span className="card-icon">02</span>
            <h3>{t("services.logistics.title")}</h3>
            <p>{t("services.logistics.copy")}</p>
          </article>
          <article className="service-card">
            <span className="card-icon">03</span>
            <h3>{t("services.remote.title")}</h3>
            <p>{t("services.remote.copy")}</p>
          </article>
        </div>
      </section>

      <section className="methods section">
        <div className="method-panel">
          <div>
            <p className="eyebrow">{t("methods.eyebrow")}</p>
            <h2>{t("methods.title")}</h2>
          </div>
          <ul className="method-list">
            <li>{t("methods.item1")}</li>
            <li>{t("methods.item2")}</li>
            <li>{t("methods.item3")}</li>
            <li>{t("methods.item4")}</li>
          </ul>
        </div>
      </section>

      <section className="coverage section" id="coverage">
        <div className="section-heading">
          <p className="eyebrow">{t("coverage.eyebrow")}</p>
          <h2>{t("coverage.title")}</h2>
        </div>
        <div className="coverage-layout">
          <div className="map-card" aria-label="JRJ Research coverage">
            <span className="pin mexico">Mexico</span>
            <span className="pin colombia">Colombia</span>
            <span className="pin usa">USA</span>
          </div>
          <div className="coverage-copy">
            <p>{t("coverage.copy")}</p>
            <a className="text-link" href="#contact">{t("coverage.link")}</a>
          </div>
        </div>
      </section>

      <section className="industries section" id="industries">
        <div className="section-heading">
          <p className="eyebrow">{t("industries.eyebrow")}</p>
          <h2>{t("industries.title")}</h2>
        </div>
        <div className="industry-list">
          {[
            "Automotive","Food & Beverage","AI","Technology","App Development",
            "Beauty","Healthcare","Finance","Retail","Telecom",
            "Education","Travel & Tourism","Media & Entertainment",
            "Pharma","Insurance","Real Estate","E-commerce",
            "Consumer Goods","Energy","Logistics",
          ].map((ind) => (
            <span key={ind}>{ind}</span>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <div>
          <p className="eyebrow">{t("quote.eyebrow")}</p>
          <h2>{t("quote.title")}</h2>
        </div>
        <a className="button primary" href="#contact">{t("quote.cta")}</a>
      </section>

      <section className="contact section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">{t("contact.eyebrow")}</p>
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.copy")}</p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
