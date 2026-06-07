import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../i18n/LanguageContext";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
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

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus("");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: fields.name,
          from_email: fields.email,
          country: fields.country,
          methodology: fields.methodology,
          message: fields.details,
        },
        PUBLIC_KEY
      );
      setStatus(t("form.success"));
      setFields({ name: "", email: "", country: "", methodology: "", details: "" });
    } catch {
      setStatus(t("form.error"));
    } finally {
      setSending(false);
    }
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
          <option>LATAM</option>
          <option>United States</option>
          <option>Other regions</option>
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
          <option>Usability Testing / HUT</option>
          <option>Other</option>
        </select>
      </label>
      <label className="full">
        <span>{t("form.details")}</span>
        <textarea name="details" rows="5" required value={fields.details} onChange={handleChange}></textarea>
      </label>
      <button className="button primary full" type="submit" disabled={sending}>
        {sending ? t("form.sending") : t("form.submit")}
      </button>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
