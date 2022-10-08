import React from "react";
import { Introduce } from "@/components/Home/Introduce";
import image from "@/assets/img/perfil.webp";
import { Element } from "react-scroll";
import "./styles.scss";

export function Home(){
    return (
        <Element name="home" className="home">
            <div className="home__resize">
                <Introduce/>
                <div className="home__profile profile">
                    <img className="profile__img" src={image} alt="fotografía" width="520"/>
                </div>
            </div>
        </Element>
    )
}