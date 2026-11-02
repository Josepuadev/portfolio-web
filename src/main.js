import '@fortawesome/fontawesome-free/css/all.min.css'

console.log("Hola mundo");

let buttonGuay = document.querySelector('.button-guay');
let buttonGuayReverse = document.querySelector('.button-guay-reverse');
let experience = document.querySelector('.experience');

console.log(buttonGuay);

buttonGuay.addEventListener('click', () => {
    console.log('pulsao');
    experience.classList.add('rotar');
});

buttonGuayReverse.addEventListener('click', () => {
    experience.classList.remove('rotar');
});