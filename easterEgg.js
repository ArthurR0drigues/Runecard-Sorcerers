let primeiraVez = true;
let mensagemBotaoEl = document.querySelector('#easter-egg');
let posMensagem = "\nVejo que é curioso, aqui está como recompensa:\nWMFBA, esse é o código secreto, recomendo estudar um pouco de cifra de césar 😈"
let messagem = "\nNão se preocupe, isso é apenas um erro no codigo-fonte 😫";

mensagemBotaoEl.addEventListener('click', easterEggMensagem)
function easterEggMensagem()
{
   if (primeiraVez) {alert(messagem)}
   else {alert(posMensagem)}
   primeiraVez = false;
}
