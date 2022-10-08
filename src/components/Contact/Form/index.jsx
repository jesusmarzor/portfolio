import React from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/Contact/Form/Input";
import Message from "@/components/Contact/Form/Message";
import useFormspree from "@/hooks/useFormspree";
import { useTranslation } from "react-i18next";
import { BUTTON_TYPES, FORM } from "@/utils/Constans";

import "./styles.scss";

export function Form(){
    const { t } = useTranslation();
    const {setName, setEmail, setMessage, state, response, errors, sendMail, changeData, loading} = useFormspree();
    
    return(
        <form className="form" onSubmit={ sendMail }>
            <Input label={t('name')} name={FORM.NAME} changeData={changeData} setData={setName} type="text" placeholder={t('placeholder_name')} error={errors.name}/>
            <Input label={t('email')} name={FORM.EMAIL} changeData={changeData} setData={setEmail} type="text" placeholder={t('placeholder_email')} error={errors.email}/>
            <Input label={t('message')} name={FORM.MESSAGE} changeData={changeData} setData={setMessage} type="message" placeholder={t('placeholder_message')} error={errors.message}/>
            <Button label={BUTTON_TYPES.LOADING} disabled={state.submitting}>{(loading) ? t('loading') : t('send')}</Button>
            <div className="form__response">
                {
                    (response !== null)
                    ?
                        (response)
                        ?
                            <Message result="success">{t('success_sent')}</Message>
                        :
                            <Message result="error">{t('error_sent')}</Message> 
                    :
                        null
                }
            </div>
        </form>
    )
}