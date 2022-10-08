import React from "react";
import { ListSocialNetwork } from "@/components/Footer/ListSocialNetwork";
import { useTranslation } from "react-i18next";

import "./styles.scss";

export function Footer(){
    const { t } = useTranslation();
    return(
        <footer className="footer">
            <ListSocialNetwork/>
            <div className="footer__copy">
            <p className="footer__p">{t('footer')}</p>
            </div>
        </footer>
    )
}