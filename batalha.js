document.oncontextmenu = document.body.oncontextmenu = function () { return false; }
/*vetor com as cartas na mao*/
let deck = [];
/*informaçoes do inimigo*/
let baralhoOponente = JSON.parse(localStorage.getItem('baralhoOponente'));
let falaOponente = JSON.parse(localStorage.getItem('falaOponente'));
let objectImageEl = document.querySelector('#oponente-obj');
objectImageEl.src = localStorage.getItem('oponente');
let vidaInimigoEl = document.querySelector('#vida-inimigo');
let vidaPlayerEl = document.querySelector('#vida-player');
/*baralho e deck*/
let cartasDoJogoJs = localStorage.getItem('cartas-jogo');
let cartasDoJogoObj = JSON.parse(cartasDoJogoJs);
let baralhoJs = localStorage.getItem('baralho');
let baralhoObj = JSON.parse(baralhoJs);
let playerdeckEl = document.querySelector('#player-deck');

let VirusMinion = {
    vida: 2,
    dano: 1,
    custo: 1,
    imagem: 'cartas/virus.png',
    id: 12,
    nome: 'Vírus',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'InvocarMortos', 'Invocado']
};

let EsqueletoMinion = {
    vida: 4,
    dano: 3,
    custo: 2,
    imagem: 'cartas/esqueleto.png',
    id: 33,
    nome: 'Esqueleto',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'PerdendoDano', 'Invocado']
};

let GalinhaRaivosa = {
    vida: 2,
    dano: 2,
    custo: 0,
    imagem: 'cartas/galinharaivosa.png',
    id: 63,
    nome: 'Galinha',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Angry', 'Invocado']
};

let Gelo = {
    vida: 5,
    dano: 0,
    custo: 0,
    imagem: 'cartas/gelo.png',
    id: 62,
    nome: 'Gelo',
    funcoes: ['FundoBaralhoMorrer', 'Naoéumeastergg', 'éumagambiarra', 'Invocado']
};


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
for (let i = 0; i < 10; i++) {
    baralhoObj.push(cartasDoJogoObj[0]);
    baralhoOponente.push(cartasDoJogoObj[0]);
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
        if (deckInimigo.length < 9) {
            if (baralhoOponente[0] != undefined) {
                deckInimigo.push(baralhoOponente[0])
                baralhoOponente.shift()
            }
        }
        quantidade--;
    }
}
criarDeckInimigo(5);
criarDeck(deck, playerdeckEl);
let manaVar = 1;
let manaVarEnemy = 1;

let infoCardEl = document.querySelector('#info-card');
function mostrarInformacoes(e) {
    infoCardEl.innerHTML = 'Carta Info:<br>'
    infoCardEl.innerHTML += '⭐' + e.currentTarget.classList[1] + '<br>';
    infoCardEl.innerHTML += '🗡️' + e.currentTarget.classList[2] + '<br>';
    infoCardEl.innerHTML += '❤️' + e.currentTarget.classList[3];
    infoCardEl.style.left = `calc(${e.pageX}px + 1vh)`;
    infoCardEl.style.top = `calc(${e.pageY}px - 5vh)`;
}
function adicionarInfo(carta) {
    carta.addEventListener('mouseover', mostrarInformacoes);
    carta.addEventListener('mousemove', mostrarInformacoes);
    carta.addEventListener('mouseout', function () {
        infoCardEl.style.top = '-1000px';
    });
}
cheet('i', function () {
    let hideEl = document.querySelector('#info-card');
    hideEl.classList.toggle('hide');
});

