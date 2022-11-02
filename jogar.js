/* JOGAR */
let bruno = {
    oponente: 'Dark Night',
    img: 'img/carta-base.png',
};

let boi = {
    oponente: 'Dona Marta',
    img: 'img/carta.png',   
};

let loloy = {
    oponente: 'Olavo de Carvalho',
    img: 'img/minion.png',    
};


//seletor de oponentes
let batalhasDisponiveis = [bruno, boi, loloy];
let oponenteAtual = -1;
let anteriorEl = document.querySelector('#anterior');
let proximoEl = document.querySelector('#proximo');
let oponenteEl = document.querySelector('#img-oponente');
let nomeOponenteEl = document.querySelector('#nome-oponente');

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
});

