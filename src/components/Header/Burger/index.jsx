import React from "react";
import "./styles.scss";

export function Burger({actionMenu, refBurger}){
    return(
        <div ref={refBurger} className="burger" onClick={actionMenu}>
            <div className="burger__lines">
            </div>
        </div>
    )
}