/**
2. Faça um algoritmo que mostre a tabuada de qualquer número escolhido pelo
usuário (considerar tabuada do número 1 ao 10). 
*/

const prompt = require("prompt-sync")({ sigint: true });

let valor1 = parseInt(prompt("Digite o número que deseja ver a tabuada: "));
let valor2 = 1;

while (valor2 <= 10) {
    console.log(valor1 * valor2);
    valor2++
}