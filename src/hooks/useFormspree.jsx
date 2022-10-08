import {useRef, useState, useEffect, useCallback} from "react";
import validationForm from "@/components/Contact/Form/validateForm";
import { useForm } from '@formspree/react';
import { useTranslation } from "react-i18next";

export default function useFormspree(){
    const { t } =  useTranslation();
    const [mounted, setMounted] = useState(false);
    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [state, handleSubmit] = useForm(import.meta.env.VITE_ID_FORM);
    const [response, setResponse] = useState(null);
    useEffect( () => {
        if(!mounted){
            setMounted(true);
        }else{
            console.log("enviado")
            setLoading(state.submitting);
            if(state.submitting === false){
                setResponse(state.succeeded);
                setTimeout(()=>{
                    setResponse(null);
                },5000);
            }
        }
    },[state.submitting, state.succeeded]);

    const sendMail = useCallback((e) => {
        e.preventDefault();
        if(validationForm(name,email,message,setErrors, t)){
            handleSubmit(e);
            e.target.reset();
            setName("");
            setEmail("");
            setMessage("");
            setErrors({});
        }
    },[name, email, message, handleSubmit, t]);
    
    const changeData = useCallback(({e,setData}) => {
        setData(e.target.value);
    },[]);

    return {setName, setEmail, setMessage, state, response, errors, sendMail, changeData, loading}
}