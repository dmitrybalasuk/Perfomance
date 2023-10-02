const burger = document.querySelector('.burger__menu')
const list = document.querySelector('.header__list')

burger.addEventListener('click', () =>{
    list.classList.toggle('header__list--active')
})