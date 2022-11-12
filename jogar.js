let CardGame = localStorage.getItem('cartas-jogo');
let CardGameObj = JSON.parse(CardGame);
/* JOGAR */
let bruno = {
    oponente: 'Dark Night',
    img: 'img/carta-base.png',
    deck: CardGameObj.slice(1, 13) 
};

let boi = {
    oponente: 'Dona Marta',
    img: 'img/carta.png',   
    deck: CardGameObj.slice(4, 11)
};
let loloy = {
    oponente: 'Olavo de Carvalho',
    img: 'img/minion.png',   
    deck: CardGameObj.slice(8, 12)
};
//seletor de oponentes
let batalhasDisponiveis = [bruno, boi, loloy];
let oponenteAtual = -1;
let oponenteEl = document.querySelector('#img-oponente');
let nomeOponenteEl = document.querySelector('#nome-oponente');
let anteriorEl = document.querySelector('#anterior');
let proximoEl = document.querySelector('#proximo');

anteriorEl.addEventListener('click', anterior);
function anterior () {
    oponenteAtual--;
    if (oponenteAtual < 0) {
        oponenteAtual = batalhasDisponiveis.length - 1;
    }    
    oponenteEl.src = batalhasDisponiveis[oponenteAtual].img;
    nomeOponenteEl.innerHTML = batalhasDisponiveis[oponenteAtual].oponente;
};    
proximoEl.addEventListener('click', proximo);
function proximo() {
    oponenteAtual++;
    if (oponenteAtual > batalhasDisponiveis.length - 1) {
        oponenteAtual = 0;
    }    
    oponenteEl.src = batalhasDisponiveis[oponenteAtual].img;
    nomeOponenteEl.innerHTML = batalhasDisponiveis[oponenteAtual].oponente;
};     
proximo();

let botaoOponenteEl = document.querySelector('#link-oponente');
botaoOponenteEl.addEventListener('click', function () {
    localStorage.setItem('oponente', oponenteEl.src); 
    let deckOponentestr = JSON.stringify(batalhasDisponiveis[oponenteAtual].deck); 
    localStorage.setItem('baralhoOponente', deckOponentestr); 
});


