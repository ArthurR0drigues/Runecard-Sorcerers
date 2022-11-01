/*todas as cartas */
let minion = {
    vida: 2,
    vidaMaxima: 2,
    dano: 1,
    custo: 1,
    imagem: 'img/minion.png',
    id: 0
};

let cavaleiro = {
    vida: 4,
    vidaMaxima: 4,
    dano: 2,
    custo: 2,
    imagem: 'img/knight.png',
    id: 1
};

/*fim das cartas */

/* vetor com todas as cartas desbloqueadas pelo jogador */
let allCard = [minion, cavaleiro, minion];
/*vetor com as cartas do jogador*/
let baralho = [];
/*vetor com as cartas na mao do jogador*/
let deck = [];

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

//criar vetores
let colecaoEl = document.querySelector('#colecao');
let baralhoEl = document.querySelector('#baralho-formado');
function criarAllcard(vetortipo, paiEl) {
    for (let i = 0; i < vetortipo.length; i++) {
        let cartaEl = document.createElement("img");
        cartaEl.src = vetortipo[i].imagem;
        cartaEl.addEventListener('click', function () {
            if (baralho.length == 10 || cartaEl.classList.contains('adicionar-baralho'))
                return console.log("limite");
                baralho.push(vetortipo[i]);
                baralho.slice(0, baralho.length);
            baralhoEl.innerText = "";
            criarBaralho(baralho, baralhoEl);
            cartaEl.classList.toggle('adicionar-baralho');
        });
        if (paiEl == null){
            return false; 
        }
        paiEl.appendChild(cartaEl);
    }
};
function criarBaralho(vetortipo, paiEl) {
    for (let i = 0; i < vetortipo.length; i++) {
        let cartaEl = document.createElement("img");
        cartaEl.src = vetortipo[i].imagem;
        cartaEl.addEventListener('click', function () {
            vetortipo.slice(cartaEl);
        });
        paiEl.appendChild(cartaEl);
    }
};
criarAllcard(allCard, colecaoEl);
criarBaralho(baralho, baralhoEl);

let objectImageEl = document.querySelector('#oponente-obj');
objectImageEl.src = localStorage.getItem('oponente');
