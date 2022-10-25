/*vetor com as carts do jogador*/
let baralho = []; 
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

function adicionarAoBaralho(carta){
    baralho[baralho.length] = carta; 
}; 

function criarBaralho(baralho) {
    for (let i=0; i < baralho.length; i++){
        let cartaEl = document.createElement("img"); 
        cartaEl.src = baralho[i].imagem; 
        cartaEl.classList.add('drag');
        let areaEl = document.querySelector('#baralho-area');
        areaEl.appendChild(cartaEl); 
    }
}; 
/*
function embaralhar(baralho) {
for (let i = 0; i < baralho.length; i--) {
    baralho[getRandomInt(baralho.length)] = baralho[getRandomInt(baralho.length)];
}
return baralho;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


let bodyEl = document.querySelector('body');
let CartaTopoEl = document.querySelectorAll('.drag'); 

function selecionarCarta(e){
    CartaTopoEl[0].style.left = `${e.pageX}px`;
    CartaTopoEl[0].style.top = `${e.pageY}px`;
}

bodyEl.addEventListener('mousemove', selecionarCarta);
*/
