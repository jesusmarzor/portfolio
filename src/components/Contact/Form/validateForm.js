export default function validationForm (name,email,message, setError, t){
    let errors = {};
    if(name.length === 0) {
        errors.name = t('error_name');
    }
	if(!(/^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/).exec(email)){
		errors.email = t('error_email');
    }
    if(message.length === 0) {
        errors.message = t('error_message');
    }
    if(Object.keys(errors).length === 0){
        return true;
    }else{
        setError(errors);
        return false;
    }
}