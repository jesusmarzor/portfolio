import React from "react";
import { Link } from "react-scroll";
import { Spinner } from "@/components/ui/Spinner";
import { BUTTON_TYPES } from "@/utils/Constans";
import { useTranslation } from "react-i18next";
import "./styles.scss";

function Button({label, to, inverse = false, download, disabled=false, children}){
    const { t } = useTranslation();
    switch(label){
        case BUTTON_TYPES.A:
            return <a className={ (inverse) ? "button button--inverse" : "button"} href={to} target="_blank" rel='noreferrer' title={children}>{children}</a>
        case BUTTON_TYPES.DOWNLOAD:
            return <a className={ (inverse) ? "button button--inverse" : "button"} href={to} rel='noreferrer' download={download} title={children}>{children}</a>
        case BUTTON_TYPES.LINK:
            return <Link to={to} spy={true} smooth={true} offset={3} duration={800} className={ (inverse) ? "button button--inverse" : "button"}>{children}</Link>
        case BUTTON_TYPES.INPUT:
            return <input type="submit" className={ (inverse) ? "button button--inverse" : "button"} name="send" value={children} />
        case BUTTON_TYPES.LOADING:
            return <button className={ (inverse) ? "button button--inverse" : "button"} disabled={disabled}>{ (children === t('loading')) ? <Spinner min={true}/> : children}</button>
        default:
            return <button>{children}</button>
    }
}

export default React.memo(Button);