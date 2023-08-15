import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as langs from "./locales/locales.jsx";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: langs.ENGLISH,
  },
  ar: {
    translation: langs.ARABIC,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng"),
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
export default i18n;
