// Seta a contagem inicial
let count = 0

// Selecionando o span e os botões
const contador = document.querySelector('#contador');
const botoes = document.querySelectorAll('.btn');

botoes.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('diminuir')) {
            count--;
        } else if(styles.contains('aumentar')) {
            count++;
        } else {
            count = 0;
        }

        if(count > 0) {
            contador.style.color = 'green';
        }

        if(count < 0) {
            contador.style.color = 'red';
        }

        if(count === 0) {
            contador.style.color = '#222'
        }
        contador.textContent = count;
    });
});