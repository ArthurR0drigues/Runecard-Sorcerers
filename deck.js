/*todas as cartas */

let Minion = {
    vida: 1,
    dano: 1,
    custo: 0,
    imagem: 'cartas/minion.png',
    id: 0,
    nome: 'Minion',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let Guaxinim = {
    vida: 1,
    dano: 3,
    custo: 1,
    imagem: 'cartas/guaxinim.png',
    id: 1,
    nome: 'Guaxinim',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let Tigre = {
    vida: 4,
    dano: 1,
    custo: 3,
    imagem: 'cartas/tigre.png',
    id: 2,
    nome: 'Tigre',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'AtaqueDuplo', 'GanharDano'] 
};

let Virus = {
    vida: 1,
    dano: 1,
    custo: 2,
    imagem: 'cartas/virus.png',
    id: 3,
    nome: 'Virus',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'InvocarMortos'] 
};

let Goblin = {
    vida: 4,
    dano: 2,
    custo: 3,
    imagem: 'cartas/goblin.png',
    id: 4,
    nome: 'Goblin',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharMana'] 
};

let Ciclope = {
    vida: 6,
    dano: 2,
    custo: 4,
    imagem: 'cartas/ciclope.png',
    id: 5,
    nome: 'Ciclope',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Executar'] 
};

let Bonecodeneve = {
    vida: 4,
    dano: 0,
    custo: 1,
    imagem: 'cartas/Bonecodeneve.png',
    id: 6,
    nome: 'Bonecodeneve',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let Espartano = {
    vida: 4,
    dano: 2,
    custo: 3,
    imagem: 'cartas/Espartano.png',
    id: 7,
    nome: 'Espartano',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharDano'] 
};

let Viking = {
    vida: 3,
    dano: 1,
    custo: 3,
    imagem: 'cartas/viking.png',
    id: 8,
    nome: 'Viking',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharVidaMortes'] 
};

let Ninja = {
    vida: 2,
    dano: 2,
    custo: 2,
    imagem: 'cartas/ninja.png',
    id: 9,
    nome: 'Ninja',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Imunidade'] 
};

let Bandido = {
    vida: 2,
    dano: 2,
    custo: 1,
    imagem: 'cartas/bandido.png',
    id: 10,
    nome: 'Bandido',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let Cavaleiro = {
    vida: 3,
    dano: 2,
    custo: 1,
    imagem: 'cartas/cavaleiro.png',
    id: 11,
    nome: 'Cavaleiro',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
};

let Monge = {
    vida: 4,
    dano: 1,
    custo: 2,
    imagem: 'cartas/monge.png',
    id: 12,
    nome: 'Monge',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'AtaqueDuplo'] 
}; 

let Anubis = {
    vida: 8,
    dano: 4,
    custo: 6,
    imagem: 'cartas/anubis.png',
    id: 13,
    nome: 'Anubis',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharDanoTime'] 
}; 

let Horus = {
    vida: 8,
    dano: 4,
    custo: 6,
    imagem: 'cartas/horus.png',
    id: 14,
    nome: 'Horus',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharVidaTime'] 
}; 

let Mumia = {
    vida: 3,
    dano: 1,
    custo: 1,
    imagem: 'cartas/mumia.png',
    id: 15,
    nome: 'Mumia',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
}; 

let Necromancer = {
    vida: 4,
    dano: 2,
    custo: 3,
    imagem: 'cartas/necromancer.png',
    id: 16,
    nome: 'Necromancer',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Invocar'] 
}; 

let Lobisomen = {
    vida: 6,
    dano: 2,
    custo: 5,
    imagem: 'cartas/lobisomen.png',
    id: 17,
    nome: 'Lobisomen',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Defesa', 'Sanguessuga'] 
}; 

let Esqueleto = {
    vida: 4,
    dano: 3,
    custo: 2,
    imagem: 'cartas/esqueleto.png',
    id: 18,
    nome: 'Esqueleto',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'PerdendoDano'] 
}; 

