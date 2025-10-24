"use client";

import { useEffect, useRef, useState } from "react";

const LANGS = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export default function LanguageSwitcher () {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const ref = useRef(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("site-language");
      if (stored) setLang(stored);
      else if (navigator.language) setLang(navigator.language.slice(0, 2));
    } catch (e) { }
  }, []);

  useEffect(() => {
    function onDoc (e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  function select (code) {
    setLang(code);
    try {
      localStorage.setItem("site-language", code);
    } catch (e) { }
    setOpen(false);
    // dispatch event so other parts of app can react
    window.dispatchEvent(new CustomEvent("languagechange", { detail: code }));
  }

  const current = LANGS.find((l) => l.code === lang) || LANGS[0];

  return (
    <div className="lang-switcher" ref={ ref }>
      <button
        type="button"
        className="lang-btn"
        aria-haspopup="menu"
        aria-expanded={ open }
        onClick={ () => setOpen((s) => !s) }
      >
        <span className="flag">{ current.flag }</span>
        <span className="sr-only">Language</span>
        <span className="caret">▾</span>
      </button>

      { open && (
        <ul className="lang-menu" role="menu">
          { LANGS.map((l) => (
            <li key={ l.code } role="menuitem">
              <button
                type="button"
                className={ `lang-item ${l.code === lang ? "active" : ""}` }
                onClick={ () => select(l.code) }
              >
                <span className="flag">{ l.flag }</span>
                <span className="label">{ l.label }</span>
              </button>
            </li>
          )) }
        </ul>
      ) }
    </div>
  );
}
