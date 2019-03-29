//require('es6-promise').polyfill();
//require('nodelist-foreach-polyfill');
//require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => { // ES6
    'use strict';
    
    function modal (){
        
        let modalWindow = document.querySelector('.popup_engineer'),            
            popupClose = document.querySelectorAll('.popup_close'),
            btn = document.querySelector('.header_btn');    
        btn.addEventListener('click', () => { // ES6
            
            modalWindow.style.display = 'block';
            document.body.style.overflow = 'hidden';          
            
        });
        window.addEventListener('click', (e) =>{
            if (e.target == modalWindow){
                          
                modalWindow.style.display = 'none';
                document.body.style.overflow = '';
                    
                
            }
        });    
        for (let i = 0; i < popupClose.length; i++){
            popupClose[i].addEventListener('click', () => { // ES6            
                modalWindow.style.display = 'none';
                document.body.style.overflow = '';
            });
        }
        
    }
    modal();
        
});
