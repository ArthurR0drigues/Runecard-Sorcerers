/*todas as cartas */
let minion = {
    vida: 2,
    vidaMaxima: 2,
    dano: 1,
    custo: 1,
    imagem: 'img/minion.png',
    id: 0,
    nome: 'minion'
};

let cavaleiro = {
    vida: 4,
    vidaMaxima: 4,
    dano: 2,
    custo: 2,
    imagem: 'img/knight.png',
    id: 1,
    nome: 'cavaleiro'
};

let cabra = {
    vida: 4,
    vidaMaxima: 4,
    dano: 2,
    custo: 2,
    imagem: 'img/background.jpg',
    id: 2,
    nome: 'cabra'
};

let naga = {
    vida: 4,
    vidaMaxima: 4,
    dano: 2,
    custo: 2,
    imagem: 'img/background2.jpg',
    id: 3,
    nome: 'naga'
};

let polvo = {
    vida: 4,
    vidaMaxima: 4,
    dano: 2,
    custo: 2,
    imagem: 'img/proximo.png',
    id: 4,
    nome: 'polvo'
};

let dragao = {
    vida: 4,
    vidaMaxima: 4,
    dano: 2,
    custo: 2,
    imagem: 'img/anterior.png',
    id: 5,
    nome: 'dragao'
};



/*fim das cartas */

/* vetor com todas as cartas desbloqueadas pelo jogador */
let colecao = [cabra, minion, dragao, cavaleiro, naga, polvo];
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
            if (baralho.length == 10)
                return console.log("limite");

            if (cartaEl.classList.contains('adicionar-baralho') === true) {
                let i = 0;
                let cont;
                for (let carta of baralho) {
                    let comparasion = e.target.src;
                    comparasion = comparasion.substring(46);
                    if (comparasion == carta.imagem) {
                        cont = i;
                    }
                    i++;
                }
                baralho[cont] = 'apague';
                baralho = baralho.filter(word => word != 'apague');
            }
            else {
                baralho.push(colecao[i]);
            }
            baralho.slice(0, baralho.length);
            baralhoEl.innerText = "";
            baralho = ordenarVetor(baralho);
            criarBaralho(baralho, baralhoEl);
            cartaEl.classList.toggle('adicionar-baralho');
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
let colecaoStr = JSON.stringify(colecao);
localStorage.setItem('colecao', colecaoStr);

let voltarBotaoEl = document.querySelector('#voltar-deck');
voltarBotaoEl.addEventListener('click', function () {
    let baralhoStr = JSON.stringify(baralho);
    localStorage.setItem('baralho', baralhoStr);
})

let colecaoJs = localStorage.getItem('colecao');
colecao = JSON.parse(colecaoJs);
criarAllcard(colecao, colecaoEl);
criarBaralho(baralho, baralhoEl);


