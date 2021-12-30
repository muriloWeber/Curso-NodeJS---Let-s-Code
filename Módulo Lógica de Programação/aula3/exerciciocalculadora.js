const prompt = require("prompt-sync")({ sigint: true });
 
const valor1 = parseFloat(prompt("Digite o primeiro valor: "));

const operacao = prompt("Digite a operação desejada(+, -, * ou /): ");

const valor2 = parseFloat(prompt("Digite o segundo valor: "));

switch (operacao) {
    case "+":
        const resultado = valor1 + valor2
        console.log("O resultado da adição é " + resultado);
        break;
    case "-":
        const resultado2 = valor1 - valor2
        console.log("O resultado da subtração é " + resultado2);
        break;
    case "*":
        const resultado3 = valor1 * valor2
        console.log("O resultado da multiplicação é " + resultado3);
        break;
    case "/":
        const resultado4 = valor1 / valor2
        console.log("O resultado da divisão é " + resultado4);
        break;
    default:
        console.log("Esta não é uma operação válida");
        break;
}
