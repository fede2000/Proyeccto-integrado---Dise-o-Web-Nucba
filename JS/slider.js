
const slider = document.querySelector('#slider');

let sliderSection = document.querySelectorAll('.slider__section');

// variable para obtener el ultimo elemento del slider,para luego colocarlo en el inicio
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector('#btn--left');
const btnRight = document.querySelector('#btn--right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast); /* Insertamos el ultimo elemento del slide despues de que empiece */


function Next(){
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0]; /* obtenemos el primer elemento */
    slider.style.marginLeft = '-200%';
    slider.style.transition = ' all 0.3s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst); /* enviamos el primer elemento al ultimo lugar */
        slider.style.marginLeft = '-100%';    
    }, 500);
}
function Back(){
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = '0';
    slider.style.transition = ' all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast); /* enviamos el primer elemento al ultimo lugar */
        slider.style.marginLeft = '-100%';    
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Back();
});


setInterval(function(){
    Next();
}, 5000);

