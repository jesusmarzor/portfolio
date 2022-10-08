import React from "react";
import Project from "./Project";
import { Element } from "react-scroll";
import { PROJECTS_ES, PROJECTS_EN, LANGUAGES } from "@/utils/Constans";
import "./styles.scss";
import { useTranslation } from "react-i18next";

export function Projects(){
    const { t, i18n } = useTranslation();
    return(
        <Element name="projects" className="projects">
            <div className="projects__resize">
                <div className="projects__title">
                    <p className="projects__p">{t('projects')}</p>
                </div>
                <div className="projects__list">
                    {
                        (i18n.language === LANGUAGES.ES)
                        ?
                            PROJECTS_ES.map( project => {
                                return <Project key={project.title} project={project}/>
                            })
                        :
                            PROJECTS_EN.map( project => {
                                return <Project key={project.title} project={project}/>
                            })
                    }
                </div>
            </div>
        </Element>
    )
}