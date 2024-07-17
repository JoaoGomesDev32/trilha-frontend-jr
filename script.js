// Função para editar informações pessoais
function editarInformacoes() {
    const nome = document.getElementById('nome');
    const idade = document.getElementById('idade');

    const novoNome = prompt("Edite seu nome:", nome.textContent);
    const novaIdade = prompt("Edite sua idade:", idade.textContent);

    if (novoNome !== null) nome.textContent = novoNome;
    if (novaIdade !== null) idade.textContent = novaIdade;
}

// Função para editar motivações
function editarMotivacoes() {
    const motivacoesTexto = document.getElementById('motivacoes-texto');
    const novaMotivacao = prompt("Edite sua motivação:", motivacoesTexto.textContent);

    if (novaMotivacao !== null) motivacoesTexto.textContent = novaMotivacao;
}