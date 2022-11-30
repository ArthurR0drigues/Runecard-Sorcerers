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

let MinionMaligno = {
    vida: 1,
    dano: 2,
    custo: 0,
    imagem: 'cartas/minionmaligno.png',
    id: 1,
    nome: 'Minion Maligno',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let Cavaleiro = {
    vida: 4,
    dano: 2,
    custo: 2,
    imagem: 'cartas/cavaleiro.png',
    id: 2,
    nome: 'Cavaleiro',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let Cavaleirodastrevas = {
    vida: 2,
    dano: 2,
    custo: 2,
    imagem: 'cartas/cavaleirodastrevas.png',
    id: 3,
    nome: 'Cavaleiro das trevas',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Defesa']
};

let Monge = {
    vida: 4,
    dano: 1,
    custo: 2,
    imagem: 'cartas/monge.png',
    id: 4,
    nome: 'Monge',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'AtaqueDuplo']
};

let Ninja = {
    vida: 2,
    dano: 2,
    custo: 2,
    imagem: 'cartas/ninja.png',
    id: 5,
    nome: 'Ninja',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Imunidade']
};

let Barbaro = {
    vida: 4,
    dano: 3,
    custo: 3,
    imagem: 'cartas/barbaro.png',
    id: 6,
    nome: 'Bárbaro',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Persistir']
};

let Espartano = {
    vida: 4,
    dano: 2,
    custo: 3,
    imagem: 'cartas/espartano.png',
    id: 7,
    nome: 'Espartano',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharDano']
};

let Oni = {
    vida: 4,
    dano: 2,
    custo: 3,
    imagem: 'cartas/oni.png',
    id: 8,
    nome: 'Oni',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CausarDanoMorrer']
};

let Mago = {
    vida: 4,
    dano: 1,
    custo: 5,
    imagem: 'cartas/mago.png',
    id: 9,
    nome: 'Mago',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CausarDanoComMana']
};

let Orc = {
    vida: 5,
    dano: 3,
    custo: 6,
    imagem: 'cartas/orc.png',
    id: 10,
    nome: 'Orc',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharVida', 'GanharDano', 'Defesa']
};

let Guaxinim = {
    vida: 1,
    dano: 3,
    custo: 1,
    imagem: 'cartas/guaxinim.png',
    id: 11,
    nome: 'Guaxinim',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let Virus = {
    vida: 2,
    dano: 1,
    custo: 1,
    imagem: 'cartas/virus.png',
    id: 12,
    nome: 'Vírus',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'InvocarMortos']
};

let Galinha = {
    vida: 1,
    dano: 1,
    custo: 2,
    imagem: 'cartas/galinha.png',
    id: 13,
    nome: 'Galinha',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'InvocarMorrer']
};

let Raposa = {
    vida: 5,
    dano: 1,
    custo: 2,
    imagem: 'cartas/raposa.png',
    id: 14,
    nome: 'Raposa',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let Goblin = {
    vida: 4,
    dano: 2,
    custo: 3,
    imagem: 'cartas/goblin.png',
    id: 15,
    nome: 'Goblin',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharMana']
};

let PlantaCarnivora = {
    vida: 3,
    dano: 1,
    custo: 3,
    imagem: 'cartas/plantacarnivora.png',
    id: 16,
    nome: 'Planta Carnivora',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'DanoAumentado']
};

let Tigre = {
    vida: 4,
    dano: 1,
    custo: 3,
    imagem: 'cartas/tigre.png',
    id: 17,
    nome: 'Tigre',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'AtaqueDuplo', 'GanharDano']
};

let Vespa = {
    vida: 3,
    dano: 2,
    custo: 3,
    imagem: 'cartas/vespa.png',
    id: 18,
    nome: 'Vespa',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CausarDanoContinuo', 'Imunidade']
};

let Ciclope = {
    vida: 6,
    dano: 2,
    custo: 4,
    imagem: 'cartas/ciclope.png',
    id: 19,
    nome: 'Ciclópe',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Executar']
};

