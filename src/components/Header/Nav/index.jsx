import React from "react";
import { Menu } from "@/components/Header/Menu";
import { Mode } from "@/components/Header/Mode";
import "./styles.scss";
import { Translation } from "../Translation";

export function Nav({actionMenu, refNav}){
    return(
        <nav ref={refNav} className="nav" onClick={actionMenu}>
            <Menu/>
            <Mode/>
            <Translation/>
        </nav>
    )
}