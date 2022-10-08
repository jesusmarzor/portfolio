import React, { useRef } from "react";
import { Burger } from "@/components/Header/Burger";
import { Nav } from "@/components/Header/Nav";
import useMenu from "@/hooks/useMenu";
import "./styles.scss";

export function Header(){
    const refHeader = useRef(null);
    const refBurger = useRef(null);
    const refNav= useRef(null);
    const actionMenu = useMenu(refHeader, refBurger, refNav);
    return(
        <header className="header" ref={refHeader}>
            <Burger refBurger={refBurger} actionMenu={actionMenu}/>
            <Nav refNav={refNav} actionMenu={actionMenu}/>
        </header>
    )
}