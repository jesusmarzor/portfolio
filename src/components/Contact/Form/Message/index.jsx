import React from "react";
import "./styles.scss";

function Message({result, children}){
    return <p className={ (result === "error") ? "error" : "success"}>{children}</p>
}

export default React.memo(Message);