function filtrarNotasAprovacao(notas) {
    // Criando um novo array para armazenar as notas aprovadas
    let notasAprovadas = [];
    
    // Iterando sobre o array de notas
    for (let i = 0; i < notas.length; i++) {
        // Verificando se a nota é maior ou igual a 6.0
        if (notas[i] >= 6.0) {
            // Adicionando a nota ao novo array se for aprovada
            notasAprovadas.push(notas[i]);
        }
    }
    
    // Retornando o array de notas aprovadas
    return notasAprovadas;
}

// Exemplo de uso da função
let notasAlunos = [5.5, 7.0, 6.5, 8.0, 4.5];
let aprovados = filtrarNotasAprovacao(notasAlunos);

console.log(aprovados); // Saída: [7.0, 6.5, 8.0]