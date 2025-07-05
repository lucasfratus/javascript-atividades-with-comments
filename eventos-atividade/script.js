// 1. Selecionando o elemento com o id 'botao' e atribuindo-o à variável 'botao'.
// 'botao' é o botão que, quando clicado, acionará a troca de temas.
const botao = document.getElementById('botao');

// 2. Selecionando o elemento com o id 'painel' e atribuindo-o à variável 'painel'.
// 'painel' é o elemento onde a mensagem de troca de tema será exibida.
const painel = document.getElementById('painel');

// 3. Adicionando um ouvinte de evento 'click' ao 'botao'.
// Quando o botão for clicado, a função anônima dentro do addEventListener será executada.
botao.addEventListener('click', () => {
    // 4. Trocando a classe 'escuro' no elemento 'body'.
// Se a classe 'escuro' já estiver presente no body, ela será removida, caso contrário, será adicionada.
// O 'toggle' é uma maneira conveniente de alternar entre adicionar e remover uma classe.
    document.body.classList.toggle('escuro');

    // 5. Verificando se a classe 'escuro' está presente no body.
    // A função 'contains' retorna 'true' se a classe 'escuro' estiver presente, e 'false' caso contrário.
    const escuroAtivo = document.body.classList.contains('escuro');

    // 6. Alterando o texto do botão com base no estado atual do tema.
// Se o tema escuro estiver ativo (escuroAtivo === true), o texto do botão será "Alterne para o modo claro".
// Caso contrário, será "Alterne para o modo escuro".
    botao.textContent = escuroAtivo ? 'Alterne para o modo claro' : 'Alterne para o modo escuro';

    // 7. Alterando o texto do painel com base no estado atual do tema.
// Se o tema escuro estiver ativo (escuroAtivo === true), o painel exibirá "Tema escuro ativado!".
// Caso contrário, o painel exibirá "Tema claro ativado!".
    painel.textContent = escuroAtivo ? 'Tema escuro ativado!' : 'Tema claro ativado!';
});
