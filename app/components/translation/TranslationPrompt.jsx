"use client";

import { useMemo } from "react";
import { useTranslation } from "../../translation/TranslationProvider";

export default function TranslationPrompt() {
  const {
    promptVisible,
    promptLanguage,
    languages,
    acceptPrompt,
    dismissPrompt,
  } = useTranslation();

  const targetLanguage = useMemo(() => {
    if (!promptLanguage) return null;
    return (
      languages.find((lang) => lang.code === promptLanguage) || {
        code: promptLanguage,
        label: promptLanguage.toUpperCase(),
      }
    );
  }, [languages, promptLanguage]);

  if (!promptVisible || !promptLanguage || !targetLanguage) {
    return null;
  }

  return (
    <div className="translation-banner" role="alert">
      <div className="translation-banner__content">
        <div className="translation-banner__text">
          <p className="translation-banner__title">Translate this page?</p>
          <p className="translation-banner__subtitle">
            We detected your browser language as {targetLanguage.label}. You can
            instantly view this page in {targetLanguage.label}.
          </p>
        </div>
        <div className="translation-banner__actions">
          <button
            type="button"
            className="translation-banner__btn translation-banner__btn--ghost"
            onClick={dismissPrompt}
          >
            Not now
          </button>
          <button
            type="button"
            className="translation-banner__btn translation-banner__btn--primary"
            onClick={acceptPrompt}
          >
            Translate to {targetLanguage.label}
          </button>
        </div>
      </div>
    </div>
  );
}
