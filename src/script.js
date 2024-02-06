const menuIcon = document.querySelector('#menuIcon')
const navBar = document.querySelector('nav')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
}
