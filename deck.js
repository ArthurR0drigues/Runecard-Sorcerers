/*todas as cartas */

let minion = {
    vida: 1,
    dano: 1,
    custo: 0,
    imagem: 'img/minion.png',
    id: 0,
    nome: 'minion',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let cavaleiro = {
    vida: 4,
    dano: 2,
    custo: 2,
    imagem: 'img/knight.png',
    id: 1,
    nome: 'cavaleiro',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let cabra = {
    vida: 3,
    dano: 1,
    custo: 1,
    imagem: 'img/background.jpg',
    id: 2,
    nome: 'cabra',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let naga = {
    vida: 6,
    dano: 2,
    custo: 3,
    imagem: 'img/background2.jpg',
    id: 3,
    nome: 'naga',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let polvo = {
    vida: 1,
    dano: 2,
    custo: 1,
    imagem: 'img/proximo.png',
    id: 4,
    nome: 'polvo',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let dragao = {
    vida: 10,
    dano: 6,
    custo: 4,
    imagem: 'img/anterior.png',
    id: 5,
    nome: 'dragao',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let valquiria = {
    vida: 4,
    dano: 2,
    custo: 2,
    imagem: 'img/Runa-Logo.png',
    id: 6,
    nome: 'valquiria ',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let mesa = {
    vida: 4,
    dano: 2,
    custo: 2,
    imagem: 'img/mesa.jpg',
    id: 7,
    nome: 'mesa',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let ciclope = {
    vida: 8,
    dano: 2,
    custo: 4,
    imagem: 'img/carta-base.png',
    id: 8,
    nome: 'ciclope',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let besta = {
    vida: 6,
    dano: 6,
    custo: 6,
    imagem: 'img/background-loja.jpg',
    id: 9,
    nome: 'besta',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let Marta = {
    vida: 10,
    dano: 10,
    custo: 1,
    imagem: 'img/background-sobre-nos.jpg',
    id: 9,
    nome: 'Marta',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let Ka = {
    vida: 1,
    dano: 1,
    custo: 1,
    imagem: 'img/carta-bloqueada.png',
    id: 10,
    nome: 'Ka',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};



/*fim das cartas */
let ALLCARDOFTHEGAME = [minion, cabra, dragao, cavaleiro, naga, Ka, polvo, besta, ciclope, valquiria, Marta, mesa]; 
ALLCARDOFTHEGAME = ordenarVetor(ALLCARDOFTHEGAME); 
let ALLCARDOFTHEGAMEStr = JSON.stringify(ALLCARDOFTHEGAME);
localStorage.setItem('cartas-jogo', ALLCARDOFTHEGAMEStr); 
/* vetor com todas as cartas desbloqueadas pelo jogador */
let colecao = [cabra, dragao, cavaleiro, naga, Ka, polvo, besta, ciclope, valquiria, Marta, mesa];
/*vetor com as cartas do jogador*/
let baralho = [];


//ordenar o vetor   
function ordenarVetor(vetor) {
    let vetorOrdenado = [];
    for (let i = 0; vetor.length > 0; i++) {
        let menor = 9999;
        let menorid;
        let cont = 0;
        for (let object of vetor) {
            if (object.id < menor) {
                menor = object.id;
                menorid = cont;
            }
            cont++;
        }
        vetorOrdenado[i] = vetor[menorid];
        vetor[menorid] = 'apague';
        vetor = vetor.filter(word => word != 'apague');
    }

    return vetorOrdenado;
};

//criar vetores
let colecaoEl = document.querySelector('#colecao');
let baralhoEl = document.querySelector('#baralho-formado');
function criarAllcard(colecao, paiEl) {
    colecao = ordenarVetor(colecao);
    for (let i = 0; i < colecao.length; i++) {
        let cartaEl = document.createElement("img");
        cartaEl.draggable = false;
        cartaEl.classList.add('desbloqueado');
        cartaEl.src = colecao[i].imagem;
        if (paiEl == null) {
            return false;
        }
        paiEl.appendChild(cartaEl);
        cartaEl.addEventListener('click', function (e) {
            if (cartaEl.classList.contains('adicionar-baralho') === true) {
                let i = 0;
                let cont;
                for (let carta of baralho) {
                    let comparasion = e.target.src;
                    if (comparasion.indexOf(carta.imagem) != -1) {
                        cont = i;
                    }
                    else {
                        i++;
                    }
                }
                baralho[cont] = 'remove';
                baralho = baralho.filter(word => word != 'remove');
            }
            else {
                if (baralho.length == 10)
                    return console.log("limite");
                else
                    baralho.push(colecao[i]);
            }
            baralho.slice(0, baralho.length);
            baralhoEl.innerText = "";
            baralho = ordenarVetor(baralho);
            criarBaralho(baralho, baralhoEl);
            cartaEl.classList.toggle('adicionar-baralho');
            let avisoLenEl = document.querySelector('.alerta-len');
            let avisoMaxEl = document.querySelector('.alerta-max');
            if (baralho.length > 9) {
                avisoMaxEl.style.display = 'inline';
                avisoLenEl.style.display = 'none';
            }
            if (baralho.length < 10) {
                avisoLenEl.style.display = 'inline';
                avisoMaxEl.style.display = 'none';
            }

        });
    }
};
function criarBaralho(baralho, paiEl) {
    for (let i = 0; i < baralho.length; i++) {
        let cartaEl = document.createElement("img");
        cartaEl.draggable = false;
        cartaEl.src = baralho[i].imagem;
        cartaEl.addEventListener('click', function () {
            baralho.slice(cartaEl);
        });
        paiEl.appendChild(cartaEl);
    }
};

//salva as informações
let colecaoStr = JSON.stringify(colecao);
localStorage.setItem('colecao', colecaoStr);

let voltarBotaoEl = document.querySelector('#voltar-deck');
voltarBotaoEl.addEventListener('click', function () {
    if (baralho.length < 10) {
        alert("Suas cartas não serão salvas devido ao número insufiente (< 10) no seu deck. No entanto seu último deck completo ficará salvo");
        voltarBotaoEl.preventDefault();
    }
    let baralhoStr = JSON.stringify(baralho);
    localStorage.setItem('baralho', baralhoStr);
})

//chama as funçoes ao iniciar a pagina
let colecaoJs = localStorage.getItem('colecao');
colecao = JSON.parse(colecaoJs);
let baralhoJs = localStorage.getItem('baralho');
if (baralhoJs != null) {
    baralho = JSON.parse(baralhoJs);
}
criarAllcard(colecao, colecaoEl);
criarBaralho(baralho, baralhoEl);

if (baralho != null) {
    let CartasCriadasEl = document.querySelectorAll('.desbloqueado');
    for (let object of baralho) {
        for (let i = 0; i < CartasCriadasEl.length; i++) {
            let comparasion = CartasCriadasEl[i].src;
            if (comparasion.indexOf(object.imagem) != -1)
                CartasCriadasEl[i].classList.toggle('adicionar-baralho');
        }
    }
}

let avisoLenEl = document.querySelector('.alerta-len');
let avisoMaxEl = document.querySelector('.alerta-max');
if (baralho.lenght == 10) {
    avisoMaxEl.style.display = 'inline';
}
if (baralho.length > 9) {
    avisoLenEl.style.display = 'none';
}
if (baralho.length < 10) {
    avisoLenEl.style.display = 'inline';
    avisoMaxEl.style.display = 'none';
}
