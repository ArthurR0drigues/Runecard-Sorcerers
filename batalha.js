/*vetor com as cartas do jogador*/
let baralho = [];
/*vetor com as cartas na mao do jogador*/
let deck = [];
/*todas as cartas */
let minion = {
    vida: 2,
    vidaMaxima: 2,
    dano: 1,
    custo: 1,
    imagem: 'img/carta.png',
    id: 0
};

let cavaleiro = {
    vida: 4,
    vidaMaxima: 4,
    dano: 2,
    custo: 2,
    imagem: 'img/background2.jpg',
    id: 1
};

/*fim das cartas */

/*
function criarBaralho(baralho) {
    for (let i = 0; i < baralho.length; i++) {
        let cartaEl = document.createElement("img");
        cartaEl.src = baralho[i].imagem;
        cartaEl.classList.add('drag');
        let areaEl = document.querySelector('#baralho-area');
        areaEl.appendChild(cartaEl);
    }
};

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

let oponenteEl = document.querySelector('#oponente');
let objectImageEl = document.querySelector('#oponente-obj'); 
function capturaOponenteImagem(){
    objectImageEl.style.backgroundImage = 'url(' + oponenteEl.src + ')'; 
}
let botaoOponenteEl = document.querySelector('#botao-oponente'); 
botaoOponenteEl.addEventListener('click', capturaOponenteImagem); 


/* JOGAR */
let tutorial = {
    oponente: 'El picachu',
    img: 'img/carta-base.png',
};  

let boi = {
    oponente: 'Dona Marta',
    img: 'img/carta.png',
};  

let batalhasDisponiveis = [tutorial, boi];

let oponenteAtual = -1;

let anteriorEl = document.querySelector('#anterior');
let proximoEl = document.querySelector('#proximo');

let nomeOponenteEl = document.querySelector('#nome-oponente');

anteriorEl.addEventListener('click', function () {
    oponenteAtual--;
    if (oponenteAtual < 0) {
        oponenteAtual = batalhasDisponiveis.length-1;
    }
    oponenteEl.src = batalhasDisponiveis[oponenteAtual].img;
    nomeOponenteEl.innerHTML = batalhasDisponiveis[oponenteAtual].oponente;
});

proximoEl.addEventListener('click', proximo);
function proximo()
{
    oponenteAtual++;
    if (oponenteAtual > batalhasDisponiveis.length-1) {
        oponenteAtual = 0;
    }
    oponenteEl.src = batalhasDisponiveis[oponenteAtual].img;
    nomeOponenteEl.innerHTML = batalhasDisponiveis[oponenteAtual].oponente;
};
proximo();
