let cartasDoJogoJs = localStorage.getItem('cartas-jogo');
let cartasDoJogoObj = JSON.parse(cartasDoJogoJs);
let colecaoJs = localStorage.getItem('colecao');
let colecaoObj = JSON.parse(colecaoJs);
 

let dinheiroDoJogador = localStorage.getItem('dinheiro');
let dinheiroEl = document.querySelector('#gemas-player');
dinheiroEl.innerHTML = '💎' + dinheiroDoJogador;



let reciclarEl = document.querySelector('#reciclar');
cartaVendaEl = document.querySelectorAll('.carta-venda');
let rotate = 200;
let pos;
let antiloop = 0;
let colecaoCopy = colecaoObj;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function search(colecaoCopy) {
    for (let desbloqueada of colecaoCopy) {
        if (cartasDoJogoObj[pos].imagem == desbloqueada.imagem) {
            return 3;
        }
    }
    colecaoCopy.unshift(cartasDoJogoObj[pos]);
    colecaoJs = localStorage.getItem('colecao');
    colecaoObj = JSON.parse(colecaoJs);
    return 1;
}


let voltarEl = document.querySelector('.volta');
voltarEl.addEventListener('click', salvarLoja);
function salvarLoja() {
    let lojaObj = [];
    let lojaClassObj = []; 
    cartaVendaEl.forEach(carta => lojaObj.push(carta.innerHTML));
    cartaVendaEl.forEach(carta => lojaClassObj.push(carta.classList));
    let lojaStr = JSON.stringify(lojaObj); 
    let lojaClassStr = JSON.stringify(lojaClassObj); 
    localStorage.setItem('loja', lojaStr);
    localStorage.setItem('lojaClass', lojaClassStr);
}
function carregarLoja() {
    let lojaStr = localStorage.getItem('loja');
    let lojaClassStr = localStorage.getItem('lojaClass');
    let lojaObj = JSON.parse(lojaStr); 
    let lojaClassObj = JSON.parse(lojaClassStr); 
    let i = 0;
    for (let carta of cartaVendaEl) {
        if (lojaObj == null)
            return;
        carta.innerHTML = lojaObj[i];
        carta.classList.add(lojaClassObj[i][0]);
        if (lojaClassObj[i][1] != undefined)
            carta.classList.add(lojaClassObj[i][1]);
        i++;
    }
}
carregarLoja();
function resetarCartas() {
    if (dinheiroDoJogador - 20 < 0)
        return; 
    dinheiroDoJogador -= 20; 
    dinheiroEl.innerHTML = '💎' + dinheiroDoJogador;
    localStorage.setItem('dinheiro', dinheiroDoJogador)
    for (let botao of botaoComprarEl) {
        botao.addEventListener('click', comprarCarta);
    }
    for (let carta of cartaVendaEl) {
        carta.childNodes[3].innerHTML = 'Comprar💰-25💎'
        carta.childNodes[5].style.display = 'inline'
        
        if (carta.classList.contains('trancado') == false) {
            pos = 1 + getRandomInt(60);
            while (search(colecaoCopy) != 1) {
                pos = 1 + getRandomInt(60);
                antiloop++;
                if (antiloop == 600) {
                    antiloop = 0;
                    pos = 0;
                    break;
                }
            }
            carta.childNodes[1].classList.remove(carta.childNodes[1].classList[0]);
            carta.childNodes[1].src = cartasDoJogoObj[pos].imagem;
            carta.childNodes[1].classList.add(cartasDoJogoObj[pos].id);
            if (pos == 0) {
                carta.childNodes[1].classList.remove(carta.childNodes[1].classList[0]);
                carta.childNodes[1].src = 'img/carta-bloqueada.png';
                carta.childNodes[3].innerHTML = 'COMPRADO'
                carta.childNodes[5].style.display = 'none'
            }
            carta.classList.add('girar');
            setTimeout(() => {
                carta.classList.remove('girar');
            }, rotate);
        }
    }
    colecaoCopy = colecaoObj;
}



botaoTrancarEl = document.querySelectorAll('.botao-trancar');
function congelarCompra(e) {
    e.currentTarget.parentElement.classList.toggle('trancado');
}
for (let botao of botaoTrancarEl) {
    botao.addEventListener('click', congelarCompra);
}

botaoComprarEl = document.querySelectorAll('.botao-comprar');
reciclarEl.addEventListener('click', resetarCartas);
if (localStorage.getItem('loja') == null)
    resetarCartas();
    
function comprarCarta(e) {
    if (e.currentTarget.parentElement.childNodes[3].innerHTML == 'COMPRADO') {
        return;
    }
    if (dinheiroDoJogador - 25 < 0)
        return; 
    dinheiroDoJogador -= 25; 
    dinheiroEl.innerHTML = '💎' + dinheiroDoJogador;
    localStorage.setItem('dinheiro', dinheiroDoJogador)
    e.currentTarget.parentElement.classList.remove('trancado');
    e.currentTarget.parentElement.childNodes[3].innerHTML = 'COMPRADO';
    e.currentTarget.parentElement.childNodes[5].style.display = 'none';
    e.currentTarget.parentElement.childNodes[3].removeEventListener('click', comprarCarta);
    colecaoObj.push(cartasDoJogoObj[e.currentTarget.parentElement.childNodes[1].classList[0]]);
    let colecaoStr = JSON.stringify(colecaoObj);
    localStorage.setItem('colecao', colecaoStr);
}
for (let botao of botaoComprarEl) {
    botao.addEventListener('click', comprarCarta);
}
localStorage.setItem('dinheiro', dinheiroDoJogador);

