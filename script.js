let burger = document.querySelector('.header__burger')
let menu = document.querySelector('.header__menu')
let span = document.querySelector('.header__burger__span')
let listen = document.querySelector('.listen')
let icons = document.querySelector('.header-main__texts__rectangle__icons')
let down = document.querySelector('.down')

burger.addEventListener('click',()=>{
   burger.classList.toggle('active')
   span.classList.toggle('active')  
   menu.classList.toggle('open')
})

listen.addEventListener('click',()=>{
   icons.classList.toggle('open')
})

