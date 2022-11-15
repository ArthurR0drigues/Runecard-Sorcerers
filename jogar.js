let CardGame = localStorage.getItem('cartas-jogo');
let CardGameObj = JSON.parse(CardGame);
/* JOGAR */
let bruno = {
    oponente: 'Oponente 1',
    img: 'img/carta-base.png',
    deck: CardGameObj.slice(1, 10) 
};

let boi = {
    oponente: 'Oponente 2',
    img: 'img/carta.png',   
    deck: CardGameObj.slice(11, 20)
};
let loloy = {
    oponente: 'Oponente 3',
    img: 'cartas/minion.png',   
    deck: CardGameObj.slice(21, 30)
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


