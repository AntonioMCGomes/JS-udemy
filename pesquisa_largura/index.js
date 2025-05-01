function bfs(grafo, inicio) {
    let visitados = new Set(); // Conjunto para acompanhar os nós visitados
    let fila = [inicio]; // Fila para armazenar os nós a serem explorados

    let resultados = []

    visitados.add(inicio); // Marcar o nó inicial como visitado
  
    while (fila.length > 0) {
      let noAtual = fila.shift(); // Retira o primeiro elemento da fila
      resultados.push(noAtual); // Processa o nó atual (exemplo: imprime)
      
      // Explora os vizinhos
      for (let vizinho of grafo[noAtual]) {
        if (!visitados.has(vizinho)) {
          visitados.add(vizinho);
          fila.push(vizinho);
        }
      }
    }
    return resultados
  }
  
  // Exemplo de uso
  const grafo = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
  };
  
  console.log("Ordem de exploração BFS:");
  document.writeln(bfs(grafo, 'A').join('-->'));

  /*
  
    Explicação:
      - Estrutura de dados:- O grafo é representado como um objeto, onde os nós são as chaves e os vizinhos são arrays.

      - fila é usada para garantir que os nós sejam explorados na ordem correta (FIFO).

      - visitados é um conjunto para evitar visitar o mesmo nó mais de uma vez.

    Lógica:
      - Começamos com o nó inicial (inicio) e marcamos como visitado.

      - Exploramos os vizinhos e adicionamos os não visitados à fila.

      - Continuamos até que todos os nós conectados ao inicial sejam processados.

  
  */