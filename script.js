const openNav = document.querySelector('#openNav')
const myNav = document.querySelector('#myNav')
const closeNav = document.querySelector('#closeNav')

openNav.addEventListener('click', () => {
    myNav.style.width = '100%'
})
closeNav.addEventListener('click', () => {
    myNav.style.width = '0%'

})