function dragAll() {
    let CartasNoDeckEl = document.querySelectorAll('.drag');
    CartasNoDeckEl.forEach(carta => {
        let posY = carta.offsetTop;
        let posX = carta.offsetLeft;
        carta.style.left = `${posX}px`;
        carta.style.top = `${posY}px`;
        function selecionarCarta(e) {
            carta.style.position = 'absolute';
            carta.style.left = `calc(${e.pageX}px - 80.625px)`;
            carta.style.top = `calc(${e.pageY}px - 114px)`;
        }
        adicionarInfo(carta);
        carta.onmousedown = function (e) {
            infoCardEl.style.top = '-1000px';
            carta.removeEventListener('mousemove', mostrarInformacoes);
            carta.removeEventListener('mouseover', mostrarInformacoes);
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
                infoCardEl.style.top = '-1000px';
                adicionarInfo(carta);
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

                if (manaVar < manaPerdida)
                    return;
                let dano = carta.classList[2];
                let vida = carta.classList[3];

                for (let i = 4; i < carta.classList.length; i++)
                    finalParent.classList.add(carta.classList[i]);

                finalParent.innerHTML = '<img draggable="false"><p class="dmg"></p><p class="hp"></p>';
                let strArryD = dano.split(':');
                let strArryV = vida.split(':');
                manaVar -= manaPerdida;
                definirMana();
                finalParent.childNodes[0].src = carta.src;
                finalParent.childNodes[0].alt = carta.alt;
                finalParent.childNodes[1].innerHTML = strArryD[1];
                finalParent.childNodes[2].innerHTML = strArryV[1];
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
function DragAllforMobile() {
    let CartasNoDeckEl = document.querySelectorAll('.drag');
    CartasNoDeckEl.forEach(carta => {
        let posY = carta.offsetTop;
        let posX = carta.offsetLeft;
        let bodyEl = document.querySelector('body');
        carta.style.left = `${posX}px`;
        carta.style.top = `${posY}px`;
        function selecionarCartaCell(e) {
            carta.style.position = 'absolute';
            for (let i = 0; i < e.changedTouches.length; i++) {
                if (e.changedTouches[i].pageX >= 0 && e.changedTouches[i].pageX < bodyEl.clientWidth)
                    carta.style.left = `calc(${e.changedTouches[i].pageX}px - 53.75px)`;
                if (e.changedTouches[i].pageY >= 0 && e.changedTouches[i].pageY < bodyEl.clientHeight)
                    carta.style.top = `calc(${e.changedTouches[i].pageY}px - 76px)`;
            }
        }
        let slotabbleEl = document.querySelectorAll('.slotabble');
        let custo = carta.classList[1];
        let strArryC = custo.split(':');
        let manaPerdida = strArryC[1];


        carta.ontouchstart = function (e) {
            carta = e.currentTarget;
            bodyEl.addEventListener('touchmove', selecionarCartaCell);
            for (let slot of slotabbleEl) {
                slot.style.background = 'gray';
            }
            if (manaVar < manaPerdida) {
                for (let slot of slotabbleEl) {
                    slot.style.background = 'radial-gradient(circle, rgba(255,0,0,1) 13%, rgba(173,3,3,1) 52%, rgba(0,0,0,1) 100%)';
                }
            }
        };


        carta.ontouchend = function (e) {
            bodyEl.removeEventListener('touchmove', selecionarCartaCell);
            carta.style.position = 'initial';
            carta.ontouchmove = null;
            for (let slot of slotabbleEl) {
                slot.style.background = 'radial-gradient(circle, rgba(185,186,19,1) 0%, rgba(50,148,134,1) 100%)';
            }
            let finalParent = document.elementsFromPoint(e.changedTouches[0].pageX, e.changedTouches[0].pageY)[0].closest('.slotabble');
            for (let i = 0; i < e.changedTouches.length; i++) {
                finalParent = document.elementsFromPoint(e.changedTouches[i].pageX, e.changedTouches[i].pageY)[0].closest('.slotabble');
            }
            for (let i = 0; i < e.changedTouches.length; i++) {
                finalParent = document.elementsFromPoint(e.changedTouches[i].pageX, e.changedTouches[i].pageY)[1].closest('.slotabble');
            }
            if (finalParent == null)
                return 0;


            let dano = carta.classList[2];
            let vida = carta.classList[3];

            for (let i = 4; i < carta.classList.length; i++)
                finalParent.classList.add(carta.classList[i]);

            finalParent.innerHTML = '<img draggable="false"><p class="dmg"></p><p class="hp"></p>';
            let strArryD = dano.split(':');
            let strArryV = vida.split(':');
            if (manaVar < manaPerdida)
                return;
            manaVar -= manaPerdida;
            definirMana();
            finalParent.childNodes[0].src = carta.src;
            finalParent.childNodes[0].alt = carta.alt;
            finalParent.childNodes[1].innerHTML = strArryD[1];
            finalParent.childNodes[2].innerHTML = strArryV[1];
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
    });
}

function criarDeck(deck, paiEl) {
    for (let i = 0; i < deck.length; i++) {
        let cartaEl = document.createElement("img");
        cartaEl.classList.add('drag');
        cartaEl.classList.add('custo:' + deck[i].custo);
        cartaEl.classList.add('dano:' + deck[i].dano);
        cartaEl.classList.add('vida:' + deck[i].vida);
        for (let funcao of deck[i].funcoes) {
            cartaEl.classList.add(funcao);
        }
        cartaEl.draggable = false;
        cartaEl.src = deck[i].imagem;
        cartaEl.alt = deck[i].id;
        cartaEl.addEventListener('click', function () {
            deck.slice(cartaEl);
        });
        paiEl.appendChild(cartaEl);
    }
    DragAllforMobile();
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

    slotsEnemys[pos].innerHTML = '<img draggable="false"><p class="dmg"></p><p class="hp"></p>';
    slotsEnemys[pos].childNodes[0].src = deckInimigo[cartaSelecionada].imagem;
    slotsEnemys[pos].childNodes[0].alt = deckInimigo[cartaSelecionada].id;
    slotsEnemys[pos].childNodes[1].innerHTML = deckInimigo[cartaSelecionada].dano;
    slotsEnemys[pos].childNodes[2].innerHTML = deckInimigo[cartaSelecionada].vida;
    for (let funcao of deckInimigo[cartaSelecionada].funcoes) {
        slotsEnemys[pos].classList.add(funcao);
    }
    slotsEnemys[pos].classList.remove('abble');
    deckInimigo[cartaSelecionada] = 'apague';
    deckInimigo = deckInimigo.filter(word => word != 'apague');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function OponenteAi() {
    let slotabbleEl = document.querySelectorAll('.ocupado');
    let slot4El = document.querySelector('#slot4');
    let slot5El = document.querySelector('#slot5');
    let slot6El = document.querySelector('#slot6');
    let slots = [slot4El, slot5El, slot6El];
    for (let slot of slotabbleEl) {
        slot.classList.add('alvo');
    }
    let Ncard = 100;
    while (Ncard > 0) {
        let ran = getRandomInt(3);
        slots[ran].classList.add('alvo', 'pos' + ran);
        Ncard--;
    }
    for (let slotes of slots) {
        if (slotes.classList.contains('alvo') == true) {
            let retorno = escolherEjogar(slotes);
            let loop = 0;
            while (retorno == 0) {
                escolherEjogar(slotes);
                loop++;
                if (loop == 100)
                    retorno = 1;
            }
        }
    }
}

let slot1 = document.querySelector('#slot1');
let slot2 = document.querySelector('#slot2');
let slot3 = document.querySelector('#slot3');
let slot4 = document.querySelector('#slot4');
let slot5 = document.querySelector('#slot5');
let slot6 = document.querySelector('#slot6');
let slotBem = [slot1, slot2, slot3];
let slotMal = [slot4, slot5, slot6];

function batalhaEmSI() {

    batalhaEvent = true;
    let mortesNoTurno = 0;
    let position = 0;

    function FundoMorrer() {
        for (let slot of slotBem) {
            if (slot.classList.contains('FundoBaralhoMorrer'))
                mortesNoTurno += FundoBaralhoMorrer(slot, baralhoOponente, 0);
        }
        for (let slot of slotMal) {
            if (slot.classList.contains('FundoBaralhoMorrer'))
                mortesNoTurno += FundoBaralhoMorrer(slot, baralhoObj, 1);
        }
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('CausarDanoComVida'))
            CausarDanoComVida(slot);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('CausarDanoComVida'))
            CausarDanoComVida(slot);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('CausarDanoComMana'))
            CausarDanoComMana(slot, 0);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('CausarDanoComMana'))
            CausarDanoComMana(slot, 1);
    }

    position = 0;
    for (let slot of slotBem) {
        if (slot.classList.contains('CopiarAdversario')) {
            CopiarAdversario(slot, slotMal[position]);
        }
        position++;
    }
    position = 0;
    for (let slot of slotMal) {
        if (slot.classList.contains('CopiarAdversario')) {
            CopiarAdversario(slot, slotBem[position]);
        }
        position++;
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('DanoEmTodos')) {
            let danoRestante = DanoEmTodos(slot, slotMal);
            causarDanoOponente(danoRestante, vidaPlayerEl);
        }
    }

    for (let slot of slotMal) {
        if (slot.classList.contains('DanoEmTodos')) {
            let danoRestante = DanoEmTodos(slot, slotBem);
            causarDanoOponente(danoRestante, vidaInimigoEl);
        }
    }

    FundoMorrer();

    position = 0;
    for (let slot of slotBem) {
        if (slot.classList.contains('causarDano')) {
            let danoRestante = causarDano(slot, slotMal[position]);
            causarDanoOponente(danoRestante, vidaPlayerEl);
        }
        position++;
    }
    position = 0;
    for (let slot of slotMal) {
        if (slot.classList.contains('causarDano')) {
            let danoRestante = causarDano(slot, slotBem[position]);
            causarDanoOponente(danoRestante, vidaInimigoEl);
        }
        position++;
    }


    position = 0;
    for (let slot of slotBem) {
        if (slot.classList.contains('CausarDanoContinuo'))
            CausarDanoContinuo(slotMal[position]);
        position++;
    }
    position = 0;
    for (let slot of slotMal) {
        if (slot.classList.contains('CausarDanoContinuo'))
            CausarDanoContinuo(slotBem[position]);
        position++;
    }

    position = 0;
    for (let slot of slotBem) {
        if (slot.classList.contains('Congelar'))
            Congelar(slotMal[position]);
        position++;
    }
    position = 0;
    for (let slot of slotMal) {
        if (slot.classList.contains('Congelar'))
            Congelar(slotBem[position]);
        position++;
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('PerdendoVida'))
            PerdendoVida(slot);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('PerdendoVida'))
            PerdendoVida(slot);
    }

    FundoMorrer();

    position = 0;
    for (let slot of slotBem) {
        if (slot.classList.contains('AtaqueDuplo')) {
            let danoRestante = causarDano(slot, slotMal[position]);
            causarDanoOponente(danoRestante, vidaPlayerEl);
        }
        position++;
    }
    position = 0;
    for (let slot of slotMal) {
        if (slot.classList.contains('AtaqueDuplo')) {
            let danoRestante = causarDano(slot, slotBem[position]);
            causarDanoOponente(danoRestante, vidaInimigoEl);
        }
        position++;
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('Sanguessuga'))
            Sanguessuga(slot);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('Sanguessuga'))
            Sanguessuga(slot);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('CurarComMana'))
            CurarComMana(slot, 0);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('CurarComMana'))
            CurarComMana(slot, 1);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('GanharDano'))
            GanharDano(slot);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('GanharDano'))
            GanharDano(slot);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('GanharDanoTime'))
            GanharDanoTime(slotBem);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('GanharDanoTime'))
            GanharDanoTime(slotMal);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('GanharVida'))
            GanharVida(slot);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('GanharVida'))
            GanharVida(slot);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('GanharVidaTime'))
            GanharVidaTime(slotBem);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('GanharVidaTime'))
            GanharVidaTime(slotMal);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('GanharDefesaTime'))
            GanharDefesaTime(slotBem);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('GanharDefesaTime'))
            GanharDefesaTime(slotMal);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('ImunidadeTodos'))
            ImunidadeTodos(slotBem);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('ImunidadeTodos'))
            ImunidadeTodos(slotMal);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('GanharCarta'))
            GanharCarta(0);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('GanharCarta'))
            GanharCarta(1);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('GanharMana'))
            GanharMana(0);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('GanharMana'))
            GanharMana(1);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('Invocar'))
            Invocar(EsqueletoMinion, deckInimigo);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('Invocar'))
            Invocar(EsqueletoMinion, deck);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('PerdendoDano'))
            PerdendoDano(slot);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('PerdendoDano'))
            PerdendoDano(slot);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('GanharVidaMortes'))
            GanharVidaMortes(slot, mortesNoTurno);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('GanharVidaMortes'))
            GanharVidaMortes(slot, mortesNoTurno);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('GanharDanoMortes'))
            GanharDanoMortes(slot, mortesNoTurno);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('GanharDanoMortes'))
            GanharDanoMortes(slot, mortesNoTurno);
    }

    for (let slot of slotBem) {
        if (slot.classList.contains('InvocarMortos'))
            InvocarMortos(mortesNoTurno, deckInimigo);
    }
    for (let slot of slotMal) {
        if (slot.classList.contains('InvocarMortos'))
            InvocarMortos(mortesNoTurno, deck);
    }

    FundoMorrer();

    batalhaEvent = false;
}
let turnoEl = document.querySelector('#passa-turno');
let turnoContadorEl = document.querySelector('#turno-contador');
let turnoFase = 'vez-jogador';
let turnoNumero = 1;
let compraGratis = 5;
let manaMaxima = 1;
let bonus = 1;
definirMana();


