const burger = document.querySelector('.header__nav_burger')
const close = document.querySelector('.overlow-close')
const backround = document.querySelector('.overlow')




const onOpenBurg = () => {
    backround.classList.toggle('overlow--active')
}

const onCloseBurg = () => {
    backround.classList.remove('overlow--active')
}

burger.addEventListener('click', onOpenBurg)
close.addEventListener('click', onCloseBurg)