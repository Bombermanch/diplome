//require('es6-promise').polyfill();
//require('nodelist-foreach-polyfill');
//require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => { // ES6
    'use strict';
    
    function modal (windowClass, btnCallWindow, closeBtn, closeClickOverlay){
        
        let modalWindow = document.querySelector(`.${windowClass}`),            
            popupClose = document.querySelectorAll(`.${closeBtn}`),
            btn = document.querySelectorAll(`.${btnCallWindow}`); 
        
            
        
        
        
        for(let i = 0; i < btn.length; i++){
            btn[i].addEventListener('click', (e) => { // ES6
                e.preventDefault();
                modalWindow.style.display = 'flex';
                document.body.style.overflow = 'hidden';        
                
            });
        }
          
        function closeWindowClickOverlay(){
            window.addEventListener('click', (e) =>{
            
                if (e.target == modalWindow){
                              
                    modalWindow.style.display = 'none';
                    document.body.style.overflow = '';
                        
                    
                }
            });
        }
        if(closeClickOverlay){
            closeWindowClickOverlay();
        }
        
       
          
        for (let i = 0; i < popupClose.length; i++){
            popupClose[i].addEventListener('click', () => { // ES6            
                modalWindow.style.display = 'none';
                document.body.style.overflow = '';
                function ClearInput(){
                    let input = modalWindow.getElementsByTagName('input');                        
                    for(let i = 0; i < input.length; i++){
                        input[i].value = '';
                    }
                    
                }
                ClearInput();
            });
        }      
        
    }
    function validPhone(){
            
        let phone = document.getElementsByName('user_phone');
        for(let i = 0; i < phone.length; i++){
            phone[i].addEventListener('input', () =>{
                if(!validation(phone[i].value)){                
                    phone[i].value = phone[i].value.slice(0,-1);                    
                    
                }            
            });           
            
        }
        function validation (input)  {
    
            return /(^(8|\+7)\d{0,10}|^\+\d{0,11})$/.test(input);
        }
    }
    validPhone();
    modal('popup_engineer','header_btn', 'popup_close', true);
    modal('popup','phone_link', 'popup_close', true);    
    setTimeout(function(){
        let modalWindow = document.querySelector('.popup');
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 60000); 
    
    
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

    function tabs(tabItemClass, tabItemBlockClass, contentClass, tabItemClassActive ){
        let tab = document.querySelectorAll(`.${tabItemClass}`),
        info = document.querySelector(`.${tabItemBlockClass}`),
        tabContent = document.querySelectorAll(`.${contentClass}`);
        
        function hideTabContent(a){
            for (let i = a; i < tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide'); 
                tab[i].classList.remove(tabItemClassActive);           
            }
        }
        
        hideTabContent(1);
        
        

        function showTabContent(b){
            if (tabContent[b].classList.contains('hide')){
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
                
                tab[b].classList.add(tabItemClassActive);
            }
        }

        info.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target;        
            if (target && target.classList.contains(tabItemClass)){
                for (let i = 0; i < tab.length; i++){
                    if (target == tab[i]){
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }
    tabs('info-header-tab', 'glazing_slider', 'info-tabcontent', 'active');
    tabs('decoration_item_link', 'decoration_slider', 'info-tabcontent_decoration', 'after_click');
    
    function calculator(){
        let callCalcBtnCold = document.querySelectorAll('.cold_btn'),
            callCalcBtnWarm = document.querySelectorAll('.warm_btn'),
            callCalcBtnPlast = document.querySelectorAll('.plast_btn'),
            callCalcBtnAlum = document.querySelectorAll('.alum_btn'),
            callCalcBtnTree = document.querySelectorAll('.tree_btn'),
            glazingPriceBtns = document.querySelectorAll('.glazing_price_btn');
        modal('popup_calc','popup_calc_btn', 'popup_close');
        modal('popup_calc_profile','popup_calc_button', 'popup_close');
        modal('popup_calc_end','popup_calc_profile_button', 'popup_close');  
        tabs('icon', 'balcon_icons', 'big_img_item', 'choose');        
            /* первое окно*/
        let popupCalc = document.querySelector('.popup_calc'),
            popupCalcBtn = document.querySelector('.popup_calc_button'),
            balconeType = document.querySelectorAll('.balcone_type'),
            width = document.getElementById('width'),
            height = document.getElementById('height'),   
            /*второе окно*/
            popupCalcProfile = document.querySelector('.popup_calc_profile'),
            popupCalcProfileBtn = document.querySelector('.popup_calc_profile_button'),
            typeOfGlazing = document.querySelector('.popup_calc_profile_type'),
            cold = document.querySelector('.cold'),
            warm = document.querySelector('.warm'),            
            /*третье окно*/
            popupCalcEnd = document.querySelector('.popup_calc_end'),           
            popupCalcEndBtn = document.querySelector('.popup_calc_end_button'),
            userName = document.getElementsByName('user_name')[8],
            userPhone = document.getElementsByName('user_phone')[8],
            /*крестики*/
            popupClose = document.querySelectorAll('.popup_close'),                   
            
            data = {
                cold: true,                
                profileGlazing: "",               
                warm: false,
                
            };
            
            function autoCheck(){
                for (let i = 0; i < callCalcBtnCold.length; i++){
                    callCalcBtnCold[i].addEventListener('click', function(){                      
                        
                        
                        cold.checked = true;
                        warm.checked = false;
                                  
                        
                    });
                }
                for (let i = 0; i < callCalcBtnWarm.length; i++){
                    callCalcBtnWarm[i].addEventListener('click', function(){
                        warm.checked = true;
                        cold.checked = false;                   
                        
                    });
                }   
            }
            
            autoCheck();
            
            function autoSelect(){                
                 for(let i = 0; i < glazingPriceBtns.length; i++){
                    glazingPriceBtns[i].addEventListener('click', function(){
                        typeOfGlazing.options[i].selected = true;
                    });
                 }
                
            }
            
            autoSelect();
            
            
            cold.addEventListener('change', function(){
                if(cold.checked) warm.checked = false;
            });
            warm.addEventListener('change', function(){
                if(warm.checked) cold.checked = false;
        
            });
        
        
            
        function validCounterBlockInput(input){
        
            return /^\d+$/.test(input);
        }
        if (width.value == ''){
            popupCalcBtn.style.display = 'none';          

        }        
        width.addEventListener('input', function(){
            if (width.value == ''){
                popupCalcBtn.style.display = 'none';
                
            } else if (width.value != '' && validCounterBlockInput(width.value) && width.value != '' && validCounterBlockInput(height.value)){
                popupCalcBtn.style.display = 'inline-flex';
            }
            else if (!validCounterBlockInput(width.value)){
                width.value = width.value.slice(0, -1);
                                
            }
            
        });
        height.addEventListener('input', function(){
            if (height.value == ''){
                popupCalcBtn.style.display = 'none';
            } else if (width.value != '' && validCounterBlockInput(height.value)){
                popupCalcBtn.style.display = 'inline-flex';
            }
            else if (!validCounterBlockInput(height.value)){
                height.value = height.value.slice(0, -1);
                
            }
        });
        
            
             
        popupCalcBtn.addEventListener('click', function(){            
            data.widthInput = width.value;
            data.heightInput = height.value;            
            data.square = data.widthInput * data.heightInput;
            for(let i = 0; i < balconeType.length; i++){
                if(balconeType[i].classList.contains('choose')){
                    data.typeOfBalcone = balconeType[i].getAttribute('alt');
                }
            }
            
            
            
            popupCalc.style.display = 'none';
            

        });
        popupCalcProfileBtn.addEventListener('click', function(){
            for(let i = 0; i < typeOfGlazing.options.length; i++){
                if(typeOfGlazing.options[i].selected){
                    data.profileGlazing = typeOfGlazing.options[i].value;
                    
                }
                
            }
            if(cold.checked){
                data.cold = true;
                data.warm = false;
            }else{
                data.cold = false;
                data.warm = true;
            }
              
            
            
            popupCalcProfile.style.display = 'none';
                    
        });
        popupCalcEndBtn.addEventListener('click', function(e){
            data.name =  userName.value;
            data.phone =  userPhone.value;
            e.preventDefault();           
            popupCalcEnd.style.display = 'none'; 
            console.log(data);

            
        });
        for(let i = 0; i < popupClose.length; i++){
            popupClose[i].addEventListener('click', function(){
                data = {};
                popupCalcBtn.style.display = 'none';

            });
        }
             
    }  
    calculator(); 

    function ajax(){
        // send form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };
    
    let form = document.querySelectorAll('.main_form'),        
        input = document.getElementsByTagName('input'),        
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function(resolve, reject){
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    
                    
                    

                    request.onreadystatechange = function(){
                        if (request.readyState < 4){
                            resolve();
                        } else if(request.readyState === 4){
                            if (request.status == 200 && request.status < 300){
                                resolve();
                            }
                            else{
                                reject();
                            }
                        }
                    }
                    let obj = {};
                    data.forEach(function(value, key){
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    request.send(json);
                })
            } // end postData

            function clearInput(){
                for(let i = 0; i < input.length; i++){
                    input[i].value = '';
                }
            }

            postData(formData)
                    .then(() => statusMessage.innerHTML = message.loading)
                    .then(() => statusMessage.innerHTML = message.success)
                    .catch(() => statusMessage.innerHTML = message.failure)
                    .then(clearInput());
                    
        });
    }
        for (let i = 0; i < form.length; i++){
            sendForm(form[i]);
        }
    
   
    }
    ajax();

    
    
});
