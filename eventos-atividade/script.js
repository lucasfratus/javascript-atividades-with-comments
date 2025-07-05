const botao = document.getElementById('botao');
const painel = document.getElementById('painel');

botao.addEventListener('click', () => {
    document.body.classList.toggle('escuro');

    const escuroAtivo = document.body.classList.contains('escuro');
    botao.textContent = escuroAtivo ? 'Alterne para o modo claro' : 'Alterne para o modo escuro';
    painel.textContent = escuroAtivo ? 'Tema escuro ativado!' : 'Tema claro ativado!';
});