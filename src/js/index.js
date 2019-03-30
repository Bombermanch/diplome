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
    function timer(){
        "use strict";    
        function getNormalisedDatetime(dString) { // yyyy-mm-dd hh:mm:ss
            let parts = dString.split(" "),
                dParts = parts[0].split("-"),
                tParts = parts[1].split(":");
            return new Date(dParts[0],dParts[1]-1,dParts[2],tParts[0],tParts[1],tParts[2]);
        }    
        let deadline = getNormalisedDatetime('2019-12-18 09:00:00');
        function getTimeRemaining(endtime){
            let t = Date.parse(endtime) - Date.parse(new Date());
            if (t < 0){
                t = 0;
        }
        let seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60) % 24),
            days = Math.floor((t/(1000*60*60*24)));
    
            return {
                'total' : t,
                'days' : days,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
        }
        
    
        function setClock(id, endtime){
            let timer = document.getElementById(id),
                days = timer.querySelector('.days'),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);
    
            function updateClock() {
                let t = getTimeRemaining(endtime);
                days.textContent = t.days;
                if (t.days < 10) days.textContent = `0${t.days}`;   // ES6  
                hours.textContent = t.hours;
                if (t.hours < 10) hours.textContent = `0${t.hours}`;   // ES6  
                minutes.textContent = t.minutes;
                if (t.minutes < 10) minutes.textContent = `0${t.minutes}`; // ES6
                seconds.textContent = t.seconds;
                if (t.seconds < 10) seconds.textContent = `0${t.seconds}`; // ES6
                
    
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }
        setClock('timer', deadline);
    }
    
    timer();
        
});
