/*
1. Faça um algoritmo que mostre a tabuada do número 5. (considerar tabuada do
número 1 ao 10).
 */

const prompt = require("prompt-sync")({ sigint: true });

const valor1 = 5
let valor2 = 1

while (valor2 < 11) {
    console.log(valor1 * valor2);
    valor2++
}
