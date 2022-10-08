import React from "react";
import "./styles.scss";

export function SocialNetwork({socialNetwork}){
    return(
        <div className="socialNetwork">
            <a className="socialNetwork__a" aria-label={socialNetwork.name} href={socialNetwork.url} target="_blank" rel='noreferrer'>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon={socialNetwork.name}
                    className="socialNetwork__svg" role="img"
                    viewBox="0 0 496 512">
                    <path className="socialNetwork__path"
                        d={socialNetwork.d}>
                    </path>
                </svg>
            </a>
        </div>
    )
}