import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "@/utils/Constans";
import englandFlag from "@/assets/img/flags/england.png";
import spainFlag from "@/assets/img/flags/spain.png";
import "./styles.scss";

export function Translation(){
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        const lang = (i18n.language !== LANGUAGES.ES) ? LANGUAGES.ES : LANGUAGES.EN;
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
    }

    return <button className="translation" onClick={changeLanguage}><img src={(i18n.language !== LANGUAGES.ES) ? spainFlag : englandFlag} alt={t('alt_flag')} width={35}/></button>
}