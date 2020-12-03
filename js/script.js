const menuIcon = document.getElementsByClassName('header__menu')[0]

menuIcon.addEventListener('click', () => {
    document.getElementsByClassName('header__ul')[0].classList.toggle('header__ul--active')
})