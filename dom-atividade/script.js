/*
Crie um pequeno script que, ao carregar a página, modifique pelo DOM o visual do cartão:
altere o fundo do card, troque a cor e o tamanho da fonte do título e coloque a bio em itálico.
Depois crie um novo <p> com o texto de sua escolha, deixe-o também em itálico e adicione-o ao
final do cartão. Use as propriedades .style para as cores/tipografia e .innerText para o conteúdo.
*/

const card = document.getElementById('cartao');
const nome = document.getElementById('nome');
const bio = document.getElementById('bio');
const p = document.createElement("p");

card.style.background = 'green';
card.style.color = 'black';
bio.style.fontStyle = 'italic';

p.innerText = "Novo texto";
p.style.fontStyle = "italic";
card.appendChild(p);