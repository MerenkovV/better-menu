'use strict';

const menuBody = document.querySelector('.header__list');
const Burger = document.querySelector('.header__burger');
document.addEventListener("click", menu);

function menu(event){
    
    if(event.target.closest('.header__button')){
        menuBody.classList.toggle('_active');
        Burger.classList.toggle('_active');
        return 0;
    }
    if(event.target.closest('.header__list')){
        return 0;
    }
    if(event.target.closest('.body')){
        menuBody.classList.remove('_active');
        Burger.classList.remove('_active');
    }
}