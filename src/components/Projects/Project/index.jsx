import React from "react";
import toDoList from "@/assets/img/to-do-list.webp";
import haleyDust from "@/assets/img/haley-dust.webp";
import wallet from "@/assets/img/wallet.webp";
import Button from "@/components/ui/Button";
import { useTranslation } from "react-i18next";
import { BUTTON_TYPES } from "@/utils/Constans";

import "./styles.scss";

function Project({project}){
    const { t } = useTranslation();
    const img = (project.title === "To do list") ? toDoList : (project.title === "Haley Dust") ? haleyDust : wallet;
    return(
        <div className="project">
            <img className="project__img" src={img} alt={project.title} loading="lazy" width="352" />
            <h2 className="project__title">{project.title}</h2>
            <div className="project__description">
                <p className="project__p">{project.description}</p>
            </div>
            <div className="project__buttons">
                <Button label={BUTTON_TYPES.A} to={project.links.github}>{t('code')}</Button>
                <Button label={BUTTON_TYPES.A} to={project.links.demo} inverse={true}>{t('page')}</Button>
            </div>
        </div>
    )
}

export default React.memo(Project);