let Dragao = {
    vida: 10,
    dano: 4,
    custo: 8,
    imagem: 'cartas/dragao.png',
    id: 19,
    nome: 'Dragao',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CausarDanoContinuo', 'Executar'] 
}; 

let Aranha = {
    vida: 3,
    dano: 1,
    custo: 2,
    imagem: 'cartas/aranha.png',
    id: 20,
    nome: 'Aranha',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CausarDanoContinuo'] 
}; 

let Cavaleirodastrevas = {
    vida: 2,
    dano: 2,
    custo: 2,
    imagem: 'cartas/cavaleirodastrevas.png',
    id: 21,
    nome: 'Cavaleirodastrevas',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Defesa'] 
}; 

let Bruxa = {
    vida: 4,
    dano: 2,
    custo: 3,
    imagem: 'cartas/bruxa.png',
    id: 22,
    nome: 'Bruxa',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharCarta'] 
}; 

let Vampiro = {
    vida: 2,
    dano: 2,
    custo: 2,
    imagem: 'cartas/vampiro.png',
    id: 23,
    nome: 'Vampiro',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Sanguessuga'] 
}; 

let Unicornio = {
    vida: 5,
    dano: 1,
    custo: 4,
    imagem: 'cartas/unicornio.png',
    id: 24,
    nome: 'Unicornio',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharVida', 'GanharDano'] 
}; 

let Olhomaligno = {
    vida: 3,
    dano: 3,
    custo: 2,
    imagem: 'cartas/olhomaligno.png',
    id: 25,
    nome: 'Olhomaligno',
    funcoes: ['causarDano', 'FundoBaralhoMorrer'] 
}; 

let Barbanegra = {
    vida: 6,
    dano: 2,
    custo: 6,
    imagem: 'cartas/barbanegra.png',
    id: 26,
    nome: 'Barbanegra',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'DanoEmTodos'] 
}; 

let Axalote = {
    vida: 3,
    dano: 1,
    custo: 2,
    imagem: 'cartas/axalote.png',
    id: 27,
    nome: 'Axalote',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharVida'] 
}; 

let Afogado = {
    vida: 4,
    dano: 2,
    custo: 3,
    imagem: 'cartas/afogado.png',
    id: 28,
    nome: 'Afogado',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'PerdendoVida', 'Imunidade'] 
}; 

let Caranguejo = {
    vida: 3,
    dano: 1,
    custo: 3,
    imagem: 'cartas/caranguejo.png',
    id: 29,
    nome: 'Caranguejo',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'AtaqueDuplo', 'Defesa'] 
}; 

let Lula = {
    vida: 5,
    dano: 1,
    custo: 4,
    imagem: 'cartas/lula.png',
    id: 30,
    nome: 'Lula',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'DanoEmTodos', 'CausarDanoContinuo'] 
}; 
/*fim das cartas */
let ALLCARDOFTHEGAME = [Afogado, Anubis, Aranha, Axalote, Bandido, Barbanegra, Bonecodeneve, Bruxa, Caranguejo, Cavaleiro, Cavaleirodastrevas, Ciclope, Dragao, Espartano, Esqueleto, Goblin, Guaxinim, Horus, Lobisomen, Lula, Minion, Monge, Mumia, Necromancer, Ninja, Olhomaligno, Tigre, Unicornio, Vampiro, Viking, Virus]; 
ALLCARDOFTHEGAME = ordenarVetor(ALLCARDOFTHEGAME); 
let ALLCARDOFTHEGAMEStr = JSON.stringify(ALLCARDOFTHEGAME);
localStorage.setItem('cartas-jogo', ALLCARDOFTHEGAMEStr); 
/* vetor com todas as cartas desbloqueadas pelo jogador */
let colecao = [Afogado, Anubis, Aranha, Axalote, Bandido, Barbanegra, Bonecodeneve, Bruxa, Caranguejo, Cavaleiro, Cavaleirodastrevas, Ciclope, Dragao, Espartano, Esqueleto, Goblin, Guaxinim, Horus, Lobisomen, Lula, Monge, Mumia, Necromancer, Ninja, Olhomaligno, Tigre, Unicornio, Vampiro, Viking, Virus];
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
