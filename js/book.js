let btn = document.querySelector('.navbar-js__btn')
let menu = document.querySelector('.navbar-menu__items')
btn.onclick = () => {
    menu.classList.toggle('navbar-active')
}
let next = document.querySelector('.next')
let fool = document.querySelector('.fool')
let scrol = document.querySelector('.malumot-footer-scroll-content')

next.onclick = () => {
    scrol.classList.add('malumot-next')
    scrol.classList.remove('malumot-fool')
}
fool.onclick = () => {
    scrol.classList.add('malumot-fool')
    scrol.classList.remove('malumot-next')
}