turnoEl.addEventListener('click', passarTurno);
function passarTurno() {
    switch (turnoFase) {
        case 'vez-jogador':
            turnoEl.src = 'img/escudo.png';
            turnoFase = 'vez-inimigo';
            playerdeckEl.style.display = 'none';
            CartaAreaEl.style.display = 'none';
            textAreaEl.style.display = 'none';
            textAreaEl.innerHTML = `Próximo:<br>${baralhoObj[0].nome}`;
            compraGratis++;
            OponenteAi();
            break;
        case 'vez-inimigo':
            turnoEl.src = 'img/espada.png';
            turnoFase = 'vez-jogador';
            CartaAreaEl.style.display = 'block';
            textAreaEl.style.display = 'block';
            if (turnoNumero == 50) {
                bonus = 0;
            }
            if (turnoNumero >= 75) {
                causarDanoOponente(2, vidaInimigoEl);
                causarDanoOponente(2, vidaPlayerEl);
            }
            manaVar += 1 + ((turnoNumero / 10) | 0) * bonus;
            manaVarEnemy += 1 + ((turnoNumero / 10) | 0) * bonus;
            manaMaxima += 1 + ((turnoNumero / 10) | 0) * bonus;
            console.log(`manaEnemy${manaVarEnemy}`);
            console.log(`manaPlayer${manaVar}`);
            console.log(`manaMaxima${manaMaxima}`);
            turnoNumero++;
            turnoContadorEl.innerHTML = 'Turno:' + '<br>' + turnoNumero;
            definirMana();
            batalhaEmSI();
            criarDeckInimigo(1 + ((turnoNumero / 10) | 0));
            if (vidaInimigoEl.innerHTML <= 0 && vidaPlayerEl.innerHTML <= 0) {
                alert('EMPATE');
                window.location.href = "jogar.html";
            }
            else if (vidaInimigoEl.innerHTML <= 0) {
                alert('VITORIA');
                window.location.href = "jogar.html";
            }
            else if (vidaPlayerEl.innerHTML <= 0) {
                alert('DERROTA');
                window.location.href = "jogar.html";
            }
            break;
    }
}
/* falas *////
let falaAtual = 0
let falasEl = document.querySelector('#falas');
falasEl.innerHTML = falaOponente[falaAtual];
cheet('x', function () {
    falaAtual++;
    if (falaAtual + 1 <= falaOponente.length)
        falasEl.innerHTML = falaOponente[falaAtual];
    else
        falaAtual--;
});

