import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    country: "",
    methodology: "",
    details: "",
  });

  function handleChange(e) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("JRJ Research quote request");
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\nCountry: ${fields.country}\nMethodology: ${fields.methodology}\n\nProject details:\n${fields.details}`
    );
    setStatus(t("form.ready"));
    window.location.href = `mailto:hello@jrjresearch.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>{t("form.name")}</span>
        <input name="name" autoComplete="name" required value={fields.name} onChange={handleChange} />
      </label>
      <label>
        <span>{t("form.email")}</span>
        <input type="email" name="email" autoComplete="email" required value={fields.email} onChange={handleChange} />
      </label>
      <label>
        <span>{t("form.country")}</span>
        <select name="country" required value={fields.country} onChange={handleChange}>
          <option value="">Select</option>
          <option>Mexico</option>
          <option>Colombia</option>
          <option>United States</option>
          <option>Regional / Multi-country</option>
        </select>
      </label>
      <label>
        <span>{t("form.methodology")}</span>
        <select name="methodology" required value={fields.methodology} onChange={handleChange}>
          <option value="">Select</option>
          <option>Focus Groups</option>
          <option>IDIs</option>
          <option>Expert Interviews</option>
          <option>Ethnographies</option>
          <option>Usability Testing</option>
          <option>Other</option>
        </select>
      </label>
      <label className="full">
        <span>{t("form.details")}</span>
        <textarea name="details" rows="5" required value={fields.details} onChange={handleChange}></textarea>
      </label>
      <button className="button primary full" type="submit">
        {t("form.submit")}
      </button>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
