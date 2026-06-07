import { createContext, useContext, useState, useEffect } from "react";
import translations from "./translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("jrj-lang") || "en"
  );

  useEffect(() => {
    localStorage.setItem("jrj-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  function t(key) {
    return translations[lang][key] || key;
  }

  function toggleLang() {
    setLang((l) => (l === "es" ? "en" : "es"));
  }

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