cheet('z', function () {
    falaAtual--;
    if (falaAtual >= 0)
        falasEl.innerHTML = falaOponente[falaAtual];
    else
        falaAtual++;
});

/* compra cartas *//////////////////////////////////////////////////////////////
let CartaAreaEl = document.querySelector('#baralho-area');
let textAreaEl = document.querySelector('#baralho-texto');
CartaAreaEl.src = baralhoObj[0].imagem;
textAreaEl.innerHTML = `Próximo:<br>${baralhoObj[0].nome}`;
CartaAreaEl.addEventListener('click', function () {
    playerdeckEl.style.display = 'flex';
    if (deck.length > 7)
        return;
    if (manaVar == 0)
        return;
    if (compraGratis < 1) {
        if (manaVar != 0) {
            manaVar--;
        }
    }
    definirMana();
    CartaAreaEl.src = baralhoObj[1].imagem;
    if (compraGratis != 0)
        compraGratis--;
    if (compraGratis > 0) {
        textAreaEl.innerHTML = `Próximo:<br>${baralhoObj[1].nome}`;
    }
    else
        textAreaEl.innerHTML = `Próximo:-1⭐<br>${baralhoObj[1].nome}`;
    AdicionarAoDeck(deck, baralhoObj, 1);
    playerdeckEl.innerHTML = "";
    criarDeck(deck, playerdeckEl);
});

