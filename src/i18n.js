import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import { en } from "./assets/i18n/en"
import { es } from "./assets/i18n/es"

const resources = {
    es: {
        translation: es
    },
    en: {
        translation: en
    }

};
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng:'en',
        interpolation: {
            escapeValue:false
        }
    });