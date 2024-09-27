const botaoComeca = document.getElementById('start-btn');
const inicio = document.getElementById('quiz-container');
const telaQuiz = document.getElementById('telaQuiz');
//add um evento quando o botão começar é clicado
botaoComeca.addEventListener('click', function(){
    //esconde a tela inicial
    inicio.style.display = 'none';
    //mostra a tela de perguntas
    telaQuiz.style.display ='block';
    //carrega a pergunta e as respostas
    mostrarPergunta();
})
