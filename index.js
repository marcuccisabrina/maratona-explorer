const elementoResposta = document.querySelector(".resposta")
const inputPergunta = document.querySelector(".inputPergunta")
const buttonPerguntar = document.querySelector('.buttonPerguntar')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora..",
  "oxi, ta doida(o)?",
  "Minhas fontes dizem que não.",
  "Minhas fontes dizem que sim.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "KKKKKKKKKKKKKKKKKK não.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Sinais apontam que sim.",
  "Hmmmmmmmmmm... não."
]

// clicar em fazer pergunta
function fazerPergunta() {

  if (inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  // gerar numero aletorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}




