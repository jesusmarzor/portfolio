export default function useMenu(refHeader, refBurger, refNav){   
    const actionMenu = () => {
        if(refBurger.current.classList.contains('open')){
            refBurger.current.classList.remove('open');
            refHeader.current.classList.remove('deploy');
            refNav.current.classList.remove('show');
        }else{
            refBurger.current.classList.add('open');
            refHeader.current.classList.add('deploy');
            refNav.current.classList.add('show');
            window.addEventListener('scroll', () => {
                refBurger.current.classList.remove('open');
                refHeader.current.classList.remove('deploy');
                refNav.current.classList.remove('show');
            });
        }
    }
    return actionMenu;
}