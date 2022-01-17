const contador = document.querySelector('#contador');
const diminuir = document.querySelector('.diminuir');
const resetar = document.querySelector('.resetar');
const aumentar = document.querySelector('.aumentar');


let index = 0;

aumentar.addEventListener('click', () => {
    contador.innerText = ++index;
    if(index > 0) {
        contador.style.color = 'green';
    };
});

resetar.addEventListener('click', () => {
    index = 0;
    if(index === 0) {
        contador.style.color = '#222';
        contador.innerText = index;
    }
});

diminuir.addEventListener('click', () => {
    contador.innerText = --index;
    if(index < 0) {
        contador.style.color = 'red';
    }
});