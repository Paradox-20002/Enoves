"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export const LANGUAGE_OPTIONS = [
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
  { code: "ur", label: "اردو", flag: "🇵🇰" },
];

const DEFAULT_LANGUAGE = "en";
const STORAGE_KEY = "site-language";
const PROMPT_STORAGE_KEY = "translation-prompt-pref";
const GOOGLE_TRANSLATE_SCRIPT_ID = "google-translate-script";
const GOOGLE_TRANSLATE_ELEMENT_ID = "google_translate_element";
const SUPPORTED_CODES = LANGUAGE_OPTIONS.map((l) => l.code);

const TranslationContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  ready: false,
  languages: LANGUAGE_OPTIONS,
  detectedLanguage: DEFAULT_LANGUAGE,
  promptLanguage: null,
  promptVisible: false,
  dismissPrompt: () => {},
  acceptPrompt: () => {},
});

function normalizeLanguageCode(code) {
  if (!code) return DEFAULT_LANGUAGE;
  const lower = code.toLowerCase();
  if (SUPPORTED_CODES.includes(lower)) return lower;

  const [primary] = lower.split(/[-_]/);
  if (SUPPORTED_CODES.includes(primary)) return primary;

  return DEFAULT_LANGUAGE;
}

function detectNavigatorLanguage() {
  if (typeof navigator === "undefined") return DEFAULT_LANGUAGE;

  const candidates = [
    ...(navigator.languages || []),
    navigator.language,
    navigator.userLanguage,
    navigator.browserLanguage,
  ].filter(Boolean);

  for (const candidate of candidates) {
    const normalized = normalizeLanguageCode(candidate);
    if (normalized) return normalized;
  }

  try {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    return normalizeLanguageCode(locale);
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function readStoredLanguage() {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage?.getItem(STORAGE_KEY);
    return stored ? normalizeLanguageCode(stored) : null;
  } catch {
    return null;
  }
}

function applyLanguageToGoogleTranslate(code) {
  const combo = document.querySelector("select.goog-te-combo");
  if (!combo) return false;

  const nextValue = code === DEFAULT_LANGUAGE ? "en" : code;
  combo.value = nextValue;
  combo.dispatchEvent(new Event("change", { bubbles: true }));
  return true;
}

export default function TranslationProvider({ children }) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [ready, setReady] = useState(false);
  const detectionRanRef = useRef(false);
  const [detectedLanguage, setDetectedLanguage] = useState(DEFAULT_LANGUAGE);
  const [promptLanguage, setPromptLanguage] = useState(null);
  const [promptVisible, setPromptVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || detectionRanRef.current) return;
    detectionRanRef.current = true;
    const detected = detectNavigatorLanguage();
    setDetectedLanguage(detected);

    const storedLanguage = readStoredLanguage();
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } else {
      setLanguage(DEFAULT_LANGUAGE);
      try {
        const promptPreference =
          window.localStorage?.getItem(PROMPT_STORAGE_KEY);
        if (!promptPreference && detected !== DEFAULT_LANGUAGE) {
          setPromptLanguage(detected);
          setPromptVisible(true);
        }
      } catch {
        if (detected !== DEFAULT_LANGUAGE) {
          setPromptLanguage(detected);
          setPromptVisible(true);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initTranslateElement = () => {
      if (
        window.google?.translate?.TranslateElement &&
        !window.__googleTranslateElementInstance
      ) {
        window.__googleTranslateElementInstance =
          new window.google.translate.TranslateElement(
            {
              pageLanguage: DEFAULT_LANGUAGE,
              autoDisplay: false,
              includedLanguages: SUPPORTED_CODES.join(","),
            },
            GOOGLE_TRANSLATE_ELEMENT_ID
          );
      }

      if (window.__googleTranslateElementInstance) {
        setReady(true);
        return true;
      }
      return false;
    };

    if (initTranslateElement()) return;

    window.googleTranslateElementInit = () => {
      initTranslateElement();
    };

    if (!document.getElementById(GOOGLE_TRANSLATE_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = GOOGLE_TRANSLATE_SCRIPT_ID;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage?.setItem(STORAGE_KEY, language);
    } catch {
      // ignore storage errors
    }
    window.dispatchEvent(
      new CustomEvent("languagechange", { detail: language })
    );
  }, [language]);

  useEffect(() => {
    if (!ready || typeof window === "undefined") return;

    let cancelled = false;
    let attempts = 0;

    const tryApply = () => {
      if (cancelled) return;

      const applied = applyLanguageToGoogleTranslate(language);
      if (!applied && attempts < 10) {
        attempts += 1;
        setTimeout(tryApply, 250);
      }
    };

    tryApply();

    return () => {
      cancelled = true;
    };
  }, [language, ready]);

  const persistPromptStatus = useCallback((status) => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage?.setItem(PROMPT_STORAGE_KEY, status);
    } catch {
      // ignore preference storage issues
    }
  }, []);

  const changeLanguage = useCallback(
    (code) => {
      const normalized = normalizeLanguageCode(code);
      setLanguage(normalized);
      setPromptVisible(false);
      setPromptLanguage(null);
      persistPromptStatus("accepted");
    },
    [persistPromptStatus]
  );

  const dismissPrompt = useCallback(() => {
    setPromptVisible(false);
    persistPromptStatus("dismissed");
  }, [persistPromptStatus]);

  const acceptPrompt = useCallback(() => {
    if (!promptLanguage) return;
    changeLanguage(promptLanguage);
  }, [changeLanguage, promptLanguage]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: changeLanguage,
      ready,
      languages: LANGUAGE_OPTIONS,
      detectedLanguage,
      promptLanguage,
      promptVisible,
      dismissPrompt,
      acceptPrompt,
    }),
    [
      language,
      changeLanguage,
      ready,
      detectedLanguage,
      promptLanguage,
      promptVisible,
      dismissPrompt,
      acceptPrompt,
    ]
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
      <div id="google_translate_container" aria-hidden="true">
        <div id={GOOGLE_TRANSLATE_ELEMENT_ID} />
      </div>
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
