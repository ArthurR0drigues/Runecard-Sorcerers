/*vetor com as cartas na mao do jogador*/
let deck = [];
let objectImageEl = document.querySelector('#oponente-obj');
objectImageEl.src = localStorage.getItem('oponente');

let baralhoJs = localStorage.getItem('baralho');
let baralhoObj = JSON.parse(baralhoJs);

let playerdeckEl = document.querySelector('#player-deck');

function AdicionarAoDeck (deck, baralhoJs){
    for (let i = 0; i < 5; i++){
        deck.push(baralhoJs[i]); 
    }
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function embaralhar(baralho) {
    let novoBaralho = []; 
    let baralhoCp = baralho;
    let tam = baralho.length;
    for (let i = 0; i < tam; i++) {
        let indice = getRandomInt(tam-i); 
        novoBaralho[i] = baralhoCp[indice];
        baralhoCp[indice] = 'apague'; 
        baralhoCp = baralhoCp.filter(word => word != 'apague');
    }
    
    return novoBaralho;
}
function criarDeck(deck, paiEl) {
    for (let i = 0; i < deck.length; i++) {
        let cartaEl = document.createElement("img");
        cartaEl.draggable = false;
        cartaEl.src = deck[i].imagem;
        cartaEl.addEventListener('click', function () {
            deck.slice(cartaEl);
        });
        paiEl.appendChild(cartaEl);
    }
}

baralhoObj = embaralhar(baralhoObj); 
AdicionarAoDeck(deck, baralhoObj); 
criarDeck(deck, playerdeckEl); 

/*
let bodyEl = document.querySelector('body');
let CartaTopoEl = document.querySelectorAll('.drag');

function selecionarCarta(e) {
    CartaTopoEl[0].style.left = `${e.pageX}px`;
    CartaTopoEl[0].style.top = `${e.pageY}px`;
}

bodyEl.addEventListener('mousemove', selecionarCarta);
*/
