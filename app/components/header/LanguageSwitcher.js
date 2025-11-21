"use client";

import { useEffect, useRef, useState } from "react";
import {
  LANGUAGE_OPTIONS,
  useTranslation,
} from "../../translation/TranslationProvider";

export default function LanguageSwitcher () {
  const { language, setLanguage, ready } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDoc (e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const current =
    LANGUAGE_OPTIONS.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  const toggleMenu = () => setOpen((s) => !s);

  const select = (code) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div className={`lang-switcher ${!ready ? "lang-switcher--loading" : ""}`} ref={ ref }>
      <button
        type="button"
        className="lang-btn"
        aria-haspopup="menu"
        aria-expanded={ open }
        aria-busy={ !ready }
        title={ ready ? "Select a language" : "Preparing translations…" }
        onClick={ toggleMenu }
      >
        <span className="flag">{ current.flag }</span>
        <span className="label">{ current.label }</span>
        <span className="caret">▾</span>
      </button>

      { open && (
        <ul className="lang-menu" role="menu">
          { LANGUAGE_OPTIONS.map((l) => (
            <li key={ l.code } role="menuitem">
              <button
                type="button"
                className={ `lang-item ${l.code === language ? "active" : ""}` }
                onClick={ () => select(l.code) }
                disabled={ l.code === language }
              >
                <span className="flag">{ l.flag }</span>
                <span className="label">{ l.label }</span>
                { l.code === language && <span className="current-tag">Active</span> }
              </button>
            </li>
          )) }
        </ul>
      ) }
    </div>
  );
}
