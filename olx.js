const buttons = document.querySelectorAll('.form-btn')

const loginForm = document.querySelector('.login-form')

const crossBtn = document.querySelectorAll('.cross-btn')

const burgerBtn = document.querySelector('.burger-btn')

const menuDiv = document.querySelector('.mobile-menu')

const locationSearch = document.querySelector('#locations')

const locationItems = document.querySelector('.focus-items')

crossBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        loginForm.classList.add('hidden')
        document.body.classList.remove('overflow-hidden')
    })
})

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        loginForm.classList.remove('hidden')
        menuDiv.classList.add('hidden')
        document.body.classList.add('overflow-hidden')
    })
})

burgerBtn.addEventListener('click', () => {
    menuDiv.classList.toggle('hidden')
    document.body.classList.toggle('overflow-hidden')

})


locationSearch.addEventListener('focus', () => {
    locationItems.classList.remove('hidden')

})
locationSearch.addEventListener('blur', () => {
    locationItems.classList.add('hidden')

})