// 1. Selecionando os elementos do DOM (documento) pela ID
const input = document.getElementById('input-tarefa'); // O campo de input onde o usuário digita a tarefa
const botaoAdicionar = document.getElementById('adicionar'); // O botão para adicionar a tarefa
const listaTarefas = document.getElementById('lista-tarefas'); // A lista onde as tarefas serão exibidas

// 2. Adicionando um ouvinte de evento no botão de adicionar
// Quando o botão for clicado, a função anônima será executada.
botaoAdicionar.addEventListener('click', () => {
  const tarefa = input.value.trim(); // Obtém o valor do input e remove espaços extras
  if (tarefa) { // Verifica se o campo de input não está vazio (tarefa contém algum valor)
    
    // 3. Criando um novo item de lista (li)
    const li = document.createElement('li'); // Cria um novo elemento <li> para a tarefa

    // 4. Criando o elemento de texto da tarefa
    const textoTarefa = document.createElement('span'); // Cria o elemento <span> para o texto da tarefa
    textoTarefa.textContent = tarefa; // Define o conteúdo do <span> com a tarefa digitada

    // 5. Criando um container para os botões (editar e remover)
    const botoesContainer = document.createElement('div'); // Cria um container <div> para os botões
    botoesContainer.className = 'botoes-container'; // Adiciona uma classe CSS ao container para estilização

    // 6. Criando o botão de "Editar"
    const editar = document.createElement('button'); // Cria o botão de editar
    editar.textContent = 'Editar'; // Define o texto do botão como "Editar"
    editar.className = 'editar'; // Adiciona a classe "editar" para estilizar o botão

    // 7. Adicionando o evento de clique para o botão de "Editar"
    editar.addEventListener('click', () => {
      if (editar.textContent === 'Editar') { // Verifica se o botão está em modo "Editar"
        textoTarefa.contentEditable = true; // Torna o texto da tarefa editável
        textoTarefa.focus(); // Foca no texto para o usuário começar a digitar
        editar.textContent = 'Salvar'; // Muda o texto do botão para "Salvar"
        editar.className = 'salvar'; // Muda a classe para 'salvar' para alteração de estilo
      } else {
        textoTarefa.contentEditable = false; // Desativa a edição do texto
        editar.textContent = 'Editar'; // Volta o texto do botão para "Editar"
        editar.className = 'editar'; // Restaura a classe 'editar' (estilo padrão)
      }
    });

    // 8. Criando o botão de "Deletar"
    const remover = document.createElement('button'); // Cria o botão de deletar
    remover.textContent = 'Deletar'; // Define o texto do botão como "Deletar"
    remover.className = 'remover'; // Adiciona a classe 'remover' para estilizar o botão

    // 9. Adicionando o evento de clique para o botão de "Deletar"
    remover.addEventListener('click', () => {
      listaTarefas.removeChild(li); // Remove a tarefa da lista quando o botão for clicado
    });

    // 10. Adicionando os botões no container
    botoesContainer.appendChild(editar); // Adiciona o botão de editar ao container
    botoesContainer.appendChild(remover); // Adiciona o botão de remover ao container

    // 11. Adicionando o texto da tarefa e o container de botões ao item de lista (li)
    li.appendChild(textoTarefa); // Adiciona o texto da tarefa ao item de lista
    li.appendChild(botoesContainer); // Adiciona o container com os botões ao item de lista

    // 12. Adicionando o item de lista à lista de tarefas (ul)
    listaTarefas.appendChild(li); // Insere o novo item de lista na lista de tarefas visível

    // 13. Limpando o campo de input após adicionar a tarefa
    input.value = ''; // Limpa o campo de input para o usuário poder adicionar uma nova tarefa
  }
});
