function modal (){
    "use strict";
    let modalWindow = document.querySelector('.popup_engineer'),        
        popupClose = document.querySelector('.popup_close'),
        btn = document.querySelector('.header_btn');

        btn.addEventListener('click', () => { // ES6
            alert(1);
            modalWindow.classList.add('d-block');
            document.body.style.overflow = 'hidden';          
            
        });
        
    

    
    popupClose.addEventListener('click', () => { // ES6
        
        modalWindow.classList.remove('d-block');
        document.body.style.overflow = '';
    });
}

module.exports = modal;