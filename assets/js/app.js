const contador = document.querySelector('#contador');
const diminuir = document.querySelector('#diminuir');
const resetar = document.querySelector('#resetar');
const aumentar = document.querySelector('#aumentar');

let index = 0;

aumentar.addEventListener('click', () => {
    contador.innerText = index++;
    if(index > 0) {
        contador.classList.add('contador-positivo');
        contador.classList.remove('contador-negativo');
    };
    
});

resetar.addEventListener('click', () => {
    index = 0;
    contador.innerText = index;
    contador.classList.remove('contador-positivo', 'contador-negativo');
});

diminuir.addEventListener('click', () => {
    contador.innerText = index--;
    if(index < 0) {
        contador.classList.add('contador-negativo');
        contador.classList.remove('contador-positivo');
    }
    
});