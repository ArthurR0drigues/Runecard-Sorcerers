let CardGame = localStorage.getItem('cartas-jogo');
let CardGameObj = JSON.parse(CardGame);
/* JOGAR */
let Tutorial = {
    oponente: 'Tutorial',
    img: 'cartas/minion.png',   
    deck: [],
    falas: ['Seja bem vindo ao Runecard Sorcerers!<br>Pressione "X" para avançar<br>Pressione "Z" para voltar', 'Esse é um jogo de estratégia, em que seu objetivo é derrotar seu oponente usando suas cartas', 'Onde quem ganha é aquele que deixar seu oponente com 0 de vida', 'Você pode ver sua vida no canto inferior esquerdo, e a vida do inimigo no canto superior esquerdo', 'Você e seu oponente possuem um baralho com 10 cartas, além dos 10 minions iniciais', 'Os minions são cartas de apoio no início do jogo, já que eles não voltam para seu baralho ao morrerem', 'No início de cada turno você pode comprar uma carta clicando na imagem dela no canto inferior direito', 'No primeiro turno do jogo, você tem direito a comprar 5 cartas (clique)','Obs: Caso você não compre a carta no turno, você será compensado no seguinte', 'Caso você já tenha comprado as cartas que você tem direito, se quiser comprar mais cartas terá um custo de 1 de mana', 'Você pode ver sua mana localizada acima da sua vida, representada pela estrela', 'Jogar cartas custa a mana indicada nela', 'Ao fim do turno, você ganha mana baseado no turno atual (Você pode ver o turno logo acima da sua mana)', 'A mana ganhada é aumentada em 1 a cada 10 turnos, mas ao chegar no turno 50, você só ganhará 1 de mana', 'Ataque seu adversário arrastando a carta que deseja selecionar (você só podera jogar se tiver mana suficiente)', 'Após jogar suas cartas clique no símbolo de espada para passar seu turno', 'No turno do oponente ele jogará suas cartas, apertando novamente, agora no escudo, ocorrerá a batalha', 'A batalha funciona de modo que cada carta atacará a carta da frente', 'Caso não haja um oponente na sua frente, ele atacará diretamente o adversário', 'Cada carta tem seus atributos (aperte i) e habilidades específicas', 'No fim da batalha você receberá mana e poderá comprar mais uma carta', 'Você pode desistir a qualquer momento apertando o botão de desistir, mas só receberá recompensas se vencer', 'Descubre o que cada carta tem de especial e boa sorte nos campos de batalhas!'] 
}

let Gladiadores = {
    oponente: 'Oponente 1',
    img: 'cartas/minion.png',   
    deck: CardGameObj.slice(1, 11),
    falas: [""]
};

let Floresta = {
    oponente: 'Oponente 2',
    img: 'img/carta-base.png',
    deck: CardGameObj.slice(11, 21),
    falas: [""]
};

let Neve = {
    oponente: 'Oponente 3',
    img: 'img/carta.png',   
    deck: CardGameObj.slice(21, 31),
    falas: [""]
};
let Deserto = {
    oponente: 'Oponente 4',
    img: 'cartas/minion.png',   
    deck: CardGameObj.slice(31, 41),
    falas: [""]
};
let Fantasia = {
    oponente: 'Oponente 5',
    img: 'img/carta-base.png',
    deck: CardGameObj.slice(41, 51),
    falas: [""]
};

let Oceano = {
    oponente: 'Oponente 6',
    img: 'img/carta.png',   
    deck: CardGameObj.slice(51, 61),
    falas: [""]
};

//seletor de oponentes
let batalhasDisponiveis = [Tutorial, Gladiadores, Floresta, Neve, Deserto, Fantasia, Oceano];
let oponenteAtual = -1;
let oponenteEl = document.querySelector('#img-oponente');
let nomeOponenteEl = document.querySelector('#nome-oponente');
let anteriorEl = document.querySelector('#anterior');
let proximoEl = document.querySelector('#proximo');

anteriorEl.addEventListener('click', anterior);
function anterior () {
    oponenteAtual--;
    if (oponenteAtual < 0) {
        oponenteAtual = batalhasDisponiveis.length - 1;
    }    
    oponenteEl.src = batalhasDisponiveis[oponenteAtual].img;
    nomeOponenteEl.innerHTML = batalhasDisponiveis[oponenteAtual].oponente;
};    
proximoEl.addEventListener('click', proximo);
function proximo() {
    oponenteAtual++;
    if (oponenteAtual > batalhasDisponiveis.length - 1) {
        oponenteAtual = 0;
    }    
    oponenteEl.src = batalhasDisponiveis[oponenteAtual].img;
    nomeOponenteEl.innerHTML = batalhasDisponiveis[oponenteAtual].oponente;
};     
proximo();

let botaoOponenteEl = document.querySelector('#link-oponente');
botaoOponenteEl.addEventListener('click', function () {
    localStorage.setItem('oponente', oponenteEl.src); 
    let falaOponentestr = JSON.stringify(batalhasDisponiveis[oponenteAtual].falas); 
    let deckOponentestr = JSON.stringify(batalhasDisponiveis[oponenteAtual].deck); 
    localStorage.setItem('baralhoOponente', deckOponentestr); 
    localStorage.setItem('falaOponente', falaOponentestr);
});


