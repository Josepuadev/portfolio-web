export function initFlipCard () {
    let buttonGuay = document.querySelector('.button-guay');
    let buttonGuayReverse = document.querySelector('.button-guay-reverse');
    let experience = document.querySelector('.experience');

    buttonGuay.addEventListener('click', () => {
        console.log('pulsao');
        experience.classList.add('rotar');
    });

    buttonGuayReverse.addEventListener('click', () => {
        experience.classList.remove('rotar');
    });
    
}