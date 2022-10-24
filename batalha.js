/*vetor com as carts do jogador*/
let baralho = []; 
/*todas as cartas */
let minion = {
    vida: 2, 
    vidaMaxima: 2, 
    dano: 1, 
    custo: 1,
    imagem: 'img/Runa-Logo.png',
    id: 0 
}; 

/*fim das cartas */

function adicionarAoBaralho(carta){
    baralho[baralho.length] = carta; 
}; 
function criarBaralho(baralho) {
    for (let i=0; i < baralho.length; i++){
        console.log("aBA"); 
        let cartaEl = document.createElement("img"); 
        cartaEl.src = baralho[i].imagem; 
        let areaEl = document.querySelector('#baralho-area');
        areaEl.appendChild(cartaEl); 
    }
}; 
