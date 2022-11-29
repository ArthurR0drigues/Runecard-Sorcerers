let CardGame = localStorage.getItem('cartas-jogo');
let CardGameObj = JSON.parse(CardGame);
/* JOGAR */
let Tutorial = {
    oponente: 'Bruno, O instrutor',
    img: 'img/guia.png',   
    deck: [],
    fundo: 'img/Tutorial.jpg',
    musica: 'audio/tutorial.mp4',
    falas: ['Seja bem vindo ao Runecard Sorcerers!<br>Pressione "X" para avançar<br>Pressione "Z" para voltar', 'Esse é um jogo de estratégia, em que seu objetivo é derrotar seu oponente usando suas cartas', 'Onde quem ganha é aquele que deixar seu oponente com 0 de vida', 'Você pode ver sua vida no canto inferior esquerdo, e a vida do inimigo no canto superior esquerdo', 'Você e seu oponente possuem um baralho com 10 cartas, além dos 10 minions iniciais', 'Os minions são cartas de apoio no início do jogo, já que eles não voltam para seu baralho ao morrerem', 'No início de cada turno você pode comprar uma carta clicando na imagem dela no canto inferior direito', 'No primeiro turno do jogo, você tem direito a comprar 5 cartas (clique)','Obs: Caso você não compre a carta no turno, você será compensado no seguinte', 'Caso você já tenha comprado as cartas que você tem direito, se quiser comprar mais cartas terá um custo de 1 de mana', 'Você pode ver sua mana localizada acima da sua vida, representada pela estrela', 'Jogar cartas custa a mana indicada nela', 'Ao fim do turno, você ganha mana baseado no turno atual (Você pode ver o turno logo acima da sua mana)', 'A mana ganhada é aumentada em 1 a cada 10 turnos, mas ao chegar no turno 50, você só ganhará 1 de mana', 'Ataque seu adversário arrastando a carta que deseja selecionar (você só podera jogar se tiver mana suficiente)', 'Após jogar suas cartas clique no símbolo de espada para passar seu turno', 'No turno do oponente ele jogará suas cartas, apertando novamente, agora no escudo, ocorrerá a batalha', 'A batalha funciona de modo que cada carta atacará a carta da frente', 'Caso não haja um oponente na sua frente, ele atacará diretamente o adversário', 'Cada carta tem seus atributos (aperte i) e habilidades específicas', 'No fim da batalha você receberá mana e poderá comprar mais uma carta', 'Você pode desistir a qualquer momento apertando o botão de desistir, mas só receberá recompensas se vencer', 'Descubre o que cada carta tem de especial e boa sorte nos campos de batalhas!'] 
}

let Gladiadores = {
    oponente: 'Julius, o Invencível',
    img: 'img/Gladiador.png',   
    deck: CardGameObj.slice(1, 11),
    fundo: 'img/arena.jpg',
    musica: 'audio/onehourcountdown.mp4',
    falas: [""]
};

let Floresta = {
    oponente: 'Tânia, a Elfa',
    img: 'img/elf.png',
    deck: CardGameObj.slice(11, 21),
    fundo: 'img/selva.png',
    musica: 'audio/floresta.mp4',
    falas: [""] 
};

let Neve = {
    oponente: 'Will, o Viking',
    img: 'img/viking.png',   
    deck: CardGameObj.slice(21, 31),
    fundo: 'img/gelo.jpg',
    musica: 'audio/epico.mp4',
    falas: [""]
};
let Deserto = {
    oponente: 'Arthar, O imperador',
    img: 'img/farao.png',   
    deck: CardGameObj.slice(31, 41),
    fundo: 'img/Deserto.png',
    musica: 'audio/mantis.mp4',
    falas: [""]
};
let Fantasia = {
    oponente: 'Dante, o Vampiro',
    img: 'img/conde.png',
    deck: CardGameObj.slice(41, 51),
    fundo: 'img/monstros.jpg',
    musica: 'audio/Hollow_Knight_OST_-_Nosk_(Hydr0.org).mp3',
    falas: [""]
};

let Oceano = {
    oponente: 'Klaus, o Capitão',
    img: 'img/pirata.png',   
    deck: CardGameObj.slice(51, 61),
    fundo: 'img/oceano.png',
    musica: 'audio/audiopirata.mp4',
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
    localStorage.setItem('fundoOponente', batalhasDisponiveis[oponenteAtual].fundo);
    localStorage.setItem('temaOponente', batalhasDisponiveis[oponenteAtual].musica);
});


