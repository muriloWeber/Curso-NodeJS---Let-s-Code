/*
Crie uma função para gerar um número inteiro aleatório entre -10 e 10. 
Em seguida, utilize a função map e a função criada para construir um array 
com 20 números inteiros aleatórios entre -10 e 10.
*/


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const numsAleatorio = new Array(20);

numsAleatorio.fill(0);

const inclui = numsAleatorio.map(() => randomIntFromInterval(-10, 10));

console.log(inclui);

