import React from "react";
import { Element } from "react-scroll";
import CV_ES from "@/assets/CV/CV-Jesus-Martin-ES.pdf";
import CV_EN from "@/assets/CV/CV-Jesus-Martin-EN.pdf";
import Button from "@/components/ui/Button";
import useMenu from "@/hooks/useMenu";
import { BUTTON_TYPES, LANGUAGES } from "@/utils/Constans";
import { useTranslation } from 'react-i18next';

import "./styles.scss";

export function About(){
    const actionMenu = useMenu();
    const { t, i18n } = useTranslation();
    return (
        <Element name="about" className="about" onClick={actionMenu}>
            <div className="about__title">
                <p className="about__p">{t('about_me')}</p>
            </div>
            <div className="about__content content">
                <p className="content__p">{t('about_p1')}</p>
                <p className="content__p">{t('about_p2')}</p>
                <p className="content__p">{t('about_p3')}</p>
                <div className="content__buttons">
                    <Button label={BUTTON_TYPES.A} to="https://blog-jesusmarzor.vercel.app">{t('blog')}</Button>
                    <Button label={BUTTON_TYPES.DOWNLOAD} download="CV-Jesus-Martin" to={(i18n.language === LANGUAGES.ES) ? CV_ES : CV_EN} inverse={true}>{t('download_cv')}</Button>
                </div>
            </div>
        </Element>
    )
}