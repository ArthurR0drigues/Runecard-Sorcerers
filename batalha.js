/*vetor com as cartas na mao do jogador*/
let deck = [];
let objectImageEl = document.querySelector('#oponente-obj');
objectImageEl.src = localStorage.getItem('oponente');

let baralhoJs = localStorage.getItem('baralho');
let baralhoObj = JSON.parse(baralhoJs);

let playerdeckEl = document.querySelector('#player-deck');

function AdicionarAoDeck(deck, baralhoJs, quantidade) {
    for (let i = 0; i < quantidade; i++) {
        deck.push(baralhoJs[i]);
    }
    for (let i = 0; i < quantidade; i++) {
        baralhoJs.shift();
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
        let indice = getRandomInt(tam - i);
        novoBaralho[i] = baralhoCp[indice];
        baralhoCp[indice] = 'apague';
        baralhoCp = baralhoCp.filter(word => word != 'apague');
    }

    return novoBaralho;
}

let minion = {
    vida: 2,
    dano: 1,
    custo: 1,
    imagem: 'img/minion.png',
    id: 0,
    nome: 'minion'
};
for (let i = 0; i < 10; i++) {
    baralhoObj.push(minion);
}

baralhoObj = embaralhar(baralhoObj);
criarDeck(deck, playerdeckEl);
let manaVar = 1;
function dragAll() {
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
        carta.onmousedown = function (e) {
            carta = e.currentTarget;

            let bodyEl = document.querySelector('body');
            bodyEl.addEventListener('mousemove', selecionarCarta);
            let slotabbleEl = document.querySelectorAll('.slotabble');
            for (let slot of slotabbleEl) {
                slot.style.background = 'gray';
            }
            carta.onmouseup = function (e) {
                bodyEl.removeEventListener('mousemove', selecionarCarta);
                carta.style.position = 'initial';
                carta.onmouseup = null;
                carta.style.left = `${posX}px`;
                carta.style.top = `${posY}px`;
                for (let slot of slotabbleEl) {
                    slot.style.background = 'radial-gradient(circle, rgba(185,186,19,1) 0%, rgba(50,148,134,1) 100%)';
                }
                let finalParent = document.elementsFromPoint(e.pageX, e.pageY)[0].closest('.slotabble');
                if (finalParent == null)
                    finalParent = document.elementsFromPoint(e.pageX, e.pageY)[1].closest('.slotabble');
                if (finalParent == null)
                    return 0;
                finalParent.childNodes[1].src = carta.src; 
                let dano = carta.classList[2]; 
                let vida = carta.classList[3]; 
                let custo = carta.classList[1]; 
                let strArryD = dano.split(':');
                let strArryV = vida.split(':');
                let manaPerdida = strArryC[1]; 
                manaVar -= manaPerdida;
                definirMana(); 
                let strArryC = custo.split(':');

                finalParent.childNodes[3].innerHTML = '🗡️' + strArryD[1];   
                finalParent.childNodes[5].innerHTML = '❤️' + strArryV[1]; 
                for (let i = 0; i < deck.length; i++){
                    if (carta.src.indexOf(deck[i].imagem) != -1){
                        deck[i] = 'apague';
                        deck = deck.filter(word => word != 'apague');
                    } 
                }
                carta.remove();
                finalParent.classList.remove('slotabble'); 
            }
        }
    });
}

function criarDeck(deck, paiEl) {
    for (let i = 0; i < deck.length; i++) {
        let cartaEl = document.createElement("img");
        cartaEl.classList.add('drag');
        cartaEl.classList.add('custo:' + deck[i].custo);
        cartaEl.classList.add('dano:' + deck[i].dano);
        cartaEl.classList.add('vida:' + deck[i].vida);
        cartaEl.draggable = false;
        cartaEl.src = deck[i].imagem;
        cartaEl.addEventListener('click', function () {
            deck.slice(cartaEl);
        });
        paiEl.appendChild(cartaEl);
    }
    dragAll();
}




let manaEl = document.querySelector('#mana-player');

function definirMana() {
    if (manaVar < 10)
        manaEl.innerHTML = '⭐' + manaVar + "⠀";
    else
        manaEl.innerHTML = '⭐' + manaVar;
}
let turnoEl = document.querySelector('#passa-turno');
let turnoContadorEl = document.querySelector('#turno-contador');
let turnoFase = 'vez-jogador';
let turnoNumero = 1;
let compraGratis = 5;
definirMana();
turnoEl.addEventListener('click', function () {
    switch (turnoFase) {
        case 'vez-jogador':
            turnoEl.src = 'img/escudo.png';
            turnoFase = 'vez-inimigo';
            playerdeckEl.style.display = 'none';
            CartaAreaEl.style.display = 'none';
            textAreaEl.style.display = 'none';
            textAreaEl.innerHTML = `Próximo:<br>${baralhoObj[0].nome}`;
            break;
        case 'vez-inimigo':
            turnoEl.src = 'img/espada.png';
            turnoFase = 'vez-jogador';
            playerdeckEl.style.display = 'flex';
            CartaAreaEl.style.display = 'block';
            textAreaEl.style.display = 'block';
            manaVar += parseInt(turnoNumero / 10 + 1);
            turnoNumero++;
            turnoContadorEl.innerHTML = 'Turno:' + '<br>' + turnoNumero;
            definirMana();
            compraGratis = 1;
            break;
    }

});
let CartaAreaEl = document.querySelector('#baralho-area');
let textAreaEl = document.querySelector('#baralho-texto');
CartaAreaEl.src = baralhoObj[0].imagem;
textAreaEl.innerHTML = `Próximo:<br>${baralhoObj[0].nome}`;
CartaAreaEl.addEventListener('click', function () {
    if (deck.length > 9 || manaVar == 0)
        return false;

    if (compraGratis < 1) {
        manaVar--;
        definirMana();
    }
    compraGratis--;
    CartaAreaEl.src = baralhoObj[1].imagem;

    if (compraGratis > 0)
        textAreaEl.innerHTML = `Próximo:<br>${baralhoObj[1].nome}`;
    else
        textAreaEl.innerHTML = `Próximo:-1⭐<br>${baralhoObj[1].nome}`;
    AdicionarAoDeck(deck, baralhoObj, 1);
    playerdeckEl.innerHTML = "";
    criarDeck(deck, playerdeckEl);
});

