import React from "react";
import Message from "@/components/Contact/Form/Message";
import { FORM } from "@/utils/Constans";

import "./styles.scss";

function Input({label, name, changeData, setData, type, placeholder, error}){
    return(
        <div className="input">
            <label htmlFor={name} className="input__label">{label}</label>
            {
                (name === FORM.MESSAGE)
                ? <textarea onChange={ e => changeData({e,setData})} className="input__text input__text--area" id={name} name={name} placeholder={placeholder}></textarea>
                : <input onChange={ e => changeData({e,setData})} type={type} className="input__text" id={name} name={name} placeholder={placeholder}/>
            }
            <div className="input__error">
                <Message result="error">{error}</Message>
            </div>
        </div>
    )
}

export default React.memo(Input);