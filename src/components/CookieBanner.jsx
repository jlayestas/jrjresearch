import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function CookieBanner() {
  const { t } = useLanguage();
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem("jrj-cookies") === "accepted"
  );

  if (dismissed) return null;

  function accept() {
    localStorage.setItem("jrj-cookies", "accepted");
    setDismissed(true);
  }

  return (
    <div className="cookie-banner">
      <p>{t("cookie.copy")}</p>
      <button type="button" className="button small" onClick={accept}>
        {t("cookie.accept")}
      </button>
    </div>
  );
}