//area das funçoes///////////////////////////////////////////////////////////////////////////
function FundoBaralhoMorrer(passivo, baralho, origem) {
    let vida = passivo.childNodes[2].innerHTML;
    let dano = passivo.childNodes[1].innerHTML;
    dano = parseInt(dano);
    vida = parseInt(vida);
    if (vida < 1) {
        if (passivo.classList.contains('CausarDanoMorrer')) {
            if (origem === 1)
                DanoEmTodos(passivo, slotBem);
            else
                DanoEmTodos(passivo, slotMal);
        }
        if (passivo.classList.contains('InvocarMorrer')) {
            if (origem === 1)
                Invocar(GalinhaRaivosa, deck);
            else
                Invocar(GalinhaRaivosa, deckInimigo);
        }
        if (passivo.classList.contains('InvocarMorrerGelo')) {
            if (origem === 1)
                Invocar(Gelo, deck);
            else
                Invocar(Gelo, deckInimigo);
        }
        if (passivo.classList.contains('Persistir')) {
            if (origem === 1)
                Invocar(cartasDoJogoObj[6], deck);
            else
                Invocar(cartasDoJogoObj[6], deckInimigo);
        }
        if (passivo.classList.contains('Desejos')) {
            for (let i = 0; i < 3; i++) {
                GanharCarta(origem);
            }
        }
        for (let i = 0; i < cartasDoJogoObj.length; i++) {
            if (parseInt(passivo.childNodes[0].alt) === cartasDoJogoObj[i].id) {
                if (i != 0 && i != 6 && cartasDoJogoObj[i].funcoes[3] != 'Invocado') {
                    baralho.push(cartasDoJogoObj[i]);
                }
            }
        }
        passivo.innerHTML = '<img draggable="false"><p class="dmg"></p><p class="hp"></p>';
        while (passivo.classList != "") {
            passivo.classList.remove(passivo.classList[0]);
        }
        if (origem === 1) {
            passivo.classList.add('slotabble');
        }
        if (origem === 0) {
            passivo.classList.add('abble');
            passivo.classList.add('enemyslot');
        }
        return 1;
    }
    return 0;
}
function causarDano(atacante, defensor) {
    let dano = atacante.childNodes[1].innerHTML;
    let vida = defensor.childNodes[2].innerHTML;
    if (atacante.classList.contains('Congelado')) {
        return 0;
    }
    if (vida === "" || vida === undefined)
        return dano;
    else {
        if (defensor.classList.contains('Defesa'))
            dano -= 1;
        if (defensor.classList.contains('Imunidade')) {
            dano = 0;
            defensor.classList.remove('Imunidade');
        }

        if (dano < 0)
            dano = 0;
        vida = vida - dano;
        if (atacante.classList.contains('Executar') == true && vida <= 2 && vida > 0)
            vida = 0;
        if (atacante.classList.contains('DanoAumentado') == true && vida > 0) {
            vida = 0;
            atacante.classList.remove('DanoAumentado');
        }
        defensor.childNodes[2].innerHTML = vida;
        return 0;
    }
}
function causarDanoOponente(dano, alvo) {
    let vida = alvo.innerHTML;
    vida = vida - dano;
    alvo.innerHTML = vida;
}
function GanharVida(alvo) {
    let vida = alvo.childNodes[2].innerHTML;
    vida++;
    alvo.childNodes[2].innerHTML = vida;
}
function GanharDano(alvo) {
    let dano = alvo.childNodes[1].innerHTML;
    dano++;
    alvo.childNodes[1].innerHTML = dano;
}
function Sanguessuga(alvo) {
    let vida = alvo.childNodes[2].innerHTML;
    let dano = alvo.childNodes[1].innerHTML;
    vida = parseInt(vida);
    dano = parseInt(dano);
    vida += dano;
    alvo.childNodes[2].innerHTML = vida;
}
function GanharCarta(causador) {
    if (causador == 1) {
        compraGratis += 1;
        CartaAreaEl.click();
    }
    else
        criarDeckInimigo(1);
}
function GanharMana(causador) {
    if (causador == 1) {
        manaVar += 1;
        definirMana();
    }
    else
        manaVarEnemy += 1;
}
function GanharDanoTime(causadorArry) {
    for (let alvo of causadorArry) {
        let dano = alvo.childNodes[1].innerHTML;
        if (dano != "" && dano != undefined) {
            dano++;
            alvo.childNodes[1].innerHTML = dano;
        }
    }
}
function GanharVidaTime(causadorArry) {
    for (let alvo of causadorArry) {
        let vida = alvo.childNodes[2].innerHTML;
        if (vida != "" && vida != undefined) {
            vida++;
            alvo.childNodes[2].innerHTML = vida;
        }
    }
}
function GanharDefesaTime(causadorArry) {
    for (let alvo of causadorArry) {
        if (alvo.childNodes[2].innerHTML)
            alvo.classList.add('Defesa');
    }
}
function Invocar(invocado, decke) {
    if (decke.length < 9) {
        decke.push(invocado);
        playerdeckEl.innerHTML = "";
        criarDeck(deck, playerdeckEl);
    }
}
function DanoEmTodos(atacante, inimigoArry) {
    let retorno = 0;
    let dano = atacante.childNodes[1].innerHTML;
    dano = parseInt(dano);
    for (let alvo of inimigoArry) {
        let vida = alvo.childNodes[2].innerHTML;
        if (vida === "" || vida === undefined)
            retorno += dano;
        else {
            if (alvo.classList.contains('Defesa') == true)
                dano -= 1;
            if (alvo.classList.contains('Imunidade') == true) {
                dano = 0;
                alvo.classList.remove('Imunidade');
            }
            if (dano < 0)
                dano = 0;
            vida = vida - dano;
            if (atacante.classList.contains('Executar') == true && vida <= 2 && vida > 0)
                vida = 0;
            if (atacante.classList.contains('DanoAumentado') == true && vida > 0) {
                vida = 0;
                atacante.classList.remove('DanoAumentado');
            }
            alvo.childNodes[2].innerHTML = vida;
            retorno += 0;
        }
    }
    return retorno;
}

