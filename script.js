function cadastrar() {
    let nomeusuario = document.querySelector("#usernameinput").value
    let senha = document.querySelector("#passwordinput").value

    if (senha.length > 5 && senha.length < 11 && senha != null && nomeusuario.length > 1) {
        localStorage.setItem(senha, nomeusuario);
        window.location.href = "telalogin.html"
        localStorage.removeItem('colecao');
        localStorage.removeItem('baralho');
        localStorage.removeItem('cartas-jogo');
        localStorage.removeItem('dinheiro');
        localStorage.removeItem('loja');
        localStorage.removeItem('lojaClass');
    }
    else {
        alert('Senha ou usuário não se adequa aos requisitos');
    }
};
function pular() {
    window.location.href = "telalogin.html";
};

function voltar() {
    window.location.href = "index.html";
};

function login() {
    let status = document.querySelector("#status")
    let senha = document.querySelector("#passwordinput").value

    if (localStorage.getItem(senha) != null) {
        let acess = localStorage.getItem(senha);
        localStorage.setItem('user', acess);
        status.textContent = "login efetuado!"
        setTimeout(() => {
            window.location.href = "lobby.html"
        }, 1000);
        
        let carregarDados = []; 
        carregarDados = JSON.parse(localStorage.getItem(`"${acess}"`)); 
        localStorage.setItem('colecao', carregarDados[0]);
        localStorage.setItem('baralho', carregarDados[1]);
        localStorage.setItem('cartas-jogo', carregarDados[2]);
        localStorage.setItem('dinheiro', carregarDados[3]);
        localStorage.setItem('loja', carregarDados[4]);
        localStorage.setItem('lojaClass', carregarDados[5]);
    }
    else {
        status.textContent = "Senha não encontrada!"
    }
}
