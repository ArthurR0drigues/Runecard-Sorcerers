let Usuario = JSON.stringify(localStorage.getItem('user'));


let saveDataEl = document.querySelector('#save-data');
saveDataEl.addEventListener('click', function (){

    let BancoDeSenha = [];
    let colecaoStr = localStorage.getItem('colecao');
    let baralhoStr = localStorage.getItem('baralho');
    let cartasJogoStr = localStorage.getItem('cartas-jogo');
    let dinheiroStr = localStorage.getItem('dinheiro');
    let lojaStr = localStorage.getItem('loja');
    let lojaClassStr = localStorage.getItem('lojaClass');

    BancoDeSenha[0] = colecaoStr;
    BancoDeSenha[1] = baralhoStr;
    BancoDeSenha[2] = cartasJogoStr;
    BancoDeSenha[3] = dinheiroStr; 
    BancoDeSenha[4] = lojaStr;
    BancoDeSenha[5] = lojaClassStr; 
    let BancoDeSenhaStr = JSON.stringify(BancoDeSenha);
    localStorage.setItem(Usuario, BancoDeSenhaStr);

    window.location.href = 'index.html';
})



let dinheiroDoJogador = parseInt(localStorage.getItem('dinheiro'));
if (isNaN(dinheiroDoJogador))
    localStorage.setItem('dinheiro', 20);
else
    localStorage.setItem('dinheiro', dinheiroDoJogador);

