/*
Crie um pequeno script que, ao carregar a página, modifique pelo DOM o visual do cartão:
altere o fundo do card, troque a cor e o tamanho da fonte do título e coloque a bio em itálico.
Depois crie um novo <p> com o texto de sua escolha, deixe-o também em itálico e adicione-o ao
final do cartão. Use as propriedades .style para as cores/tipografia e .innerText para o conteúdo.
*/

// 1. Selecionando o elemento com o id 'cartao' e atribuindo à variável 'card'.
// O 'card' é o cartão onde iremos aplicar as alterações de estilo.
const card = document.getElementById('cartao');

// 2. Selecionando o elemento com o id 'nome' e atribuindo à variável 'nome'.
// Esta variável pode ser usada para modificar o nome, mas no código atual não é utilizada.
const nome = document.getElementById('nome');

// 3. Selecionando o elemento com o id 'bio' e atribuindo à variável 'bio'.
// Este é o elemento onde aplicaremos o estilo de itálico para a bio do usuário.
const bio = document.getElementById('bio');

// 4. Criando um novo elemento <p> que será adicionado ao final do cartão.
const p = document.createElement("p");

// 5. Alterando o fundo do 'card' para a cor verde.
// Utilizamos a propriedade .style.background para definir a cor de fundo do cartão.
card.style.background = 'green';

// 6. Alterando a cor do texto do 'card' para preto.
// A propriedade .style.color é usada para definir a cor do texto dentro do cartão.
card.style.color = 'black';

// 7. Alterando o estilo da fonte da bio para itálico.
// A propriedade .style.fontStyle aplica o estilo de itálico ao texto da bio.
bio.style.fontStyle = 'italic';

// 8. Definindo o texto dentro do novo parágrafo (<p>) como "Novo texto".
// Usamos a propriedade .innerText para definir o conteúdo textual do parágrafo.
p.innerText = "Novo texto";

// 9. Aplicando o estilo de itálico ao novo parágrafo (<p>).
// Usamos .style.fontStyle para alterar a tipografia do texto para itálico.
p.style.fontStyle = "italic";

// 10. Adicionando o novo parágrafo <p> ao final do cartão.
// Usamos .appendChild() para inserir o novo elemento <p> dentro do 'card'.
card.appendChild(p);
