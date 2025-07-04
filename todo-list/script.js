const input = document.getElementById('input-tarefa');
const botaoAdicionar = document.getElementById('adicionar');
const listaTarefas = document.getElementById('lista-tarefas');

botaoAdicionar.addEventListener('click', () => {
  const tarefa = input.value.trim();
  if (tarefa) { // se o input nao for vazio, adiciona na lista
    const li = document.createElement('li');
    
    const textoTarefa = document.createElement('span'); // cria o span da tarefa
    textoTarefa.textContent = tarefa;

    const botoesContainer = document.createElement('div'); // cria a div que vai conter os botoes de editar/salvar e remover
    botoesContainer.className = 'botoes-container';

    // botoes de editar e salvar
    const editar = document.createElement('button');
    editar.textContent = 'Editar';
    editar.className = 'editar';

    editar.addEventListener('click', () => {
      if (editar.textContent === 'Editar') {
        textoTarefa.contentEditable = true; // forna o texto editavel
        textoTarefa.focus(); // foca no texto para o usuário já poder digitar
        editar.textContent = 'Salvar'; // muda o texto do botão para "Salvar"
        editar.className = 'salvar'; // muda a classe para .salvar 
      } else {
        textoTarefa.contentEditable = false; // trava a edição do texto
        editar.textContent = 'Editar'; // volta o texto do botão para "Editar"
        editar.className = 'editar'; // volta a classe .editar (azul)
      }
    });

    // botao remover
    const remover = document.createElement('button');
    remover.textContent = 'Deletar';
    remover.className = 'remover';
    remover.addEventListener('click', () => {
      listaTarefas.removeChild(li);
    });

    botoesContainer.appendChild(editar);
    botoesContainer.appendChild(remover);

    li.appendChild(textoTarefa);
    li.appendChild(botoesContainer);

    listaTarefas.appendChild(li);
    input.value = '';
  }
});