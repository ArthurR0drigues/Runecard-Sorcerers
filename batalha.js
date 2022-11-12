/*vetor com as cartas na mao*/
let deck = [];
/*informaçoes do inimigo*/
let baralhoOponente = JSON.parse(localStorage.getItem('baralhoOponente'));
let objectImageEl = document.querySelector('#oponente-obj');
objectImageEl.src = localStorage.getItem('oponente');

/*baralho e deck*/

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

let batalhaEvent = false;
/*10 minions iniciais*/
let minion = {
    vida: 1,
    dano: 1,
    custo: 0,
    imagem: 'img/minion.png',
    id: 0,
    nome: 'minion',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};
for (let i = 0; i < 10; i++) {
    baralhoObj.push(minion);
    baralhoOponente.push(minion);
}

let manaEl = document.querySelector('#mana-player');

function definirMana() {
    if (manaVar < 10)
        manaEl.innerHTML = '⭐' + manaVar + "⠀";
    else
        manaEl.innerHTML = '⭐' + manaVar;
}

baralhoObj = embaralhar(baralhoObj);
baralhoOponente = embaralhar(baralhoOponente);
let deckInimigo = [];
function criarDeckInimigo(quantidade) {
    while (quantidade != 0) {
        deckInimigo.push(baralhoOponente[0])
        baralhoOponente.shift();
        quantidade--;
    }
}
criarDeckInimigo(5);
criarDeck(deck, playerdeckEl);
let manaVar = 1;
let manaVarEnemy = 1;
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
            let custo = carta.classList[1];
            let strArryC = custo.split(':');
            let manaPerdida = strArryC[1];
            for (let slot of slotabbleEl) {
                slot.style.background = 'gray';
            }
            if (manaVar < manaPerdida) {
                for (let slot of slotabbleEl) {
                    slot.style.background = 'radial-gradient(circle, rgba(255,0,0,1) 13%, rgba(173,3,3,1) 52%, rgba(0,0,0,1) 100%)';
                }
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

                let dano = carta.classList[2];
                let vida = carta.classList[3];
                
                for (let i = 4; i < carta.classList.length; i++)
                    finalParent.classList.add(carta.classList[i]);

                let strArryD = dano.split(':');
                let strArryV = vida.split(':');

                if (manaVar < manaPerdida)
                    return;
                manaVar -= manaPerdida;
                definirMana();
                finalParent.childNodes[1].src = carta.src;
                finalParent.childNodes[3].innerHTML = '🗡️' + strArryD[1];
                finalParent.childNodes[5].innerHTML = '❤️' + strArryV[1];
                for (let i = 0; i < deck.length; i++) {
                    if (carta.src.indexOf(deck[i].imagem) != -1) {
                        deck[i] = 'apague';
                        deck = deck.filter(word => word != 'apague');
                        break;
                    }
                }
                carta.remove();
                finalParent.classList.remove('slotabble');
                finalParent.classList.add('ocupado');
                finalParent.classList.add(); 
                if (finalParent == document.getElementById('slot4')) {
                    let str = 'pos0';
                    finalParent.classList.add(str);
                }
                else if (finalParent == document.getElementById('slot5')) {
                    let str = 'pos1';
                    finalParent.classList.add(str);
                }
                else {
                    let str = 'pos2';
                    finalParent.classList.add(str);
                }
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
        for (let funcao of deck[i].funcoes)
            cartaEl.classList.add(funcao); 
        cartaEl.draggable = false;
        cartaEl.src = deck[i].imagem;
        cartaEl.addEventListener('click', function () {
            deck.slice(cartaEl);
        });
        paiEl.appendChild(cartaEl);
    }
    dragAll();
}
let slotsEnemys = document.querySelectorAll('.enemyslot');
slotsEnemys.forEach(slot => slot.classList.add('abble'));
function escolherEjogar(slotComInimigo) {
    let pos;
    if (slotComInimigo.classList.contains('pos0') == true)
        pos = 0;
    else if (slotComInimigo.classList.contains('pos1') == true) {
        pos = 1;
    }
    else pos = 2;
    let cartaSelecionada = getRandomInt(deckInimigo.length);
    if (slotsEnemys[pos].classList.contains('abble') == false)
        return 0;
    if (manaVarEnemy - deckInimigo[cartaSelecionada].custo < 0)
        return 0;
    else
        manaVarEnemy -= deckInimigo[cartaSelecionada].custo;

    slotsEnemys[pos].childNodes[1].src = deckInimigo[cartaSelecionada].imagem;
    slotsEnemys[pos].childNodes[3].innerHTML = "🗡️" + deckInimigo[cartaSelecionada].dano;
    slotsEnemys[pos].childNodes[5].innerHTML = "❤️" + deckInimigo[cartaSelecionada].vida;
    for (let funcao of deckInimigo[cartaSelecionada].funcoes)
        slotsEnemys[pos].classList.add(funcao)
    slotsEnemys[pos].classList.remove('abble');
    deckInimigo[cartaSelecionada] = 'apague';
    deckInimigo = deckInimigo.filter(word => word != 'apague');
}
function OponenteAi() {
    let slotabbleEl = document.querySelectorAll('.ocupado');
    let slot4El = document.querySelector('#slot4');
    let slot5El = document.querySelector('#slot5');
    let slot6El = document.querySelector('#slot6');
    let slots = [slot4El, slot5El, slot6El];
    for (let slot of slotabbleEl) {
        slot.classList.add('alvo');
    }
    for (let slotes of slots) {
        if (slotes.classList.contains('alvo') == true) {
            let retorno = escolherEjogar(slotes);
            let loop = 0;
            while (retorno == 0) {
                escolherEjogar(slotes)
                loop++;
                if (loop == 100)
                    retorno = 1;
            }
        }
    }
}

