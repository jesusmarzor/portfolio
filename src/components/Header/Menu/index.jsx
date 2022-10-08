import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import "./styles.scss";

export function Menu(){
    const { t } = useTranslation();
    return(
        <ul className="menu">
            <li className="menu__li" id="home"><Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={800} className="menu__button">{t('home')}</Link></li>
            <li className="menu__li" id="about"><Link activeClass="active" to="about" spy={true} smooth={true} offset={1} duration={800} className="menu__button">{t('about_me')}</Link></li>
            <li className="menu__li" id="portfolio"><Link activeClass="active" to="projects" spy={true} smooth={true} offset={2} duration={800} className="menu__button">{t('projects')}</Link></li>
            <li className="menu__li" id="contact"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={3} duration={800} className="menu__button">{t('contact')}</Link></li>
        </ul>
    )
}