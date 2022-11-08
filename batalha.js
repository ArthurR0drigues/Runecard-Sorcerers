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
        cartaEl.classList.add('drag'); 
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


let CartasNoDeckEl = document.querySelectorAll('.drag');
CartasNoDeckEl.forEach(carta => {
    let posY = carta.offsetTop;
    let posX = carta.offsetLeft;
    carta.style.left = `${posX}px`;
    carta.style.top = `${posY}px`; 
    function selecionarCarta(e) {
        carta.style.position = 'absolute'; 
        carta.style.left = `calc(${e.pageX}px - 6.25vh)`;
        carta.style.top = `calc(${e.pageY}px - 8.625vh)`;
    }
    carta.onmousedown = function(e) {
        carta = e.currentTarget;
        carta.addEventListener('mousemove', selecionarCarta);

        carta.onmouseup = function(e) {
            carta.removeEventListener('mousemove', selecionarCarta);
            carta.style.left = `${posX}px`;
            carta.style.top = `${posY}px`; 
            carta.style.position = 'initial'; 
            carta.onmouseup = null;
        }
    }
});



