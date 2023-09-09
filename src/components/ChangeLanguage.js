import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  setPersianLanguage,
  setEnglishLanguage,
} from "../redux/features/layoutSlice";
import translationEN from "../locales/en/translation.json";
import translationFA from "../locales/fa/translation.json";
import { initReactI18next } from "react-i18next";

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguageHandler = (languageValue) => {
    i18n.changeLanguage(languageValue);
  };

  useEffect(() => {
    const localLanguage = localStorage.getItem("language");
    i18n.changeLanguage(localLanguage);

    const resources = {
      en: {
        translation: translationEN,
      },
      fa: {
        translation: translationFA,
      },
    };

    if (localLanguage === "EN") {
      i18n.use(initReactI18next).init({
        resources,
        lng: "en",
      });
    } else {
      i18n.use(initReactI18next).init({
        resources,
        lng: "fa",
      });
    }
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          changeLanguageHandler("fa");
          dispatch(setPersianLanguage());
          localStorage.setItem("language", "FA");
        }}
      >
        فارسی
      </button>
      <button
        onClick={() => {
          changeLanguageHandler("en");
          dispatch(setEnglishLanguage());
          localStorage.setItem("language", "EN");
        }}
      >
        English
      </button>
    </div>
  );
};

export default ChangeLanguage;
