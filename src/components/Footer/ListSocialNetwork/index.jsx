import React from "react";
import { SOCIAL_NETWORKS } from "@/utils/Constans";
import { SocialNetwork } from "../SocialNerwork";
import "./styles.scss";

export function ListSocialNetwork(){
    return(
        <nav>
            <ul className="listSocialNetwork">
                <li className="listSocialNetwork__li">
                    {
                        SOCIAL_NETWORKS.map( socialNetwork => {
                            return <SocialNetwork key={socialNetwork.name} socialNetwork={socialNetwork}/>
                        })
                    }
                </li>
            </ul>
        </nav>
    )
}