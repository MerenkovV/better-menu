'use strict';

const menuBody = document.querySelector('.header__list');

document.addEventListener("click", menu);

function menu(event){
    
    if(event.target.closest('.header__burger')){
        menuBody.classList.toggle('_active');
        console.log("HEY!");
        return 0;
    }
    if(event.target.closest('.header__list')){
        return 0;
    }
    if(event.target.closest('.body')){
        menuBody.classList.remove('_active');
    }
}