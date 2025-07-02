const input = document.getElementById('input-tarefa');
const botaoAdicionar = document.getElementById('adicionar');
const listaTarefas = document.getElementById('lista-tarefas');

// adicionar tarefa na lista
botaoAdicionar.addEventListener('click', () => {
  const tarefa = input.value.trim();
  if (tarefa) { // se o input nao for vazio, adiciona na lista
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = tarefa;

    // adicionar opcao de remover tarefa
    const remover = document.createElement('span');
    remover.textContent = 'X';
    remover.classList.add('remover');
    remover.addEventListener('click', () => {
      listaTarefas.removeChild(li);
    });

    li.append(span);
    li.appendChild(remover);
    listaTarefas.appendChild(li);
    input.value = '';
  }
});