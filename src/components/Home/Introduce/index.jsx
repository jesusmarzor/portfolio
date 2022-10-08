import Button from "@/components/ui/Button";
import React from "react";
import { useTranslation } from "react-i18next";
import { BUTTON_TYPES } from "@/utils/Constans";
import "./styles.scss";

export function Introduce(){
    const { t } = useTranslation();
    return (
        <section className="introduce">
            <h1 className="introduce__h1"><span className="introduce__span">{t('before_name')}</span>{` ${t('my_name')}`}</h1>
            <p className="introduce__p">{t('my_work')}</p>
            <div className="introduce__button">
                <Button label={BUTTON_TYPES.LINK} to="contact">{t('write_me')}</Button>
            </div>
        </section>
    )
}