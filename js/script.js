var quantidade = document.querySelector("quantidade");
var questoes = document.querySelector("questoes");
var respostas = document.querySelector("respostas");

var perguntaAtual = 0;

function carregar_pergunta(pergunta) {
  Alert(pergunta.questao);
}

//function carregarPerguntas (){
//if(quantidade === respostas){
//console.log("Você acertou!")
//}else{
// console.log("Poxa! Não foi dessa vez! Tente novamente.")
// }
//}
//carregarPerguntas()

function carregarPerguntas(questions) {
  quantidade.innerHTML;
  console.log(questions);
}
console.log(questions);

function botaoPrincipal(reiniciar) {
  console.log("botão clicado");
}
botaoPrincipal();
function iniciarQuiz(){
 let telaQuiz = document.getElementById("telaQuiz");
 telaQuiz.style.display = "none";
 if(telaQuiz.style.display==="none"){
  telaQuiz.style.display="block" //verificar o tipo de displayf
 }
}

// //Esse é a função onclick (quando clica no botão ele tem uma ação), falta fazer o looping
// const botaoComeca = document.getElementById("start-btn");
// const inicio = document.getElementById("quiz-container");
// const telaQuiz = document.getElementById("telaQuiz");
// //add um evento quando o botão começar é clicado
// botaoComeca.addEventListener("click", function () {
//   //esconde a tela inicial
//   //inicio.style.display = "none";
//   //mostra a tela de perguntas
//   telaQuiz.style.display = "block";
//   //carrega a pergunta e as respostas
//   mostrarPergunta();
// });
