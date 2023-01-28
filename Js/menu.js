const hambuerguerIcon = document.querySelector('.nav__hamburguer')

const navOverlay = document.querySelector('.nav__overlay')

hambuerguerIcon.addEventListener('click', () => {
    hambuerguerIcon.classList.toggle('nav__hamburguer--open')

    navOverlay.classList.toggle('nav__overlay--show')
})