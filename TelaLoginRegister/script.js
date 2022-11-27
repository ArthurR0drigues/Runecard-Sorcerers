function cadastrar(){
    let nomeusuario = document.querySelector("#usernameinput").value
    let senha = document.querySelector("#passwordinput").value

    let usuario = {
        nomeusuario: nomeusuario,
        senha: senha
    };

    let json = JSON.stringify(usuario)
    localStorage.setItem(nomeusuario, json)
    console.log(nomeusuario + " foi adicionado com sucesso")
    alert ("Conta criada com sucesso!")
    window.location.href = "telalogin.html"
}

function login(){
    let status = document.querySelector("#status")
    console.log(status)

    let nomeusuario = document.querySelector("#usernameinput").value
    let senha = document.querySelector("#passwordinput").value
    let usuario = localStorage.getItem(nomeusuario)
    let dados = JSON.parse(usuario)
    console.log(dados)

    if (usuario == null){
        console.log("dados digitados: " + dados)
        console.log("usuario nao existe")
        status.textContent = "usuario nao existe"
        status.style.border = "1px solid red"
        status.style.width = "50px"
        status.style.textAllign = "center"
        status.style.padding = "5px"
        status.style.borderRadius = "15px"
        return
    }

    if (nomeusuario == dados.nomeusuario && senha == dados.senha){
        status.textContent = "login efetuado"
        console.log("login efetuado")
        window.location.href = "Projeto/index.html"
    }
    
    else{
        console.log("erro")
        console.log("dados digitados: " + dados.nomeusuario)
        status.textContent = "erro"
        status.style.border = "1px solid red"
        status.style.width = "50px"
        status.style.textAllign = "center"
        status.style.padding = "5px"
        status.style.borderRadius = "15px"
    }
}