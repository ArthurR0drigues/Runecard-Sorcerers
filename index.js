let deleteDataEl = document.querySelector('#delete-data');
deleteDataEl.addEventListener('click', function () {
    if (confirm('Se confirmar, todo seu progresso será perdido') == true) {
        localStorage.removeItem('cartas-jogo');
        localStorage.removeItem('baralho');
        localStorage.removeItem('colecao');
        document.location.reload(true);
    }
})

let saveDataEl = document.querySelector('#save-data');
saveDataEl.addEventListener('click', function () {
    let resposta = prompt('Digite uma senha em que seus dados ficarão salvo (mínimo de 6 e máximo de 10 caracteres)');
    if (resposta.length > 5 && resposta.length < 11 && resposta != null) {

        let BancoDeSenha = [];
        let colecaoStr = localStorage.getItem('colecao');
        let baralhoStr = localStorage.getItem('baralho');
        let cartasJogoStr = localStorage.getItem('cartas-jogo');;

        BancoDeSenha[0] = cartasJogoStr;
        BancoDeSenha[1] = colecaoStr;
        BancoDeSenha[2] = baralhoStr;

        let BancoDeSenhaStr = JSON.stringify(BancoDeSenha);
        localStorage.setItem(resposta, BancoDeSenhaStr);
    }
    else {
        alert('Senha não adequada aos requisitos');
    }
})

let loadDataEl = document.querySelector('#load-data');
loadDataEl.addEventListener('click', function () {
    let resposta = prompt('Digite a senha em que seus dados foram salvos');
    let encontrado = true;
    let dadoSalvoStr = localStorage.getItem(resposta);
    if (dadoSalvoStr == undefined){
        encontrado = false; 
    }
    let dadoSalvoJs = JSON.parse(dadoSalvoStr);
    localStorage.setItem('cartas-jogo', dadoSalvoJs[0]);
    localStorage.setItem('colecao', dadoSalvoJs[1]);
    localStorage.setItem('baralho', dadoSalvoJs[2]);

    if (encontrado == false)
        alert('Senha não encontrada');
})