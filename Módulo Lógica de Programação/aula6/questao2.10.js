/*
Pegue a lista gerada no exercício anterior e transforme cada um dos itens dessa lista em um float.

OBS: Não é para alterar o programa anterior, mas sim a lista gerada por ele.
*/

const lista = [ '5', '1', '4', '2', '3' ];

const listaFloat = lista.map(x => parseFloat(x));

console.log(listaFloat);