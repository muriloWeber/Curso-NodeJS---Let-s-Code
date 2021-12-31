const criarFila = () => {
  let fila = [];

  return {
    adicionar: (elemento) => {
      fila = [...fila, elemento]
    },
    remover: () => {
      const [primeiro, ...resto] = fila;
      fila = resto;
      return primeiro;
    },
    tamanho: () => fila.length,
  }
}

const fila = criarFila();

fila.adicionar(100);
fila.adicionar(400);

const removido = fila.remover();
console.log(removido);

const removido2 = fila.remover();
console.log(removido2);

const removido3 = fila.remover();
console.log(removido3);

// queue = enfileirar
// dequeue = desenfileirar