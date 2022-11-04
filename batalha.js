/*
function embaralhar(baralho) {
    for (let i = 0; i < 5; i--) {
        deck[i] = baralho[getRandomInt(baralho.length)];
    }
    return deck;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


let bodyEl = document.querySelector('body');
let CartaTopoEl = document.querySelectorAll('.drag');

function selecionarCarta(e) {
    CartaTopoEl[0].style.left = `${e.pageX}px`;
    CartaTopoEl[0].style.top = `${e.pageY}px`;
}

bodyEl.addEventListener('mousemove', selecionarCarta);
*/


/*vetor com as cartas na mao do jogador*/
let deck = [];
let objectImageEl = document.querySelector('#oponente-obj');
objectImageEl.src = localStorage.getItem('oponente');
