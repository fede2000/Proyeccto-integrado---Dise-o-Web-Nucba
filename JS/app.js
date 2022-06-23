addEventListener('DOMContentLoaded',() =>{
    const btn__menu = document.querySelector('.btn__menu');
    btn__menu.addEventListener('click',() =>{
        const menu__items = document.querySelector('.menu__items');
        menu__items.classList.toggle('show')
    })
})
addEventListener('DOMContentLoaded',() =>{
    const btn__menu = document.querySelector('.btn__active');
    btn__menu.addEventListener('click',() =>{
        const menu__items = document.querySelector('.menu__items');
        menu__items.classList.toggle('show')
    })
})

