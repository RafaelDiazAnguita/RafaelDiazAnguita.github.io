
const menu = document.getElementById('top-menu');
const indicator = document.getElementById('menu-indicator');
const secciones = document.querySelectorAll('.section');

let indicatorTam = menu.querySelector('.row div').offsetWidth;
indicator.style.width = indicatorTam + 'px';

let indexSeccionActiva;

const observer = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada =>{
        if(entrada.isIntersecting){
            indexSeccionActiva = [...secciones].indexOf(entrada.target);
            indicator.style.transform = `translateX(${indicatorTam * indexSeccionActiva}px)`;
        }
    });
}, {

});


observer.observe(document.getElementById('main-slider'));
secciones.forEach(seccion => { observer.observe(seccion); });


const onResize = () =>{
    indicatorTam = menu.querySelector('.row div').offsetWidth;
    indicator.style.width = indicatorTam + 'px';
    indicator.style.transform = `translateX(${indicatorTam * indexSeccionActiva}px)`;
}

window.addEventListener('resize',onResize);