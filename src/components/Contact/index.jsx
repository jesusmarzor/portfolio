import React from "react";
import { Form } from "./Form";
import { Element } from "react-scroll";
import "./styles.scss";
import { useTranslation } from "react-i18next";

export function Contact(){
    const { t } = useTranslation();
    return(
        <Element name="contact" className="contact">
            <div className="contact__title">
                <p className="contact__p">{t('contact')}</p>
            </div>
            <Form/>
        </Element>
    )
}