let Ent = {
    vida: 6,
    dano: 2,
    custo: 5,
    imagem: 'cartas/ent.png',
    id: 20,
    nome: 'Ent',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharVidaMortes', 'Defesa']
};

let MinionDeGelo = {
    vida: 1,
    dano: 2,
    custo: 1,
    imagem: 'cartas/miniondegelo.png',
    id: 21,
    nome: 'Minion de gelo',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Defesa']
};

let Bonecodeneve = {
    vida: 4,
    dano: 0,
    custo: 1,
    imagem: 'cartas/bonecodeneve.png',
    id: 22,
    nome: 'Boneco de neve',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let Bode = {
    vida: 2,
    dano: 4,
    custo: 2,
    imagem: 'cartas/bode.png',
    id: 23,
    nome: 'Bode',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let GolemDeGelo = {
    vida: 5,
    dano: 3,
    custo: 3,
    imagem: 'cartas/golemdegelo.png',
    id: 24,
    nome: 'Golem de Gelo',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let Aurora = {
    vida: 4,
    dano: 2,
    custo: 4,
    imagem: 'cartas/aurora.png',
    id: 25,
    nome: 'Aurora',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Congelar']
};

let Fantasma = {
    vida: 4,
    dano: 1,
    custo: 4,
    imagem: 'cartas/fantasma.png',
    id: 26,
    nome: 'Fantasma',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'ImunidadeTodos', 'PerdendoVida']
};

let Genio = {
    vida: 4,
    dano: 2,
    custo: 4,
    imagem: 'cartas/genio.png',
    id: 27,
    nome: 'Gênio',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Desejos']
};

let Viking = {
    vida: 3,
    dano: 1,
    custo: 4,
    imagem: 'cartas/viking.png',
    id: 28,
    nome: 'Viking',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharVidaMortes', 'GanharDanoMortes']
};

let Colosso = {
    vida: 8,
    dano: 2,
    custo: 5,
    imagem: 'cartas/colosso.png',
    id: 29,
    nome: 'Colosso',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'InvocarMorrerGelo']
};

let IceLord = {
    vida: 7,
    dano: 7,
    custo: 7,
    imagem: 'cartas/icelord.png',
    id: 30,
    nome: 'Ice Lord',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CausarDanoComVida', 'GanharVida']
};

let Bandido = {
    vida: 2,
    dano: 2,
    custo: 1,
    imagem: 'cartas/bandido.png',
    id: 31,
    nome: 'Bandido',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let Mumia = {
    vida: 3,
    dano: 1,
    custo: 1,
    imagem: 'cartas/mumia.png',
    id: 32,
    nome: 'Múmia',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let Esqueleto = {
    vida: 4,
    dano: 3,
    custo: 2,
    imagem: 'cartas/esqueleto.png',
    id: 33,
    nome: 'Esqueleto',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'PerdendoDano']
};

let Mimico = {
    vida: 1,
    dano: 1,
    custo: 3,
    imagem: 'cartas/mimico.png',
    id: 34,
    nome: 'Mímico',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CopiarAdversario']
};

let Naja = {
    vida: 3,
    dano: 1,
    custo: 3,
    imagem: 'cartas/naja.png',
    id: 35,
    nome: 'Naja',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CausarDanoContinuo', 'AtaqueDuplo']
};

let Necromancer = {
    vida: 4,
    dano: 2,
    custo: 3,
    imagem: 'cartas/necromancer.png',
    id: 36,
    nome: 'Necromancer',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Invocar']
};

let Cleopatra = {
    vida: 6,
    dano: 4,
    custo: 5,
    imagem: 'cartas/cleopatra.png',
    id: 37,
    nome: 'Cleópatra',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharDefesaTime']
};

let Anubis = {
    vida: 8,
    dano: 4,
    custo: 6,
    imagem: 'cartas/anubis.png',
    id: 38,
    nome: 'Anúbis',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharDanoTime']
};

let Ascendido = {
    vida: 2,
    dano: 4,
    custo: 6,
    imagem: 'cartas/ascendido.png',
    id: 39,
    nome: 'Ascendido',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CurarComMana']
};

let Horus = {
    vida: 8,
    dano: 4,
    custo: 6,
    imagem: 'cartas/horus.png',
    id: 40,
    nome: 'Hórus',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharVidaTime']
};

let Aranha = {
    vida: 3,
    dano: 1,
    custo: 2,
    imagem: 'cartas/aranha.png',
    id: 41,
    nome: 'Aranha',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CausarDanoContinuo']
};

let CranioMaligno = {
    vida: 6,
    dano: 6,
    custo: 6,
    imagem: 'cartas/craniomaligno.png',
    id: 42,
    nome: 'Crânio Maligno',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let Olhomaligno = {
    vida: 3,
    dano: 3,
    custo: 2,
    imagem: 'cartas/olhomaligno.png',
    id: 43,
    nome: 'Olho maligno',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let Vampiro = {
    vida: 3,
    dano: 1,
    custo: 2,
    imagem: 'cartas/vampiro.png',
    id: 44,
    nome: 'Vampiro',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Sanguessuga']
};

let CavaleiroFantasma = {
    vida: 5,
    dano: 1,
    custo: 3,
    imagem: 'cartas/cavaleirofantasma.png',
    id: 45,
    nome: 'Cavaleiro Fantasma',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharDanoMortes']
};

let Bruxa = {
    vida: 4,
    dano: 2,
    custo: 3,
    imagem: 'cartas/bruxa.png',
    id: 46,
    nome: 'Bruxa',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharCarta']
};

let CerebroMaligno = {
    vida: 5,
    dano: 5,
    custo: 4,
    imagem: 'cartas/cerebromaligno.png',
    id: 47,
    nome: 'Cérebro maligno',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let Unicornio = {
    vida: 5,
    dano: 1,
    custo: 4,
    imagem: 'cartas/unicornio.png',
    id: 48,
    nome: 'Unicórnio',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharVida', 'GanharDano']
};

let Lobisomen = {
    vida: 6,
    dano: 2,
    custo: 5,
    imagem: 'cartas/lobisomen.png',
    id: 49,
    nome: 'Lobisomen',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'Defesa', 'Sanguessuga']
};

let Dragao = {
    vida: 10,
    dano: 4,
    custo: 8,
    imagem: 'cartas/dragao.png',
    id: 50,
    nome: 'Dragão',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CausarDanoContinuo', 'Executar']
};

let Tartaruga = {
    vida: 3,
    dano: 0,
    custo: 0,
    imagem: 'cartas/tartaruga.png',
    id: 51,
    nome: 'Tartaruga',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let CasteloDeAreia = {
    vida: 6,
    dano: 0,
    custo: 2,
    imagem: 'cartas/castelodeareia.png',
    id: 52,
    nome: 'Castelo de areia',
    funcoes: ['causarDano', 'FundoBaralhoMorrer']
};

let Axalote = {
    vida: 3,
    dano: 1,
    custo: 2,
    imagem: 'cartas/axalote.png',
    id: 53,
    nome: 'Axalote',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'GanharVida']
};

let Enguia = {
    vida: 3,
    dano: 1,
    custo: 2,
    imagem: 'cartas/enguia.png',
    id: 54,
    nome: 'Enguia',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CausarDanoMorrer']
};

let PeixeMonstro = {
    vida: 3,
    dano: 3,
    custo: 2,
    imagem: 'cartas/peixemonstro.png',
    id: 55,
    nome: 'Peixe Monstro',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CausarDanoComVida']
};

let Afogado = {
    vida: 4,
    dano: 2,
    custo: 3,
    imagem: 'cartas/afogado.png',
    id: 56,
    nome: 'Afogado',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'PerdendoVida', 'Imunidade']
};

let Caranguejo = {
    vida: 3,
    dano: 1,
    custo: 3,
    imagem: 'cartas/caranguejo.png',
    id: 57,
    nome: 'Caranguejo',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'AtaqueDuplo', 'Defesa']
};

let AguaViva = {
    vida: 5,
    dano: 1,
    custo: 4,
    imagem: 'cartas/aguaviva.png',
    id: 58,
    nome: 'Água Viva',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'CausarDanoContinuo', 'Executar']
};

let Lula = {
    vida: 3,
    dano: 1,
    custo: 4,
    imagem: 'cartas/lula.png',
    id: 59,
    nome: 'Lula',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'DanoEmTodos', 'CausarDanoContinuo']
};

