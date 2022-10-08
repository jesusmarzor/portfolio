import { useEffect, useRef } from "react";
export default function useMode(){
    const refLight = useRef(null);
    const refDark = useRef(null);
    const checkMode = () => {
        if(localStorage.getItem('mode') === 'light'){
            refLight.current.classList.remove('show');
            refLight.current.classList.add('vanish');
            refDark.current.classList.add('show');
            refDark.current.classList.remove('vanish');
            document.body.classList.remove('dark');
        }else{
            refLight.current.classList.add('show');
            refLight.current.classList.remove('vanish');
            refDark.current.classList.remove('show');
            refDark.current.classList.add('vanish');
            document.body.classList.add('dark');
        }
    }
    useEffect( () => {
        if(localStorage.getItem('mode') === null){
            localStorage.setItem('mode','light');
        }
        checkMode();
    },[])
    const changeMode = () => {
        if(localStorage.getItem('mode') === "light"){
            localStorage.setItem('mode','dark');
        }else{
            localStorage.setItem('mode','light');
        }
        checkMode();
    }
    return {refLight, refDark, changeMode}
}