function CausarDanoContinuo(defensor) {
    if (defensor.childNodes[2].innerHTML)
        defensor.classList.add('PerdendoVida');
}
function Congelar(defensor) {
    if (defensor.childNodes[2].innerHTML)
        defensor.classList.add('Congelado');
}
function PerdendoVida(alvo) {
    let vida = alvo.childNodes[2].innerHTML;
    if (vida != undefined) {
        vida--;
        alvo.childNodes[2].innerHTML = vida;
    }
}
function PerdendoDano(alvo) {
    let dano = alvo.childNodes[1].innerHTML;
    dano--;
    if (dano < 1)
        dano = 1;
    alvo.childNodes[1].innerHTML = dano;
}
function GanharVidaMortes(passivo, numeroDeMortes) {
    let vida = passivo.childNodes[2].innerHTML;
    for (let i = 0; i < numeroDeMortes; i++) {
        vida++;
    }
    passivo.childNodes[2].innerHTML = vida;
}
function GanharDanoMortes(passivo, numeroDeMortes) {
    let dano = passivo.childNodes[1].innerHTML;
    for (let i = 0; i < numeroDeMortes; i++) {
        dano++;
    }
    passivo.childNodes[1].innerHTML = dano;
}
function InvocarMortos(numeroDeMortes, baralho) {
    let i = numeroDeMortes;
    if (i > 3)
        i = 3;
    while (i > 0) {
        Invocar(VirusMinion, baralho);
        i--;
    }
}
function ImunidadeTodos(causadorArry) {
    for (let alvo of causadorArry) {
        let vida = alvo.childNodes[2].innerHTML;
        if (vida != "" && vida != undefined) {
            alvo.classList.add('Imunidade');
        }
    }
}
function CopiarAdversario(atacante, defensor) {
    console.log(defensor);
    if (defensor.childNodes == undefined)
        return;
    let ataqueDefensor = defensor.childNodes[1].innerHTML;
    let vidaDefensor = defensor.childNodes[2].innerHTML;
    if (vidaDefensor === "" || vidaDefensor === undefined)
        return;
    else {
        atacante.childNodes[1].innerHTML = ataqueDefensor;
        atacante.childNodes[2].innerHTML = vidaDefensor;
        atacante.classList.remove('CopiarAdversario');
    }
}
function CausarDanoComVida(passivo) {
    let dano = passivo.childNodes[1].innerHTML;
    let vida = passivo.childNodes[2].innerHTML;
    dano = parseInt(dano);
    vida = parseInt(vida);
    passivo.childNodes[1].innerHTML = vida;
}

function CausarDanoComMana(passivo, origem) {
    let dano = passivo.childNodes[1].innerHTML;
    dano = parseInt(dano);
    if (origem == 1)
        passivo.childNodes[1].innerHTML = manaVar;
    else
        passivo.childNodes[1].innerHTML = manaVarEnemy;
}
function CurarComMana(passivo, origem) {
    let vida = passivo.childNodes[2].innerHTML;
    vida = parseInt(vida);
    if (origem == 1)
        passivo.childNodes[2].innerHTML = vida + manaVar;
    else
        passivo.childNodes[2].innerHTML = vida + manaVarEnemy;
}