let Barbanegra = {
    vida: 6,
    dano: 2,
    custo: 6,
    imagem: 'cartas/barbanegra.png',
    id: 60,
    nome: 'Barba Negra',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'DanoEmTodos']
};

let Assassino = {
    vida: 4,
    dano: 2,
    custo: 4,
    imagem: 'cartas/assassino.png',
    id: 61,
    nome: 'Assassino',
    funcoes: ['causarDano', 'FundoBaralhoMorrer', 'DanoAumentado', 'Executar']
};


/*fim das cartas */
let ALLCARDOFTHEGAME = [Afogado, Anubis, Aranha, Axalote, Bandido, Barbanegra, Bonecodeneve, Bruxa, Caranguejo, Cavaleiro, Cavaleirodastrevas, Ciclope, Dragao, Espartano, Esqueleto, Goblin, Guaxinim, Horus, Lobisomen, Lula, Minion, Monge, Mumia, Necromancer, Ninja, Olhomaligno, Tigre, Unicornio, Vampiro, Viking, Virus, Fantasma, Mimico, PlantaCarnivora, CavaleiroFantasma, Ent, GolemDeGelo, Vespa, AguaViva, CerebroMaligno, Oni, IceLord, PeixeMonstro, Assassino, Barbaro, Galinha, Mago, Bode, Raposa, CranioMaligno, Naja, Cleopatra, Ascendido, Enguia, CasteloDeAreia, Tartaruga, Orc, MinionDeGelo, Aurora, Genio, Colosso, MinionMaligno];
ALLCARDOFTHEGAME = ordenarVetor(ALLCARDOFTHEGAME);
let ALLCARDOFTHEGAMEStr = JSON.stringify(ALLCARDOFTHEGAME);
localStorage.setItem('cartas-jogo', ALLCARDOFTHEGAMEStr);
/* vetor com todas as cartas desbloqueadas pelo jogador */
let colecao = ALLCARDOFTHEGAME.slice(1, 11);
colecao.push(Assassino);
/*vetor com as cartas do jogador*/
let baralho = colecao.slice(0, 10);

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
        if (colecao[i].id == 61) {
            cartaEl.style.display = 'none';
            cartaEl.classList.add('hide');
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
            let dragEl = document.querySelector('#drag');
            dragEl.play();
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
let aux = localStorage.getItem('colecao');
if (aux != undefined)
    colecao = JSON.parse(aux);
let colecaoStr = JSON.stringify(colecao);
localStorage.setItem('colecao', colecaoStr);

let voltarBotaoEl = document.querySelector('#voltar-deck');
if (voltarBotaoEl != null)
    voltarBotaoEl.addEventListener('click', voltar);
function voltar() {
    if (baralho.length < 10) {
        alert("Suas cartas não serão salvas devido ao número insufiente (< 10) no seu deck. No entanto seu último deck completo ficará salvo!");
        voltarBotaoEl.preventDefault();
    }
    let baralhoStr = JSON.stringify(baralho);
    localStorage.setItem('baralho', baralhoStr);
}
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

cheet('j a s o n', function () {
    let hideEl = document.querySelector('.hide');
    console.log(hideEl);
    hideEl.style.display = 'inline';
    hideEl.classList.remove('hide');
});
let cartasDesbloqueadasEl = document.querySelector('#cartas-desbloqueadas');
cartasDesbloqueadasEl.innerHTML += ": " + colecao.length + '/61';
