/*
Criar uma função media de 2 números utilizando apenas a função calcular; media(a,b)

Criar uma função que diz qual foi o valor de 10% de desconto para um produto passando o seu preço. desconto(preco)
*/

const prompt = require("prompt-sync")({ sigint: true });

const choice = prompt("Selecione a operação desejada (+, -, * ou /: ");
const var1 = parseFloat(prompt("Digite a primeira variável: "));
const var2 = parseFloat(prompt("Digite a segunda variável: "));

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar  = (a, b) => a * b;
const dividir = (a, b) => b > 0 ? a / b : NaN;
const calcular = (operacao, a, b) => operacao(a,b); 

const calculadora = (choice) => {
    if (choice === "+") return calcular(somar, var1, var2);
    if (choice === "-") return calcular(subtrair, var1, var2);
    if (choice === "*") return calcular(multiplicar, var1, var2);
    if (choice === "/") return calcular(dividir, var1, var2);
}

console.log(calculadora(choice, var1, var2));