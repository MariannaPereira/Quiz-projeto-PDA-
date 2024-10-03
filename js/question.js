const perguntas = [
    {
        pergunta: "1. FÁCIL: Qual é a tag HTML usada para definir um parágrafo?",
        respostas: ["<p>", "<paragraph>", "<para>", "<text>"],
        correta: 0
    },
    {
        pergunta: "2. FÁCIL: Qual é a propriedade CSS usada para mudar a cor do texto?",
        respostas: ["color", "text-color", "font-color", "text-style"],
        correta: 0
    },
    {
        pergunta: "3. FÁCIL: Qual método JavaScript é usado para adicionar um novo elemento ao final de um array?",
        respostas: ["add()", "append()", "push()", "insert()"],
        correta: 2
    },
    {
        pergunta: "4. MÉDIO: Qual atributo HTML é usado para adicionar uma descrição a uma imagem?",
        respostas: ["title", "alt", "description", "caption"],
        correta: 1
    },
    {
        pergunta: "5. MÉDIO: Qual é o seletor CSS usado para selecionar todos os elementos <div> em um documento?",
        respostas: [".div", "#div", "div", "*div"],
        correta: 2
    },
    {
        pergunta: "6. MÉDIO: Qual tag é usada para criar um link em HTML?",
        respostas: ["<'a'>", "<a.>", "<a>", "</a>"],
        correta: 2
    },
    {
        pergunta: "7. DÍFICIL: O que faz o método Array.prototype.flat()?",
        respostas: [ "Converte um array em string", "Achata arrays aninhados", "Ordena os elementos do array", "Remove elementos duplicados"],
        correta: 1
    }
];

let indiceatual = 0; // indíce da pergunta no momento.
let score = 0; // contagem das respostas corretas ex: 1/7
document.getElementById("start-button").onclick = function() { // funcção que esconde a tela de inicio e faz aparecer a da quiz, começando-o
    document.getElementById("welcome").style.display = "none"; 
    document.getElementById("quiz").style.display = "block"; 
    iniciarQuiz(); 
};
let nome=prompt('Insira seu nome:');
function iniciarQuiz() {
    mostrarPergunta(); // exibe a primeira pergunta
}
function mostrarPergunta() { // mostra a pergunta atual
    const perguntaAtual = perguntas [indiceatual];
    document.getElementById("pergunta").innerText = perguntaAtual.pergunta;
    const opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = ""; // Limpa opções anteriores

    // Cria botão de respostas
    perguntaAtual.respostas.forEach((resposta, index) => {
        const botao = document.createElement("button");
        botao.innerText = resposta;
        botao.onclick = function() { verificarResposta(index); }; // Verifica a resposta
        opcoes.appendChild(botao);
    });
}
function verificarResposta(indiceSelecionado) {
    const perguntaAtual = perguntas [indiceatual];
    if (indiceSelecionado === perguntaAtual.correta) {
        alert("Corretíssimo!");
        score++; //acrescenta pontuação
    } else {
        alert("Errado! A resposta correta era: " + perguntaAtual.respostas[perguntaAtual.correta]);
    }
// a pontuação é atualizada
    document.getElementById("pontuacao").innerText = "Pontuação: " + score;

    indiceatual++; // segue para a próxima pergunta
    if (indiceatual < perguntas.length) {
        mostrarPergunta(); // Mostra a próxima pergunta
    } else {
        alert(`Parabéns ${nome}! Você completou o quiz! Sua pontuação final é: ` + score + "/" + perguntas.length);
        // Reinicia o quiz se necessário
        indiceatual = 0; // Reinicia o índice
        score = 0; // Reinicia a pontuação
        document.getElementById("welcome").style.display = "block"; // Mostra a tela de boas-vindas novamente
        document.getElementById("quiz").style.display = "none"; // Esconde o quiz
        document.getElementById("pontuacao").innerText = ""; // Limpa a pontuação
    }
}
