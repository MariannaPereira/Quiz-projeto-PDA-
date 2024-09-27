const perguntas = document.getElementById("pergunta");
const opcoes = document.querySelectorAll('.opcao');
const botao = document.getElementById('resposta1');
// dados de pergunta e respostas
const pergunta = "Qual a fusão potara de Goku e Vegeta?";
const respostas = ["Vegetto", "Gogeta", "Gotenks", "Gogeto"];
const respostaCerta = 0;
//função que mostra a pergunta e define o conteudo do texto da constante Perguntas como o feito na constante pergunta
function mostrarPergunta(){
    perguntas.textContent = pergunta;

    opcoes.forEach(function (opcao, index){
    opcao.textContent = respostas [index];
    
    });
}   //coloca o conteúdo do texto de cada botão de resposta
document.getElementById('resposta1').textContent = respostas[0];
document.getElementById('resposta2').textContent = respostas[1];
document.getElementById('resposta3').textContent = respostas[2];
document.getElementById('resposta4').textContent = respostas[3];
// coloca um evento de clique a todos os botões de resposta
document.getElementById('resposta1').onclick = () => verificarResposta(0);
document.getElementById('resposta2').onclick = () => verificarResposta(1);
document.getElementById('resposta3').onclick = () => verificarResposta(2);
document.getElementById('resposta4').onclick = () => verificarResposta(3);

function verificarResposta(indiceResposta) {
    if (indiceResposta === respostaCerta) {
        botao.style.backgroundColor= "green";
    } else {
        alert("Errado! Tente novamente.");
    }
}

const questions = [
    {questao: "Qual dessas opções NÃO é uma linguagem de programação? ", opcoes:["HTML", "Javascript","Python","C#"], resposta:0},
    {questao: "Qual desses é a nomenclatura de 'html'?", opcoes:["Hypertext Makeup Language","Hypertext Training Mode Language","HyperText Markup Language", "HyperText Madeup Language"], resposta:2},
    {questao:"Quais as ccaracterísticas a seguir são as características de 'let'?", opcoes:["Pode ser declarado e atualizado","Pode ser redefinido, mas não pode haver outra declaração", "Sempre usado em valores imutáveis", "Sempre usado em valores imutáveis e não pode haver outra declaração"], resposta:1}

]

questions()
 

export default questions;