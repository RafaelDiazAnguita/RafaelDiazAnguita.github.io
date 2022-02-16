const slider = document.getElementById('img-slider');

let sliderSection = document.querySelectorAll('.img-slider-section');

const btnLeft = document.getElementById('img-slider-button-left');
const btnRight = document.getElementById('img-slider-button-right');



function Next(){
    let sliderSectionFirst = document.querySelectorAll('.img-slider-section')[0];
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 0.5s"
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "0";
    }, 500);
}

function Prev(){
    let sliderSection = document.querySelectorAll('.img-slider-section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];

    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s"
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
})

btnLeft.addEventListener('click',function(){
    Prev();
})

setInterval(function(){
    Next();
},5000);