function batalhaEmSI() {
    batalhaEvent = true;
    let slot1 = document.querySelector('#slot1');
    let slot2 = document.querySelector('#slot2');
    let slot3 = document.querySelector('#slot3');
    let slot4 = document.querySelector('#slot4');
    let slot5 = document.querySelector('#slot5');
    let slot6 = document.querySelector('#slot6');
    let slotBem = [slot1, slot2, slot3];
    let slotMal = [slot4, slot5, slot6];
    
    let position = 0; 
    //*DECK DO PLAYER
    for (let slot of slotBem) {
        if (slot.classList.contains('causarDano'))
            causarDano(slot, slotMal[position]);
        if (slot.classList.contains('FundoBaralhoMorrer'))
            FundoBaralhoMorrer(slot, baralhoObj);
        position++; 
    }
    //*DECK DO OPONENTE
    position = 0; 
    for (let slot of slotMal) {
        if (slot.classList.contains('causarDano'))
            causarDano(slot, slotBem[position]);
        if (slot.classList.contains('FundoBaralhoMorrer')){
            FundoBaralhoMorrer(slot, baralhoOponente);

        }
        position++; 
    }

    batalhaEvent = false;
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
            OponenteAi();
            break;
        case 'vez-inimigo':
            turnoEl.src = 'img/espada.png';
            turnoFase = 'vez-jogador';
            CartaAreaEl.style.display = 'block';
            textAreaEl.style.display = 'block';
            manaVar += parseInt(turnoNumero / 10 + 1);
            manaVarEnemy += parseInt(turnoNumero / 10 + 1);
            console.log(`mana${manaVarEnemy}`);
            turnoNumero++;
            turnoContadorEl.innerHTML = 'Turno:' + '<br>' + turnoNumero;
            definirMana();
            compraGratis = 1;
            batalhaEmSI();
            criarDeckInimigo(1);
            break;
    }
});



let CartaAreaEl = document.querySelector('#baralho-area');
let textAreaEl = document.querySelector('#baralho-texto');
CartaAreaEl.src = baralhoObj[0].imagem;
textAreaEl.innerHTML = `Próximo:<br>${baralhoObj[0].nome}`;
CartaAreaEl.addEventListener('click', function () {
    playerdeckEl.style.display = 'flex';
    if (deck.length > 9)
        return false;

    if (compraGratis < 1) {
        if (manaVar == 0)
            return 0;
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

//area das funçoes
function FundoBaralhoMorrer(passivo, baralho){
    let vida = passivo.childNodes[5].innerHTML;
    if (vida[3] != undefined)
        vida = parseInt(vida[2] + vida[3]);
    else 
        vida = parseInt(vida[2]); 
    if (vida < 1){
        passivo.innerHTML = '<img draggable="false"><p class="dmg"></p><p class="hp"></p>'; 
        while(passivo.classList != ""){
            passivo.classList.remove(passivo.classList[0]); 
        }
        if (baralho === baralhoObj)
            passivo.classList.add('slotabble');
        else {
            passivo.classList.add('enemyslot'); 
            passivo.classList.add('abble'); 
        }
    }
}
function causarDano(atacante, defensor){
    let dano = atacante.childNodes[3].innerHTML;
    let vida = defensor.childNodes[5].innerHTML;
    if (vida[3] != undefined)
        vida = parseInt(vida[2] + vida[3]);
    else 
        vida = parseInt(vida[2]); 
    if (dano[4] != undefined)
        dano = parseInt(dano[3] + dano[4]);
    else 
        dano = parseInt(dano[3]);
    vida = vida - dano; 
    defensor.childNodes[5].innerHTML = "❤️" + vida;
}
